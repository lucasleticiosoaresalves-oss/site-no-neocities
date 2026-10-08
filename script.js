'use strict';

// quarto do lucas
// textos, fotos, musicas e links ficam no DADOS aqui embaixo

const DADOS = {
    nome: 'Lucas',
    // minha foto (ex: 'foto.jpg')
    foto: '',
    status: 'no meu quarto ouvindo música e fingindo que estou estudando (8)',
    endereco: 'https://quartodolucas.neocities.org/',

    // banco de dados (supabase)
    supabase: {
        url: 'https://sdwlmxvpkexggupmrzmb.supabase.co',
        chave: 'sb_publishable_iEmRii3N2Pyzq4WAbXE9Kw_xDgb11bz', // essa pode ficar publica
    },

    // last.fm (mostra o que to ouvindo no spotify)
    lastfm: {
        usuario: 'quartodolucas',
        chave: 'a0b73b3e71e4ed317924c49136a8ee1a',
    },

    // meu github (da pra mudar no admin)
    github: '',

    // emoticons do msn: :) :D :P ;) :( :'( :O :@ (H) (L) (U) (Y) (K) (*) (8) (F) (co) (I) (^) (P)
    sobre: [
        'Oi! Seja bem-vindo(a) ao meu quarto na internet. (*)',
        'Fiz este cantinho inspirado na época do orkut, do MSN e do Windows XP - quando a internet era bagunçada, colorida e cheia de personalidade. Aqui eu guardo minhas fotos, músicas, projetos e uns pensamentos aleatórios.',
        'Fique à vontade: deixe um recado, vote na enquete, desenhe no Paint e, se descobrir a senha do diário... finja que não leu nada. ;)',
    ],

    perfil: [
        ['Relacionamento', 'perguntar pro meu coração (L)'],
        ['Aniversário', 'segredo :P'],
        ['Cidade', 'Brasil'],
        ['Humor', '(H) de boa'],
        ['Interesses', 'anime, RPG, música, games, internet antiga'],
        ['Músicas', 'de tudo um pouco (veja a playlist!)'],
        ['Programas de TV', 'anime até 3h da manhã'],
        ['Paixões', 'meu quarto, meus amigos e uma boa conexão'],
        ['Idiomas', 'português, internetês e um pouco de inglês'],
    ],

    gosto: ['música alta no fone', 'RPG com os amigos', 'pixel art', 'noite de jogatina', 'sites antigos'],
    naoGosto: ['acordar cedo', 'internet caindo', 'spoiler', 'segunda-feira', 'fila'],

    // notas do perfil (0 a 3)
    notas: { confiavel: 3, legal: 3, sexy: 2 },

    sortes: [
        'Hoje é um ótimo dia para deixar um recado para alguém.',
        'Você vai encontrar uma música nova que vai ouvir 47 vezes seguidas.',
        'Alguém está pensando em você (provavelmente sua mãe, pra lavar a louça).',
        'Um amigo antigo vai aparecer online.',
        'A sorte sorri para quem arruma o quarto.',
        'Sua conexão não vai cair hoje. Talvez.',
        'Grandes ideias surgem às 3h da manhã.',
        'Hoje é dia de mudar a foto do perfil.',
        'Mande um oi pra quem você não fala há tempos.',
        'O universo conspira a favor de quem deixa recados fofos pra mim.',
        'Cuidado com spoilers hoje.',
        'Uma música vai grudar na sua cabeça o dia inteiro.',
    ],
    // cores da calculadora da sorte
    sorteCores: ['azul-bebê', 'rosa-chiclete', 'verde-limão', 'roxo-galáxia', 'amarelo-ovo', 'preto-emo', 'laranja-Fanta', 'prata-CD'],

    // amigos (icone = nome de um icone fatcow)
    amigos: [
        // ex: { nome: 'Fulano', cor: '#e85d9c', icone: 'user_ninja' },
    ],

    comunidades: [
        { nome: 'Eu odeio acordar cedo', icone: 'alarm_bell', membros: 1834221 },
        { nome: 'Eu abro a geladeira pra pensar', icone: 'ice_cube', membros: 942113 },
        { nome: 'Não fui eu, foi meu eu lírico', icone: 'emotion_clown', membros: 512870 },
        { nome: 'Sou do tempo da internet discada', icone: 'phone_vintage', membros: 388104 },
        { nome: 'Eu sempre aperto F5', icone: 'arrow_refresh', membros: 201557 },
        { nome: 'RPG é vida', icone: 'dice', membros: 158392 },
        { nome: 'Eu amo música alta', icone: 'headphone', membros: 677015 },
        { nome: 'Odeio quando a internet cai', icone: 'disconnect', membros: 1290388 },
    ],

    // albuns (as fotos que posto no admin entram sozinhas)
    // ex: { id: 'praia', nome: 'Praia', fotos: [{ src: 'imagens/praia.jpg', legenda: 'praia' }] }
    albuns: [],

    // projetos (posto pelo admin)
    projetos: [],

    // musicas reserva (aparecem se o spotify nao carregar)
    // com "arquivo" toca o mp3, sem arquivo abre no youtube
    musicas: [
        { titulo: 'Numb', artista: 'Linkin Park', arquivo: '' },
        { titulo: 'Mr. Brightside', artista: 'The Killers', arquivo: '' },
        { titulo: 'Anna Júlia', artista: 'Los Hermanos', arquivo: '' },
        { titulo: 'Boulevard of Broken Dreams', artista: 'Green Day', arquivo: '' },
        { titulo: 'Razões e Emoções', artista: 'NX Zero', arquivo: '' },
        { titulo: 'Toxic', artista: 'Britney Spears', arquivo: '' },
        { titulo: 'Ainda Gosto Dela', artista: 'Skank', arquivo: '' },
        { titulo: 'Chop Suey!', artista: 'System of a Down', arquivo: '' },
    ],

    // sem link aparece "em breve"
    redes: [
        { nome: 'Instagram', icone: 'camera', usuario: '@seu_usuario', link: '' },
        { nome: 'TikTok', icone: 'music', usuario: '@seu_usuario', link: '' },
        { nome: 'Spotify', icone: 'headphone', usuario: 'minha playlist', link: '' },
        { nome: 'Discord', icone: 'controller', usuario: 'seu_usuario', link: '' },
        { nome: 'Neocities', icone: 'world', usuario: 'quartodolucas', link: 'https://quartodolucas.neocities.org/' },
    ],

    // registros (escrevo pelo admin)
    registros: [],

    noticias: [],

    recadosIniciais: [],

    depoimentosIniciais: [],

    diarioInicial: [],

    enquete: {
        versao: 0,
        pergunta: 'Qual foi a melhor época da internet?',
        opcoes: [['Orkut', 0], ['MSN Messenger', 0], ['Fotolog', 0], ['Hoje em dia', 0]],
    },

    // primeira mensagem do zap
    zapBoasVindas: 'oiee! valeu por visitar meu quarto :D',

    lixeira: [
        { nome: 'trabalho_FINAL_agora_vai_v7.doc', icone: 'file_extension_doc' },
        { nome: 'foto_feia_nao_postar.jpg', icone: 'file_extension_jpg' },
        { nome: 'musica_baixada.mp3', icone: 'music' },
        { nome: 'senhas_secretas.txt', icone: 'file_extension_txt' },
        { nome: 'virus_nao_abrir.exe', icone: 'file_extension_exe' },
        { nome: 'carta_de_amor_nunca_enviada.txt', icone: 'email' },
    ],
};


// --- funcoes de ajuda ---

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];

// salva coisas no navegador
const guardar = {
    ler(chave, padrao) {
        try {
            const valor = localStorage.getItem('qdl-' + chave);
            return valor === null ? padrao : JSON.parse(valor);
        } catch { return padrao; }
    },
    salvar(chave, valor) {
        try { localStorage.setItem('qdl-' + chave, JSON.stringify(valor)); } catch { /* ignora */ }
    },
};

// --- imagens ---

// icones fatcow (imagens/icones)
function urlIcone(nome, tamanho = 16) {
    return `imagens/icones/${tamanho}/${nome}.png`;
}

function icone(nome, tamanho = 16) {
    return `<img class="ico${tamanho === 32 ? ' ico32' : ''}" src="${urlIcone(nome, tamanho)}" alt="" width="${tamanho}" height="${tamanho}">`;
}

// gifs do geocities (imagens/gifs) - [largura, altura]
const GIFS = {
    construcao: [323, 118],
    novo: [40, 20],
    email: [90, 90],
    bemvindo: [296, 76],
    livro: [160, 120],
    estrelinhas: [382, 12],
    arcoiris: [432, 14],
    coracao: [63, 52],
    notas: [99, 36],
    computador: [150, 150],
    cadeado: [112, 109],
    camera: [84, 70],
};

function gif(nome, largura) {
    const [l, a] = GIFS[nome];
    const w = largura || l;
    return `<img class="gif" src="imagens/gifs/${nome}.gif" alt="" width="${w}" height="${Math.round(a * w / l)}">`;
}

// emoticons do msn
const EMOTICONS = [
    [":'(", 'emotion_cry'], [':)', 'emotion_smile'], [':D', 'emotion_bigsmile'], [':P', 'emotion_tongue'],
    [';)', 'emotion_wink'], [':(', 'emotion_sad'], [':O', 'emotion_suprised'], [':@', 'emotion_angry'],
    ['(H)', 'emotion_cool'], ['(L)', 'heart'], ['(U)', 'heart_break'], ['(Y)', 'thumb_up'], ['(K)', 'emotion_kiss'],
    ['(*)', 'award_star_gold_1'], ['(8)', 'music'], ['(F)', 'flower'], ['(co)', 'computer'], ['(I)', 'lightbulb'],
    ['(^)', 'cake'], ['(P)', 'camera'],
];
const REGEX_EMOTICONS = new RegExp('(' + EMOTICONS
    .map(([codigo]) => codigo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|') + ')', 'gi');

function imagemEmoticon(codigo) {
    const [, nome] = EMOTICONS.find(([c]) => c.toLowerCase() === codigo.toLowerCase());
    return `<img class="ico emoticon" src="${urlIcone(nome)}" alt="${esc(codigo)}" title="${esc(codigo)}" width="16" height="16">`;
}

// escapa o texto e troca os emoticons por imagem
function textoRico(texto) {
    return String(texto).split(REGEX_EMOTICONS)
        .map((parte, i) => (i % 2 ? imagemEmoticon(parte) : esc(parte)))
        .join('');
}

function preencherIcones(raiz = document) {
    $$('img[data-ico]', raiz).forEach(img => {
        img.src = urlIcone(img.dataset.ico, Number(img.dataset.tam || 16));
    });
}

// pra ninguem colocar html nos recados
function esc(texto) {
    return String(texto).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// [b] [i] [u] igual no orkut
function formatar(texto) {
    return textoRico(texto)
        .replace(/\[b\]([\s\S]*?)\[\/b\]/gi, '<b>$1</b>')
        .replace(/\[i\]([\s\S]*?)\[\/i\]/gi, '<i>$1</i>')
        .replace(/\[u\]([\s\S]*?)\[\/u\]/gi, '<u>$1</u>')
        .replace(/\n/g, '<br>');
}

function semAcento(texto) {
    return String(texto).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function hoje() {
    return new Date().toLocaleDateString('pt-BR');
}

function numero(n) {
    return n.toLocaleString('pt-BR');
}

const CORES_AVATAR = ['#e85d9c', '#3a6ea5', '#8a5cc2', '#2f9e6b', '#e08a2f', '#c23a3a', '#1f8fb3', '#b3478a'];
function corDoNome(nome) {
    const amigo = DADOS.amigos.find(a => a.nome === nome);
    if (amigo) return amigo.cor;
    let soma = 0;
    for (const letra of nome) soma += letra.charCodeAt(0);
    return CORES_AVATAR[soma % CORES_AVATAR.length];
}

function avatar(nome, classe = '') {
    const amigo = DADOS.amigos.find(a => a.nome === nome);
    if (amigo?.icone) return `<img class="avatar com-icone ${classe}" src="${urlIcone(amigo.icone, 32)}" alt="">`;
    const letra = (String(nome).trim()[0] || '?').toUpperCase();
    return `<span class="avatar ${classe}" style="background:${corDoNome(nome)}">${esc(letra)}</span>`;
}

// so deixa link http ou https
function linkSeguro(url) {
    const texto = String(url || '').trim();
    return /^https?:\/\//i.test(texto) ? texto : '#';
}

// so deixa imagem do site, do supabase ou data:image
function imagemSegura(url) {
    const texto = String(url || '').trim();
    if (texto.startsWith('data:image/')) return texto;
    if (texto.startsWith(DADOS.supabase.url + '/storage/')) return texto;
    if (texto && !texto.includes(':') && !texto.startsWith('//')) return texto;
    return '';
}

function fotoPerfil() {
    return imagemSegura(DADOS.foto)
        ? `<img src="${esc(imagemSegura(DADOS.foto))}" alt="foto de ${esc(DADOS.nome)}" width="110" height="110">`
        : `<div class="foto-padrao" aria-label="foto de perfil">${gif('computador')}</div>`;
}

function fotoHTML(foto) {
    if (foto.src) return `<img class="foto-real" src="${esc(foto.src)}" alt="${esc(foto.legenda || '')}" loading="lazy">`;
    if (foto.icone) return `<div class="foto-falsa" style="background:${foto.cor || '#fff'}"><img class="pixelado" src="${urlIcone(foto.icone, 32)}" alt="${esc(foto.legenda || '')}"></div>`;
    return `<div class="foto-falsa" style="background:${foto.cor}">${foto.emoji || ''}</div>`;
}

function urlFotoPostada(caminho) {
    return nuvem.storage.from('fotos').getPublicUrl(caminho).data.publicUrl;
}

// albuns do DADOS + fotos do admin
function albuns() {
    const todos = DADOS.albuns.map(album => ({ ...album, fotos: [...album.fotos] }));
    for (const foto of [...fotosPostadas.todos()].reverse()) {
        let album = todos.find(a => semAcento(a.nome) === semAcento(foto.album));
        if (!album) {
            album = { id: 'postado-' + semAcento(foto.album).replace(/[^a-z0-9]+/g, '-'), nome: foto.album, fotos: [] };
            todos.unshift(album);
        }
        album.fotos.unshift({ src: urlFotoPostada(foto.caminho), legenda: foto.legenda });
    }
    return todos;
}

function todasAsFotos() {
    return albuns().flatMap(album => album.fotos.map(f => ({ ...f, album: album.nome })));
}

function coracoes(n, nomeIcone) {
    return icone(nomeIcone).repeat(n) + '<span style="opacity:.25">' + icone(nomeIcone).repeat(3 - n) + '</span>';
}

function botoesEmoticons() {
    const lista = [':)', ':D', ':P', ';)', ':(', ":'(", ':O', '(H)', '(L)', '(Y)', '(*)', '(8)'];
    return lista.map(codigo => {
        const nome = EMOTICONS.find(([c]) => c === codigo)[1];
        return `<button type="button" data-codigo="${esc(codigo)}" title="${esc(codigo)}">${icone(nome)}</button>`;
    }).join('');
}

function emoticonsHTML(alvo) {
    return `<span class="emoticons" data-alvo="${alvo}">${botoesEmoticons()}</span>`;
}


// --- onde salva as coisas (supabase ou navegador) ---

const nuvem = DADOS.supabase.url && DADOS.supabase.chave && window.supabase
    ? window.supabase.createClient(DADOS.supabase.url, DADOS.supabase.chave)
    : null;

let souDono = false; // true quando eu to logado

function erroNuvem(erro) {
    console.error(erro);
    const spam = /muitas mensagens/.test(erro?.message || '');
    dialogo({
        titulo: 'Erro', icone: 'error',
        texto: spam
            ? 'Muita gente escrevendo ao mesmo tempo!\nEspere alguns minutos e tente de novo.'
            : 'Não consegui falar com o servidor. :(\nTente de novo daqui a pouco.',
    });
}

function lista(chave, inicial, tabela) {
    let cache = [];
    return {
        pronto: !nuvem,
        todos() {
            if (nuvem) return cache;
            return guardar.ler(chave, inicial.map((item, i) => ({ id: 'ini' + i, ...item })));
        },
        async carregar() {
            if (!nuvem) return;
            const { data, error } = await nuvem.from(tabela).select('*')
                .order('criado_em', { ascending: false }).order('id', { ascending: false }).limit(300);
            if (error) throw error;
            cache = data.map(linha => ({ ...linha, data: new Date(linha.criado_em).toLocaleDateString('pt-BR') }));
            this.pronto = true;
        },
        limpar() {
            cache = [];
        },
        async adicionar(item) {
            if (nuvem) {
                const { error } = await nuvem.from(tabela).insert(item);
                if (error) throw error;
                return this.carregar();
            }
            const itens = this.todos();
            itens.unshift({ id: Date.now().toString(36), data: hoje(), ...item });
            guardar.salvar(chave, itens);
        },
        async remover(id) {
            if (nuvem) {
                const { error } = await nuvem.from(tabela).delete().eq('id', id);
                if (error) throw error;
                return this.carregar();
            }
            guardar.salvar(chave, this.todos().filter(item => String(item.id) !== String(id)));
        },
        async atualizar(id, campos) {
            if (nuvem) {
                const { error } = await nuvem.from(tabela).update(campos).eq('id', id);
                if (error) throw error;
                return this.carregar();
            }
            guardar.salvar(chave, this.todos().map(item => (String(item.id) === String(id) ? { ...item, ...campos } : item)));
        },
    };
}

const recados = lista('recados', DADOS.recadosIniciais, 'recados');
const depoimentos = lista('depoimentos', DADOS.depoimentosIniciais, 'depoimentos');
const diario = lista('diario', DADOS.diarioInicial, 'diario');
const registros = lista('registros', DADOS.registros, 'registros');
const fotosPostadas = lista('fotos', [], 'fotos');
const desenhos = lista('desenhos', [], 'desenhos');
const noticias = lista('noticias', [], 'noticias');
const projetos = lista('projetos', DADOS.projetos, 'projetos');
const avaliacoes = lista('avaliacoes', [], 'avaliacoes');
const amigos = lista('amigos', [], 'amigos');
const zap = lista('zap', [], 'zap');

const LISTAS = { recados, depoimentos, diario, registros, desenhos, noticias, projetos, avaliacoes, amigos, zap };

// o que to editando no admin
let edicao = null;

function emEdicao(nomeLista) {
    if (edicao?.lista !== nomeLista) return null;
    return LISTAS[nomeLista].todos().find(item => String(item.id) === String(edicao.id)) || null;
}

function botoesItem(nomeLista, id) {
    return `<button class="btn-x" data-editar="${nomeLista}" data-id="${id}">editar</button> · <button class="btn-x" data-apagar="${id}" data-lista="${nomeLista}">apagar</button>`;
}

function botaoCancelar(nomeLista) {
    return edicao?.lista === nomeLista ? '<button class="btn pequeno" type="button" data-comando="cancelar-edicao">cancelar</button>' : '';
}

function linhas(texto) {
    return String(texto || '').split('\n').map(l => l.trim()).filter(Boolean);
}

// so eu apago recados
function podeApagar() {
    return nuvem ? souDono : true;
}

function mensagemVazia(dados, texto) {
    return `<p class="vazio">${dados.pronto ? texto : `${icone('hourglass')} carregando...`}</p>`;
}

function diarioAberto() {
    return souDono;
}

async function atualizarDono(sessao) {
    const dono = Boolean(sessao);
    if (dono === souDono) return;
    souDono = dono;
    edicao = null;
    if (souDono) {
        await Promise.all([diario.carregar(), desenhos.carregar(), depoimentos.carregar()]);
    } else {
        diario.limpar();
        depoimentos.limpar();
        await desenhos.carregar(); // sem login so vem os aprovados
    }
    $$('[data-so-dono]').forEach(el => { el.hidden = !souDono; });
    if (!$('#msn').hidden) abrirZap();
    caixaDiario();
    mostrarPagina();
}

// --- configuracoes que mudo pelo admin ---

async function carregarConfig() {
    if (!nuvem) return;
    const { data, error } = await nuvem.from('config').select('chave, valor');
    if (error) throw error;
    data.forEach(({ chave, valor }) => aplicarConfig(chave, valor));
}

function aplicarConfig(chave, valor) {
    if (chave === 'perfil') {
        ['status', 'foto', 'sobre', 'perfil', 'gosto', 'naoGosto', 'github', 'redes'].forEach(campo => {
            if (valor[campo] !== undefined) DADOS[campo] = valor[campo];
        });
    }
    if (chave === 'enquete') {
        DADOS.enquete = { versao: valor.versao || 0, pergunta: valor.pergunta, opcoes: valor.opcoes.map(o => [o, 0]) };
    }
    if (chave === 'comunidades') DADOS.comunidades = valor;
}

async function salvarConfig(chave, valor) {
    const { error } = await nuvem.from('config').upsert({ chave, valor, atualizado: new Date().toISOString() });
    if (error) throw error;
    aplicarConfig(chave, valor);
}


// --- calculadora da sorte (muda todo dia) ---

// transforma texto em numero
function numeroDoTexto(texto) {
    let h = 2166136261;
    for (const letra of texto) h = Math.imul(h ^ letra.codePointAt(0), 16777619);
    return h >>> 0;
}

// numero aleatorio a partir de uma semente
function sorteador(semente) {
    let a = semente;
    return () => {
        a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function calcularSorte(nome = '') {
    const sortear = sorteador(numeroDoTexto(semAcento(nome.trim()) + '|' + hoje()));
    const escolher = opcoes => opcoes[Math.floor(sortear() * opcoes.length)];
    return {
        frase: escolher(DADOS.sortes),
        porcentagem: Math.floor(sortear() * 101),
        numero: 1 + Math.floor(sortear() * 99),
        cor: escolher(DADOS.sorteCores),
        emoticon: escolher([':D', ':)', ';)', '(H)', ':P', ':O', '(*)', '(L)']),
    };
}

function resultadoSorte(nome) {
    const s = calcularSorte(nome);
    return `
        <b>${esc(nome)}, sua sorte hoje é ${s.porcentagem}%</b> ${textoRico(s.emoticon)}
        <div class="barra-sorte"><span style="width:${s.porcentagem}%"></span></div>
        número da sorte: <b>${s.numero}</b> · cor do dia: <b>${esc(s.cor)}</b><br>
        ${icone('emotion_star')} ${esc(s.frase)}`;
}


// --- paginas ---

function blocoRecado(r, comBotao, nomeLista = 'recados') {
    return `
        <div class="recado">
            ${avatar(r.autor)}
            <div class="corpo">
                <b>${esc(r.autor)}:</b> ${formatar(r.texto)}
                <div class="meta"><span>${esc(r.data)}</span>${comBotao && podeApagar() ? `<button class="btn-x" data-apagar="${r.id}" data-lista="${nomeLista}">apagar</button>` : ''}</div>
            </div>
        </div>`;
}

function formRecado(id, compacto) {
    return `
        <form class="form" data-form="recado">
            <input name="autor" placeholder="seu nome" maxlength="30" required>
            <textarea name="texto" id="${id}" placeholder="Escrever recado para ${esc(DADOS.nome)}..." maxlength="500" required ${compacto ? 'rows="2"' : 'rows="3"'}></textarea>
            <div class="linha">
                <button class="btn rosa" type="submit">Enviar recado</button>
                ${emoticonsHTML(id)}
            </div>
            ${compacto ? '' : '<span class="dica">dica: use [b]negrito[/b], [i]itálico[/i] e [u]sublinhado[/u]</span>'}
            <span class="dica">o que você posta aqui fica público. quer apagar? é só pedir pro ${esc(DADOS.nome)}.</span>
        </form>`;
}

function paginaInicio() {
    const nomeSorte = guardar.ler('nome-sorte', '');
    const ultimos = recados.todos().slice(0, 3);
    const total = recados.todos().length;
    return `
        <div class="caixa">
            <div class="cabecalho-perfil">
                <div class="mini-foto">${fotoPerfil()}</div>
                <div>
                    <h1 class="texto-brilho">${esc(DADOS.nome)}</h1>
                    <p class="status">${textoRico(DADOS.status)}</p>
                </div>
            </div>
            <div class="centro" style="margin-top:8px">${gif('bemvindo', 220)}</div>
            <div class="sorte">
                ${icone('emotion_star')} <b>Sorte de hoje:</b> ${esc(calcularSorte().frase)}
                <form class="calc-sorte" data-form="sorte">
                    <input name="nome" placeholder="seu nome" maxlength="30" value="${esc(nomeSorte)}" aria-label="Seu nome" required>
                    <button class="btn pequeno" type="submit">${icone('calculator')} calcular minha sorte</button>
                </form>
                <div id="resultado-sorte">${nomeSorte ? resultadoSorte(nomeSorte) : ''}</div>
            </div>
        </div>

        <div class="caixa">
            <h2>Área do perfil &amp; diário</h2>
            <div class="grade-perfil">
                <div class="sub-caixa">
                    <div class="caixa-titulo"><h3>Recados <small>(${total})</small></h3><a class="mini-link" href="#recados">ver todos</a></div>
                    ${formRecado('texto-recado-inicio', true)}
                    <div>${ultimos.map(r => blocoRecado(r, false)).join('') || mensagemVazia(recados, 'nenhum recado ainda')}</div>
                </div>
                <div class="sub-caixa">
                    <div class="caixa-titulo"><h3>Meus álbuns</h3><a class="mini-link" href="#albuns">ver todos</a></div>
                    ${albuns().length ? `<div class="grade-albuns">
                        ${albuns().slice(0, 4).map(a => `
                            <a class="album-capa" href="#album/${a.id}">
                                ${fotoHTML(a.fotos[0])}
                                <span class="legenda">${esc(a.nome)}</span>
                            </a>`).join('')}
                    </div>` : mensagemVazia(fotosPostadas, 'nenhuma foto ainda')}
                </div>
                <div class="sub-caixa">
                    <div class="caixa-titulo"><h3>Amigos <small>(${amigos.todos().length})</small></h3><a class="mini-link" href="#amigos">ver</a></div>
                    ${amigos.todos().length ? `<div class="grade-amigos">
                        ${amigos.todos().slice(0, 6).map(a => `<div class="amigo">${fotoAmigo(a)}${esc(a.nome)}</div>`).join('')}
                    </div>` : mensagemVazia(amigos, 'nenhum amigo ainda')}
                    <div class="caixa-titulo" style="margin-top:10px"><h3>Comunidades</h3><a class="mini-link" href="#comunidades">ver</a></div>
                    <div class="grade-amigos">
                        ${DADOS.comunidades.slice(0, 3).map(c => `<div class="comunidade"><span class="icone">${icone(c.icone, 32)}</span>${esc(c.nome)}</div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
        ${noticias.todos().length ? `
        <div class="caixa noticias">
            <h2>Novidades do quarto</h2>
            <marquee direction="up" scrollamount="1">
                <ul>${noticias.todos().map((n, i) => `<li><b>[${esc(n.data)}]</b> ${textoRico(n.texto)}${i === 0 ? ' ' + gif('novo') : ''}</li>`).join('')}</ul>
            </marquee>
        </div>` : ''}`;
}

function paginaPerfil() {
    const n = DADOS.notas;
    return `
        <div class="caixa">
            <div class="cabecalho-perfil">
                <div class="mini-foto" style="width:110px">${fotoPerfil()}</div>
                <div>
                    <h1 class="texto-brilho">${esc(DADOS.nome)}</h1>
                    <p class="status">${textoRico(DADOS.status)}</p>
                    <div class="notas-orkut">
                        <span>recados <a href="#recados">${recados.todos().length}</a></span>
                        <span>fotos <a href="#photodump">${todasAsFotos().length}</a></span>
                    </div>
                    <div class="notas-orkut">
                        <span>confiável ${coracoes(n.confiavel, 'emotion_smile')}</span>
                        <span>legal ${coracoes(n.legal, 'ice_cube')}</span>
                        <span>sexy ${coracoes(n.sexy, 'heart')}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="caixa">
            <div class="caixa-titulo"><h2>Social</h2><a class="mini-link" href="#sobre">sobre mim »</a></div>
            <table class="tabela-perfil">
                ${DADOS.perfil.map(([campo, valor]) => `<tr><th>${esc(campo)}:</th><td>${textoRico(valor)}</td></tr>`).join('')}
            </table>
        </div>

        <div class="caixa">
            <div class="caixa-titulo"><h2>Depoimentos</h2><a class="mini-link" href="#depoimentos">${souDono ? 'ver todos' : 'escrever um'}</a></div>
            ${souDono
                ? depoimentos.todos().slice(0, 2).map(d => blocoRecado(d, false)).join('') || mensagemVazia(depoimentos, 'ninguém escreveu ainda')
                : `<p class="vazio">os depoimentos só o ${esc(DADOS.nome)} lê. escreve um pra ele! ${textoRico('(L)')}</p>`}
        </div>`;
}

function paginaSobre() {
    return `
        <div class="caixa texto-longo">
            <h2>Sobre mim</h2>
            ${DADOS.sobre.map(p => `<p>${textoRico(p)}</p>`).join('')}
            <p class="centro">${gif('estrelinhas')}</p>
            <h3>Interesses</h3>
            <div class="tags">${(DADOS.perfil.find(p => p[0] === 'Interesses')?.[1] || '').split(',').filter(t => t.trim()).map(t => `<span>${esc(t.trim())}</span>`).join('')}</div>
        </div>
        <div class="caixa">
            <div class="duas-colunas">
                <div class="sub-caixa"><h3>${icone('heart')} Eu gosto de</h3><ul>${DADOS.gosto.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>
                <div class="sub-caixa"><h3>${icone('heart_break')} Eu não gosto de</h3><ul>${DADOS.naoGosto.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>
            </div>
        </div>`;
}

function paginaRecados() {
    const itens = recados.todos();
    return `
        <div class="caixa">
            <h2>Recados <small>(${itens.length})</small></h2>
            <div class="livro-visitas">${gif('livro', 120)}<p>Assine meu livro de visitas!<br>Deixe um recado aqui embaixo ${gif('email', 40)}</p></div>
            <div class="sub-caixa">${formRecado('texto-recado', false)}</div>
            <div style="margin-top:10px">${itens.map(r => blocoRecado(r, true)).join('') || mensagemVazia(recados, 'nenhum recado ainda')}</div>
            <p class="dica">${nuvem ? 'todo mundo que visita o site vê os recados.' : 'os recados ficam salvos neste navegador.'}</p>
        </div>
        ${desenhosPublicos().length ? `
        <div class="caixa">
            <h2>Mural de desenhos <small>(${desenhosPublicos().length}) · feitos no Paint pelos visitantes</small></h2>
            ${desenhosHTML('mural')}
            <p class="dica">faça o seu no Paint ${icone('palette')} e envie! Se o ${esc(DADOS.nome)} aprovar, ele aparece aqui.</p>
        </div>` : ''}
        ${souDono ? `
        <div class="caixa">
            <h2>Desenhos que você recebeu <small>(${desenhos.todos().length}) · só você vê</small></h2>
            ${desenhosHTML()}
        </div>` : ''}`;
}

function paginaDepoimentos() {
    const itens = depoimentos.todos();
    return `
        <div class="caixa">
            <h2>Depoimentos ${souDono ? `<small>(${itens.length}) · só você vê</small>` : ''}</h2>
            <div class="centro">${gif('coracao')}</div>
            <div class="sub-caixa">
                <form class="form" data-form="depoimento">
                    <input name="autor" placeholder="seu nome" maxlength="30" required>
                    <textarea name="texto" id="texto-depoimento" placeholder="Escreva um depoimento sobre o ${esc(DADOS.nome)}..." maxlength="1000" required></textarea>
                    <div class="linha"><button class="btn rosa" type="submit">Enviar depoimento</button>${emoticonsHTML('texto-depoimento')}</div>
                </form>
            </div>
            ${souDono
                ? `<div style="margin-top:10px">${itens.map(d => blocoRecado(d, true, 'depoimentos')).join('') || mensagemVazia(depoimentos, 'nenhum depoimento ainda')}</div>`
                : `<p class="dica">seu depoimento vai direto pro ${esc(DADOS.nome)}, só ele lê. quer apagar? é só pedir.</p>`}
        </div>`;
}

function paginaAlbuns() {
    return `
        <div class="caixa">
            <h2>Álbuns <small>(${albuns().length})</small></h2>
            ${albuns().length ? `<div class="grade-albuns larga">
                ${albuns().map(a => `
                    <a class="album-capa" href="#album/${a.id}">
                        ${fotoHTML(a.fotos[0])}
                        <span class="legenda">${esc(a.nome)} (${a.fotos.length})</span>
                    </a>`).join('')}
            </div>
            <p style="margin-bottom:0"><a href="#photodump">${icone('camera')} ver o photodump com todas as fotos »</a></p>`
            : mensagemVazia(fotosPostadas, 'nenhum álbum ainda')}
        </div>`;
}

function paginaAlbum(id) {
    const album = albuns().find(a => a.id === id);
    if (!album) return pagina404(location.href);
    return `
        <div class="caixa">
            <div class="caminho"><a href="#albuns">Álbuns</a> › ${esc(album.nome)}</div>
            <h2>${esc(album.nome)} <small>(${album.fotos.length} fotos)</small></h2>
            <div class="grade-fotos">
                ${album.fotos.map((f, i) => `
                    <button class="miniatura" data-foto="${i}" data-album="${album.id}">
                        ${fotoHTML(f)}<span class="texto">${esc(f.legenda)}</span>
                    </button>`).join('')}
            </div>
        </div>`;
}

function paginaPhotodump() {
    const fotos = todasAsFotos();
    return `
        <div class="caixa" style="background:linear-gradient(180deg,#f7e9f1,#d9c4e8)">
            <h2>Photodump <small>(${fotos.length} fotos, sem ordem nenhuma)</small></h2>
            <div class="centro">${gif('camera')}</div>
            ${fotos.length ? `<div class="polaroids">
                ${fotos.map((f, i) => `
                    <button class="polaroid" data-foto="${i}" data-album="*" style="transform:rotate(${((i * 37) % 11) - 5}deg)">
                        ${fotoHTML(f)}<span class="texto">${esc(f.legenda)}</span>
                    </button>`).join('')}
            </div>` : mensagemVazia(fotosPostadas, 'nenhuma foto ainda')}
        </div>`;
}

// icone e cor de cada rede pelo nome
const ICONES_REDES = { instagram: 'camera', tiktok: 'music', spotify: 'headphone', discord: 'controller', neocities: 'world', github: 'link', youtube: 'film', twitter: 'comments', x: 'comments', pinterest: 'photo_album', tumblr: 'page_white', bluesky: 'comments', letterboxd: 'film', steam: 'controller', twitch: 'controller', email: 'email' };

function redes() {
    return DADOS.redes.map(r => {
        const chave = r.nome.toLowerCase().trim();
        // o spotify sem link usa a playlist do site
        const link = r.link || (chave === 'spotify' ? spotify.playlist?.link || '' : '');
        return { ...r, link, icone: r.icone || ICONES_REDES[chave] || 'world', classe: 'rede-' + chave.replace(/[^a-z0-9]/g, '') };
    });
}

// o nome da playlist fica mudando de cor
function usuarioRede(r) {
    return r.classe === 'rede-spotify' ? `<span class="texto-brilho nome-playlist">${esc(spotify.playlist?.nome || r.usuario)}</span>` : esc(r.usuario);
}

function paginaRedes() {
    return `
        <div class="caixa">
            <h2>Redes sociais</h2>
            <div class="centro">${gif('email', 60)}</div>
            ${redes().map(r => r.link
                ? `<a class="rede ${r.classe}" href="${esc(linkSeguro(r.link))}" target="_blank" rel="noopener"><span class="emoji">${icone(r.icone, 32)}</span><span><b>${esc(r.nome)}</b>${usuarioRede(r)}</span></a>`
                : `<div class="rede ${r.classe}"><span class="emoji">${icone(r.icone, 32)}</span><span><b>${esc(r.nome)}</b>${usuarioRede(r)} <i class="dica">(em breve)</i></span></div>`
            ).join('')}
        </div>
        <div class="caixa">
            <h3>Ou fala comigo por aqui mesmo</h3>
            <p style="margin:0">Deixe um <a href="#recados">recado</a> ou chame no <a href="#" data-abrir="msn">Zap do Lucas</a>. ${icone('msn_messenger')}</p>
        </div>`;
}

function formSenha(destino = 'diario') {
    return `
        <form class="form-senha" data-form="senha">
            <input type="hidden" name="destino" value="${destino}">
            <input type="email" name="email" placeholder="E-MAIL" aria-label="E-mail do dono" autocomplete="username" required>
            <input type="password" name="senha" placeholder="SENHA" aria-label="Senha" autocomplete="current-password" required>
            <button class="btn" type="submit">${icone('key')} abrir</button>
        </form>`;
}

function paginaDiario() {
    if (!diarioAberto()) {
        return `
            <div class="caixa diario-trancado">
                <h2>Diário</h2>
                <div class="cadeado">${gif('cadeado')}</div>
                <p>Este diário é secreto. Digite a senha para abrir.</p>
                ${formSenha()}
            </div>`;
    }
    const entradas = diario.todos();
    return `
        <div class="caixa">
            <div class="caixa-titulo"><h2>${icone('book_open')} Querido diário...</h2><button class="btn pequeno" data-comando="trancar-diario">${icone('lock')} trancar</button></div>
            <div class="sub-caixa">
                <form class="form" data-form="diario">
                    <input name="titulo" placeholder="título de hoje" maxlength="60" required>
                    <textarea name="texto" id="texto-diario" placeholder="hoje aconteceu..." maxlength="3000" rows="4" required></textarea>
                    <div class="linha"><button class="btn rosa" type="submit">Escrever</button>${emoticonsHTML('texto-diario')}</div>
                </form>
            </div>
        </div>
        <div class="caixa">
            ${entradas.map(e => `
                <div class="entrada-diario">
                    <h4><span>${esc(e.titulo)}</span><button class="btn-x" data-apagar="${e.id}" data-lista="diario">apagar</button></h4>
                    <div class="data">${esc(e.data)}</div>
                    <p>${esc(e.texto)}</p>
                </div>`).join('') || mensagemVazia(diario, 'nenhuma página escrita ainda')}
        </div>`;
}

function paginaProjetos() {
    const todos = projetos.todos();
    return `
        <div class="caixa">
            <h2>Projetos</h2>
            <div class="centro">${gif('construcao')}</div>
            ${DADOS.github ? `<p class="centro"><a class="btn rosa botao-github" href="${esc(linkSeguro(DADOS.github))}" target="_blank" rel="noopener">${icone('world')} entrar no meu GitHub</a></p>` : ''}
            ${todos.map(p => `
                <div class="projeto">
                    <span class="emoji">${icone('wrench', 32)}</span>
                    <div style="flex:1">
                        <h4>${esc(p.nome)}</h4>
                        <p>${textoRico(p.descricao || '')}</p>
                        <div class="barra-xp" title="${Number(p.progresso) || 0}%"><span style="width:${Number(p.progresso) || 0}%"></span></div>
                        <span class="dica">${Number(p.progresso) || 0}% concluído</span>
                        ${p.link ? `<p style="margin:4px 0 0"><a href="${esc(linkSeguro(p.link))}" target="_blank" rel="noopener">${icone('world')} ver o projeto e avaliar »</a></p>` : ''}
                    </div>
                </div>`).join('') || mensagemVazia(projetos, 'nenhum projeto postado ainda')}
        </div>`;
}

function paginaPlaylist() {
    return `
        ${DADOS.lastfm.usuario ? `
        <div class="caixa">
            <h2>Ouvidas recentemente <small>no Spotify</small></h2>
            <div id="ouvindo-pagina">${listaOuvindo(10)}</div>
            <p class="dica">atualiza sozinho a cada minuto · via Last.fm</p>
        </div>` : ''}
        <div class="caixa">
            <h2>Playlist <small>(${musicas().length} ${musicas().length === 1 ? "música" : "músicas"}${spotify.musicas?.length ? ` · <span class="texto-brilho nome-playlist">${esc(spotify.playlist?.nome || 'minha playlist')}</span> no Spotify` : ''})</small></h2>
            <div class="centro">${gif('notas')}</div>
            <table class="tabela-musicas">
                <thead><tr><th>#</th><th>Título</th><th>Artista</th><th>Tempo</th><th></th></tr></thead>
                <tbody>
                    ${musicas().map((m, i) => `
                        <tr class="${i === player.indice && player.comecou ? 'tocando' : ''}">
                            <td>${i + 1}</td><td>${esc(m.titulo)}</td><td>${esc(m.artista)}</td><td>${duracao(m.duracao)}</td>
                            <td><button class="btn pequeno" data-tocar="${i}">▶ ${m.arquivo ? 'tocar' : 'ouvir'}</button></td>
                        </tr>`).join('')}
                </tbody>
            </table>
            <p class="dica">${spotify.musicas?.length
                ? `músicas da minha playlist do Spotify${spotify.playlist?.link ? ` (<a href="${esc(spotify.playlist.link)}" target="_blank" rel="noopener">abrir no Spotify</a>)` : ''} · o ▶ abre a música no Spotify`
                : 'músicas sem arquivo abrem no YouTube numa nova aba.'}</p>
        </div>`;
}

function fotoAmigo(amigo, classe = '') {
    const foto = imagemSegura(amigo.foto);
    return foto ? `<img class="avatar foto-amigo ${classe}" src="${esc(foto)}" alt="">` : avatar(amigo.nome, classe);
}

function paginaAmigos() {
    const todos = amigos.todos();
    return `
        <div class="caixa">
            <h2>Amigos <small>(${todos.length})</small></h2>
            <div class="centro">${gif('arcoiris')}</div>
            ${todos.length ? `<div class="grade-amigos larga">
                ${todos.map((a, i) => `
                    <div class="amigo">${fotoAmigo(a, 'grande')}<b>${esc(a.nome)}</b>
                        <span class="coracoes">${icone('heart').repeat(1 + (i % 3))}</span>
                        ${souDono ? `<button class="btn-x" data-apagar="${a.id}" data-lista="amigos">apagar</button>` : ''}</div>`).join('')}
            </div>` : mensagemVazia(amigos, 'nenhum amigo ainda... seja o primeiro!')}
        </div>
        <div class="caixa">
            <h2>Me adiciona!</h2>
            ${nuvem ? `<form class="form" data-form="amigo">
                <label class="soltar-foto">
                    <input type="file" name="foto" accept="image/*" class="so-leitor" required>
                    <span class="previa-arquivo">${icone('user_add', 32)}<br>escolha sua foto</span>
                </label>
                <input name="nome" placeholder="seu nome ou apelido" maxlength="30" required>
                <button class="btn rosa" type="submit">${icone('user_add')} entrar pros amigos</button>
                <span class="dica">seu nome e sua foto ficam públicos aqui. quer sair? é só pedir pro ${esc(DADOS.nome)}.</span>
            </form>` : '<p class="vazio">precisa do servidor ligado</p>'}
        </div>`;
}

function paginaComunidades() {
    return `
        <div class="caixa">
            <h2>Comunidades <small>(${DADOS.comunidades.length})</small></h2>
            <div class="grade-comunidades">
                ${DADOS.comunidades.map(c => `
                    <div class="comunidade grande"><span class="icone">${icone(c.icone, 32)}</span>
                        <span><b>${esc(c.nome)}</b><br><span class="dica">${numero(c.membros)} membros</span></span></div>`).join('')}
            </div>
        </div>`;
}

function indiceBusca() {
    const itens = [
        ...Object.entries(PAGINAS).filter(([, p]) => p.titulo && !p.escondida)
            .map(([id, p]) => ({ tipo: 'página', titulo: p.titulo, link: '#' + id })),
        ...DADOS.perfil.map(([campo, valor]) => ({ tipo: 'perfil', titulo: `${campo}: ${valor}`, link: '#perfil' })),
        ...DADOS.sobre.map(t => ({ tipo: 'sobre', titulo: t, link: '#sobre' })),
        ...recados.todos().map(r => ({ tipo: 'recado', titulo: `${r.autor}: ${r.texto}`, link: '#recados' })),
        ...amigos.todos().map(a => ({ tipo: 'amigo', titulo: a.nome, link: '#amigos' })),
        ...noticias.todos().map(n => ({ tipo: 'novidade', titulo: n.texto, link: '#inicio' })),
        ...avaliacoes.todos().map(a => ({ tipo: 'avaliação', titulo: `${a.titulo} (${a.nota} estrelas)`, link: '#avaliacoes' })),
        ...DADOS.comunidades.map(c => ({ tipo: 'comunidade', titulo: c.nome, link: '#comunidades' })),
        ...albuns().map(a => ({ tipo: 'álbum', titulo: a.nome, link: '#album/' + a.id })),
        ...albuns().flatMap(a => a.fotos.map(f => ({ tipo: 'foto', titulo: f.legenda, link: '#album/' + a.id }))),
        ...musicas().map(m => ({ tipo: 'música', titulo: `${m.titulo} - ${m.artista}`, link: '#playlist' })),
        ...projetos.todos().map(p => ({ tipo: 'projeto', titulo: `${p.nome}: ${p.descricao}`, link: '#projetos' })),
        ...registros.todos().map(r => ({ tipo: 'registro', titulo: `${r.data}: ${r.texto}`, link: '#inicio' })),
        ...redes().map(r => ({ tipo: 'rede social', titulo: `${r.nome} ${r.usuario}`, link: '#redes' })),
    ];
    return itens;
}

function paginaBusca(termo) {
    const q = semAcento(termo.trim());
    const achados = q ? indiceBusca().filter(item => semAcento(item.titulo).includes(q)) : [];
    return `
        <div class="caixa">
            <h2>Resultados da pesquisa</h2>
            <form class="form" data-busca style="flex-direction:row; margin-bottom:8px">
                <input type="search" value="${esc(termo)}" placeholder="Pesquisar no site" aria-label="Pesquisar">
                <button class="btn" type="submit">${icone('zoom')}</button>
            </form>
            <p>${q ? `${achados.length} resultado(s) para <b>"${esc(termo)}"</b>` : 'Digite algo para pesquisar.'}</p>
            <div class="branco">
                ${achados.map(a => `<div class="resultado"><span class="tipo">${a.tipo}</span><a href="${a.link}">${esc(a.titulo)}</a></div>`).join('')
                    || '<p class="vazio">Nada encontrado. Tente outra palavra! :(</p>'}
            </div>
        </div>`;
}

// desenhos que aprovei
function desenhosPublicos() {
    return desenhos.todos().filter(d => d.publico);
}

function desenhosHTML(modo = 'dono') {
    const lista = modo === 'mural' ? desenhosPublicos() : desenhos.todos();
    if (!lista.length) return mensagemVazia(desenhos, 'nenhum desenho recebido ainda');
    return `<div class="grade-desenhos">${lista.map(d => `
        <figure class="desenho ${modo === 'dono' && d.publico ? 'aprovado' : ''}">
            <img src="${esc(imagemSegura(d.imagem))}" alt="${esc(d.titulo)}">
            <figcaption>
                <b>${esc(d.titulo)}</b><br>por ${esc(d.autor)} · ${esc(d.data)}
                ${modo === 'dono' ? `<br>
                <span class="selo-status">${d.publico ? `${icone('world')} público no mural` : `${icone('lock')} só você vê`}</span><br>
                ${d.publico
                    ? `<button class="btn pequeno" data-publicar="${d.id}" data-valor="nao">${icone('lock')} tirar do mural</button>`
                    : `<button class="btn pequeno rosa" data-publicar="${d.id}" data-valor="sim">${icone('accept')} aprovar e publicar</button>`}<br>
                <a href="${esc(imagemSegura(d.imagem))}" download="${esc(d.titulo)}.png">baixar</a> ·
                <button class="btn-x" data-apagar="${d.id}" data-lista="desenhos">apagar</button>` : ''}
            </figcaption>
        </figure>`).join('')}</div>`;
}

// --- avaliacoes ---

const TIPOS_AVALIACAO = {
    livro: ['Livros', 'book'],
    serie: ['Séries', 'film'],
    jogo: ['Jogos', 'controller'],
};

function estrelas(nota) {
    const n = Math.max(1, Math.min(5, Number(nota) || 1));
    return `<span class="estrelas" title="${n} de 5">${'★'.repeat(n)}<span class="apagadas">${'★'.repeat(5 - n)}</span></span>`;
}

function capaAvaliacao(a) {
    const tipo = TIPOS_AVALIACAO[a.tipo] || TIPOS_AVALIACAO.livro;
    return a.capa && nuvem
        ? `<img class="capa" src="${esc(urlFotoPostada(a.capa))}" alt="capa de ${esc(a.titulo)}" loading="lazy">`
        : `<div class="capa sem-capa">${icone(tipo[1], 32)}</div>`;
}

function paginaAvaliacoes(filtro = '') {
    const todas = avaliacoes.todos().filter(a => !filtro || a.tipo === filtro);
    return `
        <div class="caixa">
            <h2>Avaliações <small>livros, séries e jogos que eu consumi</small></h2>
            <div class="filtros">
                <a href="#avaliacoes" class="${!filtro ? 'ativo' : ''}">todos</a>
                ${Object.entries(TIPOS_AVALIACAO).map(([tipo, [nome, ic]]) => `<a href="#avaliacoes/${tipo}" class="${filtro === tipo ? 'ativo' : ''}">${icone(ic)} ${nome}</a>`).join('')}
            </div>
            ${todas.length ? `<div class="grade-avaliacoes">${todas.map(a => `
                <div class="avaliacao">
                    ${capaAvaliacao(a)}
                    <div>
                        <span class="tipo-avaliacao">${icone((TIPOS_AVALIACAO[a.tipo] || TIPOS_AVALIACAO.livro)[1])} ${esc((TIPOS_AVALIACAO[a.tipo] || TIPOS_AVALIACAO.livro)[0])}</span>
                        <h4>${esc(a.titulo)}</h4>
                        ${estrelas(a.nota)}
                        ${a.comentario ? `<p>${textoRico(a.comentario)}</p>` : ''}
                        <span class="dica">${esc(a.data)}</span>
                    </div>
                </div>`).join('')}</div>` : mensagemVazia(avaliacoes, 'nada avaliado ainda')}
        </div>`;
}


// --- admin ---

const SECOES_ADMIN = [
    ['perfil', 'user', 'Perfil'],
    ['fotos', 'photo_add', 'Fotos'],
    ['textos', 'note', 'Registros e novidades'],
    ['avaliacoes', 'award_star_gold_1', 'Avaliações'],
    ['projetos', 'wrench', 'Projetos'],
    ['enquete', 'chart_bar', 'Enquete'],
    ['comunidades', 'comments', 'Comunidades'],
    ['recebidos', 'email', 'Recebidos'],
    ['spotify', 'music', 'Spotify'],
];

const ICONES_COMUNIDADE = [
    'alarm_bell', 'ice_cube', 'emotion_clown', 'phone_vintage', 'arrow_refresh', 'dice', 'headphone', 'disconnect',
    'heart', 'music', 'controller', 'camera', 'computer', 'group', 'award_star_gold_1', 'emotion_smile', 'emotion_cool',
    'book', 'film', 'pizza', 'palette', 'world', 'cake', 'dog',
];

function paginaAdmin(secao) {
    if (!nuvem) {
        return `
            <div class="caixa diario-trancado">
                <h2>Área secreta</h2>
                <div class="cadeado">${gif('cadeado')}</div>
                <p>A área de admin precisa do banco de dados ligado.</p>
            </div>`;
    }
    if (!souDono) {
        return `
            <div class="caixa diario-trancado">
                <h2>Área restrita</h2>
                <div class="cadeado">${gif('cadeado')}</div>
                <p>Só o dono do site entra aqui.</p>
                ${formSenha('admin')}
            </div>`;
    }
    const atual = SECOES_ADMIN.some(([id]) => id === secao) ? secao : 'perfil';
    const telas = {
        perfil: adminPerfil, fotos: adminFotos, textos: adminTextos, avaliacoes: adminAvaliacoes, projetos: adminProjetos,
        enquete: adminEnquete, comunidades: adminComunidades, recebidos: adminRecebidos, spotify: adminSpotify,
    };
    return `
        <div class="caixa">
            <div class="caixa-titulo"><h2>${icone('key')} Área secreta do admin</h2><button class="btn pequeno" data-comando="trancar-diario">${icone('door_out')} sair</button></div>
            <p>Oi, ${esc(DADOS.nome)}! Só você vê esta página. :)</p>
            <div class="menu-admin">
                ${SECOES_ADMIN.map(([id, ic, nome]) => `<a href="#admin/${id}" class="${id === atual ? 'ativo' : ''}">${icone(ic)} ${nome}</a>`).join('')}
            </div>
        </div>
        ${telas[atual]()}`;
}

function adminPerfil() {
    return `
        <div class="caixa">
            <h2>Meu perfil</h2>
            <form class="form" data-form="perfil">
                <div class="linha-foto">
                    <div class="mini-foto">${fotoPerfil()}</div>
                    <label class="btn pequeno">${icone('picture_add')} trocar foto de perfil
                        <input type="file" name="foto" accept="image/*" class="so-leitor">
                        <span class="arquivo-escolhido"></span>
                    </label>
                </div>
                <label>status <input name="status" maxlength="120" value="${esc(DADOS.status)}"></label>
                <label>campos do perfil (um por linha, "campo: valor")
                    <textarea name="perfil" rows="8">${esc(DADOS.perfil.map(([campo, valor]) => `${campo}: ${valor}`).join('\n'))}</textarea></label>
                <label>sobre mim (separe os parágrafos com uma linha vazia)
                    <textarea name="sobre" rows="6">${esc(DADOS.sobre.join('\n\n'))}</textarea></label>
                <div class="duas-colunas">
                    <label>eu gosto de (um por linha)<textarea name="gosto" rows="5">${esc(DADOS.gosto.join('\n'))}</textarea></label>
                    <label>eu não gosto de (um por linha)<textarea name="naoGosto" rows="5">${esc(DADOS.naoGosto.join('\n'))}</textarea></label>
                </div>
                <label>link do meu GitHub <input name="github" type="url" placeholder="https://github.com/..." value="${esc(DADOS.github)}"></label>
                <label>redes sociais (uma por linha: nome | usuário | link)
                    <textarea name="redes" rows="6" placeholder="Instagram | @meu_usuario | https://instagram.com/meu_usuario">${esc(DADOS.redes.map(r => [r.nome, r.usuario, r.link].join(' | ')).join('\n'))}</textarea></label>
                <span class="dica">sem link aparece "em breve". o Spotify sem link abre a minha playlist.</span>
                <button class="btn rosa" type="submit">${icone('disk')} salvar perfil</button>
            </form>
        </div>`;
}

function adminFotos() {
    const postadas = fotosPostadas.todos();
    return `
        <div class="caixa">
            <h2>Postar foto</h2>
            <form class="form" data-form="foto">
                <label class="soltar-foto" id="soltar-foto">
                    <input type="file" name="arquivo" accept="image/*" class="so-leitor">
                    <span id="previa-foto">${icone('picture_add', 32)}<br>arraste a imagem aqui ou clique para escolher</span>
                </label>
                <input name="legenda" placeholder="legenda" maxlength="200" aria-label="Legenda">
                <div class="linha">
                    <label for="album-foto">álbum:</label>
                    <input id="album-foto" name="album" list="lista-albuns" placeholder="escolha ou crie um álbum" maxlength="40" required>
                    <datalist id="lista-albuns">${albuns().map(a => `<option value="${esc(a.nome)}">`).join('')}</datalist>
                </div>
                <button class="btn rosa" type="submit">${icone('photo_add')} postar foto</button>
            </form>
        </div>

        <div class="caixa">
            <h2>Fotos que você postou <small>(${postadas.length})</small></h2>
            ${postadas.length ? `<div class="grade-fotos">${postadas.map(f => `
                <figure class="miniatura">
                    <img class="foto-real" src="${esc(urlFotoPostada(f.caminho))}" alt="${esc(f.legenda)}" loading="lazy">
                    <span class="texto"><b>${esc(f.album)}</b><br>${esc(f.legenda)}<br>
                    <button class="btn-x" data-apagar-foto="${f.id}">apagar</button></span>
                </figure>`).join('')}</div>` : mensagemVazia(fotosPostadas, 'nenhuma foto postada ainda')}
        </div>`;
}

function adminTextos() {
    const registro = emEdicao('registros');
    const novidade = emEdicao('noticias');
    return `
        <div class="caixa">
            <h2>${registro ? 'Editar registro' : 'Escrever registro diário'}</h2>
            <form class="form" data-form="registro">
                <textarea name="texto" id="texto-registro" placeholder="o que aconteceu hoje?" maxlength="500" rows="3" required>${registro ? esc(registro.texto) : ''}</textarea>
                <div class="linha"><button class="btn rosa" type="submit">${registro ? 'salvar' : 'publicar'}</button>${botaoCancelar('registros')}${emoticonsHTML('texto-registro')}</div>
            </form>
            <div style="margin-top:8px">
                ${registros.todos().map(r => `
                    <div class="recado"><div class="corpo">
                        <b>[${esc(r.data)}]</b> ${textoRico(r.texto)}
                        <div class="meta">${botoesItem('registros', r.id)}</div>
                    </div></div>`).join('') || mensagemVazia(registros, 'você ainda não escreveu nenhum registro')}
            </div>
        </div>

        <div class="caixa">
            <h2>${novidade ? 'Editar novidade' : 'Novidades do quarto'}</h2>
            <form class="form" data-form="noticia">
                <textarea name="texto" id="texto-noticia" placeholder="o que tem de novo no site?" maxlength="300" rows="2" required>${novidade ? esc(novidade.texto) : ''}</textarea>
                <div class="linha"><button class="btn rosa" type="submit">${novidade ? 'salvar' : 'publicar'}</button>${botaoCancelar('noticias')}${emoticonsHTML('texto-noticia')}</div>
            </form>
            <div style="margin-top:8px">
                ${noticias.todos().map(n => `
                    <div class="recado"><div class="corpo">
                        <b>[${esc(n.data)}]</b> ${textoRico(n.texto)}
                        <div class="meta">${botoesItem('noticias', n.id)}</div>
                    </div></div>`).join('') || mensagemVazia(noticias, 'nenhuma novidade ainda')}
            </div>
        </div>`;
}

function adminAvaliacoes() {
    const a = emEdicao('avaliacoes');
    return `
        <div class="caixa">
            <h2>${a ? 'Editar avaliação' : 'Nova avaliação'}</h2>
            <form class="form" data-form="avaliacao">
                <div class="linha">
                    <select name="tipo" aria-label="Tipo">${Object.entries(TIPOS_AVALIACAO).map(([tipo, [nome]]) => `<option value="${tipo}" ${a?.tipo === tipo ? 'selected' : ''}>${nome}</option>`).join('')}</select>
                    <select name="nota" aria-label="Nota">${[5, 4, 3, 2, 1].map(n => `<option value="${n}" ${Number(a?.nota) === n ? 'selected' : ''}>${'★'.repeat(n)}${'☆'.repeat(5 - n)}</option>`).join('')}</select>
                </div>
                <input name="titulo" placeholder="nome do livro, série ou jogo" maxlength="80" required value="${esc(a?.titulo || '')}">
                <textarea name="comentario" placeholder="o que eu achei (opcional)" maxlength="500" rows="3">${esc(a?.comentario || '')}</textarea>
                <label class="soltar-foto">
                    <input type="file" name="capa" accept="image/*" class="so-leitor">
                    <span class="previa-arquivo">${icone('picture_add', 32)}<br>${a?.capa ? 'trocar a foto da capa' : 'foto da capa'}</span>
                </label>
                <div class="linha"><button class="btn rosa" type="submit">${a ? 'salvar' : 'publicar'}</button>${botaoCancelar('avaliacoes')}</div>
            </form>
        </div>
        <div class="caixa">
            <h2>Minhas avaliações</h2>
            ${avaliacoes.todos().map(item => `
                <div class="avaliacao pequena">
                    ${capaAvaliacao(item)}
                    <div><b>${esc(item.titulo)}</b> ${estrelas(item.nota)}<br><span class="dica">${esc((TIPOS_AVALIACAO[item.tipo] || TIPOS_AVALIACAO.livro)[0])} · ${esc(item.data)}</span><br>${botoesItem('avaliacoes', item.id)}</div>
                </div>`).join('') || mensagemVazia(avaliacoes, 'nada avaliado ainda')}
        </div>`;
}

function adminProjetos() {
    const p = emEdicao('projetos');
    return `
        <div class="caixa">
            <h2>${p ? 'Editar projeto' : 'Novo projeto'}</h2>
            <form class="form" data-form="projeto">
                <input name="nome" placeholder="nome do projeto" maxlength="80" required value="${esc(p?.nome || '')}">
                <textarea name="descricao" placeholder="sobre o projeto" maxlength="500" rows="3">${esc(p?.descricao || '')}</textarea>
                <input name="link" type="url" placeholder="link pra galera ver e avaliar (https://...)" value="${esc(p?.link || '')}">
                <label>quanto já está pronto: <input name="progresso" type="number" min="0" max="100" value="${Number(p?.progresso) || 0}" style="width:80px"> %</label>
                <div class="linha"><button class="btn rosa" type="submit">${p ? 'salvar' : 'publicar'}</button>${botaoCancelar('projetos')}</div>
            </form>
            <p class="dica">o link do GitHub fica na parte de Perfil.</p>
        </div>
        <div class="caixa">
            <h2>Meus projetos</h2>
            ${projetos.todos().map(item => `
                <div class="recado"><div class="corpo">
                    <b>${esc(item.nome)}</b> (${Number(item.progresso) || 0}%)
                    ${item.link ? `<br><a href="${esc(linkSeguro(item.link))}" target="_blank" rel="noopener">${esc(item.link)}</a>` : ''}
                    <div class="meta">${botoesItem('projetos', item.id)}</div>
                </div></div>`).join('') || mensagemVazia(projetos, 'nenhum projeto ainda')}
        </div>`;
}

function adminEnquete() {
    const votos = resultadoEnquete || DADOS.enquete.opcoes.map(() => 0);
    return `
        <div class="caixa">
            <h2>Enquete</h2>
            <form class="form" data-form="enquete-admin">
                <label>pergunta <input name="pergunta" maxlength="120" required value="${esc(DADOS.enquete.pergunta)}"></label>
                <label>opções (uma por linha, de 2 a 6)
                    <textarea name="opcoes" rows="6" required>${esc(DADOS.enquete.opcoes.map(([texto]) => texto).join('\n'))}</textarea></label>
                <button class="btn rosa" type="submit">${icone('disk')} salvar enquete</button>
                <p class="dica">salvar começa uma enquete nova e zera os votos.</p>
            </form>
            <h3>votos agora</h3>
            ${DADOS.enquete.opcoes.map(([texto], i) => `<div>${esc(texto)}: <b>${votos[i] || 0}</b></div>`).join('')}
        </div>`;
}

function adminComunidades() {
    return `
        <div class="caixa">
            <h2>Comunidades</h2>
            <div class="grade-comunidades">
                ${DADOS.comunidades.map((c, i) => `
                    <div class="comunidade grande"><span class="icone">${icone(c.icone, 32)}</span>
                        <span><b>${esc(c.nome)}</b><br><span class="dica">${numero(Number(c.membros) || 0)} membros</span><br>
                        <button class="btn-x" data-apagar-comunidade="${i}">sair</button></span></div>`).join('') || '<p class="vazio">nenhuma comunidade</p>'}
            </div>
            <h3>entrar numa comunidade</h3>
            <form class="form" data-form="comunidade">
                <input name="nome" placeholder="nome da comunidade" maxlength="60" required>
                <div class="linha">
                    <select name="icone" aria-label="Ícone">${ICONES_COMUNIDADE.map(ic => `<option value="${ic}">${ic.replace(/_/g, ' ')}</option>`).join('')}</select>
                    <input name="membros" type="number" min="0" max="99999999" value="1000" style="width:120px" aria-label="Membros"> membros
                </div>
                <button class="btn rosa" type="submit">adicionar</button>
            </form>
        </div>`;
}

function adminRecebidos() {
    return `
        <div class="caixa">
            <h2>Desenhos recebidos no Paint <small>(${desenhos.todos().length} · ${desenhosPublicos().length} no mural)</small></h2>
            <p class="dica" style="margin-top:0">Chegam privados. Clique em "aprovar e publicar" para aparecerem no mural da página de recados.</p>
            ${desenhosHTML()}
        </div>
        <div class="caixa">
            <h2>Depoimentos <small>(${depoimentos.todos().length}) · só você lê</small></h2>
            ${depoimentos.todos().map(d => blocoRecado(d, true, 'depoimentos')).join('') || mensagemVazia(depoimentos, 'nenhum depoimento ainda')}
        </div>
        <div class="caixa">
            <h2>Amigos <small>(${amigos.todos().length})</small></h2>
            ${amigos.todos().length ? `<div class="grade-amigos larga">${amigos.todos().map(a => `
                <div class="amigo">${fotoAmigo(a)}<b>${esc(a.nome)}</b><button class="btn-x" data-apagar="${a.id}" data-lista="amigos">apagar</button></div>`).join('')}</div>`
                : mensagemVazia(amigos, 'ninguém entrou ainda')}
        </div>
        <div class="caixa">
            <h2>Zap do Lucas</h2>
            <p>As mensagens do Zap você apaga dentro do próprio Zap: abra ele logado e clique no x do lado da mensagem. Elas também somem sozinhas depois de 7 dias.</p>
            <button class="btn" data-abrir="msn">${icone('msn_messenger')} abrir o Zap</button>
        </div>`;
}

function adminSpotify() {
    return `
        <div class="caixa">
            <h2>Spotify: minha playlist</h2>
            ${spotify.conectado
                ? `<p>${icone('accept')} Conectado! A aba Playlist mostra ${spotify.musicas?.length || 0} músicas da playlist "${esc(spotify.playlist?.nome || 'minha playlist')}"
                   ${spotify.atualizado ? `(atualizado ${tempoAtras(new Date(spotify.atualizado).getTime())})` : ''}.
                   Atualiza sozinho a cada 10 minutos.</p>
                   <button class="btn pequeno" data-comando="conectar-spotify">${icone('arrow_refresh')} conectar de novo</button>`
                : `<p>Mostre as músicas da sua playlist "minha playlist" na aba Playlist do site. Colocou música lá, ela aparece aqui.</p>
                   <button class="btn rosa" data-comando="conectar-spotify">${icone('music')} conectar Spotify</button>
                   <p class="dica">abre o Spotify numa nova aba para você autorizar. Depois, recarregue esta página.</p>`}
        </div>`;
}

function pagina404(endereco) {
    return `
        <div class="erro-ie">
            <h1>${icone('error', 32)} Não é possível exibir a página</h1>
            <p>A página que você está procurando não existe, mudou de nome ou está temporariamente indisponível.</p>
            <hr>
            <p><b>Tente o seguinte:</b></p>
            <ul>
                <li>Verifique se o endereço <b>${esc(endereco)}</b> está escrito corretamente.</li>
                <li>Clique no botão <a href="#" data-comando="voltar">Voltar</a> para tentar outro link.</li>
                <li>Vá para a <a href="#inicio">página inicial</a>.</li>
            </ul>
            <p class="dica">Erro HTTP 404 - Arquivo não encontrado<br>Internet Explorer</p>
        </div>`;
}

const PAGINAS = {
    inicio: { titulo: 'Início', render: paginaInicio },
    perfil: { titulo: 'Perfil', render: paginaPerfil },
    sobre: { titulo: 'Sobre mim', render: paginaSobre },
    recados: { titulo: 'Recados', render: paginaRecados },
    depoimentos: { titulo: 'Depoimentos', render: paginaDepoimentos },
    albuns: { titulo: 'Álbuns', render: paginaAlbuns },
    album: { titulo: 'Álbum', render: paginaAlbum, escondida: true, menu: 'albuns' },
    photodump: { titulo: 'Photodump', render: paginaPhotodump },
    redes: { titulo: 'Redes sociais', render: paginaRedes },
    diario: { titulo: 'Diário', render: paginaDiario },
    projetos: { titulo: 'Projetos', render: paginaProjetos },
    avaliacoes: { titulo: 'Avaliações', render: paginaAvaliacoes },
    playlist: { titulo: 'Playlist', render: paginaPlaylist },
    amigos: { titulo: 'Amigos', render: paginaAmigos },
    comunidades: { titulo: 'Comunidades', render: paginaComunidades },
    busca: { titulo: 'Pesquisa', render: paginaBusca, escondida: true },
    admin: { titulo: 'Admin', render: paginaAdmin, escondida: true },
};


// --- navegacao (usa o # do endereco) ---

function rotaAtual() {
    const hash = decodeURIComponent(location.hash.slice(1)) || 'inicio';
    const [nome, ...resto] = hash.split('/');
    return { nome, arg: resto.join('/') };
}

let carregando;
function mostrarPagina() {
    const { nome, arg } = rotaAtual();
    const pagina = PAGINAS[nome];
    const central = $('#central');

    central.innerHTML = pagina ? pagina.render(arg) : pagina404(DADOS.endereco + '#' + nome);

    const titulo = pagina ? pagina.titulo : 'Página não encontrada';
    const menuAtivo = pagina?.menu || nome;
    $$('[data-rota]').forEach(a => a.classList.toggle('ativo', a.dataset.rota === menuAtivo));
    document.title = `${titulo} - QUARTO DO LUCAS`;
    $('#titulo-navegador').textContent = `${titulo} - QUARTO DO LUCAS - Microsoft Internet Explorer`;
    atualizarEndereco();
    atualizarAbas();

    // efeito de carregando
    const barra = $('#progresso-status');
    clearTimeout(carregando);
    status('Abrindo página ' + DADOS.endereco + '#' + nome + '...');
    barra.style.transition = 'none';
    barra.style.width = '0';
    requestAnimationFrame(() => {
        barra.style.transition = '';
        barra.style.width = '100%';
    });
    carregando = setTimeout(() => { statusLivre(); barra.style.width = '0'; }, 500);

    const janela = $('#navegador');
    if (janela.getBoundingClientRect().top < 0) janela.scrollIntoView({ block: 'start' });
}

function ir(rota) {
    if (location.hash === '#' + rota) mostrarPagina();
    else location.hash = rota;
}

function status(texto) {
    statusRolando = false;
    $('#status-texto').textContent = texto;
}

// mensagem passando na barra de status
const MENSAGEM_STATUS = '★ Bem-vindo(a) ao Quarto do Lucas! ★ Não esqueça de deixar seu recado! ★ Volte sempre! ★          ';
let statusRolando = false;
let posicaoStatus = 0;
function statusLivre() {
    status('Concluído');
    clearTimeout(statusLivre.espera);
    statusLivre.espera = setTimeout(() => { statusRolando = true; }, 2500);
}
setInterval(() => {
    if (!statusRolando) return;
    posicaoStatus = (posicaoStatus + 1) % MENSAGEM_STATUS.length;
    $('#status-texto').textContent = MENSAGEM_STATUS.slice(posicaoStatus) + MENSAGEM_STATUS.slice(0, posicaoStatus);
}, 150);

function atualizarEndereco() {
    const aba = abas.find(a => a.id === abaAtiva);
    const campo = $('#endereco');
    if (document.activeElement === campo) return;
    campo.value = aba.tipo === 'nova' ? 'about:blank' : DADOS.endereco + (location.hash || '#inicio');
}

function abrirEndereco(texto) {
    const valor = texto.trim();
    if (!valor) return;
    if (abaAtiva !== 'site') fecharAba(abaAtiva);
    const posHash = valor.indexOf('#');
    if (posHash >= 0) return ir(valor.slice(posHash + 1) || 'inicio');
    const semBarra = valor.replace(/\/+$/, '');
    if (semBarra === DADOS.endereco.replace(/\/+$/, '') || semBarra === 'quartodolucas.neocities.org') return ir('inicio');
    if (PAGINAS[valor]) return ir(valor);
    // endereco que nao existe
    $('#central').innerHTML = pagina404(valor);
    document.title = 'Não é possível exibir a página';
    status('Concluído com erros');
}


// --- abas ---

let abas = [{ id: 'site', tipo: 'site' }];
let abaAtiva = 'site';
let contadorAbas = 0;

function atualizarAbas() {
    const titulo = PAGINAS[rotaAtual().nome]?.titulo || 'Erro';
    $('#abas').innerHTML = abas.map(a => `
        <button class="aba ${a.id === abaAtiva ? 'ativa' : ''}" data-aba="${a.id}">
            ${icone('internet_explorer')} ${a.tipo === 'nova' ? 'Nova guia' : 'QUARTO DO LUCAS · ' + esc(titulo)}
            ${a.tipo === 'nova' ? `<span class="fechar-aba" data-fechar-aba="${a.id}" title="Fechar guia">✕</span>` : ''}
        </button>`).join('') + '<button class="aba nova" data-comando="nova-guia" title="Nova guia">+</button>';

    const nova = abas.find(a => a.id === abaAtiva).tipo === 'nova';
    $('#pagina-site').hidden = nova;
    $('#pagina-nova-guia').hidden = !nova;
}

function novaAba() {
    const id = 'nova' + (++contadorAbas);
    abas.push({ id, tipo: 'nova' });
    trocarAba(id);
    $('#pagina-nova-guia input').focus();
}

function trocarAba(id) {
    abaAtiva = id;
    atualizarAbas();
    atualizarEndereco();
}

function fecharAba(id) {
    abas = abas.filter(a => a.id !== id);
    if (abaAtiva === id) abaAtiva = 'site';
    atualizarAbas();
    atualizarEndereco();
}


// --- colunas dos lados ---

function preencherPerfil() {
    $$('[data-foto-perfil]').forEach(el => { el.innerHTML = fotoPerfil(); });
    $$('[data-nome]').forEach(el => { el.textContent = DADOS.nome; });
    $$('[data-status]').forEach(el => { el.innerHTML = textoRico(DADOS.status); });
}

function caixaDiario() {
    const caixa = $('#caixa-diario');
    caixa.innerHTML = diarioAberto()
        ? `<h3>Diário</h3><div class="cadeado">${icone('lock_open', 32)}</div>
           <a class="btn" href="#diario" style="display:inline-block;text-decoration:none">ler o diário</a>
           <p style="margin:6px 0 0"><button class="btn-x" data-comando="trancar-diario">trancar</button></p>`
        : `<h3>Diário</h3><div class="cadeado">${gif('cadeado', 64)}</div>${formSenha()}`;
}

function preencherRegistros() {
    $('#registros').innerHTML = registros.todos().map(r => `
        <div class="registro">
            ${avatar(DADOS.nome)}
            <div>
                <p><span class="data">[${esc(r.data)}]:</span> ${textoRico(r.texto)}</p>
                <a class="mini-link" href="#recados">comentar</a>
            </div>
        </div>`).join('') || mensagemVazia(registros, 'nenhum registro ainda');
}

let resultadoEnquete = null; // votos do servidor

async function carregarEnquete() {
    if (!nuvem) return;
    const { data, error } = await nuvem.rpc('resultado_enquete');
    if (error) throw error;
    resultadoEnquete = DADOS.enquete.opcoes.map((_, i) => Number(data.find(linha => linha.opcao === i)?.total || 0));
}

async function votar(opcao) {
    if (nuvem) {
        let votante = guardar.ler('votante', null);
        if (!votante) {
            votante = crypto.randomUUID();
            guardar.salvar('votante', votante);
        }
        const { error } = await nuvem.rpc('votar', { p_votante: votante, p_opcao: opcao });
        if (error) throw error;
        await carregarEnquete();
    }
    guardar.salvar('voto', { versao: DADOS.enquete.versao, opcao });
    preencherEnquete();
}

// meu voto so vale se for da enquete atual
function meuVoto() {
    const voto = guardar.ler('voto', null);
    if (voto === null) return null;
    if (typeof voto === 'number') return DADOS.enquete.versao ? null : voto;
    return voto.versao === DADOS.enquete.versao ? voto.opcao : null;
}

function preencherEnquete() {
    const { pergunta, opcoes } = DADOS.enquete;
    const voto = meuVoto();
    const caixa = $('#enquete');

    if (voto === null) {
        caixa.innerHTML = `
            <form data-form="enquete">
                <p style="margin-top:0"><b>${esc(pergunta)}</b></p>
                ${opcoes.map(([texto], i) => `<label><input type="radio" name="opcao" value="${i}" required> ${esc(texto)}</label>`).join('')}
                <button class="btn pequeno" type="submit" style="margin-top:6px">votar</button>
            </form>`;
        return;
    }

    const votos = nuvem
        ? resultadoEnquete || opcoes.map(() => 0)
        : opcoes.map(([, n], i) => n + (i === voto ? 1 : 0));
    const total = votos.reduce((a, b) => a + b, 0);
    caixa.innerHTML = `
        <p style="margin-top:0"><b>${esc(pergunta)}</b></p>
        ${opcoes.map(([texto], i) => {
            const pct = total ? Math.round(votos[i] / total * 100) : 0;
            return `<div>${esc(texto)} ${i === voto ? icone('tick') : ''} <span class="dica">${pct}%</span></div>
                    <div class="barra-voto ${i === voto ? 'meu' : ''}"><span style="width:${pct}%"></span></div>`;
        }).join('')}
        <span class="dica">${numero(total)} votos · </span><button class="btn-x" data-comando="mudar-voto">mudar voto</button>`;
}

async function preencherContador() {
    let total;
    if (nuvem) {
        // conta 1 visita por sessao
        let nova = true;
        try { nova = sessionStorage.getItem('qdl-visita') !== 'contada'; } catch { /* ok */ }
        const { data, error } = await nuvem.rpc('contar_visita', { p_nova: nova });
        if (error) throw error;
        try { sessionStorage.setItem('qdl-visita', 'contada'); } catch { /* ok */ }
        total = Number(data);
    } else {
        // sem servidor conta so nesse navegador
        const visitas = guardar.ler('visitas', 0) + 1;
        guardar.salvar('visitas', visitas);
        total = visitas;
    }
    $('#contador').innerHTML = [...String(total).padStart(6, '0')].map(d => `<span>${d}</span>`).join('');
}


// --- player ---

const player = { indice: 0, audio: new Audio(), tocando: false, comecou: false };

// --- playlist do spotify ---

const URL_SPOTIFY = DADOS.supabase.url ? `${DADOS.supabase.url}/functions/v1/spotify` : '';
const spotify = { musicas: null, playlist: null, conectado: false, atualizado: null };

// se o spotify nao carregar usa a lista do DADOS
function musicas() {
    return spotify.musicas?.length ? spotify.musicas : DADOS.musicas;
}

async function carregarPlaylistSpotify() {
    if (!URL_SPOTIFY) return;
    try {
        const resposta = await fetch(URL_SPOTIFY);
        if (!resposta.ok) throw new Error(`função spotify respondeu ${resposta.status}`);
        const dados = await resposta.json();
        spotify.conectado = Boolean(dados.conectado);
        spotify.atualizado = dados.atualizado || null;
        spotify.playlist = dados.playlist || null;
        if (dados.musicas?.length) {
            const tocandoAntes = player.comecou;
            spotify.musicas = dados.musicas;
            if (!tocandoAntes) player.indice = 0;
            atualizarPlayer();
        }
    } catch (erro) {
        console.error(erro);
    }
    if (rotaAtual().nome === 'admin') mostrarPagina();
}

async function conectarSpotify() {
    const { data } = await nuvem.auth.getSession();
    if (!data.session) return dialogo({ titulo: 'Spotify', icone: 'error', texto: 'Entre na área de admin primeiro.' });
    window.open(`${URL_SPOTIFY}/login?token=${encodeURIComponent(data.session.access_token)}`, '_blank', 'noopener');
}

function linkYoutube(m) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(`${m.titulo} ${m.artista}`);
}

function atualizarPlayer() {
    const m = musicas()[player.indice];
    const caixa = $('#player');
    caixa.classList.toggle('tocando', player.tocando);
    $('.tela-player', caixa).classList.toggle('parado', !player.tocando);
    $('#player-titulo').textContent = player.comecou ? `♪ ${m.titulo} - ${m.artista} ♪` : '♪ aperte o play ♪';
    $('#player-play').innerHTML = icone(player.tocando ? 'control_pause' : 'control_play');
    $('#player-play').title = player.tocando ? 'Pausar' : 'Tocar';
    $('#lista-player').innerHTML = musicas().map((musica, i) => `
        <li class="${i === player.indice && player.comecou ? 'atual' : ''}">
            <button data-tocar="${i}"><span>${i + 1}. ${esc(musica.artista)} - ${esc(musica.titulo)}</span><span>${duracao(musica.duracao)}</span></button>
        </li>`).join('');
    const total = musicas().reduce((soma, m) => soma + (Number(m.duracao) || 0), 0);
    $('#wa-total').textContent = total ? `${duracao(total)}` : '--:--';
    if (rotaAtual().nome === 'playlist') mostrarPagina();
}

function tocar(i) {
    const total = musicas().length;
    player.indice = (i + total) % total;
    player.comecou = true;
    const m = musicas()[player.indice];

    if (m.arquivo) {
        player.audio.src = m.arquivo;
        player.audio.play().then(() => {
            player.tocando = true;
            atualizarPlayer();
        }).catch(() => {
            player.tocando = false;
            atualizarPlayer();
            dialogo({ titulo: 'Windows Media Player', icone: 'error', texto: `Não consegui tocar o arquivo "${m.arquivo}".\nVerifique se ele está na pasta do site.` });
        });
    } else {
        player.audio.pause();
        player.tocando = false;
        window.open(m.link || linkYoutube(m), '_blank', 'noopener');
    }
    atualizarPlayer();
}

function playPause() {
    const m = musicas()[player.indice];
    if (!player.comecou || !m.arquivo) return tocar(player.indice);
    if (player.tocando) {
        player.audio.pause();
        player.tocando = false;
        atualizarPlayer();
    } else {
        player.audio.play().then(() => { player.tocando = true; atualizarPlayer(); }).catch(() => {});
    }
}

player.audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = player.audio;
    $('#player-progresso span').style.width = duration ? (currentTime / duration * 100) + '%' : '0';
    $('#wa-tempo').textContent = duracao(currentTime * 1000, true);
});

// tempo em mm:ss
function duracao(ms, sempre = false) {
    const total = Math.round((Number(ms) || 0) / 1000);
    if (!total && !sempre) return '';
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

function pararMusica() {
    player.audio.pause();
    player.audio.currentTime = 0;
    player.tocando = false;
    $('#wa-tempo').textContent = '00:00';
    atualizarPlayer();
}
player.audio.addEventListener('ended', () => {
    const proxima = musicas()[(player.indice + 1) % musicas().length];
    if (proxima.arquivo) tocar(player.indice + 1);
    else { player.tocando = false; atualizarPlayer(); }
});


// --- ouvindo agora (last.fm) ---

const ouvindo = { faixas: [], carregado: false, erro: false };

async function carregarLastfm() {
    const { usuario, chave } = DADOS.lastfm;
    if (!usuario || !chave) return;
    const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&limit=10'
        + `&user=${encodeURIComponent(usuario)}&api_key=${encodeURIComponent(chave)}`;
    try {
        const json = await (await fetch(url)).json();
        if (json.error) throw new Error(json.message);
        ouvindo.faixas = (json.recenttracks?.track || []).map(t => ({
            titulo: t.name,
            artista: t.artist?.['#text'] || '',
            capa: t.image?.find(i => i.size === 'medium')?.['#text'] || '',
            agora: t['@attr']?.nowplaying === 'true',
            quando: t.date ? Number(t.date.uts) * 1000 : Date.now(),
        }));
        ouvindo.erro = false;
    } catch (erro) {
        console.error(erro);
        ouvindo.erro = true;
    }
    ouvindo.carregado = true;
    preencherOuvindo();
}

function tempoAtras(ms) {
    const minutos = Math.round((Date.now() - ms) / 60000);
    if (minutos < 1) return 'agora mesmo';
    if (minutos < 60) return `há ${minutos} min`;
    const horas = Math.round(minutos / 60);
    if (horas < 24) return `há ${horas} h`;
    return new Date(ms).toLocaleDateString('pt-BR');
}

function linkSpotify(faixa) {
    return 'https://open.spotify.com/search/' + encodeURIComponent(`${faixa.titulo} ${faixa.artista}`);
}

function listaOuvindo(quantidade) {
    if (!ouvindo.carregado) return `<p class="vazio">${icone('hourglass')} carregando...</p>`;
    if (ouvindo.erro) return '<p class="vazio">não consegui falar com o Last.fm :(</p>';
    if (!ouvindo.faixas.length) return '<p class="vazio">nada tocando por enquanto</p>';
    return ouvindo.faixas.slice(0, quantidade).map(f => `
        <a class="faixa" href="${linkSpotify(f)}" target="_blank" rel="noopener">
            ${f.capa ? `<img src="${esc(f.capa)}" alt="" width="34" height="34" loading="lazy">` : icone('cd', 32)}
            <span><b>${esc(f.titulo)}</b><br>${esc(f.artista)}<br>
            <small>${f.agora ? `${icone('sound')} <span class="piscar">tocando agora</span>` : tempoAtras(f.quando)}</small></span>
        </a>`).join('');
}

function preencherOuvindo() {
    const caixa = $('#caixa-ouvindo');
    caixa.hidden = !DADOS.lastfm.usuario;
    if (caixa.hidden) return;
    $('#ouvindo').innerHTML = listaOuvindo(4);
    const naPagina = $('#ouvindo-pagina');
    if (naPagina) naPagina.innerHTML = listaOuvindo(10);
}


// --- postar fotos ---

let arquivoEscolhido = null;

function escolherFoto(arquivo) {
    if (!arquivo?.type.startsWith('image/')) {
        return dialogo({ titulo: 'Postar foto', icone: 'error', texto: 'Escolha um arquivo de imagem (jpg, png, gif...).' });
    }
    arquivoEscolhido = arquivo;
    $('#previa-foto').innerHTML = `<img src="${URL.createObjectURL(arquivo)}" alt=""><br>${esc(arquivo.name)}`;
}

// diminui a foto antes de mandar
async function prepararFoto(arquivo, maximo = 1600) {
    if (arquivo.type === 'image/gif') return { blob: arquivo, tipo: 'image/gif', extensao: 'gif' }; // gif fica igual
    const bitmap = await createImageBitmap(arquivo);
    const escala = Math.min(1, maximo / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * escala);
    canvas.height = Math.round(bitmap.height * escala);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise(pronto => canvas.toBlob(pronto, 'image/jpeg', 0.85));
    return { blob, tipo: 'image/jpeg', extensao: 'jpg' };
}

async function postarFoto(dados) {
    const { blob, tipo, extensao } = await prepararFoto(arquivoEscolhido);
    const caminho = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensao}`;
    const { error } = await nuvem.storage.from('fotos').upload(caminho, blob, { contentType: tipo });
    if (error) throw error;
    try {
        await fotosPostadas.adicionar({ album: dados.album.trim(), legenda: dados.legenda.trim(), caminho });
    } catch (erro) {
        await nuvem.storage.from('fotos').remove([caminho]);
        throw erro;
    }
    arquivoEscolhido = null;
}

// manda uma imagem pro supabase e devolve o caminho
async function subirImagem(arquivo, pasta, maximo) {
    if (!arquivo.type.startsWith('image/')) throw new Error('isso não é uma imagem');
    const { blob, tipo, extensao } = await prepararFoto(arquivo, maximo);
    const caminho = `${pasta}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensao}`;
    const { error } = await nuvem.storage.from('fotos').upload(caminho, blob, { contentType: tipo });
    if (error) throw error;
    return caminho;
}

// foto quadradinha pros amigos
async function fotoQuadrada(arquivo, lado = 128) {
    if (!arquivo.type.startsWith('image/')) throw new Error('isso não é uma imagem');
    const bitmap = await createImageBitmap(arquivo);
    const menor = Math.min(bitmap.width, bitmap.height);
    const canvas = document.createElement('canvas');
    canvas.width = lado;
    canvas.height = lado;
    canvas.getContext('2d').drawImage(bitmap, (bitmap.width - menor) / 2, (bitmap.height - menor) / 2, menor, menor, 0, 0, lado, lado);
    return canvas.toDataURL('image/jpeg', 0.8);
}

async function apagarFotoPostada(id) {
    const foto = fotosPostadas.todos().find(f => String(f.id) === String(id));
    const { error } = await nuvem.storage.from('fotos').remove([foto.caminho]);
    if (error) throw error;
    await fotosPostadas.remover(id);
}


// --- foto grande ---

const lightbox = { fotos: [], indice: 0 };

function abrirFoto(albumId, indice) {
    lightbox.fotos = albumId === '*' ? todasAsFotos() : albuns().find(a => a.id === albumId).fotos;
    lightbox.indice = indice;
    mostrarFoto();
    $('#lightbox').hidden = false;
}

function mostrarFoto() {
    const total = lightbox.fotos.length;
    lightbox.indice = (lightbox.indice + total) % total;
    const foto = lightbox.fotos[lightbox.indice];
    $('#lightbox-foto').innerHTML = fotoHTML(foto);
    $('#lightbox-legenda').textContent = `${foto.legenda}  (${lightbox.indice + 1} de ${total})`;
}


// --- janelinha de aviso ---

function dialogo({ titulo, texto, icone: nomeIcone = 'information', botoes = [{ texto: 'OK' }] }) {
    $('#dialogo-titulo').textContent = titulo;
    $('#dialogo-texto').innerHTML = textoRico(texto);
    $('#dialogo-icone').innerHTML = icone(nomeIcone, 32);
    const acoes = $('#dialogo-acoes');
    acoes.innerHTML = '';
    botoes.forEach(b => {
        const botao = document.createElement('button');
        botao.textContent = b.texto;
        botao.addEventListener('click', () => {
            $('#fundo-dialogo').hidden = true;
            b.acao?.();
        });
        acoes.append(botao);
    });
    $('#fundo-dialogo').hidden = false;
    acoes.firstChild.focus();
}

function confirmar(titulo, texto, acao) {
    dialogo({ titulo, texto, icone: 'help', botoes: [{ texto: 'Sim', acao }, { texto: 'Não' }] });
}


// --- janelas ---

let zTopo = 100;

function focarJanela(janela) {
    $$('#navegador, .janela-app').forEach(j => j.classList.remove('ativa'));
    janela.classList.add('ativa');
    if (janela.classList.contains('janela-app')) janela.style.zIndex = ++zTopo;
    atualizarTarefas();
}

function abrirJanela(id) {
    const janela = document.getElementById(id);
    janela.hidden = false;
    janela.classList.remove('minimizada');
    focarJanela(janela);
    if (id === 'paint') iniciarPaint();
    if (id === 'msn') abrirZap();
    if (id === 'fundos') montarFundos();
    if (id === 'notas') $('#notas-texto').focus();
    if (id === 'lixeira') mostrarLixeira();
    if (id === 'navegador') janela.scrollIntoView({ block: 'nearest' });
    $('#menu-iniciar').hidden = true;
}

function acaoJanela(janela, acao) {
    if (acao === 'fechar') janela.hidden = true;
    if (acao === 'minimizar') janela.classList.add('minimizada');
    if (acao === 'maximizar') {
        janela.classList.toggle('maximizada');
        janela.style.translate = '';
    }
    if (acao !== 'maximizar') {
        janela.classList.remove('ativa');
        if (janela.id === 'navegador') janela.classList.remove('maximizada');
    }
    atualizarTarefas();
}

function atualizarTarefas() {
    $('#tarefas').innerHTML = $$('#navegador, .janela-app')
        .filter(j => !j.hidden)
        .map(j => `<button data-tarefa="${j.id}" class="${j.classList.contains('ativa') && !j.classList.contains('minimizada') ? 'ativa' : ''}">${icone(j.dataset.icone)} ${esc(j.dataset.titulo)}</button>`)
        .join('');
}

function clicarTarefa(id) {
    const janela = document.getElementById(id);
    const naFrente = janela.classList.contains('ativa') && !janela.classList.contains('minimizada');
    if (naFrente) acaoJanela(janela, 'minimizar');
    else abrirJanela(id);
}

// arrastar as janelas
let arrastando = null;
document.addEventListener('pointerdown', e => {
    const barra = e.target.closest('.janela-app > .barra-titulo');
    if (!barra || e.target.closest('button')) return;
    const janela = barra.parentElement;
    const ret = janela.getBoundingClientRect();
    arrastando = { janela, dx: e.clientX - ret.left, dy: e.clientY - ret.top };
    janela.style.right = 'auto';
    barra.setPointerCapture(e.pointerId);
});
document.addEventListener('pointermove', e => {
    if (!arrastando) return;
    const { janela, dx, dy } = arrastando;
    const x = Math.min(Math.max(e.clientX - dx, -janela.offsetWidth + 80), innerWidth - 80);
    const y = Math.min(Math.max(e.clientY - dy, 0), innerHeight - 60);
    janela.style.left = x + 'px';
    janela.style.top = y + 'px';
});
document.addEventListener('pointerup', () => { arrastando = null; });

// arrastar a janela principal pela barra azul
let arrastandoPrincipal = null;
document.addEventListener('pointerdown', e => {
    const barra = e.target.closest('#navegador > .barra-titulo');
    if (!barra || e.target.closest('button')) return;
    const janela = barra.parentElement;
    if (janela.classList.contains('maximizada')) return;
    const [x = 0, y = 0] = (janela.style.translate || '0px 0px').split(' ').map(parseFloat);
    arrastandoPrincipal = { janela, x0: e.clientX - x, y0: e.clientY - y };
    barra.setPointerCapture(e.pointerId);
});
document.addEventListener('pointermove', e => {
    if (!arrastandoPrincipal) return;
    const { janela, x0, y0 } = arrastandoPrincipal;
    const y = Math.max(e.clientY - y0, -janela.offsetTop);
    janela.style.translate = `${e.clientX - x0}px ${y}px`;
});
document.addEventListener('pointerup', () => { arrastandoPrincipal = null; });
document.addEventListener('dblclick', e => {
    const barra = e.target.closest('#navegador > .barra-titulo');
    if (barra && !e.target.closest('button')) acaoJanela(barra.parentElement, 'maximizar');
});


// --- paint ---

const CORES_PAINT = [
    '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', '#808040', '#004040', '#0080ff', '#004080', '#8000ff', '#804000',
    '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ffff80', '#00ff80', '#80ffff', '#8080ff', '#ff0080', '#ff8040',
];
const paint = { iniciado: false, cor: '#000000', ferramenta: 'lapis', desenhando: false, ultimo: null };

function iniciarPaint() {
    if (paint.iniciado) return;
    paint.iniciado = true;
    const canvas = $('#paint-canvas');
    const ctx = canvas.getContext('2d');
    limparPaint();

    $('#paleta').innerHTML = CORES_PAINT.map(c => `<button style="background:${c}" data-cor="${c}" title="${c}"></button>`).join('');
    $('#cor-atual').style.background = paint.cor;
    desenharPaletaPersonalizada();

    const ponto = e => {
        const r = canvas.getBoundingClientRect();
        return { x: (e.clientX - r.left) * canvas.width / r.width, y: (e.clientY - r.top) * canvas.height / r.height };
    };

    const desenhar = (de, ate) => {
        const tamanho = Number($('#paint-tamanho').value);
        if (paint.ferramenta === 'spray') {
            ctx.fillStyle = paint.cor;
            for (let i = 0; i < tamanho * 3; i++) {
                const ang = Math.random() * Math.PI * 2;
                const raio = Math.random() * tamanho * 2;
                ctx.fillRect(ate.x + Math.cos(ang) * raio, ate.y + Math.sin(ang) * raio, 1, 1);
            }
            return;
        }
        ctx.strokeStyle = paint.ferramenta === 'borracha' ? '#ffffff' : paint.cor;
        ctx.lineWidth = paint.ferramenta === 'lapis' ? Math.max(1, tamanho / 2) : tamanho * (paint.ferramenta === 'borracha' ? 2 : 1);
        ctx.lineCap = paint.ferramenta === 'lapis' ? 'square' : 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(de.x, de.y);
        ctx.lineTo(ate.x, ate.y);
        ctx.stroke();
    };

    canvas.addEventListener('pointerdown', e => {
        if (paint.ferramenta === 'balde') {
            const p = ponto(e);
            return balde(p.x, p.y);
        }
        paint.desenhando = true;
        paint.ultimo = ponto(e);
        canvas.setPointerCapture(e.pointerId);
        desenhar(paint.ultimo, paint.ultimo);
    });
    canvas.addEventListener('pointermove', e => {
        const p = ponto(e);
        $('#paint-coords').textContent = `${Math.round(p.x)},${Math.round(p.y)}`;
        if (!paint.desenhando) return;
        desenhar(paint.ultimo, p);
        paint.ultimo = p;
    });
    canvas.addEventListener('pointerup', () => { paint.desenhando = false; });
    canvas.addEventListener('pointerleave', () => { $('#paint-coords').textContent = ''; });
}

function trocarCorPaint(cor) {
    paint.cor = cor;
    $('#cor-atual').style.background = cor;
    if (paint.ferramenta === 'borracha') ferramentaPaint('lapis');
}

function hexParaRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbParaHex(r, g, b) {
    return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('');
}

// balde: pinta a area da mesma cor
function balde(x, y) {
    const canvas = $('#paint-canvas');
    const ctx = canvas.getContext('2d');
    const { width: w, height: h } = canvas;
    x = Math.floor(x);
    y = Math.floor(y);
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const imagem = ctx.getImageData(0, 0, w, h);
    const d = imagem.data;
    const visto = new Uint8Array(w * h);
    const i0 = (y * w + x) * 4;
    const alvo = [d[i0], d[i0 + 1], d[i0 + 2], d[i0 + 3]];
    const [r, g, b] = hexParaRgb(paint.cor);
    const parecido = p => {
        if (visto[p]) return false;
        const i = p * 4;
        return Math.abs(d[i] - alvo[0]) + Math.abs(d[i + 1] - alvo[1]) + Math.abs(d[i + 2] - alvo[2]) + Math.abs(d[i + 3] - alvo[3]) < 60;
    };
    const pilha = [[x, y]];
    while (pilha.length) {
        let [px, py] = pilha.pop();
        while (px > 0 && parecido(py * w + px - 1)) px--;
        let cima = false;
        let baixo = false;
        while (px < w && parecido(py * w + px)) {
            const p = py * w + px;
            visto[p] = 1;
            d.set([r, g, b, 255], p * 4);
            if (py > 0) {
                const livre = parecido(p - w);
                if (livre && !cima) pilha.push([px, py - 1]);
                cima = livre;
            }
            if (py < h - 1) {
                const livre = parecido(p + w);
                if (livre && !baixo) pilha.push([px, py + 1]);
                baixo = livre;
            }
            px++;
        }
    }
    ctx.putImageData(imagem, 0, 0);
}

// --- editar cores (igual a do paint do windows) ---

const CORES_BASICAS = [
    '#ff8080', '#ffff80', '#80ff80', '#00ff80', '#80ffff', '#0080ff', '#ff80c0', '#ff80ff',
    '#ff0000', '#ffff00', '#80ff00', '#00ff40', '#00ffff', '#0080c0', '#8080c0', '#ff00ff',
    '#804040', '#ff8040', '#00ff00', '#008080', '#004080', '#8080ff', '#800040', '#ff0080',
    '#800000', '#ff8000', '#008000', '#008040', '#0000ff', '#0000a0', '#800080', '#8000ff',
    '#400000', '#804000', '#004000', '#004040', '#000080', '#000040', '#400040', '#400080',
    '#000000', '#808000', '#808040', '#808080', '#408080', '#c0c0c0', '#400040', '#ffffff',
];

const editorCores = {
    h: 0, s: 0, l: 0, hex: '#000000', slot: 0, espectro: null,
    personalizadas: guardar.ler('cores-personalizadas', Array(16).fill('#ffffff')),
};

// matiz 0-239, sat e lum 0-240 (escala do windows)
function hslParaRgb(h, s, l) {
    const graus = h / 240 * 360;
    const sat = s / 240;
    const lum = l / 240;
    const k = n => (n + graus / 30) % 12;
    const a = sat * Math.min(lum, 1 - lum);
    const f = n => lum - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [f(0), f(8), f(4)].map(v => Math.round(v * 255));
}

function rgbParaHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0;
    let s = 0;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h /= 6;
    }
    return [Math.round(h * 240) % 240, Math.round(s * 240), Math.round(l * 240)];
}

function abrirEditorCores() {
    abrirJanela('cores');
    $('#cores-basicas').innerHTML = CORES_BASICAS.map(c => `<button style="background:${c}" data-cor-editor="${c}" title="${c}"></button>`).join('');
    desenharPersonalizadas();
    desenharEspectro();
    definirCorEditor(paint.cor);
}

function desenharPersonalizadas() {
    $('#cores-personalizadas').innerHTML = editorCores.personalizadas
        .map((c, i) => `<button style="background:${c}" data-cor-editor="${c}" data-slot="${i}" class="${i === editorCores.slot ? 'escolhido' : ''}"></button>`).join('');
}

function desenharEspectro() {
    const canvas = $('#cores-espectro');
    const ctx = canvas.getContext('2d');
    const imagem = ctx.createImageData(canvas.width, canvas.height);
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const [r, g, b] = hslParaRgb(x / canvas.width * 239, 240 - y / canvas.height * 240, 120);
            imagem.data.set([r, g, b, 255], (y * canvas.width + x) * 4);
        }
    }
    editorCores.espectro = imagem;
}

function desenharEditor() {
    const { h, s, l } = editorCores;
    const [r, g, b] = hslParaRgb(h, s, l);
    editorCores.hex = rgbParaHex(r, g, b);
    const valores = { h, s, l, r, g, b };
    $$('#cores [data-campo]').forEach(campo => {
        if (document.activeElement !== campo) campo.value = valores[campo.dataset.campo];
    });
    $('#cores-previa').style.background = editorCores.hex;

    // mira no espectro
    const canvas = $('#cores-espectro');
    const ctx = canvas.getContext('2d');
    ctx.putImageData(editorCores.espectro, 0, 0);
    const x = h / 239 * canvas.width;
    const y = (240 - s) / 240 * canvas.height;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    [[-7, 0, -2, 0], [2, 0, 7, 0], [0, -7, 0, -2], [0, 2, 0, 7]].forEach(([x1, y1, x2, y2]) => {
        ctx.moveTo(x + x1, y + y1);
        ctx.lineTo(x + x2, y + y2);
    });
    ctx.stroke();

    // barra de luminosidade
    const lum = $('#cores-lum');
    const ctxLum = lum.getContext('2d');
    for (let i = 0; i < lum.height; i++) {
        ctxLum.fillStyle = rgbParaHex(...hslParaRgb(h, s, 240 - i / lum.height * 240));
        ctxLum.fillRect(0, i, lum.width, 1);
    }
    $('#cores-seta').style.top = ((240 - l) / 240 * lum.height) + 'px';
}

function definirCorEditor(hex) {
    [editorCores.h, editorCores.s, editorCores.l] = rgbParaHsl(...hexParaRgb(hex));
    desenharEditor();
}

function acaoEditorCores(acao) {
    if (acao === 'ok') {
        trocarCorPaint(editorCores.hex);
        acaoJanela($('#cores'), 'fechar');
    }
    if (acao === 'cancelar') acaoJanela($('#cores'), 'fechar');
    if (acao === 'adicionar') {
        editorCores.personalizadas[editorCores.slot] = editorCores.hex;
        editorCores.slot = (editorCores.slot + 1) % editorCores.personalizadas.length;
        guardar.salvar('cores-personalizadas', editorCores.personalizadas);
        desenharPersonalizadas();
        desenharPaletaPersonalizada();
    }
}

function desenharPaletaPersonalizada() {
    $('#paleta-personalizada').innerHTML = editorCores.personalizadas
        .map(c => `<button style="background:${c}" data-cor="${c}" title="${c}"></button>`).join('');
}

// clicar e arrastar no espectro e na barra
function arrastarCor(canvas, aoMover) {
    const mover = e => {
        const r = canvas.getBoundingClientRect();
        aoMover(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)));
        desenharEditor();
    };
    canvas.addEventListener('pointerdown', e => {
        canvas.setPointerCapture(e.pointerId);
        mover(e);
    });
    canvas.addEventListener('pointermove', e => {
        if (e.buttons) mover(e);
    });
}

arrastarCor($('#cores-espectro'), (x, y) => {
    editorCores.h = Math.round(x * 239);
    editorCores.s = Math.round((1 - y) * 240);
});
arrastarCor($('#cores-lum'), (_x, y) => {
    editorCores.l = Math.round((1 - y) * 240);
});

$$('#cores [data-campo]').forEach(campo => {
    campo.addEventListener('input', () => {
        const valor = Number(campo.value) || 0;
        const qual = campo.dataset.campo;
        if ('hsl'.includes(qual)) {
            editorCores[qual] = Math.max(0, Math.min(qual === 'h' ? 239 : 240, valor));
        } else {
            const rgb = hexParaRgb(editorCores.hex);
            rgb['rgb'.indexOf(qual)] = Math.max(0, Math.min(255, valor));
            [editorCores.h, editorCores.s, editorCores.l] = rgbParaHsl(...rgb);
        }
        desenharEditor();
    });
});

function limparPaint() {
    const canvas = $('#paint-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function ferramentaPaint(nome) {
    if (nome === 'limpar') return confirmar('Paint', 'Apagar todo o desenho?', limparPaint);
    if (nome === 'cores') return abrirEditorCores();
    if (nome === 'enviar') {
        if (!nuvem) {
            return dialogo({ titulo: 'Paint', icone: 'information', texto: 'Enviar desenhos ainda não está ligado neste site.\nUse o disquete para salvar no seu computador. :)' });
        }
        $('#paint-enviar').hidden = false;
        return $('#paint-enviar [name=autor]').focus();
    }
    if (nome === 'cancelar-envio') {
        $('#paint-enviar').hidden = true;
        return;
    }
    if (nome === 'salvar') {
        const link = document.createElement('a');
        link.download = 'desenho-quarto-do-lucas.png';
        link.href = $('#paint-canvas').toDataURL('image/png');
        link.click();
        return;
    }
    paint.ferramenta = nome;
    $$('[data-ferramenta]').forEach(b => b.classList.toggle('ativo', b.dataset.ferramenta === nome));
}


// --- zap do lucas ---
// todo mundo conversa junto, as mensagens somem em 7 dias

const zapEstado = { timer: null, ultimoId: 0, locais: [] };

function nomeZap() {
    return souDono ? DADOS.nome : $('#zap-nome').value.trim();
}

function mensagensZap() {
    const todas = nuvem ? [...zap.todos()].reverse() : zapEstado.locais;
    return todas.slice(-100);
}

function horaZap(m) {
    return new Date(m.criado_em || Date.now()).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
}

function desenharZap() {
    const conversa = $('#msn-conversa');
    const noFim = conversa.scrollHeight - conversa.scrollTop - conversa.clientHeight < 40;
    const apagar = m => (souDono && nuvem ? ` <button class="btn-x" data-apagar="${m.id}" data-lista="zap" title="apagar">x</button>` : '');
    conversa.innerHTML = `<p><span class="quem dono-zap">${esc(DADOS.nome)} diz:</span>${textoRico(DADOS.zapBoasVindas)}</p>`
        + mensagensZap().map(m => (m.texto === '/atencao'
            ? `<p class="sistema">${esc(m.nome)} chamou a atenção!${apagar(m)}</p>`
            : `<p><span class="quem ${m.dono ? 'dono-zap' : ''}">${esc(m.nome)}${m.dono ? ' ' + icone('award_star_gold_1') : ''} diz: <small>${horaZap(m)}</small></span>${textoRico(m.texto)}${apagar(m)}</p>`)).join('');
    if (noFim) conversa.scrollTop = conversa.scrollHeight;
}

async function atualizarZap() {
    if (!nuvem) return desenharZap();
    try {
        await zap.carregar();
        const ids = zap.todos().map(m => Number(m.id));
        const novas = zap.todos().filter(m => Number(m.id) > zapEstado.ultimoId);
        if (zapEstado.ultimoId && novas.some(m => m.texto === '/atencao' && m.nome !== nomeZap())) tremerJanela($('#msn'));
        zapEstado.ultimoId = Math.max(zapEstado.ultimoId, ...ids, 0);
        desenharZap();
    } catch (erro) {
        console.error(erro);
    }
}

function abrirZap() {
    const campo = $('#zap-nome');
    campo.value = souDono ? DADOS.nome : guardar.ler('nome-zap', '');
    campo.disabled = souDono;
    atualizarZap();
    clearInterval(zapEstado.timer);
    zapEstado.timer = setInterval(() => {
        if ($('#msn').hidden) return clearInterval(zapEstado.timer);
        if (!$('#msn').classList.contains('minimizada')) atualizarZap();
    }, 5000);
    $('#msn-texto').focus();
}

async function enviarZap(texto) {
    const nome = nomeZap();
    if (!nome) {
        dialogo({ titulo: 'Zap do Lucas', icone: 'information', texto: 'Escreve seu nome antes de mandar mensagem :)' });
        $('#zap-nome').focus();
        return false;
    }
    if (!souDono && semAcento(nome) === semAcento(DADOS.nome)) {
        dialogo({ titulo: 'Zap do Lucas', icone: 'error', texto: 'Esse nome é do dono do site. Escolhe outro :P' });
        return false;
    }
    if (!souDono) guardar.salvar('nome-zap', nome);
    const mensagem = { nome, texto, dono: souDono };
    if (nuvem) {
        await zap.adicionar(mensagem);
        await atualizarZap();
    } else {
        zapEstado.locais.push({ ...mensagem, id: Date.now(), criado_em: new Date().toISOString() });
        desenharZap();
    }
    return true;
}

async function zapMandar() {
    const campo = $('#msn-texto');
    const texto = campo.value.trim();
    if (!texto) return;
    try {
        if (await enviarZap(texto)) campo.value = '';
    } catch (erro) {
        erroNuvem(erro);
    }
}

async function zapAtencao() {
    try {
        if (await enviarZap('/atencao')) tremerJanela($('#msn'));
    } catch (erro) {
        erroNuvem(erro);
    }
}

function tremerJanela(janela) {
    janela.classList.remove('tremer');
    void janela.offsetWidth; // reinicia a animacao
    janela.classList.add('tremer');
}


// --- bloco de notas e lixeira ---

function infoNotas() {
    const texto = $('#notas-texto').value;
    $('#notas-info').textContent = `${texto.length} caracteres · salvo automaticamente`;
}

function acaoNotas(acao) {
    const campo = $('#notas-texto');
    if (acao === 'novo') {
        return confirmar('Bloco de notas', 'Apagar o texto atual?', () => {
            campo.value = '';
            guardar.salvar('notas', '');
            infoNotas();
        });
    }
    if (acao === 'hora') {
        const agora = new Date();
        campo.setRangeText(`${agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} ${agora.toLocaleDateString('pt-BR')}`, campo.selectionStart, campo.selectionEnd, 'end');
        campo.dispatchEvent(new Event('input'));
        return campo.focus();
    }
    if (acao === 'salvar') {
        const link = document.createElement('a');
        link.download = 'anotacoes.txt';
        link.href = URL.createObjectURL(new Blob([campo.value], { type: 'text/plain' }));
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }
}

function mostrarLixeira() {
    const itens = guardar.ler('lixeira', DADOS.lixeira);
    $('#lista-lixeira').innerHTML = itens.map(i => `<li>${icone(i.icone || 'page_white')}${esc(i.nome)}</li>`).join('')
        || '<li style="color:#888">A Lixeira está vazia.</li>';
    $('#lixeira-info').textContent = `${itens.length} objeto(s)`;
}


// --- comandos dos menus ---

// papeis de parede (imagens/fundos)
const NOMES_FUNDOS = [
    'Chloe', 'Azul e preto', 'Kel', 'Colina com cata-vento', 'Céu Omori',
    'Campo e espada', 'Hatsune Miku', 'Castelo à noite', 'Casinha pixel', 'Aero',
    'Hikaru e Yoshiki', 'Dragão', 'Cidade à noite', 'Hora de Aventura', 'Céu e mar',
    'Fios no céu', 'Gato verde', 'Mangá', 'Deitado na grama', 'S.U',
    'Dreamcore', 'Gravity Falls', 'Finn e Princesa de Fogo', 'Fogo e gelo', 'Omori',
];

const FUNDOS = [
    { id: 'homespace', nome: 'Homespace', arquivo: 'homespace.jpg' },
    ...NOMES_FUNDOS.map((nome, i) => {
        const numero = String(i + 1).padStart(2, '0');
        return { id: `fundo-${numero}`, nome, arquivo: `fundo-${numero}.jpg` };
    }),
    { id: 'azul', nome: 'Azul clássico', cor: '#3a6ea5' },
    { id: 'noite', nome: 'Noite', classe: 'papel-noite' },
    { id: 'rosa', nome: 'Rosa', classe: 'papel-rosa' },
];

function aplicarFundo(id) {
    const fundo = FUNDOS.find(f => f.id === id) || FUNDOS[0];
    const corpo = document.body;
    corpo.classList.remove('papel-noite', 'papel-rosa', 'papel-foto');
    corpo.style.background = '';
    if (fundo.arquivo) {
        corpo.classList.add('papel-foto');
        corpo.style.backgroundImage = `url("imagens/fundos/${fundo.arquivo}")`;
    }
    if (fundo.cor) corpo.style.background = fundo.cor;
    if (fundo.classe) corpo.classList.add(fundo.classe);
    guardar.salvar('fundo', fundo.id);
    $$('[data-fundo]').forEach(botao => botao.classList.toggle('ativo', botao.dataset.fundo === fundo.id));
    const previa = $('#previa-fundo');
    if (previa) previa.style.background = fundo.arquivo ? `center / cover url("imagens/fundos/${fundo.arquivo}")` : (fundo.cor || '');
    if (previa && fundo.classe) previa.className = 'tela-monitor ' + fundo.classe;
    else if (previa) previa.className = 'tela-monitor';
}

function montarFundos() {
    const atual = guardar.ler('fundo', 'homespace');
    $('#lista-fundos').innerHTML = FUNDOS.map(f => `
        <button class="item-fundo ${f.id === atual ? 'ativo' : ''}" data-fundo="${f.id}" title="${esc(f.nome)}">
            ${f.arquivo
                ? `<img src="imagens/fundos/${f.arquivo}" alt="" loading="lazy">`
                : `<span class="amostra ${f.classe || ''}" style="${f.cor ? `background:${f.cor}` : ''}"></span>`}
            <span>${esc(f.nome)}</span>
        </button>`).join('');
    aplicarFundo(atual);
}

function aplicarZoom(valor) {
    const zoom = Math.min(1.4, Math.max(.8, Math.round(valor * 10) / 10));
    document.documentElement.style.setProperty('--zoom', zoom);
    guardar.salvar('zoom', zoom);
}

function favoritos() {
    return guardar.ler('favoritos', []);
}

function montarFavoritos() {
    const fixos = [['inicio', 'house', 'Início'], ['perfil', 'user', 'Perfil'], ['albuns', 'photo_album', 'Álbuns'], ['playlist', 'music', 'Playlist']];
    const meus = favoritos();
    $('#submenu-favoritos').innerHTML = `
        <button data-comando="favoritar">${icone('award_star_gold_1')} Adicionar aos favoritos...</button>
        <hr>
        ${fixos.map(([rota, ic, nome]) => `<a href="#${rota}">${icone(ic)} ${nome}</a>`).join('')}
        ${meus.length ? '<hr>' + meus.map(f => `<a href="#${esc(f.rota)}">${icone('page_world')} ${esc(f.nome)}</a>`).join('') : ''}
        ${meus.length ? '<hr><button data-comando="limpar-favoritos">Limpar meus favoritos</button>' : ''}`;

    $('#submenu-links').innerHTML = redes().map(r => r.link
        ? `<a href="${esc(linkSeguro(r.link))}" target="_blank" rel="noopener">${icone(r.icone)} ${esc(r.nome)}</a>`
        : `<a href="#redes">${icone(r.icone)} ${esc(r.nome)}</a>`).join('');
}

const COMANDOS = {
    'nova-guia': novaAba,
    'imprimir': () => window.print(),
    'fechar': () => acaoJanela($('#navegador'), 'fechar'),
    'voltar': () => history.back(),
    'copiar-link': () => {
        const link = DADOS.endereco + (location.hash || '#inicio');
        navigator.clipboard?.writeText(link)
            .then(() => dialogo({ titulo: 'Copiar', texto: 'Endereço copiado:\n' + link }))
            .catch(() => dialogo({ titulo: 'Copiar', texto: link }));
    },
    'buscar-pagina': () => {
        const campo = $('.nav input[type=search]');
        campo.focus();
        status('Digite o que procura e aperte Enter');
    },
    'tela-cheia': () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.().catch(() => {});
    },
    'texto-maior': () => aplicarZoom(guardar.ler('zoom', 1) + .1),
    'texto-menor': () => aplicarZoom(guardar.ler('zoom', 1) - .1),
    'texto-normal': () => aplicarZoom(1),
    'favoritar': () => {
        const { nome, arg } = rotaAtual();
        const rota = arg ? `${nome}/${arg}` : nome;
        const lista = favoritos();
        if (lista.some(f => f.rota === rota)) {
            return dialogo({ titulo: 'Favoritos', icone: 'award_star_gold_1', texto: 'Esta página já está nos seus favoritos!' });
        }
        lista.push({ rota, nome: PAGINAS[nome]?.titulo + (arg ? ` (${arg})` : '') });
        guardar.salvar('favoritos', lista);
        montarFavoritos();
        dialogo({ titulo: 'Adicionar favorito', icone: 'award_star_gold_1', texto: 'Página adicionada aos favoritos!\nVeja no menu Favoritos.' });
    },
    'limpar-favoritos': () => {
        guardar.salvar('favoritos', []);
        montarFavoritos();
    },
    'papel-parede': () => abrirJanela('fundos'),
    'limpar-dados': () => confirmar('Excluir histórico',
        nuvem
            ? 'Isso apaga as notas, favoritos e preferências salvos neste navegador.\n(os recados do servidor continuam lá)\nDeseja continuar?'
            : 'Isso apaga os recados, depoimentos, diário, notas e favoritos salvos neste navegador.\nDeseja continuar?',
        () => {
            Object.keys(localStorage).filter(k => k.startsWith('qdl-')).forEach(k => localStorage.removeItem(k));
            location.reload();
        }),
    'ajuda': () => dialogo({
        titulo: 'Ajuda e suporte', icone: 'help',
        texto: '• Use os botões do topo e do lado para navegar.\n• Deixe recados, depoimentos e entre pros meus amigos.\n• Converse com todo mundo no Zap do Lucas.\n• Desenhe no Paint e mande pra mim.\n• Arraste as janelas pela barra azul.\n• Troque o papel de parede em Ferramentas.\n• Emoticons viram imagem: :) :D :P ;) (L) (Y) (H)',
    }),
    'sobre': () => dialogo({
        titulo: 'Sobre o Quarto do Lucas', icone: 'internet_explorer',
        texto: `QUARTO DO LUCAS\nVersão 1.0 (estilo orkut, 2004–2026)\n\nFeito à mão com HTML, CSS e JavaScript.\nMelhor visualizado em 1024×768. (H)\n\nÍcones: FatCow (CC BY 3.0) · GIFs: GifCities`,
    }),
    'trancar-diario': async () => {
        if (!nuvem) return;
        await nuvem.auth.signOut();
        return atualizarDono(null);
    },
    'cancelar-edicao': () => {
        edicao = null;
        mostrarPagina();
    },
    'sorte-luucas': () => {
        const paginas = Object.entries(PAGINAS).filter(([, pagina]) => !pagina.escondida).map(([id]) => id);
        fecharAba(abaAtiva);
        ir(paginas[Math.floor(Math.random() * paginas.length)]);
    },
    'mudar-voto': () => {
        guardar.salvar('voto', null);
        preencherEnquete();
    },
    'webring': () => dialogo({
        titulo: 'Webring dos Quartos', icone: 'spider_web',
        texto: 'O próximo site do webring está fora do ar.\n(o Geocities fechou, né :\'()\n\nTente novamente mais tarde.',
    }),
    'pular-conexao': () => terminarConexao(),
    'conectar-spotify': () => conectarSpotify().catch(erroNuvem),
    'logoff': () => confirmar('Fazer logoff', 'Tem certeza que deseja fazer logoff?', () => location.reload()),
    'desligar': () => desligar(),
};


// --- formularios ---

async function entrarNoDiario(dados) {
    if (!nuvem) return false;
    const { data, error } = await nuvem.auth.signInWithPassword({ email: dados.email.trim(), password: dados.senha });
    if (error) {
        if (error.status === 400) return false; // email ou senha errado
        throw error;
    }
    await atualizarDono(data.session);
    return true;
}

async function enviarFormulario(form) {
    const dados = Object.fromEntries(new FormData(form));
    const tipo = form.dataset.form;
    const botao = form.querySelector('[type=submit]');
    if (botao) botao.disabled = true;
    status('Enviando...');

    try {
        if (tipo === 'recado') {
            await recados.adicionar({ autor: dados.autor.trim(), texto: dados.texto.trim() });
            mostrarPagina();
        }
        if (tipo === 'depoimento') {
            await depoimentos.adicionar({ autor: dados.autor.trim(), texto: dados.texto.trim() });
            mostrarPagina();
            if (!souDono) dialogo({ titulo: 'Depoimento', icone: 'heart', texto: `Depoimento enviado! Só o ${DADOS.nome} vai ler. (L)` });
        }
        if (tipo === 'diario') {
            await diario.adicionar({ titulo: dados.titulo.trim(), texto: dados.texto.trim() });
            mostrarPagina();
        }
        if (tipo === 'enquete') await votar(Number(dados.opcao));
        if (tipo === 'sorte') {
            guardar.salvar('nome-sorte', dados.nome.trim());
            $('#resultado-sorte').innerHTML = resultadoSorte(dados.nome.trim());
        }
        if (tipo === 'desenho') {
            const imagem = $('#paint-canvas').toDataURL('image/png');
            if (imagem.length > 600000) {
                return dialogo({ titulo: 'Paint', icone: 'error', texto: 'Esse desenho ficou pesado demais para enviar. Tente com menos spray. :P' });
            }
            await desenhos.adicionar({ autor: dados.autor.trim(), titulo: dados.titulo.trim(), imagem });
            form.reset();
            form.hidden = true;
            dialogo({ titulo: 'Paint', icone: 'email_go', texto: `Desenho enviado! O ${DADOS.nome} vai ver sua arte. (Y)\nSe ele aprovar, ela aparece no mural da página de recados.` });
            if (souDono) mostrarPagina();
        }
        if (tipo === 'registro' || tipo === 'noticia') {
            const nomeLista = tipo === 'registro' ? 'registros' : 'noticias';
            const item = emEdicao(nomeLista);
            if (item) await LISTAS[nomeLista].atualizar(item.id, { texto: dados.texto.trim() });
            else await LISTAS[nomeLista].adicionar({ texto: dados.texto.trim() });
            edicao = null;
            preencherRegistros();
            mostrarPagina();
        }
        if (tipo === 'projeto') {
            const link = dados.link.trim();
            if (link && linkSeguro(link) === '#') {
                return dialogo({ titulo: 'Projeto', icone: 'error', texto: 'O link tem que começar com http:// ou https://' });
            }
            const campos = {
                nome: dados.nome.trim(),
                descricao: dados.descricao.trim(),
                link: link || null,
                progresso: Math.max(0, Math.min(100, Number(dados.progresso) || 0)),
            };
            const item = emEdicao('projetos');
            if (item) await projetos.atualizar(item.id, campos);
            else await projetos.adicionar(campos);
            edicao = null;
            mostrarPagina();
        }
        if (tipo === 'avaliacao') {
            const campos = { tipo: dados.tipo, titulo: dados.titulo.trim(), nota: Number(dados.nota), comentario: dados.comentario.trim() };
            if (dados.capa?.size) campos.capa = await subirImagem(dados.capa, 'capas', 600);
            const item = emEdicao('avaliacoes');
            if (item) {
                await avaliacoes.atualizar(item.id, campos);
                if (campos.capa && item.capa) nuvem.storage.from('fotos').remove([item.capa]).catch(console.error);
            } else {
                await avaliacoes.adicionar(campos);
            }
            edicao = null;
            mostrarPagina();
        }
        if (tipo === 'perfil') {
            const valor = {
                status: dados.status.trim(),
                foto: DADOS.foto,
                perfil: linhas(dados.perfil).map(linha => {
                    const i = linha.indexOf(':');
                    return i > 0 ? [linha.slice(0, i).trim(), linha.slice(i + 1).trim()] : [linha, ''];
                }),
                sobre: dados.sobre.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean),
                gosto: linhas(dados.gosto),
                naoGosto: linhas(dados.naoGosto),
                github: dados.github.trim(),
                redes: linhas(dados.redes).slice(0, 15).map(linha => {
                    const [nome = '', usuario = '', link = ''] = linha.split('|').map(p => p.trim());
                    return { nome: nome.slice(0, 30), usuario: usuario.slice(0, 60), link };
                }).filter(r => r.nome),
            };
            const redeRuim = valor.redes.find(r => r.link && linkSeguro(r.link) === '#');
            if (redeRuim) {
                return dialogo({ titulo: 'Perfil', icone: 'error', texto: `O link do ${redeRuim.nome} tem que começar com https://` });
            }
            if (valor.github && linkSeguro(valor.github) === '#') {
                return dialogo({ titulo: 'Perfil', icone: 'error', texto: 'O link do GitHub tem que começar com https://' });
            }
            if (dados.foto?.size) valor.foto = urlFotoPostada(await subirImagem(dados.foto, 'perfil', 600));
            await salvarConfig('perfil', valor);
            preencherPerfil();
            mostrarPagina();
            dialogo({ titulo: 'Perfil', icone: 'accept', texto: 'Perfil salvo! (Y)' });
        }
        if (tipo === 'enquete-admin') {
            const opcoes = linhas(dados.opcoes).slice(0, 6);
            if (opcoes.length < 2) {
                return dialogo({ titulo: 'Enquete', icone: 'error', texto: 'Coloca pelo menos 2 opções.' });
            }
            const { error } = await nuvem.rpc('zerar_enquete');
            if (error) throw error;
            await salvarConfig('enquete', { versao: Date.now(), pergunta: dados.pergunta.trim(), opcoes });
            resultadoEnquete = opcoes.map(() => 0);
            preencherEnquete();
            mostrarPagina();
            dialogo({ titulo: 'Enquete', icone: 'accept', texto: 'Enquete nova no ar!' });
        }
        if (tipo === 'comunidade') {
            const nova = { nome: dados.nome.trim(), icone: ICONES_COMUNIDADE.includes(dados.icone) ? dados.icone : 'group', membros: Math.max(0, Number(dados.membros) || 0) };
            await salvarConfig('comunidades', [...DADOS.comunidades, nova]);
            mostrarPagina();
        }
        if (tipo === 'amigo') {
            if (!dados.foto?.size) {
                return dialogo({ titulo: 'Amigos', icone: 'error', texto: 'Escolhe uma foto sua primeiro :)' });
            }
            const foto = await fotoQuadrada(dados.foto, 128);
            await amigos.adicionar({ nome: dados.nome.trim(), foto });
            mostrarPagina();
            dialogo({ titulo: 'Amigos', icone: 'user_add', texto: 'Pronto! Agora você aparece nos meus amigos (L)' });
        }
        if (tipo === 'foto') {
            if (!arquivoEscolhido) {
                return dialogo({ titulo: 'Postar foto', icone: 'error', texto: 'Escolha uma imagem primeiro.' });
            }
            await postarFoto(dados);
            mostrarPagina();
            dialogo({ titulo: 'Postar foto', icone: 'photo_add', texto: `Foto postada no álbum "${dados.album.trim()}"! (Y)` });
        }
        if (tipo === 'senha') {
            if (await entrarNoDiario(dados)) {
                ir(dados.destino);
            } else {
                form.querySelector('[name=senha]').value = '';
                const janela = $('#navegador');
                janela.classList.remove('tremer');
                void janela.offsetWidth;
                janela.classList.add('tremer');
                dialogo({ titulo: 'Diário', icone: 'cross', texto: 'Senha incorreta! Nada de bisbilhotar. :@' });
            }
        }
    } catch (erro) {
        erroNuvem(erro);
    } finally {
        if (botao) botao.disabled = false;
    }
}


// --- eventos ---

document.addEventListener('click', e => {
    const alvo = e.target;

    // fecha os menus ao clicar fora
    const menu = alvo.closest('.menu');
    $$('.menu.aberto').forEach(m => { if (m !== menu) m.classList.remove('aberto'); });
    if (menu && alvo.closest('.menu > button')) {
        menu.classList.toggle('aberto');
        return;
    }
    if (alvo.closest('.submenu')) menu?.classList.remove('aberto');

    // fecha o menu iniciar
    if (!alvo.closest('#menu-iniciar, #botao-iniciar')) $('#menu-iniciar').hidden = true;

    const el = alvo.closest('[data-abrir], [data-comando], [data-janela], [data-tarefa], [data-aba], [data-fechar-aba], [data-apagar], [data-apagar-foto], [data-apagar-comunidade], [data-editar], [data-publicar], [data-tocar], [data-player], [data-foto], [data-lightbox], [data-ferramenta], [data-cor], [data-cor-editor], [data-cores], [data-fundo], [data-notas], [data-lixeira], [data-msn], .emoticons button, [data-sair-guia], [data-dialogo-fechar]');
    if (!el) return;
    const d = el.dataset;

    if (d.fecharAba) { e.stopPropagation(); return fecharAba(d.fecharAba); }
    if (d.abrir) { e.preventDefault(); return abrirJanela(d.abrir); }
    if (d.comando) { e.preventDefault(); return COMANDOS[d.comando]?.(); }
    if (d.janela) return acaoJanela(el.closest('.janela'), d.janela);
    if (d.tarefa) return clicarTarefa(d.tarefa);
    if (d.aba) return trocarAba(d.aba);
    if ('sairGuia' in d) { fecharAba(abaAtiva); return; }
    if ('dialogoFechar' in d) { $('#fundo-dialogo').hidden = true; return; }

    if (d.apagar) {
        const lista = LISTAS[d.lista];
        return confirmar('Apagar', 'Tem certeza que quer apagar?', () => {
            const item = lista.todos().find(i => String(i.id) === String(d.apagar));
            if (item?.capa) nuvem?.storage.from('fotos').remove([item.capa]).catch(console.error);
            lista.remover(d.apagar).then(() => {
                if (edicao?.id === d.apagar) edicao = null;
                preencherRegistros();
                if (d.lista === 'zap') desenharZap();
                else mostrarPagina();
            }, erroNuvem);
        });
    }
    if (d.editar) {
        edicao = { lista: d.editar, id: d.id };
        mostrarPagina();
        $('#central form')?.scrollIntoView({ block: 'center' });
        return;
    }
    if (d.apagarComunidade) {
        return confirmar('Apagar', 'Sair dessa comunidade?', () => {
            const lista = DADOS.comunidades.filter((_, i) => i !== Number(d.apagarComunidade));
            salvarConfig('comunidades', lista).then(mostrarPagina, erroNuvem);
        });
    }
    if (d.publicar) {
        const publico = d.valor === 'sim';
        el.disabled = true;
        return desenhos.atualizar(d.publicar, { publico }).then(() => {
            mostrarPagina();
            status(publico ? 'Desenho publicado no mural! ✔' : 'Desenho tirado do mural.');
        }, erroNuvem);
    }
    if (d.apagarFoto) {
        return confirmar('Apagar foto', 'Apagar esta foto do álbum?', () => {
            apagarFotoPostada(d.apagarFoto).then(mostrarPagina, erroNuvem);
        });
    }

    if (d.tocar) return tocar(Number(d.tocar));
    if (d.player === 'tocar') return playPause();
    if (d.player === 'anterior') return tocar(player.indice - 1);
    if (d.player === 'proxima') return tocar(player.indice + 1);
    if (d.player === 'parar') return pararMusica();
    if (d.player === 'eq' || d.player === 'pl') {
        const painel = $(d.player === 'eq' ? '#wa-eq' : '#wa-playlist');
        painel.hidden = !painel.hidden;
        el.classList.toggle('ativo', !painel.hidden);
        return;
    }

    if (d.foto) return abrirFoto(d.album, Number(d.foto));
    if (d.lightbox === 'fechar') { $('#lightbox').hidden = true; return; }
    if (d.lightbox === 'anterior') { lightbox.indice--; return mostrarFoto(); }
    if (d.lightbox === 'proxima') { lightbox.indice++; return mostrarFoto(); }

    if (d.ferramenta) return ferramentaPaint(d.ferramenta);
    if (d.cor) {
        trocarCorPaint(d.cor);
        return;
    }
    if (d.corEditor) {
        if (d.slot !== undefined) editorCores.slot = Number(d.slot);
        return definirCorEditor(d.corEditor);
    }
    if (d.cores) return acaoEditorCores(d.cores);
    if (d.fundo) return aplicarFundo(d.fundo);

    if (d.notas) return acaoNotas(d.notas);
    if (d.lixeira === 'esvaziar') {
        return confirmar('Confirmar exclusão', 'Tem certeza que deseja excluir permanentemente todos os itens da Lixeira?', () => {
            guardar.salvar('lixeira', []);
            mostrarLixeira();
        });
    }
    if (d.lixeira === 'restaurar') {
        guardar.salvar('lixeira', DADOS.lixeira);
        return mostrarLixeira();
    }
    if (d.msn === 'atencao') return zapAtencao();

    // botoes de emoticon
    if (el.matches('.emoticons button')) {
        const campo = document.getElementById(el.closest('.emoticons').dataset.alvo);
        campo.setRangeText(el.dataset.codigo, campo.selectionStart, campo.selectionEnd, 'end');
        campo.focus();
    }
});

// clicar fora fecha a foto
$('#lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') e.currentTarget.hidden = true;
});

// janela clicada vai pra frente
document.addEventListener('pointerdown', e => {
    const janela = e.target.closest('#navegador, .janela-app');
    if (janela && !janela.classList.contains('ativa')) focarJanela(janela);
});

document.addEventListener('submit', e => {
    const form = e.target;
    e.preventDefault();

    if (form.id === 'form-endereco') return abrirEndereco($('#endereco').value);
    if (form.id === 'msn-form') return zapMandar();
    if (form.matches('[data-busca]')) {
        const termo = form.querySelector('input').value.trim();
        if (abaAtiva !== 'site') fecharAba(abaAtiva);
        form.querySelector('input').blur();
        return ir('busca/' + encodeURIComponent(termo));
    }
    if (form.dataset.form) enviarFormulario(form);
});

// enter manda no msn (shift+enter pula linha)
$('#msn-texto').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        zapMandar();
    }
});

// pausa as novidades quando o mouse passa em cima
document.addEventListener('mouseover', e => e.target.closest?.('.noticias marquee')?.stop());
document.addEventListener('mouseout', e => e.target.closest?.('.noticias marquee')?.start());

document.addEventListener('keydown', e => {
    if (!$('#lightbox').hidden) {
        if (e.key === 'Escape') $('#lightbox').hidden = true;
        if (e.key === 'ArrowLeft') { lightbox.indice--; mostrarFoto(); }
        if (e.key === 'ArrowRight') { lightbox.indice++; mostrarFoto(); }
    } else if (e.key === 'Escape') {
        $('#fundo-dialogo').hidden = true;
        $('#menu-iniciar').hidden = true;
        $$('.menu.aberto').forEach(m => m.classList.remove('aberto'));
    }
});

// mostra o link na barra de status
document.addEventListener('mouseover', e => {
    const link = e.target.closest('#navegador a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    status(href.startsWith('#') ? DADOS.endereco + href : link.href);
});
document.addEventListener('mouseout', e => {
    if (e.target.closest('#navegador a[href]')) statusLivre();
});

$('#btn-voltar').addEventListener('click', () => history.back());
$('#btn-avancar').addEventListener('click', () => history.forward());
$('#btn-atualizar').addEventListener('click', () => {
    if (abaAtiva === 'site') mostrarPagina();
});
$('#endereco').addEventListener('focus', e => e.target.select());
$('#endereco').addEventListener('blur', atualizarEndereco);

$('#botao-iniciar').addEventListener('click', () => {
    $('#menu-iniciar').hidden = !$('#menu-iniciar').hidden;
});

// --- desligar e ligar o pc ---

const LOGO_WINDOWS = `
    <div class="logo-windows">
        <span class="bandeira grande" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        <span class="nome-windows">Microsoft<br><b>Windows</b><sup>xp</sup></span>
    </div>`;

function desligar() {
    $('#menu-iniciar').hidden = true;
    player.audio.pause();
    const tela = $('#tela-desligar');
    tela.dataset.estado = 'desligando';
    tela.className = 'tela-desligar desligando';
    tela.innerHTML = `${LOGO_WINDOWS}<p class="piscar">O Windows está sendo desligado...</p>`;
    tela.hidden = false;
    setTimeout(() => {
        tela.dataset.estado = 'desligado';
        tela.className = 'tela-desligar seguro';
        tela.innerHTML = '<div>Agora é seguro desligar o computador.<small>(clique em qualquer lugar para ligar de novo)</small></div>';
    }, 2600);
}

function ligar() {
    const tela = $('#tela-desligar');
    if (tela.dataset.estado !== 'desligado') return;
    tela.dataset.estado = 'ligando';
    tela.className = 'tela-desligar boot';
    tela.innerHTML = `${LOGO_WINDOWS}<div class="barra-boot"><span></span></div><small>Copyright © Quarto do Lucas</small>`;
    setTimeout(() => {
        tela.className = 'tela-desligar bem-vindo';
        tela.innerHTML = '<div class="carregando-bem-vindo"></div><h1>Bem-vindo</h1>';
    }, 3200);
    setTimeout(() => {
        tela.hidden = true;
        tela.dataset.estado = '';
    }, 5600);
}

$('#tela-desligar').addEventListener('click', ligar);

$('#player-progresso').addEventListener('click', e => {
    const { duration } = player.audio;
    if (!duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    player.audio.currentTime = (e.clientX - r.left) / r.width * duration;
});

$('#notas-texto').addEventListener('input', e => {
    guardar.salvar('notas', e.target.value);
    infoNotas();
});

window.addEventListener('hashchange', () => {
    if (abaAtiva !== 'site') fecharAba(abaAtiva);
    mostrarPagina();
});


// --- brilho no mouse e internet discada ---

const semAnimacao = matchMedia('(prefers-reduced-motion: reduce)').matches;
let ultimoBrilho = 0;
document.addEventListener('pointermove', e => {
    if (semAnimacao || e.pointerType !== 'mouse') return;
    const agora = performance.now();
    if (agora - ultimoBrilho < 45) return;
    ultimoBrilho = agora;
    const brilho = document.createElement('span');
    brilho.className = 'rastro';
    brilho.textContent = ['✦', '✧', '★', '·'][Math.floor(Math.random() * 4)];
    brilho.style.left = (e.clientX + 6) + 'px';
    brilho.style.top = (e.clientY + 6) + 'px';
    brilho.style.color = ['#ffcc00', '#ff66cc', '#66ccff', '#ffffff'][Math.floor(Math.random() * 4)];
    document.body.append(brilho);
    brilho.addEventListener('animationend', () => brilho.remove());
});

const PASSOS_CONEXAO = [
    'Discando para 0800-QUARTO...',
    'Verificando nome de usuário e senha...',
    'Registrando o computador na rede...',
    'Conectado a 56.000 bps! ✔',
];
let timersConexao = [];

function conectar() {
    let jaConectou = false;
    try { jaConectou = sessionStorage.getItem('qdl-conectado') === 'sim'; } catch { /* ok */ }
    if (jaConectou || semAnimacao) return;
    $('#discando').hidden = false;
    PASSOS_CONEXAO.forEach((texto, i) => {
        timersConexao.push(setTimeout(() => {
            $('#discando-texto').textContent = texto;
            $('#discando-barra').style.width = ((i + 1) / PASSOS_CONEXAO.length * 100) + '%';
        }, i * 900));
    });
    timersConexao.push(setTimeout(terminarConexao, PASSOS_CONEXAO.length * 900 + 300));
}

function terminarConexao() {
    timersConexao.forEach(clearTimeout);
    $('#discando').hidden = true;
    try { sessionStorage.setItem('qdl-conectado', 'sim'); } catch { /* ok */ }
}


// --- entrada do admin (5 cliques no contador) ---

let cliquesSecretos = 0;
let esperaSecreta;
$('#contador').addEventListener('click', () => {
    cliquesSecretos++;
    clearTimeout(esperaSecreta);
    esperaSecreta = setTimeout(() => { cliquesSecretos = 0; }, 1500);
    if (cliquesSecretos >= 5) {
        cliquesSecretos = 0;
        ir('admin');
    }
});

// arrastar foto pro admin
document.addEventListener('change', e => {
    if (e.target.matches('#soltar-foto input[type=file]')) return escolherFoto(e.target.files[0]);
    // mostra a foto escolhida nos outros formularios
    if (e.target.matches('.form input[type=file]')) {
        const arquivo = e.target.files[0];
        const lugar = e.target.closest('label')?.querySelector('.previa-arquivo, .arquivo-escolhido');
        if (!lugar || !arquivo) return;
        // foto de perfil aparece no quadradinho
        const quadrado = e.target.closest('[data-form="perfil"]')?.querySelector('.mini-foto');
        if (quadrado && arquivo.type.startsWith('image/')) {
            quadrado.innerHTML = `<img src="${URL.createObjectURL(arquivo)}" alt="">`;
            lugar.textContent = arquivo.name;
            return;
        }
        lugar.innerHTML = arquivo.type.startsWith('image/')
            ? `<img src="${URL.createObjectURL(arquivo)}" alt=""><br>${esc(arquivo.name)}`
            : esc(arquivo.name);
    }
});
document.addEventListener('dragover', e => {
    const zona = e.target.closest('#soltar-foto');
    if (!zona) return;
    e.preventDefault();
    zona.classList.add('arrastando');
});
document.addEventListener('dragleave', e => {
    e.target.closest('#soltar-foto')?.classList.remove('arrastando');
});
document.addEventListener('drop', e => {
    const zona = e.target.closest('#soltar-foto');
    if (!zona) return;
    e.preventDefault();
    zona.classList.remove('arrastando');
    escolherFoto(e.dataTransfer.files[0]);
});


// --- relogio e inicio ---

function relogio() {
    $('#relogio').textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function iniciar() {
    preencherIcones();
    $$('.emoticons[data-preencher]').forEach(el => { el.innerHTML = botoesEmoticons(); });
    aplicarFundo(guardar.ler('fundo', 'homespace'));
    aplicarZoom(guardar.ler('zoom', 1));
    preencherPerfil();
    caixaDiario();
    preencherRegistros();
    preencherEnquete();
    montarFavoritos();
    atualizarPlayer();
    $('#notas-texto').value = guardar.ler('notas', '');
    infoNotas();
    mostrarPagina();
    atualizarTarefas();
    $('#ultima-atualizacao').textContent = new Date(document.lastModified).toLocaleDateString('pt-BR');
    relogio();
    setInterval(relogio, 10000);
    conectar();
    carregarDaNuvem();
    preencherOuvindo();
    carregarPlaylistSpotify();
    if (DADOS.lastfm.usuario) {
        carregarLastfm();
        setInterval(carregarLastfm, 60000);
    }
}

async function carregarDaNuvem() {
    preencherContador().catch(console.error);
    if (!nuvem) return;
    nuvem.auth.onAuthStateChange((_evento, sessao) => {
        // sem await aqui dentro
        setTimeout(() => atualizarDono(sessao).catch(erroNuvem));
    });
    try {
        await carregarConfig();
        await Promise.all([recados.carregar(), registros.carregar(), fotosPostadas.carregar(), desenhos.carregar(),
            noticias.carregar(), projetos.carregar(), avaliacoes.carregar(), amigos.carregar(), carregarEnquete()]);
    } catch (erro) {
        [recados, registros, fotosPostadas, desenhos, noticias, projetos, avaliacoes, amigos].forEach(l => { l.pronto = true; });
        erroNuvem(erro);
    }
    depoimentos.pronto = true;
    preencherPerfil();
    preencherEnquete();
    preencherRegistros();
    mostrarPagina();
}

iniciar();
