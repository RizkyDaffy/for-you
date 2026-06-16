var M = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(M || {});
var v = Symbol.asyncIterator, pr = Symbol.hasInstance, R = Symbol.isConcatSpreadable, C = Symbol.iterator, dr = Symbol.match, gr = Symbol.matchAll, yr = Symbol.replace, Nr = Symbol.search, br = Symbol.species, vr = Symbol.split, Cr = Symbol.toPrimitive, P = Symbol.toStringTag, Ar = Symbol.unscopables;
var tt = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, ve = { [v]: 0, [pr]: 1, [R]: 2, [C]: 3, [dr]: 4, [gr]: 5, [yr]: 6, [Nr]: 7, [br]: 8, [vr]: 9, [Cr]: 10, [P]: 11, [Ar]: 12 }, ot = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, o = void 0;
var Ce = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
function c(e, r, t, n, a, s, i, u, l, g, S, d) {
  return { t: e, i: r, s: t, c: n, m: a, p: s, e: i, a: u, f: l, b: g, o: S, l: d };
}
function B(e) {
  return c(2, o, e, o, o, o, o, o, o, o, o, o);
}
var H = B(2), J = B(3), Ae = B(1), Ee = B(0), it = B(4), ut = B(5), lt = B(6), ct = B(7);
function mn(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return o;
  }
}
function y(e) {
  let r = "", t = 0, n;
  for (let a = 0, s = e.length; a < s; a++) n = mn(e[a]), n && (r += e.slice(t, a) + n, t = a + 1);
  return t === 0 ? r = e : r += e.slice(t), r;
}
var L = "__SEROVAL_REFS__", le = "$R", Ie = `self.${le}`;
function dn(e) {
  return e == null ? `${Ie}=${Ie}||[]` : `(${Ie}=${Ie}||{})["${y(e)}"]=[]`;
}
var Er = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
function Ir(e) {
  return Er.has(e);
}
function ft(e) {
  if (Ir(e)) return Er.get(e);
  throw new Re(e);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, L, { value: U, configurable: true, writable: false, enumerable: false }) : typeof window != "undefined" ? Object.defineProperty(window, L, { value: U, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, L, { value: U, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, L, { value: U, configurable: true, writable: false, enumerable: false });
function xe(e) {
  return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function Nn(e) {
  let r = Ce[xe(e)];
  return e.name !== r ? { name: e.name } : e.constructor.name !== r ? { name: e.constructor.name } : {};
}
function Z(e, r) {
  let t = Nn(e), n = Object.getOwnPropertyNames(e);
  for (let a = 0, s = n.length, i; a < s; a++) i = n[a], i !== "name" && i !== "message" && (i === "stack" ? r & 4 && (t = t || {}, t[i] = e[i]) : (t = t || {}, t[i] = e[i]));
  return t;
}
function Te(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Oe(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return ut;
    case Number.NEGATIVE_INFINITY:
      return lt;
  }
  return e !== e ? ct : Object.is(e, -0) ? it : c(0, o, e, o, o, o, o, o, o, o, o, o);
}
function $(e) {
  return c(1, o, y(e), o, o, o, o, o, o, o, o, o);
}
function we(e) {
  return c(3, o, "" + e, o, o, o, o, o, o, o, o, o);
}
function pt(e) {
  return c(4, e, o, o, o, o, o, o, o, o, o, o);
}
function he(e, r) {
  let t = r.valueOf();
  return c(5, e, t !== t ? "" : r.toISOString(), o, o, o, o, o, o, o, o, o);
}
function ze(e, r) {
  return c(6, e, o, y(r.source), r.flags, o, o, o, o, o, o, o);
}
function dt(e, r) {
  return c(17, e, ve[r], o, o, o, o, o, o, o, o, o);
}
function gt(e, r) {
  return c(18, e, y(ft(r)), o, o, o, o, o, o, o, o, o);
}
function ce(e, r, t) {
  return c(25, e, t, y(r), o, o, o, o, o, o, o, o);
}
function _e(e, r, t) {
  return c(9, e, o, o, o, o, o, t, o, o, Te(r), o);
}
function ke(e, r) {
  return c(21, e, o, o, o, o, o, o, r, o, o, o);
}
function De(e, r, t) {
  return c(15, e, o, r.constructor.name, o, o, o, o, t, r.byteOffset, o, r.length);
}
function Fe(e, r, t) {
  return c(16, e, o, r.constructor.name, o, o, o, o, t, r.byteOffset, o, r.byteLength);
}
function Be(e, r, t) {
  return c(20, e, o, o, o, o, o, o, t, r.byteOffset, o, r.byteLength);
}
function Ve(e, r, t) {
  return c(13, e, xe(r), o, y(r.message), t, o, o, o, o, o, o);
}
function Me(e, r, t) {
  return c(14, e, xe(r), o, y(r.message), t, o, o, o, o, o, o);
}
function Le(e, r) {
  return c(7, e, o, o, o, o, o, r, o, o, o, o);
}
function Ue(e, r) {
  return c(28, o, o, o, o, o, o, [e, r], o, o, o, o);
}
function je(e, r) {
  return c(30, o, o, o, o, o, o, [e, r], o, o, o, o);
}
function Ye(e, r, t) {
  return c(31, e, o, o, o, o, o, t, r, o, o, o);
}
function qe(e, r) {
  return c(32, e, o, o, o, o, o, o, r, o, o, o);
}
function We(e, r) {
  return c(33, e, o, o, o, o, o, o, r, o, o, o);
}
function Ge(e, r) {
  return c(34, e, o, o, o, o, o, o, r, o, o, o);
}
function Ke(e, r, t, n) {
  return c(35, e, t, o, o, o, o, r, o, o, o, n);
}
var bn = { parsing: 1, serialization: 2, deserialization: 3 };
function vn(e) {
  return `Seroval Error (step: ${bn[e]})`;
}
var Cn = (e, r) => vn(e), fe = class extends Error {
  constructor(t, n) {
    super(Cn(t));
    this.cause = n;
  }
}, z = class extends fe {
  constructor(r) {
    super("parsing", r);
  }
};
function _(e) {
  return `Seroval Error (specific: ${e})`;
}
var x = class extends Error {
  constructor(t) {
    super(_(1));
    this.value = t;
  }
}, h = class extends Error {
  constructor(r) {
    super(_(2));
  }
}, X = class extends Error {
  constructor(r) {
    super(_(3));
  }
}, Re = class extends Error {
  constructor(t) {
    super(_(5));
    this.value = t;
  }
}, Q = class extends Error {
  constructor(r) {
    super(_(9));
  }
};
var j = class {
  constructor(r, t) {
    this.value = r;
    this.replacement = t;
  }
};
var ee = () => {
  let e = { p: 0, s: 0, f: 0 };
  return e.p = new Promise((r, t) => {
    e.s = r, e.f = t;
  }), e;
}, An = (e, r) => {
  e.s(r), e.p.s = 1, e.p.v = r;
}, En = (e, r) => {
  e.f(r), e.p.s = 2, e.p.v = r;
}, Nt = ee.toString(), bt = An.toString(), vt = En.toString(), Pr = () => {
  let e = [], r = [], t = true, n = false, a = 0, s = (l, g, S) => {
    for (S = 0; S < a; S++) r[S] && r[S][g](l);
  }, i = (l, g, S, d) => {
    for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
  }, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
    t && (r[g] = r[a], r[a--] = void 0);
  });
  return { __SEROVAL_STREAM__: true, on: (l) => u(l), next: (l) => {
    t && (e.push(l), s(l, "next"));
  }, throw: (l) => {
    t && (e.push(l), s(l, "throw"), t = false, n = false, r.length = 0);
  }, return: (l) => {
    t && (e.push(l), s(l, "return"), t = false, n = true, r.length = 0);
  } };
}, Ct = Pr.toString(), xr = (e) => (r) => () => {
  let t = 0, n = { [e]: () => n, next: () => {
    if (t > r.d) return { done: true, value: void 0 };
    let a = t++, s = r.v[a];
    if (a === r.t) throw s;
    return { done: a === r.d, value: s };
  } };
  return n;
}, At = xr.toString(), Tr = (e, r) => (t) => () => {
  let n = 0, a = -1, s = false, i = [], u = [], l = (S = 0, d = u.length) => {
    for (; S < d; S++) u[S].s({ done: true, value: void 0 });
  };
  t.on({ next: (S) => {
    let d = u.shift();
    d && d.s({ done: false, value: S }), i.push(S);
  }, throw: (S) => {
    let d = u.shift();
    d && d.f(S), l(), a = i.length, s = true, i.push(S);
  }, return: (S) => {
    let d = u.shift();
    d && d.s({ done: true, value: S }), l(), a = i.length, i.push(S);
  } });
  let g = { [e]: () => g, next: () => {
    if (a === -1) {
      let G = n++;
      if (G >= i.length) {
        let rt = r();
        return u.push(rt), rt.p;
      }
      return { done: false, value: i[G] };
    }
    if (n > a) return { done: true, value: void 0 };
    let S = n++, d = i[S];
    if (S !== a) return { done: false, value: d };
    if (s) throw d;
    return { done: true, value: d };
  } };
  return g;
}, Et = Tr.toString(), Or = (e) => {
  let r = atob(e), t = r.length, n = new Uint8Array(t);
  for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
  return n.buffer;
}, It = Or.toString();
function Ze(e) {
  return "__SEROVAL_SEQUENCE__" in e;
}
function wr(e, r, t) {
  return { __SEROVAL_SEQUENCE__: true, v: e, t: r, d: t };
}
function $e(e) {
  let r = [], t = -1, n = -1, a = e[C]();
  for (; ; ) try {
    let s = a.next();
    if (r.push(s.value), s.done) {
      n = r.length - 1;
      break;
    }
  } catch (s) {
    t = r.length, r.push(s);
  }
  return wr(r, t, n);
}
var Pt = {}, xt = {};
var Tt = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} }, Ot = { 0: "[]", 1: Nt, 2: bt, 3: vt, 4: Ct, 5: It };
function Xe(e) {
  return "__SEROVAL_STREAM__" in e;
}
function re() {
  return Pr();
}
function Qe(e) {
  let r = re(), t = e[v]();
  async function n() {
    try {
      let a = await t.next();
      a.done ? r.return(a.value) : (r.next(a.value), await n());
    } catch (a) {
      r.throw(a);
    }
  }
  return n().catch(() => {
  }), r;
}
function me(e, r) {
  return { plugins: r.plugins, mode: e, marked: /* @__PURE__ */ new Set(), features: 63 ^ (r.disabledFeatures || 0), refs: r.refs || /* @__PURE__ */ new Map(), depthLimit: r.depthLimit || 1e3 };
}
function pe(e, r) {
  e.marked.add(r);
}
function zr(e, r) {
  let t = e.refs.size;
  return e.refs.set(r, t), t;
}
function er(e, r) {
  let t = e.refs.get(r);
  return t != null ? (pe(e, t), { type: 1, value: pt(t) }) : { type: 0, value: zr(e, r) };
}
function Y(e, r) {
  let t = er(e, r);
  return t.type === 1 ? t : Ir(r) ? { type: 2, value: gt(t.value, r) } : t;
}
function I(e, r) {
  let t = Y(e, r);
  if (t.type !== 0) return t.value;
  if (r in ve) return dt(t.value, r);
  throw new x(r);
}
function k(e, r) {
  let t = er(e, Tt[r]);
  return t.type === 1 ? t.value : c(26, t.value, r, o, o, o, o, o, o, o, o, o);
}
function rr(e) {
  let r = er(e, Pt);
  return r.type === 1 ? r.value : c(27, r.value, o, o, o, o, o, o, I(e, C), o, o, o);
}
function tr(e) {
  let r = er(e, xt);
  return r.type === 1 ? r.value : c(29, r.value, o, o, o, o, o, [k(e, 1), I(e, v)], o, o, o, o);
}
function nr(e, r, t, n) {
  return c(t ? 11 : 10, e, o, o, o, n, o, o, o, o, Te(r), o);
}
function or(e, r, t, n) {
  return c(8, r, o, o, o, o, { k: t, v: n }, o, k(e, 0), o, o, o);
}
function zt(e, r, t) {
  return c(22, r, t, o, o, o, o, o, k(e, 1), o, o, o);
}
function ar(e, r, t) {
  let n = new Uint8Array(t), a = "";
  for (let s = 0, i = n.length; s < i; s++) a += String.fromCharCode(n[s]);
  return c(19, r, y(btoa(a)), o, o, o, o, o, k(e, 5), o, o, o);
}
var oe = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(oe || {});
function ai(e) {
  return e;
}
function Dt(e, r) {
  for (let t = 0, n = r.length; t < n; t++) {
    let a = r[t];
    e.has(a) || (e.add(a), a.extends && Dt(e, a.extends));
  }
}
function A(e) {
  if (e) {
    let r = /* @__PURE__ */ new Set();
    return Dt(r, e), [...r];
  }
}
var Ro = () => T, Po = Ro.toString(), Gt = /=>/.test(Po);
function ir(e, r) {
  return Gt ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
}
function Kt(e, r) {
  return Gt ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
}
var Zt = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_", Ht = Zt.length, $t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_", Jt = $t.length;
function Vr(e) {
  let r = e % Ht, t = Zt[r];
  for (e = (e - r) / Ht; e > 0; ) r = e % Jt, t += $t[r], e = (e - r) / Jt;
  return t;
}
var xo = /^[$A-Z_][0-9A-Z_$]*$/i;
function Mr(e) {
  let r = e[0];
  return (r === "$" || r === "_" || r >= "A" && r <= "Z" || r >= "a" && r <= "z") && xo.test(e);
}
function ye(e) {
  switch (e.t) {
    case 0:
      return e.s + "=" + e.v;
    case 2:
      return e.s + ".set(" + e.k + "," + e.v + ")";
    case 1:
      return e.s + ".add(" + e.v + ")";
    case 3:
      return e.s + ".delete(" + e.k + ")";
  }
}
function To(e) {
  let r = [], t = e[0];
  for (let n = 1, a = e.length, s, i = t; n < a; n++) s = e[n], s.t === 0 && s.v === i.v ? t = { t: 0, s: s.s, k: o, v: ye(t) } : s.t === 2 && s.s === i.s ? t = { t: 2, s: ye(t), k: s.k, v: s.v } : s.t === 1 && s.s === i.s ? t = { t: 1, s: ye(t), k: o, v: s.v } : s.t === 3 && s.s === i.s ? t = { t: 3, s: ye(t), k: s.k, v: o } : (r.push(t), t = s), i = s;
  return r.push(t), r;
}
function on(e) {
  if (e.length) {
    let r = "", t = To(e);
    for (let n = 0, a = t.length; n < a; n++) r += ye(t[n]) + ",";
    return r;
  }
  return o;
}
var Oo = "Object.create(null)", wo = "new Set", ho = "new Map", zo = "Promise.resolve", _o = "Promise.reject", ko = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: o };
function an(e, r) {
  return { mode: e, plugins: r.plugins, features: r.features, marked: new Set(r.markedRefs), stack: [], flags: [], assignments: [] };
}
function lr(e) {
  return { mode: 2, base: an(2, e), state: e, child: o };
}
var Lr = class {
  constructor(r) {
    this._p = r;
  }
  serialize(r) {
    return f(this._p, r);
  }
};
function Fo(e, r) {
  let t = e.valid.get(r);
  t == null && (t = e.valid.size, e.valid.set(r, t));
  let n = e.vars[t];
  return n == null && (n = Vr(t), e.vars[t] = n), n;
}
function Bo(e) {
  return le + "[" + e + "]";
}
function m(e, r) {
  return e.mode === 1 ? Fo(e.state, r) : Bo(r);
}
function w(e, r) {
  e.marked.add(r);
}
function Ur(e, r) {
  return e.marked.has(r);
}
function Yr(e, r, t) {
  r !== 0 && (w(e.base, t), e.base.flags.push({ type: r, value: m(e, t) }));
}
function Vo(e) {
  let r = "";
  for (let t = 0, n = e.flags, a = n.length; t < a; t++) {
    let s = n[t];
    r += ko[s.type] + "(" + s.value + "),";
  }
  return r;
}
function sn(e) {
  let r = on(e.assignments), t = Vo(e);
  return r ? t ? r + t : r : t;
}
function qr(e, r, t) {
  e.assignments.push({ t: 0, s: r, k: o, v: t });
}
function Mo(e, r, t) {
  e.base.assignments.push({ t: 1, s: m(e, r), k: o, v: t });
}
function ge(e, r, t, n) {
  e.base.assignments.push({ t: 2, s: m(e, r), k: t, v: n });
}
function Xt(e, r, t) {
  e.base.assignments.push({ t: 3, s: m(e, r), k: t, v: o });
}
function Ne(e, r, t, n) {
  qr(e.base, m(e, r) + "[" + t + "]", n);
}
function jr(e, r, t, n) {
  qr(e.base, m(e, r) + "." + t, n);
}
function Lo(e, r, t, n) {
  qr(e.base, m(e, r) + ".v[" + t + "]", n);
}
function F(e, r) {
  return r.t === 4 && e.stack.includes(r.i);
}
function ae(e, r, t) {
  return e.mode === 1 && !Ur(e.base, r) ? t : m(e, r) + "=" + t;
}
function Uo(e) {
  return L + '.get("' + e.s + '")';
}
function Qt(e, r, t, n) {
  return t ? F(e.base, t) ? (w(e.base, r), Ne(e, r, n, m(e, t.i)), "") : f(e, t) : "";
}
function jo(e, r) {
  let t = r.i, n = r.a, a = n.length;
  if (a > 0) {
    e.base.stack.push(t);
    let s = Qt(e, t, n[0], 0), i = s === "";
    for (let u = 1, l; u < a; u++) l = Qt(e, t, n[u], u), s += "," + l, i = l === "";
    return e.base.stack.pop(), Yr(e, r.o, r.i), "[" + s + (i ? ",]" : "]");
  }
  return "[]";
}
function en(e, r, t, n) {
  if (typeof t == "string") {
    let a = Number(t), s = a >= 0 && a.toString() === t || Mr(t);
    if (F(e.base, n)) {
      let i = m(e, n.i);
      return w(e.base, r.i), s && a !== a ? jr(e, r.i, t, i) : Ne(e, r.i, s ? t : '"' + t + '"', i), "";
    }
    return (s ? t : '"' + t + '"') + ":" + f(e, n);
  }
  return "[" + f(e, t) + "]:" + f(e, n);
}
function un(e, r, t) {
  let n = t.k, a = n.length;
  if (a > 0) {
    let s = t.v;
    e.base.stack.push(r.i);
    let i = en(e, r, n[0], s[0]);
    for (let u = 1, l = i; u < a; u++) l = en(e, r, n[u], s[u]), i += (l && i && ",") + l;
    return e.base.stack.pop(), "{" + i + "}";
  }
  return "{}";
}
function Yo(e, r) {
  return Yr(e, r.o, r.i), un(e, r, r.p);
}
function qo(e, r, t, n) {
  let a = un(e, r, t);
  return a !== "{}" ? "Object.assign(" + n + "," + a + ")" : n;
}
function Wo(e, r, t, n, a) {
  let s = e.base, i = f(e, a), u = Number(n), l = u >= 0 && u.toString() === n || Mr(n);
  if (F(s, a)) l && u !== u ? jr(e, r.i, n, i) : Ne(e, r.i, l ? n : '"' + n + '"', i);
  else {
    let g = s.assignments;
    s.assignments = t, l && u !== u ? jr(e, r.i, n, i) : Ne(e, r.i, l ? n : '"' + n + '"', i), s.assignments = g;
  }
}
function Go(e, r, t, n, a) {
  if (typeof n == "string") Wo(e, r, t, n, a);
  else {
    let s = e.base, i = s.stack;
    s.stack = [];
    let u = f(e, a);
    s.stack = i;
    let l = s.assignments;
    s.assignments = t, Ne(e, r.i, f(e, n), u), s.assignments = l;
  }
}
function Ko(e, r, t) {
  let n = t.k, a = n.length;
  if (a > 0) {
    let s = [], i = t.v;
    e.base.stack.push(r.i);
    for (let u = 0; u < a; u++) Go(e, r, s, n[u], i[u]);
    return e.base.stack.pop(), on(s);
  }
  return o;
}
function Wr(e, r, t) {
  if (r.p) {
    let n = e.base;
    if (n.features & 8) t = qo(e, r, r.p, t);
    else {
      w(n, r.i);
      let a = Ko(e, r, r.p);
      if (a) return "(" + ae(e, r.i, t) + "," + a + m(e, r.i) + ")";
    }
  }
  return t;
}
function Ho(e, r) {
  return Yr(e, r.o, r.i), Wr(e, r, Oo);
}
function Jo(e) {
  return 'new Date("' + e.s + '")';
}
function Zo(e, r) {
  if (e.base.features & 32) return "/" + r.c + "/" + r.m;
  throw new h(r);
}
function rn(e, r, t) {
  let n = e.base;
  return F(n, t) ? (w(n, r), Mo(e, r, m(e, t.i)), "") : f(e, t);
}
function $o(e, r) {
  let t = wo, n = r.a, a = n.length, s = r.i;
  if (a > 0) {
    e.base.stack.push(s);
    let i = rn(e, s, n[0]);
    for (let u = 1, l = i; u < a; u++) l = rn(e, s, n[u]), i += (l && i && ",") + l;
    e.base.stack.pop(), i && (t += "([" + i + "])");
  }
  return t;
}
function tn(e, r, t, n, a) {
  let s = e.base;
  if (F(s, t)) {
    let i = m(e, t.i);
    if (w(s, r), F(s, n)) {
      let l = m(e, n.i);
      return ge(e, r, i, l), "";
    }
    if (n.t !== 4 && n.i != null && Ur(s, n.i)) {
      let l = "(" + f(e, n) + ",[" + a + "," + a + "])";
      return ge(e, r, i, m(e, n.i)), Xt(e, r, a), l;
    }
    let u = s.stack;
    return s.stack = [], ge(e, r, i, f(e, n)), s.stack = u, "";
  }
  if (F(s, n)) {
    let i = m(e, n.i);
    if (w(s, r), t.t !== 4 && t.i != null && Ur(s, t.i)) {
      let l = "(" + f(e, t) + ",[" + a + "," + a + "])";
      return ge(e, r, m(e, t.i), i), Xt(e, r, a), l;
    }
    let u = s.stack;
    return s.stack = [], ge(e, r, f(e, t), i), s.stack = u, "";
  }
  return "[" + f(e, t) + "," + f(e, n) + "]";
}
function Xo(e, r) {
  let t = ho, n = r.e.k, a = n.length, s = r.i, i = r.f, u = m(e, i.i), l = e.base;
  if (a > 0) {
    let g = r.e.v;
    l.stack.push(s);
    let S = tn(e, s, n[0], g[0], u);
    for (let d = 1, G = S; d < a; d++) G = tn(e, s, n[d], g[d], u), S += (G && S && ",") + G;
    l.stack.pop(), S && (t += "([" + S + "])");
  }
  return i.t === 26 && (w(l, i.i), t = "(" + f(e, i) + "," + t + ")"), t;
}
function Qo(e, r) {
  return q(e, r.f) + '("' + r.s + '")';
}
function ea(e, r) {
  return "new " + r.c + "(" + f(e, r.f) + "," + r.b + "," + r.l + ")";
}
function ra(e, r) {
  return "new DataView(" + f(e, r.f) + "," + r.b + "," + r.l + ")";
}
function ta(e, r) {
  let t = r.i;
  e.base.stack.push(t);
  let n = Wr(e, r, 'new AggregateError([],"' + r.m + '")');
  return e.base.stack.pop(), n;
}
function na(e, r) {
  return Wr(e, r, "new " + Ce[r.s] + '("' + r.m + '")');
}
function oa(e, r) {
  let t, n = r.f, a = r.i, s = r.s ? zo : _o, i = e.base;
  if (F(i, n)) {
    let u = m(e, n.i);
    t = s + (r.s ? "().then(" + ir([], u) + ")" : "().catch(" + Kt([], "throw " + u) + ")");
  } else {
    i.stack.push(a);
    let u = f(e, n);
    i.stack.pop(), t = s + "(" + u + ")";
  }
  return t;
}
function aa(e, r) {
  return "Object(" + f(e, r.f) + ")";
}
function q(e, r) {
  let t = f(e, r);
  return r.t === 4 ? t : "(" + t + ")";
}
function sa(e, r) {
  if (e.mode === 1) throw new h(r);
  return "(" + ae(e, r.s, q(e, r.f) + "()") + ").p";
}
function ia(e, r) {
  if (e.mode === 1) throw new h(r);
  return q(e, r.a[0]) + "(" + m(e, r.i) + "," + f(e, r.a[1]) + ")";
}
function ua(e, r) {
  if (e.mode === 1) throw new h(r);
  return q(e, r.a[0]) + "(" + m(e, r.i) + "," + f(e, r.a[1]) + ")";
}
function la(e, r) {
  let t = e.base.plugins;
  if (t) for (let n = 0, a = t.length; n < a; n++) {
    let s = t[n];
    if (s.tag === r.c) return e.child == null && (e.child = new Lr(e)), s.serialize(r.s, e.child, { id: r.i });
  }
  throw new X(r.c);
}
function ca(e, r) {
  let t = "", n = false;
  return r.f.t !== 4 && (w(e.base, r.f.i), t = "(" + f(e, r.f) + ",", n = true), t += ae(e, r.i, "(" + At + ")(" + m(e, r.f.i) + ")"), n && (t += ")"), t;
}
function fa(e, r) {
  return q(e, r.a[0]) + "(" + f(e, r.a[1]) + ")";
}
function Sa(e, r) {
  let t = r.a[0], n = r.a[1], a = e.base, s = "";
  t.t !== 4 && (w(a, t.i), s += "(" + f(e, t)), n.t !== 4 && (w(a, n.i), s += (s ? "," : "(") + f(e, n)), s && (s += ",");
  let i = ae(e, r.i, "(" + Et + ")(" + m(e, n.i) + "," + m(e, t.i) + ")");
  return s ? s + i + ")" : i;
}
function ma(e, r) {
  return q(e, r.a[0]) + "(" + f(e, r.a[1]) + ")";
}
function pa(e, r) {
  let t = ae(e, r.i, q(e, r.f) + "()"), n = r.a.length;
  if (n) {
    let a = f(e, r.a[0]);
    for (let s = 1; s < n; s++) a += "," + f(e, r.a[s]);
    return "(" + t + "," + a + "," + m(e, r.i) + ")";
  }
  return t;
}
function da(e, r) {
  return m(e, r.i) + ".next(" + f(e, r.f) + ")";
}
function ga(e, r) {
  return m(e, r.i) + ".throw(" + f(e, r.f) + ")";
}
function ya(e, r) {
  return m(e, r.i) + ".return(" + f(e, r.f) + ")";
}
function nn(e, r, t, n) {
  let a = e.base;
  return F(a, n) ? (w(a, r), Lo(e, r, t, m(e, n.i)), "") : f(e, n);
}
function Na(e, r) {
  let t = r.a, n = t.length, a = r.i;
  if (n > 0) {
    e.base.stack.push(a);
    let s = nn(e, a, 0, t[0]);
    for (let i = 1, u = s; i < n; i++) u = nn(e, a, i, t[i]), s += (u && s && ",") + u;
    if (e.base.stack.pop(), s) return "{__SEROVAL_SEQUENCE__:!0,v:[" + s + "],t:" + r.s + ",d:" + r.l + "}";
  }
  return "{__SEROVAL_SEQUENCE__:!0,v:[],t:-1,d:0}";
}
function ba(e, r) {
  switch (r.t) {
    case 17:
      return tt[r.s];
    case 18:
      return Uo(r);
    case 9:
      return jo(e, r);
    case 10:
      return Yo(e, r);
    case 11:
      return Ho(e, r);
    case 5:
      return Jo(r);
    case 6:
      return Zo(e, r);
    case 7:
      return $o(e, r);
    case 8:
      return Xo(e, r);
    case 19:
      return Qo(e, r);
    case 16:
    case 15:
      return ea(e, r);
    case 20:
      return ra(e, r);
    case 14:
      return ta(e, r);
    case 13:
      return na(e, r);
    case 12:
      return oa(e, r);
    case 21:
      return aa(e, r);
    case 22:
      return sa(e, r);
    case 25:
      return la(e, r);
    case 26:
      return Ot[r.s];
    case 35:
      return Na(e, r);
    default:
      throw new h(r);
  }
}
function f(e, r) {
  switch (r.t) {
    case 2:
      return ot[r.s];
    case 0:
      return "" + r.s;
    case 1:
      return '"' + r.s + '"';
    case 3:
      return r.s + "n";
    case 4:
      return m(e, r.i);
    case 23:
      return ia(e, r);
    case 24:
      return ua(e, r);
    case 27:
      return ca(e, r);
    case 28:
      return fa(e, r);
    case 29:
      return Sa(e, r);
    case 30:
      return ma(e, r);
    case 31:
      return pa(e, r);
    case 32:
      return da(e, r);
    case 33:
      return ga(e, r);
    case 34:
      return ya(e, r);
    default:
      return ae(e, r.i, ba(e, r));
  }
}
function fr(e, r) {
  let t = f(e, r), n = r.i;
  if (n == null) return t;
  let a = sn(e.base), s = m(e, n), i = e.state.scopeId, u = i == null ? "" : le, l = a ? "(" + t + "," + a + s + ")" : t;
  if (u === "") return r.t === 10 && !a ? "(" + l + ")" : l;
  let g = i == null ? "()" : "(" + le + '["' + y(i) + '"])';
  return "(" + ir([u], l) + ")" + g;
}
var Kr = class {
  constructor(r, t) {
    this._p = r;
    this.depth = t;
  }
  parse(r) {
    return E(this._p, this.depth, r);
  }
}, Hr = class {
  constructor(r, t) {
    this._p = r;
    this.depth = t;
  }
  parse(r) {
    return E(this._p, this.depth, r);
  }
  parseWithError(r) {
    return W(this._p, this.depth, r);
  }
  isAlive() {
    return this._p.state.alive;
  }
  pushPendingState() {
    Qr(this._p);
  }
  popPendingState() {
    be(this._p);
  }
  onParse(r) {
    se(this._p, r);
  }
  onError(r) {
    $r(this._p, r);
  }
};
function va(e) {
  return { alive: true, pending: 0, initial: true, buffer: [], onParse: e.onParse, onError: e.onError, onDone: e.onDone };
}
function Jr(e) {
  return { type: 2, base: me(2, e), state: va(e) };
}
function Ca(e, r, t) {
  let n = [];
  for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = E(e, r, t[a]) : n[a] = 0;
  return n;
}
function Aa(e, r, t, n) {
  return _e(t, n, Ca(e, r, n));
}
function Zr(e, r, t) {
  let n = Object.entries(t), a = [], s = [];
  for (let i = 0, u = n.length; i < u; i++) a.push(y(n[i][0])), s.push(E(e, r, n[i][1]));
  return C in t && (a.push(I(e.base, C)), s.push(Ue(rr(e.base), E(e, r, $e(t))))), v in t && (a.push(I(e.base, v)), s.push(je(tr(e.base), E(e, r, e.type === 1 ? re() : Qe(t))))), P in t && (a.push(I(e.base, P)), s.push($(t[P]))), R in t && (a.push(I(e.base, R)), s.push(t[R] ? H : J)), { k: a, v: s };
}
function Gr(e, r, t, n, a) {
  return nr(t, n, a, Zr(e, r, n));
}
function Ea(e, r, t, n) {
  return ke(t, E(e, r, n.valueOf()));
}
function Ia(e, r, t, n) {
  return De(t, n, E(e, r, n.buffer));
}
function Ra(e, r, t, n) {
  return Fe(t, n, E(e, r, n.buffer));
}
function Pa(e, r, t, n) {
  return Be(t, n, E(e, r, n.buffer));
}
function ln(e, r, t, n) {
  let a = Z(n, e.base.features);
  return Ve(t, n, a ? Zr(e, r, a) : o);
}
function xa(e, r, t, n) {
  let a = Z(n, e.base.features);
  return Me(t, n, a ? Zr(e, r, a) : o);
}
function Ta(e, r, t, n) {
  let a = [], s = [];
  for (let [i, u] of n.entries()) a.push(E(e, r, i)), s.push(E(e, r, u));
  return or(e.base, t, a, s);
}
function Oa(e, r, t, n) {
  let a = [];
  for (let s of n.keys()) a.push(E(e, r, s));
  return Le(t, a);
}
function wa(e, r, t, n) {
  let a = Ye(t, k(e.base, 4), []);
  return e.type === 1 || (Qr(e), n.on({ next: (s) => {
    if (e.state.alive) {
      let i = W(e, r, s);
      i && se(e, qe(t, i));
    }
  }, throw: (s) => {
    if (e.state.alive) {
      let i = W(e, r, s);
      i && se(e, We(t, i));
    }
    be(e);
  }, return: (s) => {
    if (e.state.alive) {
      let i = W(e, r, s);
      i && se(e, Ge(t, i));
    }
    be(e);
  } })), a;
}
function ha(e, r, t) {
  if (this.state.alive) {
    let n = W(this, r, t);
    n && se(this, c(23, e, o, o, o, o, o, [k(this.base, 2), n], o, o, o, o)), be(this);
  }
}
function za(e, r, t) {
  if (this.state.alive) {
    let n = W(this, r, t);
    n && se(this, c(24, e, o, o, o, o, o, [k(this.base, 3), n], o, o, o, o));
  }
  be(this);
}
function _a(e, r, t, n) {
  let a = zr(e.base, {});
  return e.type === 2 && (Qr(e), n.then(ha.bind(e, a, r), za.bind(e, a, r))), zt(e.base, t, a);
}
function ka(e, r, t, n, a) {
  for (let s = 0, i = a.length; s < i; s++) {
    let u = a[s];
    if (u.parse.sync && u.test(n)) return ce(t, u.tag, u.parse.sync(n, new Kr(e, r), { id: t }));
  }
  return o;
}
function Da(e, r, t, n, a) {
  for (let s = 0, i = a.length; s < i; s++) {
    let u = a[s];
    if (u.parse.stream && u.test(n)) return ce(t, u.tag, u.parse.stream(n, new Hr(e, r), { id: t }));
  }
  return o;
}
function cn(e, r, t, n) {
  let a = e.base.plugins;
  return a ? e.type === 1 ? ka(e, r, t, n, a) : Da(e, r, t, n, a) : o;
}
function Fa(e, r, t, n) {
  let a = [];
  for (let s = 0, i = n.v.length; s < i; s++) a[s] = E(e, r, n.v[s]);
  return Ke(t, a, n.t, n.d);
}
function Ba(e, r, t, n, a) {
  switch (a) {
    case Object:
      return Gr(e, r, t, n, false);
    case o:
      return Gr(e, r, t, n, true);
    case Date:
      return he(t, n);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return ln(e, r, t, n);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Ea(e, r, t, n);
    case ArrayBuffer:
      return ar(e.base, t, n);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Ia(e, r, t, n);
    case DataView:
      return Pa(e, r, t, n);
    case Map:
      return Ta(e, r, t, n);
    case Set:
      return Oa(e, r, t, n);
  }
  if (a === Promise || n instanceof Promise) return _a(e, r, t, n);
  let s = e.base.features;
  if (s & 32 && a === RegExp) return ze(t, n);
  if (s & 16) switch (a) {
    case BigInt64Array:
    case BigUint64Array:
      return Ra(e, r, t, n);
  }
  if (s & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return xa(e, r, t, n);
  if (n instanceof Error) return ln(e, r, t, n);
  if (C in n || v in n) return Gr(e, r, t, n, !!a);
  throw new x(n);
}
function Va(e, r, t, n) {
  if (Array.isArray(n)) return Aa(e, r, t, n);
  if (Xe(n)) return wa(e, r, t, n);
  if (Ze(n)) return Fa(e, r, t, n);
  let a = n.constructor;
  if (a === j) return E(e, r, n.replacement);
  let s = cn(e, r, t, n);
  return s || Ba(e, r, t, n, a);
}
function Ma(e, r, t) {
  let n = Y(e.base, t);
  if (n.type !== 0) return n.value;
  let a = cn(e, r, n.value, t);
  if (a) return a;
  throw new x(t);
}
function E(e, r, t) {
  if (r >= e.base.depthLimit) throw new Q(e.base.depthLimit);
  switch (typeof t) {
    case "boolean":
      return t ? H : J;
    case "undefined":
      return Ae;
    case "string":
      return $(t);
    case "number":
      return Oe(t);
    case "bigint":
      return we(t);
    case "object": {
      if (t) {
        let n = Y(e.base, t);
        return n.type === 0 ? Va(e, r + 1, n.value, t) : n.value;
      }
      return Ee;
    }
    case "symbol":
      return I(e.base, t);
    case "function":
      return Ma(e, r, t);
    default:
      throw new x(t);
  }
}
function se(e, r) {
  e.state.initial ? e.state.buffer.push(r) : Xr(e, r, false);
}
function $r(e, r) {
  if (e.state.onError) e.state.onError(r);
  else throw r instanceof z ? r : new z(r);
}
function fn(e) {
  e.state.onDone && e.state.onDone();
}
function Xr(e, r, t) {
  try {
    e.state.onParse(r, t);
  } catch (n) {
    $r(e, n);
  }
}
function Qr(e) {
  e.state.pending++;
}
function be(e) {
  --e.state.pending <= 0 && fn(e);
}
function W(e, r, t) {
  try {
    return E(e, r, t);
  } catch (n) {
    return $r(e, n), o;
  }
}
function et(e, r) {
  let t = W(e, 0, r);
  t && (Xr(e, t, true), e.state.initial = false, La(e, e.state), e.state.pending <= 0 && Sr(e));
}
function La(e, r) {
  for (let t = 0, n = r.buffer.length; t < n; t++) Xr(e, r.buffer[t], false);
}
function Sr(e) {
  e.state.alive && (fn(e), e.state.alive = false);
}
function Sn(e, r) {
  let t = A(r.plugins), n = Jr({ plugins: t, refs: r.refs, disabledFeatures: r.disabledFeatures, onParse(a, s) {
    let i = lr({ plugins: t, features: n.base.features, scopeId: r.scopeId, markedRefs: n.base.marked }), u;
    try {
      u = fr(i, a);
    } catch (l) {
      r.onError && r.onError(l);
      return;
    }
    r.onSerialize(u, s);
  }, onError: r.onError, onDone: r.onDone });
  return et(n, e), Sr.bind(null, n);
}
export {
  Sn as S,
  ai as a,
  dn as d,
  re as r
};
