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

// emoji de celular vira emoticon antigo do msn (o que nao tem parecido some)
const EMOJIS_ANTIGOS = [
    ['😀😃😄😁😆😊🙂☺😌🤗', 'emotion_smile'], ['😂🤣😹', 'emotion_haha'], ['😉😜', 'emotion_wink'], ['😛😝😋', 'emotion_tongue'],
    ['😎🤠', 'emotion_cool'], ['😍🥰😻🤩', 'emotion_love'], ['😘😗😙😚💋', 'emotion_kiss'], ['😢😥😞😔😟🙁☹😿🥺', 'emotion_sad'],
    ['😭', 'emotion_cry'], ['😡😠🤬😤👿', 'emotion_angry'], ['😮😯😲😱😳🙀', 'emotion_suprised'], ['🤔🧐', 'emotion_question'],
    ['😴🥱🛌💤', 'emotion_sleep'], ['🤢🤮🤒😷🤧', 'emotion_sick'], ['🤓', 'emotion_nerd'], ['😈', 'emotion_devil'],
    ['😇', 'emotion_angel'], ['👻', 'emotion_ghost'], ['💀☠', 'emotion_skull'], ['🥳🎉🎊', 'emotion_party'], ['🤡', 'emotion_clown'],
    ['👽', 'emotion_alien'], ['😐😑😶🫤', 'emotion_doubt'], ['🙄😏😒', 'emotion_snooty'], ['😅😓😮‍💨', 'emotion_whew'],
    ['🤪🤯😵', 'emotion_crazy'], ['😕😖😣', 'emotion_confuse'], ['🤤', 'emotion_hungry'], ['🤐🤫', 'emotion_silent'],
    ['😊', 'emotion_smile'], ['👋', 'emotion_bye_bye'], ['😬', 'emotion_shame'],
    ['❤♥💗💖💕💞💓💘💝💟🧡💛💚💙💜🖤🤍🤎🩷🩵🩶❣😽', 'heart'], ['💔', 'heart_break'],
    ['👍👌🤟🤘✌🙌👏💪', 'thumb_up'], ['👎', 'thumb_down'], ['⭐🌟✨💫', 'award_star_gold_1'], ['🎵🎶🎧🎤🎸', 'music'],
    ['🌸🌹🌺🌻🌷💐🌼', 'flower'], ['🥀', 'emotion_flower_dead'], ['🎂🍰🧁', 'cake'], ['🎁', 'gift_add'], ['☀🌞', 'weather_sun'],
    ['🌙🌛🌜🌚', 'half_moon'], ['🌈', 'rainbow'], ['🐱🐈😺😸😼', 'cat'], ['🐶🐕', 'dog'], ['🍕', 'pizza'], ['💰💸💵🤑', 'money'],
    ['⚡', 'lightning'], ['☂☔', 'umbrella'], ['☕🍵', 'tea_cup'], ['🍺🍻', 'beer'], ['🍹🍸🥤🧃', 'drink'], ['📷📸', 'camera'],
    ['📞☎', 'telephone'], ['📱', 'iphone'], ['🚗', 'car'], ['✈', 'plane'], ['🐌', 'snail'], ['🐞', 'ladybird'], ['🦋', 'butterfly'],
    ['🍦🍨', 'icecream'], ['💡', 'lightbulb'], ['⏰🕐⌚', 'clock'], ['💻🖥', 'computer'], ['🏠🏡', 'house'],
];
const ICONE_DO_EMOJI = new Map(EMOJIS_ANTIGOS.flatMap(([lista, nome]) => [...lista].map(ch => [ch, nome])));
// pega o emoji inteiro (com cor de pele, juncoes etc)
const REGEX_EMOJI = /(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}|[\u{1F3FB}-\u{1F3FF}])*)/u;

function semEmoji(parte) {
    return parte.split(REGEX_EMOJI).map((pedaco, i) => {
        if (i % 2 === 0) return esc(pedaco.replace(/[️‍]/g, ''));
        const primeiro = [...pedaco][0];
        const nome = ICONE_DO_EMOJI.get(primeiro);
        if (nome) return `<img class="ico emoticon" src="${urlIcone(nome)}" alt="" width="16" height="16">`;
        // simbolo comum (© ‼ ▶...) fica como letra; emoji moderno sem parecido some
        return primeiro.codePointAt(0) < 0x10000 ? esc(primeiro) + '︎' : '';
    }).join('');
}

// escapa o texto e troca os emoticons por imagem
function textoRico(texto) {
    return String(texto).split(REGEX_EMOTICONS)
        .map((parte, i) => (i % 2 ? imagemEmoticon(parte) : semEmoji(parte)))
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

function avatar(nome, classe = '', boneco = numeroBoneco(nome)) {
    const cadastrado = amigoPeloNome(nome);
    const foto = cadastrado && imagemSegura(cadastrado.foto);
    if (foto) return `<img class="avatar foto-amigo ${classe}" src="${esc(foto)}" alt="" title="${esc(cadastrado.nome)} é amigo do ${esc(DADOS.nome)}">`;
    const amigo = DADOS.amigos.find(a => a.nome === nome);
    if (amigo?.icone) return `<img class="avatar com-icone ${classe}" src="${urlIcone(amigo.icone, 32)}" alt="">`;
    return `<img class="avatar boneco-msn ${classe}" src="imagens/msn/msn${boneco}.png" alt="">`;
}

// quem nao tem foto ganha um bonequinho do msn (cada nome tem o seu, de 1 a 20)
// "evitar" e o boneco do recado de cima, pra nao ficar dois iguais seguidos
function numeroBoneco(nome, evitar = 0) {
    let soma = 0;
    for (const letra of semAcento(String(nome || '').trim())) soma = (soma * 31 + letra.charCodeAt(0)) % 9973;
    const n = soma % 20 + 1;
    return n === evitar ? n % 20 + 1 : n;
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


// --- datas de lancamento: cada novidade so aparece no site a partir do dia dela (e fica pra sempre) ---
// pra ver tudo antes da hora: entrar logado como dono ou abrir o site com ?previa no endereco
const LANCAMENTOS = {
    tv: [2026, 10, 23], minado: [2026, 10, 23],
    fazenda: [2026, 11, 20],
    celular: [2026, 12, 2], jujuba: [2026, 12, 2], calculadora: [2026, 12, 2],
};
const PREVIA = new URLSearchParams(location.search).has('previa');
const RECURSO_DA_JANELA = { fazenda: 'fazenda', minado: 'minado', calculadora: 'calculadora' };

function liberado(recurso) {
    const data = LANCAMENTOS[recurso];
    if (!data || PREVIA || souDono) return true;
    const [ano, mes, dia] = data;
    return new Date() >= new Date(ano, mes - 1, dia);
}

// mostra ou esconde tudo que tem data (roda ao abrir e de minuto em minuto, pra virar a meia-noite sozinho)
function aplicarLancamentos() {
    $$('[data-recurso]').forEach(el => {
        el.hidden = !liberado(el.dataset.recurso) || (el.classList.contains('so-toque') && !celularPossivel());
    });
    // a jujuba chega no dia dela mesmo com o site aberto
    if (liberado('jujuba') && !assistente.iniciado && !assistente.tentou) {
        assistente.tentou = true;
        iniciarAssistente();
    }
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
    aplicarLancamentos();
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
    if (chave === 'secreto') DADOS.secreto = valor;
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

function blocoRecado(r, comBotao, nomeLista = 'recados', boneco) {
    return `
        <div class="recado">
            ${avatar(r.autor, '', boneco)}
            <div class="corpo">
                <b>${esc(r.autor)}${amigoPeloNome(r.autor) ? ` ${icone('heart')}` : ''}:</b> ${formatar(r.texto)}
                <div class="meta"><span>${esc(r.data)}</span>${comBotao && podeApagar() ? `<button class="btn-x" data-apagar="${r.id}" data-lista="${nomeLista}">apagar</button>` : ''}</div>
            </div>
        </div>`;
}

// lista de recados ou depoimentos, sem repetir o mesmo bonequinho em dois seguidos
function listaRecados(itens, comBotao, nomeLista) {
    let anterior = 0;
    return itens.map(r => {
        anterior = numeroBoneco(r.autor, anterior);
        return blocoRecado(r, comBotao, nomeLista, anterior);
    }).join('');
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
                    <div class="previa-recados">${listaRecados(ultimos, false) || mensagemVazia(recados, 'nenhum recado ainda')}</div>
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
                ? listaRecados(depoimentos.todos().slice(0, 2), false) || mensagemVazia(depoimentos, 'ninguém escreveu ainda')
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
            <div style="margin-top:10px">${listaRecados(itens, true) || mensagemVazia(recados, 'nenhum recado ainda')}</div>
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
                ? `<div style="margin-top:10px">${listaRecados(itens, true, 'depoimentos') || mensagemVazia(depoimentos, 'nenhum depoimento ainda')}</div>`
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

// --- sessao da tv: uma tv antiga passando desenho e filme do youtube, arrasta pro lado pra mudar de canal ---

// cada canal: nome, videos do youtube e a duracao do primeiro (pra parecer que ta passando ao vivo)
const CANAIS_TV = [
    { nome: 'Nilba e os Desastronautas', tipo: 'desenho', segundos: 1491, videos: ['nKRqOBfMZOw', 'iVhto8dfLW4', 'EN6vqgtDk_M', 'LLIaNa1_zTw', 'GyIn9nhOlgc', 'gFXqyh3PkyM', 'DXSgLzIEz6Y', 'NXCOBnvKHiU'] },
    { nome: 'Castelo Rá-Tim-Bum', tipo: 'série', segundos: 3287, videos: ['lJEAhhRsRIM'] },
    { nome: 'Mundo da Lua', tipo: 'série', segundos: 3609, videos: ['ZZOFYw-fvmE'] },
    { nome: 'Pica-Pau', tipo: 'desenho', segundos: 9212, videos: ['LVE17tSApHI', 'mgA7d1gtFQ4'] },
    { nome: 'A Pantera Cor-de-Rosa', tipo: 'desenho', segundos: 19613, videos: ['OMbY_OHYrf0', 'kEycsvvyv6I'] },
    { nome: 'Turma da Mônica', tipo: 'desenho', segundos: 2660, videos: ['7rDZg6_7sWY', 'oGFeypkYpu0'] },
    { nome: 'Popeye', tipo: 'desenho', segundos: 13346, videos: ['YvM9myyWGRw'] },
    { nome: 'Betty Boop', tipo: 'desenho', segundos: 9160, videos: ['gaWN1tVZdqw', 'JOQhlCaT40s'] },
    { nome: 'Superman (1941)', tipo: 'desenho', segundos: 7258, videos: ['u92t2pNOoqM'] },
    { nome: 'Gasparzinho (1945)', tipo: 'desenho', segundos: 536, videos: ['rpKNy9a2IHA', '1gwchhoPW1s'] },
    { nome: 'Charlie Chaplin', tipo: 'filme', segundos: 1539, videos: ['tXNTVJ_YZn0', '4-rOPwnHjLQ'] },
    { nome: 'Cavalo de Fogo', tipo: 'desenho', segundos: 18134, videos: ['rfz1YpPsQa0', 'DHfypI5gO0w', 'tVSo4KTXM0I', 'Qq-xwVO1Lh8', 'Gix8Xt6U6Dg', 'jl5JjDxxO2o', 'ewTYQqFI9is'] },
    { nome: 'Filmes da Barbie', tipo: 'filme', segundos: 4803, videos: ['-eCEAeDGDTg', 'lBpitQv-kTI', 'dbJDXswQYBM', 'x27iPHXvJk0', 'P2eo828nhlw', 'Xwr5_gKDxMU'] },
    { nome: 'Moranguinho (anos 80)', tipo: 'desenho', segundos: 2758, videos: ['2GaNHPudtAA', '3-cf3jkfq9E', 'iy5aMov-1rw', 'SRD9OUx2d0c'] },
    { nome: 'Moranguinho em Tutti Frutti', tipo: 'desenho', segundos: 1338, videos: ['3ohZ3E5fiII', 'GXiHxMfuzZw', 'pAZ2-aMbmmA', 'YM5PrmGo4Hs', '-eVKBAgOFzs', 'Ikr-Ep3UVjE', 'fKAv2_ETGB4', 'iPkkfsNRISI', 'grSoi8i3v_Q', 'bxafz6njMbs', 'cnPE_ESEd5g', 'hWKa4HSsf2A', 'Q-6_uXX3KZM', '2ujp54G4OW4', '8UQDTO4j_3A', 'e9ZS7v9wBFQ', 'znGCyJgZKu8', 'cpofcMwFt_Y', 'RXb-dloLVcs', 'IvoIKvGOeuE', 'OnamQo70dnU', 'zfahZpGMNe0', 'GPgU9lfBfXU', 'a2Hrami9Lag', 'AAfgyJwMtt0'] },
    { nome: 'Zica e os Camaleões', tipo: 'desenho', segundos: 676, videos: ['0DV053nX0a8', 'pcmnjDdydsk', 't5nQ0O4_qjE', 'GMPX2wPNzzM'] },
    { nome: 'Scooby-Doo', tipo: 'desenho', segundos: 3627, videos: ['iAXCN57j7NY', 'pvwh5YwmxEE', 'J1Fsfq57wdM', 'ZydHnUTqArQ', 'he0Y7tvFNTM', '3zyNEt6uH6I', 'C-upU-cb8CY'] },
    { nome: 'Irmão do Jorel', tipo: 'desenho', segundos: 3608, videos: ['1kDGtRuPGx4', 'Iywamsi11tQ', 'RPf8cYrA9wQ', '2i2xfBEmYZc'] },
    { nome: 'Historietas Assombradas', tipo: 'desenho', segundos: 715, videos: ['9HGK9Q7Aq6M', 'ljvKUIpNhAU', 'cSqhb1ER3J8', 'hRiYYNZq-u0', '8uMwKygw4RA'] },
    { nome: 'Oswaldo', tipo: 'desenho', segundos: 9129, videos: ['l5mZ6itKZoQ', 'HHS0ADKeS48', 'EJBLgaJwDcE'] },
    { nome: 'Sítio do Picapau Amarelo', tipo: 'desenho', segundos: 629, videos: ['lx9vXwDSoeE', 'svrLBdxEacU', 'PucpR2VtCCc', 'mQj_PiJe-ns'] },
    { nome: 'Os Backyardigans', tipo: 'desenho', segundos: 4276, videos: ['ykFDE0MHG38', 'ojO2QcVPUfU', 'oH_ZYUHvB2c', 'M_Jewy187NQ', 'vXUj3hCnpu0', '5QCLDrlt-ig', 'fhwpqyneBo0'] },
    { nome: 'Pingu', tipo: 'desenho', segundos: 2838, videos: ['vmsA4Usj8H4', 'Y0bOPRSi-9A', '8ZVaE1v1PEE', 'XnObkBRKoMs', '4bNgsSwXWVs'] },
    { nome: 'Bakugan', tipo: 'desenho', segundos: 1417, videos: ['95uVEgpnYfY', '0GhsAZMQtUk', 'UgFI2yBWyi8', '56S_Ei_AQEA', '8uYcrQ_CeUU', 'ASg5GPIuLqI', 'U8ZzXyvOWvQ', '2wLcdKyAkew', 'lX8TdVBOI8g', 'AdjzXHoijg0', '4_GTtNnqKXc', '-5YCRNREA78', 'E9Q2DNx2qDs', 'H2T0ohPtEhk'] },
    { nome: 'Mecanimais', tipo: 'desenho', segundos: 4092, videos: ['tigjnO2KnKg', 'kN_Eh7UL-_E', '6OfOfl3n9D0', '_lfp-7gSNf8', 'eujPax9g7lI', 'EYkX7XtoWdE'] },
    { nome: 'Os Flintstones', tipo: 'desenho', segundos: 1903, videos: ['GM0Yumrt2Go', 'Qs4KDer6oME', 'qy4QW5AjLgM', 'pgkLdRxM7W0'] },
    { nome: 'Detetives do Prédio Azul (1ª temporada, 2012)', tipo: 'série', segundos: 777, videos: ['Kc_vqdo-bzo', '9_zLpvK0tGY', 'Tu5gcvQyRW0', 'PaH0zTyPmjA', '-JXtIPS5iWE', 'LBrERf5cqkA', 'pgvK7SrwOG4', 'sDVpNE9JrPM', 'HxidbsO0vNM', '-3bmoEsUPf8'] },
    { nome: 'Chume Labs', tipo: 'série', segundos: 1605, videos: ['q9TuttD6oPk', 'iMVAmeote1Y', 'iBpIDMrm1M4', 'POYLzaekBaQ', '0gEf-sNCJSU', '2FWgYKRg58o', 'ok0vG0IZrOA', 'GUEIPmoSbuA', 'sPdVf9UEI2A', 'ceEkAZN2TT8', '9V2Bk8A9iu4', '95x8NP7K32I', 'eRn3HVQxVT0', 'BPyHPK17ehI', 'LURJ_n-KsXI', 'mV5GhTzBzBc', 'DZH22Cb7QTc', 'AD3EjHYGmcU', '869Za72AhTM'] },
];

// no dia do halloween entram uns canais so de filme de terror (no comeco da lista)
const CANAIS_HALLOWEEN = [
    { nome: 'Halloween: A Noite do Terror (1978)', tipo: 'terror', segundos: 5374, videos: ['lsFxNlHLfHs', 'fr3taQAKwsY', 'fA7_sPVQHfI'] },
    { nome: 'Dango Balango (especial de Halloween)', tipo: 'série', segundos: 1321, videos: ['lkkCG1tf8Mc', '8SOPnjiERPA', '0hnksk3Qi6Q', '7TBu2YsOzDw', 'AXYZ_BHOOrg'] },
    { nome: 'Reflexões de um Liquidificador', tipo: 'terror', segundos: 4823, videos: ['a0rfrVVfnPs'] },
    { nome: 'À Meia-Noite Levarei Sua Alma (Zé do Caixão)', tipo: 'terror', segundos: 4916, videos: ['e2ZWcBaXOco'] },
    { nome: 'A Noite dos Mortos-Vivos (1968)', tipo: 'terror', segundos: 5762, videos: ['py4UDrciwkA'] },
    { nome: 'Nosferatu (1922)', tipo: 'terror', segundos: 5515, videos: ['tQeSA_Tt4YM'] },
    { nome: 'A Casa dos Maus Espíritos (1959)', tipo: 'terror', segundos: 4495, videos: ['i6URXIDs1wg'] },
    { nome: 'Carnaval das Almas (1962)', tipo: 'terror', segundos: 4985, videos: ['zkiRxjjXCh8'] },
    { nome: 'A Pequena Loja dos Horrores (1960)', tipo: 'terror', segundos: 4310, videos: ['YXHbey_6Xsc'] },
];

function canaisTV() {
    return datasAgora.tema === 'halloween' ? [...CANAIS_HALLOWEEN, ...CANAIS_TV] : CANAIS_TV;
}

const tv = { canal: guardar.ler('tv-canal', 0), som: false, timerChiado: null, timerNumero: null, chiado: null, arrasto: null };

function paginaTV() {
    return `
        <div class="caixa caixa-tv">
            <div class="caixa-titulo"><h2>Sessão da TV <small>(desenhos, séries e filmes passando direto)</small></h2><a class="mini-link" href="#inicio">« voltar pro quarto</a></div>
            <div class="sala-tv">
                <div class="palco-tv" id="palco-tv">
                    <div class="aparelho-tv">
                    <div class="tela-tv" id="tela-tv">
                        <canvas class="chiado-tv" id="chiado-tv" width="160" height="120"></canvas>
                        <span class="numero-canal" id="numero-canal"></span>
                        <button class="sair-tela-cheia" data-sair-tela-cheia type="button">✕ sair da tela cheia</button>
                    </div>
                    <img class="moldura-tv" src="imagens/tv/tv.png" alt="">
                    <button class="botao-ch cima" data-canal-tv="1" title="Próximo canal" aria-label="Próximo canal"></button>
                    <button class="botao-ch baixo" data-canal-tv="-1" title="Canal anterior" aria-label="Canal anterior"></button>
                    </div>
                    <img class="escrivaninha-tv" src="imagens/tv/escrivaninha.png" alt="">
                </div>
            </div>
            <div class="controle-tv">
                <button class="btn" data-canal-tv="-1">« canal</button>
                <span id="nome-canal-tv"></span>
                <button class="btn" data-canal-tv="1">canal »</button>
                <button class="btn" data-som-tv>ligar o som</button>
                <button class="btn" data-tela-cheia-tv>tela cheia</button>
            </div>
            <p class="dica centro">arraste pro lado em cima da TV (ou use as setinhas do teclado) pra mudar de canal</p>
            <div class="grade-programacao">
                <b>Programação</b>
                ${canaisTV().map((c, i) => `<button data-ir-canal="${i}"><span>CH ${String(i + 2).padStart(2, '0')}</span> ${esc(c.nome)} <small>${c.tipo}</small></button>`).join('')}
            </div>
        </div>`;
}

// endereco do video, comecando "no meio" como se o canal estivesse no ar desde sempre
function enderecoCanal(canal) {
    const c = canaisTV()[canal];
    const inicio = Math.floor(Date.now() / 1000) % c.segundos;
    const fila = [...c.videos.slice(1), c.videos[0]].join(',');
    const parametros = new URLSearchParams({
        autoplay: 1, mute: tv.som ? 0 : 1, start: inicio, playlist: fila, loop: 1, rel: 0, modestbranding: 1, playsinline: 1, enablejsapi: 1, iv_load_policy: 3, cc_load_policy: 0,
    });
    return `https://www.youtube-nocookie.com/embed/${c.videos[0]}?${parametros}`;
}

function comandoTV(func, args = []) {
    $('#tela-tv iframe')?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
}

function sintonizar(canal) {
    const total = canaisTV().length;
    tv.canal = ((canal % total) + total) % total;
    guardar.salvar('tv-canal', tv.canal);
    const tela = $('#tela-tv');
    if (!tela) return;
    tela.querySelector('iframe')?.remove();
    const frame = document.createElement('iframe');
    frame.title = canaisTV()[tv.canal].nome;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.src = enderecoCanal(tv.canal);
    // se o som ja tava ligado, liga de novo quando o video carregar
    frame.addEventListener('load', () => { if (tv.som) setTimeout(() => { comandoTV('unMute'); comandoTV('setVolume', [80]); }, 800); });
    tela.prepend(frame);
    // chiado de tv mudando de canal
    mostrarChiado(650);
    const numero = $('#numero-canal');
    numero.textContent = `CH ${String(tv.canal + 2).padStart(2, '0')}`;
    numero.classList.add('aparece');
    clearTimeout(tv.timerNumero);
    tv.timerNumero = setTimeout(() => numero.classList.remove('aparece'), 2500);
    $('#nome-canal-tv').textContent = canaisTV()[tv.canal].nome;
    $$('[data-ir-canal]').forEach(b => b.classList.toggle('ativo', Number(b.dataset.irCanal) === tv.canal));
}

// chiadinho preto e branco (desenhado bem pequeno e esticado)
function mostrarChiado(ms) {
    const canvas = $('#chiado-tv');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(canvas.width, canvas.height);
    canvas.classList.add('ligado');
    cancelAnimationFrame(tv.chiado);
    const fim = performance.now() + ms;
    const quadro = agora => {
        for (let i = 0; i < img.data.length; i += 4) {
            const v = Math.random() * 255;
            img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
            img.data[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
        if (agora < fim) tv.chiado = requestAnimationFrame(quadro);
        else canvas.classList.remove('ligado');
    };
    tv.chiado = requestAnimationFrame(quadro);
}

function ligarTV() {
    // no halloween a tv ja liga no primeiro filme de terror
    if (datasAgora.tema === 'halloween' && canaisTV()[tv.canal]?.tipo !== 'terror') tv.canal = 0;
    sintonizar(tv.canal);
    $('[data-som-tv]').textContent = tv.som ? 'desligar o som' : 'ligar o som';
    const palco = $('#palco-tv');
    // arrastar pro lado em cima da tv muda de canal (o video em si fica clicavel)
    palco.addEventListener('pointerdown', e => { tv.arrasto = { x: e.clientX, y: e.clientY }; });
    palco.addEventListener('pointerup', e => {
        if (!tv.arrasto) return;
        const dx = e.clientX - tv.arrasto.x;
        const dy = e.clientY - tv.arrasto.y;
        tv.arrasto = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) sintonizar(tv.canal + (dx < 0 ? 1 : -1));
    });
    palco.addEventListener('pointercancel', () => { tv.arrasto = null; });
}

function desligarTV() {
    cancelAnimationFrame(tv.chiado);
}

// tela cheia: so a telinha da tv ocupa a tela toda (no iphone, que nao deixa, vira uma tela cheia "de mentira")
function telaCheiaTV(ligar) {
    const tela = $('#tela-tv');
    if (!tela) return;
    if (!ligar) {
        if (document.fullscreenElement) document.exitFullscreen?.();
        tela.classList.remove('tela-cheia-falsa');
        document.body.classList.remove('tv-tela-cheia');
        return;
    }
    if (!tela.requestFullscreen) return telaCheiaFalsa(tela);
    tela.requestFullscreen().catch(() => telaCheiaFalsa(tela));
    // tem navegador (de dentro de app, por exemplo) que nunca responde: ai usa a tela cheia de mentira
    setTimeout(() => { if (!document.fullscreenElement) telaCheiaFalsa(tela); }, 1000);
}

// no celular a tela cheia deita o video, igual no app do youtube
document.addEventListener('fullscreenchange', () => {
    const el = document.fullscreenElement;
    const daTV = el && (el.id === 'tela-tv' || el.closest?.('#tela-tv'));
    if (!matchMedia('(pointer: coarse)').matches || !screen.orientation) return;
    if (daTV) screen.orientation.lock?.('landscape').catch(() => {});
    else screen.orientation.unlock?.();
});

// a barra de tarefas e as outras janelas somem enquanto a tv ta em tela cheia
function telaCheiaFalsa(tela) {
    tela.classList.add('tela-cheia-falsa');
    document.body.classList.add('tv-tela-cheia');
}

function ligarSomTV() {
    tv.som = !tv.som;
    comandoTV(tv.som ? 'unMute' : 'mute');
    if (tv.som) comandoTV('setVolume', [80]);
    $('[data-som-tv]').textContent = tv.som ? 'desligar o som' : 'ligar o som';
}

// setinhas do teclado mudam de canal quando ta na pagina da tv
document.addEventListener('keydown', e => {
    if (rotaAtual().nome !== 'tv' || e.target.closest?.('input, textarea, select')) return;
    if (e.key === 'ArrowRight') sintonizar(tv.canal + 1);
    if (e.key === 'ArrowLeft') sintonizar(tv.canal - 1);
});
document.addEventListener('click', e => {
    const b = e.target.closest?.('[data-canal-tv], [data-ir-canal], [data-som-tv], [data-tela-cheia-tv], [data-sair-tela-cheia]');
    if (!b) return;
    if ('telaCheiaTv' in b.dataset) return telaCheiaTV(true);
    if ('sairTelaCheia' in b.dataset) return telaCheiaTV(false);
    if (b.dataset.canalTv) sintonizar(tv.canal + Number(b.dataset.canalTv));
    else if (b.dataset.irCanal) sintonizar(Number(b.dataset.irCanal));
    else ligarSomTV();
});


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

// --- foto aberta: aparece na telinha de uma camera digital antiga ---

// tamanho de cada imagem de camera e onde fica a telinha [x, y, largura, altura]
const CAMERAS_FOTO = {
    deitada: {
        'nikon-vermelha': { w: 568, h: 348, tela: [41, 65, 345, 252] },
        'canon-prata': { w: 620, h: 410, tela: [38, 127, 302, 230] },
        'sony-prata': { w: 622, h: 389, tela: [52, 56, 385, 299] },
        'nikon-dourada': { w: 395, h: 244, tela: [29, 50, 225, 171] },
        'sony-rosa': { w: 404, h: 265, tela: [32, 58, 239, 178] },
    },
    empe: {
        'sony-azul': { w: 623, h: 1046, tela: [53, 77, 505, 672] },
        'azul-em-pe': { w: 236, h: 371, tela: [38, 31, 165, 219] },
        'verde-em-pe': { w: 245, h: 362, tela: [36, 16, 143, 188] },
        'vermelha-em-pe': { w: 225, h: 373, tela: [17, 24, 168, 230] },
    },
};

// foto em pe vai pra uma camera em pe, o resto pra uma deitada (cada foto sempre na mesma camera)
function vestirCamera(caixa, n) {
    const img = caixa.querySelector('.foto-real');
    const proporcao = img?.naturalWidth ? img.naturalWidth / img.naturalHeight : 1;
    const grupo = CAMERAS_FOTO[proporcao < 0.87 ? 'empe' : 'deitada'];
    const nomes = Object.keys(grupo);
    const nome = nomes[n % nomes.length];
    const { w, h, tela } = grupo[nome];
    // o maior tamanho que cabe (deixa espaco pras setinhas no computador e nao estica demais pra nao borrar)
    const sobra = window.innerWidth > 560 ? window.innerWidth - 130 : window.innerWidth * 0.94;
    const largura = Math.min(sobra, (window.innerHeight * 0.72) * w / h, w * 1.7);
    caixa.style.width = Math.round(largura) + 'px';
    caixa.style.aspectRatio = `${w} / ${h}`;
    // a foto passa 2px por baixo da moldura pra nao sobrar fresta
    const [x, y, tw, th] = [tela[0] - 2, tela[1] - 2, tela[2] + 4, tela[3] + 4];
    Object.assign(caixa.querySelector('.tela-camera').style, {
        left: `${x / w * 100}%`, top: `${y / h * 100}%`, width: `${tw / w * 100}%`, height: `${th / h * 100}%`,
    });
    caixa.querySelector('.moldura-camera').src = `imagens/cameras/${nome}.webp`;
    caixa.classList.add('pronta');
}


// --- zoom da foto aberta (rodinha, arrastar, pinca no celular) ---

const zoomFoto = { escala: 1, x: 0, y: 0, dedos: new Map(), distancia: 0 };

function abrirZoom() {
    const foto = lightbox.fotos[lightbox.indice];
    if (!foto?.src) return;
    $('#zoom-foto img').src = foto.src;
    zoomFoto.escala = 1; zoomFoto.x = 0; zoomFoto.y = 0;
    desenharZoomFoto();
    $('#zoom-foto').hidden = false;
}

function fecharZoom() {
    $('#zoom-foto').hidden = true;
    zoomFoto.dedos.clear();
}

function desenharZoomFoto() {
    $('#zoom-foto img').style.transform = `translate(${zoomFoto.x}px, ${zoomFoto.y}px) scale(${zoomFoto.escala})`;
    $('#zoom-nivel').textContent = Math.round(zoomFoto.escala * 100) + '%';
    $('#zoom-foto').classList.toggle('ampliada', zoomFoto.escala > 1);
}

// aumenta ou diminui mantendo parado o ponto que ta embaixo do mouse/dedo
function mudarZoomFoto(fator, cx = window.innerWidth / 2, cy = window.innerHeight / 2) {
    const nova = Math.min(8, Math.max(1, zoomFoto.escala * fator));
    const px = cx - window.innerWidth / 2 - zoomFoto.x;
    const py = cy - window.innerHeight / 2 - zoomFoto.y;
    zoomFoto.x -= px * (nova / zoomFoto.escala - 1);
    zoomFoto.y -= py * (nova / zoomFoto.escala - 1);
    zoomFoto.escala = nova;
    if (nova === 1) { zoomFoto.x = 0; zoomFoto.y = 0; }
    desenharZoomFoto();
}

(() => {
    const camada = $('#zoom-foto');
    camada.addEventListener('click', e => {
        const botao = e.target.closest('[data-zoom]');
        if (!botao) return;
        const acao = botao.dataset.zoom;
        if (acao === 'mais') mudarZoomFoto(1.5);
        if (acao === 'menos') mudarZoomFoto(1 / 1.5);
        if (acao === 'normal') mudarZoomFoto(1 / zoomFoto.escala);
        if (acao === 'sair') fecharZoom();
    });
    camada.addEventListener('wheel', e => {
        e.preventDefault();
        mudarZoomFoto(e.deltaY < 0 ? 1.2 : 1 / 1.2, e.clientX, e.clientY);
    }, { passive: false });
    camada.addEventListener('dblclick', e => {
        if (e.target.closest('.barra-zoom')) return;
        mudarZoomFoto(zoomFoto.escala > 1 ? 1 / zoomFoto.escala : 2.5, e.clientX, e.clientY);
    });
    camada.addEventListener('pointerdown', e => {
        if (e.target.closest('.barra-zoom')) return;
        zoomFoto.dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
        camada.setPointerCapture(e.pointerId);
    });
    camada.addEventListener('pointermove', e => {
        const antes = zoomFoto.dedos.get(e.pointerId);
        if (!antes) return;
        const agora = { x: e.clientX, y: e.clientY };
        if (zoomFoto.dedos.size === 1) {
            // arrastar pra andar pela foto
            if (zoomFoto.escala > 1) {
                zoomFoto.x += agora.x - antes.x;
                zoomFoto.y += agora.y - antes.y;
                desenharZoomFoto();
            }
        } else if (zoomFoto.dedos.size === 2) {
            // pinca com dois dedos
            const [a, b] = [...zoomFoto.dedos.values()];
            const outro = a === antes ? b : a;
            const dAntes = Math.hypot(antes.x - outro.x, antes.y - outro.y);
            const dAgora = Math.hypot(agora.x - outro.x, agora.y - outro.y);
            if (dAntes > 0) mudarZoomFoto(dAgora / dAntes, (agora.x + outro.x) / 2, (agora.y + outro.y) / 2);
        }
        zoomFoto.dedos.set(e.pointerId, agora);
    });
    const soltar = e => zoomFoto.dedos.delete(e.pointerId);
    camada.addEventListener('pointerup', soltar);
    camada.addEventListener('pointercancel', soltar);
})();

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
                            <td><button class="btn pequeno" data-tocar="${i}">▶︎ tocar</button></td>
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
        ...Object.entries(PAGINAS).filter(([id, p]) => p.titulo && !p.escondida && (id !== 'tv' || liberado('tv')))
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

// moldura dourada de museu em volta da pintura (acompanha o formato da imagem)
function molduraMuseu(conteudo, classe = '') {
    return `<span class="moldura-museu ${classe}">${conteudo}<i class="orn o1"></i><i class="orn o2"></i><i class="orn o3"></i><i class="orn o4"></i><i class="crista"></i><i class="crista baixo"></i></span>`;
}

// desenhos que aprovei
function desenhosPublicos() {
    return desenhos.todos().filter(d => d.publico);
}

function desenhosHTML(modo = 'dono') {
    const lista = modo === 'mural' ? desenhosPublicos() : desenhos.todos();
    if (!lista.length) return mensagemVazia(desenhos, 'nenhum desenho recebido ainda');
    return `<div class="grade-desenhos">${lista.map((d, i) => `
        <figure class="desenho ${modo === 'dono' && d.publico ? 'aprovado' : ''}">
            <button class="ver-pintura" data-desenho-mural="${i}" data-de="${modo}" title="ver ${esc(d.titulo)} grande">
                ${molduraMuseu(`<img src="${esc(imagemSegura(d.imagem))}" alt="${esc(d.titulo)}" loading="lazy">`)}
            </button>
            <figcaption>
                <span class="plaquinha"><b>${esc(d.titulo)}</b><br>por ${esc(d.autor)} · ${esc(d.data)}</span>
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
    ['secreto', 'key', 'Área secreta'],
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
        enquete: adminEnquete, comunidades: adminComunidades, lixeira: adminLixeira, secreto: adminSecreto, recebidos: adminRecebidos, spotify: adminSpotify, winamp: adminWinamp,
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

// o que aparece na area secreta (a que abre com a senha na calculadora)
let edicaoSecreto = null;
const itensSecretos = () => DADOS.secreto || [];
function adminSecreto() {
    const lista = itensSecretos(), editando = lista[edicaoSecreto];
    return `
        <div class="caixa">
            <h2>Área secreta <small>(${lista.length} coisas)</small></h2>
            <p class="dica" style="margin-top:0">Aparece pra quem digitar a senha na Calculadora. Pode ser texto, foto, link ou tudo junto.</p>
            ${lista.map((a, i) => `
                <div class="recado"><div class="corpo">
                    ${icone(a.imagem ? 'photo_album' : a.link ? 'link' : 'note')} <b>${esc(a.titulo || '(sem título)')}</b>
                    ${a.texto ? `<p style="margin:4px 0;white-space:pre-wrap">${esc(a.texto.slice(0, 140))}${a.texto.length > 140 ? '...' : ''}</p>` : ''}
                    ${a.link ? `<span class="dica">${esc(a.link)}</span>` : ''}
                    <div class="meta">${i ? `<button class="btn-x" data-subir-secreto="${i}">subir</button> · ` : ''}<button class="btn-x" data-editar-secreto="${i}">editar</button> · <button class="btn-x" data-apagar-secreto="${i}">apagar</button></div>
                </div></div>`).join('') || '<p class="vazio">a área secreta ainda está vazia</p>'}
        </div>
        <div class="caixa">
            <h2>${editando ? 'Editar' : 'Colocar coisa na área secreta'}</h2>
            <form class="form" data-form="secreto">
                <input name="titulo" placeholder="título" maxlength="80" value="${esc(editando?.titulo || '')}">
                <textarea name="texto" rows="6" maxlength="5000" placeholder="texto (opcional)">${esc(editando?.texto || '')}</textarea>
                <input name="link" type="url" placeholder="link (opcional, https://...)" value="${esc(editando?.link || '')}">
                <label class="btn pequeno">${icone('picture_add')} ${editando?.imagem ? 'trocar a imagem' : 'imagem (opcional)'}
                    <input type="file" name="imagem" accept="image/*" class="so-leitor">
                    <span class="arquivo-escolhido"></span>
                </label>
                ${editando?.imagem ? '<label><input type="checkbox" name="semImagem"> tirar a imagem</label>' : ''}
                <div class="linha">
                    <button class="btn rosa" type="submit">${icone('disk')} ${editando ? 'salvar' : 'colocar na área secreta'}</button>
                    ${editando ? '<button class="btn" type="button" data-cancelar-secreto="1">cancelar</button>' : ''}
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
            <h2>Postar pintura no mural</h2>
            <p class="dica" style="margin-top:0">Manda a foto de uma pintura e ela entra no mural já com a moldura de museu, igual às outras.</p>
            <form class="form" data-form="pintura">
                <input name="titulo" placeholder="nome da pintura" maxlength="60" required>
                <input name="autor" placeholder="artista" maxlength="30" value="${esc(DADOS.nome)}" required>
                <label class="btn pequeno">${icone('picture_add')} escolher a imagem
                    <input type="file" name="imagem" accept="image/*" class="so-leitor" required>
                    <span class="arquivo-escolhido"></span>
                </label>
                <div class="linha"><button class="btn rosa" type="submit">${icone('palette')} pendurar no mural</button></div>
            </form>
        </div>
        <div class="caixa">
            <h2>Depoimentos <small>(${depoimentos.todos().length}) · só você lê</small></h2>
            ${listaRecados(depoimentos.todos(), true, 'depoimentos') || mensagemVazia(depoimentos, 'nenhum depoimento ainda')}
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
    tv: { titulo: 'Sessão da TV', render: paginaTV },
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
                ${itensSecretos().length ? '' : '<p class="piscar-cursor">em breve tem coisa aqui</p>'}
            </div>
        </div>
        ${itensSecretos().map(a => `
            <div class="caixa item-secreto">
                ${a.titulo ? `<h2>${esc(a.titulo)}</h2>` : ''}
                ${a.imagem ? `<a href="${esc(urlFotoPostada(a.imagem))}" target="_blank" rel="noopener"><img src="${esc(urlFotoPostada(a.imagem))}" alt="${esc(a.titulo || '')}"></a>` : ''}
                ${a.texto ? `<p>${esc(a.texto)}</p>` : ''}
                ${a.link ? `<p><a href="${esc(linkSeguro(a.link))}" target="_blank" rel="noopener">${icone('link')} ${esc(a.link)}</a></p>` : ''}
            </div>`).join('')}`;
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
    const pagina = nome === 'tv' && !liberado('tv') ? null : PAGINAS[nome];
    const central = $('#central');

    // no modo celular (menos no app internet) a pagina vira tela de aplicativo
    const nativo = cel.ativo && cel.app && !cel.app.completo && TELAS_CEL[nome];
    central.innerHTML = nativo ? TELAS_CEL[nome](arg) : pagina ? pagina.render(arg) : pagina404(DADOS.endereco + '#' + nome);
    document.body.classList.toggle('cel-nativo', !!nativo);

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
    // na sessao da tv a pagina inteira vira a sala (sem as colunas do lado)
    const naTV = nome === 'tv' && Boolean(pagina);
    document.body.classList.toggle('na-sala-tv', naTV);
    if (naTV) ligarTV();
    else desligarTV();
    assistenteViuPagina(nome);
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
    if (!cel.ativo && janela.getBoundingClientRect().top < 0) janela.scrollIntoView({ block: 'start' });
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
    if (!CELULAR_ESTREITO.matches || (cel.ativo && !cel.app?.completo)) return;
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
                    ${molduraMuseu(`<img src="${esc(imagemSegura(d.imagem))}" alt="${esc(d.titulo)}" loading="lazy">`, 'mini')}
                </button>`).join('')}</div>
               <a class="mini-link" href="#recados">ver o mural todo</a>`
            : `<p class="vazio">nenhum desenho aqui ainda...</p>`)
        + `<p style="margin:4px 0 0"><button class="btn pequeno" data-abrir="paint">${icone('palette')} desenhar</button></p>`;
}

function abrirDesenhoMural(i, de = 'mural') {
    const lista = de === 'dono' ? desenhos.todos() : desenhosPublicos();
    lightbox.fotos = lista.map(d => ({ src: imagemSegura(d.imagem), legenda: `${d.titulo} - por ${d.autor}`, pintura: true }));
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
    // no dia de tema a skin pega as cores da data (pelo css), sem girar a cor
    const tema = typeof datasAgora !== 'undefined' && datasAgora.tema;
    winamp.style.filter = giro && !tema ? `hue-rotate(${giro}deg)` : '';
    winamp.title = tema ? `winamp de ${TEMAS[tema].frase(new Date()).split(/[!.:]/)[0].toLowerCase()}` : `winamp de ${dia}: ${cor}`;
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
        console.warn('last.fm fora do ar:', erro.message);
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

// pintura vai pro banco como texto (jpeg); diminui ate caber no limite da tabela
async function pinturaEmTexto(arquivo) {
    if (!arquivo.type.startsWith('image/')) throw new Error('isso não é uma imagem');
    for (const maximo of [1400, 1100, 900, 700, 520]) {
        const { blob } = await prepararFoto(arquivo.type === 'image/gif' ? new File([arquivo], 'x.png', { type: 'image/png' }) : arquivo, maximo);
        const texto = await new Promise((pronto, falhou) => {
            const leitor = new FileReader();
            leitor.onload = () => pronto(leitor.result);
            leitor.onerror = falhou;
            leitor.readAsDataURL(blob);
        });
        if (texto.length <= 590000) return texto;
    }
    throw new Error('a imagem ficou pesada demais');
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
    if (foto.pintura) {
        // pintura abre grande na moldura de museu (sem camera)
        $('#lightbox-foto').innerHTML = `<div class="quadro-grande" title="clique pra dar zoom">${molduraMuseu(`<img class="pintura-grande" src="${esc(foto.src)}" alt="${esc(foto.legenda)}">`, 'grande')}</div>`;
        $('#lightbox-legenda').textContent = `${foto.legenda}  (${lightbox.indice + 1} de ${total}) · clique na pintura pra dar zoom`;
        return;
    }
    $('#lightbox-foto').innerHTML = `<div class="camera-foto"><div class="tela-camera" title="clique pra dar zoom">${fotoHTML(foto).replace(' loading="lazy"', '')}<i class="reflexo-tela"></i></div><img class="moldura-camera" alt=""></div>`;
    const caixa = $('#lightbox-foto .camera-foto');
    const img = caixa.querySelector('.foto-real');
    const n = lightbox.indice;
    if (!img || (img.complete && img.naturalWidth)) vestirCamera(caixa, n);
    else img.addEventListener('load', () => vestirCamera(caixa, n), { once: true });
    $('#lightbox-legenda').textContent = `${foto.legenda}  (${lightbox.indice + 1} de ${total})${foto.src ? ' · clique na foto pra dar zoom' : ''}`;
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
    if (RECURSO_DA_JANELA[id] && !liberado(RECURSO_DA_JANELA[id])) return;
    // no modo celular os programas abrem como aplicativo
    if (cel.ativo) {
        if (id === 'navegador') return abrirAppCel('internet');
        const app = APPS_CEL.find(a => a.janela === id);
        if (app && cel.app?.id !== app.id) return abrirAppCel(app.id);
    }
    const janela = document.getElementById(id);
    janela.hidden = false;
    janela.classList.remove('minimizada');
    focarJanela(janela);
    assistenteViuJanela(id);
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
    if (id === 'minado') iniciarMinado();
    if (id === 'fazenda') {
        // so carrega o jogo quando abre, pra musica nao tocar escondida
        const frame = $('#fazenda-frame');
        if (!frame.dataset.carregado) { frame.src = frame.dataset.src; frame.dataset.carregado = '1'; }
        if (celularEmPe()) janela.classList.add('maximizada');
    }
    if (id === 'navegador') janela.scrollIntoView({ block: 'nearest' });
    $('#menu-iniciar').hidden = true;
    ajustarDeitados();
    // no celular abre em cascata pra uma nao esconder a outra inteira
    if (janela.classList.contains('janela-app') && innerWidth <= 720) {
        const abertas = $$('.janela-app').filter(j => !j.hidden && j !== janela && !j.classList.contains('minimizada')).length;
        janela.style.top = (10 + abertas * 26) + 'px';
        janela.style.left = (5 + Math.min(abertas * 8, 40)) + 'px';
    }
    caberNaTela(janela);
}

// se a janela passar do fim da tela, puxa ela pra dentro
function caberNaTela(janela) {
    if (!janela.classList.contains('janela-app') || janela.classList.contains('maximizada')) return;
    const r = janela.getBoundingClientRect();
    if (r.bottom > innerHeight - 32) janela.style.top = Math.max(4, innerHeight - 32 - r.height) + 'px';
    if (r.right > innerWidth) janela.style.left = Math.max(4, innerWidth - r.width - 4) + 'px';
}

// celular ou tablet em pe: fazenda e paint ficam deitados (girados) quando a pessoa aperta o quadradinho de maximizar
// (a fazenda ja abre assim sozinha, porque o jogo e feito pra tela deitada)
const APPS_DEITADOS = ['fazenda', 'paint'];

function celularEmPe() {
    return window.matchMedia('(pointer: coarse)').matches && window.innerWidth <= 1100 && window.innerHeight > window.innerWidth;
}

function ajustarDeitados() {
    APPS_DEITADOS.forEach(id => {
        const janela = document.getElementById(id);
        if (!janela) return;
        const deitar = !janela.hidden && !janela.classList.contains('minimizada') && janela.classList.contains('maximizada') && celularEmPe();
        if (deitar === janela.classList.contains('deitado')) return;
        janela.classList.toggle('deitado', deitar);
        // o tamanho do desenho muda, entao o zoom do paint volta pro normal
        if (id === 'paint' && paint.iniciado) zoomPaint(1);
    });
    // sem internet: maximizar o navegador no celular em pe deixa o jogo do dino deitado
    const nav = $('#navegador');
    deitarDino(semInternet() && nav.classList.contains('maximizada') && !nav.classList.contains('minimizada') && celularEmPe());
}
window.addEventListener('resize', ajustarDeitados);

function acaoJanela(janela, acao) {
    if (acao === 'fechar') janela.hidden = true;
    if (acao === 'fechar' && janela.id === 'fazenda') {
        const frame = $('#fazenda-frame');
        frame.src = 'about:blank';
        delete frame.dataset.carregado;
    }
    if (acao === 'minimizar') janela.classList.add('minimizada');
    if (acao === 'maximizar') {
        janela.classList.toggle('maximizada');
        janela.style.translate = '';
        // voltando do maximizado, a janela nao pode ficar pra fora da tela
        caberNaTela(janela);
        // o tamanho do desenho muda, entao o zoom do paint volta pro normal
        if (janela.id === 'paint' && paint.iniciado) zoomPaint(1);
    }
    if (acao !== 'maximizar') {
        janela.classList.remove('ativa');
        if (janela.id === 'navegador') janela.classList.remove('maximizada');
    }
    celJanelaFechou(janela, acao);
    atualizarTarefas();
}

function atualizarTarefas() {
    if (cel.ativo) return ajustarDeitados();
    ajustarDeitados();
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
const paint = {
    iniciado: false, cor: '#000000', ferramenta: 'lapis', desenhando: false,
    pontos: [], inicio: null, foto: null, historico: [], refeitos: [], zoom: 1, larguraBase: 0, dedos: new Map(), arrastoMao: null,
};
const LIMITE_HISTORICO = 40;
const ZOOMS_PAINT = [1, 1.5, 2, 3, 4, 6, 8];
const FERRAMENTAS_DESENHO = ['lapis', 'pincel', 'borracha', 'spray', 'linha', 'retangulo', 'elipse'];

// iconezinhos das ferramentas novas (a lista de icones do site nao tem esses)
const DESENHOS_FERRAMENTA = {
    'conta-gotas': '<path d="M11 2l3 3-2 2-3-3z" fill="#555"/><path d="M9 4l3 3-6 6H3v-3z" fill="#9fd3ff" stroke="#333"/><path d="M3 13l-1 1" stroke="#333"/>',
    linha: '<path d="M3 13L13 3" stroke="#000" stroke-width="2"/>',
    retangulo: '<rect x="2.5" y="4.5" width="11" height="8" fill="none" stroke="#000"/>',
    elipse: '<ellipse cx="8" cy="8.5" rx="5.5" ry="4" fill="none" stroke="#000"/>',
    mao: '<path d="M5 14V8L3 6.5 4 5.5 6 7V3h1.5v4V2h1.5v5V3h1.5v4.5V5h1.5v6c0 2-1 3-3 3z" fill="#ffe0b8" stroke="#7a4a1e" stroke-width=".8"/>',
    desfazer: '<path d="M6 3L2 7l4 4V8h4c2 0 3 1 3 3v2c1-2 1-3 1-4 0-2.5-2-4-4-4H6z" fill="#2a6ad8" stroke="#123c8a" stroke-width=".6"/>',
    refazer: '<path d="M10 3l4 4-4 4V8H6c-2 0-3 1-3 3v2c-1-2-1-3-1-4 0-2.5 2-4 4-4h4z" fill="#2a6ad8" stroke="#123c8a" stroke-width=".6"/>',
    'zoom-mais': '<circle cx="6.5" cy="6.5" r="4.5" fill="#e8f4ff" stroke="#333"/><path d="M10 10l4 4" stroke="#333" stroke-width="2"/><path d="M4.5 6.5h4M6.5 4.5v4" stroke="#0a7a0a" stroke-width="1.4"/>',
    'zoom-menos': '<circle cx="6.5" cy="6.5" r="4.5" fill="#e8f4ff" stroke="#333"/><path d="M10 10l4 4" stroke="#333" stroke-width="2"/><path d="M4.5 6.5h4" stroke="#c01010" stroke-width="1.4"/>',
};

function ctxPaint() {
    return $('#paint-canvas').getContext('2d');
}

// --- desfazer / refazer ---
function guardarPassoPaint() {
    const canvas = $('#paint-canvas');
    paint.historico.push(ctxPaint().getImageData(0, 0, canvas.width, canvas.height));
    if (paint.historico.length > LIMITE_HISTORICO) paint.historico.shift();
    paint.refeitos = [];
    atualizarBotoesHistorico();
}

function desfazerPaint() {
    if (!paint.historico.length) return status('Nada pra desfazer');
    const canvas = $('#paint-canvas');
    paint.refeitos.push(ctxPaint().getImageData(0, 0, canvas.width, canvas.height));
    ctxPaint().putImageData(paint.historico.pop(), 0, 0);
    atualizarBotoesHistorico();
    salvarRascunhoPaint();
}

function refazerPaint() {
    if (!paint.refeitos.length) return status('Nada pra refazer');
    const canvas = $('#paint-canvas');
    paint.historico.push(ctxPaint().getImageData(0, 0, canvas.width, canvas.height));
    ctxPaint().putImageData(paint.refeitos.pop(), 0, 0);
    atualizarBotoesHistorico();
    salvarRascunhoPaint();
}

function atualizarBotoesHistorico() {
    $('[data-ferramenta="desfazer"]').disabled = !paint.historico.length;
    $('[data-ferramenta="refazer"]').disabled = !paint.refeitos.length;
}

// o desenho fica guardado no navegador (fechar a janela nao perde nada)
let timerRascunho = null;
function salvarRascunhoPaint() {
    clearTimeout(timerRascunho);
    timerRascunho = setTimeout(() => {
        try { guardar.salvar('paint-rascunho', $('#paint-canvas').toDataURL('image/png')); } catch { /* sem espaco, tudo bem */ }
    }, 600);
}

// --- zoom ---
// onde o dedo/mouse ta dentro de um elemento, de 0 a 1 (funciona com a janela deitada tambem)
function fracaoNoElemento(el, x, y) {
    const r = el.getBoundingClientRect();
    if (el.closest('.deitado')) return { fx: (y - r.top) / r.height, fy: (r.right - x) / r.width };
    return { fx: (x - r.left) / r.width, fy: (y - r.top) / r.height };
}

// zoom mantendo parado o ponto (fx, fy do desenho) que ta embaixo do mouse/dedo; sem ponto usa o meio da tela
function zoomPaint(novo, fx = null, fy = null) {
    const canvas = $('#paint-canvas');
    const tela = $('.paint-tela');
    if (paint.zoom === 1) {
        paint.larguraBase = canvas.offsetWidth;
        tela.style.height = tela.offsetHeight + 'px';
    }
    const z = Math.min(8, Math.max(1, novo));
    const w0 = canvas.offsetWidth;
    const h0 = canvas.offsetHeight;
    if (fx === null) {
        fx = (tela.scrollLeft + tela.clientWidth / 2 - canvas.offsetLeft) / w0;
        fy = (tela.scrollTop + tela.clientHeight / 2 - canvas.offsetTop) / h0;
    }
    // onde esse ponto aparece agora dentro da area visivel
    const vx = fx * w0 + canvas.offsetLeft - tela.scrollLeft;
    const vy = fy * h0 + canvas.offsetTop - tela.scrollTop;
    paint.zoom = z;
    if (z === 1) {
        canvas.style.width = '';
        canvas.style.height = '';
        tela.style.height = '';
    } else {
        canvas.style.width = Math.round(paint.larguraBase * z) + 'px';
        canvas.style.height = 'auto';
    }
    tela.scrollLeft = fx * canvas.offsetWidth + canvas.offsetLeft - vx;
    tela.scrollTop = fy * canvas.offsetHeight + canvas.offsetTop - vy;
    canvas.classList.toggle('pixelado', z >= 3);
    $('#paint-zoom').textContent = `zoom ${Math.round(z * 100)}%`;
    $('[data-ferramenta="zoom-menos"]').disabled = z === 1;
    $('[data-ferramenta="zoom-mais"]').disabled = z === 8;
}

function passoZoomPaint(direcao, fx = null, fy = null) {
    const i = ZOOMS_PAINT.findIndex(z => z >= paint.zoom - 0.01);
    const proximo = ZOOMS_PAINT[Math.min(ZOOMS_PAINT.length - 1, Math.max(0, i + direcao))];
    zoomPaint(proximo, fx, fy);
}

// --- desenho ---
function opacidadePaint() {
    return Number($('#paint-opacidade').value) / 100;
}

// no celular a barrinha de opacidade nao andava com o dedo: o proprio site calcula onde o dedo ta
// (com o paint deitado a barrinha fica em pe na tela, entao conta de cima pra baixo)
(() => {
    const barra = $('#paint-opacidade');
    const mostrar = () => { $('#paint-opacidade-valor').textContent = barra.value + '%'; };
    const mover = e => {
        const r = barra.getBoundingClientRect();
        const fracao = barra.closest('.deitado') ? (e.clientY - r.top) / r.height : (e.clientX - r.left) / r.width;
        const min = Number(barra.min), max = Number(barra.max), passo = Number(barra.step) || 1;
        barra.value = Math.round((min + Math.min(1, Math.max(0, fracao)) * (max - min)) / passo) * passo;
        mostrar();
    };
    barra.addEventListener('pointerdown', e => {
        e.preventDefault();
        try { barra.setPointerCapture(e.pointerId); } catch { /* alguns navegadores nao deixam */ }
        mover(e);
    });
    barra.addEventListener('pointermove', e => { if (barra.hasPointerCapture?.(e.pointerId)) mover(e); });
    barra.addEventListener('input', mostrar);
})();

function espelhar(p) {
    return { x: $('#paint-canvas').width - p.x, y: p.y };
}

// traco livre (lapis, pincel, borracha) redesenhado inteiro a cada movimento: fica liso e a transparencia nao mancha
function tracarLivre(ctx, pontos) {
    const tamanho = Number($('#paint-tamanho').value);
    const f = paint.ferramenta;
    ctx.save();
    // a opacidade vale pro lapis e pro pincel (a borracha apaga sempre por inteiro)
    ctx.globalAlpha = f === 'borracha' ? 1 : opacidadePaint();
    ctx.strokeStyle = f === 'borracha' ? '#ffffff' : paint.cor;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.lineWidth = f === 'lapis' ? Math.max(1, tamanho / 2) : tamanho * (f === 'borracha' ? 2 : 1);
    ctx.lineCap = f === 'lapis' ? 'square' : 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(pontos[0].x, pontos[0].y);
    if (pontos.length === 1) {
        ctx.lineTo(pontos[0].x + 0.01, pontos[0].y);
    } else if (f === 'lapis') {
        pontos.forEach(p => ctx.lineTo(p.x, p.y));
    } else {
        // curvas pelos pontos do meio deixam o pincel suave
        for (let i = 1; i < pontos.length - 1; i++) {
            const meio = { x: (pontos[i].x + pontos[i + 1].x) / 2, y: (pontos[i].y + pontos[i + 1].y) / 2 };
            ctx.quadraticCurveTo(pontos[i].x, pontos[i].y, meio.x, meio.y);
        }
        const ultimo = pontos[pontos.length - 1];
        ctx.lineTo(ultimo.x, ultimo.y);
    }
    ctx.stroke();
    ctx.restore();
}

function tracarForma(ctx, a, b, shift) {
    const tamanho = Number($('#paint-tamanho').value);
    let dx = b.x - a.x;
    let dy = b.y - a.y;
    if (shift && paint.ferramenta === 'linha') {
        // reta: prende em 0, 45 ou 90 graus
        const ang = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) * (Math.PI / 4);
        const d = Math.hypot(dx, dy);
        dx = Math.cos(ang) * d;
        dy = Math.sin(ang) * d;
    } else if (shift) {
        const lado = Math.max(Math.abs(dx), Math.abs(dy));
        dx = Math.sign(dx || 1) * lado;
        dy = Math.sign(dy || 1) * lado;
    }
    ctx.save();
    ctx.globalAlpha = opacidadePaint();
    ctx.strokeStyle = paint.cor;
    ctx.fillStyle = paint.cor;
    ctx.lineWidth = Math.max(1, tamanho / 2);
    ctx.lineCap = 'round';
    ctx.beginPath();
    if (paint.ferramenta === 'linha') {
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(a.x + dx, a.y + dy);
        ctx.stroke();
    } else {
        if (paint.ferramenta === 'retangulo') ctx.rect(a.x, a.y, dx, dy);
        else ctx.ellipse(a.x + dx / 2, a.y + dy / 2, Math.abs(dx / 2), Math.abs(dy / 2), 0, 0, Math.PI * 2);
        if ($('#paint-preencher').checked) ctx.fill();
        else ctx.stroke();
    }
    ctx.restore();
}

function sprayPaint(ctx, p) {
    const tamanho = Number($('#paint-tamanho').value);
    ctx.save();
    ctx.globalAlpha = opacidadePaint();
    ctx.fillStyle = paint.cor;
    for (let i = 0; i < tamanho * 3; i++) {
        const ang = Math.random() * Math.PI * 2;
        const raio = Math.random() * tamanho * 2;
        ctx.fillRect(p.x + Math.cos(ang) * raio, p.y + Math.sin(ang) * raio, 1, 1);
    }
    ctx.restore();
}

// redesenha o que ta sendo feito agora em cima da foto de antes
function redesenharPaint(fimForma, shift) {
    const ctx = ctxPaint();
    ctx.putImageData(paint.foto, 0, 0);
    const espelho = $('#paint-espelho').checked;
    if (['linha', 'retangulo', 'elipse'].includes(paint.ferramenta)) {
        tracarForma(ctx, paint.inicio, fimForma, shift);
        if (espelho) tracarForma(ctx, espelhar(paint.inicio), espelhar(fimForma), shift);
    } else {
        tracarLivre(ctx, paint.pontos);
        if (espelho) tracarLivre(ctx, paint.pontos.map(espelhar));
    }
}

function terminarTracoPaint() {
    if (!paint.desenhando) return;
    paint.desenhando = false;
    paint.foto = null;
    salvarRascunhoPaint();
}

function iniciarPaint() {
    if (paint.iniciado) return;
    paint.iniciado = true;
    const canvas = $('#paint-canvas');
    const ctx = canvas.getContext('2d');
    const tela = $('.paint-tela');
    limparPaint();
    // volta o desenho que tava sendo feito
    const rascunho = guardar.ler('paint-rascunho', '');
    if (rascunho) {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0);
        img.src = rascunho;
    }

    $$('[data-desenho]').forEach(b => {
        b.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">${DESENHOS_FERRAMENTA[b.dataset.desenho]}</svg>`;
    });
    $('#paleta').innerHTML = CORES_PAINT.map(c => `<button style="background:${c}" data-cor="${c}" title="${c}"></button>`).join('');
    $('#cor-atual').style.background = paint.cor;
    desenharPaletaPersonalizada();
    atualizarBotoesHistorico();
    zoomPaint(1);

    const ponto = e => {
        const { fx, fy } = fracaoNoElemento(canvas, e.clientX, e.clientY);
        return { x: fx * canvas.width, y: fy * canvas.height };
    };

    canvas.addEventListener('pointerdown', e => {
        paint.dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
        // dois dedos: e zoom, nao desenho (desfaz o risco que comecou)
        if (paint.dedos.size === 2) {
            if (paint.desenhando && paint.foto) ctx.putImageData(paint.foto, 0, 0);
            if (paint.desenhando) { paint.historico.pop(); atualizarBotoesHistorico(); }
            paint.desenhando = false;
            return;
        }
        if (paint.dedos.size > 2) return;
        try { canvas.setPointerCapture(e.pointerId); } catch { /* toque que ja acabou */ }
        const p = ponto(e);
        const f = paint.ferramenta;
        if (f === 'mao') {
            paint.arrastoMao = { x: e.clientX, y: e.clientY, sl: tela.scrollLeft, st: tela.scrollTop };
            return;
        }
        if (f === 'conta-gotas') {
            const [r, g, b] = ctx.getImageData(Math.floor(p.x), Math.floor(p.y), 1, 1).data;
            trocarCorPaint(rgbParaHex(r, g, b));
            return ferramentaPaint(paint.antesDoContaGotas || 'pincel');
        }
        guardarPassoPaint();
        if (f === 'balde') {
            balde(p.x, p.y);
            if ($('#paint-espelho').checked) { const q = espelhar(p); balde(q.x, q.y); }
            return salvarRascunhoPaint();
        }
        paint.desenhando = true;
        if (f === 'spray') {
            sprayPaint(ctx, p);
            if ($('#paint-espelho').checked) sprayPaint(ctx, espelhar(p));
            return;
        }
        paint.foto = ctx.getImageData(0, 0, canvas.width, canvas.height);
        paint.inicio = p;
        paint.pontos = [p];
        redesenharPaint(p, e.shiftKey);
    });

    canvas.addEventListener('pointermove', e => {
        const p = ponto(e);
        $('#paint-coords').textContent = `${Math.round(p.x)},${Math.round(p.y)}`;
        const antes = paint.dedos.get(e.pointerId);
        if (antes) paint.dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
        // pinca com dois dedos
        if (paint.dedos.size === 2 && antes) {
            const outro = [...paint.dedos.entries()].find(([id]) => id !== e.pointerId)[1];
            const dAntes = Math.hypot(antes.x - outro.x, antes.y - outro.y);
            const dAgora = Math.hypot(e.clientX - outro.x, e.clientY - outro.y);
            if (dAntes > 0) {
                const { fx, fy } = fracaoNoElemento(canvas, (e.clientX + outro.x) / 2, (e.clientY + outro.y) / 2);
                zoomPaint(paint.zoom * dAgora / dAntes, fx, fy);
            }
            return;
        }
        if (paint.arrastoMao) {
            // com a janela deitada o "pra baixo" da tela e o "pra direita" do desenho
            const deitado = !!canvas.closest('.deitado');
            const dx = e.clientX - paint.arrastoMao.x;
            const dy = e.clientY - paint.arrastoMao.y;
            tela.scrollLeft = paint.arrastoMao.sl - (deitado ? dy : dx);
            tela.scrollTop = paint.arrastoMao.st - (deitado ? -dx : dy);
            return;
        }
        if (!paint.desenhando) return;
        if (paint.ferramenta === 'spray') {
            sprayPaint(ctx, p);
            if ($('#paint-espelho').checked) sprayPaint(ctx, espelhar(p));
            return;
        }
        paint.pontos.push(p);
        redesenharPaint(p, e.shiftKey);
    });

    const soltar = e => {
        paint.dedos.delete(e.pointerId);
        paint.arrastoMao = null;
        terminarTracoPaint();
    };
    canvas.addEventListener('pointerup', soltar);
    canvas.addEventListener('pointercancel', soltar);
    canvas.addEventListener('pointerleave', () => { $('#paint-coords').textContent = ''; });

    // ctrl + rodinha: zoom onde ta o mouse
    tela.addEventListener('wheel', e => {
        if (!e.ctrlKey && !e.metaKey) return;
        e.preventDefault();
        const { fx, fy } = fracaoNoElemento(canvas, e.clientX, e.clientY);
        passoZoomPaint(e.deltaY < 0 ? 1 : -1, fx, fy);
    }, { passive: false });

    // atalhos do teclado (so quando o paint ta na frente e nao ta digitando)
    document.addEventListener('keydown', e => {
        const janela = $('#paint');
        if (janela.hidden || janela.classList.contains('minimizada') || !janela.classList.contains('ativa')) return;
        if (e.target.closest?.('input, textarea, select')) return;
        const tecla = e.key.toLowerCase();
        if ((e.ctrlKey || e.metaKey) && tecla === 'z' && !e.shiftKey) { e.preventDefault(); return desfazerPaint(); }
        if ((e.ctrlKey || e.metaKey) && (tecla === 'y' || (tecla === 'z' && e.shiftKey))) { e.preventDefault(); return refazerPaint(); }
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (tecla === '+' || tecla === '=') return passoZoomPaint(1);
        if (tecla === '-') return passoZoomPaint(-1);
        const atalhos = { p: 'lapis', b: 'pincel', s: 'spray', g: 'balde', e: 'borracha', i: 'conta-gotas', l: 'linha', r: 'retangulo', o: 'elipse', h: 'mao' };
        if (atalhos[tecla]) ferramentaPaint(atalhos[tecla]);
    });
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
    if (nome === 'limpar') return confirmar('Paint', 'Apagar todo o desenho? (dá pra desfazer depois)', () => {
        guardarPassoPaint();
        limparPaint();
        salvarRascunhoPaint();
    });
    if (nome === 'desfazer') return desfazerPaint();
    if (nome === 'refazer') return refazerPaint();
    if (nome === 'zoom-mais') return passoZoomPaint(1);
    if (nome === 'zoom-menos') return passoZoomPaint(-1);
    if (nome === 'conta-gotas' && paint.ferramenta !== 'conta-gotas') paint.antesDoContaGotas = paint.ferramenta;
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
    $('#paint-canvas').dataset.ferramenta = nome;
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
    atualizarCel();
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

function abrirArquivoLixeira(n, depoisDosAnuncios = false) {
    const arquivo = itensLixeira()[n];
    if (!arquivo) return;
    // o clona cartao enche a tela de propaganda e so abre depois que fechar tudo
    if (/clona/i.test(arquivo.nome) && !depoisDosAnuncios) {
        if (!$('#anuncios')) chuvaDeAnuncios(() => abrirArquivoLixeira(n, true));
        return;
    }
    // as "senhas secretas" sao o rick astley (toda vez)
    if (/senha/i.test(arquivo.nome)) return rickroll();
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


// --- senhas_secretas.txt: never gonna give you up ---
function rickroll() {
    $('#rickroll')?.remove();
    const tela = document.createElement('div');
    tela.className = 'fundo-escuro rickroll';
    tela.id = 'rickroll';
    tela.innerHTML = `
        <div class="janela dialogo ativa janela-rick" role="dialog" aria-label="senhas_secretas.txt">
            <div class="barra-titulo">
                <span>${icone('sound')} senhas_secretas.txt - Windows Media Player</span>
                <div class="botoes"><button class="fechar" type="button" data-fechar-rick title="Fechar">✕</button></div>
            </div>
            <div class="video-rick">
                <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="Never Gonna Give You Up" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
            </div>
        </div>`;
    // fechar tira o video junto (pra parar a musica)
    tela.addEventListener('click', e => {
        if (e.target === tela || e.target.closest('[data-fechar-rick]')) tela.remove();
    });
    document.body.append(tela);
    if (assistente.iniciado && !$('#assistente').hidden) {
        animarJujuba('dancar', 2200);
        assistenteFalar('Hahaha! Never gonna give you up, never gonna let you down... ♪');
    }
}


// --- clona_cartao.exe: a tela inteira enche de propaganda e janela de aviso do windows xp ---

// banners: [site, tema, chamada (com *destaque*, _sublinhado_, ~vermelho~), texto, botao, gif]
const ANUNCIOS = [
    ['www.premiosgratis.com.br', 'amarelo', 'PARABÉNS!!! você é o *visitante nº 1.000.000*', 'Clique abaixo ~AGORA~ pra resgatar seu prêmio. Não feche essa janela!!!', 'RESGATAR PRÊMIO', 'anuncios/parabens-globo'],
    ['www.pc-turbo.net', 'alerta', '*3 SINAIS* de que o seu PC está ~97% LENTO~', 'Foram encontrados <b>2.381 vírus</b> e 14 bonzi buddy. O número 2 vai te chocar! <span class="barrinha-falsa"><i></i></span>', 'LIMPAR AGORA', 'anuncios/baixando-virus'],
    ['www.ganheja.com.br', 'gratis', 'GRÁTIS!! *MP4 DE 2GB*', 'Responda: qual a cor do cavalo branco de Napoleão? e ganhe na hora!!!', '>> QUERO <<', 'cd'],
    ['www.toques-polifonicos.net', 'azul', 'TOQUES _POLIFÔNICOS_ pro seu tijolão', 'Envie <b>TOQUE</b> para <b>4040</b> e receba o toque do sapo louco!!! R$ 4,99 + impostos', 'BAIXAR TOQUE', 'notas'],
    ['www.kitmsn.cjb.net', 'rosa', 'EMOTICONS *GRÁTIS* PRO MSN', 'Mais de <b>5.000</b> carinhas piscantes pro seu MSN ficar o mais estiloso da net!!!', 'INSTALAR KIT', 'coracao'],
    ['www.orkut-espiao.tk', 'jornal', 'QUEM VISITOU SEU *PERFIL*???', 'Descubra ~AGORA~ quem anda stalkeando seu orkut (funciona de verdade, confia)', 'DESCOBRIR', 'computador'],
    ['www.acerteomacaco.com', 'verde', 'ACERTE O MACACO e ganhe *R$ 500,00*!!!', 'Clique no macaco pra ganhar!!! <span class="macaco-anuncio">@(o_o)@</span>', 'ACERTEI!!!', ''],
    ['clona_cartao.exe', 'escuro', 'CARTÃO CLONADO COM ~SUCESSO~', 'Saldo encontrado: <b>R$ 3,50</b>. Parabéns, agora dá pra comprar um chiclete', 'SACAR $$$', 'anuncios/chuva-dinheiro'],
    ['www.musicasgratis.net', 'ceu', 'BAIXE MÚSICAS em *0,1 SEGUNDO*', 'Com a sua conexão discada de <b>56kbps</b>!!! Tecnologia exclusiva da NASA', 'DOWNLOAD', 'globo'],
    ['www.rendaextra.com.br', 'amarelo', 'GANHE DINHEIRO *SEM SAIR DO SOFÁ*', 'Fature até R$ 10.000 por dia clicando em anúncios ~igual a esse~', 'QUERO SER RICO', 'anuncios/dinheiro-voando'],
    ['www.barradeferramentas.net', 'ceu', 'BARRA DE FERRAMENTAS *Nº 47*', 'Você só tem 46 barras de pesquisa. Ainda sobra espaço na tela!!!', 'INSTALAR', 'computador-crianca'],
    ['www.recadosnovos.com.br', 'rosa', 'VOCÊ TEM *(1) NOVO SCRAP*', 'Alguém <b>especial</b> deixou um recado pra você... clique pra ver quem foi', 'LER SCRAP', 'email'],
    ['www.testedoamor.cjb.net', 'rosa', 'TESTE DO *AMOR* &lt;3', 'Descubra a porcentagem de amor entre você e o seu crush só com a data de nascimento!!!', 'CALCULAR', 'coracao'],
    ['www.ultimasnoticias.tk', 'jornal', '*URGENTE:* a internet ~QUEBROU~', 'Especialistas confirmam: alguém apertou F5 forte demais. Saiba como se proteger.', 'LER MAIS', ''],
    ['www.anuncie-aqui.com.br', 'gratis', 'ANUNCIE *AQUI*!!!', 'Seu banner visto por até <b>12 pessoas</b> por mês!!! Preços a partir de R$ 0,50', 'ANUNCIAR', 'anuncios/anuncie-aqui'],
    ['www.contadordevisitas.net', 'escuro', 'CONTADOR DE VISITAS *GRÁTIS*', 'Mostre que seu site tem <b>999.999 visitas</b> (a maioria é você dando F5)', 'QUERO UM', 'anuncios/contador'],
    ['www.ganhe-dolares.com', 'verde', 'GANHE EM *DÓLAR* $$$', 'Receba <b>US$ 1.000</b> por semana lendo e-mails. 100% garantido!!!', 'CADASTRAR', 'anuncios/cifrao-verde'],
    ['www.fimdomundo.hpg.com.br', 'escuro', 'O FIM ESTÁ *PRÓXIMO*', 'Seu computador vai explodir no ano 2000. Faça backup em disquete ~JÁ~!!!', 'ME SALVA', ''],
    ['www.pagina-em-construcao.hpg.com.br', 'jornal', 'SITE EM *CONSTRUÇÃO*', 'Assine meu livro de visitas!!! Melhor visualizado em 800x600 no Internet Explorer 5', 'ASSINAR', 'construcao'],
];

// janelas de aviso do windows: [titulo, icone, texto, botoes]
const DIALOGOS_ANUNCIO = [
    ['OK, COMPUTADOR!', 'info', 'Bem-vindo ao clona_cartao.exe. Aproveite com responsabilidade.\nEstamos ansiosos pra conhecer você.', ['OK']],
    ['Aviso de segurança', 'aviso', 'Você é só um humano, e nós estamos aqui pra ajudar.\nSeu cartão será clonado com todo o carinho.', ['Sim']],
    ['???', 'pergunta', 'Nós funcionamos com métodos misteriosos e exclusivos.', ['OK', 'Cancelar']],
    ['ERRO CRÍTICO DE AUTORIZAÇÃO', 'erro', 'Antes de continuar, você precisa clicar pra concordar com os nossos <u>termos de serviço</u> (847 páginas).', ['Concordo', 'Cancelar']],
    ['Windows', 'erro', 'O programa clona_cartao.exe executou uma operação ilegal e será fechado.\nSe o problema continuar, chore.', ['Fechar', 'Detalhes >>']],
    ['Instalação concluída', 'info', 'Foram instaladas 12 barras de ferramentas novas no seu navegador. De nada!', ['Legal!']],
    ['Atenção', 'aviso', 'Sua memória RAM está cheia de recados do orkut.\nDeseja liberar espaço apagando o Paciência?', ['Sim', 'Não', 'Talvez']],
];

// selinhos estourando em cima dos banners
const SELOS_ANUNCIO = ['GRÁTIS!', 'NOVO!', 'SÓ HOJE!', '-90%', 'OFERTA!'];

// enfeites pequenos que aparecem do lado da chamada
const ENFEITES_ANUNCIO = ['new-azul', 'new-vermelho', 'hot', 'hot-estrela', 'free-stuff', 'cifrao-azul', 'virus-verde'];
// as vezes o botao vira um gif de "clique aqui"
const BOTOES_ANUNCIO = ['clique-vermelho', 'clique-verde', 'clique-pisca'];

function sortear(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// gif do anuncio (os que nao estao na lista GIFS tambem servem)
function gifAnuncio(nome) {
    if (!nome) return '';
    if (GIFS[nome]) return gif(nome, Math.min(GIFS[nome][0], 200));
    return `<img class="gif" src="imagens/gifs/${nome}.gif" alt="">`;
}

// *destaque amarelo*, _sublinhado_ e ~vermelho~ na chamada (igual propaganda antiga)
function chamadaAnuncio(texto) {
    return texto
        .replace(/\*([^*]+)\*/g, '<mark>$1</mark>')
        .replace(/_([^_]+)_/g, '<u>$1</u>')
        .replace(/~([^~]+)~/g, '<em>$1</em>');
}

// de quanto em quanto tempo (ms) aparece o proximo anuncio
const CHUVA = { intervalo: 70 };

function chuvaDeAnuncios(depois) {
    const camada = document.createElement('div');
    camada.id = 'anuncios';
    camada.className = 'camada-anuncios';
    document.body.append(camada);
    const estado = { topo: 1, timers: [], colunas: null };

    function botoesJanela() {
        return '<span class="anuncio-botoes"><button data-x-anuncio title="Minimizar">_</button><button data-maximizar-anuncio title="Maximizar">□</button><button class="x-vermelho" data-x-anuncio title="Fechar">✕</button></span>';
    }

    function criarBanner(qual) {
        const [site, tema, chamada, texto, botao, figura] = ANUNCIOS[qual];
        const anuncio = document.createElement('div');
        anuncio.dataset.qual = 'b' + qual;
        anuncio.className = `anuncio banner tema-${tema}`;
        // alguns X fogem na primeira vez, outros tem X sobrando
        if (Math.random() < 0.25) anuncio.dataset.foge = '1';
        const maisX = Math.random() < 0.3;
        const endereco = site.endsWith('.exe') ? site : `http://${site}/promo.htm`;
        anuncio.innerHTML = `
            <div class="anuncio-barra"><span>${endereco} - Microsoft Internet Explorer</span>${botoesJanela()}</div>
            <div class="anuncio-corpo">
                ${maisX ? '<button class="x-solto" data-x-anuncio title="Fechar">✕</button>' : ''}
                ${Math.random() < 0.45 ? `<span class="selo-anuncio">${sortear(SELOS_ANUNCIO)}</span>` : ''}
                ${Math.random() < 0.3 ? `<span class="curtiu-anuncio"><img src="${urlIcone('thumb_up', 32)}" alt="">VOCÊ CURTIU ISSO!</span>` : ''}
                ${gifAnuncio(figura)}
                <div class="anuncio-chamada">${Math.random() < 0.4 ? `<img class="enfeite-anuncio" src="imagens/gifs/anuncios/${sortear(ENFEITES_ANUNCIO)}.gif" alt="">` : ''}${chamadaAnuncio(chamada)}</div>
                <p>${texto}</p>
                ${Math.random() < 0.3
                    ? `<button class="anuncio-botao-gif" data-botao-anuncio title="${botao}"><img src="imagens/gifs/anuncios/${sortear(BOTOES_ANUNCIO)}.gif" alt="${botao}"></button>`
                    : `<button class="anuncio-botao" data-botao-anuncio>${botao}</button>`}
                <small><a data-x-anuncio>[x] não, obrigado. eu não gosto de prêmios</a></small>
            </div>`;
        anuncio.style.width = Math.min(window.innerWidth - 12, 220 + Math.floor(Math.random() * 120)) + 'px';
        return anuncio;
    }

    function criarDialogo(qual) {
        const [titulo, tipo, texto, botoes] = DIALOGOS_ANUNCIO[qual];
        const anuncio = document.createElement('div');
        anuncio.dataset.qual = 'd' + qual;
        anuncio.className = 'anuncio dialogo-xp';
        anuncio.innerHTML = `
            <div class="anuncio-barra"><span>${titulo}</span><span class="anuncio-botoes"><button class="x-vermelho" data-x-anuncio title="Fechar">✕</button></span></div>
            <div class="dialogo-xp-corpo"><i class="icone-dialogo ${tipo}"></i><p>${texto.replace(/\n/g, '<br>')}</p></div>
            <div class="dialogo-xp-botoes">${botoes.map((b, i) => `<button ${i === 0 ? 'data-botao-anuncio' : 'data-x-anuncio'}>${b}</button>`).join('')}</div>`;
        anuncio.style.width = Math.min(window.innerWidth - 12, 300 + Math.floor(Math.random() * 60)) + 'px';
        return anuncio;
    }

    // so um de cada na tela
    function criarAnuncio(tipo) {
        if (!camada.isConnected) return;
        const naTela = new Set([...camada.querySelectorAll('.anuncio')].map(a => a.dataset.qual));
        const lista = tipo === 'dialogo' ? DIALOGOS_ANUNCIO : ANUNCIOS;
        const prefixo = tipo === 'dialogo' ? 'd' : 'b';
        const livres = lista.map((_, i) => i).filter(i => !naTela.has(prefixo + i));
        if (!livres.length) return;
        const qual = sortear(livres);
        const anuncio = tipo === 'dialogo' ? criarDialogo(qual) : criarBanner(qual);
        anuncio.style.zIndex = estado.topo++;
        camada.append(anuncio);
        posicionarAnuncio(anuncio, tipo !== 'dialogo');
    }

    // banners vao enchendo a tela por colunas (tipo mosaico, um meio por cima do outro); avisos caem em qualquer lugar
    function posicionarAnuncio(anuncio, mosaico) {
        const L = window.innerWidth;
        const A = window.innerHeight - 36;
        if (mosaico) {
            if (!estado.colunas) {
                const n = Math.max(1, Math.round(L / 250));
                estado.colunas = Array.from({ length: n }, () => -10 - Math.random() * 30);
            }
            const col = estado.colunas.indexOf(Math.min(...estado.colunas));
            const largura = L / estado.colunas.length;
            const x = col * largura + (largura - anuncio.offsetWidth) / 2 + (Math.random() - 0.5) * 40;
            let y = estado.colunas[col];
            if (y > A - 60) y = Math.random() * (A - anuncio.offsetHeight);
            estado.colunas[col] = y + anuncio.offsetHeight - 18 - Math.random() * 20;
            anuncio.style.left = Math.min(Math.max(2, x), L - anuncio.offsetWidth - 2) + 'px';
            anuncio.style.top = Math.max(2, y) + 'px';
            anuncio.style.rotate = ((Math.random() - 0.5) * 3).toFixed(1) + 'deg';
            return;
        }
        anuncio.style.left = Math.max(4, Math.random() * (L - anuncio.offsetWidth - 8)) + 'px';
        anuncio.style.top = Math.max(4, Math.random() * (A - anuncio.offsetHeight - 8)) + 'px';
    }

    function fechar(anuncio) {
        anuncio.classList.add('sumindo');
        setTimeout(() => {
            anuncio.remove();
            if (!camada.querySelector('.anuncio')) acabou();
        }, 140);
    }

    function acabou() {
        estado.timers.forEach(clearTimeout);
        document.removeEventListener('keydown', teclaEsc);
        camada.remove();
        status('Pronto, o computador ficou limpo de novo');
        depois?.();
    }

    // esc fecha o de cima (pra ninguem ficar preso)
    function teclaEsc(e) {
        if (e.key !== 'Escape') return;
        const ultimo = [...camada.querySelectorAll('.anuncio:not(.sumindo)')].sort((a, b) => b.style.zIndex - a.style.zIndex)[0];
        if (ultimo) fechar(ultimo);
    }
    document.addEventListener('keydown', teclaEsc);

    camada.addEventListener('click', e => {
        const anuncio = e.target.closest('.anuncio');
        if (!anuncio || anuncio.classList.contains('sumindo')) return;
        anuncio.style.zIndex = estado.topo++;
        if (e.target.closest('[data-x-anuncio]')) {
            // o X fugiu! na proxima ele fecha
            if (anuncio.dataset.foge) {
                delete anuncio.dataset.foge;
                return posicionarAnuncio(anuncio, false);
            }
            return fechar(anuncio);
        }
        if (e.target.closest('[data-maximizar-anuncio]')) return anuncio.classList.toggle('maximizado');
        // clicou no botao do premio/OK: fecha esse e abre mais dois (classico)
        if (e.target.closest('[data-botao-anuncio]')) {
            if (anuncio.classList.contains('dialogo-xp')) fechar(anuncio);
            criarAnuncio('banner');
            criarAnuncio('dialogo');
        }
    });

    // primeiro os banners enchem a tela, depois os avisos do windows aparecem por cima
    ANUNCIOS.forEach((_, i) => estado.timers.push(setTimeout(() => criarAnuncio('banner'), i * CHUVA.intervalo)));
    DIALOGOS_ANUNCIO.forEach((_, i) => estado.timers.push(setTimeout(() => criarAnuncio('dialogo'), (ANUNCIOS.length + i * 3) * CHUVA.intervalo)));
    status('Instalando clona_cartao.exe... (isso não vai acabar bem)');
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

Ferramentas:
• Lápis, pincel (traço suave), spray, balde (pinta uma área inteira) e borracha.
• Conta-gotas: clica no desenho pra pegar aquela cor.
• Linha, retângulo e círculo. Segurando Shift fica reto, quadrado ou redondinho. Marque "cheio" pra pintar a forma por dentro.
• Mão: arrasta o desenho quando ele tá com zoom.

Pra pintar melhor:
• Desfazer (Ctrl+Z) e refazer (Ctrl+Y) as últimas 40 coisas.
• Zoom: lupas da barra, teclas + e -, Ctrl + rodinha do mouse ou pinça com dois dedos no celular.
• Opacidade deixa o lápis, o pincel, o spray e as formas transparentes, bom pra fazer sombra.
• Espelho: tudo que você desenha aparece do outro lado, ótimo pra rosto e borboleta.
• O desenho fica salvo sozinho no seu navegador, mesmo se fechar a janela.

Atalhos: P lápis · B pincel · S spray · G balde · E borracha · I conta-gotas · L linha · R retângulo · O círculo · H mão

• Salvar baixa o desenho pro seu computador. Enviar manda pro Lucas com o seu nome e o nome da arte.`],
    msn: ['Zap do Lucas', 'msn_messenger', `Pra que serve: um bate-papo aberto onde todo mundo que visita o site conversa junto. (L)

Como usar:
• Escreva seu nome em cima e a mensagem embaixo. Enter manda, Shift+Enter pula linha.
• "Chamar a atenção" faz a janela de todo mundo tremer.
• Os emoticons viram desenho: :) :D :P ;) (L) (Y) (H) 8-|
• As mensagens somem sozinhas depois de 7 dias.`],
    fazenda: ['Fazenda do Lucas', 'celeiro', `Pra que serve: um joguinho de fazenda com fases, metas e medalhas, igual aos jogos de fazenda antigos.

Como usar:
• Clique no pasto pra plantar grama (gasta água do poço). Os bichos comem e produzem.
• Clique nos produtos que caem no chão pra guardar no armazém, antes que sumam.
• Construa fábricas nos lotes e clique nelas pra transformar os produtos.
• Clique no armazém ou no caminhão pra mandar vender na cidade.
• Ursos: clique várias vezes até prender na jaula!
• Cumpra as metas rápido pra ganhar medalha de ouro e moedas pra Loja.`],
    minado: ['Campo Tekisminado', 'mina', `Pra que serve: o campo minado do Windows, versão Tekis. Abra todos os quadradinhos sem explodir nenhuma mina!

Como jogar:
• Clique num quadradinho pra abrir. O primeiro clique nunca tem mina.
• O número mostra quantas minas tem nos 8 quadradinhos em volta.
• Botão direito (ou segurar o dedo no celular) põe uma bandeira onde você acha que tem mina.
• No celular também dá pra ligar o "bandeira: sim" lá em cima: aí cada toque vira bandeira.
• Clicar num número que já tem as bandeiras certas em volta abre o resto de uma vez.
• A carinha recomeça o jogo (ou aperte F2). Iniciante: 9x9 com 10 minas, Intermediário: 16x16 com 40, Especialista: 30x16 com 99.
• Ganhou? O tempo vai pros recordes de cada nível.`],
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



// --- campo tekisminado (o campo minado do windows xp) ---

const NIVEIS_MINADO = { iniciante: [9, 9, 10], intermediario: [16, 16, 40], especialista: [30, 16, 99] };
const NOMES_NIVEL_MINADO = { iniciante: 'Iniciante', intermediario: 'Intermediário', especialista: 'Especialista' };
const CARAS_MINADO = { normal: 'emotion_smile', susto: 'emotion_suprised', ganhou: 'emotion_cool', perdeu: 'emotion_cry' };
const MINA_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><g stroke="#000" stroke-width="1.6" stroke-linecap="round"><path d="M8 1.5v13M1.5 8h13M3.4 3.4l9.2 9.2M12.6 3.4l-9.2 9.2"/></g><circle cx="8" cy="8" r="4.6" fill="#000"/><rect x="5.6" y="5.6" width="2" height="2" fill="#fff"/></svg>';
const BANDEIRA_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2.5 3.5 5.2 9 8z" fill="#e00"/><path d="M9 2v9" stroke="#000" stroke-width="1.4"/><path d="M5 12.2h7v1.6H5zM7 11h3v1.4H7z" fill="#000"/></svg>';

const minado = { nivel: guardar.ler('minado-nivel', 'iniciante'), cols: 9, lins: 9, minas: 10, campo: [], comecou: false, acabou: false, tempo: 0, timer: null, bandeiras: 0, modoBandeira: false, iniciado: false, segurando: null, ignorarClique: false };

function novoMinado(nivel = minado.nivel) {
    if (!NIVEIS_MINADO[nivel]) nivel = 'iniciante';
    minado.nivel = nivel;
    guardar.salvar('minado-nivel', nivel);
    [minado.cols, minado.lins, minado.minas] = NIVEIS_MINADO[nivel];
    minado.campo = Array.from({ length: minado.cols * minado.lins }, () => ({ mina: false, aberta: false, bandeira: false, n: 0 }));
    minado.comecou = false;
    minado.acabou = false;
    minado.bandeiras = 0;
    minado.tempo = 0;
    clearInterval(minado.timer);
    const campo = $('#campo-minado');
    campo.style.gridTemplateColumns = `repeat(${minado.cols}, var(--casa-minado))`;
    campo.innerHTML = minado.campo.map((_, i) => `<button type="button" class="casa-minado" data-casa="${i}" aria-label="quadradinho ${i % minado.cols + 1}, ${Math.floor(i / minado.cols) + 1}"></button>`).join('');
    $$('.menu-minado [data-minado]').forEach(b => b.classList.toggle('ativo', b.dataset.minado === nivel));
    caraMinado('normal');
    placarMinado();
}

function vizinhosMinado(i) {
    const c = i % minado.cols, l = Math.floor(i / minado.cols), lista = [];
    for (let dl = -1; dl <= 1; dl++) for (let dc = -1; dc <= 1; dc++) {
        if (!dc && !dl) continue;
        const nc = c + dc, nl = l + dl;
        if (nc >= 0 && nl >= 0 && nc < minado.cols && nl < minado.lins) lista.push(nl * minado.cols + nc);
    }
    return lista;
}

// as minas so entram depois do primeiro clique (ele e os vizinhos ficam livres)
function espalharMinas(seguro) {
    const livres = new Set([seguro, ...vizinhosMinado(seguro)]);
    const lugares = minado.campo.map((_, i) => i).filter(i => !livres.has(i));
    for (let k = 0; k < minado.minas && lugares.length; k++) {
        const j = Math.floor(Math.random() * lugares.length);
        minado.campo[lugares.splice(j, 1)[0]].mina = true;
    }
    minado.campo.forEach((casa, i) => { casa.n = vizinhosMinado(i).filter(v => minado.campo[v].mina).length; });
}

function abrirCasaMinado(i) {
    const casa = minado.campo[i];
    if (minado.acabou || casa.aberta || casa.bandeira) return;
    if (!minado.comecou) {
        minado.comecou = true;
        espalharMinas(i);
        minado.timer = setInterval(() => { minado.tempo = Math.min(999, minado.tempo + 1); placarMinado(); }, 1000);
    }
    if (casa.mina) return perderMinado(i);
    // abre tudo que for zero em volta
    const pilha = [i];
    while (pilha.length) {
        const v = pilha.pop();
        const c = minado.campo[v];
        if (c.aberta || c.bandeira) continue;
        c.aberta = true;
        desenharCasaMinado(v);
        if (!c.n) vizinhosMinado(v).forEach(n => { if (!minado.campo[n].aberta && !minado.campo[n].mina) pilha.push(n); });
    }
    conferirVitoriaMinado();
}

// clicar num numero com as bandeiras certinhas em volta abre o resto
function acordeMinado(i) {
    const casa = minado.campo[i];
    if (!casa.aberta || !casa.n || minado.acabou) return;
    const viz = vizinhosMinado(i);
    if (viz.filter(v => minado.campo[v].bandeira).length !== casa.n) return;
    viz.forEach(v => { if (!minado.campo[v].bandeira && !minado.campo[v].aberta) abrirCasaMinado(v); });
}

function bandeiraMinado(i) {
    const casa = minado.campo[i];
    if (minado.acabou || casa.aberta) return;
    casa.bandeira = !casa.bandeira;
    minado.bandeiras += casa.bandeira ? 1 : -1;
    vibrar(15);
    desenharCasaMinado(i);
    placarMinado();
}

function desenharCasaMinado(i, explodiu = false) {
    const casa = minado.campo[i];
    const el = $(`#campo-minado [data-casa="${i}"]`);
    if (!el) return;
    el.className = 'casa-minado' + (casa.aberta ? ` aberta n${casa.n}` : '') + (explodiu ? ' explodiu' : '') + (casa.errada ? ' errada' : '');
    el.innerHTML = casa.aberta
        ? (casa.mina ? MINA_SVG : casa.n || '')
        : (casa.bandeira ? BANDEIRA_SVG : '');
}

function perderMinado(i) {
    minado.acabou = true;
    clearInterval(minado.timer);
    minado.campo.forEach((casa, v) => {
        if (casa.mina && !casa.bandeira) casa.aberta = true;
        if (!casa.mina && casa.bandeira) { casa.errada = true; casa.aberta = false; }
        desenharCasaMinado(v, v === i);
    });
    caraMinado('perdeu');
    vibrar(200);
    if (assistente.iniciado && !$('#assistente').hidden) {
        animarJujuba('cocar', 1500);
        assistenteFalar(sorteio(['BUUUM! Essa doeu até em mim. :(', 'Explodiu tudo! Clica na carinha pra tentar de novo.', 'Kabum! Calma, até eu já pisei numa mina. Eu não tenho pé, mas pisei.']));
    }
}

function conferirVitoriaMinado() {
    const faltam = minado.campo.filter(c => !c.mina && !c.aberta).length;
    if (faltam) return;
    minado.acabou = true;
    clearInterval(minado.timer);
    minado.campo.forEach((casa, v) => { if (casa.mina && !casa.bandeira) { casa.bandeira = true; desenharCasaMinado(v); } });
    minado.bandeiras = minado.minas;
    placarMinado();
    caraMinado('ganhou');
    const recordes = guardar.ler('minado-recordes', {});
    const recorde = !recordes[minado.nivel] || minado.tempo < recordes[minado.nivel];
    if (recorde) {
        recordes[minado.nivel] = minado.tempo;
        guardar.salvar('minado-recordes', recordes);
    }
    if (assistente.iniciado && !$('#assistente').hidden) animarJujuba('comemorar', 1800);
    dialogo({
        titulo: 'Campo Tekisminado',
        icone: 'mina',
        texto: `Você ganhou no ${NOMES_NIVEL_MINADO[minado.nivel]} em ${minado.tempo} segundo${minado.tempo === 1 ? '' : 's'}! (Y)${recorde ? '\nNovo recorde nesse nível!' : ''}`,
    });
}

function placarMinado() {
    const led = n => (n < 0 ? '-' + String(Math.min(99, -n)).padStart(2, '0') : String(Math.min(999, n)).padStart(3, '0'));
    $('#minas-minado').textContent = led(minado.minas - minado.bandeiras);
    $('#tempo-minado').textContent = led(minado.tempo);
}

function caraMinado(qual) {
    $('#cara-minado').src = urlIcone(CARAS_MINADO[qual]);
}

function recordesMinado() {
    const r = guardar.ler('minado-recordes', {});
    dialogo({
        titulo: 'Recordes do Campo Tekisminado',
        icone: 'award_star_gold_1',
        texto: Object.keys(NIVEIS_MINADO).map(n => `${NOMES_NIVEL_MINADO[n]}: ${r[n] !== undefined ? r[n] + ' segundos' : 'ninguém ganhou ainda'}`).join('\n'),
    });
}

function iniciarMinado() {
    if (minado.iniciado) return;
    minado.iniciado = true;
    const campo = $('#campo-minado');
    const casaDe = e => e.target.closest('[data-casa]');
    // segurar o dedo poe bandeira; enquanto aperta, a carinha leva susto
    campo.addEventListener('pointerdown', e => {
        const el = casaDe(e);
        if (!el || minado.acabou || e.button === 2) return;
        caraMinado('susto');
        clearTimeout(minado.segurando);
        if (e.pointerType !== 'mouse') {
            minado.segurando = setTimeout(() => {
                minado.ignorarClique = true;
                bandeiraMinado(Number(el.dataset.casa));
                caraMinado('normal');
            }, 420);
        }
    });
    const soltar = () => {
        clearTimeout(minado.segurando);
        if (!minado.acabou) caraMinado('normal');
    };
    campo.addEventListener('pointerup', soltar);
    campo.addEventListener('pointerleave', soltar);
    campo.addEventListener('pointercancel', soltar);
    campo.addEventListener('click', e => {
        const el = casaDe(e);
        if (!el) return;
        if (minado.ignorarClique) { minado.ignorarClique = false; return; }
        const i = Number(el.dataset.casa);
        const casa = minado.campo[i];
        if (casa.aberta) return acordeMinado(i);
        if (minado.modoBandeira) return bandeiraMinado(i);
        abrirCasaMinado(i);
    });
    campo.addEventListener('contextmenu', e => {
        const el = casaDe(e);
        if (!el) return;
        e.preventDefault();
        bandeiraMinado(Number(el.dataset.casa));
    });
    $('#minado').addEventListener('click', e => {
        const b = e.target.closest('[data-minado]');
        if (!b) return;
        const acao = b.dataset.minado;
        if (acao === 'novo') novoMinado();
        if (NIVEIS_MINADO[acao]) novoMinado(acao);
        if (acao === 'recordes') recordesMinado();
        if (acao === 'bandeira') {
            minado.modoBandeira = !minado.modoBandeira;
            b.innerHTML = `bandeira: <b>${minado.modoBandeira ? 'sim' : 'não'}</b>`;
            b.classList.toggle('ligado', minado.modoBandeira);
        }
    });
    // f2 comeca de novo (igual no windows)
    document.addEventListener('keydown', e => {
        if (e.key === 'F2' && !$('#minado').hidden && $('#minado').classList.contains('ativa')) {
            e.preventDefault();
            novoMinado();
        }
    });
    novoMinado();
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
    ajustarDeitados();
    if (caiu) {
        document.title = 'Não é possível acessar esta página';
        status('Sem conexão com a Internet');
        $('#navegador').scrollIntoView({ block: 'start' });
        assistenteViuJanela('semInternet');
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
// no celular em pe o quadradinho de maximizar deixa o jogo deitado em tela cheia (fica bem maior)
function deitarDino(ligar) {
    const canvas = $('#dino');
    let caixa = $('#dino-deitado');
    if (ligar && !caixa) {
        caixa = document.createElement('div');
        caixa.id = 'dino-deitado';
        caixa.className = 'dino-deitado';
        caixa.innerHTML = '<button class="sair-dino" type="button">✕ sair do jogo</button><p class="dica-dino">toque na tela pra pular</p>';
        document.body.append(caixa);
        caixa.insertBefore(canvas, caixa.querySelector('.dica-dino'));
        // tocar em qualquer lugar da tela pula
        caixa.addEventListener('pointerdown', e => {
            if (e.target.closest('.sair-dino')) {
                $('#navegador').classList.remove('maximizada');
                return atualizarTarefas();
            }
            if (e.target === canvas) return;
            e.preventDefault();
            if (dino.acabou) dino.horaDoFim = 0;
            dino.apertouPular();
        });
        caixa.addEventListener('pointerup', () => dino.soltouPular());
    } else if (!ligar && caixa) {
        $('#sem-internet').prepend(canvas);
        caixa.remove();
    }
}

// clicar ou tocar no jogo pula (depois de perder, clicar recomeca na hora)
$('#dino').addEventListener('pointerdown', e => {
    e.preventDefault();
    if (dino.acabou) dino.horaDoFim = 0;
    dino.apertouPular();
});
$('#dino').addEventListener('pointerup', () => dino.soltouPular());

// depois que o jogo comeca, clicar em qualquer lugar do navegador tambem pula
$('#navegador').addEventListener('pointerdown', e => {
    if (!semInternet() || !dino.rodando || e.target === $('#dino')) return;
    if (e.target.closest('button, a, input, textarea, select, .barra-titulo')) return;
    e.preventDefault();
    dino.apertouPular();
});
$('#navegador').addEventListener('pointerup', () => { if (semInternet()) dino.soltouPular(); });


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
    'Chloe', 'Hatsune Miku deitada', 'Kel - Omori', 'Colina com cata-vento', 'Céu Omori',
    'Hora de Aventura - Finn no campo', 'Hatsune Miku', 'Castelo à noite', 'Roblox - casinha no pôr do sol', 'Frutiger Aero',
    'O Verão em que Hikaru Morreu - Hikaru e Yoshiki', 'Avatar - Zuko e os dragões', 'Cidade à noite', 'Hora de Aventura - Finn e Jake', 'Céu e mar',
    'Hatsune Miku nos fios', 'Gato verde e o disco voador', 'Mangá', 'Hora de Aventura - Finn e Jake na grama', 'Steven Universo - Templo de Cristal',
    'Dreamcore', 'Gravity Falls - cata-vento', 'Hora de Aventura - Marceline e Jujuba', 'Hora de Aventura - Finn e Princesa de Fogo', 'Omori',
];

const FUNDOS = [
    { id: 'homespace', nome: 'Plenitude (Windows XP)', arquivo: 'homespace.jpg' },
    ...NOMES_FUNDOS.map((nome, i) => {
        const numero = String(i + 1).padStart(2, '0');
        return { id: `fundo-${numero}`, nome, arquivo: `fundo-${numero}.jpg` };
    }),
    { id: 'azul', nome: 'Azul clássico', cor: '#3a6ea5' },
    { id: 'noite', nome: 'Noite', classe: 'papel-noite' },
    { id: 'rosa', nome: 'Rosa', classe: 'papel-rosa' },
];

// papeis de parede que so aparecem em algumas datas (padrao = o que entra sozinho)
const FUNDOS_DATA = {
    halloween: {
        padrao: 'halloween-04',
        lista: [
            { id: 'halloween-01', nome: 'Casa assombrada', arquivo: 'halloween-01.jpg' },
            { id: 'halloween-02', nome: 'Gravity Falls - Summerween', arquivo: 'halloween-02.jpg' },
            { id: 'halloween-03', nome: 'Fran Bow e Mr. Midnight', arquivo: 'halloween-03.jpg' },
            { id: 'halloween-04', nome: 'Gorillaz no cemitério', arquivo: 'halloween-04.jpg' },
        ],
    },
    natal: {
        padrao: 'natal-01',
        lista: [
            { id: 'natal-01', nome: 'OMORI - Natal com os amigos', arquivo: 'natal-01.jpg' },
            { id: 'natal-02', nome: 'Evangelion - Asuka e Rei de Papai Noel', arquivo: 'natal-02.jpg' },
            { id: 'natal-03', nome: 'Hora de Aventura - Holly Jolly Secrets', arquivo: 'natal-03.jpg' },
        ],
    },
    namorados: {
        padrao: 'namorados-02',
        lista: [
            { id: 'namorados-01', nome: 'Gatinhos apaixonados', arquivo: 'namorados-01.jpg' },
            { id: 'namorados-02', nome: 'Corações e rosas', arquivo: 'namorados-02.jpg' },
            { id: 'namorados-03', nome: 'Ratinhos apaixonados', arquivo: 'namorados-03.jpg' },
        ],
    },
    aniversario: {
        padrao: 'aniversario-01',
        lista: [
            { id: 'aniversario-01', nome: 'Velinhas do bolo', arquivo: 'aniversario-01.jpg' },
            { id: 'aniversario-02', nome: 'Festa de balões', arquivo: 'aniversario-02.jpg' },
            { id: 'aniversario-03', nome: 'Bolo de morango com estrelinhas', arquivo: 'aniversario-03.jpg' },
        ],
    },
    pascoa: {
        padrao: 'pascoa-01',
        lista: [
            { id: 'pascoa-01', nome: 'Coelhinhos no campo', arquivo: 'pascoa-01.jpg' },
        ],
    },
    carnaval: {
        padrao: 'carnaval-01',
        lista: [
            { id: 'carnaval-01', nome: 'Carnaval de Veneza - máscaras do Sol e da Lua', arquivo: 'carnaval-01.jpg' },
            { id: 'carnaval-02', nome: 'Desfile de escola de samba', arquivo: 'carnaval-02.jpg' },
        ],
    },
    orgulho: {
        padrao: 'orgulho-01',
        lista: [
            { id: 'orgulho-01', nome: 'Bandeira Progress Pride (inclusiva intersexo)', arquivo: 'orgulho-01.jpg' },
        ],
    },
    copa: {
        padrao: 'copa-02',
        lista: [
            { id: 'copa-01', nome: 'Torcida brasileira na arquibancada', arquivo: 'copa-01.jpg' },
            { id: 'copa-02', nome: 'Camisas de Ronaldinho, Romário, Ronaldo, Kaká e Pelé', arquivo: 'copa-02.jpg' },
        ],
    },
    rock: {
        padrao: 'rock-01',
        lista: [
            { id: 'rock-01', nome: 'Caveira do metal', arquivo: 'rock-01.jpg' },
            { id: 'rock-02', nome: 'Gorillaz - Plastic Beach', arquivo: 'rock-02.jpg' },
            { id: 'rock-03', nome: 'Gorillaz em Tóquio', arquivo: 'rock-03.jpg' },
            { id: 'rock-04', nome: 'Evanescence - Fallen', arquivo: 'rock-04.jpg' },
        ],
    },
    independencia: {
        padrao: 'independencia-01',
        lista: [
            { id: 'independencia-01', nome: 'Bandeira do Brasil de tecido', arquivo: 'independencia-01.jpg' },
        ],
    },
    muertos: {
        padrao: 'muertos-01',
        lista: [
            { id: 'muertos-01', nome: 'Viva: A Vida é uma Festa - Miguel no cemitério', arquivo: 'muertos-01.jpg' },
        ],
    },
    consciencia: {
        padrao: 'consciencia-01',
        lista: [
            { id: 'consciencia-01', nome: 'Mulher com hibisco no pôr do sol', arquivo: 'consciencia-01.jpg' },
            { id: 'consciencia-02', nome: 'Multidão em verde', arquivo: 'consciencia-02.jpg' },
            { id: 'consciencia-03', nome: 'Rostos em vermelho', arquivo: 'consciencia-03.jpg' },
        ],
    },
    anonovo: {
        padrao: 'anonovo-01',
        lista: [
            { id: 'anonovo-01', nome: 'Fogos dourados', arquivo: 'anonovo-01.jpg' },
            { id: 'anonovo-02', nome: 'GTA San Andreas - CJ no ano novo', arquivo: 'anonovo-02.jpg' },
            { id: 'anonovo-03', nome: 'Gatinhos na banda de ano novo', arquivo: 'anonovo-03.jpg' },
        ],
    },
    trans: {
        padrao: 'trans-01',
        lista: [
            { id: 'trans-01', nome: 'I Saw the TV Glow - There is still time', arquivo: 'trans-01.jpg' },
            { id: 'trans-02', nome: 'I Saw the TV Glow', arquivo: 'trans-02.jpg' },
        ],
    },
};

// a data de hoje tem papel de parede especial?
function fundosDaData() {
    return FUNDOS_DATA[datasAgora.tema] || null;
}

// na data especial a lista e outra e a escolha fica guardada separada
function fundosDisponiveis() {
    return fundosDaData()?.lista || FUNDOS;
}

function fundoEscolhido() {
    const especial = fundosDaData();
    return especial ? guardar.ler(`fundo-${datasAgora.tema}`, especial.padrao) : guardar.ler('fundo', 'homespace');
}

function aplicarFundo(id) {
    const lista = fundosDisponiveis();
    const especial = fundosDaData();
    const fundo = lista.find(f => f.id === id) || (especial ? lista.find(f => f.id === especial.padrao) : lista[0]);
    const corpo = document.body;
    corpo.classList.remove('papel-noite', 'papel-rosa', 'papel-foto');
    corpo.style.background = '';
    corpo.style.removeProperty('--t-papel');
    if (fundo.arquivo) {
        corpo.classList.add('papel-foto');
        corpo.style.backgroundImage = `url("imagens/fundos/${fundo.arquivo}")`;
    }
    if (fundo.cor) corpo.style.background = fundo.cor;
    if (fundo.classe) corpo.classList.add(fundo.classe);
    // na data especial a foto vira o fundo do tema (por cima das cores do tema)
    if (especial) corpo.style.setProperty('--t-papel', `center / cover no-repeat url("imagens/fundos/${fundo.arquivo}")`);
    guardar.salvar(especial ? `fundo-${datasAgora.tema}` : 'fundo', fundo.id);
    $$('[data-fundo]').forEach(botao => botao.classList.toggle('ativo', botao.dataset.fundo === fundo.id));
    const previa = $('#previa-fundo');
    if (previa) previa.style.background = fundo.arquivo ? `center / cover url("imagens/fundos/${fundo.arquivo}")` : (fundo.cor || '');
    if (previa && fundo.classe) previa.className = 'tela-monitor ' + fundo.classe;
    else if (previa) previa.className = 'tela-monitor';
}

function montarFundos() {
    const atual = fundoEscolhido();
    $('#lista-fundos').innerHTML = fundosDisponiveis().map(f => `
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
    'assistente': () => liberado('jujuba') && chamarAssistente(),
    'modo-celular': () => liberado('celular') && entrarModoCelular(true, false),
    'modo-tablet': () => liberado('celular') && entrarModoCelular(true, true),
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
        texto: '• Use os botões do topo e do lado para navegar.\n• Deixe recados, depoimentos e entre pros meus amigos.\n• Converse com todo mundo no Zap do Lucas.\n• Desenhe no Paint e mande pra mim.\n• Arraste as janelas pela barra azul.\n• Troque o papel de parede em Ferramentas.\n• Cada programa (Paint, Zap...) tem um ? na janela que explica como usar.\n• Emoticons viram imagem: :) :D :P ;) (L) (Y) (H)',
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
        const paginas = Object.entries(PAGINAS).filter(([id, pagina]) => !pagina.escondida && (id !== 'tv' || liberado('tv'))).map(([id]) => id);
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
        if (tipo === 'pintura') {
            if (!dados.imagem?.size) return dialogo({ titulo: 'Mural', icone: 'error', texto: 'Escolhe a imagem da pintura.' });
            const imagem = await pinturaEmTexto(dados.imagem);
            const nova = await desenhos.adicionar({ autor: dados.autor.trim(), titulo: dados.titulo.trim(), imagem });
            const id = nova?.id ?? desenhos.todos().find(d => d.imagem === imagem)?.id;
            if (id != null) await desenhos.atualizar(id, { publico: true });
            form.reset();
            mostrarPagina();
            status('Pintura pendurada no mural! ✓');
        }
        if (tipo === 'secreto') {
            const link = dados.link.trim();
            if (link && linkSeguro(link) === '#') {
                return dialogo({ titulo: 'Área secreta', icone: 'error', texto: 'O link tem que começar com http:// ou https://' });
            }
            const lista = [...itensSecretos()], antigo = lista[edicaoSecreto];
            const item = { titulo: dados.titulo.trim().slice(0, 80), texto: dados.texto.slice(0, 5000), link: link || '' };
            if (antigo?.imagem && !dados.semImagem) item.imagem = antigo.imagem;
            if (dados.imagem?.size) item.imagem = await subirImagem(dados.imagem, 'secreto', 1600);
            if (!item.titulo && !item.texto && !item.link && !item.imagem) {
                return dialogo({ titulo: 'Área secreta', icone: 'error', texto: 'Coloca pelo menos um título, texto, link ou imagem.' });
            }
            if (antigo) lista[edicaoSecreto] = item;
            else lista.unshift(item);
            await salvarConfig('secreto', lista.slice(0, 60));
            if (antigo?.imagem && antigo.imagem !== item.imagem) nuvem.storage.from('fotos').remove([antigo.imagem]).catch(console.error);
            edicaoSecreto = null;
            mostrarPagina();
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

    const el = alvo.closest('[data-abrir], [data-comando], [data-janela], [data-tarefa], [data-aba], [data-fechar-aba], [data-apagar], [data-apagar-foto], [data-apagar-comunidade], [data-editar], [data-publicar], [data-tocar], [data-player], [data-foto], [data-lightbox], [data-ferramenta], [data-cor], [data-cor-editor], [data-cores], [data-fundo], [data-notas], [data-lixeira], [data-arquivo-lixeira], [data-tirar-mp3], [data-apagar-lixeira], [data-editar-lixeira], [data-cancelar-lixeira], [data-apagar-secreto], [data-editar-secreto], [data-subir-secreto], [data-cancelar-secreto], [data-msn], [data-desenho-mural], [data-fechar-balao], [data-calc], [data-ajuda], [data-menu-calc], [data-ver-ouvidas], .emoticons button, [data-sair-guia], [data-dialogo-fechar]');
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
            status(publico ? 'Desenho publicado no mural! ✓' : 'Desenho tirado do mural.');
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
    if (d.apagarSecreto) {
        return confirmar('Área secreta', 'Tirar isso da área secreta?', () => {
            const antigo = itensSecretos()[Number(d.apagarSecreto)];
            const lista = itensSecretos().filter((_, i) => i !== Number(d.apagarSecreto));
            salvarConfig('secreto', lista).then(() => {
                if (antigo?.imagem) nuvem.storage.from('fotos').remove([antigo.imagem]).catch(console.error);
                edicaoSecreto = null;
                mostrarPagina();
            }, erroNuvem);
        });
    }
    if (d.subirSecreto) {
        const i = Number(d.subirSecreto), lista = [...itensSecretos()];
        [lista[i - 1], lista[i]] = [lista[i], lista[i - 1]];
        salvarConfig('secreto', lista).then(mostrarPagina, erroNuvem);
        return;
    }
    if (d.editarSecreto) {
        edicaoSecreto = Number(d.editarSecreto);
        mostrarPagina();
        $('#central form')?.scrollIntoView({ block: 'center' });
        return;
    }
    if (d.cancelarSecreto) {
        edicaoSecreto = null;
        return mostrarPagina();
    }
    if (d.msn === 'atencao') return zapAtencao();
    if ('fecharBalao' in d) { $('#balao-zap').hidden = true; return; }
    if (d.desenhoMural) return abrirDesenhoMural(Number(d.desenhoMural), d.de);
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
    if (e.target.closest('.tela-camera, .quadro-grande .moldura-museu')) return abrirZoom();
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
    if (!$('#zoom-foto').hidden) {
        if (e.key === 'Escape') fecharZoom();
        if (e.key === '+' || e.key === '=') mudarZoomFoto(1.5);
        if (e.key === '-') mudarZoomFoto(1 / 1.5);
        return;
    }
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
    'Conectado a 56.000 bps! ✓',
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


// --- datas comemorativas: o site se enfeita sozinho ---

// domingo de pascoa (conta antiga que acha a data de cada ano)
function domingoDePascoa(ano) {
    const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100, d = Math.floor(b / 4), e = b % 4;
    const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(ano, mes - 1, dia);
}

function diasDepois(data, dias) {
    const nova = new Date(data);
    nova.setDate(nova.getDate() + dias);
    return nova;
}

// so o dia (sem hora) pra comparar
function soDia(data) {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate()).getTime();
}

// final da copa do mundo (a de 2030 ainda e chute, a data certa sai depois)
const FINAIS_COPA = ['2026-07-19', '2030-07-21'];

// cada tema aparece so no dia principal da data (nenhum cai em cima do outro)
const DATAS_TEMA = [
    { tema: 'anonovo', quando: (h) => h.getMonth() === 0 && h.getDate() === 1 },
    { tema: 'trans', quando: (h) => h.getMonth() === 0 && h.getDate() === 29 },
    // terca-feira de carnaval (47 dias antes da pascoa)
    { tema: 'carnaval', quando: (h) => soDia(h) === soDia(diasDepois(domingoDePascoa(h.getFullYear()), -47)) },
    { tema: 'pascoa', quando: (h) => soDia(h) === soDia(domingoDePascoa(h.getFullYear())) },
    { tema: 'namorados', quando: (h) => h.getMonth() === 5 && h.getDate() === 12 },
    { tema: 'aniversario', quando: (h) => h.getMonth() === 5 && h.getDate() === 13 },
    // 28 de junho: dia internacional do orgulho lgbtqia+
    { tema: 'orgulho', quando: (h) => h.getMonth() === 5 && h.getDate() === 28 },
    { tema: 'rock', quando: (h) => h.getMonth() === 6 && h.getDate() === 13 },
    { tema: 'copa', quando: (h) => FINAIS_COPA.some(d => soDia(h) === soDia(new Date(d + 'T12:00'))) },
    { tema: 'independencia', quando: (h) => h.getMonth() === 8 && h.getDate() === 7 },
    // o halloween entra junto com a atualizacao de sexta (dia 23) e fica ate o dia 31
    { tema: 'halloween', quando: (h) => h.getMonth() === 9 && h.getDate() >= 23 },
    { tema: 'muertos', quando: (h) => h.getMonth() === 10 && h.getDate() === 2 },
    { tema: 'consciencia', quando: (h) => h.getMonth() === 10 && h.getDate() === 20 },
    { tema: 'natal', quando: (h) => h.getMonth() === 11 && h.getDate() === 25 },
];

// bandeiras lgbtqia+ (listras de cima pra baixo) pro varal do orgulho
const BANDEIRAS_LGBT = {
    'arco-íris': ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'],
    trans: ['#5bcefa', '#f5a9b8', '#ffffff', '#f5a9b8', '#5bcefa'],
    bi: ['#d60270', '#d60270', '#9b4f96', '#0038a8', '#0038a8'],
    lésbica: ['#d52d00', '#ef7627', '#ff9a56', '#ffffff', '#d162a4', '#b55690', '#a30262'],
    pan: ['#ff218c', '#ffd800', '#21b1ff'],
    'não-binária': ['#fcf434', '#ffffff', '#9c59d1', '#2c2c2c'],
    gay: ['#078d70', '#26ceaa', '#98e8c1', '#ffffff', '#7bade2', '#5049cc', '#3d1a78'],
    assexual: ['#000000', '#a3a3a3', '#ffffff', '#800080'],
    'gênero fluido': ['#ff76a4', '#ffffff', '#c011d7', '#000000', '#2f3cbe'],
    agênero: ['#000000', '#bcc4c7', '#ffffff', '#b9f480', '#ffffff', '#bcc4c7', '#000000'],
    arromântica: ['#3da542', '#a7d379', '#ffffff', '#a9a9a9', '#000000'],
    intersexo: null,
};

function listrasBandeira(cores) {
    if (!cores) return 'radial-gradient(circle, transparent 0 22%, #7902aa 24% 36%, transparent 38%), #ffd800';
    return `linear-gradient(180deg, ${cores.map((c, i) => `${c} ${i / cores.length * 100}% ${(i + 1) / cores.length * 100}%`).join(', ')})`;
}

// bandeirinha do brasil (svg pequeno virando fundo)
function bandeiraBrasil() {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009c3b"/><path d="M10 1.6 L18.4 7 L10 12.4 L1.6 7 Z" fill="#ffdf00"/><circle cx="10" cy="7" r="3.4" fill="#002776"/><path d="M6.7 6.3 Q10 5.4 13.3 7.4" stroke="#fff" stroke-width=".7" fill="none"/></svg>';
    return `url('data:image/svg+xml,${encodeURIComponent(svg)}') center / cover`;
}

// estampas tipo tecido kente (vermelho, amarelo, verde e preto)
const KENTE = [
    'linear-gradient(180deg, transparent 38%, #111 38% 62%, transparent 62%), repeating-linear-gradient(90deg, #c8102e 0 6px, #f4c400 6px 12px, #138a36 12px 18px)',
    'repeating-linear-gradient(90deg, #f4c400 0 4px, #111 4px 6px), linear-gradient(#f4c400, #f4c400)',
    'linear-gradient(180deg, #c8102e 0 33%, #111 33% 66%, #138a36 66%)',
    'repeating-linear-gradient(45deg, #138a36 0 5px, #f4c400 5px 8px, #c8102e 8px 13px, #111 13px 16px)',
    'linear-gradient(90deg, transparent 40%, #f4c400 40% 60%, transparent 60%), linear-gradient(180deg, #111 0 30%, #c8102e 30% 70%, #111 70%)',
];

const TEMAS = {
    aniversario: {
        frase: () => 'Hoje é o dia do bolinho do Lucas! Deixa um recado de parabéns',
        varal: { tipo: 'letra', letras: 'FELIZ DIA DO BOLINHO', cores: ['#ff7b54', '#ffb347', '#ffcf56', '#ff5e78', '#c56cf0', '#f9844a'] },
        particulas: ['balao', 'confete', 'dino'], cores: ['#ff7b54', '#ffb347', '#ffd56b', '#ff5e78', '#c56cf0', '#f9844a'],
    },
    anonovo: {
        frase: (h) => `Feliz ${h.getFullYear()}! Que esse ano seja incrível`,
        varal: { tipo: 'letra', letras: 'FELIZ ANO NOVO', cores: ['#d4af37', '#c0c0c0', '#f7e27a', '#e8e8e8'] },
        particulas: ['confete', 'fogos'], cores: ['#d4af37', '#f7e27a', '#ffffff', '#c0c0c0'],
    },
    namorados: {
        frase: () => 'Feliz Dia dos Namorados <3',
        varal: { tipo: 'coracao', cores: ['#e0245e', '#ff7aa8', '#c2185b', '#ffb3c9'] },
        particulas: ['coracao'], cores: ['#e0245e', '#ff7aa8', '#ff4d6d', '#ffb3c9'],
    },
    trans: {
        frase: () => '29 de janeiro: Dia da Visibilidade Trans. Respeito, existência e orgulho!',
        varal: { tipo: 'pendurada', cores: [listrasBandeira(BANDEIRAS_LGBT.trans)] },
        faixa: ['#5bcefa', '#f5a9b8', '#ffffff', '#f5a9b8', '#5bcefa'],
        particulas: ['coracao', 'confete'], cores: ['#5bcefa', '#f5a9b8', '#ffffff'],
    },
    consciencia: {
        frase: () => '20 de novembro: Dia da Consciência Negra. Zumbi dos Palmares vive! Contra o racismo, sempre',
        varal: { tipo: 'pendurada', cores: KENTE },
        faixa: ['#c8102e', '#f4c400', '#138a36', '#111111'],
        particulas: ['estrela'], cores: ['#f4c400', '#ffd84d', '#e0a800'],
    },
    rock: {
        frase: () => '13 de julho: Dia Mundial do Rock! \\m/',
        varal: { tipo: 'letra', letras: 'DIA DO ROCK', cores: ['#111111', '#b30000', '#111111', '#3a3a3a'] },
        particulas: ['palheta', 'raio'], cores: ['#111111', '#cc0000', '#ffcc00', '#6b6b6b'],
    },
    independencia: {
        frase: () => '7 de setembro: Independência do Brasil!',
        varal: { tipo: 'pendurada', cores: [bandeiraBrasil()] },
        particulas: ['confete', 'fogos'], cores: ['#009c3b', '#ffdf00', '#002776', '#ffffff'],
    },
    muertos: {
        frase: () => '2 de novembro, Día de los Muertos: lembrando com carinho de quem já se foi',
        varal: { tipo: 'picado', cores: ['#ff3d8b', '#ff8c00', '#8e44ad', '#1abc9c', '#f1c40f', '#3498db'] },
        particulas: ['petala'], cores: ['#ff8c00', '#ffa500', '#ffb627', '#e65c00'],
    },
    halloween: {
        frase: () => 'Feliz Halloween! Cuidado com os morcegos...',
        varal: { tipo: 'bandeira', cores: ['#ff7518', '#1a1a1a', '#7b2cbf', '#1a1a1a'] },
        teias: true,
        particulas: ['morcego'], cores: ['#1a1a1a', '#2b1a33'],
    },
    pascoa: {
        frase: () => 'Feliz Páscoa! Cadê o meu chocolate?',
        varal: { tipo: 'bandeira', cores: ['#ffb3c6', '#bde0fe', '#fff1a8', '#c8f7c5', '#e0c3fc'] },
        particulas: ['ovo', 'petala'], cores: ['#ffb3c6', '#a2d2ff', '#ffe066', '#b9fbc0', '#cdb4db'],
    },
    carnaval: {
        frase: () => 'É carnaval! Bora pro bloco',
        varal: { tipo: 'bandeira', cores: ['#ff2e93', '#ffd60a', '#00c2ff', '#7cff3e', '#b14dff', '#ff7b00'] },
        particulas: ['confete', 'serpentina'], cores: ['#ff2e93', '#ffd60a', '#00c2ff', '#7cff3e', '#b14dff', '#ff7b00'],
    },
    natal: {
        frase: () => 'Feliz Natal! Ho ho ho',
        varal: { tipo: 'luz', cores: ['#ff3b3b', '#2ecc40', '#ffdc00', '#3d9bff'] },
        particulas: ['neve'], cores: ['#ffffff'],
    },
    copa: {
        frase: () => 'Hoje é a final da Copa do Mundo! Vai Brasil!',
        varal: { tipo: 'pendurada', cores: [bandeiraBrasil()] },
        particulas: ['bola', 'confete', 'fogos'], cores: ['#009c3b', '#ffdf00', '#002776'],
    },
    orgulho: {
        frase: () => '28 de junho: Dia do Orgulho LGBTQIA+. Amor é amor!',
        varal: { tipo: 'pendurada', cores: Object.values(BANDEIRAS_LGBT).map(listrasBandeira) },
        faixa: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'],
        particulas: ['confete'], cores: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'],
    },
};

// estacao do ano aqui no hemisferio sul
function estacaoDoAno(h) {
    const md = (h.getMonth() + 1) * 100 + h.getDate();
    if (md >= 1221 || md < 320) return ['verao', 'Verão', '21/12 a 19/03'];
    if (md < 621) return ['outono', 'Outono', '20/03 a 20/06'];
    if (md < 922) return ['inverno', 'Inverno', '21/06 a 21/09'];
    return ['primavera', 'Primavera', '22/09 a 20/12'];
}

// varal pendurado em cima da tela
function montarVaral({ tipo, cores, letras }) {
    const largura = window.innerWidth;
    // varal de bandeirinhas penduradas fica bem caido, igual varal de roupa
    const caido = tipo === 'pendurada';
    const vao = caido ? 320 : 260;
    const fundo = caido ? 64 : 30;
    const passo = tipo === 'luz' ? 34 : tipo === 'letra' ? 40 : tipo === 'picado' ? 44 : caido ? 46 : 38;
    const caminho = ['M0,6'];
    for (let x = 0; x < largura + vao; x += vao) caminho.push(`Q${x + vao / 2},${fundo} ${x + vao},6`);
    // espaco vira bandeirinha sem letra, pra separar as palavras
    const texto = letras ? letras + ' ' : '';
    let html = '';
    let k = 0;
    for (let x = 14; x < largura; x += passo, k++) {
        const f = (x % vao) / vao;
        const y = 6 + 2 * (fundo - 6) * f * (1 - f);
        // inclina a peca do jeito que o fio ta descendo/subindo naquele ponto
        const inclinacao = Math.atan(2 * (fundo - 6) * (1 - 2 * f) / vao) * 180 / Math.PI;
        const torto = caido ? inclinacao + ((k * 37) % 9 - 4) : 0;
        const cor = cores[k % cores.length];
        const letra = texto ? texto[k % texto.length] : '';
        html += `<i class="peca-varal ${tipo}" style="left:${x}px;top:${y}px;--cor:${cor};--atraso:${(k % 5) * 0.3}s;--torto:${torto.toFixed(1)}deg">${letra}</i>`;
    }
    return `<svg class="fio-varal" width="${largura}" height="${fundo + 10}" viewBox="0 0 ${largura} ${fundo + 10}"><path d="${caminho.join(' ')}" /></svg>${html}`;
}

// teia de aranha no canto (pra halloween)
function teiaDeAranha(lado) {
    const raios = 7, voltas = 5, r = 110;
    let linhas = '';
    const pontos = [];
    for (let i = 0; i <= raios; i++) {
        const a = (Math.PI / 2) * (i / raios);
        pontos.push([Math.cos(a), Math.sin(a)]);
        linhas += `<line x1="0" y1="0" x2="${Math.cos(a) * r}" y2="${Math.sin(a) * r}" />`;
    }
    for (let v = 1; v <= voltas; v++) {
        const rr = (r * v) / voltas;
        let d = `M${pontos[0][0] * rr},${pontos[0][1] * rr}`;
        for (let i = 1; i < pontos.length; i++) {
            const meio = [(pontos[i - 1][0] + pontos[i][0]) / 2 * rr * 0.86, (pontos[i - 1][1] + pontos[i][1]) / 2 * rr * 0.86];
            d += ` Q${meio[0]},${meio[1]} ${pontos[i][0] * rr},${pontos[i][1] * rr}`;
        }
        linhas += `<path d="${d}" />`;
    }
    return `<svg class="teia ${lado}" width="${r}" height="${r}" viewBox="0 0 ${r} ${r}">${linhas}</svg>`;
}

// coisinhas caindo/voando desenhadas no canvas
const enfeiteAnimado = { pecas: [], faiscas: [], quadro: 0, rodando: false };

function novaPeca(tipo, cores, comecoAleatorio) {
    const L = window.innerWidth, A = window.innerHeight;
    const p = {
        tipo, cor: cores[Math.floor(Math.random() * cores.length)] || '#fff',
        x: Math.random() * L, y: comecoAleatorio ? Math.random() * A : -30,
        tam: 6 + Math.random() * 8, rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.08,
        vy: 0.5 + Math.random() * 1.1, vx: 0, fase: Math.random() * 6.28,
    };
    if (tipo === 'neve') { p.tam = 1.5 + Math.random() * 3.5; p.vy = 0.4 + Math.random() * 0.9; }
    if (tipo === 'balao') { p.tam = 14 + Math.random() * 10; p.vy = -(0.5 + Math.random() * 0.7); p.y = comecoAleatorio ? Math.random() * A : A + 40; }
    if (tipo === 'dino') {
        const sprite = Math.random() < 0.5 ? 'dino' : 'braquio';
        p.desenho = sprite; p.tam = 3 + Math.floor(Math.random() * 2); p.vy = 0;
        p.vx = (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.7);
        p.x = comecoAleatorio ? Math.random() * L : (p.vx > 0 ? -60 : L + 60);
        p.y = A - 34 - DESENHOS_PIXEL[sprite].linhas.length * p.tam - Math.random() * 30;
    }
    if (tipo === 'morcego') { p.tam = 10 + Math.random() * 10; p.vx = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 1.5); p.vy = 0; p.x = comecoAleatorio ? Math.random() * L : (p.vx > 0 ? -30 : L + 30); p.y = 40 + Math.random() * A * 0.6; }
    if (tipo === 'coracao') { p.tam = 8 + Math.random() * 10; }
    if (tipo === 'ovo') { p.tam = 9 + Math.random() * 7; p.vy = 0.5 + Math.random() * 0.6; }
    if (tipo === 'bola') { p.tam = 9 + Math.random() * 6; p.vy = 0.8 + Math.random(); }
    if (tipo === 'serpentina') { p.tam = 18 + Math.random() * 14; p.vy = 0.8 + Math.random() * 0.8; }
    if (tipo === 'raio') { p.tam = 10 + Math.random() * 8; }
    if (tipo === 'estrela') { p.tam = 5 + Math.random() * 6; p.vy = 0.3 + Math.random() * 0.5; p.vr = (Math.random() - 0.5) * 0.02; }
    return p;
}

function desenharPeca(ctx, p, t) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.fillStyle = p.cor;
    ctx.strokeStyle = p.cor;
    const s = p.tam;
    if (p.tipo === 'neve') {
        ctx.globalAlpha = 0.85;
        ctx.beginPath(); ctx.arc(0, 0, s, 0, 6.28); ctx.fill();
    } else if (p.tipo === 'confete') {
        ctx.rotate(p.rot);
        ctx.scale(1, Math.cos(t / 9 + p.fase));
        ctx.fillRect(-s / 2, -s / 4, s, s / 2);
    } else if (p.tipo === 'coracao') {
        ctx.rotate(Math.sin(t / 30 + p.fase) * 0.3);
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.35);
        ctx.bezierCurveTo(-s * 1.1, -s * 0.35, -s * 0.45, -s * 1.05, 0, -s * 0.45);
        ctx.bezierCurveTo(s * 0.45, -s * 1.05, s * 1.1, -s * 0.35, 0, s * 0.35);
        ctx.fill();
    } else if (p.tipo === 'dino') {
        // desenha o sprite de pixel, virado pro lado que ta andando, com pulinho
        const { cores, linhas } = DESENHOS_PIXEL[p.desenho];
        const pulo = Math.abs(Math.sin(t / 8 + p.fase)) * s * 1.5;
        ctx.translate(0, -pulo);
        if (p.vx < 0) ctx.scale(-1, 1);
        linhas.forEach((linha, y) => [...linha].forEach((ch, x) => {
            if (!cores[ch]) return;
            ctx.fillStyle = cores[ch];
            ctx.fillRect((x - linha.length / 2) * s, y * s, s, s);
        }));
    } else if (p.tipo === 'morcego') {
        const bate = Math.sin(t / 4 + p.fase);
        ctx.scale(p.vx < 0 ? -1 : 1, 1);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-s * 0.5, -s * 0.6 * bate, -s * 1.3, -s * 0.5 * bate);
        ctx.quadraticCurveTo(-s, s * 0.05, -s * 0.85, s * 0.25);
        ctx.quadraticCurveTo(-s * 0.55, 0, -s * 0.3, s * 0.3);
        ctx.quadraticCurveTo(0, s * 0.15, s * 0.3, s * 0.3);
        ctx.quadraticCurveTo(s * 0.55, 0, s * 0.85, s * 0.25);
        ctx.quadraticCurveTo(s, s * 0.05, s * 1.3, -s * 0.5 * bate);
        ctx.quadraticCurveTo(s * 0.5, -s * 0.6 * bate, 0, 0);
        ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, s * 0.08, s * 0.2, s * 0.3, 0, 0, 6.28); ctx.fill();
        ctx.fillStyle = '#ffcc33';
        ctx.fillRect(-s * 0.1, -s * 0.05, s * 0.06, s * 0.06); ctx.fillRect(s * 0.05, -s * 0.05, s * 0.06, s * 0.06);
    } else if (p.tipo === 'petala') {
        ctx.rotate(p.rot);
        ctx.globalAlpha = 0.9;
        ctx.beginPath(); ctx.ellipse(0, 0, s * 0.35, s * 0.7, 0, 0, 6.28); ctx.fill();
    } else if (p.tipo === 'ovo') {
        ctx.rotate(Math.sin(t / 25 + p.fase) * 0.4);
        ctx.beginPath(); ctx.ellipse(0, 0, s * 0.72, s, 0, 0, 6.28); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = s * 0.16;
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) ctx.lineTo(-s * 0.68 + i * s * 0.227, (i % 2 ? -s * 0.12 : s * 0.12));
        ctx.stroke();
    } else if (p.tipo === 'balao') {
        ctx.rotate(Math.sin(t / 40 + p.fase) * 0.12);
        ctx.strokeStyle = 'rgba(80,80,80,.6)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, s * 1.1); ctx.quadraticCurveTo(s * 0.3, s * 1.8, 0, s * 2.6); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(0, 0, s * 0.8, s, 0, 0, 6.28); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-s * 0.15, s * 1.15); ctx.lineTo(s * 0.15, s * 1.15); ctx.lineTo(0, s * 0.95); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.45)';
        ctx.beginPath(); ctx.ellipse(-s * 0.3, -s * 0.4, s * 0.16, s * 0.3, -0.5, 0, 6.28); ctx.fill();
    } else if (p.tipo === 'bola') {
        ctx.rotate(p.rot);
        ctx.fillStyle = '#fff'; ctx.strokeStyle = '#222'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(0, 0, s, 0, 6.28); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#222';
        ctx.beginPath();
        for (let i = 0; i < 5; i++) { const a = i * 1.2566 - 1.57; ctx.lineTo(Math.cos(a) * s * 0.38, Math.sin(a) * s * 0.38); }
        ctx.fill();
        for (let i = 0; i < 5; i++) {
            const a = i * 1.2566 - 1.57;
            ctx.beginPath(); ctx.moveTo(Math.cos(a) * s * 0.38, Math.sin(a) * s * 0.38); ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s); ctx.stroke();
        }
    } else if (p.tipo === 'palheta') {
        ctx.rotate(p.rot);
        ctx.beginPath();
        ctx.moveTo(0, s); ctx.quadraticCurveTo(-s, -s * 0.2, -s * 0.5, -s * 0.8); ctx.quadraticCurveTo(0, -s * 1.05, s * 0.5, -s * 0.8);
        ctx.quadraticCurveTo(s, -s * 0.2, 0, s); ctx.fill();
    } else if (p.tipo === 'raio') {
        ctx.rotate(p.rot * 0.2);
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.moveTo(s * 0.2, -s); ctx.lineTo(-s * 0.5, s * 0.1); ctx.lineTo(0, s * 0.1); ctx.lineTo(-s * 0.2, s); ctx.lineTo(s * 0.5, -s * 0.15); ctx.lineTo(0, -s * 0.15); ctx.closePath();
        ctx.fill();
    } else if (p.tipo === 'estrela') {
        ctx.rotate(p.rot);
        ctx.globalAlpha = 0.6 + Math.sin(t / 15 + p.fase) * 0.35;
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
            const r = i % 2 ? s * 0.42 : s;
            ctx.lineTo(Math.cos(i * 0.6283 - 1.5708) * r, Math.sin(i * 0.6283 - 1.5708) * r);
        }
        ctx.fill();
    } else if (p.tipo === 'serpentina') {
        ctx.rotate(p.rot);
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i <= 20; i++) ctx.lineTo(Math.sin(i * 0.9 + t / 10) * s * 0.25, -s / 2 + (i / 20) * s);
        ctx.stroke();
    }
    ctx.restore();
}

// desenhinhos de pixel (cada letra e uma cor; ponto e vazio). "X" pinta a linha com a cor da lista
const DESENHOS_PIXEL = {
    abobora: { cores: { G: '#2e7d32', O: '#ff7518', o: '#c4520b', Y: '#ffe14d' }, linhas: [
        '.....GG.....', '......G.....', '..oOOOOOOo..', '.OOOOOOOOOO.', 'OOYYOOOOYYOO', 'OOYYOOOOYYOO', 'OOOOOOOOOOOO',
        'OYOYOYOYOYOO', 'OOYYYYYYYYOO', '.OOOOOOOOOO.', '..oOOOOOOo..'] },
    arvore: { cores: { Y: '#ffe14d', G: '#1f8a3a', g: '#0f5a24', R: '#ff3b3b', B: '#3d9bff', N: '#7a4a1e' }, linhas: [
        '.....Y.....', '....YYY....', '....GGG....', '...GGRGg...', '..GGGGGGg..', '...GgBGG...', '..GGGGGRGg.',
        '.GgGGGGGGGg', 'GGRGGgGBGGG', '....NNN....', '....NNN....'] },
    coracao: { cores: { R: '#ff2e63', r: '#c2185b', W: '#ffffff' }, linhas: [
        '.RRR...RRR.', 'RWRRR.RRRRr', 'RWRRRRRRRRr', 'RRRRRRRRRRr', '.RRRRRRRRr.', '..RRRRRRr..', '...RRRRr...', '....RRr....', '.....r.....'] },
    bolo: { cores: { Y: '#ffd23f', R: '#ff3b6b', W: '#ffffff', P: '#ff8fc7', p: '#e0569b', C: '#b0b0b0' }, linhas: [
        '..Y..Y..Y..', '..R..R..R..', '..R..R..R..', '.WWWWWWWWW.', '.PWPPWPPWP.', '.PPPPPPPPP.', '.ppppppppp.',
        '.WWWWWWWWW.', '.PPPPPPPPP.', 'CCCCCCCCCCC'] },
    ovo: { cores: { P: '#ffb3c6', Y: '#ffe066', B: '#a2d2ff', W: '#ffffff' }, linhas: [
        '...PPP...', '..PPPPP..', '.PWPPPPP.', '.YYYYYYY.', 'YBYBYBYBY', 'YYYYYYYYY', 'BBBBBBBBB', '.BBWBBBB.', '..BBBBB..'] },
    estrela: { cores: { Y: '#ffd700', y: '#d49b00', W: '#ffffff' }, linhas: [
        '....Y....', '....Y....', '...YWY...', 'YYYYYYYYY', '.YYYYYYy.', '..YYYYy..', '..YYyYy..', '.YYy.yYy.', '.Yy...yY.'] },
    bola: { cores: { W: '#ffffff', K: '#1a1a1a', G: '#c0c0c0' }, linhas: [
        '...KKKK...', '..WWKKWW..', '.WWWKKWWW.', 'KWWWWWWWWK', 'KKWWKKWWKK', 'KKWKKKKWKK', 'WWWWKKWWWW', '.WKWWWWKW.', '..GKWWKG..', '...KKKK...'] },
    mascara: { cores: { P: '#b14dff', K: '#1a1a1a', Y: '#ffd60a', G: '#00c2ff' }, linhas: [
        'Y.G.....G.Y', '.Y.G...G.Y.', 'PPPPPPPPPPP', 'PPKKKPKKKPP', 'PPKKKPKKKPP', '.PPPP.PPPP.', '..PP...PP..'] },
    caveira: { cores: { W: '#ffffff', K: '#1a1a1a', P: '#ff3d8b', O: '#ff8c00', G: '#1abc9c' }, linhas: [
        '..WWWWWW..', '.WWOWWOWW.', 'WWPPWWPPWW', 'WPKKPPKKPW', 'WWPPWWPPWW', 'WWWWKKWWWW', '.WGWWWWGW.', '..WKWKWK..', '..WWWWWW..'] },
    raio: { cores: { Y: '#ffcc00', K: '#1a1a1a' }, linhas: [
        '....KYYY', '...KYYYK', '..KYYYK.', '.KYYYYYK', '...KYYK.', '..KYYK..', '.KYYK...', 'KYYK....', 'YK......'] },
    // t-rex de festa (olhando pra direita)
    dino: { cores: { G: '#5cb85c', g: '#3e8e41', K: '#1a1a1a', W: '#ffffff', R: '#ff5e78', Y: '#ffd23f', B: '#ffe9a8' }, linhas: [
        '.........Y....', '........RRR...', '.......RYRYR..', '......GGGGGGG.', '......GKGGGGGG', '......GGGGGGGG',
        '......GGGGWW..', '......GGGGGGG.', 'g....GGGBGG...', 'gg..GGGBBGGGG.', 'gGGGGGGBBGgG..', '.gGGGGGBBGG...',
        '..gGGGGGGG....', '...GG..GG.....', '...Gg...Gg....'] },
    // dino pescocudo
    braquio: { cores: { G: '#9b6bdc', g: '#7346b8', K: '#1a1a1a', P: '#ffb3d1' }, linhas: [
        '..........GGG.', '.........GKGGG', '.........GGGG.', '.........GG...', '........GG....', '........GG....',
        '.......GG.....', '..PGPGPGG.....', '.GGGGGGGGG....', 'GGGGGGGGGGG...', 'G.GGGGGGGGG...', '..gG.gG.gG....',
        '..gG.gG.gG....'] },
    coelho: { cores: { W: '#ffffff', P: '#ffb3c6', K: '#333333', G: '#d9d9d9' }, linhas: [
        '..W....W...', '.WPW..WPW..', '.WPW..WPW..', '.WPW..WPW..', '..WW..WW...', '.WWWWWWWW..', 'WWKWWWWKWW.',
        'WWWWPPWWWW.', 'WGWWWWWWGW.', '.WWWWWWWW..', '..WW..WW...'] },
    taca: { cores: { Y: '#ffd700', y: '#c99a00', W: '#fff6b0', G: '#0f8a35' }, linhas: [
        'yYYYYYYYYYy', 'Y.YWYYYYY.Y', 'Y.YWYYYYY.Y', '.YYWYYYYYy.', '..YYYYYYy..', '...YYYYy...', '....YYy....',
        '.....Y.....', '....YYy....', '...GGGGG...', '...GGGGG...'] },
    guitarra: { cores: { R: '#cc0000', r: '#8a0000', K: '#111111', W: '#dddddd', Y: '#ffcc00' }, linhas: [
        '..........KK', '.........KKK', '........KW..', '.......KW...', '......KW....', '..RR.KW.....', '.RRRRW......',
        'RRRRRRY.....', 'RRRKRRRr....', '.RRRRRRr....', '..RRRRr.....', '...Rrr......'] },
    bandeira: { cores: {}, linhas: [
        '.XX...XX.', 'XXXX.XXXX', 'XXXXXXXXX', 'XXXXXXXXX', '.XXXXXXX.', '..XXXXX..', '...XXX...', '....X....'] },
};

// quais desenhinhos e textos cada data usa
const ENFEITES_TEMA = {
    aniversario: { sprites: ['dino', 'bolo', 'braquio'], titulo: 'FELIZ DIA DO BOLINHO!!!', sub: 'deixa um recadinho de parabéns pro lucas' },
    anonovo: { sprites: ['estrela'], titulo: 'FELIZ ANO NOVO!!!', sub: '3... 2... 1... feliz ano novo' },
    namorados: { sprites: ['coracao'], titulo: 'FELIZ DIA DOS NAMORADOS', sub: 'amor de internet também conta' },
    trans: { sprites: ['bandeira'], linhasBandeira: ['#5bcefa', '#f5a9b8', '#ffffff', '#f5a9b8', '#5bcefa', '#f5a9b8', '#ffffff', '#5bcefa'], titulo: 'VISIBILIDADE TRANS', sub: 'existir é resistir' },
    consciencia: { sprites: ['bandeira', 'estrela'], linhasBandeira: ['#c8102e', '#c8102e', '#f4c400', '#f4c400', '#138a36', '#138a36', '#111111', '#111111'], titulo: 'DIA DA CONSCIÊNCIA NEGRA', sub: 'zumbi dos palmares vive' },
    rock: { sprites: ['guitarra', 'raio'], titulo: 'DIA DO ROCK \\m/', sub: 'aumenta o som!!!' },
    independencia: { sprites: ['estrela', 'estrela'], titulo: 'INDEPENDÊNCIA DO BRASIL', sub: 'brasil brasil brasil' },
    muertos: { sprites: ['caveira'], titulo: 'DÍA DE LOS MUERTOS', sub: 'saudade de quem já se foi' },
    halloween: { sprites: ['abobora'], titulo: 'FELIZ HALLOWEEN!!!', sub: 'doces ou travessuras?' },
    pascoa: { sprites: ['coelho', 'ovo'], titulo: 'FELIZ PÁSCOA!!!', sub: 'cadê meu chocolate???' },
    carnaval: { sprites: ['mascara'], titulo: 'É CARNAVAL!!!', sub: 'bora pro bloco' },
    natal: { sprites: ['arvore', 'estrela'], titulo: 'FELIZ NATAL!!!', sub: 'ho ho ho! deixa um recado pro papai noel' },
    copa: { sprites: ['taca', 'bola'], titulo: 'VAI BRASIL!!!', sub: 'é hexa!!! (por favor)' },
    orgulho: { sprites: ['bandeira'], linhasBandeira: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787', '#750787', '#e40303'], titulo: 'ORGULHO LGBTQIA+', sub: 'amor é amor' },
};

// monta o desenho de pixel em svg
function spriteSVG(nome, px, linhasBandeira) {
    const { cores, linhas } = DESENHOS_PIXEL[nome];
    let rects = '';
    linhas.forEach((linha, y) => [...linha].forEach((ch, x) => {
        const cor = ch === 'X' ? (linhasBandeira || ['#ff2e63'])[y % (linhasBandeira || ['#ff2e63']).length] : cores[ch];
        if (cor) rects += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${cor}"/>`;
    }));
    const w = linhas[0].length, h = linhas.length;
    return `<svg xmlns="http://www.w3.org/2000/svg" class="pixel" width="${w * px}" height="${h * px}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${rects}</svg>`;
}

// azulejo pro papel de parede (desenhinho repetido, igual site antigo)
function azulejoSprite(nome, linhasBandeira) {
    const sprite = spriteSVG(nome, 3, linhasBandeira).replace('class="pixel" ', '');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110"><g opacity=".5">${sprite.replace('<svg', '<svg x="8" y="8"')}${sprite.replace('<svg', '<svg x="63" y="60"')}</g></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// faixa grandona em cima da pagina (tipo wordart)
// gifs antigos de cada data (imagens/gifs/temas/<tema>-N.gif)
const GIFS_TEMA = {
    halloween: 8, natal: 8, aniversario: 8, pascoa: 4, anonovo: 4, independencia: 3, copa: 4, rock: 5,
    namorados: 6, carnaval: 4, orgulho: 5, trans: 2, consciencia: 3, muertos: 3,
};

function gifsDoTema(nome) {
    return Array.from({ length: GIFS_TEMA[nome] || 0 }, (_, i) => `imagens/gifs/temas/${nome}-${i + 1}.gif`);
}

// caixinha cheia de gifs da data, embaixo do menu (igual site antigo)
function caixaGifsData(nome) {
    const gifs = gifsDoTema(nome);
    if (!gifs.length) return '';
    return `<div class="caixa gifs-data" aria-hidden="true"><h3>enfeites do dia</h3><div class="lista-gifs-data">${gifs.map(g => `<img src="${g}" alt="" loading="lazy">`).join('')}</div></div>`;
}

function faixaComemorativa(nome) {
    const e = ENFEITES_TEMA[nome];
    const desenho = spriteSVG(e.sprites[0], 5, e.linhasBandeira);
    // cada palavra fica inteira (so quebra linha entre palavras)
    let k = 0;
    const letras = e.titulo.split(' ').map(palavra => `<span class="palavra">${[...palavra].map(l => `<span style="animation-delay:${(k++ % 10) * 0.1}s">${esc(l)}</span>`).join('')}</span>`).join(' ');
    const gifs = gifsDoTema(nome);
    const gifLado = g => g ? `<img class="gif-faixa" src="${g}" alt="">` : '';
    return `<div class="faixa-comemorativa" aria-hidden="true">
        ${gifLado(gifs[0])}
        <span class="lado-faixa">${desenho}</span>
        <div class="miolo-faixa">
            <div class="wordart">${letras}</div>
            <div class="sub-faixa"><span class="piscar">★</span> ${esc(e.sub)} <span class="piscar">★</span></div>
        </div>
        <span class="lado-faixa espelho">${spriteSVG(e.sprites[e.sprites.length - 1], 5, e.linhasBandeira)}</span>
        ${gifLado(gifs[1])}
    </div>`;
}

// coisinhas caindo + rastro de brilho atras do mouse (canvas pequeno esticado = pixelado)
const ESCALA_PIXEL = 2;

function animarEnfeites(canvas, tipos, cores) {
    const ctx = canvas.getContext('2d');
    const meu = ++enfeiteAnimado.rodada;
    const movimentos = tipos.filter(tp => tp !== 'fogos');
    const fogos = tipos.includes('fogos');
    const quantos = movimentos.length ? Math.round((window.innerWidth < 700 ? 18 : 34) / Math.max(1, movimentos.length * 0.8)) : 0;
    enfeiteAnimado.pecas = [];
    enfeiteAnimado.faiscas = [];
    enfeiteAnimado.rastro = [];
    movimentos.forEach(tp => {
        const n = tp === 'morcego' ? Math.ceil(quantos / 2.5) : tp === 'balao' ? Math.ceil(quantos / 2) : tp === 'raio' ? 4 : tp === 'dino' ? 4 : quantos;
        for (let i = 0; i < n; i++) enfeiteAnimado.pecas.push(novaPeca(tp, cores, true));
    });
    const ajustar = () => {
        canvas.width = Math.ceil(window.innerWidth / ESCALA_PIXEL);
        canvas.height = Math.ceil(window.innerHeight / ESCALA_PIXEL);
    };
    ajustar();
    enfeiteAnimado.ajustar = ajustar;
    let t = 0;
    const passo = () => {
        if (meu !== enfeiteAnimado.rodada) return;
        if (!document.hidden) {
            t++;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.setTransform(1 / ESCALA_PIXEL, 0, 0, 1 / ESCALA_PIXEL, 0, 0);
            const A = window.innerHeight, L = window.innerWidth;
            enfeiteAnimado.pecas.forEach((p, i) => {
                if (p.tipo === 'morcego') { p.x += p.vx; p.y += Math.sin(t / 20 + p.fase) * 0.6; }
                else if (p.tipo === 'dino') { p.x += p.vx; }
                else { p.y += p.vy; p.x += Math.sin(t / 50 + p.fase) * 0.5 + p.vx; p.rot += p.vr; }
                const saiu = (p.tipo === 'morcego' || p.tipo === 'dino') ? (p.x < -70 || p.x > L + 70) : p.tipo === 'balao' ? p.y < -80 : p.y > A + 40;
                if (saiu) enfeiteAnimado.pecas[i] = novaPeca(p.tipo, cores, false);
                desenharPeca(ctx, p, t);
            });
            // fogos de artificio: estouram de vez em quando
            if (fogos) {
                if (t % 70 === 0) {
                    const cx = L * (0.15 + Math.random() * 0.7), cy = A * (0.12 + Math.random() * 0.3);
                    const cor = cores[Math.floor(Math.random() * cores.length)];
                    for (let i = 0; i < 36; i++) {
                        const ang = (i / 36) * 6.28, v = 1.5 + Math.random() * 2.2;
                        enfeiteAnimado.faiscas.push({ x: cx, y: cy, vx: Math.cos(ang) * v, vy: Math.sin(ang) * v, vida: 60, cor });
                    }
                }
                enfeiteAnimado.faiscas = enfeiteAnimado.faiscas.filter(f => f.vida > 0);
                enfeiteAnimado.faiscas.forEach(f => {
                    f.x += f.vx; f.y += f.vy; f.vy += 0.04; f.vx *= 0.985; f.vida--;
                    ctx.globalAlpha = f.vida / 60;
                    ctx.fillStyle = f.cor;
                    ctx.fillRect(f.x - 2, f.y - 2, 4, 4);
                });
                ctx.globalAlpha = 1;
            }
            // brilhinho atras do mouse
            enfeiteAnimado.rastro = enfeiteAnimado.rastro.filter(b => b.vida > 0);
            enfeiteAnimado.rastro.forEach(b => {
                b.vida--; b.y += 0.6;
                ctx.globalAlpha = b.vida / 28;
                ctx.fillStyle = b.cor;
                const r = b.vida > 14 ? 6 : 4;
                ctx.fillRect(b.x - 1, b.y - r, 2, r * 2);
                ctx.fillRect(b.x - r, b.y - 1, r * 2, 2);
            });
            ctx.globalAlpha = 1;
        }
        requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
    enfeiteAnimado.cores = cores;
}

enfeiteAnimado.rodada = 0;
window.addEventListener('resize', () => enfeiteAnimado.ajustar?.());
document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || !enfeiteAnimado.cores || !document.querySelector('.chuva-data')) return;
    if (Math.random() < 0.45) return;
    const cores = enfeiteAnimado.cores.length ? enfeiteAnimado.cores : ['#ffffff'];
    enfeiteAnimado.rastro.push({ x: e.clientX + (Math.random() - 0.5) * 10, y: e.clientY + (Math.random() - 0.5) * 10, vida: 28, cor: cores[Math.floor(Math.random() * cores.length)] });
    if (enfeiteAnimado.rastro.length > 60) enfeiteAnimado.rastro.shift();
});

// o que ta enfeitando agora (pra trocar sozinho quando muda o dia)
const datasAgora = { tema: undefined, estacao: null, letreiroBase: null, largura: 0 };

function tirarEnfeites() {
    document.body.className = document.body.className.replace(/\btema-\S+/g, '').trim();
    document.body.style.removeProperty('--t-tile');
    document.body.style.removeProperty('--t-tile-fundo');
    $$('.enfeites-data, .chuva-data, .faixa-comemorativa, .gifs-data').forEach(el => el.remove());
    enfeiteAnimado.rodada++;
    enfeiteAnimado.cores = null;
}

function botarEnfeites(nome, hoje) {
    const tema = TEMAS[nome];
    const extras = ENFEITES_TEMA[nome];
    document.body.classList.add(`tema-${nome}`);
    document.body.style.setProperty('--t-tile', azulejoSprite(extras.sprites[0], extras.linhasBandeira));
    // datas com papel de parede especial nao ganham desenhinho repetido por cima da foto
    if (!FUNDOS_DATA[nome]) document.body.style.setProperty('--t-tile-fundo', azulejoSprite(extras.sprites[0], extras.linhasBandeira));
    const enfeites = document.createElement('div');
    enfeites.className = 'enfeites-data';
    enfeites.setAttribute('aria-hidden', 'true');
    const faixa = tema.faixa;
    enfeites.innerHTML = (faixa ? `<i class="faixa-data" style="background:linear-gradient(90deg,${faixa.map((c, i) => `${c} ${i / faixa.length * 100}% ${(i + 1) / faixa.length * 100}%`).join(',')})"></i>` : '')
        + `<div class="varal ${tema.varal.tipo === 'pendurada' ? 'pendurado' : ''}">${montarVaral(tema.varal)}</div>`
        + (tema.teias ? teiaDeAranha('esquerda') + teiaDeAranha('direita') + '<i class="aranha"></i>' : '');
    document.body.append(enfeites);
    datasAgora.largura = window.innerWidth;
    $('.letreiro')?.insertAdjacentHTML('afterend', faixaComemorativa(nome));
    $('.menuperfil')?.insertAdjacentHTML('afterend', caixaGifsData(nome));
    if (tema.particulas.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const canvas = document.createElement('canvas');
        canvas.className = 'chuva-data';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.append(canvas);
        animarEnfeites(canvas, tema.particulas, tema.cores);
    }
}

// ve qual e a data de hoje e enfeita (roda de minuto em minuto, entao troca sozinho a meia-noite)
// da pra testar com ?tema=halloween no endereco
function decorarDatas() {
    const hoje = new Date();
    const pedido = new URLSearchParams(location.search).get('tema');
    const nome = TEMAS[pedido] ? pedido : (DATAS_TEMA.find(d => d.quando(hoje))?.tema || null);
    const [estacao, nomeEstacao, periodo] = estacaoDoAno(hoje);
    const letreiro = $('.letreiro marquee');
    if (datasAgora.letreiroBase === null) datasAgora.letreiroBase = letreiro?.textContent || '';
    // cor do winamp muda de dia da semana a meia-noite tambem
    if (nome === datasAgora.tema && estacao === datasAgora.estacao) return corWinamp();

    // estacao do ano na bandeja do lado do relogio
    const bandeja = $('#estacao');
    // so o simbolo da estacao (o nome aparece passando o mouse)
    bandeja.innerHTML = `<i class="icone-estacao ${estacao}" role="img" aria-label="${nomeEstacao}"></i>`;
    bandeja.title = `Estamos ${estacao === 'primavera' ? 'na' : 'no'} ${nomeEstacao.toLowerCase()} (${periodo})`;

    // a frase da data entra no comeco do letreiro (a estacao fica so la embaixo, do lado do relogio)
    if (letreiro) letreiro.textContent = nome ? `★ ${TEMAS[nome].frase(hoje)} ${datasAgora.letreiroBase}` : datasAgora.letreiroBase;

    const mudouTema = nome !== datasAgora.tema;
    datasAgora.tema = nome;
    datasAgora.estacao = estacao;
    if (mudouTema) {
        tirarEnfeites();
        if (nome) botarEnfeites(nome, hoje);
        // papel de parede do tema (no halloween entram os fundos de halloween)
        aplicarFundo(fundoEscolhido());
        if (!$('#fundos')?.hidden) montarFundos();
        corWinamp();
    }
}

window.addEventListener('resize', () => {
    const varal = $('.enfeites-data .varal');
    if (!varal || !datasAgora.tema || Math.abs(window.innerWidth - datasAgora.largura) < 40) return;
    datasAgora.largura = window.innerWidth;
    varal.innerHTML = montarVaral(TEMAS[datasAgora.tema].varal);
});
setInterval(decorarDatas, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) decorarDatas(); });


// --- relogio e inicio ---

function relogio() {
    $('#relogio').textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// --- jujuba, a agua-viva assistente (igual ao clippy do office, so que molhada) ---

const FALAS_ASSISTENTE = {
    oi: 'Oi! Eu sou a Jujuba, a água-viva assistente do Quarto do Lucas. Parece que você está tentando navegar no site. Quer ajuda?',
    sim: 'Ótimo! Com o que você precisa de ajuda? Escolhe uma pergunta ou escreve a sua:',
    nao: 'Tudo bem... vou ficar aqui flutuando, caso você mude de ideia. :(',
    soltas: [
        'Dica: pra ler um texto, comece pela primeira palavra.',
        'Você sabia? Clicando num link, ele te leva pra outro lugar. A tecnologia é incrível.',
        'Parece que você está mexendo o mouse. Quer que eu mexa por você?',
        'Fato: água-viva não tem cérebro. Mesmo assim eu sei mais de internet que muita gente. ;)',
        'Eu sou 95% água e 5% vontade de ajudar.',
        'Lembrete: beba água. Eu bebo o tempo todo, eu moro nela.',
        'Qual é o peixe que caiu do décimo andar? Aaaaaatum! :P',
        'O que o tubarão falou pra água-viva? "Você é gelatina demais pra mim." Até hoje eu choro.',
        'Se o site travar, desligue e ligue de novo. Funciona com tudo, menos comigo.',
        'Dica de segurança: nunca conte sua senha pra ninguém. Nem pra mim. Principalmente pra mim.',
        'Você está navegando há um tempão! Quer que eu chame sua mãe pra desligar o computador?',
        'Este site é melhor visualizado em 800x600 no Internet Explorer 6. Brincadeira... ou não.',
        'Se você ouvir um barulho de modem discado, não se assuste: sou eu respirando.',
        'Quer ver uma mágica? Aperte F5. Pronto, a página sumiu e voltou!',
        'Já deixou seu recado hoje? O Lucas fica feliz. Eu também, mas eu nem tenho coração.',
        'Pode me arrastar pela tela, eu não queimo. Quase nunca.',
        'Parece que você está lendo isso. Quer ajuda pra continuar lendo?',
        'Você sabia que tem uma área secreta nesse site? Eu sei a senha, mas não conto. :x',
        'Psiu! O Zap do Lucas tem o botão "chamar a atenção". Use com moderação. Ou não.',
        'Se eu fosse você, eu clicava em tudo. Mas eu sou uma água-viva, então não me escute.',
    ],
    paginas: {
        inicio: 'Parece que você chegou na página inicial. Quer que eu leia ela em voz alta? (eu não tenho boca)',
        perfil: 'Parece que você está tentando conhecer o Lucas melhor. Pode fuçar, eu deixo.',
        sobre: 'Parece que você está tentando conhecer o Lucas melhor. Pode fuçar, eu deixo.',
        recados: 'Parece que você está tentando deixar um recado. Quer ajuda pra escrever "passando pra deixar um beijo"?',
        depoimentos: 'Escrever depoimento é coisa séria. Dica: elogie bastante, o Lucas adora. (L)',
        albuns: 'Parece que você está vendo fotos. Quer que eu faça cara de surpresa? :O',
        album: 'Que foto bonita! Eu falo isso de todas, mas dessa vez é sério.',
        photodump: 'Photodump! Antigamente a gente revelava foto na farmácia e esperava uma semana, sabia?',
        diario: 'Diário dos outros a gente não lê! ...tá bom, só um pouquinho.',
        playlist: 'Parece que você gosta de música. Eu só escuto o som do mar. É meio repetitivo.',
        amigos: 'Quer virar amigo do Lucas? Se cadastra lá, que eu prometo não contar pra ninguém.',
        comunidades: '"Eu odeio acordar cedo" é minha comunidade favorita.',
        tv: 'Hora da Sessão da TV! Arraste pro lado pra mudar de canal. Eu prefiro documentário do fundo do mar.',
        avaliacoes: 'Parece que você está avaliando coisas. Me dá 5 estrelas também?',
        projetos: 'Projetos do Lucas! Eu também tenho um projeto: flutuar.',
        redes: 'Redes sociais! Eu só conheço a rede de pesca. Péssima, prende todo mundo.',
        busca: 'Procurando alguma coisa? Eu procuraria debaixo do sofá.',
    },
    janelas: {
        paint: 'Parece que você está tentando desenhar. Quer uma dica? Desenhe uma água-viva. Fica lindo.',
        msn: 'Parece que você está tentando conversar. Cuidado com o "chamar a atenção", treme tudo! Até eu.',
        calculadora: 'Calculadora! 2 + 2 = 4. Viu? Nem precisava ter aberto.',
        fazenda: 'Uma fazenda! Eu não posso entrar, lá não tem mar. Planta umas cenouras por mim.',
        notas: 'Bloco de notas aberto. Anota aí: "a Jujuba é a melhor assistente do mundo".',
        minado: 'Campo Tekisminado! Dica de especialista: não clique nas minas. De nada.',
        lixeira: 'Mexendo no lixo? Eu não julgo. Eu moro no oceano, já vi coisa pior.',
        fundos: 'Trocando o papel de parede? Tem algum do fundo do mar? Não? Que pena.',
        semInternet: 'A internet caiu! Calma, não fui eu que mordi o fio. Joga o dinossauro enquanto isso.',
    },
};


// perguntas que a jujuba sabe responder (o menu "obter ajuda" e a caixinha de pesquisa usam essa lista)
const PIADAS_JUJUBA = [
    'Por que o computador foi ao médico? Porque ele tava com vírus! :P',
    'Qual é o peixe que caiu do décimo andar? Aaaaaatum!',
    'Por que a água-viva não joga pôquer? Porque todo mundo enxerga através dela. :(',
    'O que o zero falou pro oito? Que cinto bonito!',
    'Por que o livro de matemática tava triste? Porque tinha muitos problemas.',
    'Como o mouse se despede? Com um clique de tchau. ;)',
    'Por que o polvo atravessou o mar? Pra chegar do outro lado. Ok, essa foi ruim até pra mim.',
    'Qual é o contrário de volátil? Vem cá, sobrinho!',
];

const AJUDA_JUJUBA = [
    { id: 'recado', pergunta: 'Como deixo um recado?', chaves: 'recado recados mensagem livro visitas escrever deixar assinar',
        resposta: 'É fácil! Vai em Recados, escreve seu nome e a mensagem e manda. Todo mundo que visita vê. Dá pra usar [b]negrito[/b] e carinhas tipo :)', ir: { rota: 'recados' } },
    { id: 'zap', pergunta: 'Como converso no Zap?', chaves: 'zap msn conversa conversar bate papo chat falar mensagem atencao',
        resposta: 'Abre o Zap do Lucas, escolhe um nome e manda mensagem. É um bate-papo aberto com todo mundo do site. O "Chamar a atenção" faz a tela de todo mundo tremer!', ir: { janela: 'msn' } },
    { id: 'paint', pergunta: 'Como desenho e mando pro Lucas?', chaves: 'paint desenho desenhar pintar mandar enviar arte mural',
        resposta: 'Abre o Paint, desenha o que quiser e toca no envelope pra enviar. Se o Lucas aprovar, seu desenho vai pro mural de recados!', ir: { janela: 'paint' } },
    { id: 'fotos', pergunta: 'Onde vejo as fotos?', chaves: 'foto fotos album albuns photodump imagem galeria camera',
        resposta: 'Nos Álbuns tem as fotos separadinhas, e no Photodump tem tudo misturado. Clica numa foto pra ver ela grande.', ir: { rota: 'albuns' } },
    { id: 'amigos', pergunta: 'Como entro pros amigos do Lucas?', chaves: 'amigo amigos adicionar add entrar contato contatos lista',
        resposta: 'Vai em Amigos, escolhe uma foto sua e coloca seu nome. Pronto, você aparece na lista de amigos dele!', ir: { rota: 'amigos' } },
    { id: 'depoimento', pergunta: 'Como escrevo um depoimento?', chaves: 'depoimento depoimentos elogio escrever sobre',
        resposta: 'Em Depoimentos você escreve o que acha do Lucas. Só ele lê, então pode caprichar no elogio. (L)', ir: { rota: 'depoimentos' } },
    { id: 'tv', pergunta: 'Como funciona a Sessão da TV?', chaves: 'tv televisao canal canais desenho filme assistir video sessao',
        resposta: 'Tem desenho e filme passando "ao vivo". Arrasta pro lado em cima da TV (ou usa as setinhas) pra mudar de canal, e aperta "ligar o som".', ir: { rota: 'tv' } },
    { id: 'musica', pergunta: 'Que música o Lucas tá ouvindo?', chaves: 'musica musicas ouvindo spotify playlist som cancao tocando',
        resposta: () => {
            const f = ouvindo.faixas?.[0];
            return f ? `${f.agora ? 'Agora mesmo' : 'Por último'} o Lucas ${f.agora ? 'tá ouvindo' : 'ouviu'} "${f.titulo}", de ${f.artista}. Bom gosto, né?` : 'Dá uma olhada na Playlist, tem as músicas favoritas dele lá!';
        }, ir: { rota: 'playlist' } },
    { id: 'minado', pergunta: 'Como joga o Campo Tekisminado?', chaves: 'campo minado mina minas tekisminado bomba bandeira jogo',
        resposta: 'Clica nos quadradinhos pra abrir. O número diz quantas minas tem em volta, e o botão direito (ou segurar o dedo) põe bandeira. O primeiro clique nunca explode!', ir: { janela: 'minado' } },
    { id: 'fazenda', pergunta: 'Como jogo a Fazenda?', chaves: 'fazenda jogo jogar plantar colher bichos medalha game',
        resposta: 'Abre a Fazenda do Lucas e clica em Jogar. Planta, colhe, cuida dos bichos e cumpre as metas pra ganhar medalhas!', ir: { janela: 'fazenda' } },
    { id: 'dino', pergunta: 'Tem algum jogo escondido?', chaves: 'escondido segredo dinossauro dino jogo internet offline',
        resposta: 'Psiu... se a internet cair aparece o jogo do dinossauro de óculos. E dá pra "desligar" a internet no ícone perto do relógio. Eu não te contei nada.', ir: { comando: 'internet', texto: 'Desligar a internet' } },
    { id: 'segredo', pergunta: 'Tem área secreta?', chaves: 'secreta secreto senha calculadora escondida misterio',
        resposta: 'Dizem que quem digita a senha certa na Calculadora descobre uma coisa... mas eu não falei nada. :x', ir: { janela: 'calculadora' } },
    { id: 'papel', pergunta: 'Como troco o papel de parede?', chaves: 'papel parede fundo wallpaper cor tela',
        resposta: () => cel.ativo ? 'No modo celular o fundo é o dente-de-leão. No computador dá pra trocar em Ferramentas > Trocar papel de parede.' : 'Vai em Ferramentas > Trocar papel de parede, ou abre o ícone "Papel de parede" na área de trabalho.',
        ir: { janela: 'fundos', soPc: true } },
    { id: 'celular', pergunta: 'Tem versão de celular?', chaves: 'celular telefone mobile android modo pc computador',
        resposta: () => cel.ativo ? 'Você já tá nela! Pra voltar pro computador, vai em Configurações > Interface de computador.' : 'Tem! Em tela de toque aparece o "Modo celular" no menu Iniciar. Fica igualzinho um celular antigo.',
        ir: { comando: 'modo-celular', texto: 'Abrir o modo celular', soToque: true } },
    { id: 'lucas', pergunta: 'Quem é o Lucas?', chaves: 'lucas quem dono sobre perfil ele idade',
        resposta: () => `Ele é o dono desse quarto! ${DADOS.sobre?.[0] ? DADOS.sobre[0].slice(0, 140) + (DADOS.sobre[0].length > 140 ? '...' : '') : ''}`, ir: { rota: 'sobre' } },
    { id: 'piada', pergunta: 'Me conta uma piada', chaves: 'piada piadas rir engracado graca humor',
        resposta: () => sorteio(PIADAS_JUJUBA), maisUma: true },
    { id: 'dica', pergunta: 'Me dá uma dica', chaves: 'dica dicas conselho',
        resposta: () => sorteio(FALAS_ASSISTENTE.soltas), maisUma: true },
    { id: 'jujuba', pergunta: 'Quem é você?', chaves: 'voce jujuba agua viva assistente clippy quem',
        resposta: 'Eu sou a Jujuba, uma água-viva que mora no seu navegador. Gosto de dar dicas, contar piada ruim e flutuar. Sou parente distante do clipe do Office.' },
    { id: 'sumir', pergunta: 'Como faço você sumir?', chaves: 'sumir esconder fechar desligar sai embora chata',
        resposta: 'Que grosseria! Mas tudo bem, é só tocar em "esconder a Jujuba". Pra me chamar de volta: menu Iniciar > Jujuba. :(', ir: { comando: 'esconder', texto: 'Esconder a Jujuba' } },
];

function respostaAjuda(item) {
    return typeof item.resposta === 'function' ? item.resposta() : item.resposta;
}

// o menu de ajuda: perguntas prontas e uma caixinha pra digitar
function menuAjudaJujuba(texto = 'O que você gostaria de saber? Escolhe uma pergunta ou escreve a sua:') {
    assistenteFalar(texto, [], { menu: true });
    animarJujuba('pensar', 1600);
}

function responderAjuda(id) {
    const item = AJUDA_JUJUBA.find(a => a.id === id);
    if (!item) return;
    const botoes = [];
    const ir = item.ir;
    const podeIr = ir && !(ir.soPc && cel.ativo) && !(ir.soToque && (cel.ativo || !celularPossivel()));
    if (podeIr) botoes.push({ texto: ir.texto || 'Me leva lá', acao: 'ir:' + item.id });
    if (item.maisUma) botoes.push({ texto: 'Outra!', acao: 'topico:' + item.id });
    botoes.push({ texto: 'Outra pergunta', acao: 'ajuda' });
    assistenteFalar(respostaAjuda(item), botoes);
}

function irAjuda(id) {
    const ir = AJUDA_JUJUBA.find(a => a.id === id)?.ir;
    if (!ir) return;
    $('#balao-assistente').hidden = true;
    if (ir.rota) {
        const app = cel.ativo && APPS_CEL.find(a => a.rota === ir.rota);
        if (app) abrirAppCel(app.id);
        else location.hash = '#' + ir.rota;
    }
    if (ir.janela) abrirJanela(ir.janela);
    if (ir.comando === 'internet') alternarInternet();
    if (ir.comando === 'modo-celular') entrarModoCelular(true);
    if (ir.comando === 'esconder') esconderAssistente();
}

// palavras que nao ajudam a achar nada
const PALAVRAS_VAZIAS = new Set('como onde quando qual quais que quem pra para por com sem uma umas uns dos das nos nas pelo pela isso esse essa este esta aqui ali voce vc eu meu minha seu sua tem ter faz fazer faco consigo posso pode quero queria gostaria preciso saber ajuda ajudar site lucas jujuba favor obrigado oi ola tudo bem entao ai'.split(' '));
// jeitos diferentes de falar a mesma coisa
const SINONIMOS_JUJUBA = {
    recado: 'recado mensagem scrap comentario comentar livro visita assinar', zap: 'zap msn chat conversa conversar papo falar whatsapp',
    paint: 'paint desenho desenhar pintar arte rabisco', fotos: 'foto fotos imagem imagens album galeria photodump selfie',
    amigos: 'amigo amigos amizade adicionar add seguir contato', depoimento: 'depoimento elogio testemunho',
    tv: 'tv televisao canal desenho filme video assistir youtube', musica: 'musica musicas som cancao spotify playlist ouvir ouvindo',
    fazenda: 'fazenda jogo jogar plantar colheita bicho galinha vaca', dino: 'dino dinossauro escondido offline internet caiu',
    segredo: 'secreto secreta senha calculadora segredo', papel: 'papel parede fundo wallpaper tema',
    celular: 'celular telefone mobile android tela toque', lucas: 'lucas dono quem idade aniversario',
    piada: 'piada piadas rir engracado graca', dica: 'dica dicas conselho', jujuba: 'voce jujuba agua viva assistente clippy',
    sumir: 'sumir esconder sair fechar embora chata desligar',
};

function distanciaPalavras(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    const linha = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
        let anterior = linha[0];
        linha[0] = i;
        for (let j = 1; j <= b.length; j++) {
            const guardado = linha[j];
            linha[j] = Math.min(linha[j] + 1, linha[j - 1] + 1, anterior + (a[i - 1] === b[j - 1] ? 0 : 1));
            anterior = guardado;
        }
    }
    return linha[b.length];
}

function palavrasDe(texto) {
    return semAcento(String(texto).toLowerCase()).split(/[^a-z0-9]+/).filter(p => p.length > 2 && !PALAVRAS_VAZIAS.has(p));
}

// nota de cada pergunta: palavra igual vale mais, comeco parecido ou erro de digitacao vale menos
function notasAjuda(pergunta) {
    const palavras = palavrasDe(pergunta);
    return AJUDA_JUJUBA.map(item => {
        const chaves = palavrasDe(`${item.chaves} ${item.pergunta} ${SINONIMOS_JUJUBA[item.id] || ''}`);
        let nota = 0;
        palavras.forEach(p => {
            let melhor = 0;
            chaves.forEach(c => {
                if (c === p) melhor = Math.max(melhor, 3);
                else if (p.length >= 4 && (c.startsWith(p.slice(0, 4)) || p.startsWith(c.slice(0, 4)))) melhor = Math.max(melhor, 2);
                else if (p.length >= 4 && c.length >= 4 && distanciaPalavras(p, c) <= 1) melhor = Math.max(melhor, 1.5);
                else if (p.length >= 7 && distanciaPalavras(p, c) <= 2) melhor = Math.max(melhor, 1);
            });
            nota += melhor;
        });
        return { item, nota };
    }).filter(n => n.nota > 0).sort((a, b) => b.nota - a.nota);
}

// o que digitou tambem procura no site (recados, fotos, musicas...)
function achadosNoSite(pergunta) {
    const palavras = palavrasDe(pergunta);
    if (!palavras.length) return [];
    return indiceBusca().filter(i => {
        const texto = semAcento(i.titulo.toLowerCase());
        return palavras.every(p => texto.includes(p));
    }).slice(0, 3);
}

// procura a pergunta mais parecida com o que a pessoa escreveu
function buscarAjuda(pergunta) {
    if (!palavrasDe(pergunta).length) return menuAjudaJujuba('Escreve alguma coisa que eu tento ajudar! Ou escolhe uma dessas:');
    // ela "procura" um pouquinho antes de responder, igual o clippy com o binoculo
    animarJujuba('procurar', 1100);
    // para de escrever a fala anterior
    clearInterval(assistente.timerFala);
    $('#assistente').classList.remove('falando');
    $('#fala-assistente').textContent = 'Procurando...';
    $('#botoes-assistente').innerHTML = '<span class="procurando-jujuba"><i></i><i></i><i></i></span>';
    clearTimeout(assistente.timerBusca);
    assistente.timerBusca = setTimeout(() => respostaBusca(pergunta), 900);
}

function respostaBusca(pergunta) {
    const notas = notasAjuda(pergunta);
    const site = achadosNoSite(pergunta);
    // uma resposta bem melhor que as outras: responde direto
    if (notas.length && (notas.length === 1 || notas[0].nota >= notas[1].nota * 1.6) && !site.length) return responderAjuda(notas[0].item.id);
    if (!notas.length && !site.length) {
        animarJujuba('cocar', 1500);
        return assistenteFalar(`Hmm... "${pergunta.slice(0, 50)}"? Não achei nada sobre isso. Sou só uma água-viva, não tenho cérebro! Tenta outras palavras ou escolhe uma dessas:`, [], { menu: true });
    }
    const botoes = [
        ...notas.slice(0, 3).map(n => ({ texto: n.item.pergunta, acao: 'topico:' + n.item.id })),
        ...site.map(i => ({ texto: `${i.tipo}: ${i.titulo.slice(0, 40)}${i.titulo.length > 40 ? '...' : ''}`, acao: 'link:' + i.link })),
    ];
    assistenteFalar(`Achei isso sobre "${pergunta.slice(0, 40)}". O que você quer fazer?`, [], { lista: botoes });
}

const assistente = { iniciado: false, pagina: null, ultimaFala: 0, timerFala: null, timerFechar: null, arrasto: null };

function sorteio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// escreve a fala letra por letra no balaozinho amarelo
function assistenteFalar(texto, botoes = [], { menu = false, lista = null } = {}) {
    if (!assistente.iniciado || $('#assistente').hidden) return;
    const caixa = $('#assistente');
    const balao = $('#balao-assistente');
    const fala = $('#fala-assistente');
    assistente.ultimaFala = Date.now();
    acordarAssistente();
    clearInterval(assistente.timerFala);
    clearTimeout(assistente.timerFechar);
    balao.classList.toggle('com-menu', menu || !!lista);
    balao.hidden = false;
    const padrao = [
        { texto: 'Obter ajuda', acao: 'ajuda' },
        { texto: 'Outra dica', acao: 'dica' },
        { texto: 'Esconder', acao: 'esconder' },
    ];
    const caixaBusca = `<form class="busca-jujuba" data-busca-jujuba><input type="text" maxlength="80" placeholder="Digite sua pergunta..." aria-label="Pergunta pra Jujuba" autocomplete="off"><button type="submit">Pesquisar</button></form>`;
    $('#botoes-assistente').innerHTML = menu
        ? `<div class="perguntas-jujuba" id="perguntas-jujuba">${AJUDA_JUJUBA.map(a => `<button type="button" data-assistente="topico:${a.id}">${esc(a.pergunta)}</button>`).join('')}</div>${caixaBusca}`
        : lista
            ? `<div class="perguntas-jujuba">${lista.map(b => `<button type="button" data-assistente="${esc(b.acao)}">${esc(b.texto)}</button>`).join('')}<button type="button" data-assistente="ajuda" class="ver-todas-jujuba">Ver todas as perguntas</button></div>${caixaBusca}`
            : (botoes.length ? botoes : padrao).map(b => `<button type="button" data-assistente="${b.acao}">${esc(b.texto)}</button>`).join('');
    posicionarBalao();
    let letras = 0;
    fala.textContent = '';
    caixa.classList.add('falando');
    assistente.timerFala = setInterval(() => {
        letras += 2;
        fala.textContent = texto.slice(0, letras);
        if (letras >= texto.length) {
            clearInterval(assistente.timerFala);
            fala.innerHTML = textoRico(texto);
            caixa.classList.remove('falando');
        }
    }, 25);
    pulinhoAssistente();
    // sem pergunta, o balao fecha sozinho depois de um tempo
    if (!botoes.length && !menu) assistente.timerFechar = setTimeout(() => { balao.hidden = true; }, 14000 + texto.length * 40);
}


// --- jeitinhos da jujuba: pisca, olha pro mouse, se mexe sozinha, comemora (igual o clippy e o merlin) ---

const ANIMACOES_JUJUBA = ['olhar', 'esticar', 'bolhas', 'assobiar', 'cocar', 'girar', 'pensar', 'acenar', 'chamar', 'dancar', 'comemorar', 'procurar', 'bocejar', 'tchau'];
const PARADAS_JUJUBA = ['olhar', 'esticar', 'bolhas', 'assobiar', 'cocar', 'girar', 'bolhas', 'olhar'];

function animarJujuba(nome, ms = 1500) {
    const caixa = $('#assistente');
    if (!caixa || caixa.hidden) return;
    ANIMACOES_JUJUBA.forEach(a => caixa.classList.remove('anim-' + a));
    void caixa.offsetWidth;
    caixa.classList.add('anim-' + nome);
    clearTimeout(assistente.timerAnim);
    assistente.timerAnim = setTimeout(() => caixa.classList.remove('anim-' + nome), ms);
    if (nome === 'bolhas' || nome === 'acenar') soltarEnfeitesJujuba('bolha', 6);
    if (nome === 'assobiar' || nome === 'dancar') soltarEnfeitesJujuba('nota', nome === 'dancar' ? 6 : 3);
    if (nome === 'comemorar') soltarEnfeitesJujuba('estrela', 8);
    if (nome === 'pensar') soltarEnfeitesJujuba('pergunta', 1);
    if (nome === 'chamar') soltarEnfeitesJujuba('onda', 2);
}

// bolhinhas, notas musicais, estrelinhas... saindo de perto dela
function soltarEnfeitesJujuba(tipo, quantos) {
    const lugar = $('#efeitos-assistente');
    if (!lugar) return;
    for (let i = 0; i < quantos; i++) {
        const el = document.createElement('i');
        el.className = 'enfeite-jujuba ' + tipo;
        if (tipo === 'nota') el.textContent = sorteio(['♪', '♫', '♪']);
        if (tipo === 'pergunta') el.textContent = '?';
        el.style.setProperty('--x', `${Math.round((Math.random() - 0.5) * 70)}px`);
        el.style.setProperty('--atraso', `${i * (tipo === 'onda' ? 0.35 : 0.14)}s`);
        el.style.setProperty('--tam', `${6 + Math.random() * 9}px`);
        lugar.append(el);
        setTimeout(() => el.remove(), 2600);
    }
}

function piscarJujuba() {
    const caixa = $('#assistente');
    if (!caixa || caixa.hidden || caixa.classList.contains('dormindo')) return;
    caixa.classList.add('piscando');
    setTimeout(() => caixa.classList.remove('piscando'), 150);
    // as vezes pisca duas vezes seguidas
    if (Math.random() < 0.25) setTimeout(() => {
        caixa.classList.add('piscando');
        setTimeout(() => caixa.classList.remove('piscando'), 130);
    }, 280);
}

function iniciarJeitinhosJujuba() {
    const caixa = $('#assistente');
    const corpo = caixa.querySelector('.corpo-assistente');
    // pisca de tempos em tempos
    const proximaPiscada = () => setTimeout(() => { piscarJujuba(); proximaPiscada(); }, 2200 + Math.random() * 4200);
    proximaPiscada();
    // e de vez em quando faz alguma coisinha sozinha
    const proximoJeito = () => setTimeout(() => {
        const parada = Date.now() - assistente.ultimaFala > 4000;
        if (!document.hidden && !caixa.hidden && parada && !caixa.classList.contains('dormindo') && !caixa.classList.contains('arrastando')) {
            animarJujuba(sorteio(PARADAS_JUJUBA), 1800);
        }
        proximoJeito();
    }, 9000 + Math.random() * 9000);
    proximoJeito();
    // no computador ela se inclina pro lado do mouse (como se tivesse olhando)
    let espera = 0;
    document.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse' || caixa.hidden || Date.now() - espera < 80) return;
        espera = Date.now();
        const r = caixa.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 3);
        const angulo = Math.max(-9, Math.min(9, dx / 40));
        corpo.style.setProperty('--inclinar', `${caixa.classList.contains('dormindo') ? 0 : angulo}deg`);
        corpo.style.setProperty('--olhar-y', `${Math.max(-3, Math.min(3, dy / 120))}px`);
    }, { passive: true });
    // mandou recado, depoimento ou entrou pros amigos: ela comemora
    document.addEventListener('submit', e => {
        const tipo = e.target.dataset?.form;
        if (!['recado', 'depoimento', 'amigo', 'diario'].includes(tipo) || caixa.hidden) return;
        setTimeout(() => {
            animarJujuba('comemorar', 1800);
            assistenteFalar(sorteio(['Uhul! Mandou bem! (Y)', 'Ebaaa! O Lucas vai adorar! :D', 'Prontinho! Você é demais! (L)']));
        }, 1200);
    }, true);
}

// sem ninguem mexer por um tempo ela tira um cochilo
function acordarAssistente() {
    const caixa = $('#assistente');
    clearTimeout(assistente.timerSono);
    const dormia = caixa.classList.contains('dormindo');
    caixa.classList.remove('dormindo');
    assistente.timerSono = setTimeout(() => {
        if (!$('#balao-assistente').hidden) return acordarAssistente();
        animarJujuba('bocejar', 1600);
        setTimeout(() => caixa.classList.add('dormindo'), 1500);
    }, 150000);
    return dormia;
}

function pulinhoAssistente() {
    const caixa = $('#assistente');
    caixa.classList.remove('pulando');
    void caixa.offsetWidth;
    caixa.classList.add('pulando');
}

// o balao abre pro lado que tem espaco
function posicionarBalao() {
    const caixa = $('#assistente');
    const r = caixa.getBoundingClientRect();
    caixa.classList.toggle('balao-esquerda', r.left + r.width / 2 < innerWidth / 2);
    caixa.classList.toggle('balao-embaixo', r.top < 190);
}

function assistenteViuPagina(nome) {
    if (!assistente.iniciado || nome === assistente.pagina) return;
    assistente.pagina = nome;
    const fala = FALAS_ASSISTENTE.paginas[nome];
    // nao comenta toda vez, senao fica chato (mais chato)
    if (fala && Date.now() - assistente.ultimaFala > 8000 && Math.random() < 0.6) assistenteFalar(fala);
}

function assistenteViuJanela(id) {
    const fala = FALAS_ASSISTENTE.janelas[id];
    if (fala && Date.now() - assistente.ultimaFala > 5000 && Math.random() < 0.7) assistenteFalar(fala);
}

function esconderAssistente() {
    const caixa = $('#assistente');
    $('#balao-assistente').hidden = true;
    animarJujuba('tchau', 900);
    setTimeout(() => esconderAssistenteAgora(), 850);
}

function esconderAssistenteAgora() {
    $('#assistente').hidden = true;
    guardar.salvar('assistente-escondida', true);
    status('A Jujuba foi nadar. Pra chamar de volta: menu Iniciar > Jujuba.');
}

function chamarAssistente() {
    $('#menu-iniciar').hidden = true;
    const caixa = $('#assistente');
    guardar.salvar('assistente-escondida', false);
    if (!assistente.iniciado) iniciarAssistente(true);
    caixa.hidden = false;
    caixa.classList.remove('chegando');
    void caixa.offsetWidth;
    caixa.classList.add('chegando');
    setTimeout(() => animarJujuba('acenar', 1600), 700);
    assistenteFalar('Voltei! Sentiu minha falta? Parece que você precisa de ajuda. Quer ajuda?', [
        { texto: 'Sim, por favor', acao: 'sim' },
        { texto: 'Não, obrigado', acao: 'nao' },
    ]);
}

// arrastar a jujuba pela tela (e o lugar fica guardado)
function colocarAssistente(x, y) {
    const caixa = $('#assistente');
    // escondida (atras da tela de bloqueio, por exemplo) ela nao tem tamanho: usa o tamanho normal dela
    const largura = caixa.offsetWidth || (innerWidth <= 720 ? 62 : 92);
    const altura = caixa.offsetHeight || largura * 1.5;
    const l = Math.min(Math.max(0, x), innerWidth - largura);
    const t = Math.min(Math.max(0, y), innerHeight - 30 - altura);
    caixa.style.left = l + 'px';
    caixa.style.top = t + 'px';
    caixa.style.right = 'auto';
    caixa.style.bottom = 'auto';
}

function iniciarAssistente(chamada = false) {
    const caixa = $('#assistente');
    const boneco = $('#boneco-assistente');
    // no celular, quem ainda nao escolheu o modo ganha a pergunta mesmo com a jujuba escondida
    const perguntarModo = !chamada && celularPossivel() && !guardar.ler('modo', '');
    if (!chamada && !perguntarModo && guardar.ler('assistente-escondida', false)) return;
    assistente.iniciado = true;
    assistente.pagina = rotaAtual().nome;
    caixa.hidden = false;
    const lugar = guardar.ler('assistente-lugar', null);
    if (lugar) colocarAssistente(lugar.x, lugar.y);
    iniciarJeitinhosJujuba();
    if (!chamada) {
        caixa.classList.add('chegando');
        setTimeout(() => animarJujuba('acenar', 1600), 3200);
        setTimeout(() => {
            if (perguntarModo) {
                const tablet = ehTablet();
                return assistenteFalar(`Psiu! Esse site fica ideal no computador, ele imita um Windows XP inteirinho. Você quer a interface normal de PC ou prefere o modo ${tablet ? 'tablet, com cara de tablet antigo' : 'celular, com cara de celular antigo'}?`, [
                    { texto: tablet ? 'Modo tablet' : 'Modo celular', acao: tablet ? 'tablet' : 'celular' },
                    { texto: 'Interface de PC', acao: 'pc' },
                ]);
            }
            // no modo celular ela so fala depois de desbloquear
            if (cel.ativo) return;
            const tema = datasAgora.tema;
            const h = new Date().getHours();
            const nome = meuNome();
            const ola = `${h < 5 ? 'Boa madrugada' : h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite'}${nome ? `, ${nome.split(' ')[0]}` : ''}! `;
            assistenteFalar((tema ? TEMAS[tema].frase(new Date()) + ' ' : '') + ola + FALAS_ASSISTENTE.oi.replace(/^Oi! /, ''), [
                { texto: 'Sim, por favor', acao: 'sim' },
                { texto: 'Não, obrigado', acao: 'nao' },
            ]);
        }, 3500);
    }
    // de vez em quando ela solta uma dica que ninguem pediu
    setInterval(() => {
        if (document.hidden || caixa.hidden || !$('#balao-assistente').hidden) return;
        if (caixa.classList.contains('dormindo')) return;
        if (Date.now() - assistente.ultimaFala > 60000) {
            animarJujuba('chamar', 1300);
            setTimeout(() => assistenteFalar(sorteio(FALAS_ASSISTENTE.soltas)), 700);
        }
    }, 30000);

    boneco.addEventListener('pointerdown', e => {
        e.preventDefault();
        const r = caixa.getBoundingClientRect();
        assistente.arrasto = { dx: e.clientX - r.left, dy: e.clientY - r.top, x0: e.clientX, y0: e.clientY, mexeu: false };
        try { boneco.setPointerCapture(e.pointerId); } catch { /* alguns navegadores nao deixam */ }
    });
    boneco.addEventListener('pointermove', e => {
        const a = assistente.arrasto;
        if (!a) return;
        if (!a.mexeu && Math.hypot(e.clientX - a.x0, e.clientY - a.y0) < 6) return;
        a.mexeu = true;
        caixa.classList.add('arrastando');
        colocarAssistente(e.clientX - a.dx, e.clientY - a.dy);
        posicionarBalao();
    });
    boneco.addEventListener('pointerup', () => {
        const a = assistente.arrasto;
        assistente.arrasto = null;
        caixa.classList.remove('arrastando');
        if (!a) return;
        if (a.mexeu) {
            const r = caixa.getBoundingClientRect();
            guardar.salvar('assistente-lugar', { x: r.left, y: r.top });
        } else if (Date.now() - (assistente.ultimoToque || 0) < 380) {
            // dois toques rapidinhos: dancinha
            clearTimeout(assistente.timerToque);
            assistente.ultimoToque = 0;
            animarJujuba('dancar', 2200);
            assistenteFalar(sorteio(['Olha minha dancinha! ♪', 'Tô dançando a dança da água-viva! ♪♫', 'Eu danço melhor que o clipe do Office, admite.']));
        } else if (caixa.classList.contains('dormindo')) {
            assistenteFalar('Ah! Eu não tava dormindo não, tava... pensando. Precisa de alguma coisa?', [
                { texto: 'Obter ajuda', acao: 'ajuda' },
                { texto: 'Me conta uma piada', acao: 'topico:piada' },
            ]);
        } else {
            // um toque: espera um tiquinho pra ver se vem o segundo (danca) antes de abrir a ajuda
            assistente.ultimoToque = Date.now();
            clearTimeout(assistente.timerToque);
            assistente.timerToque = setTimeout(() => {
                assistente.ultimoToque = 0;
                menuAjudaJujuba(sorteio([
                    'Oi! Em que posso ajudar? Escolhe uma pergunta ou escreve a sua:',
                    'Chamou? Escolhe uma pergunta ou escreve a sua:',
                    'Parece que você quer ajuda! O que você gostaria de saber?',
                ]));
            }, 330);
        }
        if (a.mexeu && Math.random() < 0.3) assistenteFalar(sorteio(['Uiii! Cuidado, eu sou feita de gelatina!', 'Aqui tá bom, a vista é ótima.', 'Me mudou de lugar? Tudo bem, eu flutuo em qualquer canto.']));
    });
    window.addEventListener('resize', () => {
        if (!caixa.style.left) return;
        const r = caixa.getBoundingClientRect();
        colocarAssistente(r.left, r.top);
    });

    caixa.addEventListener('input', e => {
        if (!e.target.closest('[data-busca-jujuba]')) return;
        const lista = $('#perguntas-jujuba');
        if (!lista) return;
        const texto = e.target.value.trim();
        const ordem = texto ? notasAjuda(texto).map(n => n.item.id) : [];
        const botoes = [...lista.querySelectorAll('button')];
        botoes.forEach(b => {
            const id = b.dataset.assistente.slice(7);
            const pos = ordem.indexOf(id);
            b.style.order = pos < 0 ? 100 : pos;
            b.classList.toggle('apagada', !!texto && pos < 0);
            b.classList.toggle('achada', pos === 0);
        });
        lista.scrollTop = 0;
    });
    caixa.addEventListener('submit', e => {
        if (!e.target.matches('[data-busca-jujuba]')) return;
        e.preventDefault();
        e.stopPropagation();
        buscarAjuda(e.target.querySelector('input').value.trim());
    });

    caixa.addEventListener('click', e => {
        const b = e.target.closest('[data-assistente]');
        if (!b) return;
        const acao = b.dataset.assistente;
        if (acao === 'sim' || acao === 'ajuda') return menuAjudaJujuba(acao === 'sim' ? FALAS_ASSISTENTE.sim : undefined);
        if (acao.startsWith('topico:')) return responderAjuda(acao.slice(7));
        if (acao.startsWith('ir:')) return irAjuda(acao.slice(3));
        if (acao.startsWith('link:')) {
            $('#balao-assistente').hidden = true;
            const destino = acao.slice(5);
            const app = cel.ativo && APPS_CEL.find(a => a.rota && destino.startsWith('#' + a.rota));
            if (app) abrirAppCel(app.id);
            location.hash = destino;
            return;
        }
        if (acao === 'nao') assistenteFalar(FALAS_ASSISTENTE.nao);
        if (acao === 'dica') assistenteFalar(sorteio(FALAS_ASSISTENTE.soltas));
        if (acao === 'calar') {
            clearInterval(assistente.timerFala);
            $('#balao-assistente').hidden = true;
        }
        if (acao === 'esconder') esconderAssistente();
        if (acao === 'celular' || acao === 'tablet') {
            $('#balao-assistente').hidden = true;
            entrarModoCelular(true, acao === 'tablet');
        }
        if (acao === 'pc') {
            guardar.salvar('modo', 'pc');
            assistenteFalar('Tudo bem! Se mudar de ideia, o modo celular fica no menu Iniciar.');
        }
    });
}

// --- modo celular: o site inteiro vira um galaxy antigo (tela de bloqueio, tela inicial e aplicativos) ---

// cada app: abre uma pagina do site (rota) ou um programa (janela)
const APPS_CEL = [
    { id: 'internet', nome: 'Internet', ico: 'world', cor: '#2a7fd4', rota: 'inicio', completo: true },
    { id: 'zap', nome: 'Zap', ico: 'msn_messenger', cor: '#3aa547', janela: 'msn' },
    { id: 'contatos', nome: 'Contatos', ico: 'group', cor: '#e8892c', rota: 'amigos' },
    { id: 'paint', nome: 'S Paint', ico: 'palette', cor: '#b98a4e', janela: 'paint' },
    { id: 'recados', nome: 'Recados', ico: 'email', cor: '#e2a516', rota: 'recados' },
    { id: 'galeria', nome: 'Galeria', ico: 'photo_album', cor: '#d94b8b', rota: 'albuns' },
    { id: 'camera', nome: 'Câmera', ico: 'camera', cor: '#4c5560', camera: true },
    { id: 'musica', nome: 'Música', ico: 'headphone', cor: '#7b4fc9', rota: 'playlist' },
    { id: 'tv', nome: 'TV', ico: 'film', cor: '#c0392b', rota: 'tv' },
    { id: 'diario', nome: 'Diário', ico: 'book_open', cor: '#8e5a2b', rota: 'diario' },
    { id: 'perfil', nome: 'Perfil', ico: 'user', cor: '#2f80c9', rota: 'perfil' },
    { id: 'depoimentos', nome: 'Depoimentos', ico: 'award_star_gold_1', cor: '#d4891a', rota: 'depoimentos' },
    { id: 'memo', nome: 'Memo', ico: 'note', cor: '#e9c440', janela: 'notas' },
    { id: 'calculadora', nome: 'Calculadora', ico: 'calculator', cor: '#4a4f57', janela: 'calculadora' },
    { id: 'fazenda', nome: 'Fazenda', ico: 'celeiro', cor: '#5f9e45', janela: 'fazenda' },
    { id: 'config', nome: 'Configurações', ico: 'computer', cor: '#5f6b78', config: true },
    { id: 'sobre', nome: 'Sobre mim', ico: 'heart', cor: '#e0457b', rota: 'sobre' },
    { id: 'comunidades', nome: 'Comunidades', ico: 'comments', cor: '#3b9bd1', rota: 'comunidades' },
    { id: 'avaliacoes', nome: 'Avaliações', ico: 'thumb_up', cor: '#27a59a', rota: 'avaliacoes' },
    { id: 'projetos', nome: 'Projetos', ico: 'wrench', cor: '#6d7b8a', rota: 'projetos' },
    { id: 'redes', nome: 'Redes Sociais', ico: 'page_world', cor: '#1f6fb5', rota: 'redes' },
    { id: 'pesquisar', nome: 'Pesquisar', ico: 'zoom', cor: '#4c8c2b', rota: 'busca' },
    { id: 'arquivos', nome: 'Meus arquivos', ico: 'bin_recycle', cor: '#d98c2b', janela: 'lixeira' },
    { id: 'minado', nome: 'Tekisminado', ico: 'mina', cor: '#7a8088', janela: 'minado' },
    { id: 'jujuba', nome: 'Jujuba', img: 'imagens/assistente/agua-viva.png?v=2', cor: '#6a4fd8', jujuba: true },
];
const DOCK_CEL = ['contatos', 'zap', 'internet', 'paint'];
const PAGINAS_CEL = [
    ['recados', 'galeria', 'camera', 'musica', 'tv', 'diario', 'perfil', 'depoimentos', 'memo', 'calculadora', 'fazenda', 'config'],
    ['sobre', 'comunidades', 'avaliacoes', 'projetos', 'redes', 'pesquisar', 'arquivos', 'minado', 'jujuba'],
];

// icones dos apps desenhados no estilo dos galaxy antigos (cores com brilho por cima)
const DEGRADES_CEL = {
    azul: ['#8fd3ff', '#1d6fd1'], verde: ['#9be86f', '#2b8f22'], laranja: ['#ffc77a', '#e0681a'], amarelo: ['#fff3a6', '#efb21c'],
    cinza: ['#fbfbfb', '#9ba2aa'], escuro: ['#727a83', '#1f2226'], vermelho: ['#ff8b7c', '#c42419'], roxo: ['#cfa8ff', '#6236c0'],
    rosa: ['#ffa4cc', '#cf2f77'], agua: ['#a4f2ff', '#1597c2'], papel: ['#ffffff', '#dedede'], marrom: ['#e2ae74', '#7a4719'],
    azulescuro: ['#7ea2ff', '#1c3a96'], dourado: ['#ffe27a', '#d69400'], ceu: ['#69bdfc', '#d9f1ff'],
};

function defsCel() {
    const lineares = Object.entries(DEGRADES_CEL).map(([nome, [a, b]]) =>
        `<linearGradient id="gc-${nome}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`).join('');
    return `<svg class="defs-cel" width="0" height="0" aria-hidden="true"><defs>${lineares}
        <linearGradient id="gc-brilho" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity=".05"/></linearGradient>
        <radialGradient id="ics-esfera" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#d4f4ff"/><stop offset=".4" stop-color="#33b5e5"/><stop offset="1" stop-color="#075a85"/></radialGradient>
        <radialGradient id="ics-coracao" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ff8a80"/><stop offset=".5" stop-color="#e53935"/><stop offset="1" stop-color="#8e0f0b"/></radialGradient>
        <linearGradient id="ics-madeira" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#f0c68e"/><stop offset=".55" stop-color="#cf914f"/><stop offset="1" stop-color="#94561f"/></linearGradient>
        <linearGradient id="ics-celeiro" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e5463a"/><stop offset=".6" stop-color="#c62a1f"/><stop offset="1" stop-color="#93190f"/></linearGradient>
        <linearGradient id="ics-telhado" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6d4c41"/><stop offset="1" stop-color="#3e2723"/></linearGradient>
        <radialGradient id="ics-grama" cx=".5" cy=".35" r=".7"><stop offset="0" stop-color="#9ccc65"/><stop offset=".7" stop-color="#689f38"/><stop offset="1" stop-color="#33691e"/></radialGradient>
        <linearGradient id="ics-papel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe6ea"/></linearGradient>
        <linearGradient id="ics-cabo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7a6b"/><stop offset="1" stop-color="#a81d12"/></linearGradient>
        <linearGradient id="ics-metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fafafa"/><stop offset=".5" stop-color="#b0b6bb"/><stop offset="1" stop-color="#e3e6e8"/></linearGradient>
        <filter id="ics-borrar" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="1.6"/></filter>
        <radialGradient id="gc-lente" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#7fc4ff"/><stop offset=".45" stop-color="#16467f"/><stop offset="1" stop-color="#02070f"/></radialGradient>
    </defs></svg>`;
}

// quadradinho arredondado com brilho em cima
function ladrilhoCel(cor, desenho) {
    return `<rect x="4" y="4" width="52" height="52" rx="12" fill="url(#gc-${cor})"/>${desenho}
        <path d="M4 16a12 12 0 0 1 12-12h28a12 12 0 0 1 12 12v8q-26 9-52 0z" fill="url(#gc-brilho)" opacity=".85"/>
        <rect x="4.5" y="4.5" width="51" height="51" rx="11.5" fill="none" stroke="#000" stroke-opacity=".22"/>`;
}

function engrenagemCel() {
    let d = '';
    for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const r = i % 2 ? 19.5 : 25.5;
        const a1 = a - 0.17, a2 = a + 0.17;
        d += `${i ? 'L' : 'M'}${(30 + r * Math.cos(a1)).toFixed(1)} ${(30 + r * Math.sin(a1)).toFixed(1)}L${(30 + r * Math.cos(a2)).toFixed(1)} ${(30 + r * Math.sin(a2)).toFixed(1)}`;
    }
    return d + 'Z';
}

const ICONES_CEL = {
    internet: () => `<circle cx="30" cy="30" r="25" fill="url(#gc-azul)"/>
        <path d="M14 21q6-7 13-4 3 4-2 7-5 1-4 6-4 3-7-1-2-5 0-8zM34 13q8 0 13 7-3 2-7 1-2 3 1 6 4 2 3 7-3 6-8 5-2-6-5-8-1-6 4-9-2-4-1-9z" fill="#5fd14a" opacity=".9"/>
        <ellipse cx="30" cy="30" rx="11" ry="25" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.4"/>
        <path d="M5 30h50M8 18h44M8 42h44" stroke="#fff" stroke-opacity=".3" stroke-width="1.4"/>
        <ellipse cx="26" cy="16" rx="17" ry="9" fill="url(#gc-brilho)"/>
        <circle cx="30" cy="30" r="25" fill="none" stroke="#0b4386" stroke-width="1.5"/>`,
    zap: () => ladrilhoCel('verde', `<path d="M14 15h32a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H28l-9 8v-8h-5a6 6 0 0 1-6-6V21a6 6 0 0 1 6-6z" fill="#fff"/>
        <circle cx="21" cy="28" r="3.2" fill="#3a9a2a"/><circle cx="30" cy="28" r="3.2" fill="#3a9a2a"/><circle cx="39" cy="28" r="3.2" fill="#3a9a2a"/>`),
    contatos: () => ladrilhoCel('laranja', `<circle cx="30" cy="23" r="8.5" fill="#fff"/><path d="M14 47q0-14 16-14t16 14z" fill="#fff"/>
        <path d="M49 14v8M49 26v8M49 38v8" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>`),
    paint: () => ladrilhoCel('papel', `<path d="M30 12c-11 0-20 8-20 18 0 9 8 17 18 17 3 0 4-2 3-4-1-3 1-6 4-6h5c6 0 10-4 10-10 0-9-9-15-20-15z" fill="url(#gc-marrom)"/>
        <circle cx="21" cy="25" r="3.4" fill="#e53935"/><circle cx="29" cy="19" r="3.4" fill="#fdd835"/><circle cx="38" cy="22" r="3.4" fill="#43a047"/><circle cx="19" cy="34" r="3.4" fill="#1e88e5"/>
        <path d="M50 44 37 31" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/><path d="M37 31l-4-3 2 5z" fill="#222"/>`),
    recados: () => ladrilhoCel('papel', `<rect x="11" y="17" width="38" height="27" rx="3" fill="#fff" stroke="#2f7fd8" stroke-width="2.6"/>
        <path d="M12.5 19.5 30 33l17.5-13.5" fill="none" stroke="#2f7fd8" stroke-width="2.6" stroke-linejoin="round"/>
        <circle cx="45" cy="17" r="6" fill="#e53935"/><path d="M45 14v4" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="45" cy="20.3" r="1.1" fill="#fff"/>`),
    galeria: () => ladrilhoCel('papel', `<rect x="10" y="12" width="40" height="35" rx="2" fill="url(#gc-ceu)" stroke="#9aa" stroke-width="1"/>
        <circle cx="41" cy="21" r="4.5" fill="#ffd23f"/><path d="M10 47v-9q9-9 17-3 9-8 23 1v11z" fill="url(#gc-verde)"/>
        <path d="M21 40v-6" stroke="#2b8f22" stroke-width="1.6"/><circle cx="21" cy="32" r="3" fill="#ff5c9a"/><circle cx="21" cy="32" r="1.2" fill="#ffe14d"/>`),
    camera: () => `<circle cx="30" cy="30" r="25" fill="url(#gc-cinza)"/><circle cx="30" cy="30" r="25" fill="none" stroke="#6b7178" stroke-width="1.4"/>
        <circle cx="30" cy="30" r="19" fill="url(#gc-escuro)"/><circle cx="30" cy="30" r="13" fill="url(#gc-lente)"/>
        <circle cx="30" cy="30" r="6" fill="#020509"/><circle cx="25" cy="25" r="3.6" fill="#fff" opacity=".75"/><circle cx="35" cy="35" r="1.6" fill="#fff" opacity=".4"/>
        <ellipse cx="26" cy="15" rx="15" ry="7" fill="url(#gc-brilho)" opacity=".8"/>`,
    musica: () => ladrilhoCel('roxo', `<path d="M24 42V18l19-5v25" fill="none" stroke="#fff" stroke-width="3.6" stroke-linejoin="round"/>
        <ellipse cx="19.5" cy="42" rx="6.5" ry="5" fill="#fff"/><ellipse cx="38.5" cy="38" rx="6.5" ry="5" fill="#fff"/>`),
    tv: () => ladrilhoCel('vermelho', `<path d="M24 19l-6-8M36 19l6-8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
        <rect x="10" y="19" width="40" height="28" rx="6" fill="#fff"/><rect x="14" y="23" width="26" height="20" rx="4" fill="#2b2b2b"/>
        <path d="M24 28v10l8-5z" fill="#fff"/><circle cx="45" cy="28" r="2" fill="#c42419"/><circle cx="45" cy="35" r="2" fill="#c42419"/>`),
    diario: () => {
        const hoje = new Date();
        return `<rect x="8" y="8" width="44" height="45" rx="5" fill="url(#gc-papel)" stroke="#a9a9a9"/>
        <path d="M8 13a5 5 0 0 1 5-5h34a5 5 0 0 1 5 5v8H8z" fill="url(#gc-vermelho)"/>
        <text x="30" y="18.6" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold">${MESES_CEL[hoje.getMonth()].toUpperCase()}</text>
        <text x="30" y="45" text-anchor="middle" fill="#333" font-family="Arial, sans-serif" font-size="22" font-weight="bold">${hoje.getDate()}</text>
        <circle cx="19" cy="9" r="2.2" fill="#555"/><circle cx="41" cy="9" r="2.2" fill="#555"/>`;
    },
    perfil: () => ladrilhoCel('azul', `<rect x="10" y="16" width="40" height="28" rx="3" fill="#fff"/><circle cx="21.5" cy="26.5" r="4.8" fill="#2f7fd8"/>
        <path d="M14 39q0-7 7.5-7t7.5 7z" fill="#2f7fd8"/><path d="M33 25h12M33 30.5h12M33 36h8" stroke="#9aaabb" stroke-width="2.4" stroke-linecap="round"/>`),
    depoimentos: () => ladrilhoCel('azulescuro', `<path d="M30 12l5.3 11 12 1.6-8.8 8.3 2.2 12L30 39.2 19.3 45l2.2-12-8.8-8.3 12-1.6z" fill="url(#gc-dourado)" stroke="#fff3b0" stroke-width="1.2"/>`),
    memo: () => `<rect x="11" y="8" width="38" height="46" rx="3" fill="url(#gc-amarelo)" stroke="#c8961a"/>
        <rect x="11" y="8" width="38" height="8" rx="3" fill="url(#gc-vermelho)"/>
        <path d="M16 25h28M16 32h28M16 39h28M16 46h18" stroke="#d1a22c" stroke-width="1.6"/>
        <path d="M44 50 54 30l3 1.5-10 20-4 2z" fill="#3b7dd8" stroke="#1d4f99" stroke-width=".8"/>`,
    calculadora: () => ladrilhoCel('escuro', `<rect x="13" y="11" width="34" height="11" rx="2" fill="#bfe6c2"/><text x="44" y="20" text-anchor="end" font-family="Arial" font-size="8" fill="#26402a">123</text>
        ${[0, 1, 2].map(l => [0, 1, 2].map(c => `<rect x="${13 + c * 9}" y="${26 + l * 8}" width="7" height="6" rx="1.2" fill="#e8eaed"/>`).join('')).join('')}
        <rect x="40" y="26" width="7" height="22" rx="1.2" fill="#ff8f1f"/>`),
    fazenda: () => ladrilhoCel('verde', `<path d="M15 47V30l15-13 15 13v17z" fill="#d23224"/><path d="M12 31 30 15l18 16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"/>
        <rect x="25" y="34" width="10" height="13" fill="#fff"/><path d="M25 34l10 13m0-13L25 47" stroke="#d23224" stroke-width="1.6"/><rect x="27" y="23" width="6" height="6" fill="#fff"/>`),
    config: () => `<path d="${engrenagemCel()}" fill="url(#gc-cinza)" stroke="#5f666e" stroke-width="1.4" stroke-linejoin="round"/>
        <circle cx="30" cy="30" r="9.5" fill="url(#gc-escuro)"/><circle cx="30" cy="30" r="13.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
        <ellipse cx="27" cy="18" rx="13" ry="6" fill="url(#gc-brilho)" opacity=".7"/>`,
    sobre: () => ladrilhoCel('rosa', `<path d="M30 47C13 36 11 26 16 19.5c4-5 10.5-4.5 14 1 3.5-5.5 10-6 14-1 5 6.5 3 16.5-14 27.5z" fill="#fff"/>`),
    comunidades: () => ladrilhoCel('agua', `<path d="M10 16h24a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H20l-6 5v-5h-4a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z" fill="#fff" opacity=".7" transform="translate(2 0)"/>
        <path d="M26 26h22a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-3v5l-6-5H26a4 4 0 0 1-4-4V30a4 4 0 0 1 4-4z" fill="#fff"/>
        <circle cx="31" cy="35" r="2" fill="#1597c2"/><circle cx="37" cy="35" r="2" fill="#1597c2"/><circle cx="43" cy="35" r="2" fill="#1597c2"/>`),
    avaliacoes: () => ladrilhoCel('dourado', `<path d="M21 45V28h5l7-13q5 0 4 6l-1 6h9q5 0 3.5 5l-3 10q-1 3-5 3z" fill="#fff"/><rect x="13" y="28" width="6" height="17" rx="1.6" fill="#fff"/>`),
    projetos: () => ladrilhoCel('cinza', `<path d="M42 11a10 10 0 0 0-12 12L14 39a4 4 0 0 0 6 6l16-16a10 10 0 0 0 12-12l-7 6-5-1-1-5z" fill="#4a4f57"/><circle cx="17" cy="42" r="1.6" fill="#cfd3d8"/>`),
    redes: () => ladrilhoCel('azul', `<circle cx="20" cy="24" r="5.5" fill="#fff" opacity=".75"/><path d="M10 42q0-11 10-11t10 11z" fill="#fff" opacity=".75"/>
        <circle cx="40" cy="24" r="5.5" fill="#fff" opacity=".75"/><path d="M30 42q0-11 10-11t10 11z" fill="#fff" opacity=".75"/>
        <circle cx="30" cy="21" r="7" fill="#fff"/><path d="M17 46q0-14 13-14t13 14z" fill="#fff"/>`),
    pesquisar: () => ladrilhoCel('papel', `<circle cx="26" cy="26" r="11" fill="none" stroke="#2f7fd8" stroke-width="4.5"/>
        <path d="M34 34l11 11" stroke="#e53935" stroke-width="6" stroke-linecap="round"/><path d="M20.5 22a7 7 0 0 1 6-4" stroke="#bfe0ff" stroke-width="2" fill="none" stroke-linecap="round"/>`),
    arquivos: () => `<path d="M7 17a3 3 0 0 1 3-3h13l4 4h23a3 3 0 0 1 3 3v5H7z" fill="#d38f12"/>
        <path d="M7 23h46v23a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z" fill="url(#gc-amarelo)" stroke="#c8961a"/>
        <path d="M7 23h46v6q-23 6-46 0z" fill="url(#gc-brilho)" opacity=".7"/>`,
};
const DIAS_CEL = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MESES_CEL = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const cel = { ativo: false, montado: false, app: null, voltas: 0, voltando: false, bateria: 0.8, carregando: false, relogio: null, primeiraVez: true };

// so oferece o modo celular em tela de toque (celular e tablet)
function celularPossivel() {
    return matchMedia('(pointer: coarse)').matches;
}

function appCel(id) {
    return APPS_CEL.find(a => a.id === id);
}

// icones originais do android 4.0 ice cream sandwich (android open source project, licenca apache 2.0)
const ICONES_ANDROID = new Set(['internet', 'zap', 'contatos', 'recados', 'galeria', 'camera', 'musica', 'tv', 'diario', 'perfil', 'depoimentos', 'calculadora', 'config', 'comunidades', 'projetos', 'pesquisar', 'arquivos', 'memo']);


// os icones que o android nao tinha, desenhados no estilo do android 4.0 (objeto com volume, luz de cima e sombra embaixo)
const SOMBRA_ICS = '<ellipse cx="30" cy="54.5" rx="21" ry="3" fill="#000" opacity=".4" filter="url(#ics-borrar)"/>';

function estrelaFacetada() {
    const ponto = (r, graus) => `${(30 + r * Math.cos(graus * Math.PI / 180)).toFixed(1)} ${(29 + r * Math.sin(graus * Math.PI / 180)).toFixed(1)}`;
    let faces = '';
    for (let i = 0; i < 5; i++) {
        const a = -90 + i * 72;
        faces += `<path d="M30 29L${ponto(10, a - 36)}L${ponto(24, a)}z" fill="#ffe27a"/><path d="M30 29L${ponto(24, a)}L${ponto(10, a + 36)}z" fill="#e09a00"/>`;
    }
    let contorno = '';
    for (let i = 0; i < 10; i++) contorno += `${i ? 'L' : 'M'}${ponto(i % 2 ? 10 : 24, -90 + i * 36)}`;
    return faces + `<path d="${contorno}z" fill="none" stroke="#a86b00" stroke-width="1" stroke-linejoin="round"/>`;
}

const ICONES_ICS = {
    paint: () => `${SOMBRA_ICS}
        <path d="M7 33C7 20 19 11 33 11c13 0 21 7 21 16 0 7-5 10-11 10h-4c-3 0-4 2-3 4 1 3-1 7-6 7C17 48 7 42 7 33z" fill="url(#ics-madeira)" stroke="#7a4519" stroke-width="1"/>
        <path d="M11 31c1-9 10-16 22-16" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="21" cy="38.5" rx="4" ry="3" fill="#6b3c12"/><ellipse cx="21" cy="39.3" rx="3" ry="2" fill="#3e2108"/>
        ${[[18, 26, '#e53935'], [26, 19.5, '#fdd835'], [36, 18.5, '#43a047'], [45, 23, '#1e88e5']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="4" fill="${c}" stroke="rgba(0,0,0,.25)"/><circle cx="${x - 1.3}" cy="${y - 1.4}" r="1.3" fill="#fff" opacity=".8"/>`).join('')}
        <g transform="rotate(-38 40 38)"><rect x="30" y="35.5" width="26" height="5" rx="2.5" fill="url(#ics-cabo)"/><rect x="24" y="35" width="7" height="6" rx="1" fill="url(#ics-metal)"/><path d="M24 35.3 15 38l9 2.7z" fill="#2b2b2b"/><path d="M17 37.6 15 38l2 .4z" fill="#1e88e5"/></g>`,
    fazenda: () => `${SOMBRA_ICS}
        <ellipse cx="30" cy="47" rx="25" ry="6.5" fill="url(#ics-grama)"/>
        <path d="M15 27h30v19H15z" fill="url(#ics-celeiro)"/>
        <path d="M20 27v19M25 27v19M35 27v19M40 27v19" stroke="#000" stroke-opacity=".12"/>
        <path d="M12.5 28 18 17l12-6.5L42 17l5.5 11z" fill="url(#ics-telhado)"/>
        <path d="M12.5 28 18 17l12-6.5L42 17l5.5 11" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>
        <rect x="26" y="17.5" width="8" height="6.5" fill="#fff"/><rect x="27.3" y="18.8" width="5.4" height="3.9" fill="#4e2a12"/>
        <rect x="23.5" y="32" width="13" height="14" fill="#fff"/><rect x="25" y="33.5" width="10" height="12.5" fill="#b3241a"/>
        <path d="M25 33.5l10 12.5M35 33.5 25 46" stroke="#fff" stroke-width="1.6"/>
        <path d="M15 27h30" stroke="#fff" stroke-width="1.2"/><path d="M15 27h4v19h-4z" fill="#fff" opacity=".12"/>`,
    sobre: () => `${SOMBRA_ICS}
        <rect x="13" y="8" width="38" height="41" rx="2" fill="#bfe3f2" stroke="#8fb9cc"/>
        <rect x="8" y="12" width="38" height="42" rx="2" fill="url(#ics-papel)" stroke="#a9b8c2"/>
        <rect x="8" y="12" width="38" height="8" rx="2" fill="#33b5e5"/><rect x="8" y="17" width="38" height="3" fill="#33b5e5"/>
        <path d="M27 49C15 41 13 34.5 16.5 30c2.8-3.5 7.5-3 10.5.6 3-3.6 7.7-4.1 10.5-.6 3.5 4.5 1.5 11-10.5 19z" fill="url(#ics-coracao)" stroke="#8e0f0b" stroke-width=".8"/>
        <ellipse cx="21.5" cy="33" rx="3.2" ry="2.2" fill="#fff" opacity=".6" transform="rotate(-25 21.5 33)"/>`,
    avaliacoes: () => `${SOMBRA_ICS}${estrelaFacetada()}
        <path d="M30 7.5 33 19" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" stroke-linecap="round"/>`,
    minado: () => `${SOMBRA_ICS}
        <rect x="7" y="9" width="46" height="42" rx="3" fill="#c3c7cb" stroke="#6b7177"/>
        <path d="M7 12a3 3 0 0 1 3-3h40a3 3 0 0 1 3 3v3H7z" fill="#e8eaec"/>
        ${[0, 1, 2].map(l => [0, 1, 2].map(c => `<rect x="${11 + c * 13}" y="${15 + l * 11.5}" width="12" height="10.5" fill="${(l + c) % 2 ? '#dfe2e5' : '#b4b9be'}" stroke="#8a9096" stroke-width=".6"/>`).join('')).join('')}
        <text x="17" y="24" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="8" fill="#1e3cf0">1</text>
        <text x="43" y="47.5" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="8" fill="#0a8a0a">2</text>
        <g transform="translate(30 32)">
            ${[0, 45, 90, 135].map(a => `<rect x="-12" y="-1.4" width="24" height="2.8" rx="1.4" fill="#111" transform="rotate(${a})"/>`).join('')}
            <circle r="8" fill="url(#gc-escuro)" stroke="#000" stroke-width=".6"/><circle cx="-3" cy="-3" r="2.2" fill="#fff" opacity=".85"/>
        </g>
        <path d="M44 8v13" stroke="#333" stroke-width="1.6"/><path d="M44 8l-8 3.5 8 3.5z" fill="#e53935"/>`,
    redes: () => `${SOMBRA_ICS}
        <path d="M17 37 41 20M17 37 44 44M41 20 44 44" stroke="#455a64" stroke-width="5" stroke-linecap="round"/>
        <path d="M17 37 41 20M17 37 44 44M41 20 44 44" stroke="#eceff1" stroke-width="2.6" stroke-linecap="round"/>
        ${[[17, 37, 10], [41, 19, 8.5], [44, 44, 8]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#ics-esfera)" stroke="#05496b" stroke-width=".8"/>
            <circle cx="${x}" cy="${y - r * .25}" r="${r * .28}" fill="#fff"/><path d="M${x - r * .5} ${y + r * .55}q0-${r * .55} ${r * .5}-${r * .55}t${r * .5} ${r * .55}z" fill="#fff"/>
            <ellipse cx="${x - r * .3}" cy="${y - r * .5}" rx="${r * .35}" ry="${r * .2}" fill="#fff" opacity=".55"/>`).join('')}`,
};

function desenhoAppCel(app) {
    if (ICONES_ICS[app.id]) return `<svg class="svg-app-cel ics-app-cel" viewBox="0 0 60 60" aria-hidden="true">${ICONES_ICS[app.id]()}</svg>`;
    if (ICONES_ANDROID.has(app.id)) return `<img class="png-app-cel" src="imagens/celular/icones/${app.id}.png?v=2" alt="" draggable="false">`;
    if (ICONES_CEL[app.id]) return `<svg class="svg-app-cel" viewBox="0 0 60 60" aria-hidden="true">${ICONES_CEL[app.id]()}</svg>`;
    return `<span class="foto-app-cel" style="--cor:${app.cor}"><img src="${app.img || urlIcone(app.ico, 32)}" alt=""></span>`;
}

function iconeAppCel(app) {
    const contador = app.id === 'zap' ? '<span class="contador-zap" hidden></span>' : '';
    return `<button class="app-cel" type="button" data-app-cel="${app.id}">
        <span class="icone-app-cel">${desenhoAppCel(app)}${contador}</span>
        <span class="nome-app-cel">${esc(app.nome)}</span>
    </button>`;
}

function montarCelular() {
    const layout = cel.tablet ? 'tablet' : 'celular';
    if (cel.montado === layout) return;
    cel.montado = layout;
    const seta = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 5 4 10l5 5M4 10h10a6 6 0 0 1 0 12h-3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const menu = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
    const gaveta = `<button class="app-cel" type="button" data-cel="gaveta">
        <span class="icone-app-cel icone-gaveta">${'<i></i>'.repeat(9)}</span><span class="nome-app-cel">Aplicativos</span>
    </button>`;
    // no tablet nao tem a fileira de baixo: esses apps vao pra primeira pagina
    const paginasLista = cel.tablet ? [[...DOCK_CEL, ...PAGINAS_CEL[0]], PAGINAS_CEL[1]] : PAGINAS_CEL;
    const voltar = '<svg viewBox="0 0 32 24" width="30" height="22" aria-hidden="true"><path d="M11 4 4 11l7 7M4 11h15a7 7 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const casa = '<svg viewBox="0 0 32 24" width="30" height="22" aria-hidden="true"><path d="M5 12 16 3l11 9M8 10v11h16V10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>';
    const recentes = '<svg viewBox="0 0 32 24" width="30" height="22" aria-hidden="true"><rect x="9" y="3" width="17" height="13" rx="1" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M6 7v13h17" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>';
    const statusIcones = `
                <span class="wifi-cel" id="wifi-cel"><svg viewBox="0 0 24 18" width="16" height="12" aria-hidden="true"><path d="M12 17 1 5.5a16 16 0 0 1 22 0z" fill="#fff"/></svg></span>
                <span class="rede-cel" id="rede-cel">3G</span>
                <span class="sinal-cel" id="sinal-cel"><i></i><i></i><i></i><i></i></span>
                <span class="bateria-cel" id="bateria-cel"><i></i></span>`;
    const paginas = paginasLista.map((ids, i) => `<div class="pagina-cel">
        ${i === 0 ? `<div class="widget-cel">
            <b class="hora-cel-grande"></b>
            <div class="linha-widget"><span class="ceu-widget" id="ceu-widget"></span><span><b id="saudacao-widget"></b><span class="data-cel"></span></span></div>
            <span class="local-widget">Quarto do Lucas</span>
        </div>` : ''}
        ${ids.map(id => iconeAppCel(appCel(id))).join('')}
    </div>`).join('');
    const todos = [...APPS_CEL].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    $('#celular').innerHTML = `${defsCel()}
        ${cel.tablet ? '' : `<div class="status-cel" data-cel="cortina">
            <span class="notif-cel" id="notif-cel"></span>
            <span class="icones-status-cel">${statusIcones}
                <b class="hora-cel"></b>
            </span>
        </div>`}
        <div class="bloqueio-cel" id="bloqueio-cel" hidden>
            <div class="relogio-bloqueio"><b class="hora-cel-grande"></b><span class="data-cel"></span></div>
            <div class="aviso-bloqueio" id="aviso-bloqueio"></div>
            <div class="cadeado-bloqueio" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="#fff" stroke-width="2"/><rect x="5" y="11" width="14" height="10" rx="2" fill="#fff"/></svg></div>
            ${cel.tablet ? '<div class="anel-bloqueio" aria-hidden="true"><i></i></div>' : ''}
            <p class="dica-bloqueio">${cel.tablet ? 'Arraste pra fora do círculo pra desbloquear' : 'Deslize a tela para desbloquear'}</p>
            <p class="operadora-bloqueio">Lucas Telecom</p>
        </div>
        <div class="inicio-cel" id="inicio-cel" hidden>
            ${cel.tablet ? `<div class="topo-tablet">
                <button type="button" class="busca-tablet" data-app-cel="pesquisar"><b>Pesquisar</b><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="10" cy="10" r="6" fill="none" stroke="#fff" stroke-width="2"/><path d="m15 15 6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg></button>
                <button type="button" class="apps-tablet" data-cel="gaveta" aria-label="Aplicativos">${'<i></i>'.repeat(9)}<span>APPS</span></button>
            </div>` : ''}
            <div class="paginas-cel" id="paginas-cel">${paginas}</div>
            <div class="pontos-cel" id="pontos-cel">${paginasLista.map((_, i) => `<i class="${i ? '' : 'ativo casinha'}"></i>`).join('')}</div>
            ${cel.tablet ? '' : `<div class="dock-cel">${DOCK_CEL.map(id => iconeAppCel(appCel(id))).join('')}${gaveta}</div>`}
        </div>
        <div class="recentes-tablet" id="recentes-tablet" hidden></div>
        <div class="gaveta-cel" id="gaveta-cel" hidden>
            <div class="topo-gaveta"><b class="aba-gaveta">APLICATIVOS</b><span>${todos.length} apps · A-Z</span></div>
            <div class="grade-gaveta">${todos.map(iconeAppCel).join('')}</div>
        </div>
        <div class="barra-app-cel" id="barra-app-cel">
            <button class="voltar-app-cel" type="button" data-cel="voltar" aria-label="Voltar"><span id="ico-app-cel"></span></button>
            <b id="nome-app-cel"></b>
            <button class="mais-app-cel" type="button" data-cel="menu" aria-label="Mais opções"><i></i><i></i><i></i></button>
        </div>
        <div class="config-cel" id="config-cel" hidden></div>
        <div class="camera-cel" id="camera-cel" hidden></div>
        <div class="energia-cel" id="energia-cel" hidden></div>
        <div class="cortina-cel" id="cortina-cel" hidden></div>
        <div class="opcoes-cel" id="opcoes-cel" hidden>
            <button type="button" data-cel="config">Configurações</button>
            <button type="button" data-cel="bloquear">Bloquear a tela</button>
            <button type="button" data-cel="energia">Desligar</button>
            <button type="button" data-cel="pc">Usar a interface de computador</button>
        </div>
        ${cel.tablet ? `<div class="sistema-tablet">
            <div class="teclas-tablet">
                <button type="button" data-cel="voltar" aria-label="Voltar">${voltar}</button>
                <button type="button" data-cel="inicio" aria-label="Tela inicial">${casa}</button>
                <button type="button" data-cel="recentes" aria-label="Apps recentes">${recentes}</button>
                <button type="button" data-cel="menu" class="menu-tablet" aria-label="Menu">${menu}</button>
            </div>
            <button type="button" class="status-tablet" data-cel="cortina">
                <span class="notif-cel" id="notif-cel"></span>
                <b class="hora-cel"></b>
                <span class="icones-status-cel">${statusIcones}</span>
            </button>
        </div>` : `<div class="teclas-cel">
            <button type="button" data-cel="menu" aria-label="Menu">${menu}</button>
            <button type="button" data-cel="inicio" class="tecla-home" aria-label="Tela inicial"></button>
            <button type="button" data-cel="voltar" aria-label="Voltar">${seta}</button>
        </div>`}`;

    // bolinhas das paginas da tela inicial acompanham o arrastar
    const lista = $('#paginas-cel');
    lista.addEventListener('scroll', () => {
        const i = Math.round(lista.scrollLeft / lista.clientWidth);
        $$('#pontos-cel i').forEach((p, n) => p.classList.toggle('ativo', n === i));
    }, { passive: true });

    // deslizar a tela de bloqueio desbloqueia (com as ondinhas de agua do touchwiz)
    const bloqueio = $('#bloqueio-cel');
    let toque = null;
    bloqueio.addEventListener('pointerdown', e => {
        toque = { x: e.clientX, y: e.clientY, ultima: 0 };
        ondaCel(e.clientX, e.clientY);
        try { bloqueio.setPointerCapture(e.pointerId); } catch { /* alguns navegadores nao deixam */ }
    });
    bloqueio.addEventListener('pointermove', e => {
        if (!toque) return;
        if (Date.now() - toque.ultima > 70) {
            toque.ultima = Date.now();
            ondaCel(e.clientX, e.clientY);
        }
        if (Math.hypot(e.clientX - toque.x, e.clientY - toque.y) > 110) {
            toque = null;
            desbloquearCel();
        }
    });
    bloqueio.addEventListener('pointerup', () => {
        if (toque) bloqueio.querySelector('.dica-bloqueio').classList.add('pisca');
        setTimeout(() => bloqueio.querySelector('.dica-bloqueio').classList.remove('pisca'), 700);
        toque = null;
    });

    if (cel.ouvindo) return;
    cel.ouvindo = true;
    $('#celular').addEventListener('click', e => {
        if (Date.now() < (cel.ignorarToqueAte || 0)) return;
        const app = e.target.closest('[data-app-cel]');
        if (app || e.target.closest('.teclas-cel button')) vibrar(12);
        if (app) {
            // o app abre "saindo" do icone tocado
            const r = app.getBoundingClientRect();
            document.body.style.setProperty('--ox', Math.round(r.left + r.width / 2) + 'px');
            document.body.style.setProperty('--oy', Math.round(r.top + r.height / 2 - 70) + 'px');
            return abrirAppCel(app.dataset.appCel);
        }
        const b = e.target.closest('[data-cel]');
        if (!b) return;
        const acao = b.dataset.cel;
        if (acao !== 'menu') $('#opcoes-cel').hidden = true;
        if (acao !== 'recentes' && $('#recentes-tablet')) $('#recentes-tablet').hidden = true;
        if (acao === 'inicio') mostrarInicioCel();
        if (acao === 'voltar') voltarCel();
        if (acao === 'gaveta') {
            $('#gaveta-cel').hidden = false;
            document.body.classList.add('cel-gaveta');
        }
        if (acao === 'menu') $('#opcoes-cel').hidden = !$('#opcoes-cel').hidden;
        if (acao === 'cortina') abrirCortinaCel();
        if (acao === 'fechar-cortina') $('#cortina-cel').hidden = true;
        if (acao === 'config') abrirAppCel('config');
        if (acao === 'bloquear') bloquearCel();
        if (acao === 'pc') sairModoCelular();
        if (acao === 'wifi') {
            alternarInternet();
            atualizarCel();
            if (!$('#cortina-cel').hidden) abrirCortinaCel();
            if (!$('#config-cel').hidden) montarConfigCel();
        }
        if (acao === 'jujuba') {
            if ($('#assistente').hidden) chamarAssistente();
            else esconderAssistente();
            if (!$('#cortina-cel').hidden) abrirCortinaCel();
            if (!$('#config-cel').hidden) montarConfigCel();
        }
        if (acao === 'abrir-zap') abrirAppCel('zap');
        if (acao === 'recentes') mostrarRecentesTablet();
        if (acao === 'virar-tablet') trocarLayoutCel(true);
        if (acao === 'virar-celular') trocarLayoutCel(false);
        if (acao === 'energia') menuEnergiaCel();
        if (acao === 'desligar') desligarCel(false);
        if (acao === 'reiniciar') desligarCel(true);
        if (acao === 'cancelar-energia') $('#energia-cel').hidden = true;
    });

    navigator.getBattery?.().then(b => {
        const ler = () => { cel.bateria = b.level; cel.carregando = b.charging; atualizarCel(); };
        ler();
        b.addEventListener('levelchange', ler);
        b.addEventListener('chargingchange', ler);
    }).catch(() => {});
}

// vibradinha de celular (so depois que a pessoa ja tocou na pagina, senao o navegador reclama)
function vibrar(ms) {
    if (navigator.userActivation?.hasBeenActive) navigator.vibrate?.(ms);
}

function ondaCel(x, y) {
    const onda = document.createElement('span');
    onda.className = 'onda-cel';
    onda.style.left = x + 'px';
    onda.style.top = y + 'px';
    $('#bloqueio-cel').append(onda);
    setTimeout(() => onda.remove(), 800);
}

function dataCel(d = new Date()) {
    return `${DIAS_CEL[d.getDay()]}, ${d.getDate()} ${MESES_CEL[d.getMonth()]}`;
}

// relogio, bateria, sinal e notificacoes da barrinha de cima
function atualizarCel() {
    if (!cel.montado) return;
    const agora = new Date();
    if (cel.dia !== agora.getDate()) {
        cel.dia = agora.getDate();
        $$('#celular [data-app-cel="diario"] .icone-app-cel').forEach(el => { el.innerHTML = desenhoAppCel(appCel('diario')); });
    }
    const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    $$('#celular .hora-cel, #celular .hora-cel-grande').forEach(el => { el.textContent = hora; });
    $$('#celular .data-cel').forEach(el => { el.textContent = dataCel(agora); });
    const bateria = $('#bateria-cel');
    bateria.style.setProperty('--nivel', Math.round(cel.bateria * 100) + '%');
    bateria.classList.toggle('carregando', cel.carregando);
    bateria.classList.toggle('fraca', cel.bateria < 0.2);
    const semNet = semInternet();
    $('#rede-cel').textContent = semNet ? '' : '3G';
    $('#wifi-cel').hidden = semNet;
    // saudacao do widget muda com a hora (de noite aparece a lua)
    const h = agora.getHours();
    const saudacao = $('#saudacao-widget');
    if (saudacao) {
        saudacao.textContent = h < 5 ? 'Boa madrugada' : h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
        const noite = h < 6 || h >= 18;
        $('#ceu-widget').innerHTML = noite
            ? '<svg viewBox="0 0 40 40" width="34" height="34"><path d="M26 6a15 15 0 1 0 8 26A13 13 0 0 1 26 6z" fill="#fff7c2"/></svg>'
            : '<svg viewBox="0 0 40 40" width="34" height="34"><g stroke="#ffd54a" stroke-width="3" stroke-linecap="round"><path d="M20 2v5M20 33v5M2 20h5M33 20h5M7 7l3.5 3.5M29.5 29.5 33 33M7 33l3.5-3.5M29.5 10.5 33 7"/></g><circle cx="20" cy="20" r="9" fill="#ffd54a"/></svg>';
    }
    $('#sinal-cel').classList.toggle('sem-sinal', semNet);
    const zap = avisoZap.naoLidas;
    $('#notif-cel').innerHTML = zap ? `<img src="${urlIcone('msn_messenger')}" alt="" title="${zap} mensagens novas no Zap">` : '';
    $('#aviso-bloqueio').innerHTML = zap
        ? `<img src="${urlIcone('msn_messenger')}" alt=""> ${zap > 99 ? '99+' : zap} ${zap === 1 ? 'mensagem nova' : 'mensagens novas'} no Zap`
        : '';
}

// tablet de verdade: tela de toque com o lado menor de 600px pra cima
function ehTablet() {
    return celularPossivel() && Math.min(screen.width, screen.height) >= 600;
}

function entrarModoCelular(comBloqueio = true, tablet = guardar.ler('modo', '') === 'tablet') {
    cel.tablet = tablet;
    document.body.classList.toggle('cel-tablet', tablet);
    montarCelular();
    cel.ativo = true;
    guardar.salvar('modo', tablet ? 'tablet' : 'celular');
    $('#menu-iniciar').hidden = true;
    document.body.classList.add('modo-celular');
    $('#celular').hidden = false;
    atualizarCel();
    if (!cel.relogio) cel.relogio = setInterval(atualizarCel, 10000);
    if (comBloqueio) bloquearCel();
    else mostrarInicioCel();
}

function sairModoCelular() {
    fecharAppAtualCel();
    cel.ativo = false;
    guardar.salvar('modo', 'pc');
    $('#celular').hidden = true;
    document.body.classList.remove('cel-tablet');
    document.body.classList.remove('modo-celular', 'cel-bloqueado', 'cel-inicio', 'cel-app', 'cel-app-site', 'cel-app-completo', 'cel-app-janela', 'cel-app-config', 'cel-app-camera', 'cel-gaveta', 'cel-desligado');
    const nav = $('#navegador');
    nav.hidden = false;
    nav.classList.remove('minimizada');
    atualizarTarefas();
    // a pagina volta a ser a do site normal
    mostrarPagina();
    assistenteFalar('Voltamos pro computador! Se quiser o modo celular de novo, ele fica no menu Iniciar.');
}

function bloquearCel() {
    fecharAppAtualCel();
    document.body.classList.remove('cel-inicio', 'cel-app', 'cel-app-site', 'cel-app-completo', 'cel-app-janela', 'cel-app-config', 'cel-app-camera', 'cel-gaveta');
    document.body.classList.add('cel-bloqueado');
    $('#camera-cel').hidden = true;
    const bloqueio = $('#bloqueio-cel');
    bloqueio.classList.remove('saindo');
    bloqueio.hidden = false;
    $('#inicio-cel').hidden = true;
    $('#gaveta-cel').hidden = true;
    $('#config-cel').hidden = true;
    atualizarCel();
}

function desbloquearCel() {
    const bloqueio = $('#bloqueio-cel');
    // o dedo que desbloqueou nao pode "clicar" no que aparece embaixo dele
    cel.ignorarToqueAte = Date.now() + 600;
    bloqueio.classList.add('saindo');
    mostrarInicioCel();
    document.body.classList.add('cel-bloqueado');
    setTimeout(() => {
        bloqueio.hidden = true;
        document.body.classList.remove('cel-bloqueado');
        // a jujuba pode ter ficado fora da tela enquanto tava escondida
        const jujuba = $('#assistente');
        if (jujuba.style.left) {
            const r = jujuba.getBoundingClientRect();
            colocarAssistente(r.left, r.top);
        }
        if (cel.primeiraVez) {
            cel.primeiraVez = false;
            assistenteFalar('Bem-vindo ao Quarto do Lucas Galaxy! Toque num aplicativo pra abrir. O botão do meio volta pra tela inicial e a setinha volta uma tela.');
        }
    }, 380);
}

// o app que tava aberto sai da frente (a fazenda fecha de vez pra musica parar)
function fecharAppAtualCel() {
    const app = cel.app;
    cel.app = null;
    if (app?.camera) desligarCameraCel();
    // a tv para de tocar quando sai do app
    if (app?.rota === 'tv') desligarTV();
    if (!app?.janela) return;
    const janela = document.getElementById(app.janela);
    if (app.janela === 'fazenda') {
        janela.classList.remove('maximizada');
        acaoJanela(janela, 'fechar');
    } else {
        janela.hidden = true;
    }
    ajustarDeitados();
}

// botao de apps recentes do tablet (igual ao do android 4.0)
function mostrarRecentesTablet() {
    const painel = $('#recentes-tablet');
    if (!painel) return;
    if (!painel.hidden) return (painel.hidden = true);
    const lista = (cel.recentes || []).map(appCel).filter(Boolean);
    painel.innerHTML = lista.length
        ? `<b>Apps recentes</b>${lista.map(a => `<button type="button" class="recente-tablet" data-app-cel="${a.id}"><span class="icone-app-cel">${desenhoAppCel(a)}</span><span>${esc(a.nome)}</span></button>`).join('')}`
        : '<b>Apps recentes</b><p>Nenhum app aberto ainda.</p>';
    painel.hidden = false;
}

function trocarLayoutCel(tablet) {
    fecharAppAtualCel();
    entrarModoCelular(false, tablet);
    abrirAppCel('config');
}

function mostrarInicioCel() {
    if (!cel.ativo) return;
    fecharAppAtualCel();
    document.body.classList.remove('cel-app', 'cel-app-site', 'cel-app-completo', 'cel-app-janela', 'cel-app-config', 'cel-app-camera', 'cel-gaveta');
    document.body.classList.add('cel-inicio');
    $('#camera-cel').hidden = true;
    $('#inicio-cel').hidden = false;
    $('#gaveta-cel').hidden = true;
    $('#config-cel').hidden = true;
    $('#cortina-cel').hidden = true;
    $('#opcoes-cel').hidden = true;
    window.scrollTo(0, 0);
}

function abrirAppCel(id) {
    const app = appCel(id);
    if (!app) return;
    if (app.jujuba) {
        if ($('#assistente').hidden) chamarAssistente();
        else assistenteFalar(sorteio(FALAS_ASSISTENTE.soltas));
        return;
    }
    fecharAppAtualCel();
    cel.app = app;
    cel.voltas = 0;
    // guarda os ultimos apps abertos (pro botao de recentes do tablet)
    cel.recentes = [app.id, ...(cel.recentes || []).filter(id => id !== app.id)].slice(0, 8);
    const corpo = document.body;
    corpo.classList.remove('cel-inicio', 'cel-gaveta', 'cel-app-site', 'cel-app-completo', 'cel-app-janela', 'cel-app-config', 'cel-app-camera');
    $('#camera-cel').hidden = true;
    corpo.classList.add('cel-app');
    $('#inicio-cel').hidden = true;
    $('#gaveta-cel').hidden = true;
    $('#cortina-cel').hidden = true;
    $('#config-cel').hidden = true;
    $('#ico-app-cel').outerHTML = `<span id="ico-app-cel">${desenhoAppCel(app)}</span>`;
    $('#nome-app-cel').textContent = app.nome;
    $('#barra-app-cel').style.setProperty('--cor-app', app.cor);
    // efeitinho de app abrindo
    corpo.classList.remove('abrindo-app');
    void corpo.offsetWidth;
    corpo.classList.add('abrindo-app');
    setTimeout(() => corpo.classList.remove('abrindo-app'), 400);

    if (app.camera) {
        corpo.classList.add('cel-app-camera');
        abrirCameraCel();
        return;
    }
    if (app.config) {
        corpo.classList.add('cel-app-config');
        montarConfigCel();
        $('#config-cel').hidden = false;
        return;
    }
    if (app.rota) {
        corpo.classList.add('cel-app-site');
        if (app.completo) corpo.classList.add('cel-app-completo');
        const nav = $('#navegador');
        nav.hidden = false;
        nav.classList.remove('minimizada', 'maximizada');
        nav.style.translate = '';
        if (location.hash.slice(1) !== app.rota) {
            cel.voltando = true;
            location.hash = '#' + app.rota;
        } else {
            mostrarPagina();
        }
        window.scrollTo(0, 0);
        return;
    }
    corpo.classList.add('cel-app-janela');
    abrirJanela(app.janela);
    const janela = document.getElementById(app.janela);
    // a fazenda e jogo de tela deitada: abre em tela cheia
    if (app.janela === 'fazenda') {
        janela.classList.add('maximizada');
        ajustarDeitados();
    }
}

function voltarCel() {
    if (!$('#energia-cel').hidden && !document.body.classList.contains('cel-desligado')) return ($('#energia-cel').hidden = true);
    if (cel.app?.camera && voltarCameraCel()) return;
    if (!$('#cortina-cel').hidden) return ($('#cortina-cel').hidden = true);
    if (!$('#opcoes-cel').hidden) return ($('#opcoes-cel').hidden = true);
    if (!$('#gaveta-cel').hidden) return mostrarInicioCel();
    if (cel.app?.rota && cel.voltas > 0) {
        cel.voltas--;
        cel.voltando = true;
        return history.back();
    }
    if (cel.app) mostrarInicioCel();
}

// navegando dentro de um app do site: conta as paginas pra setinha de voltar funcionar
window.addEventListener('hashchange', () => {
    if (!cel.ativo || !cel.app?.rota) return;
    if (cel.voltando) cel.voltando = false;
    else cel.voltas++;
    if (cel.app.completo) return;
    const nome = rotaAtual().nome;
    const outro = APPS_CEL.find(a => a.rota === nome);
    $('#nome-app-cel').textContent = outro ? outro.nome : (PAGINAS[nome]?.titulo || cel.app.nome);
    if (outro) $('#ico-app-cel').innerHTML = desenhoAppCel(outro);
});

// o x da janela (fazenda deitada, por exemplo) volta pra tela inicial
function celJanelaFechou(janela, acao) {
    if (!cel.ativo || !cel.app?.janela || janela.id !== cel.app.janela) return;
    if (acao === 'fechar' || acao === 'minimizar') mostrarInicioCel();
}

function abrirCortinaCel() {
    const zap = avisoZap.naoLidas;
    const jujubaLigada = !$('#assistente').hidden;
    $('#cortina-cel').innerHTML = `
        <div class="topo-cortina"><b class="hora-cel-grande"></b><span class="data-cel"></span></div>
        <div class="atalhos-cortina">
            <button type="button" data-cel="wifi" class="${semInternet() ? '' : 'ligado'}"><img src="${urlIcone('network_wireless', 32)}" alt=""><span>Wi-Fi</span></button>
            <button type="button" data-cel="jujuba" class="${jujubaLigada ? 'ligado' : ''}"><img src="imagens/assistente/agua-viva.png?v=2" alt=""><span>Jujuba</span></button>
            <button type="button" data-cel="bloquear"><img src="${urlIcone('lock', 32)}" alt=""><span>Bloquear</span></button>
            <button type="button" data-cel="pc"><img src="${urlIcone('monitor', 32)}" alt=""><span>Modo PC</span></button>
            <button type="button" data-cel="energia"><img src="${urlIcone('control_power', 32)}" alt=""><span>Desligar</span></button>
        </div>
        <div class="titulo-cortina">Notificações</div>
        ${zap ? `<button type="button" class="notificacao-cel" data-cel="abrir-zap"><img src="${urlIcone('msn_messenger', 32)}" alt=""><span><b>Zap do Lucas</b>${zap} ${zap === 1 ? 'mensagem nova' : 'mensagens novas'}</span></button>` : '<p class="sem-notificacao">Sem notificações</p>'}
        <button type="button" class="fechar-cortina" data-cel="fechar-cortina" aria-label="Fechar">▲</button>`;
    $('#cortina-cel').hidden = false;
    atualizarCel();
}

function montarConfigCel() {
    const versao = (document.querySelector('script[src*="script.js"]')?.getAttribute('src').match(/v=(\d+)/) || [])[1] || '1';
    const chave = (ligado, acao) => `<button type="button" class="chave-cel ${ligado ? 'ligado' : ''}" data-cel="${acao}">${ligado ? 'LIG' : 'DESL'}</button>`;
    $('#config-cel').innerHTML = `
        <div class="grupo-config">Conexões</div>
        <div class="item-config"><img src="${urlIcone('network_wireless', 32)}" alt=""><span><b>Wi-Fi</b>${semInternet() ? 'Desligado (vai aparecer o jogo do dinossauro)' : 'Conectado à internet do Lucas'}</span>${chave(!semInternet(), 'wifi')}</div>
        <div class="grupo-config">Meu dispositivo</div>
        <div class="item-config"><img src="imagens/assistente/agua-viva.png?v=2" alt=""><span><b>Jujuba, a assistente</b>Dicas que ninguém pediu</span>${chave(!$('#assistente').hidden, 'jujuba')}</div>
        <button type="button" class="item-config" data-cel="bloquear"><img src="${urlIcone('lock', 32)}" alt=""><span><b>Tela de bloqueio</b>Bloquear agora</span></button>
        <div class="grupo-config">Exibição</div>
        <div class="item-config"><img src="${urlIcone('phone_vintage', 32)}" alt=""><span><b>Estilo da interface</b>${cel.tablet ? 'Tablet (Android 4.0)' : 'Celular (Galaxy)'}</span>
            <button type="button" class="chave-cel ${cel.tablet ? '' : 'ligado'}" data-cel="virar-celular">CEL</button>
            <button type="button" class="chave-cel ${cel.tablet ? 'ligado' : ''}" data-cel="virar-tablet">TAB</button></div>
        <button type="button" class="item-config" data-cel="pc"><img src="${urlIcone('monitor', 32)}" alt=""><span><b>Interface de computador</b>Voltar pro Windows XP do Lucas</span></button>
        <button type="button" class="item-config" data-cel="energia"><img src="${urlIcone('control_power', 32)}" alt=""><span><b>Desligar o aparelho</b>Desligar ou reiniciar</span></button>
        <div class="grupo-config">Sobre o dispositivo</div>
        <div class="item-config"><img src="${urlIcone('information', 32)}" alt=""><span><b>Modelo</b>GT-L0CAS Galaxy Quarto Duos</span></div>
        <div class="item-config"><img src="${urlIcone('information', 32)}" alt=""><span><b>Versão do Android</b>4.0.4 (Ice Cream Sandwich)</span></div>
        <div class="item-config"><img src="${urlIcone('information', 32)}" alt=""><span><b>Versão do site</b>${esc(versao)}</span></div>
        <div class="item-config"><img src="imagens/celular/icones/projetos.png" alt=""><span><b>Ícones</b>Android 4.0 · Android Open Source Project (licença Apache 2.0)</span></div>`;
}


// --- apps do celular por dentro: cada pagina ganha uma tela de aplicativo de android ---
// (os formularios e botoes usam os mesmos data-form/data-apagar do site, entao tudo continua funcionando)

const ENVIAR_CEL = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 20.5 21 12 3 3.5v6.6l12 1.9-12 1.9z" fill="currentColor"/></svg>';
const SETA_CEL = '<svg class="seta-item-cel" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

function secaoCel(titulo, extra = '') {
    return `<div class="secao-cel"><span>${titulo}</span>${extra}</div>`;
}

function vazioCel(dados, texto) {
    return `<p class="vazio-cel">${dados?.pronto === false ? 'carregando...' : esc(texto)}</p>`;
}

// mensagem estilo lista de sms (foto, nome, hora e texto)
function mensagensCel(itens, comBotao, nomeLista = 'recados') {
    let anterior = 0;
    return itens.map(r => {
        anterior = numeroBoneco(r.autor, anterior);
        return `<div class="msg-cel">
            ${avatar(r.autor, '', anterior)}
            <div class="corpo-msg-cel">
                <div class="topo-msg-cel"><b>${esc(r.autor)}${amigoPeloNome(r.autor) ? ` ${icone('heart')}` : ''}</b><span>${esc(r.data)}</span></div>
                <div class="texto-msg-cel">${formatar(r.texto)}</div>
                ${comBotao && podeApagar() ? `<button class="apagar-cel" data-apagar="${r.id}" data-lista="${nomeLista}">Apagar</button>` : ''}
            </div>
        </div>`;
    }).join('');
}

// barra de escrever presa embaixo (igual ao app de mensagens)
function comporCel({ form, id, nome = true, placeholder, maximo = 500, botao = 'Enviar' }) {
    return `<form class="form compor-cel" data-form="${form}">
        ${nome ? `<input name="autor" class="nome-compor-cel" placeholder="Seu nome" maxlength="30" value="${esc(souDono && form === 'recado' ? DADOS.nome : meuNome())}" required>` : ''}
        <div class="linha-compor-cel">
            <button type="button" class="carinhas-cel" data-cel-emoticons aria-label="Emoticons">${icone('emotion_smile')}</button>
            <textarea name="texto" id="${id}" rows="1" placeholder="${esc(placeholder)}" maxlength="${maximo}" required></textarea>
            <button type="submit" class="enviar-cel" aria-label="${botao}">${ENVIAR_CEL}</button>
        </div>
        <div class="painel-emoticons-cel" hidden>${emoticonsHTML(id)}</div>
    </form>`;
}

function fotoQuadradaCel(f, i, album) {
    return `<button class="foto-grade-cel" data-foto="${i}" data-album="${album}" aria-label="${esc(f.legenda || 'foto')}">${fotoHTML(f)}</button>`;
}

const TELAS_CEL = {
    recados() {
        const itens = recados.todos();
        return `<div class="app-nativo com-compor">
            ${secaoCel(`Conversas`, `<small>${itens.length} recados</small>`)}
            <div class="lista-cel">${mensagensCel(itens, true) || vazioCel(recados, 'nenhum recado ainda. manda o primeiro!')}</div>
            ${desenhosPublicos().length ? `${secaoCel('Mural de desenhos', `<small>${desenhosPublicos().length}</small>`)}<div class="cartao-cel">${desenhosHTML('mural')}</div>` : ''}
            ${souDono ? `${secaoCel('Desenhos recebidos', `<small>só você vê</small>`)}<div class="cartao-cel">${desenhosHTML()}</div>` : ''}
            ${comporCel({ form: 'recado', id: 'texto-recado', placeholder: `Recado pro ${DADOS.nome}` })}
        </div>`;
    },

    depoimentos() {
        const itens = depoimentos.todos();
        return `<div class="app-nativo com-compor">
            ${souDono
                ? `${secaoCel('Depoimentos', `<small>${itens.length} · só você vê</small>`)}<div class="lista-cel">${mensagensCel(itens, true, 'depoimentos') || vazioCel(depoimentos, 'nenhum depoimento ainda')}</div>`
                : `<div class="cartao-cel destaque-cel">${gif('coracao')}<p>Escreva um depoimento sobre o ${esc(DADOS.nome)}. Ele vai direto pra ele, só ele lê. ${textoRico('(L)')}</p></div>`}
            ${comporCel({ form: 'depoimento', id: 'texto-depoimento', placeholder: 'Escreva seu depoimento...', maximo: 1000 })}
        </div>`;
    },

    perfil() {
        const n = DADOS.notas;
        return `<div class="app-nativo">
            <div class="capa-perfil-cel">
                <div class="foto-perfil-cel">${fotoPerfil()}</div>
                <h1>${esc(DADOS.nome)}</h1>
                <p>${textoRico(DADOS.status)}</p>
            </div>
            <div class="contadores-cel">
                <a href="#recados"><b>${recados.todos().length}</b>recados</a>
                <a href="#photodump"><b>${todasAsFotos().length}</b>fotos</a>
                <a href="#amigos"><b>${amigos.todos().length}</b>amigos</a>
            </div>
            ${secaoCel('Informações')}
            <div class="lista-cel">${DADOS.perfil.map(([campo, valor]) => `<div class="item-cel duas-linhas"><span class="rotulo-cel">${esc(campo)}</span><span>${textoRico(valor)}</span></div>`).join('')}</div>
            ${secaoCel('Notas')}
            <div class="lista-cel">
                <div class="item-cel"><span class="cresce-cel">Confiável</span>${coracoes(n.confiavel, 'emotion_smile')}</div>
                <div class="item-cel"><span class="cresce-cel">Legal</span>${coracoes(n.legal, 'ice_cube')}</div>
                <div class="item-cel"><span class="cresce-cel">Sexy</span>${coracoes(n.sexy, 'heart')}</div>
            </div>
            ${secaoCel('Mais')}
            <div class="lista-cel">
                <a class="item-cel" href="#sobre">${icone('heart', 32)}<span class="cresce-cel">Sobre mim</span>${SETA_CEL}</a>
                <a class="item-cel" href="#depoimentos">${icone('award_star_gold_1', 32)}<span class="cresce-cel">${souDono ? 'Ver depoimentos' : 'Escrever um depoimento'}</span>${SETA_CEL}</a>
                <a class="item-cel" href="#redes">${icone('world', 32)}<span class="cresce-cel">Redes sociais</span>${SETA_CEL}</a>
            </div>
        </div>`;
    },

    sobre() {
        const interesses = (DADOS.perfil.find(p => p[0] === 'Interesses')?.[1] || '').split(',').filter(x => x.trim());
        return `<div class="app-nativo">
            <div class="cartao-cel texto-cel">${DADOS.sobre.map(p => `<p>${textoRico(p)}</p>`).join('')}</div>
            ${interesses.length ? `${secaoCel('Interesses')}<div class="fichas-cel">${interesses.map(x => `<span>${esc(x.trim())}</span>`).join('')}</div>` : ''}
            ${secaoCel(`${icone('heart')} Eu gosto de`)}
            <div class="lista-cel">${DADOS.gosto.map(g => `<div class="item-cel">${esc(g)}</div>`).join('')}</div>
            ${secaoCel(`${icone('heart_break')} Eu não gosto de`)}
            <div class="lista-cel">${DADOS.naoGosto.map(g => `<div class="item-cel">${esc(g)}</div>`).join('')}</div>
        </div>`;
    },

    albuns() {
        const lista = albuns();
        const fotos = todasAsFotos();
        return `<div class="app-nativo galeria-cel">
            ${lista.length ? `<div class="grade-pastas-cel">
                ${fotos.length ? `<a class="pasta-cel" href="#photodump">${fotoHTML(fotos[0])}<span><b>Photodump</b><small>${fotos.length}</small></span></a>` : ''}
                ${lista.map(a => `<a class="pasta-cel" href="#album/${a.id}">${fotoHTML(a.fotos[0])}<span><b>${esc(a.nome)}</b><small>${a.fotos.length}</small></span></a>`).join('')}
            </div>` : vazioCel(fotosPostadas, 'nenhum álbum ainda')}
        </div>`;
    },

    album(id) {
        const album = albuns().find(a => a.id === id);
        if (!album) return `<div class="app-nativo">${vazioCel(null, 'álbum não encontrado')}</div>`;
        return `<div class="app-nativo galeria-cel">
            ${secaoCel(esc(album.nome), `<small>${album.fotos.length} fotos</small>`)}
            <div class="grade-fotos-cel">${album.fotos.map((f, i) => fotoQuadradaCel(f, i, album.id)).join('')}</div>
        </div>`;
    },

    photodump() {
        const fotos = todasAsFotos();
        return `<div class="app-nativo galeria-cel">
            ${secaoCel('Rolo da câmera', `<small>${fotos.length} fotos</small>`)}
            ${fotos.length ? `<div class="grade-fotos-cel">${fotos.map((f, i) => fotoQuadradaCel(f, i, '*')).join('')}</div>` : vazioCel(fotosPostadas, 'nenhuma foto ainda')}
        </div>`;
    },

    redes() {
        return `<div class="app-nativo">
            ${secaoCel('Contas')}
            <div class="lista-cel">${redes().map(r => r.link
                ? `<a class="item-cel" href="${esc(linkSeguro(r.link))}" target="_blank" rel="noopener">${icone(r.icone, 32)}<span class="cresce-cel"><b>${esc(r.nome)}</b><small>${usuarioRede(r)}</small></span>${SETA_CEL}</a>`
                : `<div class="item-cel apagado-cel">${icone(r.icone, 32)}<span class="cresce-cel"><b>${esc(r.nome)}</b><small>${usuarioRede(r)} · em breve</small></span></div>`).join('')}</div>
            ${secaoCel('Falar comigo')}
            <div class="lista-cel">
                <a class="item-cel" href="#recados">${icone('email', 32)}<span class="cresce-cel"><b>Deixar um recado</b></span>${SETA_CEL}</a>
                <button class="item-cel" type="button" data-abrir="msn">${icone('msn_messenger', 32)}<span class="cresce-cel"><b>Chamar no Zap</b></span>${SETA_CEL}</button>
            </div>
        </div>`;
    },

    diario() {
        if (!diarioAberto()) {
            return `<div class="app-nativo trancado-cel">
                <svg viewBox="0 0 24 24" width="64" height="64" aria-hidden="true"><path d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="#0099cc" stroke-width="1.8"/><rect x="5" y="11" width="14" height="10" rx="2" fill="#0099cc"/><circle cx="12" cy="16" r="1.6" fill="#fff"/></svg>
                <h2>Diário bloqueado</h2>
                <p>Só o ${esc(DADOS.nome)} abre. Digite o e-mail e a senha.</p>
                <div class="cartao-cel">${formSenha()}</div>
            </div>`;
        }
        const entradas = diario.todos();
        return `<div class="app-nativo">
            <div class="cartao-cel">
                <form class="form form-diario-cel" data-form="diario">
                    <input name="titulo" placeholder="Título de hoje" maxlength="60" required>
                    <textarea name="texto" id="texto-diario" placeholder="Hoje aconteceu..." maxlength="3000" rows="4" required></textarea>
                    <div class="linha-cel"><button class="botao-cel azul" type="submit">Salvar</button><button class="botao-cel" type="button" data-comando="trancar-diario">${icone('lock')} Trancar</button></div>
                </form>
            </div>
            ${secaoCel('Páginas', `<small>${entradas.length}</small>`)}
            <div class="lista-cel">${entradas.map(e => `
                <div class="item-cel duas-linhas entrada-cel">
                    <div class="topo-msg-cel"><b>${esc(e.titulo)}</b><span>${esc(e.data)}</span></div>
                    <p>${esc(e.texto)}</p>
                    <button class="apagar-cel" data-apagar="${e.id}" data-lista="diario">Apagar</button>
                </div>`).join('') || vazioCel(diario, 'nenhuma página escrita ainda')}</div>
        </div>`;
    },

    projetos() {
        const todos = projetos.todos();
        return `<div class="app-nativo">
            ${DADOS.github ? `<a class="cartao-cel item-cel" href="${esc(linkSeguro(DADOS.github))}" target="_blank" rel="noopener">${icone('world', 32)}<span class="cresce-cel"><b>Meu GitHub</b><small>ver todos os códigos</small></span>${SETA_CEL}</a>` : ''}
            ${secaoCel('Em andamento', `<small>${todos.length}</small>`)}
            <div class="lista-cel">${todos.map(p => {
                const pct = Number(p.progresso) || 0;
                return `<div class="item-cel duas-linhas projeto-cel">
                    <div class="topo-msg-cel"><b>${esc(p.nome)}</b><span>${pct}%</span></div>
                    ${p.descricao ? `<p>${textoRico(p.descricao)}</p>` : ''}
                    <div class="progresso-cel"><span style="width:${pct}%"></span></div>
                    ${p.link ? `<a href="${esc(linkSeguro(p.link))}" target="_blank" rel="noopener">Abrir projeto</a>` : ''}
                </div>`;
            }).join('') || vazioCel(projetos, 'nenhum projeto postado ainda')}</div>
        </div>`;
    },

    playlist() {
        const lista = musicas();
        const atual = lista[player.indice];
        return `<div class="app-nativo musica-cel">
            <div class="abas-cel"><span class="ativa">Faixas</span>${DADOS.lastfm.usuario ? '<a href="#ouvidas-cel" data-rolar-cel>Tocadas</a>' : ''}</div>
            <div class="lista-cel">${lista.map((m, i) => `
                <button class="item-cel faixa-cel ${i === player.indice && player.comecou ? 'tocando-cel' : ''}" type="button" data-tocar="${i}">
                    <span class="capa-faixa-cel">${i === player.indice && player.tocando ? '<i></i><i></i><i></i>' : '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M9 18V6l10-2v12" fill="none" stroke="#fff" stroke-width="2"/><circle cx="7" cy="18" r="2.6" fill="#fff"/><circle cx="17" cy="16" r="2.6" fill="#fff"/></svg>'}</span>
                    <span class="cresce-cel"><b>${esc(m.titulo)}</b><small>${esc(m.artista)}</small></span>
                    <span class="tempo-cel">${duracao(m.duracao)}</span>
                </button>`).join('') || vazioCel(null, 'nenhuma música ainda')}</div>
            ${DADOS.lastfm.usuario ? `${secaoCel('Tocadas recentemente', '<small>Spotify</small>')}<div class="cartao-cel" id="ouvidas-cel"><div id="ouvindo-pagina">${blocoMaisOuvida()}${listaOuvindo(7)}</div></div>` : ''}
            ${spotify.playlist?.link ? `<a class="cartao-cel item-cel" href="${esc(linkSeguro(spotify.playlist.link))}" target="_blank" rel="noopener">${icone('headphone', 32)}<span class="cresce-cel"><b>Ouvir no Spotify</b><small>${esc(spotify.playlist?.nome || 'minha playlist')}</small></span>${SETA_CEL}</a>` : ''}
            ${atual ? `<div class="mini-player-cel">
                <span class="cresce-cel"><b>${player.comecou ? esc(atual.titulo) : 'Toque numa música'}</b><small>${player.comecou ? esc(atual.artista) : esc(DADOS.nome)}</small></span>
                <button type="button" data-player="anterior" aria-label="Anterior"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 5h2v14H6zM20 5v14L9 12z" fill="#fff"/></svg></button>
                <button type="button" data-player="tocar" class="play-cel" aria-label="${player.tocando ? 'Pausar' : 'Tocar'}"><svg viewBox="0 0 24 24" width="24" height="24">${player.tocando ? '<path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="#fff"/>' : '<path d="M8 5v14l11-7z" fill="#fff"/>'}</svg></button>
                <button type="button" data-player="proxima" aria-label="Próxima"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M16 5h2v14h-2zM4 5v14l11-7z" fill="#fff"/></svg></button>
            </div>` : ''}
        </div>`;
    },

    amigos() {
        const todos = [...amigos.todos()].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
        let letra = '';
        const linhas = todos.map(a => {
            const inicial = semAcento(a.nome.trim()[0] || '#').toUpperCase();
            const titulo = inicial !== letra ? `<div class="letra-cel">${esc(inicial)}</div>` : '';
            letra = inicial;
            return `${titulo}<div class="item-cel contato-cel">${fotoAmigo(a)}<span class="cresce-cel"><b>${esc(a.nome)}</b><small>amigo do ${esc(DADOS.nome)}</small></span>
                ${souDono ? `<button class="apagar-cel" data-apagar="${a.id}" data-lista="amigos">Apagar</button>` : icone('heart')}</div>`;
        }).join('');
        return `<div class="app-nativo">
            ${nuvem ? `<details class="cartao-cel novo-contato-cel">
                <summary>${icone('user_add', 32)}<span><b>Criar contato</b><small>entra pros amigos do ${esc(DADOS.nome)}</small></span></summary>
                <form class="form" data-form="amigo">
                    <label class="soltar-foto">
                        <input type="file" name="foto" accept="image/*" class="so-leitor" required>
                        <span class="previa-arquivo">${icone('user_add', 32)}<br>escolha sua foto</span>
                    </label>
                    <input name="nome" placeholder="Seu nome ou apelido" maxlength="30" value="${esc(meuNome())}" required>
                    <button class="botao-cel azul" type="submit">Salvar contato</button>
                    <span class="dica">seu nome e sua foto ficam públicos aqui.</span>
                </form>
            </details>` : ''}
            ${secaoCel('Contatos', `<small>${todos.length}</small>`)}
            <div class="lista-cel">${linhas || vazioCel(amigos, 'nenhum contato ainda... seja o primeiro!')}</div>
        </div>`;
    },

    comunidades() {
        return `<div class="app-nativo">
            ${secaoCel('Minhas comunidades', `<small>${DADOS.comunidades.length}</small>`)}
            <div class="lista-cel">${DADOS.comunidades.map(c => `<div class="item-cel">${icone(c.icone, 32)}<span class="cresce-cel"><b>${esc(c.nome)}</b><small>${numero(c.membros)} membros</small></span></div>`).join('')}</div>
        </div>`;
    },

    avaliacoes(filtro = '') {
        const todas = avaliacoes.todos().filter(a => !filtro || a.tipo === filtro);
        return `<div class="app-nativo">
            <div class="abas-cel">
                <a href="#avaliacoes" class="${!filtro ? 'ativa' : ''}">Todos</a>
                ${Object.entries(TIPOS_AVALIACAO).map(([tipo, [nome]]) => `<a href="#avaliacoes/${tipo}" class="${filtro === tipo ? 'ativa' : ''}">${nome}</a>`).join('')}
            </div>
            <div class="lista-cel">${todas.map(a => `
                <div class="item-cel avaliacao-cel">
                    ${capaAvaliacao(a)}
                    <span class="cresce-cel"><b>${esc(a.titulo)}</b>${estrelas(a.nota)}${a.comentario ? `<small>${textoRico(a.comentario)}</small>` : ''}<small>${esc(a.data)}</small></span>
                </div>`).join('') || vazioCel(avaliacoes, 'nada avaliado ainda')}</div>
        </div>`;
    },

    busca(termo = '') {
        const q = semAcento(termo.trim());
        const achados = q ? indiceBusca().filter(item => semAcento(item.titulo).includes(q)) : [];
        return `<div class="app-nativo">
            <form class="busca-cel" data-busca>
                ${icone('zoom')}<input type="search" value="${esc(termo)}" placeholder="Pesquisar no Quarto do Lucas" aria-label="Pesquisar">
            </form>
            ${q ? secaoCel('Resultados', `<small>${achados.length}</small>`) : ''}
            <div class="lista-cel">${achados.map(a => `<a class="item-cel" href="${a.link}"><span class="cresce-cel"><b>${esc(a.titulo)}</b><small>${esc(a.tipo)}</small></span>${SETA_CEL}</a>`).join('')
                || (q ? vazioCel(null, 'nada encontrado. tenta outra palavra!') : '<p class="vazio-cel">Pesquise recados, fotos, músicas, amigos...</p>')}</div>
        </div>`;
    },
};

// carinhas da barra de escrever abrem e fecham
document.addEventListener('click', e => {
    const botao = e.target.closest('[data-cel-emoticons]');
    if (botao) {
        const painel = botao.closest('form').querySelector('.painel-emoticons-cel');
        painel.hidden = !painel.hidden;
        return;
    }
    const rolar = e.target.closest('[data-rolar-cel]');
    if (rolar) {
        e.preventDefault();
        $(rolar.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// --- desligar e ligar o celular (igual um galaxy de verdade) ---

function menuEnergiaCel() {
    $('#opcoes-cel').hidden = true;
    $('#cortina-cel').hidden = true;
    const tela = $('#energia-cel');
    tela.className = 'energia-cel';
    tela.innerHTML = `<div class="dialogo-energia-cel" role="dialog" aria-label="Opções do aparelho">
        <b>Opções do aparelho</b>
        <button type="button" data-cel="desligar"><img src="${urlIcone('control_power', 32)}" alt="">Desligar</button>
        <button type="button" data-cel="reiniciar"><img src="${urlIcone('arrow_refresh', 32)}" alt="">Reiniciar</button>
        <button type="button" data-cel="cancelar-energia" class="cancelar-energia">Cancelar</button>
    </div>`;
    tela.hidden = false;
}

function desligarCel(reiniciar) {
    const tela = $('#energia-cel');
    fecharAppAtualCel();
    if (player.tocando) pararMusica();
    tela.className = 'energia-cel desligando';
    tela.innerHTML = `<div class="dialogo-energia-cel desligando-cel"><span class="girando-cel"></span>${reiniciar ? 'Reiniciando...' : 'Desligando...'}</div>`;
    vibrar(60);
    setTimeout(() => {
        // a tela apaga igual tv de tubo: vira uma linha e some
        tela.className = 'energia-cel apagando';
        tela.innerHTML = '<div class="linha-apagando-cel"></div>';
        setTimeout(() => {
            document.body.classList.add('cel-desligado');
            tela.className = 'energia-cel apagado';
            tela.innerHTML = '<p class="dica-ligar-cel">toque e segure pra ligar</p>';
            if (reiniciar) setTimeout(ligarCel, 1200);
            else ativarLigarCel(tela);
        }, 650);
    }, 1900);
}

// celular desligado: segurar o dedo um pouquinho liga (igual o botao de ligar)
function ativarLigarCel(tela) {
    let segurando = null;
    const soltar = () => clearTimeout(segurando);
    tela.onpointerdown = () => {
        tela.classList.add('mostra-dica');
        segurando = setTimeout(() => {
            tela.onpointerdown = null;
            vibrar(80);
            ligarCel();
        }, 700);
    };
    tela.onpointerup = soltar;
    tela.onpointerleave = soltar;
}

function ligarCel() {
    const tela = $('#energia-cel');
    tela.className = 'energia-cel ligando';
    tela.innerHTML = `<div class="logo-boot-cel"><b>SAMSUNG</b><span>GALAXY</span><small>Quarto do Lucas</small></div>`;
    setTimeout(() => {
        tela.classList.add('sumindo');
        document.body.classList.remove('cel-desligado');
        bloquearCel();
        setTimeout(() => { tela.hidden = true; tela.className = 'energia-cel'; }, 500);
    }, 2600);
}


// --- app de camera: camera digital antiga com efeitos (as fotos nao vao pro site, so dao pra baixar) ---

const EFEITOS_CAMERA = [
    { id: 'normal', nome: 'Normal', css: 'none' },
    { id: 'sepia', nome: 'Sépia', css: 'sepia(1) contrast(1.05)' },
    { id: 'pb', nome: 'P&B', css: 'grayscale(1) contrast(1.25)' },
    { id: 'polaroid', nome: 'Polaroid', css: 'sepia(.35) saturate(1.3) brightness(1.08) contrast(.88)' },
    { id: 'lomo', nome: 'Lomo', css: 'saturate(1.7) contrast(1.3)', vinheta: true },
    { id: 'vga', nome: 'VGA 2006', css: 'contrast(1.25) saturate(.85) brightness(1.05)', linhas: true },
    { id: 'filme', nome: 'Filme velho', css: 'sepia(.5) contrast(1.15) brightness(.95)', vinheta: true, grao: true },
    { id: 'noturna', nome: 'Visão noturna', css: 'grayscale(1) sepia(1) hue-rotate(65deg) saturate(4) brightness(1.15)', linhas: true },
    { id: 'negativo', nome: 'Negativo', css: 'invert(1)' },
];

const camera = { fluxo: null, efeito: 'normal', frente: false, data: true, timer: false, fotos: [], vendo: -1 };

function abrirCameraCel() {
    const tela = $('#camera-cel');
    camera.vendo = -1;
    tela.hidden = false;
    tela.innerHTML = `
        <div class="visor-camera-cel" id="visor-camera-cel">
            <video id="video-camera-cel" playsinline muted autoplay></video>
            <div class="vinheta-camera-cel"></div><div class="linhas-camera-cel"></div><div class="grao-camera-cel"></div>
            <div class="cantos-camera-cel"><i></i><i></i><i></i><i></i></div>
            <span class="data-camera-cel" id="data-camera-cel"></span>
            <span class="contagem-camera-cel" id="contagem-camera-cel"></span>
            <div class="flash-camera-cel" id="flash-camera-cel"></div>
            <div class="pedido-camera-cel" id="pedido-camera-cel">
                <svg viewBox="0 0 24 24" width="54" height="54" aria-hidden="true"><path d="M4 7h3l2-2h6l2 2h3v12H4z" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="13" r="3.6" fill="none" stroke="#fff" stroke-width="1.6"/></svg>
                <b>Câmera do Quarto do Lucas</b>
                <p>Pra tirar foto o site precisa da permissão da câmera do seu aparelho.</p>
                <p class="aviso-privado-cel">As fotos <b>não vão pro site</b> e ninguém mais vê: elas ficam só aqui no seu aparelho até você baixar ou apagar (e somem se fechar a página).</p>
                <button type="button" class="botao-cel azul" data-camera="ligar">Ligar a câmera</button>
            </div>
        </div>
        <div class="topo-camera-cel">
            <button type="button" data-camera="data" class="${camera.data ? 'ligado' : ''}" aria-label="Data na foto">DATA</button>
            <button type="button" data-camera="timer" class="${camera.timer ? 'ligado' : ''}" aria-label="Timer de 3 segundos">3s</button>
            <span class="resolucao-camera-cel">0.3M</span>
            <button type="button" data-camera="virar" aria-label="Trocar câmera"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 8h3l2-2h6l2 2h3v11H4z" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M9 12a3 3 0 0 1 5.5-1.5M15 14a3 3 0 0 1-5.5 1.5" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M14 9v2h-2M10 17v-2h2" fill="none" stroke="#fff" stroke-width="1.6"/></svg></button>
        </div>
        <div class="efeitos-camera-cel" id="efeitos-camera-cel">${EFEITOS_CAMERA.map(e => `<button type="button" data-efeito="${e.id}" class="${e.id === camera.efeito ? 'ativo' : ''}"><span class="amostra-efeito-cel" style="filter:${e.css}"></span>${esc(e.nome)}</button>`).join('')}</div>
        <div class="base-camera-cel">
            <button type="button" class="miniatura-camera-cel" id="miniatura-camera-cel" data-camera="ver" aria-label="Ver fotos tiradas"></button>
            <button type="button" class="disparo-camera-cel" data-camera="foto" aria-label="Tirar foto"><i></i></button>
            <span class="contador-fotos-cel" id="contador-fotos-cel"></span>
        </div>
        <div class="revisao-camera-cel" id="revisao-camera-cel" hidden></div>`;
    aplicarEfeitoCamera();
    atualizarMiniaturaCamera();
    $('#data-camera-cel').textContent = dataCamera();
    if (camera.fluxo) ligarCameraCel();
}

function dataCamera(d = new Date()) {
    const dois = n => String(n).padStart(2, '0');
    return `${dois(d.getDate())} ${dois(d.getMonth() + 1)} '${String(d.getFullYear()).slice(2)}`;
}

async function ligarCameraCel() {
    const pedido = $('#pedido-camera-cel');
    try {
        if (!navigator.mediaDevices?.getUserMedia) throw new Error('sem suporte');
        desligarCameraCel(false);
        camera.fluxo = await navigator.mediaDevices.getUserMedia({ video: { facingMode: camera.frente ? 'user' : 'environment', width: { ideal: 1280 } }, audio: false });
        const video = $('#video-camera-cel');
        if (!video) return desligarCameraCel();
        video.srcObject = camera.fluxo;
        video.classList.toggle('espelhado', camera.frente);
        pedido.hidden = true;
    } catch (erro) {
        pedido.hidden = false;
        pedido.querySelector('p').textContent = erro?.name === 'NotAllowedError'
            ? 'Você não deixou o site usar a câmera. Dá pra liberar nas permissões do navegador e tentar de novo.'
            : 'Não achei nenhuma câmera nesse aparelho (ou o navegador não deixa usar).';
    }
}

// desliga a luzinha da camera (sempre que sai do app)
function desligarCameraCel(limpar = true) {
    camera.fluxo?.getTracks().forEach(f => f.stop());
    camera.fluxo = null;
    const video = $('#video-camera-cel');
    if (video) video.srcObject = null;
    if (limpar) $('#camera-cel').hidden = true;
}

function aplicarEfeitoCamera() {
    const efeito = EFEITOS_CAMERA.find(e => e.id === camera.efeito);
    const visor = $('#visor-camera-cel');
    if (!visor) return;
    $('#video-camera-cel').style.filter = efeito.css;
    visor.classList.toggle('com-vinheta', !!efeito.vinheta);
    visor.classList.toggle('com-linhas', !!efeito.linhas);
    visor.classList.toggle('com-grao', !!efeito.grao);
    visor.classList.toggle('com-data', camera.data);
    $$('#efeitos-camera-cel [data-efeito]').forEach(b => b.classList.toggle('ativo', b.dataset.efeito === camera.efeito));
}

// os efeitos na foto de verdade (pixel por pixel, igual as cameras antigas faziam)
function efeitoNaFoto(ctx, w, h, efeito) {
    if (efeito.id === 'vga') {
        // pouca resolucao: desenha pequeno e estica sem suavizar
        const pequeno = document.createElement('canvas');
        pequeno.width = 160; pequeno.height = Math.round(160 * h / w);
        pequeno.getContext('2d').drawImage(ctx.canvas, 0, 0, pequeno.width, pequeno.height);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(pequeno, 0, 0, w, h);
    }
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    const cx = w / 2, cy = h / 2, raio = Math.hypot(cx, cy);
    for (let i = 0; i < d.length; i += 4) {
        let r = d[i], g = d[i + 1], b = d[i + 2];
        const cinza = 0.299 * r + 0.587 * g + 0.114 * b;
        switch (efeito.id) {
            case 'sepia': [r, g, b] = [cinza * 1.07 + 25, cinza * 0.95 + 12, cinza * 0.75]; break;
            case 'pb': r = g = b = (cinza - 128) * 1.25 + 128; break;
            case 'polaroid': r = r * 0.86 + 40; g = g * 0.86 + 30; b = b * 0.8 + 22; break;
            case 'lomo': { const m = (r + g + b) / 3; r = (r - m) * 1.6 + (m - 128) * 1.3 + 128; g = (g - m) * 1.6 + (m - 128) * 1.3 + 128; b = (b - m) * 1.6 + (m - 128) * 1.3 + 128; break; }
            case 'vga': r = Math.round(r / 51) * 51; g = Math.round(g / 51) * 51; b = Math.round(b / 51) * 51; break;
            case 'filme': [r, g, b] = [cinza * 0.6 + r * 0.4 + 18, cinza * 0.6 + g * 0.4 + 8, cinza * 0.6 + b * 0.4 - 6]; break;
            case 'noturna': r = cinza * 0.25; g = Math.min(255, cinza * 1.35 + 20); b = cinza * 0.25; break;
            case 'negativo': r = 255 - r; g = 255 - g; b = 255 - b; break;
        }
        if (efeito.grao || efeito.id === 'noturna' || efeito.id === 'vga') {
            const ruido = (Math.random() - 0.5) * (efeito.id === 'vga' ? 22 : 34);
            r += ruido; g += ruido; b += ruido;
        }
        if (efeito.vinheta) {
            const p = i / 4, x = p % w, y = (p / w) | 0;
            const escuro = 1 - Math.pow(Math.hypot(x - cx, y - cy) / raio, 2.2) * 0.75;
            r *= escuro; g *= escuro; b *= escuro;
        }
        if (efeito.linhas && ((i / 4 / w) | 0) % 3 === 0) { r *= 0.82; g *= 0.82; b *= 0.82; }
        d[i] = r; d[i + 1] = g; d[i + 2] = b;
    }
    ctx.putImageData(img, 0, 0);
}

// barulhinho de obturador (feito na hora, sem arquivo de som)
function somObturador() {
    try {
        const audio = new (window.AudioContext || window.webkitAudioContext)();
        const duracao = 0.12;
        const buffer = audio.createBuffer(1, audio.sampleRate * duracao, audio.sampleRate);
        const dados = buffer.getChannelData(0);
        for (let i = 0; i < dados.length; i++) dados[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / dados.length, 3);
        const fonte = audio.createBufferSource();
        fonte.buffer = buffer;
        fonte.connect(audio.destination);
        fonte.start();
        fonte.onended = () => audio.close();
    } catch { /* sem som, tudo bem */ }
}

async function tirarFotoCel() {
    const video = $('#video-camera-cel');
    if (!camera.fluxo || !video?.videoWidth) return;
    if (camera.timer) {
        const contagem = $('#contagem-camera-cel');
        for (let n = 3; n > 0; n--) {
            contagem.textContent = n;
            await new Promise(r => setTimeout(r, 1000));
            if (!camera.fluxo) return;
        }
        contagem.textContent = '';
    }
    const efeito = EFEITOS_CAMERA.find(e => e.id === camera.efeito);
    // 640x480 igual camera de 0.3 megapixel (ou em pe, se o video for em pe)
    const deitada = video.videoWidth >= video.videoHeight;
    const w = deitada ? 640 : 480, h = deitada ? 480 : 640;
    const tela = document.createElement('canvas');
    tela.width = w; tela.height = h;
    const ctx = tela.getContext('2d');
    // corta o video pro tamanho da foto (igual o visor)
    const escala = Math.max(w / video.videoWidth, h / video.videoHeight);
    const vw = video.videoWidth * escala, vh = video.videoHeight * escala;
    if (camera.frente) { ctx.translate(w, 0); ctx.scale(-1, 1); }
    ctx.drawImage(video, (w - vw) / 2, (h - vh) / 2, vw, vh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (efeito.id !== 'normal') efeitoNaFoto(ctx, w, h, efeito);
    if (camera.data) {
        // a data laranja no canto, igual as cameras digitais de 2000 e pouco
        ctx.font = `bold ${Math.round(h / 17)}px "Courier New", monospace`;
        ctx.textAlign = 'right';
        ctx.shadowColor = 'rgba(255, 120, 0, .9)';
        ctx.shadowBlur = 6;
        ctx.fillStyle = '#ffa31a';
        ctx.fillText(dataCamera(), w - 18, h - 18);
    }
    somObturador();
    vibrar(30);
    const flash = $('#flash-camera-cel');
    flash.classList.remove('pisca');
    void flash.offsetWidth;
    flash.classList.add('pisca');
    const blob = await new Promise(r => tela.toBlob(r, 'image/jpeg', 0.88));
    if (!blob) return;
    // a foto fica so na memoria do aparelho: nao manda pra lugar nenhum
    camera.fotos.unshift({ url: URL.createObjectURL(blob), quando: new Date() });
    atualizarMiniaturaCamera();
}

function atualizarMiniaturaCamera() {
    const mini = $('#miniatura-camera-cel');
    if (!mini) return;
    const ultima = camera.fotos[0];
    mini.innerHTML = ultima ? `<img src="${ultima.url}" alt="">` : '';
    mini.disabled = !ultima;
    $('#contador-fotos-cel').textContent = camera.fotos.length ? `${camera.fotos.length} foto${camera.fotos.length > 1 ? 's' : ''}` : '';
}

function nomeArquivoFoto(f) {
    const d = f.quando, dois = n => String(n).padStart(2, '0');
    return `quarto-do-lucas-${d.getFullYear()}${dois(d.getMonth() + 1)}${dois(d.getDate())}-${dois(d.getHours())}${dois(d.getMinutes())}${dois(d.getSeconds())}.jpg`;
}

function verFotoCamera(n) {
    const revisao = $('#revisao-camera-cel');
    const f = camera.fotos[n];
    if (!f) {
        camera.vendo = -1;
        revisao.hidden = true;
        return;
    }
    camera.vendo = n;
    revisao.hidden = false;
    revisao.innerHTML = `
        <div class="foto-revisao-cel"><img src="${f.url}" alt="foto tirada"></div>
        <p class="aviso-revisao-cel">Essa foto não foi pro site: só fica aqui até você baixar ou apagar.</p>
        <div class="acoes-revisao-cel">
            <button type="button" data-camera="anterior" ${n >= camera.fotos.length - 1 ? 'disabled' : ''} aria-label="Foto anterior">‹</button>
            <a class="botao-cel azul" href="${f.url}" download="${nomeArquivoFoto(f)}">Baixar</a>
            <button type="button" class="botao-cel" data-camera="apagar">Apagar</button>
            <button type="button" data-camera="proxima" ${n <= 0 ? 'disabled' : ''} aria-label="Próxima foto">›</button>
        </div>
        <p class="numero-revisao-cel">${n + 1} de ${camera.fotos.length}</p>`;
}

function voltarCameraCel() {
    if (camera.vendo < 0) return false;
    verFotoCamera(-1);
    return true;
}

document.addEventListener('click', e => {
    const efeito = e.target.closest('[data-efeito]');
    if (efeito) {
        camera.efeito = efeito.dataset.efeito;
        return aplicarEfeitoCamera();
    }
    const b = e.target.closest('[data-camera]');
    if (!b) return;
    const acao = b.dataset.camera;
    if (acao === 'ligar') ligarCameraCel();
    if (acao === 'foto') tirarFotoCel();
    if (acao === 'virar') {
        camera.frente = !camera.frente;
        if (camera.fluxo) ligarCameraCel();
    }
    if (acao === 'data') {
        camera.data = !camera.data;
        b.classList.toggle('ligado', camera.data);
        aplicarEfeitoCamera();
    }
    if (acao === 'timer') {
        camera.timer = !camera.timer;
        b.classList.toggle('ligado', camera.timer);
    }
    if (acao === 'ver') verFotoCamera(0);
    if (acao === 'anterior') verFotoCamera(camera.vendo + 1);
    if (acao === 'proxima') verFotoCamera(camera.vendo - 1);
    if (acao === 'apagar') {
        // apagou, sumiu de vez (a memoria da foto e liberada)
        const [foto] = camera.fotos.splice(camera.vendo, 1);
        if (foto) URL.revokeObjectURL(foto.url);
        atualizarMiniaturaCamera();
        verFotoCamera(Math.min(camera.vendo, camera.fotos.length - 1));
    }
});

// trocou de aba ou bloqueou a tela: a camera desliga
document.addEventListener('visibilitychange', () => {
    if (document.hidden && camera.fluxo) {
        desligarCameraCel(false);
        const pedido = $('#pedido-camera-cel');
        if (pedido) pedido.hidden = false;
    }
});

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
    decorarDatas();
    if (liberado('celular') && celularPossivel() && ['celular', 'tablet'].includes(guardar.ler('modo', ''))) entrarModoCelular(true);
    if (liberado('jujuba')) {
        assistente.tentou = true;
        iniciarAssistente();
    }
    aplicarLancamentos();
    setInterval(aplicarLancamentos, 60000);
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
