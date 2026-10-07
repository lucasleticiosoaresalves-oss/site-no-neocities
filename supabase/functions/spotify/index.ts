// funcao spotify: pega as musicas da "minha playlist" pro site
// /spotify = lista, /spotify/login = conectar, /spotify/callback = volta do spotify
// precisa dos secrets SPOTIFY_CLIENT_ID e SPOTIFY_CLIENT_SECRET

import { createClient } from 'npm:@supabase/supabase-js@2';

const URL_PROJETO = Deno.env.get('SUPABASE_URL')!;
const CLIENT_ID = Deno.env.get('SPOTIFY_CLIENT_ID') ?? '';
const CLIENT_SECRET = Deno.env.get('SPOTIFY_CLIENT_SECRET') ?? '';
const NOME_PLAYLIST = Deno.env.get('SPOTIFY_PLAYLIST') ?? 'minha playlist';
const REDIRECT = `${URL_PROJETO}/functions/v1/spotify/callback`;
const MAXIMO_MUSICAS = 300;
const VALIDADE_CACHE_MS = 10 * 60 * 1000;
const API = 'https://api.spotify.com/v1';

// chaves do projeto
function chaveDoProjeto(antiga: string, nova: string): string {
    const valor = Deno.env.get(antiga);
    if (valor) return valor;
    const dicionario = JSON.parse(Deno.env.get(nova) ?? '{}');
    return dicionario.default ?? Object.values(dicionario)[0];
}

const CHAVE_SECRETA = chaveDoProjeto('SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_SECRET_KEYS');
const CHAVE_PUBLICA = chaveDoProjeto('SUPABASE_ANON_KEY', 'SUPABASE_PUBLISHABLE_KEYS');
const banco = createClient(URL_PROJETO, CHAVE_SECRETA, { auth: { persistSession: false } });

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type',
};

function json(dados: unknown, status = 200) {
    return new Response(JSON.stringify(dados), {
        status,
        headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=120' },
    });
}

function texto(mensagem: string, status = 200) {
    return new Response(mensagem, { status, headers: { ...CORS, 'Content-Type': 'text/plain; charset=utf-8' } });
}

function semAcento(texto: string) {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();
}

async function lerLinha() {
    const { data, error } = await banco.from('spotify').select('*').eq('id', 1).maybeSingle();
    if (error) throw error;
    return data;
}

async function salvar(campos: Record<string, unknown>) {
    const { error } = await banco.from('spotify').upsert({ id: 1, ...campos });
    if (error) throw error;
}

// ve se e o dono
async function ehDono(token: string | null) {
    if (!token) return false;
    const cliente = createClient(URL_PROJETO, CHAVE_PUBLICA, {
        auth: { persistSession: false },
        global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data, error } = await cliente.rpc('eh_dono');
    return !error && data === true;
}

async function pedirToken(parametros: Record<string, string>) {
    const resposta = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(parametros),
    });
    const dados = await resposta.json();
    if (!resposta.ok) throw new Error(dados.error_description ?? dados.error ?? 'erro ao pedir token');
    return dados;
}

async function spotifyGet(endereco: string, accessToken: string) {
    const resposta = await fetch(endereco, { headers: { Authorization: `Bearer ${accessToken}` } });
    if (!resposta.ok) throw new Error(`o Spotify respondeu ${resposta.status} em ${new URL(endereco).pathname}`);
    return resposta.json();
}

// acha a playlist pelo nome
async function acharPlaylist(accessToken: string) {
    const procurado = semAcento(NOME_PLAYLIST);
    let endereco: string | null = `${API}/me/playlists?limit=50`;
    while (endereco) {
        const pagina = await spotifyGet(endereco, accessToken);
        const achada = (pagina.items ?? []).find((p: { name?: string }) => p?.name && semAcento(p.name) === procurado);
        if (achada) return achada;
        endereco = pagina.next;
    }
    throw new Error(`não achei a playlist "${NOME_PLAYLIST}" na sua conta do Spotify`);
}

// musicas da playlist
async function buscarPlaylist(accessToken: string) {
    const playlist = await acharPlaylist(accessToken);
    const musicas = [];
    let endereco: string | null = `${API}/playlists/${playlist.id}/items?limit=50`;
    while (endereco && musicas.length < MAXIMO_MUSICAS) {
        const pagina = await spotifyGet(endereco, accessToken);
        for (const entrada of pagina.items ?? []) {
            // item ou track
            const faixa = entrada.item ?? entrada.track;
            if (!faixa?.name) continue;
            musicas.push({
                titulo: faixa.name,
                artista: (faixa.artists ?? []).map((a: { name: string }) => a.name).join(', '),
                album: faixa.album?.name ?? '',
                capa: faixa.album?.images?.at(-1)?.url ?? '',
                link: faixa.external_urls?.spotify ?? '',
                adicionada: entrada.added_at,
            });
        }
        endereco = pagina.next;
    }
    return {
        playlist: { nome: playlist.name, link: playlist.external_urls?.spotify ?? '' },
        musicas: musicas.slice(0, MAXIMO_MUSICAS),
    };
}

async function atualizar(refreshToken: string) {
    const tokens = await pedirToken({ grant_type: 'refresh_token', refresh_token: refreshToken });
    const { playlist, musicas } = await buscarPlaylist(tokens.access_token);
    const atualizado = new Date().toISOString();
    // as vezes vem token novo
    await salvar({ refresh_token: tokens.refresh_token ?? refreshToken, musicas, playlist, atualizado });
    return { playlist, musicas, atualizado };
}

Deno.serve(async req => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
    const url = new URL(req.url);

    try {
        // conectar
        if (url.pathname.endsWith('/login')) {
            if (!CLIENT_ID || !CLIENT_SECRET) return texto('Faltam os segredos SPOTIFY_CLIENT_ID e SPOTIFY_CLIENT_SECRET no Supabase.', 500);
            if (!(await ehDono(url.searchParams.get('token')))) return texto('Só o dono do site pode conectar o Spotify.', 403);
            const estado = crypto.randomUUID();
            await salvar({ estado });
            const autorizar = new URL('https://accounts.spotify.com/authorize');
            autorizar.search = new URLSearchParams({
                client_id: CLIENT_ID,
                response_type: 'code',
                redirect_uri: REDIRECT,
                scope: 'playlist-read-private playlist-read-collaborative',
                state: estado,
            }).toString();
            return Response.redirect(autorizar.toString(), 302);
        }

        // volta do spotify
        if (url.pathname.endsWith('/callback')) {
            const linha = await lerLinha();
            const estado = url.searchParams.get('state');
            if (!linha?.estado || estado !== linha.estado) return texto('Pedido inválido. Tente conectar de novo pela área de admin.', 403);
            const codigo = url.searchParams.get('code');
            if (!codigo) return texto(`O Spotify não autorizou (${url.searchParams.get('error') ?? 'cancelado'}).`, 400);
            const tokens = await pedirToken({ grant_type: 'authorization_code', code: codigo, redirect_uri: REDIRECT });
            await salvar({ refresh_token: tokens.refresh_token, estado: null });
            const { playlist, musicas } = await buscarPlaylist(tokens.access_token);
            await salvar({ musicas, playlist, atualizado: new Date().toISOString() });
            return texto(`Pronto! A playlist "${playlist.nome}" (${musicas.length} músicas) está conectada ao Quarto do Lucas. Pode fechar esta aba.`);
        }

        // lista pro site
        const linha = await lerLinha();
        if (!linha?.refresh_token) return json({ conectado: false, musicas: [] });
        const velho = !linha.atualizado || Date.now() - new Date(linha.atualizado).getTime() > VALIDADE_CACHE_MS;
        if (!velho) return json({ conectado: true, playlist: linha.playlist, musicas: linha.musicas, atualizado: linha.atualizado });
        try {
            return json({ conectado: true, ...(await atualizar(linha.refresh_token)) });
        } catch (erro) {
            console.error(erro);
            // se der erro usa a ultima lista
            return json({ conectado: true, playlist: linha.playlist, musicas: linha.musicas, atualizado: linha.atualizado });
        }
    } catch (erro) {
        console.error(erro);
        return json({ erro: erro instanceof Error ? erro.message : String(erro) }, 500);
    }
});
