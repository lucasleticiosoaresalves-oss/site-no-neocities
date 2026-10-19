'use strict';
/* Fazenda do Lucas — primitivas 2d e icones de interface (os modelos 3d ficam em modelos3d.js) */

const TINTA = 'rgba(48,30,12,.78)';
const TAU = Math.PI * 2;

// ---------- primitivas ----------
function mix(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    const alvo = f < 0 ? 0 : 255, p = Math.abs(f);
    const ch = v => Math.round(v + (alvo - v) * p);
    const r = ch(n >> 16), g = ch((n >> 8) & 255), b = ch(n & 255);
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
function traco(c, w = 1.5, cor = TINTA) {
    if (!w) return;
    c.lineWidth = w * .82; c.strokeStyle = cor; c.lineJoin = 'round'; c.lineCap = 'round'; c.stroke();
}
function linhaC(c, cor, w) { traco(c, w + 2.4); traco(c, w, cor); }
function vg(c, y0, y1, a, b) { const g = c.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g; }
function hg(c, x0, x1, a, b) { const g = c.createLinearGradient(x0, 0, x1, 0); g.addColorStop(0, a); g.addColorStop(1, b); return g; }
function rg(c, x, y, r, a, b) {
    const g = c.createRadialGradient(x - r * .35, y - r * .4, r * .08, x, y, r * 1.05);
    g.addColorStop(0, a); g.addColorStop(1, b); return g;
}
function circ(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); }
function bola(c, x, y, r, cor, w = 1.5) { circ(c, x, y, r); c.fillStyle = rg(c, x, y, r, mix(cor, .45), mix(cor, -.25)); c.fill(); traco(c, w); }
function oval(c, x, y, rx, ry, cor, w = 1.5, rot = 0) { c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, TAU); c.fillStyle = cor; c.fill(); traco(c, w); }
function ovalG(c, x, y, rx, ry, cor, w = 1.5, rot = 0) {
    c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, TAU);
    c.fillStyle = rg(c, x, y, Math.max(rx, ry), mix(cor, .4), mix(cor, -.25)); c.fill(); traco(c, w);
}
function caminho(c, p) { c.beginPath(); c.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) c.lineTo(p[i], p[i + 1]); c.closePath(); }
function poli(c, p, cor, w = 1.5) { caminho(c, p); c.fillStyle = cor; c.fill(); traco(c, w); }
function rr(c, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    c.beginPath(); c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}
function caixaR(c, x, y, w, h, r, cor, lw = 1.5) { rr(c, x, y, w, h, r); c.fillStyle = cor; c.fill(); traco(c, lw); }
function sombra(c, x, y, rx, ry, a = .22) {
    // sombra macia (degrade), cara de render 3d
    c.save(); c.translate(x, y); c.scale(1, ry / rx);
    const g = c.createRadialGradient(0, 0, 0, 0, 0, rx * 1.15);
    g.addColorStop(0, `rgba(20,14,0,${a * 1.7})`); g.addColorStop(.55, `rgba(20,14,0,${a})`); g.addColorStop(1, 'rgba(20,14,0,0)');
    c.beginPath(); c.arc(0, 0, rx * 1.15, 0, TAU); c.fillStyle = g; c.fill();
    c.restore();
}
function luz(c, x, y, rx, ry, a = .5, rot = -.5) { c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, TAU); c.fillStyle = `rgba(255,255,255,${a})`; c.fill(); }
function moita(c, circs, cor, lw = 1.6) {
    c.beginPath();
    for (const [x, y, r] of circs) { c.moveTo(x + r, y); c.arc(x, y, r, 0, TAU); }
    c.lineWidth = lw * 2; c.strokeStyle = TINTA; c.lineJoin = 'round'; c.stroke();
    let y0 = Infinity, y1 = -Infinity;
    for (const [, y, r] of circs) { y0 = Math.min(y0, y - r); y1 = Math.max(y1, y + r); }
    c.fillStyle = vg(c, y0, y1, mix(cor, .3), mix(cor, -.3)); c.fill();
    for (const [x, y, r] of circs) { circ(c, x - r * .28, y - r * .3, r * .5); c.fillStyle = 'rgba(255,255,255,.14)'; c.fill(); }
}
function estrela(c, x, y, r1, r2, pontas, cor, w = 1.5) {
    c.beginPath();
    for (let i = 0; i < pontas * 2; i++) {
        const r = i % 2 ? r2 : r1, a = -Math.PI / 2 + i * Math.PI / pontas;
        c.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
    }
    c.closePath(); c.fillStyle = cor; c.fill(); traco(c, w);
}
function texto(c, s, x, y, tam, cor = '#fff', borda = TINTA, fonte = 'bold') {
    c.font = `${fonte} ${tam}px "Trebuchet MS", Verdana, sans-serif`;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.lineWidth = Math.max(2, tam / 4); c.strokeStyle = borda; c.lineJoin = 'round';
    c.strokeText(s, x, y); c.fillStyle = cor; c.fillText(s, x, y);
}

function paraquedas(c, ang) {
    c.save(); c.rotate(ang);
    c.beginPath(); c.moveTo(-18, -40); c.lineTo(0, -6); c.lineTo(18, -40); c.moveTo(-6, -42); c.lineTo(0, -6); c.lineTo(6, -42); traco(c, .8, '#6a5030');
    c.beginPath(); c.moveTo(-22, -40); c.quadraticCurveTo(0, -72, 22, -40); c.closePath();
    c.fillStyle = '#ffffff'; c.fill();
    c.save(); c.clip();
    for (let i = 0; i < 5; i++) { c.fillStyle = i % 2 ? '#ffffff' : '#e8322c'; c.fillRect(-22 + i * 8.8, -72, 8.8, 40); }
    c.restore();
    c.beginPath(); c.moveTo(-22, -40); c.quadraticCurveTo(0, -72, 22, -40); c.closePath(); traco(c, 1.5);
    c.restore();
}
function jaulaDes(c, frac, w = 30, h = 44) {
    const n = 7, k = Math.ceil(frac * n);
    for (let i = 0; i < k; i++) {
        const x = -w + i * (2 * w / (n - 1));
        c.beginPath(); c.moveTo(x, 2); c.lineTo(x, -h); traco(c, 4.5); traco(c, 2.4, '#b8c0c8');
    }
    if (frac >= 1) {
        caixaR(c, -w - 4, -h - 6, 2 * w + 8, 7, 2, vg(c, -h - 6, -h + 1, '#d8dee4', '#8a96a0'), 1.4);
        caixaR(c, -w - 4, -2, 2 * w + 8, 6, 2, vg(c, -2, 4, '#c8ced4', '#7a8690'), 1.4);
        bola(c, 0, -h - 9, 3, '#ffd34d', 1);
    }
}

// ---------- icones (48x48) ----------
function sacoIcone(c, cor, letra, corLetra = '#5a3010') {
    c.beginPath(); c.moveTo(12, 42); c.quadraticCurveTo(7, 26, 15, 15); c.lineTo(33, 15); c.quadraticCurveTo(41, 26, 36, 42); c.quadraticCurveTo(24, 46, 12, 42); c.closePath();
    c.fillStyle = rg(c, 24, 30, 20, mix(cor, .45), mix(cor, -.22)); c.fill(); traco(c, 2);
    c.beginPath(); c.moveTo(15, 15); c.lineTo(19, 8); c.lineTo(24, 12); c.lineTo(29, 8); c.lineTo(33, 15); c.closePath(); c.fillStyle = mix(cor, -.1); c.fill(); traco(c, 1.6);
    c.beginPath(); c.moveTo(15, 16); c.lineTo(33, 16); traco(c, 2.4, '#a0703a');
    if (letra) texto(c, letra, 24, 31, 12, '#fff', corLetra);
}
function garrafa(c, cor, tampa) {
    c.beginPath(); c.moveTo(18, 44); c.lineTo(18, 22); c.quadraticCurveTo(18, 17, 21, 15); c.lineTo(21, 9); c.lineTo(27, 9); c.lineTo(27, 15); c.quadraticCurveTo(30, 17, 30, 22); c.lineTo(30, 44); c.closePath();
    c.fillStyle = hg(c, 18, 30, mix(cor, .35), mix(cor, -.25)); c.fill(); traco(c, 1.8);
    caixaR(c, 20, 5, 8, 5, 1.5, tampa, 1.4);
    caixaR(c, 18, 26, 12, 10, 1, '#fff8e0', 1.1);
    luz(c, 21, 30, 1.2, 8, .45, 0);
}
function medalhaDes(c, cor) {
    poli(c, [16, 4, 22, 4, 26, 22, 20, 22], '#3a7bd5', 1.4);
    poli(c, [32, 4, 26, 4, 22, 22, 28, 22], '#e8322c', 1.4);
    bola(c, 24, 31, 13, cor, 2);
    circ(c, 24, 31, 9); traco(c, 1.2, mix(cor, -.35));
    estrela(c, 24, 31, 6, 2.6, 5, mix(cor, .4), 1);
}
const ICONES = {
    ovo(c) { ovalG(c, 24, 26, 12, 15, '#fff3dc', 2); luz(c, 19, 19, 3, 5, .7, .3); },
    ovoEmPo(c) {
        caixaR(c, 12, 14, 24, 30, 4, hg(c, 12, 36, '#fff8d8', '#e8c870'), 1.8);
        caixaR(c, 10, 9, 28, 7, 2, '#e8322c', 1.6);
        caixaR(c, 15, 22, 18, 14, 2, '#ffffff', 1);
        ovalG(c, 24, 29, 4.5, 5.5, '#fff3dc', 1);
        luz(c, 16, 28, 1.6, 8, .5, 0);
    },
    bolo(c) {
        oval(c, 24, 38, 18, 6, '#dcdcdc', 1.6);
        c.beginPath(); c.moveTo(8, 22); c.lineTo(8, 36); c.ellipse(24, 36, 16, 5, 0, Math.PI, 0, true); c.lineTo(40, 22); c.closePath();
        c.fillStyle = hg(c, 8, 40, '#f2c890', '#c08440'); c.fill(); traco(c, 1.8);
        c.beginPath(); c.moveTo(8, 22); c.lineTo(8, 27); for (let i = 0; i <= 8; i++) c.lineTo(8 + i * 4, i % 2 ? 31 : 27); c.lineTo(40, 22); c.closePath();
        c.fillStyle = '#ff9cc4'; c.fill(); traco(c, 1.2);
        oval(c, 24, 22, 16, 5, '#ffb8d4', 1.6);
        bola(c, 24, 16, 3.6, '#e8102e', 1.2);
    },
    carne(c) {
        c.beginPath(); c.moveTo(10, 30); c.bezierCurveTo(4, 14, 26, 6, 36, 14); c.bezierCurveTo(44, 22, 38, 38, 26, 40); c.bezierCurveTo(18, 41, 13, 37, 10, 30); c.closePath();
        c.fillStyle = rg(c, 24, 24, 18, '#ff8a7a', '#c8302a'); c.fill(); traco(c, 2);
        c.beginPath(); c.moveTo(13, 30); c.bezierCurveTo(10, 18, 26, 11, 34, 17); traco(c, 2.4, '#ffd8c8');
        bola(c, 30, 26, 4, '#fff6e8', 1.2);
    },
    linguica(c) {
        for (const [x, y, a] of [[15, 30, .5], [26, 22, -.2], [36, 30, .5]]) { c.save(); c.translate(x, y); c.rotate(a); caixaR(c, -10, -5, 20, 10, 5, rg(c, 0, 0, 10, '#e8846a', '#a8402a'), 1.6); luz(c, -2, -2.5, 5, 1.3, .45, 0); c.restore(); }
        c.beginPath(); c.moveTo(22, 27); c.lineTo(21, 30); c.moveTo(30, 27); c.lineTo(31, 30); traco(c, 2, '#f4e0b0');
    },
    leite(c) { garrafa(c, '#f8f8f8', '#3a7bd5'); texto(c, 'LEITE', 24, 31, 5, '#3a7bd5', '#fff8e0'); },
    queijo(c) {
        poli(c, [5, 27, 43, 27, 43, 41, 5, 41], vg(c, 27, 41, '#f7cc48', '#dca020'), 1.8);
        poli(c, [5, 27, 43, 27, 31, 9], vg(c, 9, 27, '#fff0a0', '#ffd75a'), 1.8);
        for (const [x, y, r] of [[13, 34, 3], [25, 36, 2.2], [36, 32, 2.6], [20, 30.5, 1.4]]) { circ(c, x, y, r); c.fillStyle = '#c88a10'; c.fill(); traco(c, .8); }
        oval(c, 30, 20, 2.6, 1.4, '#e8b030', .8);
    },
    pizza(c) {
        bola(c, 24, 26, 19, '#e8a850', 2);
        circ(c, 24, 26, 15); c.fillStyle = '#e8402a'; c.fill();
        circ(c, 24, 26, 14); c.fillStyle = '#ffd860'; c.fill();
        for (const [x, y] of [[17, 20], [29, 19], [24, 28], [15, 31], [32, 31], [24, 36]]) bola(c, x, y, 3, '#c0302a', 1);
        for (const [x, y] of [[21, 16], [30, 25], [18, 26]]) oval(c, x, y, 2, 1.2, '#4caf32', .6);
        c.beginPath(); c.moveTo(24, 26); c.lineTo(24, 7); c.moveTo(24, 26); c.lineTo(41, 33); c.moveTo(24, 26); c.lineTo(8, 34); traco(c, 1, 'rgba(120,60,10,.5)');
    },
    pena(c) {
        c.save(); c.translate(24, 24); c.rotate(.5);
        c.beginPath(); c.moveTo(0, 20); c.bezierCurveTo(-12, 6, -10, -12, 0, -20); c.bezierCurveTo(10, -12, 12, 6, 0, 20); c.closePath();
        c.fillStyle = vg(c, -20, 20, '#ffffff', '#cfd6e0'); c.fill(); traco(c, 1.8);
        c.beginPath(); c.moveTo(0, 24); c.lineTo(0, -16); traco(c, 1.4, '#8a96a0');
        c.beginPath(); for (let i = -12; i < 14; i += 5) { c.moveTo(0, i); c.lineTo(-7, i - 4); c.moveTo(0, i); c.lineTo(7, i - 4); } traco(c, .7, 'rgba(100,110,130,.5)');
        c.restore();
    },
    travesseiro(c) {
        c.beginPath(); c.moveTo(6, 14); c.quadraticCurveTo(24, 20, 42, 14); c.quadraticCurveTo(38, 26, 42, 38); c.quadraticCurveTo(24, 32, 6, 38); c.quadraticCurveTo(10, 26, 6, 14); c.closePath();
        c.fillStyle = rg(c, 24, 26, 20, '#ffffff', '#c8d8f0'); c.fill(); traco(c, 2);
        c.beginPath(); c.moveTo(12, 26); c.quadraticCurveTo(24, 22, 36, 26); traco(c, 1, 'rgba(90,110,160,.4)');
        for (const [x, y] of [[16, 20], [30, 22], [22, 30], [33, 31]]) { circ(c, x, y, 1.6); c.fillStyle = '#ff9cc4'; c.fill(); }
    },
    urso(c) {
        bola(c, 12, 12, 6, '#8a5630', 1.4); bola(c, 36, 12, 6, '#8a5630', 1.4);
        bola(c, 24, 26, 17, '#8a5630', 2);
        ovalG(c, 24, 32, 8, 6, '#e0b888', 1.4); oval(c, 24, 29, 3, 2.2, '#2a1a10', .6);
        for (const x of [18, 30]) { circ(c, x, 22, 2.2); c.fillStyle = TINTA; c.fill(); }
        c.beginPath(); for (let x = 9; x <= 39; x += 6) { c.moveTo(x, 6); c.lineTo(x, 46); } traco(c, 3.4); c.beginPath(); for (let x = 9; x <= 39; x += 6) { c.moveTo(x, 6); c.lineTo(x, 46); } traco(c, 1.6, '#c8d0d8');
    },
    moeda(c) {
        bola(c, 24, 24, 19, '#f7c531', 2);
        circ(c, 24, 24, 14); traco(c, 1.6, '#c58a10');
        texto(c, '$', 24, 25, 20, '#ffe680', '#a86c00');
        luz(c, 16, 15, 5, 2.5, .6);
    },
    estrela(c) { estrela(c, 24, 26, 21, 10, 5, rg(c, 24, 24, 20, '#fff38a', '#f0a000'), 2.2); luz(c, 18, 17, 4, 2, .6); },
    caminhao(c) { c.save(); c.translate(26, 38); c.scale(.4, .4); caminhaoLado(c, 0, true); c.restore(); },
    aviao(c) { c.save(); c.translate(26, 34); c.scale(.55, .55); aviaoDes(c, 0); c.restore(); },
    poco(c) { c.save(); c.translate(24, 46); c.scale(.46, .46); pocoDes(c, true); c.restore(); },
    armazem(c) { c.save(); c.translate(24, 42); c.scale(.24, .24); armazemDes(c); c.restore(); },
    agua(c) {
        c.beginPath(); c.moveTo(24, 6); c.bezierCurveTo(30, 18, 38, 24, 38, 31); c.arc(24, 31, 14, 0, Math.PI); c.bezierCurveTo(10, 24, 18, 18, 24, 6); c.closePath();
        c.fillStyle = rg(c, 24, 30, 16, '#bfeaff', '#2f88d8'); c.fill(); traco(c, 2);
        luz(c, 19, 30, 2.5, 5, .7, .3);
    },
    grama(c) { c.save(); c.translate(24, 38); c.scale(2, 2); tufoDes(c, 3); c.restore(); },
    martelo(c) {
        c.save(); c.translate(24, 24); c.rotate(-.7);
        caixaR(c, -3, -6, 6, 26, 2, hg(c, -3, 3, '#d49a5a', '#8a5a2b'), 1.6);
        caixaR(c, -12, -16, 24, 11, 2, vg(c, -16, -5, '#e8eef2', '#7a8690'), 1.8);
        c.restore();
    },
    relogio(c) {
        bola(c, 24, 25, 18, '#f0f0f0', 2); circ(c, 24, 25, 14); c.fillStyle = '#fff'; c.fill(); traco(c, 1.2);
        c.beginPath(); c.moveTo(24, 25); c.lineTo(24, 15); c.moveTo(24, 25); c.lineTo(31, 28); traco(c, 2);
        caixaR(c, 21, 3, 6, 5, 1, '#c0392b', 1.2);
    },
    cadeado(c) {
        c.beginPath(); c.arc(24, 20, 9, Math.PI, 0); traco(c, 5); c.beginPath(); c.arc(24, 20, 9, Math.PI, 0); traco(c, 2.4, '#c8c8c8');
        caixaR(c, 11, 20, 26, 22, 4, vg(c, 20, 42, '#ffe066', '#d49a10'), 2);
        circ(c, 24, 29, 3); c.fillStyle = TINTA; c.fill();
    },
    taca(c) { trofeuDes(c); },
    gaiola(c) { c.save(); c.translate(24, 44); c.scale(.6, .6); ANIMAL_DES.urso(c, 0, false, 0); jaulaDes(c, 1); c.restore(); },
    check(c) { bola(c, 24, 24, 18, '#4fb82a', 2); c.beginPath(); c.moveTo(15, 24); c.lineTo(22, 31); c.lineTo(34, 16); traco(c, 6); traco(c, 3.4, '#fff'); },
    ouro(c) { medalhaDes(c, '#f7c531'); },
    prata(c) { medalhaDes(c, '#d0d6dc'); },
    bronze(c) { medalhaDes(c, '#d08a4a'); },
    loja(c) {
        caixaR(c, 8, 24, 32, 20, 1, '#c8915a', 1.8);
        caixaR(c, 6, 28, 36, 5, 1, '#a0703a', 1.4);
        for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(4 + i * 7, 10); c.lineTo(11 + i * 7, 10); c.lineTo(11 + i * 7, 20); c.quadraticCurveTo(7.5 + i * 7, 24, 4 + i * 7, 20); c.closePath(); c.fillStyle = i % 2 ? '#fff' : '#e8322c'; c.fill(); traco(c, 1.2); }
        caixaR(c, 3, 8, 42, 4, 2, '#8a5a2b', 1.4);
    },
    som(c) {
        poli(c, [8, 18, 16, 18, 26, 9, 26, 39, 16, 30, 8, 30], vg(c, 9, 39, '#f0f0f0', '#a0a0a0'), 1.8);
        c.beginPath(); c.arc(26, 24, 8, -.8, .8); traco(c, 2.2); c.beginPath(); c.arc(26, 24, 14, -.8, .8); traco(c, 2.2);
    },
    semSom(c) {
        poli(c, [8, 18, 16, 18, 26, 9, 26, 39, 16, 30, 8, 30], vg(c, 9, 39, '#f0f0f0', '#a0a0a0'), 1.8);
        c.beginPath(); c.moveTo(31, 17); c.lineTo(43, 31); c.moveTo(43, 17); c.lineTo(31, 31); linhaC(c, '#e8322c', 2.4);
    },
    musica(c) {
        c.beginPath(); c.moveTo(18, 36); c.lineTo(18, 10); c.lineTo(38, 6); c.lineTo(38, 32); traco(c, 3.4); c.beginPath(); c.moveTo(18, 36); c.lineTo(18, 10); c.lineTo(38, 6); c.lineTo(38, 32); traco(c, 1.6, '#ffd34d');
        ovalG(c, 13, 36, 6, 4.5, '#ffd34d', 1.6, -.3); ovalG(c, 33, 32, 6, 4.5, '#ffd34d', 1.6, -.3);
    },
    semMusica(c) { ICONES.musica(c); c.beginPath(); c.moveTo(8, 8); c.lineTo(40, 40); linhaC(c, '#e8322c', 2.4); },
    interrogacao(c) { bola(c, 24, 24, 18, '#9ab', 2); texto(c, '?', 24, 25, 22); },
};

const _icones = new Map(), _urls = new Map();
function iconeCv(nome) {
    let cv = _icones.get(nome);
    if (cv) return cv;
    cv = document.createElement('canvas'); cv.width = cv.height = 96;
    const c = cv.getContext('2d'); c.scale(2, 2);
    if (nome.startsWith('obj:')) { const [, tipo, sub] = nome.split(':'); desenharIconeObjeto(c, tipo, sub); }
    else (ICONES[nome] || ICONES.interrogacao)(c);
    _icones.set(nome, cv);
    return cv;
}
function iconeURL(nome) {
    let u = _urls.get(nome);
    if (!u) { u = iconeCv(nome).toDataURL(); _urls.set(nome, u); }
    return u;
}

// tela cheia (monitor com setinhas pros cantos)
ICONES.telaCheia = c => {
    caixaR(c, 8, 10, 32, 24, 3, vg(c, 10, 34, '#bfe8ff', '#4f9fd8'), 1.8);
    for (const [x, y, sx, sy] of [[11, 13, 1, 1], [37, 13, -1, 1], [11, 31, 1, -1], [37, 31, -1, -1]]) {
        c.beginPath(); c.moveTo(x + sx * 7, y); c.lineTo(x, y); c.lineTo(x, y + sy * 6); traco(c, 2.6, '#ffffff');
    }
    caixaR(c, 20, 34, 8, 5, 1, '#8a96a0', 1.2);
    caixaR(c, 14, 38, 20, 4, 2, '#6a7680', 1.2);
};
