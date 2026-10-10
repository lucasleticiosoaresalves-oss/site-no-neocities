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

    // emoticons do msn: :) :D :P ;) :( :'( :O :@ (H) (L) (U) (Y) (K) (*) (8) (F) 8-| (A) (6) (C) (B) (pi)... (lista toda no GRUPOS_EMOTICONS)
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

    // o que tem na lixeira (mudo pelo admin)
    lixeira: [
        { nome: 'trabalho_FINAL_agora_vai_v7.doc', conteudo: 'introdução: ...\n\n(nunca terminei)' },
        { nome: 'senhas_secretas.txt', conteudo: 'achou que ia ser fácil né :P' },
        { nome: 'virus_nao_abrir.exe', conteudo: 'eu falei pra não abrir!!! :@' },
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

// emoticons do msn (os de letra sozinha so funcionam em maiusculo pra nao pegar "amigo(s)")
const GRUPOS_EMOTICONS = [
    [[':)', ':-)'], 'emotion_smile'], [[':D', ':d', ':-D'], 'emotion_bigsmile'], [[';)', ';-)'], 'emotion_wink'],
    [[':P', ':p', ':-P'], 'emotion_tongue'], [[':(', ':-('], 'emotion_sad'], [[":'("], 'emotion_cry'],
    [[':O', ':o', ':-O'], 'emotion_suprised'], [[':@', ':-@'], 'emotion_angry'], [['(H)', '(h)'], 'emotion_cool'],
    [[':$', ':-$'], 'emotion_shame'], [[':S', ':s', ':-S'], 'emotion_confuse'], [[':|', ':-|'], 'emotion_doubt'],
    [['8-|'], 'emotion_nerd'], [['+o('], 'emotion_sick'], [['|-)'], 'emotion_sleep'], [['<:o)'], 'emotion_party'],
    [['*-)'], 'emotion_question'], [['8o|'], 'emotion_mad'], [['^o)'], 'emotion_snooty'], [[':-#'], 'emotion_silent'],
    [['(brb)'], 'emotion_bye_bye'], [['(6)'], 'emotion_devil'], [['(A)'], 'emotion_angel'], [['(K)'], 'emotion_kiss'],
    [['(L)', '(l)'], 'heart'], [['(U)', '(u)'], 'heart_break'], [['(Y)', '(y)'], 'thumb_up'], [['(N)', '(n)'], 'thumb_down'],
    [['(*)'], 'award_star_gold_1'], [['(8)'], 'music'], [['(F)'], 'flower'], [['(W)'], 'emotion_flower_dead'],
    [['(M)'], 'msn_messenger'], [['(@)'], 'cat'], [['(&)'], 'dog'], [['(S)'], 'half_moon'], [['(#)'], 'weather_sun'],
    [['(R)'], 'rainbow'], [['(E)'], 'email'], [['(~)'], 'film'], [['(T)'], 'telephone'], [['(mp)'], 'iphone'],
    [['(G)'], 'gift_add'], [['(^)'], 'cake'], [['(C)'], 'tea_cup'], [['(D)'], 'drink'], [['(B)'], 'beer'],
    [['(pi)'], 'pizza'], [['(I)'], 'lightbulb'], [['(O)'], 'clock'], [['(sn)'], 'snail'], [['(au)'], 'car'],
    [['(ap)'], 'plane'], [['(um)'], 'umbrella'], [['(li)'], 'lightning'], [['(mo)'], 'money'], [['(co)'], 'computer'],
    [['(P)'], 'camera'], [['(Z)'], 'user'], [['(X)'], 'user_student_female'], [['(haha)'], 'emotion_haha'],
    [['(love)'], 'emotion_love'], [['(louco)'], 'emotion_crazy'], [['(ufa)'], 'emotion_whew'], [['(fome)'], 'emotion_hungry'],
    [['(fantasma)'], 'emotion_ghost'], [['(caveira)'], 'emotion_skull'], [['(joaninha)'], 'ladybird'],
    [['(borboleta)'], 'butterfly'], [['(sorvete)'], 'icecream'],
];
const EMOTICONS = GRUPOS_EMOTICONS.flatMap(([codigos, nome]) => codigos.map(codigo => [codigo, nome]));
// os maiores primeiro pra "8-|" nao virar "(8)" pela metade
const REGEX_EMOTICONS = new RegExp('(' + EMOTICONS
    .map(([codigo]) => codigo)
    .sort((x, y) => y.length - x.length)
    .map(codigo => codigo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|') + ')', 'g');

function imagemEmoticon(codigo) {
    const [, nome] = EMOTICONS.find(([c]) => c === codigo);
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

// amigo cadastrado com esse nome (sem ligar pra maiuscula e acento)
function amigoPeloNome(nome) {
    const chave = semAcento(String(nome || '').trim());
    if (!chave) return null;
    return amigos.todos().find(a => semAcento(String(a.nome).trim()) === chave) || null;
}

function avatar(nome, classe = '') {
    const cadastrado = amigoPeloNome(nome);
    const foto = cadastrado && imagemSegura(cadastrado.foto);
    if (foto) return `<img class="avatar foto-amigo ${classe}" src="${esc(foto)}" alt="" title="${esc(cadastrado.nome)} é amigo do ${esc(DADOS.nome)}">`;
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
    const botao = ([codigos, nome]) => `<button type="button" data-codigo="${esc(codigos[0])}" title="${esc(codigos[0])}">${icone(nome)}</button>`;
    // os 12 de sempre e o resto escondido no "mais"
    return GRUPOS_EMOTICONS.slice(0, 12).map(botao).join('')
        + `<button type="button" class="mais-emoticons" data-mais-emoticons title="mais emoticons">▼</button>`
        + `<span class="todos-emoticons" hidden>${GRUPOS_EMOTICONS.slice(12).map(botao).join('')}</span>`;
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
    const mensagem = String(erro?.message || erro || '');
    let texto = 'Não consegui falar com o servidor. :(\nTente de novo daqui a pouco.';
    if (/muitas mensagens/.test(mensagem)) texto = 'Muita gente escrevendo ao mesmo tempo!\nEspere alguns minutos e tente de novo.';
    else if (mensagem === 'foto-invalida') texto = 'Não consegui abrir essa foto. :(\nTente outra imagem (JPG ou PNG).';
    else if (erro?.code === '23514') texto = 'Alguma coisa ficou grande demais ou vazia.\nConfere e tenta de novo.';
    else if (/fetch|network|load failed/i.test(mensagem)) texto = 'Sem conexão com o servidor. :(\nConfere a internet e tenta de novo.';
    // o codigo do erro ajuda a descobrir o que aconteceu
    const codigo = [erro?.code, mensagem].filter(Boolean).join(' - ').slice(0, 120);
    dialogo({ titulo: 'Erro', icone: 'error', texto: codigo ? `${texto}\n\n[erro: ${codigo}]` : texto });
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
    if (chave === 'lixeira') DADOS.lixeira = valor;
    if (chave === 'mp3') DADOS.mp3 = valor;
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

// nome que a pessoa usou da ultima vez (cadastro de amigo, recado, zap...)
function meuNome() {
    return guardar.ler('meu-nome', '') || guardar.ler('nome-zap', '') || guardar.ler('nome-sorte', '');
}

function lembrarNome(nome) {
    const limpo = String(nome || '').trim();
    if (limpo && !souDono) guardar.salvar('meu-nome', limpo.slice(0, 30));
}

function blocoRecado(r, comBotao, nomeLista = 'recados') {
    return `
        <div class="recado">
            ${avatar(r.autor)}
            <div class="corpo">
                <b>${esc(r.autor)}${amigoPeloNome(r.autor) ? ` ${icone('heart')}` : ''}:</b> ${formatar(r.texto)}
                <div class="meta"><span>${esc(r.data)}</span>${comBotao && podeApagar() ? `<button class="btn-x" data-apagar="${r.id}" data-lista="${nomeLista}">apagar</button>` : ''}</div>
            </div>
        </div>`;
}

function formRecado(id, compacto) {
    return `
        <form class="form" data-form="recado">
            <input name="autor" placeholder="seu nome" maxlength="30" value="${esc(souDono ? DADOS.nome : meuNome())}" required>
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
    const nomeSorte = guardar.ler('nome-sorte', '') || meuNome();
    const ultimos = recados.todos().slice(0, 12);
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
                    <div class="previa-recados">${ultimos.map(r => blocoRecado(r, false)).join('') || mensagemVazia(recados, 'nenhum recado ainda')}</div>
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
                    ${amigos.todos().length ? `<div class="grade-amigos lista-amigos">
                        ${amigos.todos().slice(0, 6).map(a => `<div class="amigo">${fotoAmigo(a)}${esc(a.nome)}</div>`).join('')}
                    </div>` : mensagemVazia(amigos, 'nenhum amigo ainda')}
                    <div class="caixa-titulo" style="margin-top:10px"><h3>Comunidades <small>(${DADOS.comunidades.length})</small></h3><a class="mini-link" href="#comunidades">ver</a></div>
                    <div class="lugar-comunidades">
                        <div class="grade-amigos lista-comunidades">
                            ${DADOS.comunidades.slice(0, 6).map(c => `<a class="comunidade" href="#comunidades" title="${esc(c.nome)}"><span class="icone">${icone(c.icone, 32)}</span>${esc(c.nome)}</a>`).join('')}
                        </div>
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
        </div>` : ''}
        ${avaliacoes.todos().length ? `
        <div class="caixa">
            <div class="caixa-titulo"><h2>Avaliações</h2><a class="mini-link" href="#avaliacoes">ver todas</a></div>
            <div class="avaliacoes-inicio">
                ${avaliacoes.todos().slice(0, 6).map(a => `
                    <a class="avaliacao-inicio" href="#avaliacoes/${esc(a.tipo)}" title="${esc(a.titulo)}">
                        ${capaAvaliacao(a)}
                        <span class="texto">${esc(a.titulo)}</span>
                        ${estrelas(a.nota)}
                    </a>`).join('')}
            </div>
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
                    <input name="autor" placeholder="seu nome" maxlength="30" value="${esc(meuNome())}" required>
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
            <div id="ouvindo-pagina">${blocoMaisOuvida()}${listaOuvindo(7)}</div>
                    </div>` : ''}
        <div class="caixa">
            <h2>Playlist <small>(${musicas().length} ${musicas().length === 1 ? "música" : "músicas"}${spotify.musicas?.length ? ` · <span class="texto-brilho nome-playlist">${esc(spotify.playlist?.nome || 'minha playlist')}</span> no Spotify` : ''})</small></h2>
            <div class="centro">${gif('notas')}</div>
            <table class="tabela-musicas">
                <thead><tr><th>#</th><th>Título</th><th>Artista</th><th>Tempo</th><th></th></tr></thead>
                <tbody>
                    ${musicas().map((m, i) => `
                        <tr class="${i === player.indice && player.comecou ? 'tocando' : ''}">
                            <td>${i + 1}</td><td><a href="${esc(linkMinhaPlaylist(m))}" target="_blank" rel="noopener" title="abrir minha playlist no Spotify">${esc(m.titulo)}</a>${m.arquivo ? ` ${icone('sound')}` : ''}</td><td>${esc(m.artista)}</td><td>${duracao(m.duracao)}</td>
                            <td><button class="btn pequeno" data-tocar="${i}">▶ tocar</button></td>
                        </tr>`).join('')}
                </tbody>
            </table>
            ${spotify.playlist?.link ? `<p class="centro"><a class="link-playlist" href="${esc(linkSeguro(spotify.playlist.link))}" target="_blank" rel="noopener">${icone('headphone')} ouvir no Spotify</a></p>` : ''}
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
                <input name="nome" placeholder="seu nome ou apelido" maxlength="30" value="${esc(meuNome())}" required>
                <button class="btn rosa" type="submit">${icone('user_add')} entrar pros amigos</button>
                ${amigoPeloNome(meuNome()) ? `<span class="dica">${icone('heart')} você já está nos amigos como <b>${esc(amigoPeloNome(meuNome()).nome)}</b>!</span>` : ''}
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
    ['lixeira', 'bin_recycle', 'Lixeira'],
    ['recebidos', 'email', 'Recebidos'],
    ['spotify', 'music', 'Spotify'],
    ['winamp', 'cd', 'Winamp (mp3)'],
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
        enquete: adminEnquete, comunidades: adminComunidades, lixeira: adminLixeira, recebidos: adminRecebidos, spotify: adminSpotify, winamp: adminWinamp,
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

function adminWinamp() {
    const lista = spotify.musicas || [];
    const mp3 = DADOS.mp3 || {};
    return `
        <div class="caixa">
            <h2>Músicas inteiras no Winamp</h2>
            <p class="dica" style="margin-top:0">A lista vem da sua playlist do Spotify. Sem mp3 o Winamp toca só um pedacinho (coisa do Spotify).
                Colocando o mp3 da música aqui ela toca inteira pra todo mundo.</p>
            ${lista.length ? lista.map(m => {
                const id = idSpotify(m);
                return `
                <div class="recado"><div class="corpo">
                    ${icone(mp3[id] ? 'sound' : 'music')} <b>${esc(m.artista)} - ${esc(m.titulo)}</b>
                    ${mp3[id]
                        ? `<span class="dica">mp3 colocado ✓</span> <button class="btn-x" data-tirar-mp3="${esc(id)}">tirar mp3</button>`
                        : `<form class="form form-mp3" data-form="mp3">
                            <input type="hidden" name="id" value="${esc(id)}">
                            <label class="btn pequeno">${icone('music')} escolher mp3
                                <input type="file" name="arquivo" accept="audio/*,.mp3" class="so-leitor" required>
                                <span class="arquivo-escolhido"></span>
                            </label>
                            <button class="btn rosa pequeno" type="submit">${icone('disk')} colocar</button>
                        </form>`}
                </div></div>`;
            }).join('') : '<p class="vazio">a playlist do Spotify ainda não carregou</p>'}
        </div>`;
}

let edicaoLixeira = null;

function adminLixeira() {
    const editando = DADOS.lixeira[edicaoLixeira];
    return `
        <div class="caixa">
            <h2>Lixeira <small>(${DADOS.lixeira.length} arquivos)</small></h2>
            <p class="dica" style="margin-top:0">Esconda coisas aqui. Quem abrir a Lixeira vê os arquivos e pode clicar pra ler o que tem dentro.</p>
            ${DADOS.lixeira.map((a, i) => `
                <div class="recado"><div class="corpo">
                    ${icone(iconeArquivo(a.nome))} <b>${esc(a.nome)}</b>${a.imagem ? ` ${icone('picture_add')}` : ''}
                    <p style="margin:4px 0;white-space:pre-wrap">${esc((a.conteudo || '').slice(0, 140))}${(a.conteudo || '').length > 140 ? '...' : ''}</p>
                    <div class="meta"><button class="btn-x" data-editar-lixeira="${i}">editar</button> <button class="btn-x" data-apagar-lixeira="${i}">apagar</button></div>
                </div></div>`).join('') || '<p class="vazio">a lixeira está vazia</p>'}
        </div>
        <div class="caixa">
            <h2>${editando ? 'Editar arquivo' : 'Jogar um arquivo na lixeira'}</h2>
            <form class="form" data-form="lixeira">
                <input name="nome" placeholder="nome do arquivo (ex: diario_secreto.txt)" maxlength="60" required value="${esc(editando?.nome || '')}">
                <textarea name="conteudo" rows="6" maxlength="3000" placeholder="o que tem dentro do arquivo...">${esc(editando?.conteudo || '')}</textarea>
                <label class="btn pequeno">${icone('picture_add')} ${editando?.imagem ? 'trocar a imagem' : 'imagem dentro do arquivo (opcional)'}
                    <input type="file" name="imagem" accept="image/*" class="so-leitor">
                    <span class="arquivo-escolhido"></span>
                </label>
                ${editando?.imagem ? '<label><input type="checkbox" name="semImagem"> tirar a imagem</label>' : ''}
                <span class="dica">o ícone muda pelo final do nome: .txt, .doc, .jpg, .mp3, .exe...</span>
                <div class="linha">
                    <button class="btn rosa" type="submit">${icone('disk')} ${editando ? 'salvar' : 'jogar na lixeira'}</button>
                    ${editando ? '<button class="btn" type="button" data-cancelar-lixeira="1">cancelar</button>' : ''}
                </div>
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
    secreto: { titulo: 'Área secreta', render: paginaSecreta, escondida: true },
};

// area secreta (abre pela calculadora)
function paginaSecreta() {
    return `
        <div class="caixa">
            <div class="area-secreta">
                ${gif('cadeado')}
                <h2>ÁREA SECRETA</h2>
                <p>você descobriu a senha. parabéns. (H)</p>
                <p class="piscar-cursor">em breve tem coisa aqui</p>
            </div>
        </div>`;
}


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
    tituloComZap();
    $('#titulo-navegador').textContent = `${titulo} - QUARTO DO LUCAS - Microsoft Internet Explorer`;
    atualizarEndereco();
    atualizarAbas();

    // efeito de carregando
    caixaMural();
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
    if (location.hash === '#' + rota) {
        mostrarPagina();
        descerProConteudo();
    } else {
        location.hash = rota;
    }
}

// no celular o conteudo fica embaixo do perfil, entao desce ate ele quando troca de aba
const CELULAR_ESTREITO = matchMedia('(max-width: 720px)');
function descerProConteudo() {
    if (!CELULAR_ESTREITO.matches) return;
    const suave = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    requestAnimationFrame(() => $('#central').scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' }));
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
    const aba = abas.find(a => a.id === abaAtiva);
    if (aba?.tipo === 'nova') aba.tipo = 'site';
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

// cada aba de site lembra a pagina dela (rota)
let abas = [{ id: 'site', tipo: 'site', rota: 'inicio' }];
let abaAtiva = 'site';
let contadorAbas = 0;

function tituloDaRota(rota) {
    return PAGINAS[String(rota || 'inicio').split('/')[0]]?.titulo || 'Erro';
}

function atualizarAbas() {
    const ativa = abas.find(a => a.id === abaAtiva);
    if (ativa?.tipo === 'site') ativa.rota = location.hash.slice(1) || 'inicio';
    $('#abas').innerHTML = abas.map(a => `
        <button class="aba ${a.id === abaAtiva ? 'ativa' : ''}" data-aba="${a.id}">
            ${icone('internet_explorer')} ${a.tipo === 'nova' ? 'Nova guia' : 'QUARTO DO LUCAS · ' + esc(tituloDaRota(a.rota))}
            ${abas.length > 1 ? `<span class="fechar-aba" data-fechar-aba="${a.id}" title="Fechar guia">✕</span>` : ''}
        </button>`).join('') + '<button class="aba nova" data-comando="nova-guia" title="Nova guia">+</button>';

    const nova = abas.find(a => a.id === abaAtiva).tipo === 'nova';
    $('#pagina-site').hidden = nova;
    $('#pagina-nova-guia').hidden = !nova;
}

function novaAba() {
    const id = 'nova' + (++contadorAbas);
    abas.push({ id, tipo: 'nova' });
    trocarAba(id);
    // cada aba nova comeca com a pesquisa vazia
    const campo = $('#pagina-nova-guia input');
    campo.value = '';
    campo.focus();
}

function trocarAba(id) {
    const antiga = abas.find(a => a.id === abaAtiva);
    if (antiga?.tipo === 'site') antiga.rota = location.hash.slice(1) || 'inicio';
    abaAtiva = id;
    const nova = abas.find(a => a.id === id);
    // cada aba de site mostra a pagina dela
    if (nova.tipo === 'site' && (location.hash.slice(1) || 'inicio') !== nova.rota) {
        history.replaceState(null, '', '#' + nova.rota);
        mostrarPagina();
    }
    atualizarAbas();
    atualizarEndereco();
}

function fecharAba(id) {
    if (abas.length <= 1) return;
    const posicao = abas.findIndex(a => a.id === id);
    abas = abas.filter(a => a.id !== id);
    if (abaAtiva === id) {
        abaAtiva = null;
        return trocarAba(abas[Math.max(0, posicao - 1)].id);
    }
    atualizarAbas();
    atualizarEndereco();
}

// a aba "nova guia" vira uma aba do site quando pesquisa ou clica num link
function abaNovaViraSite(rota) {
    const aba = abas.find(a => a.id === abaAtiva);
    if (aba?.tipo !== 'nova') return false;
    aba.tipo = 'site';
    aba.rota = rota;
    if ((location.hash.slice(1) || 'inicio') === rota) {
        mostrarPagina();
        atualizarAbas();
        atualizarEndereco();
    } else {
        location.hash = rota;
    }
    return true;
}

// depois de arrastar, o clique que vem junto nao conta (so ele, logo em seguida)
function ignorarCliqueLogo(el) {
    const bloqueia = ev => { ev.stopPropagation(); ev.preventDefault(); };
    el.addEventListener('click', bloqueia, { capture: true, once: true });
    setTimeout(() => el.removeEventListener('click', bloqueia, { capture: true }), 60);
}

// arrastar as abas pro lado pra mudar a ordem
(() => {
    let arrasto = null;
    $('#abas').addEventListener('pointerdown', e => {
        const aba = e.target.closest('.aba[data-aba]');
        if (!aba || e.target.closest('[data-fechar-aba]')) return;
        arrasto = { aba, id: aba.dataset.aba, x: e.clientX, mexeu: false };
    });
    window.addEventListener('pointermove', e => {
        if (!arrasto) return;
        const dx = e.clientX - arrasto.x;
        if (!arrasto.mexeu && Math.abs(dx) < 6) return;
        arrasto.mexeu = true;
        arrasto.aba.classList.add('arrastando');
        arrasto.aba.style.transform = `translateX(${dx}px)`;
        // troca de lugar quando passa do meio da vizinha
        const outras = $$('#abas .aba[data-aba]').filter(b => b !== arrasto.aba);
        const meio = arrasto.aba.getBoundingClientRect();
        const centro = meio.left + meio.width / 2;
        const de = abas.findIndex(a => a.id === arrasto.id);
        let para = outras.filter(b => { const r = b.getBoundingClientRect(); return centro > r.left + r.width / 2; }).length;
        if (para !== de) {
            const [movida] = abas.splice(de, 1);
            abas.splice(para, 0, movida);
            atualizarAbas();
            arrasto.aba = $(`#abas .aba[data-aba="${arrasto.id}"]`);
            arrasto.x = e.clientX;
            arrasto.aba.classList.add('arrastando');
        }
    });
    window.addEventListener('pointerup', () => {
        if (!arrasto) return;
        if (arrasto.mexeu) {
            arrasto.aba.classList.remove('arrastando');
            arrasto.aba.style.transform = '';
            ignorarCliqueLogo($('#abas'));
        }
        arrasto = null;
    });
})();


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

// clicar nos recados do inicio abre a pagina de recados
document.addEventListener('click', e => {
    if (!e.target.closest?.('.previa-recados') || e.target.closest('a, button')) return;
    location.hash = '#recados';
});

// mini mural com os desenhos aprovados (embaixo do diario)
function caixaMural() {
    const caixa = $('#caixa-mural');
    if (!caixa) return;
    const lista = desenhosPublicos().slice(0, 4);
    caixa.innerHTML = `<h3>${icone('palette')} Mural</h3>`
        + (lista.length
            ? `<div class="mini-mural">${lista.map((d, i) => `
                <button data-desenho-mural="${i}" title="${esc(d.titulo)} por ${esc(d.autor)}">
                    <img src="${esc(imagemSegura(d.imagem))}" alt="${esc(d.titulo)}" loading="lazy">
                </button>`).join('')}</div>
               <a class="mini-link" href="#recados">ver o mural todo</a>`
            : `<p class="vazio">nenhum desenho aqui ainda...</p>`)
        + `<p style="margin:4px 0 0"><button class="btn pequeno" data-abrir="paint">${icone('palette')} desenhar</button></p>`;
}

function abrirDesenhoMural(i) {
    lightbox.fotos = desenhosPublicos().map(d => ({ src: imagemSegura(d.imagem), legenda: `${d.titulo} - por ${d.autor}` }));
    lightbox.indice = i;
    mostrarFoto();
    $('#lightbox').hidden = false;
}

// minha foto pequena (registros)
function minhaFotoMini() {
    const foto = imagemSegura(DADOS.foto);
    return foto ? `<img class="avatar" src="${esc(foto)}" alt="">` : avatar(DADOS.nome);
}

function preencherRegistros() {
    $('#registros').classList.add('rola');
    $('#registros').innerHTML = registros.todos().map(r => `
        <div class="registro">
            ${minhaFotoMini()}
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


// --- playlist do spotify ---

const URL_SPOTIFY = DADOS.supabase.url ? `${DADOS.supabase.url}/functions/v1/spotify` : '';
const spotify = { musicas: null, playlist: null, conectado: false, atualizado: null };

// se o spotify nao carregar usa a lista do DADOS
function musicas() {
    if (!spotify.musicas?.length) return DADOS.musicas;
    // se eu coloquei mp3 nessa musica ela toca inteira
    return spotify.musicas.map(m => {
        const caminho = (DADOS.mp3 || {})[idSpotify(m)];
        return caminho && nuvem ? { ...m, arquivo: urlMusica(caminho) } : m;
    });
}

function urlMusica(caminho) {
    return nuvem.storage.from('musicas').getPublicUrl(caminho).data.publicUrl;
}

// clicar na musica abre a minha playlist
function linkMinhaPlaylist(m) {
    return linkSeguro(spotify.playlist?.link || m.link || linkYoutube(m));
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
            spotify.musicas = dados.musicas;
            if (!player.comecou) {
                player.indice = 0;
                // ja deixa o player do spotify pronto pro play
                carregarSpotify(idSpotify(spotify.musicas[0]));
            }
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

// --- player (winamp) ---

const player = { indice: 0, audio: new Audio(), tocando: false, comecou: false, parado: false };

function linkYoutube(m) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(`${m.titulo} ${m.artista}`);
}

function atualizarPlayer(pagina = true) {
    const m = musicas()[player.indice];
    const caixa = $('#player');
    caixa.classList.toggle('tocando', player.tocando);
    $('.tela-player', caixa).classList.toggle('parado', !player.tocando);
    $('#player-titulo').textContent = player.comecou ? `♪ ${m.titulo} - ${m.artista} ♪` : '♪ aperte o play ♪';
    $('#player-play').innerHTML = icone(player.tocando ? 'control_pause' : 'control_play');
    $('#player-play').title = player.tocando ? 'Pausar' : 'Tocar';
    $('#lista-player').innerHTML = musicas().map((musica, i) => `
        <li class="${i === player.indice && player.comecou ? 'atual' : ''}">
            <a href="${esc(linkMinhaPlaylist(musica))}" target="_blank" rel="noopener" title="abrir minha playlist no Spotify"><span>${i + 1}. ${esc(musica.artista)} - ${esc(musica.titulo)}</span><span>${duracao(musica.duracao)}</span></a>
        </li>`).join('');
    const total = musicas().reduce((soma, m) => soma + (Number(m.duracao) || 0), 0);
    $('#wa-total').textContent = total ? `${duracao(total)}` : '--:--';
    if (pagina && rotaAtual().nome === 'playlist') mostrarPagina();
}

// cada dia da semana o winamp tem uma cor (a skin base e roxa)
const CORES_WINAMP = [
    ['domingo', 'roxo', 0], ['segunda', 'azul', -55], ['terça', 'verde-água', -95], ['quarta', 'verde', -165],
    ['quinta', 'laranja', -225], ['sexta', 'rosa', 50], ['sábado', 'vermelho', 85],
];

function corWinamp() {
    const [dia, cor, giro] = CORES_WINAMP[new Date().getDay()];
    const winamp = $('#player');
    winamp.style.filter = giro ? `hue-rotate(${giro}deg)` : '';
    winamp.title = `winamp de ${dia}: ${cor}`;
}

// o som vem de um player do spotify escondido, o winamp so controla ele
const embed = { iframe: null, id: '', pronto: false, fila: [], total: 0 };

function idSpotify(m) {
    return /open\.spotify\.com\/track\/([A-Za-z0-9]+)/.exec(m?.link || '')?.[1] || '';
}

function mandarSpotify(comando) {
    if (!embed.pronto) return embed.fila.push(comando);
    embed.iframe.contentWindow.postMessage(comando, 'https://open.spotify.com');
}

function carregarSpotify(id) {
    if (!id || id === embed.id) return;
    if (!embed.iframe) {
        embed.iframe = document.createElement('iframe');
        embed.iframe.title = 'spotify';
        embed.iframe.allow = 'autoplay; encrypted-media';
        embed.iframe.width = 300;
        embed.iframe.height = 80;
        $('#spotify-escondido').append(embed.iframe);
    }
    embed.id = id;
    embed.pronto = false;
    embed.fila = [];
    embed.total = 0;
    embed.iframe.src = `https://open.spotify.com/embed/track/${id}`;
}

// recados que o player do spotify manda
window.addEventListener('message', e => {
    if (!embed.iframe || e.source !== embed.iframe.contentWindow || e.origin !== 'https://open.spotify.com') return;
    const { type, payload } = e.data || {};
    if (type === 'ready') {
        embed.pronto = true;
        mandarSpotify({ command: 'load_complete_ack' });
        embed.fila.splice(0).forEach(mandarSpotify);
    }
    if (type === 'playback_update' && payload) tempoSpotify(payload);
});

function tempoSpotify({ isPaused, isBuffering, position, duration }) {
    if (musicas()[player.indice]?.arquivo) return;
    embed.total = duration;
    // depois do stop fica no 00:00
    if (player.parado) {
        if (isPaused) return;
        player.parado = false;
    }
    $('#player-progresso span').style.width = duration ? (position / duration * 100) + '%' : '0';
    $('#wa-tempo').textContent = duracao(position, true);
    const tocando = !isPaused || Boolean(isBuffering);
    if (tocando !== player.tocando) {
        player.tocando = tocando;
        atualizarPlayer(false);
    }
    // acabou a musica, vai pra proxima
    if (isPaused && duration && position >= duration - 800 && player.comecou) {
        embed.total = 0;
        tocar(player.indice + 1);
    }
}

function tocar(i) {
    const total = musicas().length;
    player.indice = (i + total) % total;
    player.comecou = true;
    const m = musicas()[player.indice];
    const id = idSpotify(m);
    player.parado = false;
    if (m.arquivo) {
        // mp3 inteiro
        if (embed.id) mandarSpotify({ command: 'pause' });
        player.audio.src = m.arquivo;
        player.audio.play().catch(() => {
            player.tocando = false;
            atualizarPlayer();
        });
    } else if (id) {
        player.audio.pause();
        carregarSpotify(id);
        mandarSpotify({ command: 'play' });
    } else {
        player.tocando = false;
        window.open(linkMinhaPlaylist(m), '_blank', 'noopener');
    }
    atualizarPlayer();
}

function playPause() {
    const m = musicas()[player.indice];
    if (player.comecou && m.arquivo && player.audio.src) {
        if (player.audio.paused) player.audio.play().catch(() => {});
        else player.audio.pause();
        return;
    }
    if (!player.comecou || !embed.id) return tocar(player.indice);
    player.parado = false;
    mandarSpotify({ command: 'toggle' });
}

function pararMusica() {
    if (embed.id) {
        mandarSpotify({ command: 'seek', timestamp: 0 });
        mandarSpotify({ command: 'pause' });
    }
    player.audio.pause();
    if (player.audio.src) player.audio.currentTime = 0;
    player.parado = true;
    player.tocando = false;
    $('#wa-tempo').textContent = '00:00';
    $('#player-progresso span').style.width = '0';
    atualizarPlayer();
}

function pularPara(parte) {
    const m = musicas()[player.indice];
    if (m?.arquivo && player.audio.duration) player.audio.currentTime = parte * player.audio.duration;
    else if (embed.id && embed.total) mandarSpotify({ command: 'seek', timestamp: parte * embed.total / 1000 });
}

// tempo do mp3
player.audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = player.audio;
    $('#player-progresso span').style.width = duration ? (currentTime / duration * 100) + '%' : '0';
    $('#wa-tempo').textContent = duracao(currentTime * 1000, true);
});
player.audio.addEventListener('play', () => { player.tocando = true; atualizarPlayer(false); });
player.audio.addEventListener('pause', () => { player.tocando = false; atualizarPlayer(false); });
player.audio.addEventListener('ended', () => tocar(player.indice + 1));

// tempo em mm:ss
function duracao(ms, sempre = false) {
    const total = Math.round((Number(ms) || 0) / 1000);
    if (!total && !sempre) return '';
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}


// --- ouvindo agora (last.fm) ---

// guarda as ultimas pra aparecer na hora mesmo se o last.fm demorar
const ouvidasSalvas = guardar.ler('ouvindo', []);
const ouvindo = { faixas: ouvidasSalvas, carregado: ouvidasSalvas.length > 0, erro: false, semana: guardar.ler('mais-ouvida', null) };

// capa padrao do last.fm (estrelinha) nao serve
const CAPA_VAZIA = '2a96cbd8b46e442fc41c2b86b821562f';

function urlLastfm(metodo, extra = '') {
    const { usuario, chave } = DADOS.lastfm;
    return `https://ws.audioscrobbler.com/2.0/?method=${metodo}&format=json&user=${encodeURIComponent(usuario)}&api_key=${encodeURIComponent(chave)}${extra}`;
}

function capaLastfm(imagens, tamanho = 'medium') {
    const capa = imagens?.find(i => i.size === tamanho)?.['#text'] || '';
    return capa.includes(CAPA_VAZIA) ? '' : capa;
}

async function carregarLastfm() {
    const { usuario, chave } = DADOS.lastfm;
    if (!usuario || !chave) return;
    try {
        const json = await (await fetch(urlLastfm('user.getrecenttracks', '&limit=8'))).json();
        if (json.error) throw new Error(json.message);
        // a lista gira: a mais nova entra em cima e a mais velha sai
        ouvindo.faixas = (json.recenttracks?.track || []).map(t => ({
            titulo: t.name,
            artista: t.artist?.['#text'] || '',
            capa: capaLastfm(t.image),
            agora: t['@attr']?.nowplaying === 'true',
            quando: t.date ? Number(t.date.uts) * 1000 : Date.now(),
        })).slice(0, 7);
        guardar.salvar('ouvindo', ouvindo.faixas);
        ouvindo.erro = false;
    } catch (erro) {
        console.error(erro);
        ouvindo.erro = !ouvindo.faixas.length;
    }
    ouvindo.carregado = true;
    preencherOuvindo();
}

// musica que eu mais ouvi nos ultimos 7 dias
async function carregarMaisOuvida() {
    const { usuario, chave } = DADOS.lastfm;
    if (!usuario || !chave) return;
    try {
        const json = await (await fetch(urlLastfm('user.gettoptracks', '&period=7day&limit=1'))).json();
        const t = json.toptracks?.track?.[0];
        if (!t) return;
        const faixa = { titulo: t.name, artista: t.artist?.name || '', vezes: Number(t.playcount) || 0, capa: '' };
        // a capa vem das ouvidas recentes ou do track.getInfo
        faixa.capa = ouvindo.faixas.find(f => f.titulo === faixa.titulo && f.capa)?.capa || '';
        if (!faixa.capa) {
            const info = await (await fetch(urlLastfm('track.getInfo', `&artist=${encodeURIComponent(faixa.artista)}&track=${encodeURIComponent(faixa.titulo)}`))).json();
            faixa.capa = capaLastfm(info.track?.album?.image, 'large');
        }
        ouvindo.semana = faixa;
        guardar.salvar('mais-ouvida', faixa);
        preencherOuvindo();
    } catch (erro) {
        console.error(erro);
    }
}

function blocoMaisOuvida() {
    const f = ouvindo.semana;
    if (!f) return '';
    return `
        <p class="titulo-mais-ouvida">★ mais ouvida da semana!</p>
        <a class="faixa" href="${linkSpotify(f)}" target="_blank" rel="noopener">
            ${f.capa ? `<img src="${esc(f.capa)}" alt="" width="34" height="34" loading="lazy">` : icone('cd', 32)}
            <span><b class="texto-brilho">${esc(f.titulo)}</b><br>${esc(f.artista)}${f.vezes ? `<br><small>${f.vezes}x essa semana</small>` : ''}</span>
        </a>
        <p class="titulo-mais-ouvida">ouvidas por último</p>`;
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
    // na lateral fica so uma previa, o resto abre no clique
    const aberto = ouvindo.aberto;
    $('#ouvindo').innerHTML = blocoMaisOuvida() + listaOuvindo(aberto ? 7 : 2)
        + (ouvindo.faixas.length > 2 ? `<button class="ver-mais-ouvidas" data-ver-ouvidas>${aberto ? '▲ mostrar menos' : `▼ ver todas (${Math.min(7, ouvindo.faixas.length)})`}</button>` : '');
    const naPagina = $('#ouvindo-pagina');
    if (naPagina) naPagina.innerHTML = blocoMaisOuvida() + listaOuvindo(7);
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
// abre a imagem (se o navegador nao tiver createImageBitmap usa o jeito antigo)
async function abrirImagem(arquivo) {
    try {
        return await createImageBitmap(arquivo);
    } catch {
        const url = URL.createObjectURL(arquivo);
        try {
            const img = new Image();
            img.src = url;
            await img.decode();
            return img;
        } catch {
            throw new Error('foto-invalida');
        } finally {
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
    }
}

async function fotoQuadrada(arquivo, lado = 128) {
    const imagem = await abrirImagem(arquivo);
    const largura = imagem.width || imagem.naturalWidth;
    const altura = imagem.height || imagem.naturalHeight;
    const menor = Math.min(largura, altura);
    const canvas = document.createElement('canvas');
    canvas.width = lado;
    canvas.height = lado;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, lado, lado);
    ctx.drawImage(imagem, (largura - menor) / 2, (altura - menor) / 2, menor, menor, 0, 0, lado, lado);
    // vai baixando a qualidade se ficar pesada
    for (const qualidade of [0.8, 0.6, 0.4]) {
        const foto = canvas.toDataURL('image/jpeg', qualidade);
        if (foto.startsWith('data:image/jpeg;base64,') && foto.length <= 80000) return foto;
    }
    throw new Error('foto-invalida');
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

function dialogo({ titulo, texto, imagem = '', rodape = '', icone: nomeIcone = 'information', botoes = [{ texto: 'OK' }] }) {
    $('#dialogo-titulo').textContent = titulo;
    $('#dialogo-texto').innerHTML = textoRico(texto)
        + (imagemSegura(imagem) ? `<img class="imagem-dialogo" src="${esc(imagemSegura(imagem))}" alt="">` : '')
        + (rodape ? `<small class="rodape-dialogo">${esc(rodape)}</small>` : '');
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
    // quem foi clicado vem pra frente, as outras continuam abertas atras
    janela.style.zIndex = ++zTopo;
    atualizarTarefas();
}

function abrirJanela(id) {
    const janela = document.getElementById(id);
    janela.hidden = false;
    janela.classList.remove('minimizada');
    focarJanela(janela);
    if (id === 'paint') {
        iniciarPaint();
        const autor = $('#paint-enviar [name=autor]');
        if (!autor.value) autor.value = meuNome();
    }
    if (id === 'msn') abrirZap();
    if (id === 'fundos') montarFundos();
    if (id === 'notas') $('#notas-texto').focus();
    if (id === 'lixeira') mostrarLixeira();
    if (id === 'calculadora') mostrarCalc();
    if (id === 'navegador') janela.scrollIntoView({ block: 'nearest' });
    $('#menu-iniciar').hidden = true;
    // no celular abre em cascata pra uma nao esconder a outra inteira
    if (janela.classList.contains('janela-app') && innerWidth <= 720) {
        const abertas = $$('.janela-app').filter(j => !j.hidden && j !== janela && !j.classList.contains('minimizada')).length;
        janela.style.top = (10 + abertas * 26) + 'px';
        janela.style.left = (5 + Math.min(abertas * 8, 40)) + 'px';
    }
    // se a janela passar do fim da tela, sobe ela
    if (janela.classList.contains('janela-app')) {
        const r = janela.getBoundingClientRect();
        if (r.bottom > innerHeight - 32) janela.style.top = Math.max(4, innerHeight - 32 - r.height) + 'px';
        if (r.right > innerWidth) janela.style.left = Math.max(4, innerWidth - r.width - 4) + 'px';
    }
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
            : `<p><span class="quem ${m.dono ? 'dono-zap' : ''}">${!m.dono && amigoPeloNome(m.nome) ? avatar(m.nome, 'mini-zap') + ' ' : ''}${esc(m.nome)}${m.dono ? ' ' + icone('award_star_gold_1') : ''} diz: <small>${horaZap(m)}</small></span>${textoRico(m.texto)}${apagar(m)}</p>`)).join('');
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
        if (zapAbertoNaTela()) marcarZapVisto(ids);
    } catch (erro) {
        console.error(erro);
    }
}

// --- aviso de mensagem nova no zap (mesmo com a janela fechada) ---

// maiorNaAbertura: ultima mensagem que ja existia quando a pessoa abriu o site
const avisoZap = { naoLidas: 0, ultimoAvisado: 0, maiorNaAbertura: null };

function zapAbertoNaTela() {
    const janela = $('#msn');
    return !janela.hidden && !janela.classList.contains('minimizada') && !document.hidden;
}

// mensagem que eu mesmo mandei nao conta
function mensagemMinha(m) {
    if (souDono) return Boolean(m.dono);
    return !m.dono && semAcento(m.nome) === semAcento(guardar.ler('nome-zap', '') || '\u0000');
}

function marcarZapVisto(ids) {
    const maior = Math.max(0, ...ids.map(Number));
    if (maior > guardar.ler('zap-visto', 0)) guardar.salvar('zap-visto', maior);
    avisoZap.naoLidas = 0;
    mostrarAvisoZap(null);
}

function mostrarAvisoZap(ultima) {
    const n = avisoZap.naoLidas;
    // bolinha com o numero de nao lidas em todos os icones do zap
    $$('.contador-zap').forEach(bolinha => {
        bolinha.hidden = !n;
        bolinha.textContent = n > 99 ? '99+' : n;
    });
    tituloComZap();
    if (!n) return ($('#balao-zap').hidden = true);
    // balaozinho so pra mensagem que chegou agora, com o site aberto
    const chegouAgora = ultima && avisoZap.maiorNaAbertura !== null && Number(ultima.id) > avisoZap.maiorNaAbertura;
    if (chegouAgora && Number(ultima.id) > avisoZap.ultimoAvisado) {
        avisoZap.ultimoAvisado = Number(ultima.id);
        const texto = ultima.texto === '/atencao' ? 'chamou a sua atenção!' : ultima.texto;
        $('#balao-zap-texto').innerHTML = `<b>${esc(ultima.nome)}</b> diz: ${textoRico(texto.length > 90 ? texto.slice(0, 90) + '...' : texto)}`;
        const novasAgora = avisoZap.naoLidasAgora;
        $('#balao-zap-titulo').textContent = novasAgora > 1 ? `${novasAgora} mensagens novas no Zap` : 'Mensagem nova no Zap';
        const balao = $('#balao-zap');
        balao.hidden = false;
        clearTimeout(avisoZap.timerBalao);
        avisoZap.timerBalao = setTimeout(() => { balao.hidden = true; }, 9000);
    }
}

// "(2) Inicio - QUARTO DO LUCAS" no titulo da aba
function tituloComZap() {
    const base = document.title.replace(/^\(\d+\+?\) /, '');
    document.title = avisoZap.naoLidas ? `(${avisoZap.naoLidas}) ${base}` : base;
}

async function checarZap() {
    if (!nuvem) return;
    try {
        const { data, error } = await nuvem.from('zap').select('id, nome, texto, dono').order('id', { ascending: false }).limit(30);
        if (error) throw error;
        // primeira visita: todas as mensagens contam como novas ate abrir o zap
        const maior = Math.max(0, ...data.map(m => Number(m.id)));
        if (avisoZap.maiorNaAbertura === null) avisoZap.maiorNaAbertura = maior;
        if (zapAbertoNaTela()) return marcarZapVisto(data.map(m => m.id));
        const visto = guardar.ler('zap-visto', 0);
        const novas = data.filter(m => Number(m.id) > visto && !mensagemMinha(m));
        avisoZap.naoLidas = novas.length;
        avisoZap.naoLidasAgora = novas.filter(m => Number(m.id) > avisoZap.maiorNaAbertura).length;
        mostrarAvisoZap(novas[0] || null);
    } catch (erro) {
        console.error(erro);
    }
}

function abrirZap() {
    const campo = $('#zap-nome');
    campo.value = souDono ? DADOS.nome : (guardar.ler('nome-zap', '') || meuNome());
    campo.disabled = souDono;
    atualizarZap();
    $('#balao-zap').hidden = true;
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
    if (!souDono) {
        guardar.salvar('nome-zap', nome);
        lembrarNome(nome);
    }
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

// icone pelo final do nome do arquivo
function iconeArquivo(nome) {
    const extensao = String(nome).split('.').pop().toLowerCase();
    if (['doc', 'docx', 'rtf'].includes(extensao)) return 'file_extension_doc';
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(extensao)) return 'file_extension_jpg';
    if (['mp3', 'wav', 'wma', 'ogg'].includes(extensao)) return 'music';
    if (extensao === 'exe') return 'file_extension_exe';
    if (extensao === 'txt') return 'file_extension_txt';
    return 'page_white';
}

// cada visitante pode esvaziar a lixeira so pra ele
function itensLixeira() {
    return guardar.ler('lixeira-vazia', false) ? [] : DADOS.lixeira;
}

function mostrarLixeira() {
    const itens = itensLixeira();
    $('#lista-lixeira').innerHTML = itens.map((i, n) => `<li><button data-arquivo-lixeira="${n}" title="abrir">${icone(iconeArquivo(i.nome))}${esc(i.nome)}</button></li>`).join('')
        || '<li style="color:#888">A Lixeira está vazia.</li>';
    $('#lixeira-info').textContent = `${itens.length} objeto(s) · clique pra abrir`;
}

// quem abrir o virus 3 vezes leva susto
let aberturasVirus = 0;

function abrirArquivoLixeira(n) {
    const arquivo = itensLixeira()[n];
    if (!arquivo) return;
    if (/virus/i.test(arquivo.nome)) {
        aberturasVirus++;
        if (aberturasVirus >= 3) {
            aberturasVirus = 0;
            return ataqueDoVirus();
        }
    }
    dialogo({
        titulo: `${arquivo.nome} - Bloco de notas`,
        icone: iconeArquivo(arquivo.nome),
        texto: arquivo.conteudo || '(arquivo vazio)',
        imagem: arquivo.imagem ? urlFotoPostada(arquivo.imagem) : '',
        rodape: /virus/i.test(arquivo.nome) && aberturasVirus === 2 ? '(não é como você pensa)' : '',
    });
}


// --- o virus: glitch e um olho amarelo encarando ---

// numeros "aleatorios" que sao sempre os mesmos (pra textura nao ficar tremendo)
function semente(i) {
    const s = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    return s - Math.floor(s);
}

// medidas tiradas do desenho de referencia (tela de 1080 x 1256)
const OLHO = {
    largura: 1080, altura: 1256,
    centro: [540, 590], raioX: 1000, raioY: 415,
    iris: [540, 515], raioIris: 372,
    pupila: [556, 487], pupilaX: 62, pupilaY: 68,
    // espinhos que caem da palpebra de cima: [x, comprimento, largura da base, inclinacao]
    ciliosCima: [[-260, 70, 60, 30], [-90, 95, 72, 26], [95, 110, 80, 22], [205, 85, 90, 14], [268, 55, 40, 6], [575, 120, 42, 10], [860, 100, 70, -12], [985, 115, 80, -20], [1060, 90, 60, -18], [1190, 95, 72, -26], [1350, 70, 60, -30]],
    // espinhos finos cor de areia embaixo: [x, comprimento]
    ciliosBaixo: [[-310, 60], [-180, 80], [-55, 90], [70, 95], [205, 110], [345, 100], [497, 115], [650, 100], [792, 108], [930, 98], [1050, 90], [1170, 88], [1290, 78], [1400, 58]],
};

// borda de cima e de baixo do olho em cada x (abertura 0 = fechado, 1 = aberto)
// raiva: 0 normal, 1 bravo (a palpebra de cima desce torta) / olhar: pra onde a iris foi
const estadoOlho = { raiva: 0, olharX: 0, olharY: 0 };

function bordasOlho(x, abertura) {
    const [, cy] = OLHO.centro;
    // formato de amendoa: as pontas fecham em bico
    const s = Math.max(0, 1 - ((x - OLHO.centro[0]) / OLHO.raioX) ** 2);
    const fechado = cy + 335 * s;
    // a palpebra de cima acompanha um pouco quando o olho olha pra cima ou pra baixo
    let cima = fechado + (cy - OLHO.raioY * s - fechado) * abertura + estadoOlho.olharY * 0.7 * abertura * s;
    const baixo = fechado + (cy + OLHO.raioY * s - fechado) * abertura;
    // bravo: a palpebra desce e fica inclinada (mais baixa do lado de dentro)
    if (estadoOlho.raiva) {
        const desce = estadoOlho.raiva * abertura * s * (150 + (x - OLHO.centro[0]) * 0.22);
        cima = Math.min(baixo - 40 * abertura * s, cima + Math.max(0, desce));
    }
    return { cima, baixo };
}

// a parte de dentro do olho (branco + iris) so precisa ser desenhada uma vez
let olhoPronto = null;
let irisPronta = null;

function desenharDentroDoOlho() {
    const tela = document.createElement('canvas');
    tela.width = OLHO.largura + 1000;
    tela.height = OLHO.altura;
    let ctx = tela.getContext('2d');
    ctx.translate(500, 0);
    const [ix, iy] = OLHO.iris, R = OLHO.raioIris;
    const [px, py] = OLHO.pupila;

    // branco do olho: claro embaixo, escurecendo pras bordas e pra cima
    let g = ctx.createRadialGradient(540, 930, 40, 540, 760, 820);
    g.addColorStop(0, '#d9d3c9');
    g.addColorStop(0.35, '#bdb6aa');
    g.addColorStop(0.7, '#7e766a');
    g.addColorStop(1, '#3a332a');
    ctx.fillStyle = g;
    ctx.fillRect(-500, 0, OLHO.largura + 1000, OLHO.altura);

    // a iris fica numa camada separada pra poder olhar em volta
    const camadaIris = document.createElement('canvas');
    camadaIris.width = tela.width;
    camadaIris.height = tela.height;
    ctx = camadaIris.getContext('2d');
    ctx.translate(500, 0);

    // sombra da iris no branco
    g = ctx.createRadialGradient(ix, iy + 20, R * 0.95, ix, iy + 20, R * 1.15);
    g.addColorStop(0, 'rgba(40, 30, 18, .55)');
    g.addColorStop(1, 'rgba(40, 30, 18, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(ix, iy + 20, R * 1.15, 0, Math.PI * 2);
    ctx.fill();

    // iris marrom
    ctx.save();
    ctx.beginPath();
    ctx.arc(ix, iy, R, 0, Math.PI * 2);
    ctx.clip();
    g = ctx.createRadialGradient(px, py, 40, ix, iy, R);
    g.addColorStop(0, '#5e4520');
    g.addColorStop(0.55, '#4b3517');
    g.addColorStop(0.85, '#33230d');
    g.addColorStop(1, '#1d1306');
    ctx.fillStyle = g;
    ctx.fillRect(ix - R, iy - R, R * 2, R * 2);

    // crescente dourado abracando a pupila por baixo
    const brilho = document.createElement('canvas');
    brilho.width = OLHO.largura;
    brilho.height = OLHO.altura;
    const b = brilho.getContext('2d');
    g = b.createRadialGradient(px, py + 30, 60, px, py + 20, 345);
    g.addColorStop(0, 'rgba(255, 240, 170, 0)');
    g.addColorStop(0.2, 'rgba(255, 250, 205, 1)');
    g.addColorStop(0.42, 'rgba(255, 232, 130, 1)');
    g.addColorStop(0.68, 'rgba(235, 180, 75, .8)');
    g.addColorStop(0.9, 'rgba(170, 115, 40, .25)');
    g.addColorStop(1, 'rgba(120, 80, 30, 0)');
    b.fillStyle = g;
    b.fillRect(0, 0, OLHO.largura, OLHO.altura);
    // so a metade de baixo fica acesa (a de cima esta na sombra)
    b.globalCompositeOperation = 'destination-in';
    g = b.createLinearGradient(0, py + 35, 0, py + 70);
    g.addColorStop(0, 'rgba(0, 0, 0, 0)');
    g.addColorStop(1, 'rgba(0, 0, 0, 1)');
    b.fillStyle = g;
    b.fillRect(0, 0, OLHO.largura, OLHO.altura);
    ctx.drawImage(brilho, 0, 0);

    // fibras da iris
    ctx.lineCap = 'round';
    for (let i = 0; i < 3200; i++) {
        const ang = semente(i) * Math.PI * 2;
        const r1 = 75 + semente(i + 999) * 280;
        const r2 = Math.min(R - 8, r1 + 6 + semente(i + 1999) * 30);
        const embaixo = Math.sin(ang) > 0.05 && r1 < 300;
        const clara = semente(i + 2999) > (embaixo ? 0.35 : 0.8);
        ctx.strokeStyle = clara
            ? `rgba(255, ${embaixo ? 250 : 190}, ${embaixo ? 210 : 110}, ${0.1 + semente(i + 3999) * (embaixo ? 0.4 : 0.12)})`
            : `rgba(40, 24, 6, ${0.1 + semente(i + 4999) * 0.25})`;
        ctx.lineWidth = 1 + semente(i + 5999) * 2.2;
        ctx.beginPath();
        ctx.moveTo(px + Math.cos(ang) * r1, py + Math.sin(ang) * r1);
        ctx.lineTo(px + Math.cos(ang) * r2, py + Math.sin(ang) * r2);
        ctx.stroke();
    }

    // aro escuro da iris
    g = ctx.createRadialGradient(ix, iy, R * 0.82, ix, iy, R);
    g.addColorStop(0, 'rgba(18, 10, 2, 0)');
    g.addColorStop(1, 'rgba(18, 10, 2, .97)');
    ctx.fillStyle = g;
    ctx.fillRect(ix - R, iy - R, R * 2, R * 2);

    // risquinhos escuros em volta da pupila (o anel tracejado do desenho)
    ctx.strokeStyle = 'rgba(15, 8, 2, .85)';
    ctx.lineWidth = 3;
    for (let a = -2.9; a < 2.9; a += 0.11) {
        if (Math.abs(a) < 0.35) continue;
        const r = 165 + semente(a * 100) * 25;
        const lado = Math.cos(a) < 0 ? -1 : 1;
        if (Math.abs(Math.cos(a)) < 0.35) continue;
        const x = px + Math.cos(a) * r, y = py + Math.sin(a) * r;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + lado * 9, y + 2);
        ctx.stroke();
    }
    ctx.restore();

    // reflexos brancos em cima e a esquerda da pupila
    ctx.strokeStyle = 'rgba(255, 255, 255, .9)';
    ctx.lineWidth = 3;
    [[418, 352, 14], [404, 398, 18], [398, 432, 12], [736, 385, 10], [748, 420, 12]].forEach(([x, y, t]) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + t * 0.5, y - t);
        ctx.stroke();
    });
    olhoPronto = tela;
    irisPronta = camadaIris;
}

// veias que aparecem quando o olho fica bravo (saem dos cantos)
const VEIAS_OLHO = Array.from({ length: 26 }, (_, i) => {
    const lado = i % 2 ? 1 : -1;
    const x = 540 + lado * (520 + semente(i + 70) * 260);
    const y = 470 + semente(i + 80) * 330;
    const fx = 540 + lado * (330 + semente(i + 90) * 120);
    const fy = y + (semente(i + 100) - 0.5) * 160;
    return { x, y, fx, fy, cx: (x + fx) / 2 + (semente(i + 110) - 0.5) * 120, cy: (y + fy) / 2 + (semente(i + 120) - 0.5) * 120, grossura: 1.5 + semente(i + 130) * 3 };
});

function desenharOlho(ctx, abertura, pupila = 1, tremor = 0) {
    const L = OLHO.largura, A = OLHO.altura;
    if (!olhoPronto) desenharDentroDoOlho();
    // fundo preto na tela toda e o desenho encaixado no meio
    const T = ctx.canvas.width, U = ctx.canvas.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, T, U);
    const escala = Math.min(T / L, U / A);
    ctx.setTransform(escala, 0, 0, escala, (T - L * escala) / 2, (U - A * escala) / 2);
    if (abertura <= 0.005) {
        desenharPalpebras(ctx, 0);
        return;
    }

    // abertura do olho
    const caminho = () => {
        ctx.beginPath();
        for (let x = -500; x <= L + 500; x += 15) ctx.lineTo(x, bordasOlho(x, abertura).cima);
        for (let x = L + 500; x >= -500; x -= 15) ctx.lineTo(x, bordasOlho(x, abertura).baixo);
        ctx.closePath();
    };
    ctx.save();
    caminho();
    ctx.clip();
    ctx.drawImage(olhoPronto, -500, 0);
    // veias vermelhas quando esta bravo
    if (estadoOlho.raiva) {
        ctx.fillStyle = `rgba(150, 20, 10, ${0.22 * estadoOlho.raiva})`;
        ctx.fillRect(-500, 0, L + 1000, A);
        ctx.strokeStyle = `rgba(170, 25, 15, ${0.75 * estadoOlho.raiva})`;
        ctx.lineCap = 'round';
        VEIAS_OLHO.forEach(v => {
            ctx.lineWidth = v.grossura;
            ctx.beginPath();
            ctx.moveTo(v.x, v.y);
            ctx.quadraticCurveTo(v.cx, v.cy, v.fx, v.fy);
            ctx.stroke();
        });
    }
    const ox = estadoOlho.olharX + tremor, oy = estadoOlho.olharY;
    ctx.drawImage(irisPronta, -500 + ox, oy);

    // pupila
    const px = OLHO.pupila[0] + ox, py = OLHO.pupila[1] + oy;
    const g = ctx.createRadialGradient(px, py, 10, px, py, OLHO.pupilaY * pupila * 1.3);
    g.addColorStop(0, '#000');
    g.addColorStop(0.72, '#050200');
    g.addColorStop(0.82, 'rgba(10, 5, 0, .7)');
    g.addColorStop(1, 'rgba(10, 5, 0, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(px, py, OLHO.pupilaX * pupila * 1.3, OLHO.pupilaY * pupila * 1.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // sombra da palpebra de cima
    const topo = bordasOlho(540, abertura).cima;
    const s = ctx.createLinearGradient(0, topo - 20, 0, topo + 300);
    s.addColorStop(0, 'rgba(10, 6, 0, .98)');
    s.addColorStop(0.4, 'rgba(25, 16, 5, .7)');
    s.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = s;
    ctx.fillRect(-500, 0, L + 1000, A);

    // linha molhada brilhando em cima da palpebra de baixo
    const brilho = ctx.createLinearGradient(140, 0, 940, 0);
    brilho.addColorStop(0, 'rgba(255, 245, 225, 0)');
    brilho.addColorStop(0.55, 'rgba(255, 250, 235, .9)');
    brilho.addColorStop(1, 'rgba(255, 245, 225, 0)');
    ctx.strokeStyle = brilho;
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (let x = 140; x <= 940; x += 10) ctx.lineTo(x, bordasOlho(x, abertura).baixo - 14);
    ctx.stroke();
    ctx.restore();

    desenharPalpebras(ctx, abertura);
}

function desenharPalpebras(ctx, abertura) {
    const L = OLHO.largura;
    const borda = x => bordasOlho(x, abertura);

    // espinhos escuros caindo da palpebra de cima
    if (abertura > 0.05) {
        OLHO.ciliosCima.forEach(([x, comp, base, inclina]) => {
            const y = borda(x).cima;
            const c = comp * Math.min(1, abertura * 1.3);
            ctx.beginPath();
            ctx.moveTo(x - base / 2, y - 4);
            ctx.quadraticCurveTo(x - base * 0.1, y + c * 0.45, x + inclina, y + c);
            ctx.quadraticCurveTo(x + base * 0.2, y + c * 0.35, x + base / 2, y - 4);
            ctx.closePath();
            ctx.fillStyle = '#1d150b';
            ctx.fill();
            ctx.strokeStyle = 'rgba(120, 100, 70, .55)';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    // faixa marrom da palpebra de cima
    ctx.beginPath();
    for (let x = -500; x <= L + 500; x += 15) ctx.lineTo(x, borda(x).cima);
    for (let x = L + 500; x >= -500; x -= 15) {
        const k = Math.max(0, 1 - ((x - 540) / OLHO.raioX) ** 2);
        ctx.lineTo(x, borda(x).cima - (55 + 45 * k) * Math.min(1, k * 4));
    }
    ctx.closePath();
    const topo = borda(540).cima;
    const g = ctx.createLinearGradient(0, topo - 110, 0, topo);
    g.addColorStop(0, '#1a130a');
    g.addColorStop(0.5, '#3a2d1a');
    g.addColorStop(1, '#2a2012');
    ctx.fillStyle = g;
    ctx.fill();
    // risco escuro na beira da palpebra
    ctx.strokeStyle = '#0d0905';
    ctx.lineWidth = 6;
    ctx.beginPath();
    for (let x = -500; x <= L + 500; x += 15) ctx.lineTo(x, borda(x).cima);
    ctx.stroke();

    // beirada da palpebra de baixo (marrom clarinho)
    ctx.strokeStyle = 'rgba(150, 120, 75, .75)';
    ctx.lineWidth = 7;
    ctx.beginPath();
    for (let x = -500; x <= L + 500; x += 15) ctx.lineTo(x, borda(x).baixo + 4);
    ctx.stroke();

    // espinhos finos cor de areia embaixo
    OLHO.ciliosBaixo.forEach(([x, comp]) => {
        const y = borda(x).baixo + 6;
        const inclina = (x - 540) * 0.05;
        const c = comp * (0.6 + 0.4 * abertura);
        const g2 = ctx.createLinearGradient(0, y, 0, y + c);
        g2.addColorStop(0, '#9c8158');
        g2.addColorStop(1, 'rgba(110, 85, 50, .2)');
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.moveTo(x - 16, y);
        ctx.lineTo(x + inclina, y + c);
        ctx.lineTo(x + 16, y);
        ctx.closePath();
        ctx.fill();
    });
}

// mancha preta irregular se espalhando como virus (p de 0 a 1)
function novaMancha() {
    const r = () => Math.random();
    return {
        ondas: [3, 5, 8, 13, 21, 34].map(k => ({ k, fase: r() * Math.PI * 2, forca: 0.5 / Math.sqrt(k) })),
        tentaculos: Array.from({ length: 11 }, () => ({ angulo: r() * Math.PI * 2, largura: 0.08 + r() * 0.18, forca: 0.35 + r() * 0.6, pressa: 0.6 + r() * 0.8 })),
        pixels: Array.from({ length: 160 }, () => ({ angulo: r() * Math.PI * 2, longe: 1 + r() * 0.3, tamanho: 3 + r() * 11, pisca: r() })),
    };
}

function borrarMancha(ctx, mancha, p, ox, oy, tempo) {
    const T = ctx.canvas.width, U = ctx.canvas.height;
    const diagonal = Math.max(Math.hypot(ox, oy), Math.hypot(T - ox, oy), Math.hypot(ox, U - oy), Math.hypot(T - ox, U - oy));
    // comeca devagar e vai acelerando
    const R = Math.pow(p, 1.7) * diagonal * 1.9;
    const raio = a => {
        let n = 0;
        mancha.ondas.forEach(o => { n += Math.sin(a * o.k + o.fase + tempo * 0.002 * o.k / 8) * o.forca; });
        let ponta = 0;
        mancha.tentaculos.forEach(c => {
            const d = Math.abs(Math.atan2(Math.sin(a - c.angulo), Math.cos(a - c.angulo)));
            if (d < c.largura) ponta += c.forca * c.pressa * (1 - d / c.largura) ** 2;
        });
        return Math.max(0, R * (0.5 + n * 0.35 + ponta * 0.6));
    };
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // tudo fora da mancha fica transparente (o site aparece)
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    for (let i = 0; i <= 240; i++) {
        const a = i / 240 * Math.PI * 2;
        const rr = raio(a) * (1 + (Math.random() - 0.5) * 0.04);
        ctx.lineTo(ox + Math.cos(a) * rr, oy + Math.sin(a) * rr);
    }
    ctx.closePath();
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    // pixels pretos "corrompidos" na frente da mancha
    if (p > 0.02 && p < 0.98) {
        const escala = ctx.canvas.width / innerWidth;
        mancha.pixels.forEach(px => {
            if ((px.pisca + tempo / 180) % 1 < 0.35) return;
            const rr = raio(px.angulo) * px.longe;
            const tam = px.tamanho * escala;
            ctx.fillStyle = px.pisca > 0.8 ? '#1a0f05' : '#000';
            ctx.fillRect(Math.round(ox + Math.cos(px.angulo) * rr), Math.round(oy + Math.sin(px.angulo) * rr), tam, tam);
        });
    }
}

// cada vez que a pessoa ve o susto ele muda: encara / procura / bravo / so abre bravo
function modoDoSusto() {
    const vezes = guardar.ler('virus-vezes', 0) + 1;
    guardar.salvar('virus-vezes', vezes);
    if (vezes === 1) return 'encara';
    if (vezes === 2) return 'procura';
    if (vezes === 3) return 'bravo';
    return 'rapido';
}

// quanto tempo o olho fica aberto em cada jeito
const TEMPO_ABERTO = { encara: 3000, procura: 4200, bravo: 3000, rapido: 900 };

// olhar em volta igual olho de verdade: pulinhos rapidos e paradinhas em cada canto
// [x, y, quanto tempo fica parado olhando ali]
const OLHADAS = [[0, 0, 350], [-175, -60, 520], [170, -62, 480], [175, 48, 420], [-170, 46, 460], [-40, -8, 260], [60, 6, 300], [0, 0, 500]];
const PULO_OLHO = 110;

function olharEmVolta(tempo, relogio) {
    let antes = [0, 0], fim = 0;
    for (const [x, y, parado] of OLHADAS) {
        const comeco = fim;
        fim = comeco + PULO_OLHO + parado;
        if (tempo < fim) {
            // o pulo e rapido e freia no final
            const k = Math.min(1, (tempo - comeco) / PULO_OLHO);
            const freia = 1 - (1 - k) ** 3;
            // tremidinha bem leve enquanto esta parado olhando
            const vivo = k >= 1 ? Math.sin(relogio / 47) * 1.2 : 0;
            estadoOlho.olharX = antes[0] + (x - antes[0]) * freia + vivo;
            estadoOlho.olharY = antes[1] + (y - antes[1]) * freia;
            return;
        }
        antes = [x, y];
    }
    estadoOlho.olharX = 0;
    estadoOlho.olharY = 0;
}

function ataqueDoVirus() {
    $('#fundo-dialogo').hidden = true;
    const tela = $('#tela-virus');
    const ctx = $('#olho-virus').getContext('2d');
    const modo = modoDoSusto();
    const bravo = modo === 'bravo' || modo === 'rapido';
    tela.hidden = false;
    tela.className = 'tela-virus glitch';
    status('ERRO FATAL: virus_nao_abrir.exe');
    if (!olhoPronto) desenharDentroDoOlho();
    const canvas = $('#olho-virus');
    const nitidez = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(innerWidth * nitidez);
    canvas.height = Math.round(innerHeight * nitidez);
    const facil = t => t * t * (3 - 2 * t);
    // o escuro sai de dentro do olho fechado e volta pra dentro dele no final
    const escala = Math.min(canvas.width / OLHO.largura, canvas.height / OLHO.altura);
    const ox = canvas.width / 2;
    const oy = (canvas.height - OLHO.altura * escala) / 2 + (OLHO.centro[1] + 335) * escala;
    const mancha = novaMancha();
    // tempos de cada parte
    const glitch = 1300, espalha = 800, abre = modo === 'rapido' ? 500 : 1000, aberto = TEMPO_ABERTO[modo], fecha = modo === 'rapido' ? 400 : 700, recua = 800;
    const t1 = glitch + espalha, t2 = t1 + abre, t3 = t2 + aberto, t4 = t3 + fecha, t5 = t4 + recua;
    estadoOlho.raiva = 0;
    estadoOlho.olharX = 0;
    estadoOlho.olharY = 0;
    const inicio = performance.now();
    const passo = agora => {
        const t = agora - inicio;
        let abertura = 0, espalhou = 1;
        if (t < glitch) {
            // so glitch
        } else if (t < t1) {
            if (!tela.classList.contains('olho')) tela.className = 'tela-virus olho';
            espalhou = (t - glitch) / espalha;
        } else if (t < t2) {
            abertura = facil((t - t1) / abre);
        } else if (t < t3) {
            abertura = 1;
            if (modo === 'procura') olharEmVolta(t - t2, t);
        } else if (t < t4) {
            abertura = 1 - facil((t - t3) / fecha);
        } else if (t < t5) {
            espalhou = 1 - (t - t4) / recua;
        } else {
            tela.hidden = true;
            tela.className = 'tela-virus';
            estadoOlho.raiva = 0;
            status('Concluído');
            return;
        }
        // bravo: vai fechando a cara enquanto abre
        if (bravo) estadoOlho.raiva = Math.min(1, abertura * 1.2);
        desenharOlho(ctx, abertura);
        if (espalhou < 1) borrarMancha(ctx, mancha, espalhou, ox, oy, t);
        requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
}


// --- ajuda de cada app (botao ? da janela) ---

const AJUDA_APPS = {
    paint: ['Paint', 'palette', `Pra que serve: desenhar e mandar o desenho pro Lucas. Se ele aprovar, aparece no mural da página de recados. (*)

Como usar:
• Escolha a ferramenta: lápis, pincel, spray, balde (pinta uma área inteira de uma vez) ou borracha.
• Clique numa cor da paleta embaixo. Em "editar cores..." dá pra criar uma cor nova.
• Limpar apaga o desenho todo.
• Salvar baixa o desenho pro seu computador.
• Enviar manda pro Lucas com o seu nome e o nome da arte.`],
    msn: ['Zap do Lucas', 'msn_messenger', `Pra que serve: um bate-papo aberto onde todo mundo que visita o site conversa junto. (L)

Como usar:
• Escreva seu nome em cima e a mensagem embaixo. Enter manda, Shift+Enter pula linha.
• "Chamar a atenção" faz a janela de todo mundo tremer.
• Os emoticons viram desenho: :) :D :P ;) (L) (Y) (H) 8-|
• As mensagens somem sozinhas depois de 7 dias.`],
    calculadora: ['Calculadora', 'calculator', `Pra que serve: fazer contas, igualzinha à calculadora do Windows antigo.

Como usar:
• Dá pra clicar nos botões ou usar o teclado (números, + - * /, Enter, Backspace e Esc).
• C apaga tudo, CE apaga só o número que você está digitando.
• MS guarda o número na memória, MR mostra ele de volta, M+ soma e MC limpa.
• sqrt é a raiz quadrada, 1/x é o inverso e % é a porcentagem.
• Editar > copia o resultado.`],
    notas: ['Bloco de notas', 'note', `Pra que serve: escrever qualquer coisa, tipo um rascunho ou um desabafo.

Como usar:
• O texto fica salvo sozinho, só no seu navegador. Ninguém mais vê.
• Novo apaga o texto pra começar de novo.
• Salvar como .txt baixa o arquivo pro seu computador.
• Hora/Data coloca a hora e o dia de agora no texto.`],
    lixeira: ['Lixeira', 'bin_recycle', `Pra que serve: aqui ficam uns arquivos que o Lucas jogou fora... dá pra clicar em cada um e ler o que tem dentro. :P

Como usar:
• Clique num arquivo pra abrir.
• Esvaziar Lixeira some com os arquivos (só pra você).
• Restaurar todos os itens traz eles de volta.
• Cuidado com o que você abre. ;)`],
    fundos: ['Propriedades de Vídeo', 'monitor_wallpaper', `Pra que serve: trocar o papel de parede da área de trabalho.

Como usar:
• Clique num papel de parede da lista pra ver como fica no monitorzinho.
• Ele já fica aplicado e salvo no seu navegador pra próxima vez que você entrar.`],
    cores: ['Editar cores', 'palette', `Pra que serve: criar uma cor nova pra usar no Paint.

Como usar:
• Clique no quadro colorido pra escolher a cor e na barrinha do lado pra deixar mais clara ou mais escura.
• Ou digite os números: Matiz/Sat/Lum ou Vermelho/Verde/Azul.
• "Adicionar às cores personalizadas" guarda a cor e OK usa ela no Paint.`],
};

function ajudaDoApp(app) {
    const [titulo, nomeIcone, texto] = AJUDA_APPS[app];
    dialogo({ titulo: `Ajuda - ${titulo}`, icone: nomeIcone, texto });
}


// --- calculadora (igual a do windows antigo) ---

const calc = { visor: '0', guardado: null, operacao: null, novoNumero: true, memoria: 0 };
const SENHA_SECRETA = '13062006';

function numeroCalc() {
    return parseFloat(calc.visor.replace(',', '.')) || 0;
}

function formatarCalc(n) {
    if (!isFinite(n)) return 'Não é possível dividir por zero';
    const texto = String(parseFloat(n.toPrecision(14)));
    return texto.replace('.', ',');
}

function mostrarCalc() {
    const visor = $('#visor-calc');
    visor.textContent = calc.visor;
    $('#memoria-calc').textContent = calc.memoria ? 'M' : '';
}

function contaCalc() {
    const a = calc.guardado, b = numeroCalc();
    if (calc.operacao === '+') return a + b;
    if (calc.operacao === '-') return a - b;
    if (calc.operacao === '*') return a * b;
    if (calc.operacao === '/') return b === 0 ? Infinity : a / b;
    return b;
}

function teclaCalc(tecla) {
    if (/^\d$/.test(tecla)) {
        if (calc.novoNumero || calc.visor === '0' || /[a-z]/i.test(calc.visor)) calc.visor = tecla;
        else if (calc.visor.replace(/\D/g, '').length < 16) calc.visor += tecla;
        calc.novoNumero = false;
        mostrarCalc();
        // a senha da area secreta
        if (calc.visor === SENHA_SECRETA) abrirAreaSecreta();
        return;
    }
    if (tecla === ',') {
        if (calc.novoNumero) { calc.visor = '0,'; calc.novoNumero = false; }
        else if (!calc.visor.includes(',')) calc.visor += ',';
    } else if (tecla === 'apagar') {
        if (!calc.novoNumero) calc.visor = calc.visor.length > 1 ? calc.visor.slice(0, -1) : '0';
    } else if (tecla === 'ce') {
        calc.visor = '0';
        calc.novoNumero = true;
    } else if (tecla === 'c') {
        Object.assign(calc, { visor: '0', guardado: null, operacao: null, novoNumero: true });
    } else if (['+', '-', '*', '/'].includes(tecla)) {
        if (calc.operacao && !calc.novoNumero) calc.visor = formatarCalc(contaCalc());
        calc.guardado = numeroCalc();
        calc.operacao = tecla;
        calc.novoNumero = true;
    } else if (tecla === '=') {
        if (calc.operacao) {
            calc.visor = formatarCalc(contaCalc());
            calc.operacao = null;
        }
        calc.novoNumero = true;
    } else if (tecla === 'raiz') {
        calc.visor = numeroCalc() < 0 ? 'Entrada inválida para a função' : formatarCalc(Math.sqrt(numeroCalc()));
        calc.novoNumero = true;
    } else if (tecla === 'inverso') {
        calc.visor = formatarCalc(1 / numeroCalc());
        calc.novoNumero = true;
    } else if (tecla === '%') {
        calc.visor = formatarCalc((calc.guardado || 0) * numeroCalc() / 100);
        calc.novoNumero = true;
    } else if (tecla === 'sinal') {
        calc.visor = formatarCalc(-numeroCalc());
    } else if (tecla === 'mc') {
        calc.memoria = 0;
    } else if (tecla === 'mr') {
        calc.visor = formatarCalc(calc.memoria);
        calc.novoNumero = true;
    } else if (tecla === 'ms') {
        calc.memoria = numeroCalc();
        calc.novoNumero = true;
    } else if (tecla === 'm+') {
        calc.memoria += numeroCalc();
        calc.novoNumero = true;
    }
    mostrarCalc();
}

function abrirAreaSecreta() {
    const visor = $('#visor-calc');
    visor.classList.add('liberado');
    visor.textContent = 'ACESSO LIBERADO';
    status('Acesso liberado...');
    setTimeout(() => {
        visor.classList.remove('liberado');
        Object.assign(calc, { visor: '0', guardado: null, operacao: null, novoNumero: true });
        mostrarCalc();
        abrirJanela('navegador');
        ir('secreto');
    }, 1600);
}

// teclado funciona quando a calculadora esta na frente
document.addEventListener('keydown', e => {
    const janela = $('#calculadora');
    if (janela.hidden || !janela.classList.contains('ativa') || e.target.closest?.('input, textarea')) return;
    const mapa = { Enter: '=', '=': '=', Backspace: 'apagar', Escape: 'c', Delete: 'ce', '.': ',', ',': ',', '+': '+', '-': '-', '*': '*', '/': '/', '%': '%' };
    const tecla = /^\d$/.test(e.key) ? e.key : mapa[e.key];
    if (!tecla) return;
    e.preventDefault();
    teclaCalc(tecla);
});


// caixas de tamanho fixo: clicar e arrastar com o mouse rola o conteudo (igual dedo)
(() => {
    let arrasto = null;
    document.addEventListener('pointerdown', e => {
        const lista = e.target.closest?.('.rola');
        if (!lista || e.pointerType !== 'mouse' || lista.scrollHeight <= lista.clientHeight) return;
        arrasto = { lista, y: e.clientY, inicio: lista.scrollTop, mexeu: false };
    });
    window.addEventListener('pointermove', e => {
        if (!arrasto) return;
        const dy = e.clientY - arrasto.y;
        if (Math.abs(dy) > 5) {
            arrasto.mexeu = true;
            arrasto.lista.classList.add('arrastando');
        }
        if (arrasto.mexeu) arrasto.lista.scrollTop = arrasto.inicio - dy;
    });
    window.addEventListener('pointerup', () => {
        if (!arrasto) return;
        arrasto.lista.classList.remove('arrastando');
        // se arrastou, nao abre a comunidade
        if (arrasto.mexeu) ignorarCliqueLogo(arrasto.lista);
        arrasto = null;
    });
})();

// --- icones da area de trabalho: rodinha do mouse e arrastar pro lado (igual dedo) ---

(() => {
    const fileira = $('.icones-desktop');
    fileira.addEventListener('wheel', e => {
        if (fileira.scrollWidth <= fileira.clientWidth) return;
        e.preventDefault();
        fileira.scrollLeft += e.deltaY + e.deltaX;
    }, { passive: false });
    let arrasto = null;
    fileira.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse' || fileira.scrollWidth <= fileira.clientWidth) return;
        arrasto = { x: e.clientX, inicio: fileira.scrollLeft, mexeu: false };
    });
    window.addEventListener('pointermove', e => {
        if (!arrasto) return;
        const dx = e.clientX - arrasto.x;
        if (Math.abs(dx) > 5) arrasto.mexeu = true;
        if (arrasto.mexeu) fileira.scrollLeft = arrasto.inicio - dx;
    });
    window.addEventListener('pointerup', () => {
        if (arrasto?.mexeu) {
            // nao abre o icone se foi so pra arrastar
            ignorarCliqueLogo(fileira);
        }
        arrasto = null;
    });
})();


// --- sem internet (jogo do dinossauro de oculos) ---

const net = { desligadaPorMim: false, caiuDeVerdade: !navigator.onLine };

function semInternet() {
    return net.desligadaPorMim || net.caiuDeVerdade;
}

function alternarInternet() {
    net.desligadaPorMim = !net.desligadaPorMim;
    // se a internet de verdade voltou, o botao liga de novo
    if (!net.desligadaPorMim) net.caiuDeVerdade = !navigator.onLine;
    mostrarConexao();
}

function mostrarConexao() {
    const caiu = semInternet();
    $('.area-pagina').classList.toggle('offline', caiu);
    $('#sem-internet').hidden = !caiu;
    const icone = $('#icone-net');
    icone.innerHTML = `<img class="ico" src="${urlIcone(caiu ? 'disconnect' : 'network_wireless')}" alt="">`;
    icone.title = caiu ? 'Sem conexão (clique pra conectar)' : 'Conectado à internet (clique pra desconectar)';
    icone.classList.toggle('caiu', caiu);
    if (caiu) {
        document.title = 'Não é possível acessar esta página';
        status('Sem conexão com a Internet');
        $('#navegador').scrollIntoView({ block: 'start' });
        dino.reiniciar();
        dino.desenhar();
    } else {
        dino.parar();
        mostrarPagina();
        status('Concluído');
    }
}

window.addEventListener('offline', () => { net.caiuDeVerdade = true; mostrarConexao(); });
window.addEventListener('online', () => { net.caiuDeVerdade = false; mostrarConexao(); });

// --- jogo do dinossauro (igual ao do chrome, so que de oculos) ---
// os numeros sao os mesmos do jogo original (tela de 600 x 150)

const JOGO = {
    largura: 600, altura: 150, fps: 60,
    velocidade: 6, velocidadeMax: 13, aceleracao: 0.001,
    espacoCoef: 0.6, espacoMaxCoef: 1.5, tempoLivre: 3000,
    maxGrupo: 3, maxRepetido: 2, noiteCada: 700, noiteDura: 12000,
    gameOverEspera: 1200, chao: 138,
};

const TREX = {
    largura: 44, altura: 47, larguraAbaixado: 59, alturaAbaixado: 25,
    x: 50, gravidade: 0.6, puloInicial: -10, alturaMin: 30, alturaMax: 30,
    quedaVel: -5, quedaRapida: 3,
    // so o dinossauro um pouco maior que o original (o pe continua no chao)
    escala: 1.2,
};
TREX.chao = JOGO.altura - TREX.altura - 10;

// caixas de colisao do original
const CAIXAS_TREX = {
    correndo: [[22, 0, 17, 16], [1, 18, 30, 9], [10, 35, 14, 8], [1, 24, 29, 5], [5, 30, 21, 4], [9, 34, 15, 4]],
    abaixado: [[1, 18, 55, 25]],
};

const TIPOS_OBSTACULO = [
    { tipo: 'pequeno', largura: 17, altura: 35, y: 105, varios: 4, espaco: 120, apartir: 0,
        caixas: [[0, 7, 5, 27], [4, 0, 6, 34], [10, 4, 7, 14]] },
    // no original o grupo de cacto grande so vem depois, aqui vem desde o comeco
    { tipo: 'grande', largura: 25, altura: 50, y: 90, varios: 4, espaco: 120, apartir: 0,
        caixas: [[0, 12, 7, 38], [8, 0, 7, 49], [13, 10, 10, 38]] },
    { tipo: 'passaro', largura: 46, altura: 40, y: [100, 75, 50], yCelular: [100, 50], varios: 999, espaco: 150, apartir: 8.5,
        quadros: 2, quadroMs: 1000 / 6, extra: 0.8,
        caixas: [[15, 15, 16, 5], [18, 21, 24, 6], [2, 14, 4, 3], [6, 10, 4, 7], [10, 8, 6, 9]] },
];

const CELULAR = matchMedia('(pointer: coarse)').matches;

// --- desenhos (cada letra e 1 pixel do jogo original) ---

function mapa(linhas, tamanho = 2) {
    // linhas de blocos: cada # vira um quadrado de 2x2
    const pontos = [];
    linhas.forEach((linha, l) => [...linha].forEach((ch, c) => {
        if (ch !== ' ') pontos.push([c * tamanho, l * tamanho, tamanho, ch]);
    }));
    return pontos;
}

// desenho do t-rex igualzinho ao do jogo do chrome (codigo aberto do chromium), 1 letra = 1 pixel
const TREX_CORPO = [
    '',
    '',
    '                        ################',
    '                        ################',
    '                      ####################',
    '                      ####  ##############',
    '                      ####  ##############',
    '                      ####################',
    '                      ####################',
    '                      ####################',
    '                      ####################',
    '                      ####################',
    '                      ####################',
    '                      ##########',
    '                      ##########',
    '                      ################',
    '                      ################',
    '  ##                ##########',
    '  ##                ##########',
    '  ##             #############',
    '  ##             #############',
    '  ####        ####################',
    '  ####        ####################',
    '  ######    ##################  ##',
    '  ######    ##################  ##',
    '  ############################',
    '  ############################',
    '  ############################',
    '  ############################',
    '    ##########################',
    '    ########################',
    '      ######################',
    '      ######################',
    '        ##################',
    '        ##################',
    '          ##############',
    '          ##############',
];

const TREX_PERNAS = [
    ['            ######  ####', '            ######  ####', '            ####      ##', '            ####      ##', '            ##        ##', '            ##        ##', '            ####      ####', '            ####      ####', '', ''],
    ['            ######    #####', '            ######    #####', '            ####', '            ####', '            ##', '            ##', '            ####', '            ####', '', ''],
    ['            ####    ####', '            ####    ####', '              ####    ##', '              ####    ##', '                      ##', '                      ##', '                      ####', '                      ####', '', ''],
];

const ABAIXADO_CORPO = [
    '',
    '',
    '  ##',
    '  ##                                   ################',
    '  ######        #################      ################',
    '  ######        #################    ####################',
    '  #######################################  ##############',
    '  #######################################  ##############',
    '    #####################################################',
    '    #####################################################',
    '      ###################################################',
    '      ###################################################',
    '        #################################################',
    '        #################################################',
    '          #####################################',
    '          #####################################',
    '            #######################    ##############',
    '            #######################    ##############',
    '              #####################',
    '              ############     ##',
];

const ABAIXADO_PERNAS = [
    ['             ##    ######      ##', '             ##    ######      ####', '             ####  ####        ####', '             ####  ####', '                   ##', '                   ##', '                   ####', '                   ####', '', ''],
    ['             ######    #####   ##', '             ######    #####   ####', '             ####              ####', '             ####', '             ##', '             ##', '             ####', '             ####', '', ''],
];

// oculos em pixel de verdade (o armacao, w lente, h brilho, p olho)
const LENTE = [
    ' oooooo ',
    'ohhwwwwo',
    'ohwwwwwo',
    'owwppwwo',
    'owwppwwo',
    'owwwwwwo',
    ' oooooo ',
];
function oculos(x, y) {
    const pontos = [];
    const pinta = (dx, dy, desenho) => desenho.forEach((linha, l) => [...linha].forEach((ch, c) => {
        if (ch !== ' ') pontos.push([x + dx + c, y + dy + l, 1, ch]);
    }));
    pinta(0, 0, LENTE);
    pinta(10, 0, LENTE);
    pinta(8, 2, ['oo']);
    pinta(-4, 2, ['oooo']);
    return pontos;
}

const SPRITES = {
    correndo: TREX_PERNAS.map(p => [...mapa([...TREX_CORPO, ...p], 1), ...oculos(23, 2)]),
    abaixado: ABAIXADO_PERNAS.map(p => [...mapa([...ABAIXADO_CORPO, ...p], 1), ...oculos(39, 3)]),
};

// cacto bonitinho: tronco e bracos com ponta redonda e espinhos
function cacto(largura, altura, troncoX, troncoL, bracos) {
    const pontos = [];
    const bloco = (x, y, l, a) => {
        for (let i = 0; i < l; i++) for (let j = 0; j < a; j++) pontos.push([x + i, y + j, 1, '#']);
    };
    const redondo = (x, y, l, a) => {
        bloco(x + 1, y, l - 2, 1);
        bloco(x, y + 1, l, a - 1);
    };
    redondo(troncoX, 0, troncoL, altura);
    bracos.forEach(({ x, l, topo, baixo, lado }) => {
        redondo(x, topo, l, baixo - topo);
        // cotovelo ligando no tronco
        const de = lado < 0 ? x : troncoX + troncoL;
        const ate = lado < 0 ? troncoX : x + l;
        bloco(Math.min(de, ate), baixo - 3, Math.abs(ate - de), 3);
        bloco(lado < 0 ? x + 1 : x, baixo - 1, l - 1, 1);
    });
    // espinhos
    for (let y = 4; y < altura - 4; y += 6) {
        pontos.push([troncoX - 1, y, 1, '#']);
        pontos.push([troncoX + troncoL, y + 3, 1, '#']);
    }
    return pontos.filter(([x, y]) => x >= 0 && x < largura && y >= 0 && y < altura);
}

const SPRITE_CACTO = {
    pequeno: cacto(17, 35, 6, 5, [{ x: 1, l: 4, topo: 9, baixo: 21, lado: -1 }, { x: 12, l: 4, topo: 6, baixo: 17, lado: 1 }]),
    grande: cacto(25, 50, 9, 7, [{ x: 1, l: 6, topo: 13, baixo: 32, lado: -1 }, { x: 18, l: 6, topo: 9, baixo: 27, lado: 1 }]),
};

const PASSARO_QUADROS = [
    [
        '      #         ',
        '      ##        ',
        '   #  ###       ',
        '  ##  ####      ',
        ' ###  #####     ',
        '##############  ',
        '   ##########   ',
        '      ######    ',
    ],
    [
        '                ',
        '                ',
        '   #            ',
        '  ##            ',
        ' ###            ',
        '##############  ',
        '   ##########   ',
        '      #####     ',
        '      ###       ',
        '      ##        ',
        '      #         ',
    ],
].map(q => mapa(q, 3));

const CORES_JOGO = { '#': '#535353', o: '#2b2b2b', w: '#dedede', h: '#f2f2f2', p: '#1a1a1a' };

// --- o jogo ---

const dino = {
    ctx: null, quadro: null, ultimo: 0, rodando: false, acabou: false, horaDoFim: 0,
    vel: JOGO.velocidade, distancia: 0, tempo: 0, recorde: 0,
    obstaculos: [], historico: [], nuvens: [], chaoX: 0,
    piscar: 0, noite: false, noiteTempo: 0,
    trex: null,

    iniciar() {
        const canvas = $('#dino');
        // desenha em dobro pra ficar nitido
        canvas.width = JOGO.largura * 2;
        canvas.height = JOGO.altura * 2;
        this.ctx = canvas.getContext('2d');
        this.recorde = guardar.ler('dino-recorde', 0);
        this.reiniciar();
    },

    reiniciar() {
        this.parar();
        this.vel = JOGO.velocidade;
        this.distancia = 0;
        this.tempo = 0;
        this.obstaculos = [];
        this.historico = [];
        this.nuvens = [{ x: 150, y: 40 }, { x: 420, y: 60 }];
        this.acabou = false;
        this.piscar = 0;
        this.noite = false;
        this.noiteTempo = 0;
        $('#dino').classList.remove('noite');
        this.trex = { y: TREX.chao, vy: 0, pulando: false, abaixado: false, quedaRapida: false, alturaMinOk: false, passo: 0 };
    },

    parar() {
        this.rodando = false;
        cancelAnimationFrame(this.quadro);
    },

    comecar() {
        if (this.rodando) return;
        this.rodando = true;
        this.ultimo = performance.now();
        this.quadro = requestAnimationFrame(t => this.loop(t));
    },

    // --- controles iguais ao original ---
    apertouPular() {
        if (this.acabou) {
            if (performance.now() - this.horaDoFim < JOGO.gameOverEspera) return;
            this.reiniciar();
        }
        this.comecar();
        const t = this.trex;
        if (!t.pulando && !t.abaixado) {
            t.pulando = true;
            t.vy = TREX.puloInicial - this.vel / 10;
            t.alturaMinOk = false;
            t.quedaRapida = false;
        }
    },
    soltouPular() {
        const t = this.trex;
        // soltar cedo faz o pulo ser mais baixo
        if (t.pulando && t.alturaMinOk && t.vy < TREX.quedaVel) t.vy = TREX.quedaVel;
    },
    apertouAbaixar() {
        if (!this.rodando || this.acabou) return;
        const t = this.trex;
        if (t.pulando) {
            t.quedaRapida = true;
            t.vy = 1;
        } else {
            t.abaixado = true;
        }
    },
    soltouAbaixar() {
        this.trex.quedaRapida = false;
        this.trex.abaixado = false;
    },

    loop(agora) {
        if (!this.rodando) return;
        const delta = Math.min(50, agora - this.ultimo);
        this.ultimo = agora;
        this.atualizar(delta);
        this.desenhar();
        if (this.rodando) this.quadro = requestAnimationFrame(t => this.loop(t));
    },

    atualizar(delta) {
        const quadros = delta / (1000 / JOGO.fps);
        const t = this.trex;

        // pulo
        if (t.pulando) {
            t.y += Math.round(t.vy * (t.quedaRapida ? TREX.quedaRapida : 1) * quadros);
            t.vy += TREX.gravidade * quadros;
            if (t.y < TREX.chao - TREX.alturaMin || t.quedaRapida) t.alturaMinOk = true;
            if (t.y < TREX.alturaMax || t.quedaRapida) this.soltouPular();
            if (t.y > TREX.chao) {
                t.y = TREX.chao;
                t.vy = 0;
                t.pulando = false;
                t.quedaRapida = false;
            }
        }
        t.passo += delta;

        this.tempo += delta;
        const temObstaculo = this.tempo > JOGO.tempoLivre;

        // chao, nuvens e obstaculos andando
        const anda = this.vel * JOGO.fps / 1000 * delta;
        this.chaoX = (this.chaoX + anda) % JOGO.largura;
        this.nuvens.forEach(n => { n.x -= 0.2 * JOGO.fps / 1000 * delta * 2; });
        this.nuvens = this.nuvens.filter(n => n.x > -50);
        const ultimaNuvem = this.nuvens[this.nuvens.length - 1];
        if (this.nuvens.length < 6 && (!ultimaNuvem || ultimaNuvem.x < JOGO.largura - 100 - Math.random() * 300)) {
            this.nuvens.push({ x: JOGO.largura, y: 30 + Math.random() * 41 });
        }

        if (temObstaculo) {
            this.obstaculos.forEach(o => {
                o.x -= Math.floor((this.vel + o.extra) * JOGO.fps / 1000 * delta);
                o.tempo += delta;
            });
            this.obstaculos = this.obstaculos.filter(o => o.x + o.largura > 0);
            const ultimo = this.obstaculos[this.obstaculos.length - 1];
            if (!ultimo) this.novoObstaculo();
            else if (!ultimo.seguinte && ultimo.x + ultimo.largura + ultimo.espaco < JOGO.largura) {
                this.novoObstaculo();
                ultimo.seguinte = true;
            }
        }

        // bateu?
        const primeiro = this.obstaculos[0];
        if (temObstaculo && primeiro && this.bateu(primeiro)) {
            this.fimDeJogo();
            return;
        }

        this.distancia += this.vel * quadros;
        if (this.vel < JOGO.velocidadeMax) this.vel += JOGO.aceleracao * quadros;

        // placar pisca a cada 100
        const pontos = this.pontos();
        if (pontos > 0 && pontos % 100 === 0 && pontos !== this.ultimoPisca) {
            this.ultimoPisca = pontos;
            this.piscar = 1500;
        }
        if (this.piscar > 0) this.piscar -= delta;

        // modo noite a cada 700
        if (this.noiteTempo > 0) {
            this.noiteTempo += delta;
            if (this.noiteTempo > JOGO.noiteDura) {
                this.noiteTempo = 0;
                this.noite = false;
                $('#dino').classList.remove('noite');
            }
        } else if (pontos > 0 && pontos % JOGO.noiteCada === 0 && pontos !== this.ultimaNoite) {
            this.ultimaNoite = pontos;
            this.noiteTempo = delta;
            this.noite = true;
            $('#dino').classList.add('noite');
        }
    },

    pontos() {
        return Math.round(Math.ceil(this.distancia) * 0.025);
    },

    novoObstaculo() {
        const podem = TIPOS_OBSTACULO.filter(o => this.vel >= o.apartir
            && !(this.historico.length >= JOGO.maxRepetido && this.historico.every(h => h === o.tipo)));
        const tipo = podem[Math.floor(Math.random() * podem.length)];
        let tamanho = 1 + Math.floor(Math.random() * JOGO.maxGrupo);
        if (tamanho > 1 && tipo.varios > this.vel) tamanho = 1;
        const largura = tipo.largura * tamanho;
        const alturas = Array.isArray(tipo.y) ? (CELULAR ? tipo.yCelular : tipo.y) : [tipo.y];
        const espacoMin = Math.round(largura * this.vel + tipo.espaco * JOGO.espacoCoef);
        const espacoMax = Math.round(espacoMin * JOGO.espacoMaxCoef);
        // caixas de colisao: a do meio estica com o grupo
        const caixas = tipo.caixas.map(c => [...c]);
        if (tamanho > 1) {
            caixas[1][2] = largura - caixas[0][2] - caixas[2][2];
            caixas[2][0] = largura - caixas[2][2];
        }
        this.obstaculos.push({
            ...tipo, tamanho, largura, caixas, x: JOGO.largura, tempo: 0, seguinte: false,
            y: alturas[Math.floor(Math.random() * alturas.length)],
            extra: tipo.extra ? (Math.random() > 0.5 ? tipo.extra : -tipo.extra) : 0,
            espaco: espacoMin + Math.floor(Math.random() * (espacoMax - espacoMin + 1)),
        });
        this.historico = [tipo.tipo, ...this.historico].slice(0, JOGO.maxRepetido);
    },

    bateu(o) {
        const t = this.trex;
        const abaixado = t.abaixado && !t.pulando;
        const tx = TREX.x, ty = abaixado ? TREX.chao : t.y;
        const tl = abaixado ? TREX.larguraAbaixado : TREX.largura;
        const ta = TREX.altura;
        // caixa de fora primeiro (com 1px de folga)
        const fora = (ax, ay, al, aa, bx, by, bl, ba) => ax < bx + bl && ax + al > bx && ay < by + ba && ay + aa > by;
        const grande = TREX.escala;
        if (!fora(tx + 1, ty - ta * (grande - 1) + 1, tl * grande - 2, ta * grande - 2, o.x + 1, o.y + 1, o.largura - 2, o.altura - 2)) return false;
        const caixasTrex = abaixado ? CAIXAS_TREX.abaixado : CAIXAS_TREX.correndo;
        // caixas crescem junto com o dinossauro, presas no pe
        const e = TREX.escala, sobe = ta * (e - 1);
        return caixasTrex.some(([x, y, l, a]) => o.caixas.some(([ox, oy, ol, oa]) =>
            fora(tx + x * e, ty + y * e - sobe, l * e, a * e, o.x + ox, o.y + oy, ol, oa)));
    },

    fimDeJogo() {
        this.acabou = true;
        this.horaDoFim = performance.now();
        this.parar();
        const pontos = this.pontos();
        if (pontos > this.recorde) {
            this.recorde = pontos;
            guardar.salvar('dino-recorde', pontos);
        }
        this.desenhar();
    },

    pinta(pontos, x, y) {
        pontos.forEach(([px, py, tam, cor]) => {
            this.ctx.fillStyle = CORES_JOGO[cor];
            this.ctx.fillRect(x + px, y + py, tam, tam);
        });
    },

    desenharTrex() {
        const t = this.trex;
        // desenha maior a partir do pe
        const e = TREX.escala, pe = (t.abaixado && !t.pulando) ? TREX.chao + TREX.altura : t.y + TREX.altura;
        this.ctx.save();
        this.ctx.translate(TREX.x, pe);
        this.ctx.scale(e, e);
        this.ctx.translate(-TREX.x, -pe);
        this.desenharTrexNormal();
        this.ctx.restore();
    },

    desenharTrexNormal() {
        const t = this.trex;
        if (t.abaixado && !t.pulando) {
            const quadro = SPRITES.abaixado[Math.floor(t.passo / 125) % 2];
            this.pinta(quadro, TREX.x, TREX.chao + 17);
            return;
        }
        let pernas = 0;
        if (this.rodando && !t.pulando && !this.acabou) pernas = 1 + Math.floor(t.passo / 83) % 2;
        this.pinta(SPRITES.correndo[pernas], TREX.x, t.y);
        // olhinhos fechados quando bate
        if (this.acabou) {
            this.ctx.fillStyle = CORES_JOGO.w;
            [24, 34].forEach(c => this.ctx.fillRect(TREX.x + c, t.y + 3, 6, 5));
            this.ctx.fillStyle = CORES_JOGO.o;
            [25, 35].forEach(c => this.ctx.fillRect(TREX.x + c, t.y + 5, 4, 1));
        }
    },

    desenhar() {
        const ctx = this.ctx;
        if (!ctx) return;
        ctx.setTransform(2, 0, 0, 2, 0, 0);
        ctx.clearRect(0, 0, JOGO.largura, JOGO.altura);

        // nuvens
        ctx.fillStyle = '#e0e0e0';
        this.nuvens.forEach(n => {
            ctx.fillRect(n.x + 14, n.y, 18, 2);
            ctx.fillRect(n.x + 10, n.y + 2, 26, 3);
            ctx.fillRect(n.x + 4, n.y + 5, 38, 4);
            ctx.fillRect(n.x, n.y + 9, 46, 3);
        });

        // chao com pedrinhas
        ctx.fillStyle = '#535353';
        ctx.fillRect(0, JOGO.chao, JOGO.largura, 1);
        for (let i = 0; i < 30; i++) {
            const x = ((i * 53 - this.chaoX) % JOGO.largura + JOGO.largura) % JOGO.largura;
            ctx.fillRect(x, JOGO.chao + 3 + (i % 3) * 3, 1 + (i % 4), 1);
        }

        // obstaculos
        this.obstaculos.forEach(o => {
            if (o.tipo === 'passaro') {
                const quadro = PASSARO_QUADROS[Math.floor(o.tempo / o.quadroMs) % 2];
                this.pinta(quadro, o.x, o.y + 6);
            } else {
                for (let i = 0; i < o.tamanho; i++) this.pinta(SPRITE_CACTO[o.tipo], o.x + i * (o.largura / o.tamanho), o.y);
            }
        });

        this.desenharTrex();

        // placar
        ctx.font = 'bold 11px "Courier New", monospace';
        ctx.textAlign = 'right';
        ctx.fillStyle = '#535353';
        const zeros = n => String(n).padStart(5, '0');
        const pontos = this.pontos();
        const piscando = this.piscar > 0 && Math.floor(this.piscar / 250) % 2 === 0;
        const atual = piscando ? '     ' : zeros(this.piscar > 0 ? this.ultimoPisca : pontos);
        ctx.fillText(`${this.recorde ? `HI ${zeros(this.recorde)}  ` : ''}${atual}`, 590, 18);

        ctx.textAlign = 'center';
        if (this.acabou) {
            ctx.font = 'bold 14px "Courier New", monospace';
            ctx.fillText('G A M E   O V E R', 300, 52);
            // botao de recomecar
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#535353';
            ctx.beginPath();
            ctx.arc(300, 78, 9, Math.PI * 0.35, Math.PI * 1.9);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(306, 64);
            ctx.lineTo(312, 72);
            ctx.lineTo(302, 74);
            ctx.fill();
        } else if (!this.rodando) {
            ctx.font = '10px Verdana, sans-serif';
            ctx.fillStyle = '#757575';
            ctx.fillText(CELULAR ? 'toque pra começar' : 'aperte espaço pra começar', 300, 60);
        }
    },
};

// teclado: espaco ou seta pra cima pula, seta pra baixo abaixa, enter recomeca
document.addEventListener('keydown', e => {
    if (!semInternet() || e.target.closest?.('input, textarea')) return;
    if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!e.repeat) dino.apertouPular();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        dino.apertouAbaixar();
    } else if (e.key === 'Enter' && dino.acabou) {
        dino.horaDoFim = 0;
        dino.apertouPular();
    }
});
document.addEventListener('keyup', e => {
    if (!semInternet()) return;
    if (e.code === 'Space' || e.key === 'ArrowUp') dino.soltouPular();
    if (e.key === 'ArrowDown') dino.soltouAbaixar();
});
// clicar ou tocar no jogo pula (depois de perder, clicar recomeca na hora)
$('#dino').addEventListener('pointerdown', e => {
    e.preventDefault();
    if (dino.acabou) dino.horaDoFim = 0;
    dino.apertouPular();
});
$('#dino').addEventListener('pointerup', () => dino.soltouPular());


// --- traducao automatica (ingles ou espanhol pra quem nao e de pais que fala portugues) ---
// usa o tradutor que vem dentro do chrome/edge, entao nada sai do computador da pessoa

const FUSOS_PORTUGUES = /^(America\/(Sao_Paulo|Bahia|Fortaleza|Recife|Maceio|Belem|Manaus|Cuiaba|Campo_Grande|Porto_Velho|Boa_Vista|Rio_Branco|Araguaina|Santarem|Noronha|Eirunepe)|Europe\/Lisbon|Atlantic\/(Azores|Madeira|Cape_Verde)|Africa\/(Luanda|Maputo|Bissau|Sao_Tome)|Asia\/(Dili|Macau))$/;
const FUSOS_ESPANHOL = /^(Europe\/Madrid|Africa\/Ceuta|Atlantic\/Canary|America\/(Mexico_City|Cancun|Merida|Monterrey|Matamoros|Chihuahua|Ciudad_Juarez|Ojinaga|Mazatlan|Bahia_Banderas|Hermosillo|Tijuana|Argentina\/.+|Buenos_Aires|Cordoba|Mendoza|Bogota|Lima|Santiago|Punta_Arenas|Caracas|Montevideo|Asuncion|La_Paz|Guayaquil|Havana|Panama|Costa_Rica|Guatemala|Tegucigalpa|El_Salvador|Managua|Santo_Domingo|Puerto_Rico)|Pacific\/(Galapagos|Easter)|Africa\/Malabo)$/;

const IDIOMAS = { pt: 'Português', en: 'English', es: 'Español' };

const AVISO_TRADUCAO = {
    en: 'This site is in Portuguese. Your browser can translate it: right-click the page and choose "Translate to English".',
    es: 'Este sitio está en portugués. Tu navegador puede traducirlo: haz clic derecho en la página y elige "Traducir al español".',
};
// no celular nao tem botao direito, entao o aviso muda
const AVISO_TRADUCAO_CELULAR = {
    en: 'This site is in Portuguese. To translate it, open your browser menu (⋮ or the aA button) and tap "Translate".',
    es: 'Este sitio está en portugués. Para traducirlo, abre el menú del navegador (⋮ o el botón aA) y toca "Traducir".',
};

const traducao = {
    idioma: 'pt', tradutor: null, nos: new Map(), atributos: new Map(), feitos: new WeakMap(),
    cache: new Map(), observador: null, fila: [], rodando: false,
};

// descobre pelo fuso horario (pais) e pelo idioma do navegador
function idiomaDoVisitante() {
    const salvo = guardar.ler('idioma', '');
    if (IDIOMAS[salvo]) return salvo;
    let fuso = '';
    try { fuso = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { /* sem fuso */ }
    const lingua = String(navigator.languages?.[0] || navigator.language || 'pt').toLowerCase();
    if (FUSOS_PORTUGUES.test(fuso)) return 'pt';
    if (FUSOS_ESPANHOL.test(fuso)) return 'es';
    if (lingua.startsWith('pt')) return 'pt';
    if (lingua.startsWith('es')) return 'es';
    return 'en';
}

// partes que nao traduz (nomes, codigo, campos de digitar)
// partes que nao traduz: nomes, musicas, numeros e a barra de status (ela muda toda hora)
const NAO_TRADUZ = 'script, style, textarea, input, select, canvas, svg, code, .nao-traduzir, .logo-3d, [data-nome], #relogio, #lista-player, .wa-tempo, #contador, #status-texto, #player, #ouvindo, #ouvindo-pagina, .tabela-musicas, .mais-ouvida, .quem, #balao-zap-texto b';

function textoTraduzivel(texto) {
    return /\p{L}{2,}/u.test(texto);
}

function guardarTexto(no) {
    if (traducao.feitos.get(no) === no.nodeValue) return;
    if (!textoTraduzivel(no.nodeValue)) return;
    if (no.parentElement?.closest(NAO_TRADUZ)) return;
    traducao.nos.set(no, no.nodeValue);
    traducao.fila.push(() => traduzirTexto(no));
}

function procurarTextos(raiz) {
    if (raiz.nodeType === Node.TEXT_NODE) return guardarTexto(raiz);
    if (raiz.nodeType !== Node.ELEMENT_NODE || raiz.closest(NAO_TRADUZ)) return;
    const andar = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
    while (andar.nextNode()) guardarTexto(andar.currentNode);
    [raiz, ...raiz.querySelectorAll('[placeholder], [title]')].forEach(el => {
        ['placeholder', 'title'].forEach(nome => {
            const valor = el.getAttribute?.(nome);
            if (!valor || !textoTraduzivel(valor) || el.closest('.nao-traduzir')) return;
            const chave = `${nome}`;
            const guardados = traducao.atributos.get(el) || {};
            if (guardados[`${chave}-feito`] === valor) return;
            guardados[chave] = valor;
            traducao.atributos.set(el, guardados);
            traducao.fila.push(async () => {
                const pronto = await traduzir(valor);
                if (el.getAttribute(nome) !== valor) return;
                guardados[`${chave}-feito`] = pronto;
                el.setAttribute(nome, pronto);
            });
        });
    });
}

async function traduzir(texto) {
    const limpo = texto.trim();
    if (!traducao.cache.has(limpo)) traducao.cache.set(limpo, traducao.tradutor.translate(limpo).catch(() => limpo));
    const pronto = await traducao.cache.get(limpo);
    return texto.match(/^\s*/)[0] + pronto + texto.match(/\s*$/)[0];
}

async function traduzirTexto(no) {
    const original = traducao.nos.get(no);
    if (original === undefined || traducao.idioma === 'pt') return;
    const pronto = await traduzir(original);
    if (traducao.nos.get(no) !== original || traducao.idioma === 'pt') return;
    traducao.feitos.set(no, pronto);
    no.nodeValue = pronto;
}

// vai traduzindo um pouco por vez pra nao travar a pagina
async function andarFila() {
    if (traducao.rodando) return;
    traducao.rodando = true;
    while (traducao.fila.length && traducao.idioma !== 'pt') {
        const lote = traducao.fila.splice(0, 20);
        await Promise.all(lote.map(f => f()));
    }
    traducao.rodando = false;
}

function vigiarPagina() {
    if (traducao.observador) return;
    traducao.observador = new MutationObserver(mudancas => {
        if (traducao.idioma === 'pt') return;
        mudancas.forEach(m => {
            if (m.type === 'characterData') guardarTexto(m.target);
            else m.addedNodes.forEach(procurarTextos);
        });
        andarFila();
    });
    traducao.observador.observe(document.body, { childList: true, subtree: true, characterData: true });
}

// desiste se o navegador demorar demais pra responder
function comPrazo(promessa, ms) {
    return Promise.race([promessa, new Promise((_, falhou) => setTimeout(() => falhou(new Error('demorou')), ms))]);
}

async function criarTradutor(idioma) {
    if (!('Translator' in self)) return null;
    try {
        const disponivel = await comPrazo(self.Translator.availability({ sourceLanguage: 'pt', targetLanguage: idioma }), 3000);
        if (disponivel === 'unavailable') return null;
        return await comPrazo(self.Translator.create({ sourceLanguage: 'pt', targetLanguage: idioma }), 60000);
    } catch {
        return null;
    }
}

function avisoTraducao(idioma) {
    const aviso = $('#aviso-traducao');
    aviso.hidden = !AVISO_TRADUCAO[idioma];
    if (aviso.hidden) return;
    const celular = matchMedia('(pointer: coarse)').matches;
    $('#aviso-traducao-texto').textContent = (celular ? AVISO_TRADUCAO_CELULAR : AVISO_TRADUCAO)[idioma];
}

async function trocarIdioma(idioma, escolhido = false) {
    if (escolhido) guardar.salvar('idioma', idioma);
    traducao.idioma = idioma;
    $$('[data-comando^="idioma-"]').forEach(b => b.classList.toggle('marcado', b.dataset.comando === `idioma-${idioma}`));
    // volta tudo pro portugues
    if (idioma === 'pt') {
        traducao.fila = [];
        traducao.nos.forEach((original, no) => { if (no.isConnected) no.nodeValue = original; });
        traducao.atributos.forEach((guardados, el) => {
            ['placeholder', 'title'].forEach(nome => { if (guardados[nome]) el.setAttribute(nome, guardados[nome]); });
        });
        traducao.nos.clear();
        traducao.atributos.clear();
        document.documentElement.lang = 'pt-BR';
        $('#aviso-traducao').hidden = true;
        return;
    }
    traducao.tradutor?.destroy?.();
    traducao.tradutor = null;
    // enquanto o tradutor nao fica pronto mostra o aviso
    avisoTraducao(idioma);
    const tradutor = await criarTradutor(idioma);
    if (traducao.idioma !== idioma) return tradutor?.destroy?.();
    traducao.tradutor = tradutor;
    if (!traducao.tradutor) {
        // navegador sem tradutor embutido: mostra o aviso
        avisoTraducao(idioma);
        return;
    }
    $('#aviso-traducao').hidden = true;
    traducao.cache.clear();
    traducao.nos.clear();
    traducao.atributos.clear();
    traducao.feitos = new WeakMap();
    document.documentElement.lang = idioma;
    procurarTextos(document.body);
    vigiarPagina();
    andarFila();
}

function iniciarTraducao() {
    const idioma = idiomaDoVisitante();
    if (idioma === 'pt') return;
    // o chrome pode precisar baixar o tradutor e isso so pode depois de um clique
    trocarIdioma(idioma).then(() => {
        if (traducao.tradutor || !('Translator' in self)) return;
        const tentar = () => trocarIdioma(traducao.idioma);
        document.addEventListener('pointerdown', tentar, { once: true });
        document.addEventListener('keydown', tentar, { once: true });
    });
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
    'idioma-pt': () => trocarIdioma('pt', true),
    'idioma-en': () => trocarIdioma('en', true),
    'idioma-es': () => trocarIdioma('es', true),
    'fechar-aviso-traducao': () => { $('#aviso-traducao').hidden = true; },
    'internet': () => alternarInternet(),
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
        texto: '• Use os botões do topo e do lado para navegar.\n• Deixe recados, depoimentos e entre pros meus amigos.\n• Converse com todo mundo no Zap do Lucas.\n• Desenhe no Paint e mande pra mim.\n• Arraste as janelas pela barra azul.\n• Troque o papel de parede em Ferramentas.\n• Cada programa (Paint, Zap, Calculadora...) tem um ? na janela que explica como usar.\n• Emoticons viram imagem: :) :D :P ;) (L) (Y) (H)',
    }),
    'sobre': () => dialogo({
        titulo: 'Sobre o Quarto do Lucas', icone: 'internet_explorer',
        texto: `QUARTO DO LUCAS\nVersão 1.0 (estilo orkut, 2006–2026)\n\nFeito à mão com HTML, CSS e JavaScript.\nMelhor visualizado em 1024×768. (H)\n\nÍcones: FatCow (CC BY 3.0) · GIFs: GifCities`,
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
        const rota = paginas[Math.floor(Math.random() * paginas.length)];
        if (!abaNovaViraSite(rota)) ir(rota);
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
            lembrarNome(dados.autor);
            mostrarPagina();
        }
        if (tipo === 'depoimento') {
            await depoimentos.adicionar({ autor: dados.autor.trim(), texto: dados.texto.trim() });
            lembrarNome(dados.autor);
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
            lembrarNome(dados.nome);
            $('#resultado-sorte').innerHTML = resultadoSorte(dados.nome.trim());
        }
        if (tipo === 'desenho') {
            const imagem = $('#paint-canvas').toDataURL('image/png');
            if (imagem.length > 600000) {
                return dialogo({ titulo: 'Paint', icone: 'error', texto: 'Esse desenho ficou pesado demais para enviar. Tente com menos spray. :P' });
            }
            await desenhos.adicionar({ autor: dados.autor.trim(), titulo: dados.titulo.trim(), imagem });
            lembrarNome(dados.autor);
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
            const fotoAntiga = DADOS.foto;
            if (dados.foto?.size) valor.foto = urlFotoPostada(await subirImagem(dados.foto, 'perfil', 600));
            await salvarConfig('perfil', valor);
            // apaga a foto de perfil velha pra nao ficar arquivo sobrando
            const caminhoAntigo = String(fotoAntiga).split('/public/fotos/')[1];
            if (valor.foto !== fotoAntiga && caminhoAntigo?.startsWith('perfil/')) {
                nuvem.storage.from('fotos').remove([caminhoAntigo]).catch(console.error);
            }
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
        if (tipo === 'mp3') {
            const arquivo = dados.arquivo;
            if (!arquivo?.size) return dialogo({ titulo: 'Winamp', icone: 'error', texto: 'Escolhe o arquivo da música.' });
            if (!arquivo.type.startsWith('audio/') && !/\.mp3$/i.test(arquivo.name)) return dialogo({ titulo: 'Winamp', icone: 'error', texto: 'Isso não é um arquivo de música.' });
            if (arquivo.size > 20 * 1024 * 1024) return dialogo({ titulo: 'Winamp', icone: 'error', texto: 'Arquivo grande demais (máximo 20 MB).' });
            const extensao = (arquivo.name.split('.').pop() || 'mp3').toLowerCase().replace(/[^a-z0-9]/g, '') || 'mp3';
            const caminho = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensao}`;
            const { error } = await nuvem.storage.from('musicas').upload(caminho, arquivo, { contentType: arquivo.type || 'audio/mpeg' });
            if (error) throw error;
            await salvarConfig('mp3', { ...(DADOS.mp3 || {}), [dados.id]: caminho });
            atualizarPlayer();
            mostrarPagina();
            dialogo({ titulo: 'Winamp', icone: 'accept', texto: 'Pronto! Agora essa música toca inteira no Winamp (8)' });
        }
        if (tipo === 'lixeira') {
            const antigo = DADOS.lixeira[edicaoLixeira];
            const arquivo = { nome: dados.nome.trim().slice(0, 60), conteudo: dados.conteudo.slice(0, 3000) };
            if (antigo?.imagem && !dados.semImagem) arquivo.imagem = antigo.imagem;
            if (dados.imagem?.size) arquivo.imagem = await subirImagem(dados.imagem, 'lixeira', 1200);
            const lista = [...DADOS.lixeira];
            if (antigo) lista[edicaoLixeira] = arquivo;
            else lista.unshift(arquivo);
            await salvarConfig('lixeira', lista.slice(0, 40));
            edicaoLixeira = null;
            mostrarPagina();
            mostrarLixeira();
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
            // nao deixa dois amigos com o mesmo nome (senao a foto dos recados fica trocada)
            if (amigoPeloNome(dados.nome)) {
                return dialogo({ titulo: 'Amigos', icone: 'information', texto: `Já tem um amigo chamado "${dados.nome.trim()}". Se for você, já está tudo certo (L)
Se não for, usa outro nome ou apelido.` });
            }
            const foto = await fotoQuadrada(dados.foto, 128);
            await amigos.adicionar({ nome: dados.nome.trim(), foto });
            lembrarNome(dados.nome);
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

    const el = alvo.closest('[data-abrir], [data-comando], [data-janela], [data-tarefa], [data-aba], [data-fechar-aba], [data-apagar], [data-apagar-foto], [data-apagar-comunidade], [data-editar], [data-publicar], [data-tocar], [data-player], [data-foto], [data-lightbox], [data-ferramenta], [data-cor], [data-cor-editor], [data-cores], [data-fundo], [data-notas], [data-lixeira], [data-arquivo-lixeira], [data-tirar-mp3], [data-apagar-lixeira], [data-editar-lixeira], [data-cancelar-lixeira], [data-msn], [data-desenho-mural], [data-fechar-balao], [data-calc], [data-ajuda], [data-menu-calc], [data-ver-ouvidas], .emoticons button, [data-sair-guia], [data-dialogo-fechar]');
    if (!el) return;
    const d = el.dataset;

    if (d.fecharAba) { e.stopPropagation(); return fecharAba(d.fecharAba); }
    if (d.abrir) { e.preventDefault(); return abrirJanela(d.abrir); }
    if (d.comando) { e.preventDefault(); return COMANDOS[d.comando]?.(); }
    if (d.janela) return acaoJanela(el.closest('.janela'), d.janela);
    if (d.tarefa) return clicarTarefa(d.tarefa);
    if (d.aba) return trocarAba(d.aba);
    if ('sairGuia' in d) {
        e.preventDefault();
        abaNovaViraSite(el.getAttribute('href').slice(1));
        return;
    }
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
            guardar.salvar('lixeira-vazia', true);
            mostrarLixeira();
        });
    }
    if (d.lixeira === 'restaurar') {
        guardar.salvar('lixeira-vazia', false);
        return mostrarLixeira();
    }
    if (d.arquivoLixeira) return abrirArquivoLixeira(Number(d.arquivoLixeira));
    if (d.tirarMp3) {
        return confirmar('Winamp', 'Tirar o mp3 dessa música? Ela volta a tocar só um pedacinho.', async () => {
            try {
                const mp3 = { ...(DADOS.mp3 || {}) };
                const caminho = mp3[d.tirarMp3];
                delete mp3[d.tirarMp3];
                if (caminho) await nuvem.storage.from('musicas').remove([caminho]);
                await salvarConfig('mp3', mp3);
                atualizarPlayer();
                mostrarPagina();
            } catch (erro) {
                erroNuvem(erro);
            }
        });
    }
    if (d.apagarLixeira) {
        return confirmar('Lixeira', 'Tirar esse arquivo da lixeira?', () => {
            const lista = DADOS.lixeira.filter((_, i) => i !== Number(d.apagarLixeira));
            salvarConfig('lixeira', lista).then(() => { mostrarPagina(); mostrarLixeira(); }, erroNuvem);
        });
    }
    if (d.editarLixeira) {
        edicaoLixeira = Number(d.editarLixeira);
        mostrarPagina();
        $('#central form')?.scrollIntoView({ block: 'center' });
        return;
    }
    if (d.cancelarLixeira) {
        edicaoLixeira = null;
        return mostrarPagina();
    }
    if (d.msn === 'atencao') return zapAtencao();
    if ('fecharBalao' in d) { $('#balao-zap').hidden = true; return; }
    if (d.desenhoMural) return abrirDesenhoMural(Number(d.desenhoMural));
    if (d.calc) return teclaCalc(d.calc);
    if (d.ajuda) return ajudaDoApp(d.ajuda);
    if (d.menuCalc === 'editar') {
        navigator.clipboard?.writeText($('#visor-calc').textContent).catch(() => {});
        return status('Resultado copiado');
    }
    if (d.menuCalc === 'exibir') return dialogo({ titulo: 'Calculadora', icone: 'calculator', texto: 'Por enquanto só tem o modo Padrão. :)' });

    if (el.matches('[data-ver-ouvidas]')) {
        ouvindo.aberto = !ouvindo.aberto;
        return preencherOuvindo();
    }

    // botoes de emoticon
    if (el.matches('[data-mais-emoticons]')) {
        const todos = el.nextElementSibling;
        todos.hidden = !todos.hidden;
        el.textContent = todos.hidden ? '▼' : '▲';
        return;
    }
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
        form.querySelector('input').blur();
        const rota = 'busca/' + encodeURIComponent(termo);
        // pesquisou na nova guia: ela vira uma segunda aba com o resultado
        if (abaNovaViraSite(rota)) return;
        return ir(rota);
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
    if (abas.find(a => a.id === abaAtiva)?.tipo === 'site') mostrarPagina();
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
    if (embed.id) mandarSpotify({ command: 'pause' });
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
    const r = e.currentTarget.getBoundingClientRect();
    pularPara((e.clientX - r.left) / r.width);
});

$('#notas-texto').addEventListener('input', e => {
    guardar.salvar('notas', e.target.value);
    infoNotas();
});

window.addEventListener('hashchange', () => {
    const aba = abas.find(a => a.id === abaAtiva);
    // link clicado na nova guia: ela vira aba do site
    if (aba?.tipo === 'nova') aba.tipo = 'site';
    mostrarPagina();
    descerProConteudo();
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
    corWinamp();
    iniciarTraducao();
    dino.iniciar();
    if (semInternet()) mostrarConexao();
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
        setInterval(carregarLastfm, 30000);
        carregarMaisOuvida();
        setInterval(carregarMaisOuvida, 10 * 60000);
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
    // fica olhando se chegou mensagem nova no zap
    checarZap();
    setInterval(checarZap, 20000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checarZap(); });
}

iniciar();
