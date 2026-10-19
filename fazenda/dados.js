'use strict';
/* Fazenda do Lucas — tabelas do jogo (tempos em segundos) */

// tam = quanto espaco ocupa no armazem/caminhao
const ITENS = {
    ovo: { nome: 'Ovo', venda: 10, tam: 1 },
    maionese: { nome: 'Maionese', venda: 30, tam: 1 },
    sanduiche: { nome: 'Sanduíche', venda: 90, tam: 2 },
    carne: { nome: 'Carne', venda: 50, tam: 2 },
    linguica: { nome: 'Linguiça', venda: 140, tam: 2 },
    leite: { nome: 'Leite', venda: 150, tam: 3 },
    queijo: { nome: 'Queijo', venda: 400, tam: 3 },
    pizza: { nome: 'Pizza', venda: 1100, tam: 4 },
    pena: { nome: 'Pena', venda: 400, tam: 3 },
    travesseiro: { nome: 'Travesseiro', venda: 1000, tam: 4 },
    urso: { nome: 'Urso na Jaula', venda: 200, tam: 6 },
    cesta: { nome: 'Cesta de Maçãs', venda: 250, tam: 3 },
};

// fome = quantos segundos o bicho aguenta de barriga cheia
const ANIMAIS = {
    galinha: { nome: 'Galinha', preco: 100, item: 'ovo', tempo: 10, vel: 38, fome: 28 },
    porco: { nome: 'Porco', preco: 600, item: 'carne', tempo: 14, vel: 28, fome: 32 },
    vaca: { nome: 'Vaca', preco: 2000, item: 'leite', tempo: 18, vel: 22, fome: 38 },
    avestruz: { nome: 'Avestruz', preco: 4000, item: 'pena', tempo: 22, vel: 46, fome: 40 },
    cavalo: { nome: 'Cavalo Giratório', preco: 0, item: 'cesta', tempo: 14, vel: 18, fome: 45, sagrado: true },
    gato: { nome: 'Gato', preco: 800, ajudante: true, vel: 75, desc: 'Pega os produtos do chão sozinho' },
    cachorro: { nome: 'Cachorro', preco: 1000, ajudante: true, vel: 85, desc: 'Prende os ursos sozinho' },
};

const PREDIOS = {
    maionese: { nome: 'Fábrica de Maionese', custo: 150, ent: { ovo: 1 }, sai: 'maionese', tempo: 5, parede: '#f5d26a', telhado: '#d64b3a' },
    padaria: { nome: 'Padaria', custo: 500, ent: { maionese: 1 }, sai: 'sanduiche', tempo: 7, parede: '#f6e6c4', telhado: '#8a4b2a', chamine: true },
    salsicharia: { nome: 'Salsicharia', custo: 1000, ent: { carne: 1 }, sai: 'linguica', tempo: 8, parede: '#d9a86a', telhado: '#9e2a20', chamine: true },
    laticinio: { nome: 'Laticínio', custo: 2000, ent: { leite: 1 }, sai: 'queijo', tempo: 10, parede: '#dcecfa', telhado: '#2f6fb8' },
    pizzaria: { nome: 'Pizzaria', custo: 4000, ent: { queijo: 1, linguica: 1 }, sai: 'pizza', tempo: 12, parede: '#fff4e6', telhado: '#c0392b', toldo: true, chamine: true },
    atelie: { nome: 'Ateliê de Travesseiros', custo: 4500, ent: { pena: 1 }, sai: 'travesseiro', tempo: 12, parede: '#f4cfe4', telhado: '#7d3f9a' },
};
// velocidade por nivel da fabrica (dentro da fase) e custo da melhoria
const NIVEL_PREDIO = [1, .7, .5];
const CUSTO_MELHORIA = [.6, 1.2];

// o aviao traz produtos de fora (mais caro que vender)
const IMPORTA = { ovo: 20, carne: 90, leite: 260, pena: 650 };

const CUSTO_AGUA = 20;

// melhorias permanentes, compradas com estrelas na loja entre as fases
const MELHORIAS = {
    poco: { nome: 'Poço', icone: 'poco', niveis: [{ agua: 6 }, { agua: 9, custo: 200 }, { agua: 13, custo: 400 }, { agua: 18, custo: 700 }], txt: n => `Guarda ${n.agua} baldes de água` },
    armazem: { nome: 'Depósito', icone: 'armazem', niveis: [{ cap: 20 }, { cap: 30, custo: 150 }, { cap: 45, custo: 350 }, { cap: 65, custo: 650 }], txt: n => `Cabem ${n.cap} espaços` },
    gaiola: { nome: 'Gaiola', icone: 'gaiola', niveis: [{ menos: 0, segura: 15 }, { menos: 1, segura: 20, custo: 100 }, { menos: 2, segura: 25, custo: 250 }, { menos: 3, segura: 32, custo: 500 }], txt: n => `Prende o urso por ${n.segura}s${n.menos ? `, ${n.menos} clique${n.menos > 1 ? 's' : ''} a menos` : ''}` },
    caminhao: { nome: 'Caminhão', icone: 'caminhao', niveis: [{ cap: 15, tempo: 20 }, { cap: 25, tempo: 16, custo: 100 }, { cap: 40, tempo: 12, custo: 250 }, { cap: 60, tempo: 9, custo: 500 }], txt: n => `Leva ${n.cap} espaços, viagem de ${n.tempo}s` },
    aviao: { nome: 'Avião', icone: 'aviao', niveis: [{ tempo: 16, desc: 1 }, { tempo: 12, desc: .9, custo: 100 }, { tempo: 9, desc: .8, custo: 250 }, { tempo: 6, desc: .7, custo: 500 }], txt: n => `Viagem de ${n.tempo}s${n.desc < 1 ? `, ${Math.round((1 - n.desc) * 100)}% de desconto` : ''}` },
    cachorro: { nome: 'Cachorro', icone: 'obj:animal:cachorro', niveis: [{ luta: 1.4, vel: 85 }, { luta: 1.1, vel: 100, custo: 100 }, { luta: .8, vel: 115, custo: 250 }, { luta: .5, vel: 130, custo: 500 }], txt: n => `Prende o urso em ${n.luta}s` },
    gato: { nome: 'Gato', icone: 'obj:animal:gato', niveis: [{ vel: 75 }, { vel: 100, custo: 100 }, { vel: 125, custo: 250 }, { vel: 150, custo: 500 }], txt: n => n.vel > 75 ? `Pega produtos ${Math.round((n.vel / 75 - 1) * 100)}% mais rápido` : 'Pega os produtos do chão sozinho' },
};
// estrelas ganhas por fase (n comeca em 0)
const ESTRELAS = n => FASES[n] && FASES[n].extra ? { completar: 30, prata: 20, ouro: 40 } : { completar: 25 + n * 5, prata: 50 + n * 10, ouro: 100 + n * 20 };

// lotes: 0-2 do lado esquerdo (de cima pra baixo), 3-5 do lado direito
// metas: item = juntar produtos, animal = ter bichos vivos, moedas = ter dinheiro
const FASES = [
    { inicio: 300, ini: { galinha: 2 }, animais: ['galinha'], lotes: {}, metas: [{ t: 'item', i: 'ovo', q: 10 }, { t: 'animal', a: 'galinha', q: 4 }], ouro: 90, prata: 150 },
    { inicio: 300, ini: { galinha: 2 }, animais: ['galinha'], lotes: { 0: 'maionese' }, metas: [{ t: 'item', i: 'maionese', q: 6 }, { t: 'moedas', q: 500 }], ouro: 210, prata: 300 },
    { inicio: 400, ini: { galinha: 3 }, animais: ['galinha'], lotes: { 0: 'maionese', 3: 'padaria' }, metas: [{ t: 'item', i: 'sanduiche', q: 5 }, { t: 'moedas', q: 1000 }], ouro: 240, prata: 360 },
    { inicio: 500, ini: { galinha: 3 }, animais: ['galinha', 'porco'], lotes: { 0: 'maionese', 1: 'salsicharia', 3: 'padaria' }, ursos: 70, metas: [{ t: 'item', i: 'carne', q: 4 }, { t: 'item', i: 'linguica', q: 3 }, { t: 'animal', a: 'porco', q: 2 }], ouro: 300, prata: 450 },
    { inicio: 700, ini: { galinha: 3 }, animais: ['galinha', 'porco', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 3: 'padaria' }, ursos: 50, metas: [{ t: 'item', i: 'linguica', q: 6 }, { t: 'item', i: 'sanduiche', q: 6 }, { t: 'moedas', q: 3000 }], ouro: 390, prata: 560 },
    { inicio: 1500, ini: { galinha: 3, porco: 1 }, animais: ['galinha', 'porco', 'vaca', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 3: 'padaria', 4: 'laticinio' }, ursos: 60, metas: [{ t: 'item', i: 'leite', q: 5 }, { t: 'item', i: 'queijo', q: 3 }, { t: 'animal', a: 'vaca', q: 2 }], ouro: 360, prata: 540 },
    { inicio: 1500, ini: { galinha: 3, porco: 1 }, animais: ['galinha', 'porco', 'vaca', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 3: 'padaria', 4: 'laticinio' }, ursos: 45, metas: [{ t: 'item', i: 'queijo', q: 6 }, { t: 'moedas', q: 10000 }], ouro: 570, prata: 800 },
    { inicio: 2000, ini: { galinha: 3, porco: 1, vaca: 1 }, animais: ['galinha', 'porco', 'vaca', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio' }, ursos: 45, metas: [{ t: 'item', i: 'pizza', q: 3 }, { t: 'item', i: 'linguica', q: 8 }], ouro: 330, prata: 480 },
    { inicio: 3000, ini: { galinha: 3, porco: 1, vaca: 1 }, animais: ['galinha', 'porco', 'vaca', 'avestruz', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio', 5: 'atelie' }, ursos: 40, metas: [{ t: 'item', i: 'pena', q: 4 }, { t: 'item', i: 'travesseiro', q: 2 }], ouro: 420, prata: 600 },
    { inicio: 3000, ini: { galinha: 4, porco: 1, vaca: 1 }, animais: ['galinha', 'porco', 'vaca', 'avestruz', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio', 5: 'atelie' }, ursos: 40, metas: [{ t: 'item', i: 'pizza', q: 5 }, { t: 'item', i: 'travesseiro', q: 4 }, { t: 'moedas', q: 20000 }], ouro: 540, prata: 780 },
    { inicio: 500, ini: { galinha: 2 }, animais: ['galinha', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 3: 'padaria' }, ursos: 30, metas: [{ t: 'item', i: 'sanduiche', q: 15 }, { t: 'animal', a: 'galinha', q: 10 }], ouro: 210, prata: 330 },
    { inicio: 2500, ini: { galinha: 3, vaca: 1 }, animais: ['galinha', 'porco', 'vaca', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio' }, ursos: 40, metas: [{ t: 'item', i: 'queijo', q: 10 }, { t: 'item', i: 'pizza', q: 4 }], ouro: 360, prata: 540 },
    { inicio: 4000, ini: { galinha: 3, avestruz: 1 }, animais: ['galinha', 'porco', 'vaca', 'avestruz', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 3: 'padaria', 5: 'atelie' }, ursos: 35, metas: [{ t: 'item', i: 'travesseiro', q: 6 }, { t: 'animal', a: 'avestruz', q: 3 }], ouro: 360, prata: 540 },
    { inicio: 1000, ini: { galinha: 4 }, animais: ['galinha', 'porco', 'vaca', 'avestruz', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio', 5: 'atelie' }, ursos: 35, metas: [{ t: 'moedas', q: 25000 }], ouro: 720, prata: 1000 },
    { inicio: 2000, ini: { galinha: 4, porco: 1 }, animais: ['galinha', 'porco', 'vaca', 'avestruz', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio', 5: 'atelie' }, ursos: 25, metas: [{ t: 'item', i: 'pizza', q: 8 }, { t: 'item', i: 'travesseiro', q: 8 }, { t: 'item', i: 'sanduiche', q: 20 }, { t: 'moedas', q: 20000 }], ouro: 660, prata: 960 },
    // missao extra do culto do cavalo giratorio (sempre liberada, da pra repetir)
    { extra: true, nome: 'Missão do Cavalo Giratório', inicio: 400, ini: { cavalo: 1, galinha: 2 }, animais: ['galinha', 'gato'], lotes: { 0: 'maionese', 3: 'padaria' }, metas: [{ t: 'item', i: 'cesta', q: 4 }, { t: 'item', i: 'sanduiche', q: 3 }], ouro: 120, prata: 200 },
    // modo infinito: sem metas nem relogio, vende o que quiser e troca por estrelas (libera depois da fase 10)
    { infinito: true, nome: 'Fazenda Infinita', inicio: 1500, ini: { galinha: 3 }, animais: ['galinha', 'porco', 'vaca', 'avestruz', 'gato', 'cachorro'], aviao: true, lotes: { 0: 'maionese', 1: 'salsicharia', 2: 'pizzaria', 3: 'padaria', 4: 'laticinio', 5: 'atelie' }, ursos: 55, metas: [], ouro: 0, prata: 0 },
];

const DICAS = [
    'Dica: clique no pasto para plantar grama. Cada clique gasta um balde do poço!',
    'Dica: bicho com fome não produz nada. E se ficar muito tempo sem comer...',
    'Dica: produtos no chão somem se você demorar para pegar.',
    'Dica: clique várias vezes no urso para prender ele na jaula.',
    'Dica: urso na jaula vale dinheiro! Mande pro mercado no caminhão.',
    'Dica: o gato pega os produtos do chão e o cachorro prende os ursos.',
    'Dica: termine rápido para ganhar a medalha de ouro!',
    'Dica: melhore as fábricas para elas trabalharem mais rápido.',
];

// culto do cavalo giratorio: presente de fim de semana e bencao pras proximas fases
const BENCAO = { fases: 3, animais: .6, fabricas: .7, moedas: 300, estrelas: 80 };
const TEXTO_CULTO = 'No culto do cavalo giratório não existe preconceito, apenas paz. Todos os sábados nós agradecemos ao cavalo giratório por ter criado o fim de semana e ele nos oferece um presente semanal.';

// fazenda infinita: a cada X moedas vendidas no caminhao ganha 1 estrela (com limite por partida)
const INFINITO = { moedasPorEstrela: 1500, maxEstrelas: 300, liberaApos: 9 };

// presente do cavalo giratorio: muda toda semana, na ordem dos posts de verdade
// (26/set feno, 03/out cenouras, 10/out macas, 17/out pelucia + biscoitos) e depois repete
const PRIMEIRO_SABADO_CULTO = new Date(2026, 8, 26);
const PRESENTES_CULTO = [
    { id: 'feno', nome: 'Feno', icones: ['feno'], estrelas: 120, fases: 2,
        frase: 'Essa semana ele nos abençoou com um belíssimo presente, FENO!! seremos eternamente gratos' },
    { id: 'cenouras', nome: 'Cenouras', icones: ['cenouras'], estrelas: 60, fases: 4,
        frase: 'Essa semana ele nos abençoou com um belíssimo presente, CENOURAS. seremos eternamente gratos' },
    { id: 'macas', nome: 'Cesta de Maçãs', icones: ['cesta'], estrelas: 80, fases: 3,
        frase: 'PRESENTE SEMANAL QUE ELE NOS OFERECEU HOJE:' },
    { id: 'pelucia', nome: 'Pelúcia e Biscoitos de Cenoura', icones: ['pelucia', 'biscoitos'], estrelas: 100, fases: 3,
        frase: 'e nessa semana ele nos presenteou com dois presentes, uma pelúcia e biscoitos de cenouras!!! somos eternamente gratos pelos presentes' },
];
