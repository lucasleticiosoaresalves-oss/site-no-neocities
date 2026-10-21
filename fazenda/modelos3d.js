'use strict';
/* Fazenda do Lucas: desenha os bichos e as casas em 3d simples, com cara de jogo de 2008
   e todos os modelos: bichos, construcoes, veiculos, arvores e produtos. Tudo montado com caixas, cilindros e esferas. */

// cameras (yaw gira em volta do eixo y, pitch inclina pra baixo). luz: x direita, y pra baixo, z pra camera
const CAM_PADRAO = { yaw: -.45, pitch: .55, luz: [-.55, -.75, .4] };
const CAM_FRENTE = { yaw: 0, pitch: .35, luz: [-.55, -.75, .4] };
const CAM_BICHO = { yaw: .5, pitch: .42, luz: [-.5, -.8, .35] };
const CAM_LADO = { yaw: -.22, pitch: .3, luz: [-.5, -.8, .35] };
const CAM_ICONE = { yaw: -.5, pitch: .5, luz: [-.55, -.75, .4] };

// ---------- pilha de transformacoes ----------
let m3faces = [], m3mat = null, m3pilha = [];
function m3mul(a, b) {
    const r = new Array(12);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++)
        r[i * 4 + j] = a[i * 4] * b[j] + a[i * 4 + 1] * b[4 + j] + a[i * 4 + 2] * b[8 + j] + (j === 3 ? a[i * 4 + 3] : 0);
    return r;
}
const m3ap = m => { m3mat = m3mul(m3mat, m); };
const m3push = () => m3pilha.push(m3mat.slice());
const m3pop = () => { m3mat = m3pilha.pop(); };
const m3mov = (x, y, z) => m3ap([1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z]);
const m3rx = a => { const c = Math.cos(a), s = Math.sin(a); m3ap([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0]); };
const m3ry = a => { const c = Math.cos(a), s = Math.sin(a); m3ap([c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0]); };
const m3rz = a => { const c = Math.cos(a), s = Math.sin(a); m3ap([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0]); };
const m3esc = (x, y = x, z = x) => m3ap([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0]);
function m3pt(x, y, z) { const m = m3mat; return [m[0] * x + m[1] * y + m[2] * z + m[3], m[4] * x + m[5] * y + m[6] * z + m[7], m[8] * x + m[9] * y + m[10] * z + m[11]]; }
function m3face(pts, cor, extra) { m3faces.push(Object.assign({ p: pts.map(q => m3pt(q[0], q[1], q[2])), cor }, extra)); }

// ---------- desenhos basicos ----------
// caixa centrada em x/z, de y0 ate y0+h
function m3caixa(w, h, d, cor, y0 = 0, chao = false) {
    const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2, y1 = y0 + h, e = chao ? { chao: 1 } : null;
    m3face([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], cor, e);
    if (chao) return;
    m3face([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], cor);
    m3face([[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0]], cor);
    m3face([[x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0]], cor);
    m3face([[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]], cor);
    m3face([[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]], cor);
}
// cilindro/cone no eixo y, base em y=0 (r2=0 vira cone)
function m3cil(r1, r2, h, seg, cor, corTampa = cor) {
    const anel = (r, y) => Array.from({ length: seg }, (_, i) => { const a = i / seg * TAU; return [Math.cos(a) * r, y, Math.sin(a) * r]; });
    const b = anel(r1, 0), t = anel(r2, h);
    for (let i = 0; i < seg; i++) {
        const j = (i + 1) % seg;
        if (r2 > 0) m3face([b[i], b[j], t[j], t[i]], cor); else m3face([b[i], b[j], [0, h, 0]], cor);
    }
    m3face(b, corTampa);
    if (r2 > 0) m3face(t, corTampa);
}
// esfera de poucos poligonos centrada na origem
function m3esf(rx, ry, rz, cor, lat = 4, lon = 7) {
    const P = (i, j) => { const th = i / lat * Math.PI, ph = j / lon * TAU; return [Math.sin(th) * Math.cos(ph) * rx, Math.cos(th) * ry, Math.sin(th) * Math.sin(ph) * rz]; };
    for (let i = 0; i < lat; i++) for (let j = 0; j < lon; j++) {
        const a = P(i, j), b = P(i, j + 1), c = P(i + 1, j + 1), d = P(i + 1, j);
        if (i === 0) m3face([a, c, d], cor); else if (i === lat - 1) m3face([a, b, c], cor); else m3face([a, b, c, d], cor);
    }
}
// telhado de duas aguas com a cumeeira no eixo x
function m3tel(w, d, h, cor, y0, corOitao = cor) {
    const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2, yt = y0 + h;
    m3face([[x0, y0, z1], [x1, y0, z1], [x1, yt, 0], [x0, yt, 0]], cor);
    m3face([[x0, y0, z0], [x1, y0, z0], [x1, yt, 0], [x0, yt, 0]], cor);
    m3face([[x0, y0, z0], [x0, y0, z1], [x0, yt, 0]], corOitao);
    m3face([[x1, y0, z0], [x1, y0, z1], [x1, yt, 0]], corOitao);
}
// meio cilindro deitado no eixo z (arco do hangar)
function m3arco(r, d, seg, cor, corFrente) {
    const P = (i, z) => { const a = i / seg * Math.PI; return [Math.cos(a) * r, Math.sin(a) * r, z]; };
    for (let i = 0; i < seg; i++) m3face([P(i, -d / 2), P(i + 1, -d / 2), P(i + 1, d / 2), P(i, d / 2)], cor);
    m3face(Array.from({ length: seg + 1 }, (_, i) => P(i, d / 2)), corFrente);
}
// estrela "extrudada"
function m3estrela(r1, r2, esp, cor) {
    const pts = Array.from({ length: 10 }, (_, i) => { const r = i % 2 ? r2 : r1, a = -Math.PI / 2 + i * Math.PI / 5; return [Math.cos(a) * r, -Math.sin(a) * r]; });
    m3face(pts.map(([x, y]) => [x, y, esp / 2]), cor);
    m3face(pts.map(([x, y]) => [x, y, -esp / 2]), cor);
    for (let i = 0; i < 10; i++) { const [ax, ay] = pts[i], [bx, by] = pts[(i + 1) % 10]; m3face([[ax, ay, -esp / 2], [bx, by, -esp / 2], [bx, by, esp / 2], [ax, ay, esp / 2]], cor); }
}

// ---------- render ----------
function proj3d(x, y, z, cam = CAM_PADRAO) {
    const cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw), cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
    const x1 = cy * x + sy * z, z1 = -sy * x + cy * z;
    return [x1, -y * cp + z1 * sp, z1 * cp + y * sp];
}
function cor3d(hex, k) {
    const n = parseInt(hex.slice(1), 16);
    let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    if (k <= 1) { r *= k; g *= k; b *= k; }
    else { const t = Math.min(1, k - 1); r += (255 - r) * t; g += (255 - g) * t; b += (255 - b) * t; }
    return `rgb(${r | 0},${g | 0},${b | 0})`;
}
function render3d(c, fn, cam = CAM_PADRAO) {
    m3faces = []; m3mat = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]; m3pilha = [];
    fn();
    const cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw), cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
    const ll = Math.hypot(...cam.luz), L = cam.luz.map(v => v / ll);
    const itens = [];
    m3faces.forEach((f, idx) => {
        const q = f.p.map(([x, y, z]) => { const x1 = cy * x + sy * z, z1 = -sy * x + cy * z; return [x1, -y * cp + z1 * sp, z1 * cp + y * sp]; });
        let nx = 0, ny = 0, nz = 0, d = 0;
        for (let i = 0; i < q.length; i++) {
            const a = q[i], b = q[(i + 1) % q.length];
            nx += (a[1] - b[1]) * (a[2] + b[2]); ny += (a[2] - b[2]) * (a[0] + b[0]); nz += (a[0] - b[0]) * (a[1] + b[1]);
            d += a[2];
        }
        const len = Math.hypot(nx, ny, nz) || 1;
        nx /= len; ny /= len; nz /= len;
        if (nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
        const dif = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
        // variacao pequena por face: aquele jeito "malfeito" de render antigo
        const ruido = 1 + (((idx * 7919) % 13) - 6) * .006;
        itens.push({ q, cor: cor3d(f.cor, (.6 + .55 * dif) * ruido), d: f.chao ? -1e9 + d : d / q.length });
    });
    itens.sort((a, b) => a.d - b.d);
    c.lineJoin = 'round';
    for (const it of itens) {
        c.beginPath(); c.moveTo(it.q[0][0], it.q[0][1]);
        for (let i = 1; i < it.q.length; i++) c.lineTo(it.q[i][0], it.q[i][1]);
        c.closePath(); c.fillStyle = it.cor; c.fill();
        c.lineWidth = .7; c.strokeStyle = it.cor; c.stroke();
    }
}
// cache interno (pros desenhos que o jogo chama todo quadro, tipo caminhao e aviao)
const m3cache = new Map();
function m3img(chave, w, h, ox, oy, fn) {
    let cv = m3cache.get(chave);
    if (!cv) {
        cv = document.createElement('canvas'); cv.width = w * 2; cv.height = h * 2;
        const g = cv.getContext('2d'); g.scale(2, 2); g.translate(ox, oy); fn(g);
        m3cache.set(chave, cv);
    }
    return { cv, w, h, ox, oy };
}
function m3desenha(c, s) { c.drawImage(s.cv, -s.ox, -s.oy, s.w, s.h); }
const esc3 = (hex, f) => mix(hex, -f);

// ======================= natureza =======================
const COPAS = { macieira: ['#4fa02c', '#3f8a22', '#d8281e'], mato: ['#3f8f26', '#2f7a1c'], mato2: ['#5aa833', '#468f26'] };
function arvoreDes(c, sub, fruta) {
    const [a, b, f] = COPAS[sub] || COPAS.mato;
    sombra(c, 6, 0, 30, 9, .3);
    render3d(c, () => {
        m3cil(5, 3.5, 34, 6, '#7a4a24');
        m3push(); m3mov(0, 52, 0); m3esf(22, 18, 22, a, 3, 7); m3pop();
        m3push(); m3mov(-13, 42, 8); m3esf(13, 11, 13, b, 3, 6); m3pop();
        m3push(); m3mov(14, 44, 6); m3esf(12, 10, 12, a, 3, 6); m3pop();
        m3push(); m3mov(2, 66, -4); m3esf(13, 9, 13, a, 3, 6); m3pop();
        if (fruta && f) for (const [x, y, z] of [[-8, 48, 20], [7, 56, 19], [15, 42, 15], [-17, 38, 15], [1, 40, 21], [11, 64, 12], [-6, 62, 15]]) { m3push(); m3mov(x, y, z); m3esf(3.2, 3.2, 3.2, f, 2, 4); m3pop(); }
    });
}
function pinheiroDes(c) {
    sombra(c, 5, 0, 22, 7, .3);
    render3d(c, () => {
        m3cil(4, 3, 14, 5, '#6e4520');
        for (const [y, r, h] of [[8, 22, 22], [22, 17, 20], [36, 12, 20]]) { m3push(); m3mov(0, y, 0); m3cil(r, 0, h, 7, '#2f7d32'); m3pop(); }
    });
}
function arbustoDes(c) {
    sombra(c, 4, 0, 22, 6, .3);
    render3d(c, () => {
        for (const [x, y, z, r] of [[-8, 9, 0, 10], [9, 8, 2, 9], [0, 14, -3, 11], [1, 8, 7, 8]]) { m3push(); m3mov(x, y, z); m3esf(r, r * .85, r, '#3f9a2c', 3, 6); m3pop(); }
        for (const [x, y, z] of [[-6, 16, 8], [8, 14, 9], [2, 22, 4]]) { m3push(); m3mov(x, y, z); m3esf(2, 2, 2, '#f06a8a', 2, 4); m3pop(); }
    });
}
// tufo de grama do pasto (n = 1 a 3)
function tufoDes(c, n) {
    const cores = ['#4f9e22', '#6cbc32', '#86d046'];
    render3d(c, () => {
        const k = n * 2 + 1;
        for (let i = 0; i < k; i++) {
            m3push(); m3mov(((i * 37) % 13) - 6, 0, ((i * 23) % 9) - 4);
            m3rz((((i * 17) % 7) - 3) * .12); m3rx((((i * 11) % 5) - 2) * .15);
            m3cil(1.8, 0, 6 + n * 2 + (i % 3), 3, cores[i % 3]);
            m3pop();
        }
    }, CAM_PADRAO);
}

// ======================= bichos (olhando pra esquerda, -x) =======================
const perna = (x, z, ang, comp, larg, cor) => { m3push(); m3mov(x, comp, z); m3rz(ang); m3caixa(larg, comp, larg, cor, -comp); m3pop(); };
const cilPerna = (x, z, ang, comp, r, cor) => { m3push(); m3mov(x, comp, z); m3rz(ang); m3rx(Math.PI); m3cil(r, r * .85, comp, 5, cor); m3pop(); };
function olhos(x, y, zz, r = 1) { for (const z of [-zz, zz]) { m3push(); m3mov(x, y, z); m3caixa(r, r * 1.3, r, '#151515', -r * .65); m3pop(); } }
function cone(x, y, z, rz, r, h, cor, seg = 4) { m3push(); m3mov(x, y, z); m3rz(rz); m3cil(r, 0, h, seg, cor); m3pop(); }
const MODELOS_BICHO = {
    galinha(f, andando, bica) {
        const a = andando ? Math.sin(f) * .55 : 0;
        perna(1, -3, a, 6, 1.6, '#e89a18'); perna(1, 3, -a, 6, 1.6, '#e89a18');
        m3push(); m3mov(1, 11, 0); m3esf(9, 7.5, 7, '#f4f2ec', 4, 7); m3pop();
        cone(8, 13, 0, -.7, 5, 9, '#ffffff', 5);
        for (const z of [-6.5, 6.5]) { m3push(); m3mov(3, 11, z); m3esf(6, 4, 1.6, '#e2ded2', 3, 5); m3pop(); }
        const hy = bica ? 13 : 19, hx = bica ? -9 : -7;
        m3push(); m3mov(hx, hy, 0); m3esf(5, 5, 4.6, '#fbfaf6', 3, 6); m3pop();
        m3push(); m3mov(hx, hy + 4, 0); m3caixa(5, 3.2, 1.6, '#e03020'); m3pop();
        cone(hx - 4, hy, 0, Math.PI / 2, 2, 4.5, '#f0b020');
        m3push(); m3mov(hx - 2, hy - 3.5, 0); m3esf(1.4, 2.2, 1, '#e03020', 2, 4); m3pop();
        olhos(hx - 2, hy + .5, 3.6);
    },
    porco(f, andando) {
        const a = andando ? Math.sin(f) * .5 : 0;
        for (const [x, z, s] of [[-8, -5, 1], [-8, 5, -1], [8, -5, -1], [8, 5, 1]]) cilPerna(x, z, a * s, 7, 2.6, '#f29bb0');
        m3push(); m3mov(1, 13, 0); m3esf(15, 9.5, 9.5, '#ffb4c4', 4, 8); m3pop();
        m3push(); m3mov(-12, 15, 0); m3esf(7.5, 7, 7, '#ffb4c4', 3, 6); m3pop();
        m3push(); m3mov(-18, 14, 0); m3rz(Math.PI / 2); m3cil(3.5, 3.5, 3, 6, '#f590aa', '#e87894'); m3pop();
        for (const z of [-4, 4]) cone(-11, 21, z, .3, 2.6, 5, '#f7a0b4', 3);
        olhos(-16, 17, 3, 1.1);
        cone(16, 15, 0, -1.2, 1.2, 5, '#f29bb0', 3);
    },
    vaca(f, andando) {
        const a = andando ? Math.sin(f) * .45 : 0;
        for (const [x, z, s] of [[-12, -5, 1], [-12, 5, -1], [11, -5, -1], [11, 5, 1]]) { perna(x, z, a * s, 15, 4.4, '#f2f2f2'); m3push(); m3mov(x, 0, z); m3caixa(4.8, 2.5, 4.8, '#3a2a1a'); m3pop(); }
        m3push(); m3mov(1, 24, 0); m3esf(18, 10, 9.5, '#f6f6f2', 4, 8); m3pop();
        for (const [x, y, z, r] of [[-2, 28, 7.5, 5], [10, 22, 7.8, 4], [7, 27, -8, 5], [-9, 20, -7.6, 3.5]]) { m3push(); m3mov(x, y, z); m3esf(r, r * .8, 2.2, '#262626', 2, 5); m3pop(); }
        m3push(); m3mov(7, 14, 0); m3esf(4, 3, 3.5, '#f4a8b4', 2, 5); m3pop();
        m3push(); m3mov(-20, 30, 0); m3esf(6.5, 7.5, 6, '#f6f6f2', 3, 6); m3pop();
        m3push(); m3mov(-24, 22, 0); m3caixa(7, 6, 9, '#f4a8b4'); m3pop();
        for (const z of [-4, 4]) { cone(-19, 36, z, .2, 1.4, 5, '#efe2c0', 4); m3push(); m3mov(-18, 33, z * 2); m3esf(1.5, 1.4, 3, '#2a2a2a', 2, 4); m3pop(); }
        olhos(-25, 31, 3.4, 1.4);
        m3push(); m3mov(-21, 18, 0); m3cil(2.2, 2.2, 2, 6, '#f0c020'); m3pop();
        cone(19, 28, 0, -2.6, 1, 14, '#e8e8e4', 3);
    },
    avestruz(f, andando) {
        const a = andando ? Math.sin(f) * .5 : 0;
        cilPerna(-2, -3, a, 30, 1.6, '#e0b0a0'); cilPerna(4, 3, -a, 30, 1.6, '#e0b0a0');
        m3push(); m3mov(2, 34, 0); m3esf(14, 9, 10, '#333333', 4, 7); m3pop();
        m3push(); m3mov(14, 37, 0); m3esf(6, 6, 6, '#f4f4f0', 3, 5); m3pop();
        m3push(); m3mov(-9, 38, 0); m3rz(.35); m3cil(2.5, 2, 22, 5, '#ecc0b0'); m3pop();
        m3push(); m3mov(-16, 59, 0); m3esf(4.5, 3.6, 3.6, '#ecc0b0', 3, 5); m3pop();
        cone(-20, 58, 0, Math.PI / 2, 1.8, 4.5, '#e8a050');
        olhos(-17, 60, 3, 1.2);
    },
    gato(f, andando) {
        const a = andando ? Math.sin(f) * .6 : 0;
        for (const [x, z, s] of [[-6, -3, 1], [-6, 3, -1], [6, -3, -1], [6, 3, 1]]) cilPerna(x, z, a * s, 7, 1.7, '#e8902c');
        m3push(); m3mov(1, 10, 0); m3esf(10, 5.5, 5, '#f2a03c', 3, 7); m3pop();
        m3push(); m3mov(10, 12, 0); m3rz(-.5); m3cil(1.6, 1.2, 14, 4, '#e8902c'); m3pop();
        m3push(); m3mov(-10, 15, 0); m3esf(5.5, 5, 5, '#f2a03c', 3, 6); m3pop();
        for (const z of [-3, 3]) cone(-10, 19, z, .1, 2.2, 5, '#e8902c', 3);
        m3push(); m3mov(-14.5, 13.5, 0); m3esf(1.8, 1.6, 2.6, '#fff0dc', 2, 4); m3pop();
        olhos(-14, 16, 2.6, 1.1);
    },
    cachorro(f, andando) {
        const a = andando ? Math.sin(f) * .55 : 0;
        for (const [x, z, s] of [[-8, -3.5, 1], [-8, 3.5, -1], [8, -3.5, -1], [8, 3.5, 1]]) cilPerna(x, z, a * s, 10, 2, '#c8894a');
        m3push(); m3mov(1, 14, 0); m3esf(12, 6.5, 6, '#d49a5a', 3, 7); m3pop();
        m3push(); m3mov(12, 17, 0); m3rz(-.7 + Math.sin(f * 2) * .3); m3cil(1.8, 1.2, 10, 4, '#c8894a'); m3pop();
        m3push(); m3mov(-11, 21, 0); m3esf(6.5, 6, 6, '#d49a5a', 3, 6); m3pop();
        m3push(); m3mov(-17, 19, 0); m3caixa(6, 4.5, 5, '#f0dcc0'); m3pop();
        m3push(); m3mov(-20.5, 22, 0); m3esf(1.6, 1.4, 1.6, '#151515', 2, 4); m3pop();
        for (const z of [-5, 5]) { m3push(); m3mov(-9, 21, z); m3esf(2.4, 5, 1.4, '#8a5428', 2, 4); m3pop(); }
        m3push(); m3mov(-8, 15, 0); m3rz(Math.PI / 2 - .4); m3cil(5, 5, 2, 7, '#d6322a'); m3pop();
        olhos(-15, 24, 3.4, 1.2);
    },
    // o cavalo giratorio: t = posicao do giro (0 a 15)
    cavalo(f, andando, bica, t) {
        m3ry((typeof t === 'number' ? t : 0) / 16 * TAU);
        const a = andando ? Math.sin(f) * .4 : 0;
        for (const [x, z, s] of [[-11, -4.5, 1], [-11, 4.5, -1], [11, -4.5, -1], [11, 4.5, 1]]) {
            cilPerna(x, z, a * s, 23, 2.6, '#7a4a26');
            m3push(); m3mov(x, 0, z); m3cil(3, 3, 5, 6, '#f4f0e8'); m3caixa(5.4, 1.6, 5.4, '#2a1a10'); m3pop();
        }
        m3push(); m3mov(0, 31, 0); m3esf(17, 9.5, 8, '#8a5430', 4, 8); m3pop();
        m3push(); m3mov(-3, 27, 0); m3esf(8, 5, 7.4, '#f4f0e8', 3, 6); m3pop();
        m3push(); m3mov(-12, 33, 0); m3rz(.55); m3cil(6, 4.5, 17, 6, '#8a5430'); m3pop();
        m3push(); m3mov(-13, 40, 0); m3rz(.55); m3caixa(2, 15, 2.4, '#2a1a10'); m3pop();
        m3push(); m3mov(-25, 46, 0); m3rz(.8); m3esf(9, 4.6, 4.4, '#8a5430', 3, 6); m3pop();
        m3push(); m3mov(-28, 43, 0); m3rz(.8); m3esf(4, 2.4, 4.6, '#f4f0e8', 2, 5); m3pop();
        for (const z of [-2.4, 2.4]) cone(-21, 51, z, .2, 1.6, 5, '#7a4a26', 4);
        m3push(); m3mov(16, 33, 0); m3rz(-2.5); m3cil(2.6, 1, 17, 5, '#2a1a10'); m3pop();
        olhos(-24, 48, 3.8, 1.2);
    },
    urso(f, andando) {
        const a = andando ? Math.sin(f) * .4 : 0;
        for (const [x, z, s] of [[-12, -7, 1], [-12, 7, -1], [12, -7, -1], [12, 7, 1]]) cilPerna(x, z, a * s, 15, 4.6, '#7a4a26');
        m3push(); m3mov(1, 25, 0); m3esf(20, 13, 13, '#8a5630', 4, 8); m3pop();
        m3push(); m3mov(-18, 32, 0); m3esf(10.5, 10, 10, '#8a5630', 3, 7); m3pop();
        for (const z of [-7, 7]) { m3push(); m3mov(-17, 42, z); m3esf(3.6, 3.6, 2.4, '#7a4a26', 2, 5); m3pop(); }
        m3push(); m3mov(-27, 29, 0); m3esf(5, 4, 4.5, '#dcb488', 2, 5); m3pop();
        m3push(); m3mov(-31.5, 30, 0); m3esf(1.8, 1.4, 1.8, '#151515', 2, 4); m3pop();
        olhos(-25, 35, 4.2, 1.6);
    },
};
const ANIMAL_ALT = { cavalo: 54, galinha: 25, vaca: 42, porco: 25, avestruz: 64, gato: 22, cachorro: 30, urso: 46 };
// recebe as mesmas coisas de antes (c, fase, andando, t); o t pode ser true/false (galinha bicando)
const ANIMAL_DES = Object.fromEntries(Object.entries(MODELOS_BICHO).map(([k, fn]) => [k, (c, f, andando, t) => {
    const bica = typeof t === 'boolean' ? t : (!andando && Math.sin(t * 2.3 + f) > .7);
    sombra(c, 0, 0, { cavalo: 22, galinha: 11, vaca: 24, porco: 17, avestruz: 15, gato: 12, cachorro: 15, urso: 28 }[k], 5, .32);
    render3d(c, () => fn(f, andando, bica, t), CAM_BICHO);
}]));

// ======================= construcoes =======================
function predioFF(c, cfg) {
    const par = cfg.parede;
    sombra(c, 8, -6, 64, 16, .3);
    render3d(c, () => {
        m3caixa(104, 3, 74, '#b4a284', 0, true);
        m3caixa(84, 42, 56, par, 3);
        for (const [x, z] of [[-42, 28], [42, 28], [42, -28], [-42, -28]]) { m3push(); m3mov(x, 3, z); m3caixa(4.5, 43, 4.5, esc3(par, .45)); m3pop(); }
        m3push(); m3mov(0, 3, 28.3); m3caixa(21, 28, 1.6, '#e8e0d0'); m3caixa(17, 25, 2.4, '#7a4520'); m3pop();
        for (const x of [-26, 26]) { m3push(); m3mov(x, 15, 28.3); m3caixa(18, 16, 1.6, '#f4f0e8'); m3caixa(14, 12, 2.4, '#5aa8e0', 2); m3pop(); }
        m3push(); m3mov(42.3, 15, 0); m3caixa(1.6, 16, 18, '#f4f0e8'); m3caixa(2.4, 12, 14, '#5aa8e0', 2); m3pop();
        m3tel(98, 70, 28, cfg.telhado, 45, esc3(par, .1));
        if (cfg.chamine) { m3push(); m3mov(22, 56, -10); m3caixa(10, 22, 10, '#b0583a'); m3caixa(13, 3, 13, '#7a3020', 22); m3pop(); }
        if (cfg.toldo) for (let i = 0; i < 6; i++) { m3push(); m3mov(-35 + i * 14, 36, 33); m3rx(.55); m3caixa(14, 1.4, 12, i % 2 ? '#ffffff' : '#d8302a'); m3pop(); }
    }, CAM_PADRAO);
    const [sx, sy] = proj3d(0, 54, 30, CAM_PADRAO);
    circ(c, sx, sy, 11); c.fillStyle = '#5a3410'; c.fill();
    circ(c, sx, sy, 9.5); c.fillStyle = '#fff4d6'; c.fill();
    c.drawImage(iconeCv(cfg.sai), sx - 9, sy - 9, 18, 18);
}
function loteVazioDes(c) {
    sombra(c, 6, -6, 58, 16, .15);
    render3d(c, () => {
        m3caixa(100, 2, 66, '#b08a52', 0, true);
        for (const [x, z] of [[-46, -28], [0, -30], [46, -28], [46, 28], [0, 30], [-46, 28]]) { m3push(); m3mov(x, 0, z); m3caixa(3, 14, 3, '#9a6a38'); m3pop(); }
        for (const [x, z, w] of [[-30, 14, 24], [-28, 6, 20]]) { m3push(); m3mov(x, 2, z); m3caixa(w, 4, 6, '#c8a060'); m3pop(); }
        m3push(); m3mov(24, 2, 10); m3caixa(10, 8, 10, '#a8743a'); m3pop();
    }, CAM_PADRAO);
}
function pocoDes(c, cheio) {
    sombra(c, 6, -2, 48, 12, .28);
    render3d(c, () => {
        m3caixa(90, 2, 40, '#c49a5c', 0, true);
        m3cil(26, 26, 28, 10, '#a49c8c');
        m3push(); m3mov(0, 28, 0); m3cil(28, 28, 4, 10, '#8c8478'); m3pop();
        m3push(); m3mov(0, 31.6, 0); m3cil(22, 22, .6, 10, cheio ? '#3c8ad0' : '#2a2218'); m3pop();
        for (const x of [-25, 25]) { m3push(); m3mov(x, 31, 0); m3caixa(5, 46, 5, '#8a5a2b'); m3pop(); }
        m3push(); m3mov(-27, 64, 0); m3rz(-Math.PI / 2); m3cil(2.6, 2.6, 54, 6, '#6e4520'); m3pop();
        m3push(); m3mov(5, 44, 0); m3cil(5, 6, 8, 7, '#9aa4ad', '#6a7480'); m3pop();
        m3tel(76, 42, 20, '#c84a30', 76, '#a8402a');
    }, CAM_FRENTE);
    const a = proj3d(5, 64, 0, CAM_FRENTE), b = proj3d(5, 52, 0, CAM_FRENTE);
    c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineWidth = 1; c.strokeStyle = '#4a3a2a'; c.stroke();
}
// deposito: galpao de palha; os produtos ficam na prateleira e no piso (desenhados pelo jogo)
const ARMAZEM_PAINEL = (() => {
    const p1 = proj3d(0, 37, -14, CAM_FRENTE), p2 = proj3d(0, 7, 6, CAM_FRENTE);
    return { x: -78, w: 156, linhas: [p1[1], p2[1]] };
})();
function armazemDes(c) {
    sombra(c, 6, -4, 114, 16, .3);
    render3d(c, () => {
        m3caixa(196, 7, 62, '#c08848');
        m3push(); m3mov(0, 7, -27); m3caixa(176, 74, 4, '#7a4a24'); m3pop();
        for (let i = -3; i <= 3; i++) { m3push(); m3mov(i * 25, 7, -24.8); m3caixa(1.2, 74, .6, '#5e3818'); m3pop(); }
        m3push(); m3mov(0, 34, -16); m3caixa(170, 3, 16, '#b07a3e'); m3pop();
        for (const x of [-60, 0, 60]) { m3push(); m3mov(x, 7, -16); m3caixa(3, 27, 3, '#6a3e1c'); m3pop(); }
        for (const [x, z] of [[-92, 27], [92, 27], [-84, -27], [84, -27]]) { m3push(); m3mov(x, 7, z); m3cil(4, 4, 86, 6, '#9a6a38'); m3pop(); }
        m3tel(226, 90, 32, '#d8b048', 92, '#c49a38');
        m3push(); m3mov(0, 106, 30); m3rx(-.55); m3caixa(92, 18, 2.4, '#e8c488'); m3pop();
    }, CAM_FRENTE);
    const [tx, ty] = proj3d(0, 112, 31, CAM_FRENTE);
    texto(c, 'DEPÓSITO', tx, ty, 11, '#7a3a10', '#fff4d0');
}
function garagemDes(c) {
    sombra(c, 0, -2, 74, 12, .2);
    render3d(c, () => {
        m3caixa(150, 2, 50, '#a89a84', 0, true);
        for (const [x, z] of [[-66, 20], [66, 20], [-66, -20], [66, -20]]) { m3push(); m3mov(x, 0, z); m3caixa(5, 70, 5, '#8a5a2b'); m3pop(); }
        m3push(); m3mov(0, 72, 0); m3rx(-.22); m3caixa(152, 3.5, 60, '#5f9a3a'); m3pop();
    }, CAM_FRENTE);
}
function caminhaoLado(c, t, carregado) {
    const s = m3img('cam' + (carregado ? 1 : 0), 140, 100, 66, 84, g => {
        sombra(g, 0, 0, 60, 9, .32);
        render3d(g, () => {
            m3push(); m3mov(4, 8, 0); m3caixa(106, 5, 30, '#333333'); m3pop();
            m3push(); m3mov(-40, 13, 0); m3caixa(28, 30, 30, '#f2c21a'); m3pop();
            m3push(); m3mov(-53, 13, 0); m3caixa(12, 16, 28, '#f2c21a'); m3pop();
            m3push(); m3mov(-40, 30, 15.2); m3caixa(20, 10, 1, '#8ccdf0'); m3pop();
            m3push(); m3mov(-54.2, 30, 0); m3caixa(1, 10, 24, '#8ccdf0'); m3pop();
            m3push(); m3mov(-59.3, 19, 9); m3caixa(1, 4, 5, '#fff6a0'); m3pop();
            m3push(); m3mov(18, 13, 0); m3caixa(70, 3, 32, '#b07a3e'); m3pop();
            for (const z of [-15.5, 15.5]) { m3push(); m3mov(18, 16, z); m3caixa(70, 14, 1.4, '#c08848'); m3pop(); }
            m3push(); m3mov(53, 16, 0); m3caixa(1.4, 14, 32, '#c08848'); m3pop();
            if (carregado) for (const [x, y, z] of [[2, 16, -6], [20, 16, -6], [38, 16, -6], [10, 16, 7], [28, 16, 7], [12, 28, 0]]) { m3push(); m3mov(x, y, z); m3caixa(15, 12, 12, '#d8a868'); m3pop(); }
            for (const x of [-40, 18, 40]) for (const z of [15, -15]) { m3push(); m3mov(x, 9, z); m3rx(Math.PI / 2); m3cil(9, 9, 4 * Math.sign(z), 8, '#262626', '#9a9a9a'); m3pop(); }
        }, CAM_LADO);
        const [lx, ly] = proj3d(18, 23, 16, CAM_LADO);
        texto(g, 'LUCAS', lx, ly, 7, '#fff4c0', '#5a2a08');
    });
    m3desenha(c, s);
}
function hangarDes(c) {
    sombra(c, 0, -2, 76, 12, .2);
    render3d(c, () => {
        m3push(); m3mov(30, 0, 0); m3caixa(150, 1.5, 30, '#7a7a7a', 0, true); m3pop();
        for (let x = -30; x < 100; x += 24) { m3push(); m3mov(x, 1.6, 0); m3caixa(10, .5, 2.5, '#f4f4f4', 0, true); m3pop(); }
        m3push(); m3mov(-34, 0, -10); m3arco(36, 46, 8, '#8aa880', '#2e3a2c'); m3pop();
        m3push(); m3mov(34, 0, -14); m3caixa(3, 56, 3, '#888888'); m3mov(0, 50, 0); m3caixa(14, 6, 2, '#ff8a1a'); m3pop();
    }, CAM_FRENTE);
}
function aviaoDes(c, t) {
    const s = m3img('aviao', 120, 80, 56, 58, g => {
        sombra(g, 0, 0, 44, 7, .25);
        render3d(g, () => {
            m3push(); m3mov(-32, 18, 0); m3rz(-Math.PI / 2); m3cil(9, 5.5, 68, 8, '#5cb82e'); m3pop();
            m3push(); m3mov(-32, 18, 0); m3rz(Math.PI / 2); m3cil(9, 4, 7, 8, '#e8322c'); m3pop();
            m3push(); m3mov(-12, 25, 0); m3caixa(12, 6, 10, '#8ccdf0'); m3pop();
            m3push(); m3mov(-12, 9, 0); m3caixa(16, 2, 80, '#f2c21a'); m3pop();
            m3push(); m3mov(-12, 34, 0); m3caixa(16, 2, 80, '#f2c21a'); m3pop();
            for (const z of [-30, 30]) { m3push(); m3mov(-12, 10, z); m3caixa(1.6, 24, 1.6, '#6a4a2a'); m3pop(); }
            m3push(); m3mov(32, 18, 0); m3caixa(9, 18, 2, '#f2c21a'); m3pop();
            m3push(); m3mov(33, 18, 0); m3caixa(9, 1.6, 30, '#f2c21a'); m3pop();
            for (const z of [-9, 9]) { m3push(); m3mov(-14, 4, z); m3rx(Math.PI / 2); m3cil(4, 4, 2 * Math.sign(z), 6, '#262626'); m3pop(); m3push(); m3mov(-14, 4, z); m3caixa(1.4, 6, 1.4, '#555555'); m3pop(); }
        }, CAM_LADO);
    });
    m3desenha(c, s);
    const [hx, hy] = proj3d(-40, 18, 0, CAM_LADO);
    const h = Math.abs(Math.sin(t * 40)) * 15 + 3;
    c.beginPath(); c.ellipse(hx, hy, 2.2, h, 0, 0, TAU); c.fillStyle = 'rgba(70,70,70,.5)'; c.fill();
}
function trofeuDes(c) {
    sombra(c, 24, 44, 14, 3, .3);
    c.save(); c.translate(24, 44);
    render3d(c, () => {
        m3caixa(20, 6, 14, '#6e4220');
        m3push(); m3mov(0, 6, 0); m3cil(3, 2.4, 8, 6, '#e0a810'); m3pop();
        m3push(); m3mov(0, 14, 0); m3cil(6, 14, 18, 9, '#f2c21a', '#c89a10'); m3pop();
        for (const x of [-15, 15]) { m3push(); m3mov(x, 24, 0); m3caixa(3, 10, 3, '#e0b010'); m3pop(); }
    }, CAM_ICONE);
    c.restore();
}

// ======================= produtos (icones 48x48) =======================
function icone3d(c, fn, y = 40, cam = CAM_ICONE) { c.save(); c.translate(24, y); render3d(c, fn, cam); c.restore(); }
Object.assign(ICONES, {
    ovo: c => { sombra(c, 24, 41, 12, 3, .3); icone3d(c, () => { m3mov(0, 15, 0); m3esf(10, 14, 10, '#f4e8d0', 5, 8); }); },
    maionese: c => { sombra(c, 24, 42, 13, 4, .3); icone3d(c, () => { m3cil(11, 11, 22, 9, '#fffbea'); m3push(); m3mov(0, 6, 0); m3cil(11.3, 11.3, 9, 9, '#f2c21a'); m3pop(); m3push(); m3mov(0, 22, 0); m3cil(11.6, 11.6, 6, 9, '#2f6db0'); m3pop(); m3push(); m3mov(0, 10.5, 10.6); m3esf(3, 3.6, .8, '#fff4d0', 3, 6); m3pop(); }, 41); },
    sanduiche: c => { sombra(c, 24, 41, 17, 4, .3); icone3d(c, () => { m3ry(.3); m3caixa(30, 5, 20, '#d89848'); m3caixa(33, 1.8, 23, '#5cb82e', 5); m3caixa(29, 2.6, 19, '#e8848a', 6.8); m3caixa(29, 1.4, 19, '#fff4c0', 9.4); m3caixa(30, 6, 20, '#e8b060', 10.8); m3push(); m3mov(-6, 17, 3); m3esf(1.2, .6, 1.2, '#fff8e0', 2, 4); m3mov(10, 0, -4); m3esf(1.2, .6, 1.2, '#fff8e0', 2, 4); m3pop(); }, 36); },
    carne: c => { sombra(c, 24, 40, 17, 4, .3); icone3d(c, () => { m3esc(1.3); m3push(); m3mov(-2, 7, 0); m3esf(14, 7, 10, '#c83a30', 3, 8); m3pop(); m3push(); m3mov(-3, 13, 0); m3esf(9, 2, 6, '#f0a090', 2, 6); m3pop(); m3push(); m3mov(8, 7, 0); m3rz(-Math.PI / 2); m3cil(2.4, 2.4, 12, 6, '#f6eee0'); m3mov(0, 12, 0); m3esf(3.4, 3.4, 3.4, '#f6eee0', 2, 5); m3pop(); }, 38); },
    linguica: c => { sombra(c, 24, 40, 16, 4, .3); icone3d(c, () => { for (const [x, a] of [[-14, .3], [-1, -.2], [12, .25]]) { m3push(); m3mov(x, 6, 0); m3ry(a); m3rz(-Math.PI / 2); m3mov(0, -6, 0); m3cil(4.5, 4.5, 12, 7, '#b8502e'); m3pop(); } }, 36); },
    leite: c => { sombra(c, 24, 43, 10, 3, .3); icone3d(c, () => { m3cil(8, 8, 20, 8, '#f6f6f6'); m3push(); m3mov(0, 8, 0); m3cil(8.3, 8.3, 7, 8, '#3a7bd5'); m3pop(); m3push(); m3mov(0, 20, 0); m3cil(8, 4, 6, 8, '#f0f0f0'); m3mov(0, 6, 0); m3cil(4.4, 4.4, 4, 8, '#2f6db0'); m3pop(); }, 42); },
    queijo: c => {
        sombra(c, 24, 42, 16, 4, .3);
        icone3d(c, () => {
            const P = [[-16, 0, 10], [16, 0, 10], [10, 0, -12]], H = 14, cor = '#f2c63a';
            m3face(P.map(([x, , z]) => [x, H, z]), '#fadc68'); m3face(P, cor);
            for (let i = 0; i < 3; i++) { const a = P[i], b = P[(i + 1) % 3]; m3face([a, b, [b[0], H, b[2]], [a[0], H, a[2]]], cor); }
            for (const [x, y] of [[-8, 5], [3, 9], [9, 4]]) { m3push(); m3mov(x, y, 10.3); m3cil(2.2, 2.2, .3, 6, '#c88a10'); m3pop(); }
        });
    },
    pizza: c => { sombra(c, 24, 40, 18, 4, .3); icone3d(c, () => { m3cil(17, 17, 3, 10, '#e0a050'); m3push(); m3mov(0, 3, 0); m3cil(14.5, 14.5, .8, 10, '#e8c050'); m3pop(); for (const [x, z] of [[-6, -5], [6, -6], [0, 5], [-9, 4], [9, 4], [1, -1]]) { m3push(); m3mov(x, 4, z); m3cil(2.6, 2.6, 1, 6, '#c0302a'); m3pop(); } }, 34); },
    pena: c => { sombra(c, 24, 42, 12, 3, .25); icone3d(c, () => { m3mov(0, 20, 0); m3rz(-.5); m3esf(5, 17, 1.6, '#f4f4f8', 4, 7); m3push(); m3mov(0, -20, 0); m3cil(.9, .9, 34, 4, '#8a96a0'); m3pop(); }); },
    travesseiro: c => { sombra(c, 24, 40, 18, 4, .3); icone3d(c, () => { m3mov(0, 9, 0); m3esf(21, 8, 15, '#eef2ff', 3, 6); m3push(); m3mov(-6, 5, 5); m3esf(2, 1, 2, '#ff9cc4', 2, 4); m3pop(); }, 36); },
    urso: c => { icone3d(c, () => { m3mov(0, 12, 0); m3esf(12, 11, 10, '#8a5630', 3, 7); m3push(); m3mov(-8, 10, 0); m3esf(4, 4, 3, '#7a4a26', 2, 5); m3pop(); m3push(); m3mov(8, 10, 0); m3esf(4, 4, 3, '#7a4a26', 2, 5); m3pop(); m3push(); m3mov(0, -3, 9); m3esf(5, 4, 3, '#dcb488', 2, 5); m3pop(); }, 34); jaulaDes2(c); },
    cesta: c => {
        sombra(c, 24, 42, 18, 4, .3);
        icone3d(c, () => {
            m3cil(13, 17, 13, 10, '#b07a3e', '#8a5a2b');
            for (const y of [4, 8]) { m3push(); m3mov(0, y, 0); m3cil(15.5 + y * .2, 15.5 + y * .2, 1.4, 10, '#8a5a2b'); m3pop(); }
            for (const [x, y, z] of [[-7, 14, 4], [6, 14, 5], [0, 15, -4], [-1, 18, 6], [9, 16, -3], [-9, 16, -4]]) {
                m3push(); m3mov(x, y, z); m3esf(5, 4.6, 5, '#d8281e', 3, 6); m3mov(0, 4.6, 0); m3caixa(.8, 2, .8, '#5a3a1a'); m3pop();
            }
            for (const [x, y, z] of [[-3, 21, 7], [8, 20, 1]]) { m3push(); m3mov(x, y, z); m3rz(.6); m3esf(3, .8, 1.6, '#4caf32', 2, 4); m3pop(); }
            for (let i = 0; i <= 6; i++) { const a = i / 6 * Math.PI; m3push(); m3mov(Math.cos(a) * 15, 13 + Math.sin(a) * 17, -1); m3rz(a); m3caixa(2.4, 5.4, 2.4, '#9a6430', -2.7); m3pop(); }
        }, 40);
    },
    agua: c => { icone3d(c, () => { m3mov(0, 12, 0); m3esf(11, 11, 11, '#3c9ae8', 4, 8); m3push(); m3mov(0, 6, 0); m3cil(8, 0, 16, 8, '#3c9ae8'); m3pop(); }, 38); },
    grama: c => { c.save(); c.translate(24, 40); c.scale(2.2, 2.2); tufoDes(c, 3); c.restore(); },
    moeda: c => {
        icone3d(c, () => { m3mov(0, 18, 0); m3rx(Math.PI / 2 - .25); m3cil(17, 17, 5, 12, '#d8a018', '#f6cc38'); }, 42, CAM_FRENTE);
        texto(c, '$', 24, 25, 18, '#fff4b0', '#a86c00');
    },
    estrela: c => { icone3d(c, () => { m3mov(0, 20, 0); m3ry(.4); m3estrela(21, 9, 7, '#f6c020'); }, 44, CAM_FRENTE); },
    poco: c => { c.save(); c.translate(24, 46); c.scale(.42, .42); pocoDes(c, true); c.restore(); },
    armazem: c => { c.save(); c.translate(24, 44); c.scale(.2, .2); armazemDes(c); c.restore(); },
    caminhao: c => { c.save(); c.translate(26, 38); c.scale(.36, .36); caminhaoLado(c, 0, true); c.restore(); },
    aviao: c => { c.save(); c.translate(26, 34); c.scale(.5, .5); aviaoDes(c, 0); c.restore(); },
    taca: c => trofeuDes(c),
    gaiola: c => { c.save(); c.translate(24, 44); c.scale(.55, .55); ANIMAL_DES.urso(c, 0, false, 0); jaulaDes(c, 1); c.restore(); },
    mascote: c => { c.save(); c.translate(24, 42); c.scale(1.45, 1.45); ANIMAL_DES.galinha(c, 0, false, false); c.restore(); },
});
function jaulaDes2(c) {
    for (let x = 9; x <= 39; x += 6) { c.beginPath(); c.moveTo(x, 6); c.lineTo(x, 44); c.lineWidth = 3; c.strokeStyle = '#6a7480'; c.stroke(); c.lineWidth = 1.4; c.strokeStyle = '#c8d0d8'; c.stroke(); }
}
// medalhas 3d (disco + fitinha)
function medalha3d(c, cor) {
    poli(c, [16, 4, 22, 4, 26, 22, 20, 22], '#3a7bd5', 0);
    poli(c, [32, 4, 26, 4, 22, 22, 28, 22], '#e8322c', 0);
    icone3d(c, () => { m3mov(0, 12, 0); m3rx(Math.PI / 2 - .2); m3cil(13, 13, 4, 12, esc3(cor, .25), cor); }, 44, CAM_FRENTE);
    estrela(c, 24, 31, 6, 2.6, 5, mix(cor, .35), 0);
}
ICONES.ouro = c => medalha3d(c, '#f2c21a');
ICONES.prata = c => medalha3d(c, '#d0d6dc');
ICONES.bronze = c => medalha3d(c, '#cc8448');

// icone de bicho ou fabrica (botoes e janelas)
const ICONE_ESCALA_ANIMAL = { cavalo: [.68, 28, 44], galinha: [1.45, 26, 42], vaca: [.82, 26, 42], porco: [1.15, 25, 41], avestruz: [.62, 27, 45], gato: [1.35, 26, 40], cachorro: [1.1, 27, 42], urso: [.72, 28, 42] };
function desenharIconeObjeto(c, tipo, sub) {
    c.save();
    if (tipo === 'predio') { c.translate(23, 44); c.scale(.36, .36); predioFF(c, PREDIOS[sub], sub); }
    else { const [s, x, y] = ICONE_ESCALA_ANIMAL[sub]; c.translate(x, y); c.scale(s, s); ANIMAL_DES[sub](c, 0, false, false); }
    c.restore();
}

// presentes semanais do cavalo giratorio
Object.assign(ICONES, {
    feno: c => {
        sombra(c, 24, 42, 19, 4, .3);
        icone3d(c, () => {
            m3caixa(34, 20, 22, '#e8c050');
            for (const x of [-9, 9]) { m3push(); m3mov(x, -.2, 0); m3caixa(2.6, 20.6, 22.6, '#b84a2a'); m3pop(); }
            for (const [x, z] of [[-14, 11.4], [-4, 11.4], [5, 11.4], [13, 11.4]]) { m3push(); m3mov(x, 4, z); m3caixa(1.2, 12, .4, '#c89a30'); m3pop(); }
            for (const [x, y, z, a] of [[-10, 20, 4, .4], [6, 20, -3, -.5], [12, 20, 6, .9]]) { m3push(); m3mov(x, y, z); m3rz(a); m3caixa(1, 6, 1, '#f2d878'); m3pop(); }
        }, 38);
    },
    cenouras: c => {
        sombra(c, 24, 42, 18, 4, .3);
        icone3d(c, () => {
            for (const [x, z, a] of [[-4, 4, .15], [5, -3, -.1]]) {
                m3push(); m3mov(x, 6, z); m3ry(a); m3rz(Math.PI / 2 + .05); m3mov(0, -16, 0);
                m3cil(1, 5.5, 30, 8, '#f07a1a');
                m3push(); m3mov(0, 30, 0); for (const r of [-.4, 0, .4]) { m3push(); m3rz(r); m3cil(1.4, 0, 12, 4, '#4caf32'); m3pop(); } m3pop();
                m3pop();
            }
            for (const [x, z] of [[10, 8], [15, 4]]) { m3push(); m3mov(x, 0, z); m3cil(5, 5, 2.4, 9, '#f08a2a', '#ffb060'); m3pop(); }
        }, 36);
    },
    pelucia: c => {
        // cavalinho de pelucia deitado: marrom-claro, focinho branco, crina e rabo loiros
        sombra(c, 24, 42, 19, 4, .3);
        icone3d(c, () => {
            m3esc(.82);
            const pelo = '#c8915a', loiro = '#f2d6a0', branco = '#f8f2e8';
            m3push(); m3mov(4, 9, 0); m3esf(14, 8, 8.5, pelo, 3, 7); m3pop();
            for (const [x, z, a] of [[-8, 6, Math.PI / 2], [-6, -6, Math.PI / 2 + .3], [10, 7, Math.PI / 2 - .2]]) {
                m3push(); m3mov(x, 3, z); m3rz(a); m3cil(3, 2.8, 11, 6, pelo); m3mov(0, 11, 0); m3esf(3, 2.4, 3, branco, 2, 5); m3pop();
            }
            m3push(); m3mov(17, 10, 0); m3rz(-2.1); m3cil(3.6, 1.2, 14, 5, loiro); m3pop();
            m3push(); m3mov(-8, 13, 0); m3rz(.45); m3cil(5.2, 4.2, 13, 6, pelo); m3pop();
            m3push(); m3mov(-11, 18, 0); m3rz(.45); m3caixa(3, 13, 3.2, loiro); m3pop();
            m3push(); m3mov(-17, 25, 0); m3rz(.85); m3esf(8.5, 4.8, 4.6, pelo, 3, 6); m3pop();
            m3push(); m3mov(-22, 20.5, 0); m3rz(.85); m3esf(4.2, 3.2, 4.8, branco, 2, 5); m3pop();
            m3push(); m3mov(-15, 30, 0); m3esf(3, 2, 4, loiro, 2, 4); m3pop();
            for (const z of [-2.6, 2.6]) cone(-12, 30, z, .1, 1.8, 5, pelo, 4);
            for (const z of [-4.4, 4.4]) { m3push(); m3mov(-17, 26, z); m3caixa(1.6, 1.8, 1, '#151515'); m3pop(); }
        }, 41);
    },
    biscoitos: c => {
        sombra(c, 24, 41, 19, 4, .3);
        icone3d(c, () => {
            m3cil(20, 20, 1.6, 12, '#f4f4f4', '#ffffff');
            for (const [x, z, a] of [[-6, -6, .3], [5, -2, -.4], [-2, 7, .1]]) {
                m3push(); m3mov(x, 1.6, z); m3ry(a);
                m3caixa(16, 2.6, 6, '#c8925a');
                m3push(); m3mov(-1, 2.6, 0); m3caixa(13, 1.2, 5, '#f08a2a'); m3pop();
                m3push(); m3mov(-8, 1.4, 0); m3esf(2.6, 1.6, 2.8, '#5cb82e', 2, 5); m3pop();
                m3pop();
            }
        }, 38);
    },
});
