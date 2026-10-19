'use strict';
/* Fazenda do Lucas — logica das fases, desenho da tela e interface */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const LARG = 760, ALT = 600;
const palco = $('#palco'), cv = $('#cv'), ctx = cv.getContext('2d');
let escala = 1, escalaPalco = 1, dpr = 1;

const fmtN = n => Math.floor(n).toLocaleString('pt-BR');
function fmtT(s) { s = Math.max(0, Math.floor(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
const rnd = (a, b) => a + Math.random() * (b - a);
const ri = (a, b) => Math.floor(rnd(a, b + 1));
const dist = (a, b, x, y) => Math.hypot(a - x, b - y);
const ic = (nome, extra = '') => `<img src="${iconeURL(nome)}" alt="" ${extra}>`;

// ---------- posicoes fixas da tela ----------
const PASTO = { x0: 160, y0: 150, x1: 600, y1: 462 };
const CEL = 16, COLS = Math.floor((PASTO.x1 - PASTO.x0) / CEL), ROWS = Math.floor((PASTO.y1 - PASTO.y0) / CEL);
const LOTES = [
    { x: 80, y: 206, lado: 1 }, { x: 80, y: 320, lado: 1 }, { x: 80, y: 434, lado: 1 },
    { x: 680, y: 206, lado: -1 }, { x: 680, y: 320, lado: -1 }, { x: 680, y: 434, lado: -1 },
];
const POCO = { x: 400, y: 142 };
const ARMAZEM = { x: 380, y: 592 };
const GARAGEM = { x: 196, y: 590 };
const HANGAR = { x: 542, y: 590 };
const ALVO_MOEDAS = { x: 520, y: 25 };

// ================= som =================
const midi = m => 440 * Math.pow(2, (m - 69) / 12);
const Som = {
    ac: null, sfx: null, mus: null, ruidoBuf: null,
    iniciar() {
        if (this.ac) { if (this.ac.state === 'suspended') this.ac.resume(); return; }
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        try { this.ac = new AC(); } catch { return; }
        this.sfx = this.ac.createGain(); this.sfx.connect(this.ac.destination);
        this.mus = this.ac.createGain(); this.mus.connect(this.ac.destination);
        const n = this.ac.sampleRate * .5, b = this.ac.createBuffer(1, n, this.ac.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
        this.ruidoBuf = b;
        this.ajustar();
        Musica.iniciar();
    },
    ajustar() {
        if (!this.ac) return;
        this.sfx.gain.value = E.som ? .45 : 0;
        this.mus.gain.value = E.musica ? .15 : 0;
    },
    nota(f, t, dur, tipo = 'square', vol = .2, fim = 0, dest) {
        const ac = this.ac, o = ac.createOscillator(), g = ac.createGain();
        o.type = tipo; o.frequency.setValueAtTime(f, t);
        if (fim) o.frequency.exponentialRampToValueAtTime(fim, t + dur);
        g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
        o.connect(g); g.connect(dest || this.sfx); o.start(t); o.stop(t + dur + .05);
    },
    ruido(t, dur, vol, freq = 1000, q = 1) {
        const ac = this.ac, s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
        s.buffer = this.ruidoBuf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
        g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
        s.connect(f); f.connect(g); g.connect(this.sfx); s.start(t); s.stop(t + dur + .05);
    },
    tocar(nome) {
        if (!this.ac || !E.som) return;
        const t = this.ac.currentTime + .01, n = (f, d, ty, v, fim = 0, dt = 0) => this.nota(f, t + dt, d, ty, v, fim);
        switch (nome) {
            case 'clique': n(1200, .04, 'square', .05); break;
            case 'abrir': n(400, .12, 'sine', .2, 900); break;
            case 'pop': n(600, .07, 'sine', .3, 1400); break;
            case 'moeda': n(988, .08, 'square', .09); n(1319, .3, 'square', .09, 0, .07); break;
            case 'grama': this.ruido(t, .15, .35, 2500, .7); n(900, .06, 'sine', .12, 1500); break;
            case 'agua': for (let i = 0; i < 5; i++) n(300 + i * 90, .08, 'sine', .2, 600 + i * 90, i * .07); break;
            case 'erro': n(200, .25, 'sawtooth', .1, 110); break;
            case 'construir': this.ruido(t, .1, .5, 300); this.ruido(t + .15, .1, .5, 300); n(180, .1, 'triangle', .3, 90, .3); break;
            case 'produzir': n(300, .06, 'square', .08); n(450, .06, 'square', .08, 0, .07); n(600, .12, 'square', .08, 0, .14); break;
            case 'pronto': n(700, .08, 'triangle', .25); n(1050, .14, 'triangle', .25, 0, .08); break;
            case 'nivel': [523, 659, 784, 1047, 784, 1047].forEach((f, i) => n(f, .18, 'square', .08, 0, i * .09)); [262, 330, 392, 523].forEach((f, i) => n(f, .3, 'triangle', .2, 0, i * .13)); break;
            case 'vitoria': [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => n(f, .25, 'square', .08, 0, i * .11)); [262, 392, 523, 784].forEach((f, i) => n(f, .4, 'triangle', .25, 0, i * .16)); break;
            case 'caminhao': n(330, .22, 'square', .08); n(415, .22, 'square', .06); n(330, .3, 'square', .08, 0, .28); n(415, .3, 'square', .06, 0, .28); break;
            case 'aviao': n(90, 1.2, 'sawtooth', .08, 140); break;
            case 'urso': n(110, .5, 'sawtooth', .18, 70); this.ruido(t, .4, .3, 200, 1); break;
            case 'jaula': n(1200, .15, 'square', .06, 600); this.ruido(t, .12, .4, 3000, 3); break;
            case 'tum': n(80, .25, 'sine', .5, 40); this.ruido(t, .2, .4, 150); break;
            case 'morreu': n(400, .5, 'triangle', .2, 100); break;
            case 'galinha': for (let i = 0; i < 3; i++) n(1100 - i * 80, .07, 'square', .05, 700, i * .09); break;
            case 'vaca': n(180, .7, 'sawtooth', .1, 120); break;
            case 'porco': n(320, .12, 'sawtooth', .09, 520); n(300, .15, 'sawtooth', .09, 480, .15); break;
            case 'avestruz': n(120, .4, 'triangle', .3, 60); break;
            case 'gato': n(700, .3, 'sawtooth', .06, 500); break;
            case 'cachorro': n(400, .08, 'square', .1, 250); n(400, .08, 'square', .1, 250, .15); break;
        }
    },
};
const MELODIA = [
    [67, 1], [72, 1], [76, 2], [74, 1], [72, 1], [69, 2], [69, 1], [72, 1], [77, 2], [76, 1], [74, 1], [72, 2],
    [71, 1], [74, 1], [79, 2], [77, 1], [76, 1], [74, 2], [72, 2], [76, 2], [72, 4],
    [76, 1], [76, 1], [79, 1], [76, 1], [72, 2], [67, 2], [69, 1], [72, 1], [69, 1], [65, 1], [69, 4],
    [71, 1], [74, 1], [71, 1], [67, 1], [74, 2], [77, 2], [76, 2], [74, 2], [72, 4],
    [77, 2], [76, 1], [74, 1], [72, 2], [69, 2], [72, 1], [74, 1], [72, 1], [69, 1], [65, 4],
    [76, 2], [74, 1], [72, 1], [76, 2], [79, 2], [79, 1], [81, 1], [79, 1], [76, 1], [72, 4],
    [74, 2], [74, 1], [76, 1], [77, 2], [74, 2], [76, 2], [72, 1], [72, 1], [67, 4],
    [71, 1], [72, 1], [74, 1], [77, 1], [76, 2], [74, 2], [72, 6], [0, 2],
];
const ACORDES = { C: [48, 52, 55], F: [53, 57, 60], G: [55, 59, 62] };
const COMPASSOS = 'CFGCCFGCFFCCGCGC';
const Musica = {
    timer: null, prox: 0, passo: 0, seq: [],
    iniciar() {
        if (this.timer || !Som.ac) return;
        let p = 0;
        for (const [m, d] of MELODIA) { if (m) this.seq[p] = [m, d]; p += d; }
        this.prox = Som.ac.currentTime + .2;
        this.timer = setInterval(() => this.agendar(), 100);
    },
    agendar() {
        const ac = Som.ac;
        if (!E.musica || ac.state !== 'running') { this.prox = ac.currentTime + .1; return; }
        const col = 60 / 138 / 2;
        while (this.prox < ac.currentTime + .3) { this.tocarPasso(this.passo, this.prox, col); this.prox += col; this.passo = (this.passo + 1) % 128; }
    },
    tocarPasso(i, t, col) {
        const ev = this.seq[i];
        if (ev) Som.nota(midi(ev[0]), t, ev[1] * col * .95, 'square', .1, 0, Som.mus);
        const a = ACORDES[COMPASSOS[i >> 3]];
        if (i % 4 === 0) Som.nota(midi(a[0] - 12), t, col * 1.6, 'triangle', .45, 0, Som.mus);
        if (i % 4 === 2) {
            Som.nota(midi(a[2] - 24), t, col * 1.6, 'triangle', .4, 0, Som.mus);
            for (const nn of a) Som.nota(midi(nn + 12), t, .08, 'square', .025, 0, Som.mus);
        }
    },
};

// ================= progresso salvo =================
const CHAVE = 'fazenda-do-lucas-v2';
const upgZerado = () => Object.fromEntries(Object.keys(MELHORIAS).map(k => [k, 0]));
let E = { v: 2, medalhas: {}, estrelas: 0, upg: upgZerado(), dicas: {}, som: true, musica: true, qualidade: 'media' };
try {
    const d = JSON.parse(localStorage.getItem(CHAVE));
    if (d && d.v === 2) E = Object.assign(E, d, { upg: Object.assign(upgZerado(), d.upg), dicas: d.dicas || {} });
} catch { /* sem storage */ }
function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(E)); } catch { /* ok */ } }

const nivelUpg = k => MELHORIAS[k].niveis[E.upg[k]];
const aguaMax = () => nivelUpg('poco').agua;
const capArmazem = () => nivelUpg('armazem').cap;
const capCaminhao = () => nivelUpg('caminhao').cap;
const faseLiberada = n => {
    const F = FASES[n];
    if (!F) return false;
    if (F.extra) return true;
    if (F.infinito) return (E.medalhas[INFINITO.liberaApos] || 0) > 0;
    return n === 0 || (E.medalhas[n - 1] || 0) > 0;
};
const nomeFase = n => FASES[n] && FASES[n].extra ? 'Missão Extra' : FASES[n] && FASES[n].infinito ? 'Fazenda Infinita' : `Fase ${n + 1}`;
const FASE_EXTRA = FASES.findIndex(f => f.extra);
const FASE_INF = FASES.findIndex(f => f.infinito);
const faseNormal = F => !F.extra && !F.infinito;

// ================= estado da fase =================
let J = null;
let efeitos = [], textos = [], voos = [];
let tempo = 0, mouse = { x: -1, y: -1 };

function novoAnimal(tipo, x, y, cai = 0) {
    return { tipo, x, y, dir: -1, fase: rnd(0, 6), fome: 1, prod: rnd(0, .4), fraco: 0, alvo: null, comer: false, espera: rnd(0, 2), comendo: 0, cai, luta: 0 };
}
function pontoPasto(m = 16) { return { x: rnd(PASTO.x0 + m, PASTO.x1 - m), y: rnd(PASTO.y0 + m + 10, PASTO.y1 - m) }; }
// ---------- salvar a fase no meio (um espaco so) ----------
const CAMPOS_FASE = ['vendido', 'bencao', 'n', 'moedas', 'tempo', 'animais', 'produtos', 'ursos', 'agua', 'enchendo', 'lotes', 'armazem', 'coletados', 'cam', 'av', 'proxUrso', 'avisouUrso', 'piscaPoco'];
function salvarFase() {
    if (!J || J.ganhou || !J.comecou) return false;
    const d = {};
    for (const k of CAMPOS_FASE) d[k] = J[k];
    d.grama = Array.from(J.grama);
    E.salvo = JSON.parse(JSON.stringify(d));
    salvar();
    return true;
}
function continuarFase() {
    const d = E.salvo;
    if (!d || !FASES[d.n]) return;
    iniciarFase(d.n, true);
    fechar();
    Object.assign(J, d, { F: FASES[d.n], grama: Uint8Array.from(d.grama), comecou: true, ganhou: false });
    montarHud();
    aviso(`${nomeFase(d.n)} carregada! Continuando de ${fmtT(J.tempo)}.`);
}
function perguntarSalvo(n) {
    abrir({
        titulo: nomeFase(n), largura: 400, render: el => {
            el.innerHTML = `<div class="msg">${ic('relogio')}<div>Você tem um jogo salvo nesta fase (tempo ${fmtT(E.salvo.tempo)}, ${fmtN(E.salvo.moedas)} moedas).<br>Quer continuar de onde parou?</div></div>
                <div class="botoes"><button class="bt-azul verde" data-c>Continuar</button><button class="bt-azul amarelo" data-n>Começar de novo</button></div>`;
            ligar(el, '[data-c]', continuarFase);
            ligar(el, '[data-n]', () => { delete E.salvo; salvar(); fechar(); iniciarFase(n); });
        },
    });
}
// dentro do site o jogo roda numa janela (iframe): fechar aperta o X dela
function fecharJogo() {
    try {
        const x = window.parent !== window && window.parent.document.querySelector('#fazenda [data-janela="fechar"]');
        if (x) { x.click(); return; }
    } catch { /* fora do site */ }
    irMapa(); trocarTela('inicio'); atualizarContinuar();
}
function atualizarContinuar() {
    const bi = $('[data-acao="infinito"]');
    if (bi) bi.classList.toggle('travado', !faseLiberada(FASE_INF));
    const b = $('[data-acao="continuar"]');
    if (!b) return;
    b.hidden = !E.salvo;
    if (E.salvo) b.textContent = `Continuar ${nomeFase(E.salvo.n)}`;
}
function iniciarFase(n, continuar = false) {
    const F = FASES[n];
    J = {
        n, F, moedas: F.inicio, tempo: 0, animais: [], produtos: [], ursos: [],
        grama: new Uint8Array(COLS * ROWS), agua: aguaMax(), enchendo: 0,
        lotes: LOTES.map((L, i) => F.lotes[i] ? { tipo: F.lotes[i], construido: false, nivel: 0, prog: null, fila: 0, pisca: 0 } : null),
        armazem: {}, coletados: {},
        cam: { estado: 'garagem', t: 0, carga: {}, x: GARAGEM.x },
        av: F.aviao ? { estado: 'hangar', t: 0, pedido: {}, x: HANGAR.x + 18, y: HANGAR.y - 2 } : null,
        proxUrso: F.ursos ? F.ursos * .7 : 0, avisouUrso: false, ganhou: false, comecou: false, piscaPoco: 0, bencao: false, vendido: 0,
    };
    if (!continuar && faseNormal(F) && E.bencao > 0) { E.bencao--; salvar(); J.bencao = true; J.moedas += BENCAO.moedas; }
    for (const [tipo, q] of Object.entries(F.ini)) for (let i = 0; i < q; i++) { const p = pontoPasto(); J.animais.push(novoAnimal(tipo, p.x, p.y)); }
    for (let k = 0; k < 3; k++) { const p = pontoPasto(40); plantarEm(p.x, p.y); }
    efeitos = []; textos = []; voos = [];
    filaDicas.length = 0; dicaAtual = null; $('#dica-tut').hidden = true;
    trocarTela('jogo');
    montarHud();
    abrirBriefing();
}

// ================= grama =================
function plantarEm(x, y) {
    const c0 = (x - PASTO.x0) / CEL, r0 = (y - PASTO.y0) / CEL;
    for (let r = Math.floor(r0 - 3); r <= r0 + 3; r++) for (let c = Math.floor(c0 - 3); c <= c0 + 3; c++) {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS) continue;
        const d = Math.hypot(c + .5 - c0, r + .5 - r0);
        if (d < 2.6) J.grama[r * COLS + c] = 3;
        else if (d < 3.2 && J.grama[r * COLS + c] < 2) J.grama[r * COLS + c] = 2;
    }
}
const celula = (x, y) => {
    const c = Math.floor((x - PASTO.x0) / CEL), r = Math.floor((y - PASTO.y0) / CEL);
    return c < 0 || r < 0 || c >= COLS || r >= ROWS ? -1 : r * COLS + c;
};
function gramaPerto(x, y) {
    let melhor = null, md = Infinity;
    for (let i = 0; i < J.grama.length; i++) {
        if (!J.grama[i]) continue;
        const gx = PASTO.x0 + (i % COLS) * CEL + CEL / 2, gy = PASTO.y0 + Math.floor(i / COLS) * CEL + CEL / 2;
        const d = (gx - x) ** 2 + (gy - y) ** 2;
        if (d < md) { md = d; melhor = { x: gx, y: gy }; }
    }
    return melhor;
}
const noPasto = (x, y) => x > PASTO.x0 - 6 && x < PASTO.x1 + 6 && y > PASTO.y0 - 6 && y < PASTO.y1 + 6;

// ================= armazem e produtos =================
const usoArmazem = () => Object.entries(J.armazem).reduce((s, [k, q]) => s + q * ITENS[k].tam, 0);
const livreArmazem = () => capArmazem() - usoArmazem();
const tamDe = obj => Object.entries(obj).reduce((s, [k, q]) => s + q * ITENS[k].tam, 0);
function tirar(obj, k, q) { obj[k] -= q; if (obj[k] <= 0) delete obj[k]; }
function soltar(item, x, y, vida = 15) {
    x = Math.max(20, Math.min(LARG - 20, x)); y = Math.max(80, Math.min(ALT - 20, y));
    J.produtos.push({ item, x, y, vida, max: vida, alt: 26, vz: -80 });
}
function guardar(item, x, y) {
    if (livreArmazem() < ITENS[item].tam) { aviso('O depósito está cheio! Mande vender no caminhão.', true); Som.tocar('erro'); return false; }
    J.armazem[item] = (J.armazem[item] || 0) + 1;
    if (item !== 'urso') J.coletados[item] = (J.coletados[item] || 0) + 1;
    voos.push({ ic: item, x0: x, y0: y, x1: ARMAZEM.x, y1: ARMAZEM.y - 60, t: 0 });
    Som.tocar('pop');
    return true;
}
function pegarProduto(p) {
    if (!guardar(p.item, p.x, p.y)) return;
    J.produtos.splice(J.produtos.indexOf(p), 1);
}

// ================= compras e cliques =================
function ganhar(v, x, y) { J.moedas += v; if (x !== undefined) flutuar(x, y, '+' + fmtN(v), '#ffe14d', 'moeda'); hud(); }
function gastar(v, x, y) { J.moedas -= v; if (x !== undefined) flutuar(x, y, '-' + fmtN(v), '#ffb0a0', 'moeda'); hud(); }
function semMoedas() { Som.tocar('erro'); aviso('Moedas insuficientes!', true); }
function comprarAnimal(tipo) {
    const d = ANIMAIS[tipo];
    if (J.moedas < d.preco) return semMoedas();
    gastar(d.preco);
    const p = pontoPasto(30);
    J.animais.push(novoAnimal(tipo, p.x, p.y, 260));
    Som.tocar(tipo);
}
function clicarPoco() {
    if (J.enchendo > 0) return;
    if (J.agua >= aguaMax()) { aviso('O poço já está cheio!'); return; }
    if (J.moedas < CUSTO_AGUA) return semMoedas();
    gastar(CUSTO_AGUA, POCO.x, POCO.y - 60);
    J.enchendo = 2.4;
    Som.tocar('agua');
}
function clicarLote(i) {
    const L = J.lotes[i], P = PREDIOS[L.tipo], pos = LOTES[i];
    if (!L.construido) {
        if (J.moedas < P.custo) return semMoedas();
        gastar(P.custo, pos.x, pos.y - 60);
        L.construido = true;
        poeira(pos.x, pos.y - 10, 26); Som.tocar('construir');
        return;
    }
    if (L.fila >= 3) { aviso('A fábrica já está com a fila cheia!'); return; }
    const falta = Object.entries(P.ent).find(([k, q]) => (J.armazem[k] || 0) < q);
    if (falta) { L.pisca = 1.2; Som.tocar('erro'); aviso(`Precisa de ${ITENS[falta[0]].nome} no depósito!`, true); return; }
    for (const [k, q] of Object.entries(P.ent)) {
        tirar(J.armazem, k, q);
        voos.push({ ic: k, x0: ARMAZEM.x, y0: ARMAZEM.y - 60, x1: pos.x, y1: pos.y - 40, t: 0 });
    }
    L.fila++; L.usou = true;
    if (L.prog === null) L.prog = 0;
    Som.tocar('produzir');
}
function clicarPlaca(i) {
    const L = J.lotes[i], P = PREDIOS[L.tipo], pos = LOTES[i];
    if (!L.construido) return clicarLote(i);
    if (L.nivel >= 2) { aviso('Essa fábrica já está no nível máximo!'); return; }
    const custo = Math.round(P.custo * CUSTO_MELHORIA[L.nivel]);
    if (J.moedas < custo) return semMoedas();
    gastar(custo, pos.x, pos.y - 60);
    L.nivel++;
    estrelas(pos.x, pos.y - 50); Som.tocar('nivel');
    aviso(`${P.nome} melhorada! Trabalha mais rápido.`);
}
function clicarUrso(u) {
    if (u.estado === 'jaula') {
        if (!guardar('urso', u.x, u.y - 20)) return;
        J.ursos.splice(J.ursos.indexOf(u), 1);
        return;
    }
    if (u.estado !== 'andando') return;
    u.cliques += 1; u.ultClique = tempo; u.treme = .15;
    Som.tocar('jaula');
    if (u.cliques >= u.prec) enjaular(u);
}
function enjaular(u) {
    u.estado = 'jaula'; u.vida = nivelUpg('gaiola').segura; u.cliques = u.prec;
    estrelas(u.x, u.y - 30);
    aviso('Urso preso! Clique na jaula para guardar e vender depois.');
}
function plantarGrama(x, y) {
    if (J.agua <= 0) { J.piscaPoco = 1.5; Som.tocar('erro'); aviso('O poço está vazio! Clique nele para buscar água.', true); return; }
    J.agua--;
    plantarEm(x, y);
    for (let i = 0; i < 8; i++) efeitos.push({ t: 'folha', x: x + rnd(-20, 20), y: y + rnd(-10, 10), vx: rnd(-30, 30), vy: rnd(-60, -20), g: 100, vida: rnd(.4, .7), r: rnd(2, 3.5), cor: ['#5cbf36', '#8bd84a'][ri(0, 1)], a: rnd(0, 6) });
    Som.tocar('grama');
    hud();
}

// o que esta embaixo do ponto (na ordem de prioridade do clique)
function alvoEm(x, y) {
    if (!J) return null;
    for (let i = J.produtos.length - 1; i >= 0; i--) { const p = J.produtos[i]; if (dist(p.x, p.y - 12, x, y) < 20) return { t: 'produto', o: p }; }
    for (const u of J.ursos) if (u.estado !== 'caindo' && Math.abs(u.x - x) < 32 && y > u.y - 50 && y < u.y + 8) return { t: 'urso', o: u };
    for (let i = 0; i < 6; i++) {
        const L = J.lotes[i], p = LOTES[i];
        if (!L) continue;
        if (Math.abs(x - p.x) < 44 && y > p.y + 4 && y < p.y + 24) return { t: 'placa', i };
        if (x > p.x - 54 && x < p.x + 62 && y > p.y - 100 && y < p.y + 4) return { t: 'lote', i };
    }
    if (Math.abs(x - POCO.x) < 38 && y > POCO.y - 98 && y < POCO.y + 6) return { t: 'poco' };
    if (Math.abs(x - ARMAZEM.x) < 108 && y > ARMAZEM.y - 146) return { t: 'armazem' };
    if (Math.abs(x - GARAGEM.x) < 72 && y > GARAGEM.y - 86) return { t: 'caminhao' };
    if (J.av && Math.abs(x - HANGAR.x) < 80 && y > HANGAR.y - 84) return { t: 'aviao' };
    if (noPasto(x, y)) return { t: 'pasto' };
    return null;
}
function clique(x, y) {
    if (!J || !J.comecou || J.ganhou || janelaAtual || dicaAtual) return;
    const a = alvoEm(x, y);
    if (!a) return;
    switch (a.t) {
        case 'produto': return pegarProduto(a.o);
        case 'urso': return clicarUrso(a.o);
        case 'placa': return clicarPlaca(a.i);
        case 'lote': return clicarLote(a.i);
        case 'poco': return clicarPoco();
        case 'armazem': case 'caminhao': return abrirCaminhao();
        case 'aviao': return abrirAviao();
        case 'pasto': return plantarGrama(x, y);
    }
}

// ================= atualizacao =================
function moverPara(a, alvo, vel, dt) {
    const dx = alvo.x - a.x, dy = alvo.y - a.y, d = Math.hypot(dx, dy);
    if (Math.abs(dx) > .5) a.dir = dx > 0 ? 1 : -1;
    if (d <= vel * dt) { a.x = alvo.x; a.y = alvo.y; a.andando = false; return true; }
    a.x += dx / d * vel * dt; a.y += dy / d * vel * dt; a.andando = true; a.fase += dt * 10;
    return false;
}
function atualizarAnimal(a, dt) {
    const d = ANIMAIS[a.tipo];
    if (a.cai > 0) { a.cai -= dt * 170; if (a.cai <= 0) { a.cai = 0; poeira(a.x, a.y, 8); } return; }
    if (d.ajudante) return atualizarAjudante(a, d, dt);
    a.fome -= dt / d.fome;
    if (a.fome <= 0) {
        a.fome = 0; a.fraco += dt;
        // o cavalo giratorio e sagrado: com fome ele so para de soltar cesta (senao a missao extra travava)
        if (a.fraco > 14 && !d.sagrado) return matar(a, `${{ vaca: 'A vaca', porco: 'O porco', avestruz: 'O avestruz', galinha: 'A galinha' }[a.tipo] || d.nome} morreu de fome!`);
    } else {
        a.fraco = 0;
        a.prod += dt / (d.tempo * (J.bencao ? BENCAO.animais : 1));
        if (a.prod >= 1) { a.prod = 0; soltar(d.item, a.x + rnd(-6, 6), a.y + 6); Som.tocar(a.tipo); }
    }
    if (a.fugir > 0) {
        a.fugir -= dt;
        if (!a.alvo || moverPara(a, a.alvo, d.vel * 2.3, dt)) a.alvo = pontoPasto();
        return;
    }
    if (a.comendo > 0) {
        a.comendo -= dt; a.andando = false;
        if (a.comendo <= 0) {
            const c = celula(a.x, a.y);
            if (c >= 0 && J.grama[c] > 0 && a.fome < .98) {
                // cada mordida arranca um pouco da grama; quando zera, o tufo some
                J.grama[c]--; a.fome = Math.min(1, a.fome + .15); a.comendo = .35;
                if (!J.grama[c]) poeira(a.x, a.y, 3);
            } else if (a.fome < .98) {
                // ainda com fome: vai pra grama do lado ate encher a barriga
                const g = gramaPerto(a.x, a.y);
                if (g && dist(g.x, g.y, a.x, a.y) < 70) { a.alvo = { x: g.x + rnd(-3, 3), y: g.y + rnd(-3, 3) }; a.comer = true; }
                else a.alvo = null;
            } else a.alvo = null;
        }
        return;
    }
    if (a.fome < .6 && !a.comer) {
        const g = gramaPerto(a.x, a.y);
        if (g) { a.alvo = { x: g.x + rnd(-3, 3), y: g.y + rnd(-3, 3) }; a.comer = true; }
    }
    if (!a.alvo) {
        a.andando = false; a.espera -= dt;
        if (a.espera <= 0) { a.alvo = pontoPasto(); a.comer = false; a.espera = rnd(.5, 2.5); }
        return;
    }
    if (moverPara(a, a.alvo, d.vel * (a.comer ? 1.3 : 1), dt)) {
        const c = celula(a.x, a.y);
        if (a.comer && c >= 0 && J.grama[c] > 0) a.comendo = .3;
        a.alvo = null; a.comer = false;
    }
}
function atualizarAjudante(a, d, dt) {
    if (a.tipo === 'gato') {
        let alvo = null, md = Infinity;
        for (const p of J.produtos) { const dd = dist(p.x, p.y, a.x, a.y); if (dd < md && livreArmazem() >= ITENS[p.item].tam) { md = dd; alvo = p; } }
        if (alvo) { if (moverPara(a, alvo, nivelUpg('gato').vel, dt) || dist(alvo.x, alvo.y, a.x, a.y) < 8) pegarProduto(alvo); return; }
    } else {
        const u = J.ursos.filter(u => u.estado === 'andando').sort((p, q) => dist(p.x, p.y, a.x, a.y) - dist(q.x, q.y, a.x, a.y))[0];
        if (u) {
            if (dist(u.x, u.y, a.x, a.y) < 26) {
                a.andando = false; a.luta += dt; a.fase += dt * 30;
                if (a.luta > nivelUpg('cachorro').luta) { a.luta = 0; enjaular(u); Som.tocar('cachorro'); }
            } else { a.luta = 0; moverPara(a, u, nivelUpg('cachorro').vel, dt); }
            return;
        }
    }
    if (!a.alvo) { a.andando = false; a.espera -= dt; if (a.espera <= 0) { a.alvo = pontoPasto(); a.espera = rnd(1, 3); } return; }
    if (moverPara(a, a.alvo, d.vel * .5, dt)) a.alvo = null;
}
function matar(a, msg) {
    J.animais.splice(J.animais.indexOf(a), 1);
    poeira(a.x, a.y - 10, 16);
    flutuar(a.x, a.y - 30, 'Puf!', '#ffffff');
    aviso(msg, true); Som.tocar('morreu');
}
function atualizarUrso(u, dt) {
    if (u.treme > 0) u.treme -= dt;
    if (u.estado === 'caindo') {
        u.alt -= dt * 380;
        if (u.alt <= 0) { u.alt = 0; u.estado = 'andando'; poeira(u.x, u.y, 20); Som.tocar('tum'); Som.tocar('urso'); }
        return;
    }
    if (u.estado === 'jaula') {
        u.vida -= dt;
        if (u.vida <= 0) { u.estado = 'andando'; u.cliques = 0; u.t = 0; aviso('O urso quebrou a jaula e fugiu!', true); Som.tocar('urso'); }
        return;
    }
    u.t += dt;
    if (tempo - u.ultClique > 1.2) u.cliques = Math.max(0, u.cliques - dt * 1.4);
    if (u.t > 40) { J.ursos.splice(J.ursos.indexOf(u), 1); poeira(u.x, u.y - 10, 16); aviso('O urso foi embora.'); return; }
    u.reTarget -= dt;
    if (!u.alvo || u.reTarget <= 0) {
        const vit = J.animais.filter(a => !ANIMAIS[a.tipo].ajudante && !a.cai).sort((p, q) => dist(p.x, p.y, u.x, u.y) - dist(q.x, q.y, u.x, u.y))[0];
        u.alvo = vit && Math.random() < .7 ? { x: vit.x, y: vit.y } : pontoPasto();
        u.reTarget = rnd(1.5, 3);
    }
    if (moverPara(u, u.alvo, 26, dt)) u.alvo = null;
    for (const a of J.animais) {
        if (ANIMAIS[a.tipo].ajudante || a.cai) continue;
        const d = dist(a.x, a.y, u.x, u.y);
        if (d >= 34) { a.ataque = 0; continue; }
        // o bicho sai correndo; se o urso continuar grudado, pega ele
        if (!(a.fugir > 0)) {
            const dx = a.x - u.x || 1, dy = a.y - u.y;
            a.alvo = { x: Math.max(PASTO.x0 + 14, Math.min(PASTO.x1 - 14, a.x + dx / d * 90)), y: Math.max(PASTO.y0 + 20, Math.min(PASTO.y1 - 14, a.y + dy / d * 90)) };
            a.fugir = 1.4; a.comendo = 0; a.comer = false;
        }
        a.ataque = (a.ataque || 0) + dt;
        if (a.ataque > 1.2 && !ANIMAIS[a.tipo].sagrado) { matar(a,`O urso pegou ${ANIMAIS[a.tipo].nome === 'Vaca' || ANIMAIS[a.tipo].nome === 'Galinha' ? 'uma' : 'um'} ${ANIMAIS[a.tipo].nome.toLowerCase()}!`); Som.tocar('urso'); break; }
    }
}
function atualizarFase(dt) {
    J.tempo += dt;
    for (const a of [...J.animais]) atualizarAnimal(a, dt);
    for (const u of [...J.ursos]) atualizarUrso(u, dt);
    for (const p of [...J.produtos]) {
        if (p.alt > 0 || p.vz < 0) { p.vz += 400 * dt; p.alt -= p.vz * dt; if (p.alt <= 0) { p.alt = 0; p.vz = p.vz > 60 ? -p.vz * .35 : 0; } }
        p.vida -= dt;
        if (p.vida <= 0) { J.produtos.splice(J.produtos.indexOf(p), 1); poeira(p.x, p.y, 6); }
    }
    J.lotes.forEach((L, i) => {
        if (!L) return;
        if (L.pisca > 0) L.pisca -= dt;
        if (L.prog === null) return;
        const P = PREDIOS[L.tipo];
        L.prog += dt / (P.tempo * NIVEL_PREDIO[L.nivel] * (J.bencao ? BENCAO.fabricas : 1));
        if (L.prog >= 1) {
            const pos = LOTES[i];
            soltar(P.sai, pos.x + pos.lado * 72 + rnd(-6, 6), pos.y - 6 + rnd(-8, 8), 30);
            L.fila--; L.prog = L.fila > 0 ? 0 : null;
            Som.tocar('pronto');
        }
    });
    if (J.enchendo > 0) { J.enchendo -= dt; if (J.enchendo <= 0) { J.enchendo = 0; J.agua = aguaMax(); hud(); } }
    if (J.piscaPoco > 0) J.piscaPoco -= dt;
    // ursos
    if (J.F.ursos) {
        J.proxUrso -= dt;
        if (J.proxUrso <= 0) {
            J.proxUrso = J.F.ursos * rnd(.8, 1.2);
            const p = pontoPasto(40);
            J.ursos.push({ x: p.x, y: p.y, alt: 360, estado: 'caindo', t: 0, cliques: 0, prec: Math.max(3, 5 + Math.floor(J.n / 3) - nivelUpg('gaiola').menos), ultClique: -9, dir: -1, fase: 0, reTarget: 0, treme: 0 });
            if (!J.avisouUrso) { J.avisouUrso = true; aviso('Cuidado, um urso! Clique várias vezes nele para prender!', true); }
        }
    }
    // caminhao
    const c = J.cam, tv = nivelUpg('caminhao').tempo;
    if (c.estado !== 'garagem') {
        c.t += dt;
        if (c.estado === 'indo') { c.x = GARAGEM.x - c.t / 2.4 * (GARAGEM.x + 90); if (c.t >= 2.4) { c.estado = 'cidade'; c.t = 0; } }
        else if (c.estado === 'cidade') { if (c.t >= tv - 4.8) { c.estado = 'voltando'; c.t = 0; } }
        else if (c.estado === 'voltando') {
            c.x = -90 + c.t / 2.4 * (GARAGEM.x + 90);
            if (c.t >= 2.4) {
                c.x = GARAGEM.x; c.estado = 'garagem';
                const v = valorCarga(c.carga); c.carga = {};
                ganhar(v);
                J.vendido = (J.vendido || 0) + v;
                for (let i = 0; i < 5; i++) voos.push({ ic: 'moeda', x0: GARAGEM.x + rnd(-20, 20), y0: GARAGEM.y - 40, x1: ALVO_MOEDAS.x, y1: ALVO_MOEDAS.y, t: -i * .08 });
                flutuar(GARAGEM.x, GARAGEM.y - 80, '+' + fmtN(v), '#ffe14d', 'moeda');
                Som.tocar('moeda'); Som.tocar('caminhao');
            }
        }
    }
    // aviao
    const av = J.av;
    if (av && av.estado !== 'hangar') {
        const ta = nivelUpg('aviao').tempo;
        av.t += dt;
        if (av.estado === 'indo') { av.x = HANGAR.x + 18 + av.t * av.t * 120; av.y = HANGAR.y - 2 - Math.max(0, av.t - .6) * 160; if (av.t >= 2.2) { av.estado = 'fora'; av.t = 0; } }
        else if (av.estado === 'fora') { if (av.t >= ta - 4.4) { av.estado = 'voltando'; av.t = 0; Som.tocar('aviao'); } }
        else if (av.estado === 'voltando') {
            const k = 1 - Math.min(1, av.t / 2.2);
            av.x = HANGAR.x + 18 + k * k * 500; av.y = HANGAR.y - 2 - k * 220;
            if (av.t >= 2.2) {
                av.estado = 'hangar'; av.x = HANGAR.x + 18; av.y = HANGAR.y - 2;
                for (const [k2, q] of Object.entries(av.pedido)) for (let i = 0; i < q; i++) soltar(k2, rnd(470, 640), rnd(476, 500), 30);
                av.pedido = {};
                Som.tocar('pronto');
            }
        }
    }
}

// ================= metas =================
function progressoMeta(m) {
    if (m.t === 'item') return { v: Math.min(m.q, J.coletados[m.i] || 0), q: m.q };
    if (m.t === 'animal') return { v: Math.min(m.q, J.animais.filter(a => a.tipo === m.a && !a.cai).length), q: m.q };
    return { v: Math.min(m.q, J.moedas), q: m.q };
}
const metaFeita = m => { const p = progressoMeta(m); return p.v >= p.q; };
const iconeMeta = m => m.t === 'item' ? m.i : m.t === 'animal' ? 'obj:animal:' + m.a : 'moeda';
const medalhaPorTempo = t => t <= J.F.ouro ? 3 : t <= J.F.prata ? 2 : 1;
const NOME_MEDALHA = ['', 'bronze', 'prata', 'ouro'];
// estrelas: completar + bonus da medalha (ouro/prata); repetindo a fase so ganha a diferenca
function estrelasDa(m, n) {
    if (!m) return 0;
    const e = ESTRELAS(n);
    return e.completar + (m === 3 ? e.ouro : m === 2 ? e.prata : 0);
}
function checarVitoria() {
    if (!J || J.ganhou || !J.comecou || J.F.infinito) return;
    if (!J.F.metas.every(metaFeita)) return;
    J.ganhou = true;
    const m = medalhaPorTempo(J.tempo), antes = E.medalhas[J.n] || 0;
    const diaria = !!J.F.extra;
    const premio = diaria ? estrelasDa(m, J.n) : Math.max(0, estrelasDa(m, J.n) - estrelasDa(antes, J.n));
    if (diaria) E.missaoDia = new Date().toDateString();
    if (m > antes) E.medalhas[J.n] = m;
    if (E.salvo && E.salvo.n === J.n) delete E.salvo;
    E.estrelas += premio;
    salvar();
    Som.tocar('vitoria');
    setTimeout(() => popupVitoria(m, premio), 700);
}

// ================= efeitos =================
function flutuar(x, y, txt, cor = '#fff', icone = null) { textos.push({ x, y, txt, cor, ic: icone, vida: 1.5, max: 1.5 }); }
function poeira(x, y, n = 12) {
    for (let i = 0; i < n; i++) efeitos.push({ t: 'fumo', x: x + rnd(-16, 16), y: y + rnd(-6, 4), vx: rnd(-40, 40), vy: rnd(-50, -10), g: -10, vida: rnd(.4, .8), r: rnd(5, 10), cor: '#e8dcc0' });
}
function estrelas(x, y) {
    for (let i = 0; i < 12; i++) efeitos.push({ t: 'brilho', x: x + rnd(-14, 14), y: y + rnd(-10, 6), vx: rnd(-80, 80), vy: rnd(-130, -40), g: 140, vida: rnd(.5, 1), r: rnd(3.5, 6), cor: ['#fff6a0', '#ffd21f', '#ffffff'][ri(0, 2)] });
}
function atualizarEfeitos(dt) {
    for (const e of efeitos) { e.x += e.vx * dt; e.y += e.vy * dt; e.vy += e.g * dt; e.vida -= dt; if (e.a !== undefined) e.a += dt * 8; }
    efeitos = efeitos.filter(e => e.vida > 0);
    for (const t of textos) t.vida -= dt;
    textos = textos.filter(t => t.vida > 0);
    for (const v of voos) v.t += dt / .7;
    voos = voos.filter(v => v.t < 1);
}

// ================= desenho =================
const cacheSpr = new Map();
function spr(chave, ox, oy, w, h, fn, luzes = false) {
    let s = cacheSpr.get(chave);
    if (!s) {
        const c2 = document.createElement('canvas');
        c2.width = Math.max(1, Math.ceil(w * escala)); c2.height = Math.max(1, Math.ceil(h * escala));
        const g = c2.getContext('2d');
        g.scale(escala, escala); g.translate(ox, oy); fn(g);
        if (luzes) {
            // luz de cima/esquerda e sombra embaixo/direita por cima de tudo: da volume de render 3d
            g.setTransform(1, 0, 0, 1, 0, 0);
            g.globalCompositeOperation = 'source-atop';
            const gr = g.createLinearGradient(0, 0, c2.width * .8, c2.height);
            const k = luzes === true ? .55 : luzes;
            gr.addColorStop(0, `rgba(255,250,215,${.28 * k})`); gr.addColorStop(.45, 'rgba(255,255,255,0)'); gr.addColorStop(1, `rgba(10,20,50,${.3 * k})`);
            g.fillStyle = gr; g.fillRect(0, 0, c2.width, c2.height);
            g.globalCompositeOperation = 'source-over';
        }
        s = { c: c2, ox, oy, w, h };
        cacheSpr.set(chave, s);
    }
    return s;
}
function pintar(s, x, y) { ctx.drawImage(s.c, x - s.ox, y - s.oy, s.w, s.h); }

function nuvem(c, x, y, s) {
    c.save(); c.translate(x, y); c.scale(s, s);
    c.beginPath(); for (const [dx, dy, r] of [[-20, 4, 13], [0, -4, 17], [22, 2, 14], [38, 7, 10], [-34, 8, 9]]) { c.moveTo(dx + r, dy); c.arc(dx, dy, r, 0, TAU); }
    c.fillStyle = 'rgba(255,255,255,.95)'; c.fill();
    c.restore();
}
function semente(s) { return () => (s = (s * 16807) % 2147483647) / 2147483647; }
// contorno organico do pasto (super-elipse com ondinhas), igual a mancha de terra do jogo antigo
const PASTO_FORMA = (() => {
    const pts = [], cx = 380, cy = 306, a = 250, b = 180, n = 6;
    for (let i = 0; i < 96; i++) {
        const t = i / 96 * TAU, ct = Math.cos(t), st = Math.sin(t);
        const k = 1 + .025 * Math.sin(t * 5 + .7) + .018 * Math.sin(t * 11 + 2) + .01 * Math.sin(t * 23);
        pts.push([cx + a * k * Math.sign(ct) * Math.pow(Math.abs(ct), 2 / n), cy + b * k * Math.sign(st) * Math.pow(Math.abs(st), 2 / n)]);
    }
    return pts;
})();
function caminhoPasto(c, cresce = 0) {
    const cx = 380, cy = 306, p = PASTO_FORMA.map(([x, y]) => { const dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy); return [x + dx / d * cresce, y + dy / d * cresce]; });
    c.beginPath();
    const m = (i, j) => [(p[i][0] + p[j][0]) / 2, (p[i][1] + p[j][1]) / 2];
    const ini = m(p.length - 1, 0);
    c.moveTo(ini[0], ini[1]);
    for (let i = 0; i < p.length; i++) { const q = m(i, (i + 1) % p.length); c.quadraticCurveTo(p[i][0], p[i][1], q[0], q[1]); }
    c.closePath();
}
function folhasGrama(c, x, y, h, r, escuro) {
    for (let k = 0; k < 3; k++) {
        const a = (r() - .5) * 1.1;
        c.beginPath(); c.moveTo(x + k * 2 - 2, y); c.quadraticCurveTo(x + a * 5, y - h * .5, x + a * h * .6, y - h);
        c.lineWidth = 2.2; c.strokeStyle = escuro ? '#3f8a1c' : (r() > .5 ? '#7cd040' : '#9be05a'); c.stroke();
    }
}
function fundoJogo(c) {
    const r = semente(42);
    // ceu
    c.fillStyle = vg(c, 0, 96, '#58b0f0', '#dff4ff'); c.fillRect(0, 0, LARG, 100);
    nuvem(c, 250, 22, .9); nuvem(c, 480, 44, .6); nuvem(c, 690, 30, .8);
    // camadas de morro: quanto mais longe, mais azulado
    const camadas = [[70, '#a6cf8a', 18], [84, '#8cc466', 22], [98, '#78bb48', 26]];
    for (const [y, cor, amp] of camadas) {
        c.beginPath(); c.moveTo(0, ALT);
        for (let x = 0; x <= LARG; x += 20) c.lineTo(x, y - Math.sin(x / 90 + y) * amp * .5 - Math.sin(x / 37 + y * 2) * amp * .2);
        c.lineTo(LARG, ALT); c.closePath();
        c.fillStyle = cor; c.fill();
        for (let i = 0; i < 26; i++) { // fileira de arvorezinhas
            const x = r() * LARG, yy = y - Math.sin(x / 90 + y) * amp * .5 - Math.sin(x / 37 + y * 2) * amp * .2 + 3, s = y / 110;
            circ(c, x, yy - 5 * s, 5 * s); c.fillStyle = mix(cor, -.2); c.fill();
        }
    }
    // casinhas de fazenda la longe
    for (const [x, y, s] of [[610, 82, .9], [662, 76, .7], [700, 88, 1]]) {
        c.save(); c.translate(x, y); c.scale(s, s);
        c.fillStyle = '#f0e6d0'; c.fillRect(-10, -10, 20, 12);
        c.beginPath(); c.moveTo(-13, -9); c.lineTo(0, -19); c.lineTo(13, -9); c.closePath(); c.fillStyle = '#c8402a'; c.fill();
        c.fillStyle = '#6a8ab0'; c.fillRect(-6, -6, 4, 4); c.fillRect(3, -6, 4, 6);
        c.restore();
    }
    // cerquinha no horizonte
    c.beginPath(); for (let x = 110; x < 560; x += 14) { c.moveTo(x, 108); c.lineTo(x, 100); } c.moveTo(110, 103); c.lineTo(560, 103);
    traco(c, 1.4, 'rgba(120,80,40,.6)');
    // campo principal com luz no meio
    c.fillStyle = vg(c, 100, ALT, '#7fc63c', '#4f9a22'); c.fillRect(0, 104, LARG, ALT - 104);
    const luzCampo = c.createRadialGradient(380, 300, 40, 380, 300, 520);
    luzCampo.addColorStop(0, 'rgba(255,255,190,.22)'); luzCampo.addColorStop(1, 'rgba(255,255,190,0)');
    c.fillStyle = luzCampo; c.fillRect(0, 100, LARG, ALT);
    for (let i = 0; i < 40; i++) { // manchas de grama mais escura/clara
        c.beginPath(); c.ellipse(r() * LARG, 110 + r() * 490, 30 + r() * 60, 10 + r() * 20, 0, 0, TAU);
        c.fillStyle = r() > .5 ? 'rgba(40,100,10,.08)' : 'rgba(220,255,150,.08)'; c.fill();
    }
    for (let i = 0; i < 1100; i++) {
        const x = r() * LARG, y = 106 + r() * (ALT - 106), h = 3 + (y / ALT) * 5;
        c.beginPath(); c.moveTo(x, y); c.lineTo(x + (r() - .5) * 3, y - h);
        c.lineWidth = 1.2; c.strokeStyle = r() > .5 ? 'rgba(40,100,15,.5)' : 'rgba(190,240,120,.45)'; c.stroke();
    }
    // estradinha do caminhao
    c.beginPath(); c.moveTo(-10, 556); c.quadraticCurveTo(80, 560, 140, 564); c.lineTo(272, 564); c.lineTo(272, 600); c.lineTo(-10, 600); c.closePath();
    c.fillStyle = vg(c, 556, 600, '#d4ac70', '#b08048'); c.fill(); traco(c, 2, 'rgba(110,70,30,.6)');
    c.beginPath(); c.moveTo(0, 578); c.lineTo(270, 578); c.moveTo(0, 590); c.lineTo(270, 590); traco(c, 1.5, 'rgba(120,80,30,.25)');
    // caminhos de terra ate os lotes
    c.lineCap = 'round';
    for (const [w, cor] of [[20, 'rgba(150,110,60,.5)'], [15, 'rgba(214,174,112,.9)']]) {
        c.strokeStyle = cor; c.lineWidth = w;
        for (const L of LOTES) { c.beginPath(); c.moveTo(L.x + L.lado * 46, L.y - 4); c.lineTo(L.lado > 0 ? 190 : 570, L.y - 4); c.stroke(); }
        c.beginPath(); c.moveTo(ARMAZEM.x, ARMAZEM.y - 20); c.lineTo(ARMAZEM.x, 470); c.stroke();
        c.beginPath(); c.moveTo(GARAGEM.x + 40, GARAGEM.y - 30); c.lineTo(300, 470); c.stroke();
    }
    // pasto de terra
    caminhoPasto(c, 6); c.fillStyle = 'rgba(40,70,10,.35)'; c.fill();
    caminhoPasto(c);
    const terra = c.createRadialGradient(370, 280, 30, 380, 306, 300);
    terra.addColorStop(0, '#dcb87c'); terra.addColorStop(.7, '#c49a5c'); terra.addColorStop(1, '#a87a40');
    c.fillStyle = terra; c.fill();
    c.save(); caminhoPasto(c); c.clip();
    for (let i = 0; i < 900; i++) {
        const x = 120 + r() * 520, y = 120 + r() * 380;
        c.fillStyle = r() > .5 ? 'rgba(110,70,25,.22)' : 'rgba(255,240,200,.22)';
        c.fillRect(x, y, 1 + r() * 2.5, 1 + r() * 1.5);
    }
    for (let i = 0; i < 18; i++) { // pedrinhas com sombra
        const x = 170 + r() * 420, y = 160 + r() * 290;
        sombra(c, x + 1, y + 2, 4, 1.6, .3); ovalG(c, x, y, 3.2, 2.2, '#b8ac98', .6);
    }
    for (let i = 0; i < 10; i++) { // marcas de pata
        const x = 180 + r() * 400, y = 170 + r() * 270;
        for (let k = 0; k < 4; k++) { c.beginPath(); c.ellipse(x + k * 7, y + (k % 2) * 4, 1.8, 1.2, 0, 0, TAU); c.fillStyle = 'rgba(100,60,20,.18)'; c.fill(); }
    }
    // sombra interna (a grama fica mais alta que a terra)
    caminhoPasto(c); c.lineWidth = 22; c.strokeStyle = 'rgba(70,40,10,.28)'; c.stroke();
    caminhoPasto(c); c.lineWidth = 9; c.strokeStyle = 'rgba(70,40,10,.25)'; c.stroke();
    c.restore();
    // beirada de grama fofinha em volta do pasto
    for (let i = 0; i < PASTO_FORMA.length * 3; i++) {
        const j = Math.floor(i / 3), [x0, y0] = PASTO_FORMA[j], [x1, y1] = PASTO_FORMA[(j + 1) % PASTO_FORMA.length], t = (i % 3) / 3;
        const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
        folhasGrama(c, x + (r() - .5) * 4, y + 2, 7 + r() * 5, r, r() > .6);
    }
    // terrinha do poco
    c.beginPath(); c.ellipse(POCO.x, POCO.y - 4, 48, 12, 0, 0, TAU); c.fillStyle = vg(c, POCO.y - 16, POCO.y + 8, '#d4ac70', '#a87a40'); c.fill();
    // arvores e moitas de enfeite (menores la atras = perspectiva)
    for (const [x, y, t] of [[118, 118, 'm'], [640, 116, 'm'], [258, 478, 'm'], [510, 478, 'm'], [40, 532, 'a'], [740, 486, 'p'], [22, 108, 'p'], [740, 112, 'm'], [92, 106, 'p']]) {
        c.save(); c.translate(x, y); const s = .55 + (y / ALT) * .55; c.scale(s, s);
        if (t === 'a') arvoreDes(c, 'macieira', true); else if (t === 'p') pinheiroDes(c); else arbustoDes(c);
        c.restore();
    }
    // vinheta nos cantos (profundidade)
    const vin = c.createRadialGradient(380, 330, 260, 380, 330, 560);
    vin.addColorStop(0, 'rgba(0,0,0,0)'); vin.addColorStop(1, 'rgba(10,30,0,.32)');
    c.fillStyle = vin; c.fillRect(0, 0, LARG, ALT);
}
function rnd2(r, a, b) { return a + r() * (b - a); }

function desenharJogo() {
    pintar(spr('fundo', 0, 0, LARG, ALT, fundoJogo), 0, 0);
    // grama plantada
    for (let i = 0; i < J.grama.length; i++) {
        const v = J.grama[i];
        if (!v) continue;
        const x = PASTO.x0 + (i % COLS) * CEL + CEL / 2 + ((i * 7) % 5) - 2, y = PASTO.y0 + Math.floor(i / COLS) * CEL + CEL / 2 + ((i * 13) % 5) - 2;
        pintar(spr('tufo' + v, 12, 14, 24, 20, g => tufoDes(g, v)), x, y);
    }
    desenharEstruturas();
    // objetos por profundidade
    const lista = [];
    for (const a of J.animais) lista.push({ y: a.y, a });
    for (const u of J.ursos) lista.push({ y: u.y, u });
    for (const p of J.produtos) lista.push({ y: p.y - .1, p });
    lista.sort((p, q) => p.y - q.y);
    for (const it of lista) {
        if (it.a) desenharAnimal(it.a);
        else if (it.u) desenharUrso(it.u);
        else desenharProduto(it.p);
    }
    // efeitos
    for (const e of efeitos) {
        ctx.globalAlpha = Math.min(1, e.vida * 2.5);
        if (e.t === 'fumo') { circ(ctx, e.x, e.y, e.r * (1.6 - e.vida)); ctx.fillStyle = e.cor; ctx.fill(); }
        else if (e.t === 'brilho') estrela(ctx, e.x, e.y, e.r, e.r * .4, 4, e.cor, 0);
        else oval(ctx, e.x, e.y, e.r, e.r * .5, e.cor, .6, e.a);
    }
    ctx.globalAlpha = 1;
    // receita da fabrica embaixo do mouse
    const a = alvoEm(mouse.x, mouse.y);
    if (a && (a.t === 'lote' || a.t === 'placa') && !janelaAtual) desenharDicaLote(a.i, a.t === 'placa');
    // icones voando ate o armazem / moedas
    for (const v of voos) {
        if (v.t < 0) continue;
        const k = v.t, x = v.x0 + (v.x1 - v.x0) * k, y = v.y0 + (v.y1 - v.y0) * k - Math.sin(k * Math.PI) * 60;
        ctx.drawImage(iconeCv(v.ic), x - 13, y - 13, 26, 26);
    }
    for (const t of textos) {
        const k = t.vida / t.max, y = t.y - (1 - k) * 40;
        ctx.globalAlpha = Math.min(1, k * 2.5);
        ctx.font = 'bold 16px "Trebuchet MS", Verdana, sans-serif';
        const w = ctx.measureText(t.txt).width;
        if (t.ic) ctx.drawImage(iconeCv(t.ic), t.x - w / 2 - 21, y - 10, 20, 20);
        texto(ctx, t.txt, t.x, y, 16, t.cor);
    }
    ctx.globalAlpha = 1;
}


function desenharEstruturas() {
    // lotes e fabricas
    J.lotes.forEach((L, i) => {
        if (!L) return;
        const p = LOTES[i];
        if (!L.construido) pintar(spr('lote', 66, 50, 132, 90, loteVazioDes, true), p.x, p.y - 22);
        else {
            const s = spr('pr|' + L.tipo, 66, 112, 140, 150, g => predioFF(g, PREDIOS[L.tipo], L.tipo), true);
            const k = L.pisca > 0 && Math.sin(tempo * 25) > 0;
            if (k) ctx.globalAlpha = .55;
            if (L.prog !== null) { const b = Math.sin(tempo * 18) * .6; pintar(s, p.x, p.y - 24 + b); } else pintar(s, p.x, p.y - 24);
            ctx.globalAlpha = 1;
            if (L.prog !== null && PREDIOS[L.tipo].chamine) { const [fx, fy] = proj3d(22, 82, -10, CAM_PADRAO); fumaca(p.x + fx, p.y - 24 + fy); }
            // termometro
            const tx = p.x + p.lado * 54 + (p.lado < 0 ? -8 : 0) + (p.lado > 0 ? 4 : 0);
            caixaR(ctx, tx, p.y - 66, 9, 54, 4, '#fff', 1.4);
            const f = L.prog === null ? 0 : L.prog;
            if (f > 0) { rr(ctx, tx + 2, p.y - 14 - 48 * f, 5, 48 * f, 2.5); ctx.fillStyle = vg(ctx, p.y - 62, p.y - 14, '#ff6a3a', '#ffd21f'); ctx.fill(); }
            bola(ctx, tx + 4.5, p.y - 10, 5.5, L.prog !== null ? '#ff6a3a' : '#c8c8c8', 1.2);
            for (let k2 = 0; k2 < L.fila; k2++) bola(ctx, tx + 4.5, p.y - 76 - k2 * 9, 3.2, '#4fb82a', 1);
            for (let k2 = 0; k2 < L.nivel; k2++) estrela(ctx, p.x - 12 + k2 * 12, p.y - 102, 5, 2.2, 5, '#ffd21f', 1);
        }
        placa(p.x, p.y + 14, L);
    });
    // poco
    const cheio = J.agua > 0 || J.enchendo > 0;
    const pisca = J.piscaPoco > 0 && Math.sin(tempo * 20) > 0;
    if (pisca) ctx.globalAlpha = .5;
    pintar(spr('poco' + cheio, 50, 100, 100, 112, g => pocoDes(g, cheio), true), POCO.x, POCO.y);
    ctx.globalAlpha = 1;
    if (J.enchendo > 0) {
        const k = Math.abs(Math.sin(tempo * 4));
        poli(ctx, [POCO.x - 2, POCO.y - 48 + k * 14, POCO.x + 10, POCO.y - 48 + k * 14, POCO.x + 8, POCO.y - 38 + k * 14, POCO.x, POCO.y - 38 + k * 14], '#8fcff0', 1.2);
    }
    // barra de agua
    const ax = POCO.x + 40, max = aguaMax();
    caixaR(ctx, ax, POCO.y - 64, 10, 60, 4, '#3b2411', 1);
    const fa = J.enchendo > 0 ? 1 - J.enchendo / 2.4 : J.agua / max;
    if (fa > 0) { rr(ctx, ax + 2, POCO.y - 6 - 56 * fa, 6, 56 * fa, 3); ctx.fillStyle = vg(ctx, POCO.y - 62, POCO.y - 6, '#bfeaff', '#2f88d8'); ctx.fill(); }
    if (J.agua === 0 && !J.enchendo) {
        const by = POCO.y - 40 + Math.sin(tempo * 5) * 3, bx = POCO.x - 78;
        caixaR(ctx, bx - 26, by - 12, 52, 24, 12, vg(ctx, by - 12, by + 12, '#fff8d0', '#f0d080'), 1.6);
        poli(ctx, [bx + 22, by - 4, bx + 32, by, bx + 22, by + 4], '#f0d080', 1);
        ctx.drawImage(iconeCv('moeda'), bx - 24, by - 10, 20, 20);
        texto(ctx, String(CUSTO_AGUA), bx + 8, by + 1, 13, '#fff', '#7a4a00');
    }
    // armazem
    pintar(spr('armazem', 118, 146, 236, 158, armazemDes, true), ARMAZEM.x, ARMAZEM.y);
    desenharEstoque();
    // garagem e caminhao
    pintar(spr('garagem', 84, 94, 172, 106, garagemDes, true), GARAGEM.x, GARAGEM.y);
    const c = J.cam;
    if (c.estado === 'garagem' || c.estado === 'indo' || c.estado === 'voltando') {
        ctx.save(); ctx.translate(c.x, GARAGEM.y - 4);
        caminhaoLado(ctx, c.estado === 'garagem' ? 0 : tempo * (c.estado === 'indo' ? -1 : 1), tamDe(c.carga) > 0);
        ctx.restore();
    } else {
        texto(ctx, 'Na cidade', GARAGEM.x, GARAGEM.y - 46, 13, '#fff');
        texto(ctx, fmtT(nivelUpg('caminhao').tempo - 4.8 - c.t + 2.4), GARAGEM.x, GARAGEM.y - 28, 15, '#ffe14d');
    }
    // hangar e aviao
    if (J.av) {
        pintar(spr('hangar', 72, 84, 170, 92, hangarDes, true), HANGAR.x, HANGAR.y);
        const av = J.av;
        if (av.estado === 'fora') { texto(ctx, 'Voando', HANGAR.x + 20, HANGAR.y - 46, 13, '#fff'); texto(ctx, fmtT(nivelUpg('aviao').tempo - av.t - 2.2), HANGAR.x + 20, HANGAR.y - 28, 15, '#ffe14d'); }
        else { ctx.save(); ctx.translate(av.x, av.y); aviaoDes(ctx, tempo); ctx.restore(); }
    }
}
function placa(x, y, L) {
    let txt, cor;
    if (!L.construido) { txt = fmtN(PREDIOS[L.tipo].custo); cor = '#4fb82a'; }
    else if (L.nivel < 2) { txt = fmtN(Math.round(PREDIOS[L.tipo].custo * CUSTO_MELHORIA[L.nivel])); cor = '#2f8ae8'; }
    else { txt = 'Máximo'; cor = '#a0a0a0'; }
    const caro = L.nivel < 2 && J.moedas < (L.construido ? Math.round(PREDIOS[L.tipo].custo * CUSTO_MELHORIA[L.nivel]) : PREDIOS[L.tipo].custo);
    ctx.font = 'bold 12px "Trebuchet MS", sans-serif';
    const w = ctx.measureText(txt).width + 34;
    caixaR(ctx, x - w / 2, y - 9, w, 19, 9, caro ? '#9aa4ac' : vg(ctx, y - 9, y + 10, mix(cor, .4), mix(cor, -.15)), 1.6);
    ctx.drawImage(iconeCv(L.construido ? 'martelo' : 'martelo'), x - w / 2 + 2, y - 10, 20, 20);
    texto(ctx, txt, x + 9, y + .5, 12, '#fff', '#1a2a4a');
}
function desenharEstoque() {
    const P = ARMAZEM_PAINEL, bx = ARMAZEM.x + P.x;
    const itens = Object.entries(J.armazem);
    // duas prateleiras de 6 produtos
    itens.slice(0, 12).forEach(([k, q], i) => {
        const x = bx + 4 + (i % 6) * 25, y = ARMAZEM.y + P.linhas[Math.floor(i / 6)] - 22;
        sombra(ctx, x + 11, y + 21, 9, 2.4, .35);
        ctx.drawImage(iconeCv(k), x, y, 22, 22);
        texto(ctx, String(q), x + 20, y + 18, 9, '#fff', '#1a2a4a');
    });
    const uso = usoArmazem(), cap = capArmazem();
    caixaR(ctx, ARMAZEM.x - 40, ARMAZEM.y - 121, 80, 6, 3, 'rgba(60,30,5,.7)', .8);
    if (uso) caixaR(ctx, ARMAZEM.x - 39, ARMAZEM.y - 120, 78 * Math.min(1, uso / cap), 4, 2, uso >= cap ? '#ff5a3a' : '#5ac8ff', 0);
    texto(ctx, `${uso}/${cap}`, ARMAZEM.x + 62, ARMAZEM.y - 132, 10, '#fff', '#5a2a0a');
}
// perspectiva: o que esta mais pra baixo (perto) fica um pouco maior
const escalaY = y => .84 + .26 * Math.max(0, Math.min(1, (y - PASTO.y0) / (PASTO.y1 - PASTO.y0)));
function quadroAnimal(tipo, fase, andando, bica) {
    const q = andando ? Math.floor(((fase % TAU) + TAU) % TAU / TAU * 8) : 0;
    if (tipo === 'cavalo') {
        const giro = Math.floor(tempo * 12) % 16;
        return spr(`an|cavalo|${andando ? 1 : 0}|${q}|${giro}`, 50, 84, 100, 96, g => ANIMAL_DES.cavalo(g, q * TAU / 8, andando, giro), .35);
    }
    return spr(`an|${tipo}|${andando ? 1 : 0}|${q}|${bica ? 1 : 0}`, 46, 78, 92, 86,
        g => ANIMAL_DES[tipo](g, q * TAU / 8, andando, tipo === 'galinha' ? bica : 0), .35);
}
function desenharAnimal(a) {
    const d = ANIMAIS[a.tipo], s = escalaY(a.y);
    if (a.cai > 0) sombra(ctx, a.x, a.y, 16 * (1 - a.cai / 300), 5, .3);
    ctx.save(); ctx.translate(a.x + (a.luta > 0 ? rnd(-2, 2) : 0), a.y - a.cai); ctx.scale(s, s);
    if (a.cai > 0) { ctx.save(); ctx.translate(0, 22 - ANIMAL_ALT[a.tipo]); paraquedas(ctx, Math.sin(tempo * 3) * .1); ctx.restore(); }
    if (a.dir > 0) ctx.scale(-1, 1);
    if (a.fome <= 0 && Math.sin(tempo * 12) > 0) ctx.globalAlpha = .55;
    const bica = a.tipo === 'galinha' && !a.andando && Math.sin(tempo * 2.3 + a.fase) > .7;
    pintar(quadroAnimal(a.tipo, a.fase, !!a.andando, bica), 0, 0);
    ctx.restore();
    ctx.globalAlpha = 1;
    if (d.ajudante || a.cai) return;
    // barrinha de fome embaixo dos pes (azul cheia, vermelha piscando quando vazia)
    const w = 26 * s, f = Math.max(0, a.fome), pisca = f < .3 && Math.sin(tempo * 10) > 0;
    caixaR(ctx, a.x - w / 2, a.y + 3, w, 5, 2.5, 'rgba(20,30,60,.75)', 0);
    if (f > 0) caixaR(ctx, a.x - w / 2 + 1, a.y + 4, (w - 2) * f, 3, 1.5, f < .3 ? (pisca ? '#ff8a6a' : '#e8402a') : vg(ctx, a.y + 4, a.y + 7, '#9fe0ff', '#2f88d8'), 0);
    if (f <= 0) texto(ctx, '!', a.x, a.y - ANIMAL_ALT[a.tipo] * s - 8, 18, '#ff4a2a');
}
function desenharUrso(u) {
    const s = escalaY(u.y);
    if (u.estado === 'caindo') sombra(ctx, u.x, u.y, 26 * (1 - u.alt / 400), 7, .35);
    const tx = u.treme > 0 ? rnd(-3, 3) : 0;
    ctx.save(); ctx.translate(u.x + tx, u.y - u.alt); ctx.scale(s, s);
    if (u.estado === 'jaula' && u.vida < 4 && Math.sin(tempo * 20) > 0) ctx.globalAlpha = .6;
    ctx.save(); if (u.dir > 0) ctx.scale(-1, 1);
    const andando = u.estado === 'andando' && !!u.andando, q = andando ? Math.floor(((u.fase % TAU) + TAU) % TAU / TAU * 8) : 0;
    pintar(spr(`urso|${andando ? 1 : 0}|${q}`, 46, 78, 92, 86, g => ANIMAL_DES.urso(g, q * TAU / 8, andando, 0), .5), 0, 0);
    ctx.restore();
    if (u.estado === 'jaula') jaulaDes(ctx, 1);
    else if (u.cliques > 0) jaulaDes(ctx, u.cliques / u.prec);
    ctx.restore();
    ctx.globalAlpha = 1;
    if (u.estado === 'jaula') {
        const seg = nivelUpg('gaiola').segura;
        caixaR(ctx, u.x - 18, u.y + 7, 36, 6, 3, 'rgba(20,30,60,.75)', 0);
        caixaR(ctx, u.x - 17, u.y + 8, 34 * u.vida / seg, 4, 2, '#ffd21f', 0);
    }
}
function desenharProduto(p) {
    if (p.vida < 4 && Math.sin(tempo * 18) > 0) return;
    const s = escalaY(p.y), t = 30 * s;
    sombra(ctx, p.x, p.y, 12 * s, 4 * s, .35 * (1 - Math.min(1, p.alt / 40)));
    ctx.drawImage(iconeCv(p.item), p.x - t / 2, p.y - t + 2 - p.alt, t, t);
}
function fumaca(x, y) {
    for (let k = 0; k < 4; k++) {
        const ph = (tempo * .5 + k / 4) % 1;
        ctx.globalAlpha = .6 * (1 - ph);
        bola(ctx, x + Math.sin(ph * 6 + k) * 3 + ph * 8, y - ph * 34, 3 + ph * 7, '#eeeeee', 0);
    }
    ctx.globalAlpha = 1;
}
function desenharDicaLote(i, ehPlaca) {
    const L = J.lotes[i], P = PREDIOS[L.tipo], p = LOTES[i];
    const ent = Object.entries(P.ent);
    const w = 44 + ent.length * 30 + 30, x = p.x + p.lado * 20 - w / 2 + (p.lado > 0 ? 40 : -40), y = p.y - 150;
    caixaR(ctx, x, y, w, 40, 10, 'rgba(255,250,225,.95)', 1.8);
    ent.forEach(([k, q], j) => {
        ctx.drawImage(iconeCv(k), x + 6 + j * 30, y + 6, 28, 28);
        if ((J.armazem[k] || 0) < q) { ctx.strokeStyle = '#e8322c'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(x + 8 + j * 30, y + 8); ctx.lineTo(x + 32 + j * 30, y + 32); ctx.stroke(); }
    });
    texto(ctx, '→', x + 14 + ent.length * 30, y + 20, 18, '#8a5a2b', '#fff4d0');
    ctx.drawImage(iconeCv(P.sai), x + 26 + ent.length * 30, y + 6, 28, 28);
    texto(ctx, ehPlaca ? (L.construido ? 'Melhorar' : 'Construir') : P.nome, x + w / 2, y - 8, 11, '#fff', '#1a2a4a');
}
// ---------- telas de menu (fundo desenhado) ----------
function fundoInicio(c) {
    // cena do menu: tudo na mesma escala e apoiado no chao (casas com terreno e sombra, bichos pisando na grama)
    const r = semente(11), H = 200;
    c.fillStyle = vg(c, 0, H, '#4aa4ec', '#d4f0ff'); c.fillRect(0, 0, LARG, ALT);
    nuvem(c, 90, 50, 1.1); nuvem(c, 650, 40, .9); nuvem(c, 420, 80, .6);
    for (const [y, cor, amp] of [[H - 18, '#a6cf8a', 12], [H - 4, '#8cc466', 10]]) {
        c.beginPath(); c.moveTo(0, ALT);
        for (let x = 0; x <= LARG; x += 20) c.lineTo(x, y - Math.sin(x / 80 + y) * amp);
        c.lineTo(LARG, ALT); c.closePath(); c.fillStyle = cor; c.fill();
    }
    c.fillStyle = vg(c, H, ALT, '#86cc42', '#4f9a22'); c.fillRect(0, H + 6, LARG, ALT);
    for (let i = 0; i < 800; i++) { const x = r() * LARG, y = H + 8 + r() * (ALT - H), h = 2 + (y / ALT) * 5; c.beginPath(); c.moveTo(x, y); c.lineTo(x + (r() - .5) * 3, y - h); c.lineWidth = 1.2; c.strokeStyle = r() > .5 ? 'rgba(40,100,15,.5)' : 'rgba(190,240,120,.45)'; c.stroke(); }
    // fileira do fundo, rente ao horizonte (pequena = longe)
    for (const [x, t] of [[22, 'p'], [70, 'a'], [215, 'm'], [300, 'p'], [470, 'm'], [545, 'a'], [690, 'p'], [745, 'm']]) {
        c.save(); c.translate(x, H + 30); c.scale(.6, .6);
        if (t === 'a') arvoreDes(c, 'macieira', true); else if (t === 'p') pinheiroDes(c); else arbustoDes(c);
        c.restore();
    }
    c.beginPath();
    for (let x = 0; x <= LARG; x += 18) { c.moveTo(x, H + 40); c.lineTo(x, H + 28); }
    c.moveTo(0, H + 32); c.lineTo(LARG, H + 32); c.moveTo(0, H + 37); c.lineTo(LARG, H + 37);
    c.lineWidth = 2.4; c.strokeStyle = '#8a5a2b'; c.stroke();
    // pasto de terra embaixo
    c.beginPath(); c.ellipse(380, 560, 340, 80, 0, 0, TAU);
    const terra = c.createRadialGradient(380, 540, 30, 380, 560, 340); terra.addColorStop(0, '#dcb87c'); terra.addColorStop(1, '#a87a40');
    c.fillStyle = terra; c.fill();
    c.lineWidth = 8; c.strokeStyle = 'rgba(70,40,10,.18)'; c.stroke();
    // terreno de terra com sombra embaixo de cada construcao (assim nada fica flutuando)
    const terreno = (x, y, rx, ry) => {
        c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, TAU);
        const g = c.createRadialGradient(x, y, 4, x, y, rx); g.addColorStop(0, '#d4ae72'); g.addColorStop(.8, '#b88a50'); g.addColorStop(1, 'rgba(160,120,70,0)');
        c.fillStyle = g; c.fill();
    };
    terreno(125, 410, 105, 36); terreno(640, 410, 105, 36); terreno(705, 296, 50, 15);
    c.save(); c.translate(705, 300); c.scale(.62, .62); pocoDes(c, true); c.restore();
    c.save(); c.translate(125, 398); c.scale(1.2, 1.2); predioFF(c, PREDIOS.padaria); c.restore();
    c.save(); c.translate(640, 398); c.scale(1.2, 1.2); predioFF(c, PREDIOS.laticinio); c.restore();
    // arvores da frente nos cantos
    c.save(); c.translate(26, 498); pinheiroDes(c); c.restore();
    c.save(); c.translate(742, 500); c.scale(.9, .9); arvoreDes(c, 'macieira', true); c.restore();
    // bichos no chao, na mesma escala das casas, do fundo pra frente
    const bichos = [['porco', 565, 478, 1.15, -1], ['vaca', 205, 488, 1.05, 1], ['galinha', 700, 500, 1.2, 1], ['galinha', 70, 505, 1.2, -1],
        ['gato', 655, 520, 1.1, 1], ['cachorro', 120, 528, 1.1, -1], ['galinha', 250, 535, 1.2, 1], ['galinha', 525, 538, 1.2, -1]];
    for (const [t, x, y, sc, d] of bichos.sort((p, q) => p[2] - q[2])) { c.save(); c.translate(x, y); c.scale(sc * d, sc); ANIMAL_DES[t](c, 0, false, false); c.restore(); }
    const vin = c.createRadialGradient(380, 300, 260, 380, 300, 560);
    vin.addColorStop(0, 'rgba(0,0,0,0)'); vin.addColorStop(1, 'rgba(10,30,0,.3)');
    c.fillStyle = vin; c.fillRect(0, 0, LARG, ALT);
}
const PONTOS_MAPA = [[90, 500], [180, 470], [270, 500], [360, 460], [440, 410], [380, 350], [280, 330], [190, 290], [140, 220], [230, 170], [340, 190], [450, 230], [550, 270], [620, 200], [670, 120]];
function fundoMapa(c) {
    c.fillStyle = vg(c, 0, ALT, '#8fd24c', '#5fa82c'); c.fillRect(0, 0, LARG, ALT);
    const r = semente(7);
    c.beginPath(); for (let i = 0; i < 700; i++) { const x = r() * LARG, y = r() * ALT; c.moveTo(x - 2.5, y); c.lineTo(x - .5, y - 5); c.lineTo(x + 1, y); } traco(c, 1.2, 'rgba(50,110,20,.4)');
    // rio
    c.beginPath(); c.moveTo(760, 330); c.bezierCurveTo(640, 380, 620, 470, 700, 600); c.lineTo(760, 600); c.closePath();
    c.fillStyle = vg(c, 330, 600, '#7fd0ff', '#2f88d8'); c.fill(); traco(c, 3, '#1f5a8a');
    // estrada
    c.beginPath(); PONTOS_MAPA.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
    c.lineWidth = 26; c.strokeStyle = '#8a6430'; c.lineJoin = 'round'; c.lineCap = 'round'; c.stroke();
    c.lineWidth = 20; c.strokeStyle = '#d4ac70'; c.stroke();
    c.setLineDash([6, 10]); c.lineWidth = 2; c.strokeStyle = 'rgba(255,255,255,.5)'; c.stroke(); c.setLineDash([]);
    for (const [x, y, t] of [[40, 380, 'a'], [520, 470, 'p'], [80, 120, 'p'], [460, 120, 'a'], [720, 260, 'p'], [330, 560, 'm'], [100, 580, 'm'], [600, 60, 'p'], [300, 90, 'm']]) {
        c.save(); c.translate(x, y);
        if (t === 'a') arvoreDes(c, 'macieira', true); else if (t === 'p') pinheiroDes(c); else arbustoDes(c);
        c.restore();
    }
    c.save(); c.translate(560, 400); c.scale(.5, .5); armazemDes(c); c.restore();
    c.save(); c.translate(700, 70); c.scale(.5, .5); pocoDes(c, true); c.restore();
    // casinhas e cercas ao longo da estrada (a vila)
    c.save(); c.translate(600, 548);
    sombra(c, 0, 0, 44, 12, .25);
    render3d(c, () => {
        m3cil(38, 40, 5, 12, '#c8c0b0'); m3push(); m3mov(0, 5, 0); m3cil(30, 32, 4, 12, '#ddd6c8'); m3pop();
        for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; m3push(); m3mov(Math.cos(a) * 34, 5, Math.sin(a) * 34); m3cil(2.6, 2.6, 22, 6, '#f0ece2'); m3mov(0, 22, 0); m3caixa(7, 3, 7, '#e0d8c8'); m3pop(); }
    }, CAM_PADRAO);
    c.restore();
    const casas = [[40, 450, 'padaria'], [215, 400, 'laticinio'], [470, 330, 'maionese'], [90, 260, 'salsicharia'], [330, 120, 'pizzaria'], [720, 170, 'atelie']];
    for (const [x, y, t] of casas) { c.save(); c.translate(x, y); c.scale(.42, .42); predioFF(c, PREDIOS[t], t); c.restore(); }
    for (const [x0, y0, x1, y1] of [[20, 470, 120, 476], [380, 520, 520, 510], [600, 300, 700, 330], [180, 100, 260, 112]]) {
        c.beginPath(); c.moveTo(x0, y0 - 6); c.lineTo(x1, y1 - 6); c.moveTo(x0, y0 - 2); c.lineTo(x1, y1 - 2);
        for (let k = 0; k <= 6; k++) { const x = x0 + (x1 - x0) * k / 6, y = y0 + (y1 - y0) * k / 6; c.moveTo(x, y); c.lineTo(x, y - 10); }
        traco(c, 2.4, '#8a5a2b');
    }
    const luzM = c.createLinearGradient(0, 0, LARG, ALT);
    luzM.addColorStop(0, 'rgba(255,250,200,.18)'); luzM.addColorStop(1, 'rgba(0,30,0,.18)');
    c.fillStyle = luzM; c.fillRect(0, 0, LARG, ALT);
    const vin = c.createRadialGradient(380, 300, 250, 380, 300, 520);
    vin.addColorStop(0, 'rgba(0,0,0,0)'); vin.addColorStop(1, 'rgba(10,30,0,.35)');
    c.fillStyle = vin; c.fillRect(0, 0, LARG, ALT);
}

function desenhar() {
    const s = escalaPalco * dpr;
    if (s !== escala) { escala = s; cacheSpr.clear(); }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(s, s);
    ctx.imageSmoothingEnabled = E.qualidade !== 'baixa';
    const tela = palco.dataset.tela;
    if (tela === 'jogo' && J) desenharJogo();
    else if (tela === 'mapa') pintar(spr('mapa', 0, 0, LARG, ALT, fundoMapa), 0, 0);
    else pintar(spr('inicio', 0, 0, LARG, ALT, fundoInicio), 0, 0);
}

// ================= hud =================
function montarHud() {
    $('#animais').innerHTML = J.F.animais.map(t => `<button class="bt-animal" data-comprar="${t}" title="${ANIMAIS[t].nome}${ANIMAIS[t].desc ? ': ' + ANIMAIS[t].desc : ''}">
        <span class="disco">${ic('obj:animal:' + t)}</span><span class="preco">${ic('moeda')}${fmtN(ANIMAIS[t].preco)}</span></button>`).join('');
    $('#v-fase').textContent = nomeFase(J.n);
    $('#bencao').hidden = !J.bencao;
    $('#lista-metas').innerHTML = J.F.infinito
        ? `<div class="meta-inf">${ic('caminhao')}<span>Vendido</span><b id="v-vendido">0</b></div><div class="meta-inf">${ic('estrela')}<span>Estrelas</span><b id="v-est-inf">0</b></div>`
        : J.F.metas.map((m, i) => `<div class="meta" data-meta="${i}">${ic(iconeMeta(m))}<span></span></div>`).join('');
    $('#ic-medalha').hidden = !!J.F.infinito;
    hud();
}
function hud() {
    if (!J) return;
    $('#v-moedas').textContent = fmtN(J.moedas);
    $('#v-agua').textContent = `${J.agua}/${aguaMax()}`;
    for (const b of $$('[data-comprar]')) b.classList.toggle('caro', J.moedas < ANIMAIS[b.dataset.comprar].preco);
    J.F.metas.forEach((m, i) => {
        const el = $(`[data-meta="${i}"]`);
        if (!el) return;
        const p = progressoMeta(m), feita = p.v >= p.q;
        el.querySelector('span').textContent = m.t === 'moedas' ? fmtN(p.q) : `${p.v}/${p.q}`;
        el.classList.toggle('feita', feita);
        const ok = el.querySelector('.ok');
        if (feita && !ok) el.insertAdjacentHTML('beforeend', ic('check', 'class="ok"'));
        if (!feita && ok) ok.remove();
    });
    $('#v-tempo').textContent = fmtT(J.tempo);
    if (J.F.infinito && $('#v-vendido')) { $('#v-vendido').textContent = fmtN(J.vendido); $('#v-est-inf').textContent = estrelasInfinito(); }
    const m = medalhaPorTempo(J.tempo);
    const icm = $('#ic-medalha');
    if (icm.dataset.m !== String(m)) { icm.dataset.m = m; icm.src = iconeURL(NOME_MEDALHA[m]); }
    $('#b-som img').src = iconeURL(E.som ? 'som' : 'semSom');
}
// ---------- dicas de tutorial (balao azul apontando, pausa o jogo) ----------
let dicaAtual = null;
const filaDicas = [];
function dicaTut(id, txt, x, y) {
    if (E.dicas[id] || filaDicas.some(d => d.id === id) || (dicaAtual && dicaAtual.id === id)) return;
    filaDicas.push({ id, txt, x, y });
    if (!dicaAtual) proximaDica();
}
function proximaDica() {
    const el = $('#dica-tut');
    dicaAtual = filaDicas.shift() || null;
    if (!dicaAtual) { el.hidden = true; return; }
    const { txt, x, y } = dicaAtual;
    el.innerHTML = `<div class="bolha">${txt}<small>clique para continuar</small></div>`;
    el.hidden = false;
    const b = el.firstChild, w = 230, h = b.offsetHeight || 80;
    let bx = x === null ? LARG / 2 - w / 2 : x - 34, by;
    let lado = 'baixo';
    if (y === null) by = ALT / 2 - h / 2;
    else if (y - h - 24 > 70) { by = y - h - 22; lado = 'baixo'; }
    else { by = y + 22; lado = 'cima'; }
    let esq = false;
    if (bx + w > LARG - 8) { bx = (x === null ? LARG / 2 : x) - w + 34; esq = true; }
    bx = Math.max(8, bx);
    b.className = 'bolha ' + (y === null ? '' : lado) + (esq ? ' esq' : '');
    b.style.left = bx + 'px'; b.style.top = by + 'px';
    Som.tocar('abrir');
}
$('#dica-tut').addEventListener('pointerdown', e => {
    e.stopPropagation();
    if (!dicaAtual) return;
    E.dicas[dicaAtual.id] = 1; salvar();
    Som.tocar('clique');
    proximaDica();
});
function dicasDoComeco() {
    if (J.n === 0) {
        dicaTut('animais', 'Os animais comem grama e produzem mercadorias.', null, null);
        dicaTut('grama', 'Clique no pasto para plantar grama, senão os animais morrem de fome!', 300, 260);
        dicaTut('comprar', 'Para comprar outra galinha, clique neste botão.', 34, 52);
    }
    J.lotes.forEach((L, i) => { if (L && !L.construido) dicaTut('lote', 'Clique no lote vazio para construir uma fábrica. Ela transforma produtos em coisas mais caras!', LOTES[i].x, LOTES[i].y - 50); });
    if (J.av) dicaTut('aviao', 'O avião traz produtos de outras fazendas. Clique nele para encomendar.', HANGAR.x + 18, HANGAR.y - 40);
}
// dicas que aparecem quando a coisa acontece pela primeira vez
function vigiarDicas() {
    if (!J || dicaAtual) return;
    const p = J.produtos.find(p => p.alt === 0 && p.item !== 'urso');
    if (p) dicaTut('produto', `Isso é ${p.item === 'ovo' ? 'um ovo' : 'um produto'}. Clique para mandar ao depósito.`, p.x, p.y - 20);
    if (J.agua === 0 && !J.enchendo) dicaTut('poco', `O poço secou! Clique nele para buscar mais água (${CUSTO_AGUA} moedas).`, POCO.x, POCO.y - 70);
    const faminto = J.animais.find(a => !ANIMAIS[a.tipo].ajudante && !a.cai && a.fome < .3);
    if (faminto) dicaTut('fome', 'Esse bicho está com fome! A barrinha embaixo dele mostra. Plante grama perto.', faminto.x, faminto.y - 30);
    if (usoArmazem() >= 4 && J.cam.estado === 'garagem') dicaTut('caminhao', 'Clique no caminhão para levar os produtos do depósito e vender na cidade.', GARAGEM.x - 20, GARAGEM.y - 50);
    const urso = J.ursos.find(u => u.estado === 'andando');
    if (urso) dicaTut('urso', 'Um urso! Clique várias vezes nele para prender na gaiola!', urso.x, urso.y - 40);
    const preso = J.ursos.find(u => u.estado === 'jaula');
    if (preso) dicaTut('jaula', 'Clique na gaiola para guardar o urso no depósito. Ele vale dinheiro na cidade!', preso.x, preso.y - 50);
    J.lotes.forEach((L, i) => { if (L && L.construido && L.prog === null && !L.usou) dicaTut('fabrica', 'Clique na fábrica para ela usar os produtos do depósito. A plaquinha azul embaixo melhora a fábrica.', LOTES[i].x, LOTES[i].y - 60); });
}

let tAviso;
function aviso(t, erro) {
    const a = $('#aviso');
    a.textContent = t; a.classList.toggle('erro', !!erro); a.classList.add('mostrar');
    clearTimeout(tAviso); tAviso = setTimeout(() => a.classList.remove('mostrar'), 2600);
}

// ================= janelas =================
const camada = $('#camada');
let janelaAtual = null;
function abrir(op) {
    camada.innerHTML = '';
    camada.classList.add('aberta');
    const j = document.createElement('div');
    j.className = 'jf';
    j.style.width = (op.largura || 480) + 'px';
    j.innerHTML = `<div class="jf-titulo">${op.titulo}</div>${op.semFechar ? '' : '<button class="jf-x" title="Fechar">✕</button>'}<div class="jf-corpo"></div>`;
    camada.appendChild(j);
    const x = j.querySelector('.jf-x');
    if (x) x.onclick = () => { Som.tocar('clique'); fechar(); };
    janelaAtual = { op, corpo: j.querySelector('.jf-corpo') };
    op.render(janelaAtual.corpo);
}
function fechar() {
    if (!janelaAtual) return;
    const op = janelaAtual.op;
    janelaAtual = null;
    camada.classList.remove('aberta'); camada.innerHTML = '';
    if (op.aoFechar) op.aoFechar();
}
function ligar(el, sel, fn) { el.querySelectorAll(sel).forEach(b => b.onclick = e => { Som.tocar('clique'); fn(b, e); }); }

const plural = (nome, q) => q > 1 && !/Maionese|Leite|Jaula/.test(nome) ? nome + 's' : nome;
// pergaminho de metas: "Conseguir" / "Por completar"
function pergaminhoMetas(F, n) {
    const e = ESTRELAS(n);
    return `<div class="pergaminho"><div class="col"><h4>Conseguir</h4>${F.metas.map(m => `<div class="linha-meta">${ic(iconeMeta(m))}<b>${m.t === 'moedas' ? fmtN(m.q) : m.q}</b><span>${m.t === 'item' ? plural(ITENS[m.i].nome, m.q) : m.t === 'animal' ? ANIMAIS[m.a].nome + (m.q > 1 ? 's' : '') : 'moedas'}</span></div>`).join('')}</div>
        <div class="col"><h4>Por completar</h4><div class="linha-meta premio">${ic('estrela')}<b>${e.completar}</b></div>
        <div class="linha-meta premio">${ic('ouro')}<span class="tempo">${fmtT(F.ouro)}</span>${ic('estrela', 'class="mini"')}<b>+${e.ouro}</b></div>
        <div class="linha-meta premio">${ic('prata')}<span class="tempo">${fmtT(F.prata)}</span>${ic('estrela', 'class="mini"')}<b>+${e.prata}</b></div></div></div>`;
}
const estrelasInfinito = () => Math.min(INFINITO.maxEstrelas, Math.floor((J.vendido || 0) / INFINITO.moedasPorEstrela));
function abrirBriefing() {
    const F = J.F;
    if (F.infinito) return abrir({
        titulo: 'Fazenda Infinita', largura: 480, semFechar: true, render: el => {
            el.innerHTML = `<div class="msg">${ic('caminhao')}<div>Aqui não tem meta nem relógio: todas as fábricas e bichos liberados.<br>
                Venda o máximo que puder no caminhão. A cada <b>${fmtN(INFINITO.moedasPorEstrela)} moedas vendidas</b> você ganha <b>1 estrela</b> (até ${INFINITO.maxEstrelas} por partida).<br>
                Quando cansar, abra o Menu e clique em <b>Encerrar e pegar estrelas</b>.<br><small>Seu recorde: ${fmtN(E.recordeInfinito || 0)} moedas vendidas</small></div></div>
                <div class="botoes"><button class="bt-azul" data-ir>Começar!</button></div>`;
            ligar(el, '[data-ir]', () => { fechar(); J.comecou = true; dicasDoComeco(); });
        },
    });
    abrir({
        titulo: 'Metas', largura: 500, semFechar: true, render: el => {
            el.innerHTML = `<p class="centro" style="margin:-6px 0 8px;font:bold 15px 'Trebuchet MS'">${F.extra ? F.nome : nomeFase(J.n)}</p>${pergaminhoMetas(F, J.n)}
                ${J.bencao ? `<p class="centro bencao-txt">${ic('obj:animal:cavalo')} O cavalo giratório abençoou esta fase! Bichos e fábricas mais rápidos e +${BENCAO.moedas} moedas.</p>` : ''}
                <div class="botoes"><button class="bt-azul" data-ir>OK</button></div>`;
            ligar(el, '[data-ir]', () => { fechar(); J.comecou = true; dicasDoComeco(); });
        },
    });
}
function abrirPausa() {
    abrir({
        titulo: 'Pausa', largura: 430, render: function render(el) {
            const inf = J.F.infinito;
            const metas = inf ? `${fmtN(J.vendido || 0)} vendidas` : J.F.metas.map(m => { const pr = progressoMeta(m); return `<span class="${pr.v >= pr.q ? 'ok' : ''}">${ic(iconeMeta(m))}${m.t === 'moedas' ? fmtN(pr.v) : `${pr.v}/${pr.q}`}</span>`; }).join('');
            el.innerHTML = `<div class="pausa">
                <div class="pausa-status"><b>${nomeFase(J.n)}</b><span>${ic('relogio')}${fmtT(J.tempo)}</span><span>${ic('moeda')}${fmtN(J.moedas)}</span></div>
                <div class="pausa-metas">${metas}</div>
                <button class="bt-azul verde grande pausa-continuar" data-c>Continuar</button>
                <div class="pausa-grade">
                    ${inf ? `<button class="pausa-bt" data-enc>${ic('estrela')}<span>Encerrar e pegar ${estrelasInfinito()}★</span></button>`
                    : `<button class="pausa-bt" data-metas>${ic('estrela')}<span>Ver metas</span></button><button class="pausa-bt" data-r>${ic('relogio')}<span>Recomeçar fase</span></button>`}
                    <button class="pausa-bt" data-sm>${ic('obj:predio:padaria')}<span>Salvar e ir pro mapa</span></button>
                    <button class="pausa-bt" data-aj>${ic('interrogacao')}<span>Como jogar</span></button>
                </div>
                <div class="pausa-ajustes">
                    <button class="pausa-toggle ${E.som ? 'on' : ''}" data-tsom title="Efeitos sonoros">${ic(E.som ? 'som' : 'semSom')}</button>
                    <button class="pausa-toggle ${E.musica ? 'on' : ''}" data-tmus title="Música">${ic(E.musica ? 'musica' : 'semMusica')}</button>
                    <div class="pausa-qualidade" title="Qualidade dos gráficos">${['alta', 'media', 'baixa'].map(q => `<button class="${E.qualidade === q ? 'on' : ''}" data-tq="${q}">${{ alta: 'Alta', media: 'Média', baixa: 'Baixa' }[q]}</button>`).join('')}</div>
                    <button class="pausa-toggle" data-tela title="Tela cheia">${ic('telaCheia')}</button>
                </div>
                <div class="pausa-rodape">
                    <button class="bt-azul peq" data-sf>Salvar e fechar o jogo</button>
                    <button class="bt-azul vermelho peq" data-m>Sair sem salvar</button>
                </div></div>`;
            // recomecar ou sair sem salvar devolve a bencao do cavalo
            const devolverBencao = () => { if (J.bencao) { E.bencao = (E.bencao || 0) + 1; salvar(); } };
            ligar(el, '[data-c]', fechar);
            ligar(el, '[data-r]', () => { if (E.salvo && E.salvo.n === J.n) delete E.salvo; devolverBencao(); salvar(); fechar(); iniciarFase(J.n); });
            ligar(el, '[data-m]', b => {
                // perde o progresso: pede confirmacao no proprio botao
                if (!b.dataset.certeza) { b.dataset.certeza = '1'; b.textContent = 'Perder o progresso? Clique de novo'; return; }
                devolverBencao(); fechar(); irMapa();
            });
            ligar(el, '[data-enc]', () => encerrarInfinito());
            ligar(el, '[data-sm]', () => { salvarFase(); fechar(); irMapa(); aviso('Jogo salvo! Clique na fase pra continuar.'); });
            ligar(el, '[data-sf]', () => { salvarFase(); fechar(); aviso('Jogo salvo!'); setTimeout(fecharJogo, 500); });
            ligar(el, '[data-aj]', abrirAjuda);
            ligar(el, '[data-metas]', () => abrir({ titulo: 'Metas', largura: 500, render: e2 => { e2.innerHTML = pergaminhoMetas(J.F, J.n) + '<div class="botoes"><button class="bt-azul verde" data-c>Voltar ao jogo</button></div>'; ligar(e2, '[data-c]', fechar); } }));
            ligar(el, '[data-tsom]', () => { E.som = !E.som; Som.ajustar(); salvar(); hud(); render(el); });
            ligar(el, '[data-tmus]', () => { E.musica = !E.musica; Som.ajustar(); salvar(); render(el); });
            ligar(el, '[data-tq]', b => { E.qualidade = b.dataset.tq; salvar(); ajustar(); render(el); });
            ligar(el, '[data-tela]', telaCheia);
        },
    });
}
function opcoesHTML() {
    return `<label><input type="checkbox" data-som ${E.som ? 'checked' : ''}> Efeitos sonoros</label>
        <label><input type="checkbox" data-mus ${E.musica ? 'checked' : ''}> Música</label>
        <label>Qualidade: <select data-q><option value="alta">Alta</option><option value="media">Média</option><option value="baixa">Baixa</option></select></label>
        <label><button type="button" class="bt-azul peq" data-telacheia>Tela cheia</button> <small>no celular fica deitado</small></label>`;
}
function telaCheia() {
    const doc = document.documentElement;
    if (document.fullscreenElement) { document.exitFullscreen?.(); return; }
    const p = doc.requestFullscreen ? doc.requestFullscreen() : null;
    if (!p) { aviso('Seu navegador não deixa tela cheia aqui.', true); return; }
    p.then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => aviso('Não deu pra abrir em tela cheia.', true));
}
function ligarOpcoes(el) {
    el.querySelector('[data-q]').value = E.qualidade;
    el.querySelector('[data-som]').onchange = e => { E.som = e.target.checked; Som.ajustar(); salvar(); hud(); };
    el.querySelector('[data-mus]').onchange = e => { E.musica = e.target.checked; Som.ajustar(); salvar(); };
    el.querySelector('[data-q]').onchange = e => { E.qualidade = e.target.value; salvar(); ajustar(); };
    const tc = el.querySelector('[data-telacheia]');
    if (tc) tc.onclick = telaCheia;
}
function popupVitoria(m, premio) {
    const prox = J.n + 1 < FASES.length && !FASES[J.n + 1].extra && !J.F.extra, recorde = m === 3;
    // primeiro o trofeu, depois a tabela de pontos (como no jogo antigo)
    abrir({
        titulo: 'Parabéns!', largura: 420, semFechar: true, render: el => {
            el.innerHTML = `<div class="trofeu">${ic('taca')}<div class="pedestal">${nomeFase(J.n).toUpperCase()}</div></div>
                <p class="centro" style="font-size:16px;margin:8px 0 0"><b>Parabéns!</b> Você completou a fase${recorde ? ' em <b>tempo recorde</b>' : ''}!</p>
                <div class="botoes"><button class="bt-azul" data-ok>OK</button></div>`;
            ligar(el, '[data-ok]', () => abrir({
                titulo: 'Pontos na Fase', largura: 500, semFechar: true, render: e2 => {
                    e2.innerHTML = `<div class="pontos"><div class="tabela">
                        <div>${ic('moeda')}<span>Moedas:</span><b>${fmtN(J.moedas)}</b></div>
                        <div>${ic('relogio')}<span>Tempo:</span><b>${fmtT(J.tempo)}</b></div>
                        <div>${ic('estrela')}<span>Bônus:</span><b>${fmtN(premio)}</b></div>
                        <div>${ic('loja')}<span>Banco:</span><b>${fmtN(E.estrelas)}</b></div></div>
                        <div class="taca-grande"><img class="medalha-grande" src="${iconeURL(NOME_MEDALHA[m])}" alt=""><b>${NOME_MEDALHA[m].toUpperCase()}</b></div></div>
                        ${J.F.extra ? '<p class="centro" style="margin:8px 0 0">O cavalo giratório agradece! Volte amanhã pra missão de novo.</p>' : premio ? '' : '<p class="centro" style="margin:8px 0 0">Faça mais rápido para ganhar mais estrelas!</p>'}
                        <div class="botoes"><button class="bt-azul" data-m>Mapa</button><button class="bt-azul amarelo" data-l>${ic('loja')}Loja</button>${prox ? '<button class="bt-azul verde" data-p>Próxima fase</button>' : ''}</div>`;
                    ligar(e2, '[data-m]', () => { fechar(); irMapa(); });
                    ligar(e2, '[data-l]', () => { fechar(); irMapa(); abrirLoja(); });
                    if (prox) ligar(e2, '[data-p]', () => { fechar(); iniciarFase(J.n + 1); });
                },
            }));
        },
    });
}

// caminhao: carregar produtos do armazem e mandar vender
const valorCarga = carga => Object.entries(carga).reduce((s, [k, q]) => s + q * ITENS[k].venda, 0);
function itensHTML(obj, attr, preco) {
    const e = Object.entries(obj).filter(([, q]) => q > 0);
    if (!e.length) return '<div style="margin:auto;color:#8a6a3a">vazio</div>';
    return e.map(([k, q]) => `<button class="it" ${attr}="${k}" title="${ITENS[k].nome}">${ic(k)}<b>${q}</b>${ITENS[k].nome}<small>${ic('moeda', 'style="width:10px;height:10px;display:inline"')} ${fmtN(preco(k))}</small></button>`).join('');
}
function abrirCaminhao() {
    const c = J.cam;
    if (c.estado !== 'garagem') { aviso('O caminhão está na cidade. Espere ele voltar!'); return; }
    Som.tocar('abrir');
    abrir({ titulo: 'Caminhão', largura: 620, render: renderCaminhao });
}
function carregar(k, todos) {
    const c = J.cam, cap = capCaminhao(), t = ITENS[k].tam;
    let n = 0;
    while ((J.armazem[k] || 0) > 0 && tamDe(c.carga) + t <= cap && (todos || n < 1)) { tirar(J.armazem, k, 1); c.carga[k] = (c.carga[k] || 0) + 1; n++; }
    if (!n) { aviso('Não cabe mais nada no caminhão!', true); Som.tocar('erro'); }
}
function renderCaminhao(el) {
    const c = J.cam, cap = capCaminhao(), uso = tamDe(c.carga), valor = valorCarga(c.carga);
    el.innerHTML = `<div class="carga-cols"><div><h3>No depósito</h3><div class="itens">${itensHTML(J.armazem, 'data-a', k => ITENS[k].venda)}</div></div>
        <div><h3>No caminhão</h3><div class="itens">${itensHTML(c.carga, 'data-c', k => ITENS[k].venda)}</div>
        <div class="capbar ${uso >= cap ? 'cheio' : ''}"><i style="width:${uso / cap * 100}%"></i></div>
        <div class="resumo"><span>Espaço: ${uso}/${cap}</span><span>Vale: ${ic('moeda')} ${fmtN(valor)}</span></div></div></div>
        <p class="centro" style="margin:8px 0 0;font-size:11px">Clique num produto para carregar (Shift+clique leva todos). Clique no que está no caminhão para devolver.</p>
        <div class="botoes"><button class="bt-azul" data-tudo>Carregar tudo</button><button class="bt-azul verde" data-ir ${uso ? '' : 'disabled'}>${ic('caminhao')}Vender!</button><button class="bt-azul amarelo" data-ok>Fechar</button></div>`;
    ligar(el, '[data-a]', (b, e) => { carregar(b.dataset.a, e.shiftKey); renderCaminhao(el); });
    ligar(el, '[data-c]', b => {
        const k = b.dataset.c;
        if (livreArmazem() < ITENS[k].tam) { aviso('Não cabe de volta no depósito!', true); return; }
        tirar(c.carga, k, 1); J.armazem[k] = (J.armazem[k] || 0) + 1; renderCaminhao(el);
    });
    ligar(el, '[data-tudo]', () => {
        const ordem = Object.keys(J.armazem).sort((p, q) => ITENS[q].venda / ITENS[q].tam - ITENS[p].venda / ITENS[p].tam);
        for (const k of ordem) { while ((J.armazem[k] || 0) > 0 && tamDe(c.carga) + ITENS[k].tam <= cap) { tirar(J.armazem, k, 1); c.carga[k] = (c.carga[k] || 0) + 1; } }
        renderCaminhao(el);
    });
    ligar(el, '[data-ok]', fechar);
    ligar(el, '[data-ir]', () => { fechar(); c.estado = 'indo'; c.t = 0; Som.tocar('caminhao'); hud(); });
}
// aviao: encomendar produtos de fora
const precoImporta = k => Math.round(IMPORTA[k] * nivelUpg('aviao').desc);
function abrirAviao() {
    const av = J.av;
    if (av.estado !== 'hangar') { aviso('O avião está voando. Espere ele voltar!'); return; }
    Som.tocar('abrir');
    abrir({ titulo: 'Avião', largura: 600, render: renderAviao });
}
function renderAviao(el) {
    const av = J.av, total = Object.entries(av.pedido).reduce((s, [k, q]) => s + q * precoImporta(k), 0), n = Object.values(av.pedido).reduce((a, b) => a + b, 0);
    const catalogo = {};
    for (const k of Object.keys(IMPORTA)) if (J.F.animais.some(a => ANIMAIS[a].item === k)) catalogo[k] = '∞';
    el.innerHTML = `<div class="carga-cols"><div><h3>Comprar de fora</h3><div class="itens">${Object.keys(catalogo).map(k => `<button class="it" data-a="${k}">${ic(k)}${ITENS[k].nome}<small>${ic('moeda', 'style="width:10px;height:10px;display:inline"')} ${fmtN(precoImporta(k))}</small></button>`).join('')}</div></div>
        <div><h3>Encomenda (${n}/10)</h3><div class="itens">${itensHTML(av.pedido, 'data-c', precoImporta)}</div>
        <div class="resumo" style="margin-top:8px"><span>Total:</span><span>${ic('moeda')} ${fmtN(total)}</span></div></div></div>
        <p class="centro" style="margin:8px 0 0;font-size:11px">Os produtos chegam em ${nivelUpg('aviao').tempo}s e caem no chão perto do hangar.</p>
        <div class="botoes"><button class="bt-azul verde" data-ir ${n ? '' : 'disabled'}>${ic('aviao')}Encomendar</button><button class="bt-azul amarelo" data-ok>Fechar</button></div>`;
    ligar(el, '[data-a]', b => { if (n >= 10) return aviso('O avião só leva 10 produtos!', true); av.pedido[b.dataset.a] = (av.pedido[b.dataset.a] || 0) + 1; renderAviao(el); });
    ligar(el, '[data-c]', b => { tirar(av.pedido, b.dataset.c, 1); renderAviao(el); });
    ligar(el, '[data-ok]', () => { av.pedido = {}; fechar(); });
    ligar(el, '[data-ir]', () => {
        if (J.moedas < total) return semMoedas();
        gastar(total, HANGAR.x, HANGAR.y - 60);
        fechar(); av.estado = 'indo'; av.t = 0; Som.tocar('aviao');
    });
}

// loja de melhorias (entre as fases)
function abrirLoja() {
    Som.tocar('abrir');
    abrir({ titulo: 'Loja', largura: 600, render: renderLoja });
}
function renderLoja(el) {
    el.innerHTML = `<p class="centro" style="margin:-4px 0 10px">Melhore sua fazenda com as estrelas que você ganhou nas fases!</p>
        <div class="loja-grade">${Object.entries(MELHORIAS).map(([k, M]) => {
        const nv = E.upg[k], prox = M.niveis[nv + 1];
        return `<div class="item-loja" title="${M.txt(M.niveis[nv])}${prox ? ' → ' + M.txt(prox) : ''}"><div class="nome">${M.nome}</div>
            <div class="quadro">${ic(M.icone)}<div class="niveis">${M.niveis.slice(1).map((_, i) => `<i class="${i < nv ? 'on' : ''}"></i>`).join('')}</div></div>
            <small>${prox ? M.txt(prox) : 'Nível máximo!'}</small>
            ${prox ? `<button class="preco-estrela" data-u="${k}" ${E.estrelas >= prox.custo ? '' : 'disabled'}>${fmtN(prox.custo)} ${ic('estrela')}</button>` : '<span class="preco-estrela max">MAX</span>'}</div>`;
    }).join('')}<div class="banco-estrelas">${ic('estrela')}<b>${fmtN(E.estrelas)}</b></div></div>
        <div class="botoes"><button class="bt-azul" data-ok>OK</button></div>`;
    ligar(el, '[data-u]', b => {
        const k = b.dataset.u, prox = MELHORIAS[k].niveis[E.upg[k] + 1];
        if (!prox || E.estrelas < prox.custo) return;
        E.estrelas -= prox.custo; E.upg[k]++; salvar();
        Som.tocar('nivel'); renderLoja(el); atualizarMapa();
    });
    ligar(el, '[data-ok]', fechar);
}
function abrirAjuda() {
    abrir({
        titulo: 'Como Jogar', largura: 580, render: el => {
            el.innerHTML = `<div class="ajuda">
                <h3>${ic('grama')} Grama e poço</h3><p>Clique no pasto para plantar grama. Cada clique gasta 1 balde de água. Quando o poço secar, clique nele para encher (custa ${CUSTO_AGUA} moedas).</p>
                <h3>${ic('obj:animal:galinha')} Bichos</h3><p>Compre bichos nos botões lá em cima. Eles comem a grama e produzem coisas. Bicho sem comer não produz e, se ficar muito tempo com fome, morre!</p>
                <h3>${ic('ovo')} Produtos</h3><p>Clique nos produtos que caem no chão para guardar no depósito. Se demorar, eles somem!</p>
                <h3>${ic('obj:predio:padaria')} Fábricas</h3><p>Construa nos lotes vazios. Clique na fábrica para ela usar produtos do depósito e fazer coisas mais caras. A plaquinha embaixo melhora a fábrica.</p>
                <h3>${ic('caminhao')} Caminhão e avião</h3><p>Clique no depósito ou no caminhão para carregar e mandar vender na cidade. O avião compra produtos de fora.</p>
                <h3>${ic('urso')} Ursos</h3><p>Clique várias vezes no urso até fechar a jaula. Urso preso vale dinheiro no caminhão! O cachorro prende ursos e o gato pega produtos sozinho.</p>
                <h3>${ic('ouro')} Medalhas</h3><p>Cumpra as metas para passar de fase. Quanto mais rápido, melhor a medalha e mais estrelas para a Loja.</p>
                </div><div class="botoes"><button class="bt-azul amarelo" data-ok>Entendi!</button></div>`;
            ligar(el, '[data-ok]', fechar);
        },
    });
}
function encerrarInfinito() {
    const ganhou = estrelasInfinito(), vendido = J.vendido || 0, recorde = vendido > (E.recordeInfinito || 0);
    E.estrelas += ganhou;
    if (recorde) E.recordeInfinito = vendido;
    if (E.salvo && E.salvo.n === J.n) delete E.salvo;
    J.ganhou = true;
    salvar();
    Som.tocar('vitoria');
    abrir({
        titulo: 'Fazenda Infinita', largura: 440, semFechar: true, render: el => {
            el.innerHTML = `<div class="trofeu">${ic('taca')}<div class="pedestal">${recorde ? 'NOVO RECORDE!' : 'FIM DO DIA'}</div></div>
                <p class="centro" style="font-size:15px;margin:8px 0 0">Você vendeu <b>${fmtN(vendido)} moedas</b> em ${fmtT(J.tempo)}.<br>Ganhou <b>${ganhou} estrelas</b> pra Loja!</p>
                <p class="centro" style="margin:4px 0 0"><small>Recorde: ${fmtN(E.recordeInfinito || 0)} moedas</small></p>
                <div class="botoes"><button class="bt-azul" data-m>Mapa</button><button class="bt-azul amarelo" data-l>${ic('loja')}Loja</button></div>`;
            ligar(el, '[data-m]', () => { fechar(); irMapa(); });
            ligar(el, '[data-l]', () => { fechar(); irMapa(); abrirLoja(); });
        },
    });
}
function jogarInfinito() {
    if (!faseLiberada(FASE_INF)) { Som.tocar('erro'); aviso(`A Fazenda Infinita libera depois da fase ${INFINITO.liberaApos + 1}!`, true); return; }
    if (E.salvo && E.salvo.n === FASE_INF) return perguntarSalvo(FASE_INF);
    iniciarFase(FASE_INF);
}
// ---------- culto do cavalo giratorio ----------
function semanaCulto() {
    const d = new Date(), dia = d.getDay();
    if (dia !== 6 && dia !== 0) return null;
    const sab = new Date(d); sab.setDate(d.getDate() - (dia === 0 ? 1 : 0));
    return sab.toDateString();
}
const presenteDisponivel = () => { const s = semanaCulto(); return !!s && E.cultoSemana !== s; };
// qual presente o cavalo da no fim de semana (gira na ordem dos posts)
function presenteDaSemana() {
    const sab = semanaCulto() ? new Date(semanaCulto()) : new Date();
    if (!semanaCulto()) sab.setDate(sab.getDate() + diasAteSabado());
    sab.setHours(0, 0, 0, 0);
    const semanas = Math.round((sab - PRIMEIRO_SABADO_CULTO) / (7 * 864e5));
    return PRESENTES_CULTO[((semanas % PRESENTES_CULTO.length) + PRESENTES_CULTO.length) % PRESENTES_CULTO.length];
}
const iconesPresente = (pr, extra = '') => pr.icones.map(i => ic(i, extra)).join('');
function diasAteSabado() { const dia = new Date().getDay(); const n = (6 - dia + 7) % 7; return n === 0 ? 7 : n; }
function cavaloGirando(el) {
    const cvh = el.querySelector('.cavalo-gira'), g = cvh.getContext('2d');
    let k = 0;
    const quadro = () => {
        if (!cvh.isConnected) return clearInterval(t);
        g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, cvh.width, cvh.height);
        g.setTransform(cvh.width / 110, 0, 0, cvh.width / 110, 0, 0); g.translate(55, 88);
        ANIMAL_DES.cavalo(g, 0, false, k % 16); k++;
    };
    const t = setInterval(quadro, 70);
    quadro();
}
const missaoDisponivel = () => E.missaoDia !== new Date().toDateString();
function tempoAteAmanha() {
    const agora = new Date(), meia = new Date(agora); meia.setHours(24, 0, 0, 0);
    const min = Math.ceil((meia - agora) / 60000);
    return min >= 60 ? `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}` : `${min} min`;
}
function abrirCulto() {
    Som.tocar('abrir');
    abrir({ titulo: 'Culto do Cavalo Giratório', largura: 580, render: renderCulto });
}
function renderCulto(el) {
    const m = E.medalhas[FASE_EXTRA], dias = diasAteSabado();
    const pr = presenteDaSemana();
    el.innerHTML = `<div class="culto"><canvas class="cavalo-gira" width="300" height="270"></canvas>
        <div><p><b>— EXPLICANDO COMO FUNCIONA O CULTO DO CAVALO GIRATÓRIO!!!</b></p><p>${TEXTO_CULTO}</p><p><b>São todos bem vindos!!</b></p><p class="credito-culto">Culto do Cavalo Giratório criado por <b>Nicolas Jorel</b></p></div></div>
        <div class="culto-caixas">
            <div class="culto-caixa"><div class="presente-icones">${presenteDisponivel() ? iconesPresente(pr) : ic('interrogacao')}</div><b>Presente semanal</b>
                ${presenteDisponivel() ? `<small>Hoje é fim de semana! O cavalo giratório trouxe <b>${pr.nome}</b>: ${pr.estrelas} estrelas + bênção por ${pr.fases} fases.</small><button class="bt-azul verde" data-agradecer>Obrigado, cavalo giratório!</button>`
            : `<small>Você já agradeceu ${semanaCulto() ? 'neste fim de semana' : 'esta semana'}. O próximo presente chega ${dias === 1 ? 'amanhã (sábado)' : `no sábado (falta${dias > 1 ? 'm' : ''} ${dias} dias)`}.</small>`}</div>
            <div class="culto-caixa">${ic('obj:animal:cavalo')}<b>Missão extra ${m ? ic(NOME_MEDALHA[m], 'class="mini"') : ''}</b>
                <small>O cavalo giratório gira no pasto e solta cestas de maçãs. Uma vez por dia, até ${estrelasDa(3, FASE_EXTRA)} estrelas!</small>
                ${missaoDisponivel() ? '<button class="bt-azul" data-missao>Jogar missão de hoje</button>' : `<button class="bt-azul" disabled>Feita! Volte em ${tempoAteAmanha()}</button>`}</div>
        </div>
        <div class="colecao-presentes"><b>Presentes que o cavalo já deu:</b>${PRESENTES_CULTO.map(x => `<span class="${(E.presentes || {})[x.id] ? '' : 'sem'}" title="${x.nome}${(E.presentes || {})[x.id] ? ` (${E.presentes[x.id]}x)` : ' (ainda não)'}">${iconesPresente(x)}${(E.presentes || {})[x.id] > 1 ? `<i>${E.presentes[x.id]}x</i>` : ''}</span>`).join('')}</div>
        ${E.bencao ? `<p class="centro bencao-txt">${ic('obj:animal:cavalo')} Bênção ativa nas próximas <b>${E.bencao}</b> fase${E.bencao > 1 ? 's' : ''}: bichos ${Math.round((1 / BENCAO.animais - 1) * 100)}% mais rápidos, fábricas ${Math.round((1 / BENCAO.fabricas - 1) * 100)}% mais rápidas e +${BENCAO.moedas} moedas no começo.</p>` : ''}`;
    cavaloGirando(el);
    ligar(el, '[data-missao]', () => {
        if (!missaoDisponivel()) return aviso('Você já fez a missão do cavalo hoje. Volte amanhã!', true);
        if (E.salvo && E.salvo.n === FASE_EXTRA) return perguntarSalvo(FASE_EXTRA);
        fechar(); iniciarFase(FASE_EXTRA);
    });
    const ag = el.querySelector('[data-agradecer]');
    if (ag) ag.onclick = () => {
        if (!presenteDisponivel()) return;
        const pr = presenteDaSemana();
        E.cultoSemana = semanaCulto();
        E.estrelas += pr.estrelas;
        E.bencao = (E.bencao || 0) + pr.fases;
        E.presentes = E.presentes || {};
        E.presentes[pr.id] = (E.presentes[pr.id] || 0) + 1;
        salvar();
        Som.tocar('vitoria');
        atualizarMapa();
        const sabado = new Date().getDay() === 6;
        abrir({
            titulo: 'Presente Semanal', largura: 440, semFechar: true, render: e2 => {
                e2.innerHTML = `<p class="centro" style="font-size:15px;margin:0"><b>${sabado ? 'UM ÓTIMO SÁBADO' : 'UM ÓTIMO FIM DE SEMANA'} MINHA GENTE!</b> Obrigado cavalo giratório por ter criado o fim de semana.</p>
                    <p class="centro" style="margin:10px 0 0"><b>${pr.frase}</b></p>
                    <div class="presente-grande">${iconesPresente(pr, 'class="medalha-grande"')}</div>
                    <p class="centro" style="margin:0"><b>${pr.nome}</b><br>+${pr.estrelas} ${ic('estrela', 'style="width:18px;vertical-align:middle"')} e a <b>Bênção do Cavalo</b> nas próximas ${pr.fases} fases!</p>
                    <div class="botoes"><button class="bt-azul verde" data-ok>Amém, cavalo!</button></div>`;
                ligar(e2, '[data-ok]', () => abrir({ titulo: 'Culto do Cavalo Giratório', largura: 580, render: renderCulto }));
            },
        });
    };
}
function abrirPremios() {
    Som.tocar('abrir');
    const cont = m => Object.values(E.medalhas).filter(v => v === m).length;
    abrir({
        titulo: 'Prêmios', largura: 560, render: el => {
            el.innerHTML = `<div class="premios-topo">${['ouro', 'prata', 'bronze'].map((n, i) => `<div>${ic(n)}<b>${cont(3 - i)}</b></div>`).join('')}<div>${ic('estrela')}<b>${fmtN(E.estrelas)}</b></div><div title="Recorde da Fazenda Infinita">${ic('caminhao')}<b>${fmtN(E.recordeInfinito || 0)}</b></div></div>
                <div class="grade-premios">${FASES.filter(faseNormal).map((_, i) => { const m = E.medalhas[i]; return `<div class="${m ? '' : 'sem'}"><span>Fase ${i + 1}</span>${m ? ic(NOME_MEDALHA[m]) : ic(faseLiberada(i) ? 'taca' : 'cadeado')}</div>`; }).join('')}</div>
                <div class="botoes"><button class="bt-azul" data-ok>OK</button></div>`;
            ligar(el, '[data-ok]', fechar);
        },
    });
}
function abrirCreditos() {
    Som.tocar('abrir');
    abrir({
        titulo: 'Créditos', largura: 420, render: el => {
            el.innerHTML = `<div class="msg">${ic('mascote')}<div><b>Fazenda do Lucas</b><br>Ideia e galinhas: Lucas<br>Feito em: <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b><br><small>gráficos 3D num motorzinho próprio em canvas e música pela Web Audio API</small><br>Culto do Cavalo Giratório: criado por <b>Nicolas Jorel</b><br><small>Inspirado nos jogos de fazenda que a gente jogava no computador da lan house.</small></div></div>
                <div class="botoes"><button class="bt-azul" data-ok>Voltar</button></div>`;
            ligar(el, '[data-ok]', fechar);
        },
    });
}
function abrirOpcoes() {
    abrir({
        titulo: 'Opções', largura: 360, render: el => {
            el.innerHTML = `<div class="opcoes">${opcoesHTML()}</div>
                <div class="botoes"><button class="bt-azul vermelho peq" data-reset>Apagar progresso</button><button class="bt-azul amarelo" data-ok>Pronto</button></div>`;
            ligarOpcoes(el);
            ligar(el, '[data-ok]', fechar);
            ligar(el, '[data-reset]', b => {
                if (b.dataset.certeza) {
                    E.medalhas = {}; E.estrelas = 0; E.upg = upgZerado(); E.dicas = {};
                    salvar(); fechar(); aviso('Progresso apagado.');
                } else { b.dataset.certeza = '1'; b.textContent = 'Tem certeza? Clique de novo'; }
            });
        },
    });
}

// ================= telas =================
function trocarTela(t) { palco.dataset.tela = t; }
function irMapa() { filaDicas.length = 0; dicaAtual = null; $('#dica-tut').hidden = true; J = null; trocarTela('mapa'); atualizarMapa(); }
function atualizarMapa() {
    $('#v-cofre').textContent = fmtN(E.estrelas);
    $('#selo-culto').hidden = !presenteDisponivel() && !missaoDisponivel();
    const atual = FASES.findIndex((_, i) => !E.medalhas[i]);
    $('#pontos-fase').innerHTML = PONTOS_MAPA.map(([x, y], i) => {
        const lib = faseLiberada(i), m = E.medalhas[i];
        return `<button class="ponto-fase ${lib ? '' : 'trancada'} ${i === atual && lib ? 'atual' : ''}" data-fase="${i}" style="left:${x}px;top:${y}px" title="Fase ${i + 1}">
            ${lib ? `<b>${i + 1}</b>` : ic('cadeado', 'class="cad"')}${m ? ic(NOME_MEDALHA[m]) : ''}${E.salvo && E.salvo.n === i ? ic('relogio', 'class="salvo" title="Jogo salvo aqui"') : ''}</button>`;
    }).join('');
}

// ================= carregando =================
function telaCarregando() {
    $('#carga-dica').textContent = DICAS[ri(0, DICAS.length - 1)];
    let p = 0;
    const passo = () => {
        p = Math.min(100, p + rnd(4, 13));
        if (!$('#carga-encher')) return;
        $('#carga-encher').style.width = p + '%';
        $('#carga-txt').textContent = `Carregando... ${Math.floor(p)}%`;
        if (p < 100) setTimeout(passo, rnd(60, 160));
        else { $('#carga-txt').textContent = 'Pronto!'; $('#b-jogar').hidden = false; }
    };
    passo();
    $('#b-jogar').onclick = () => {
        Som.iniciar(); Som.tocar('nivel');
        $('#carregando').classList.add('sumir');
        trocarTela('inicio'); atualizarContinuar();
        setTimeout(() => $('#carregando').remove(), 600);
    };
}

// ================= eventos =================
// em celular ou tablet na vertical o palco gira 90 graus pra ocupar a tela deitado (como jogo de celular)
let deitado = false, origemPalco = { x: 0, y: 0 };
function ajustar() {
    const w = innerWidth, h = innerHeight;
    const toque = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    // so em aparelho de toque: no computador uma janela estreita nao deve girar o jogo
    deitado = toque && h > w * 1.1;
    if (deitado) {
        escalaPalco = Math.min(w / ALT, h / LARG);
        origemPalco = { x: Math.round((w + ALT * escalaPalco) / 2), y: Math.round((h - LARG * escalaPalco) / 2) };
        palco.style.transform = `rotate(90deg) scale(${escalaPalco})`;
    } else {
        escalaPalco = Math.min(w / LARG, h / ALT);
        origemPalco = { x: Math.round((w - LARG * escalaPalco) / 2), y: Math.round((h - ALT * escalaPalco) / 2) };
        palco.style.transform = `scale(${escalaPalco})`;
    }
    palco.style.left = origemPalco.x + 'px';
    palco.style.top = origemPalco.y + 'px';
    document.body.classList.toggle('deitado', deitado);
    const q = E.qualidade;
    dpr = q === 'alta' ? Math.min(2, devicePixelRatio || 1) : q === 'media' ? 1 : .5;
    dpr = Math.min(dpr, 2200 / (LARG * escalaPalco));
    cv.width = Math.round(LARG * escalaPalco * dpr);
    cv.height = Math.round(ALT * escalaPalco * dpr);
    palco.classList.toggle('baixa', q === 'baixa');
}
function ptPalco(e) {
    const dx = e.clientX - origemPalco.x, dy = e.clientY - origemPalco.y;
    // girado 90 graus: o x do jogo corre pra baixo da tela e o y corre pra esquerda
    if (deitado) return { x: dy / escalaPalco, y: -dx / escalaPalco };
    return { x: dx / escalaPalco, y: dy / escalaPalco };
}
cv.addEventListener('pointerdown', e => {
    Som.iniciar();
    const p = ptPalco(e);
    mouse = p;
    if (palco.dataset.tela === 'jogo') clique(p.x, p.y);
});
cv.addEventListener('pointermove', e => {
    mouse = ptPalco(e);
    if (palco.dataset.tela !== 'jogo' || !J) return;
    const a = alvoEm(mouse.x, mouse.y);
    cv.style.cursor = a && a.t !== 'pasto' ? 'pointer' : 'default';
});
cv.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b || b.closest('#camada')) return;
    Som.iniciar();
    const acao = b.dataset.acao;
    if (b.dataset.comprar) { if (J && J.comecou && !J.ganhou && !janelaAtual) comprarAnimal(b.dataset.comprar); return; }
    if (b.dataset.fase !== undefined) {
        const n = +b.dataset.fase;
        Som.tocar('clique');
        if (!faseLiberada(n)) { aviso('Termine a fase anterior primeiro!', true); return; }
        if (E.salvo && E.salvo.n === n) { perguntarSalvo(n); return; }
        iniciarFase(n);
        return;
    }
    if (!acao) return;
    Som.tocar('clique');
    if (acao === 'jogar') irMapa();
    else if (acao === 'continuar') continuarFase();
    else if (acao === 'ajuda') abrirAjuda();
    else if (acao === 'opcoes') abrirOpcoes();
    else if (acao === 'premios') abrirPremios();
    else if (acao === 'culto') abrirCulto();
    else if (acao === 'infinito') jogarInfinito();
    else if (acao === 'creditos') abrirCreditos();
    else if (acao === 'inicio') { trocarTela('inicio'); atualizarContinuar(); }
    else if (acao === 'loja') abrirLoja();
    else if (acao === 'sair') fecharJogo();
    else if (acao === 'pausa') { if (J && !J.ganhou) abrirPausa(); }
    else if (acao === 'som') { E.som = !E.som; E.musica = E.som; Som.ajustar(); salvar(); hud(); }
});
addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (janelaAtual && !janelaAtual.op.semFechar) fechar();
    else if (!janelaAtual && J && !J.ganhou && palco.dataset.tela === 'jogo') abrirPausa();
});
addEventListener('resize', ajustar);
addEventListener('orientationchange', () => setTimeout(ajustar, 150));
// pausa sozinho quando a aba some
addEventListener('pagehide', () => { salvarFase(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && J && J.comecou && !J.ganhou && !janelaAtual) abrirPausa(); });

// ================= laco principal =================
let ultimo = performance.now(), relogio = 0;
function laco(agora) {
    const dt = Math.min(.25, Math.max(0, (agora - ultimo) / 1000));
    ultimo = agora;
    tempo += dt;
    if (J && J.comecou && !J.ganhou && !janelaAtual && !dicaAtual) atualizarFase(dt);
    atualizarEfeitos(dt);
    desenhar();
    relogio += dt;
    if (relogio > .25 && J) { relogio = 0; hud(); checarVitoria(); if (J && J.comecou && !J.ganhou && !janelaAtual) vigiarDicas(); }
    requestAnimationFrame(laco);
}

// ================= comeco =================
$$('img[data-i]').forEach(img => { img.src = iconeURL(img.dataset.i); });
ajustar();
telaCarregando();
requestAnimationFrame(laco);
