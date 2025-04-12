var ae = Object.defineProperty;
var ce = (e, t, n) => t in e ? ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => ce(e, typeof t != "symbol" ? t + "" : t, n);
function M() {
}
function v(e, t) {
  for (const n in t) e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Y(e) {
  return e();
}
function V() {
  return /* @__PURE__ */ Object.create(null);
}
function q(e) {
  e.forEach(Y);
}
function Z(e) {
  return typeof e == "function";
}
function w(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function de(e) {
  return Object.keys(e).length === 0;
}
function x(e, t, n, l) {
  if (e) {
    const i = $(e, t, n, l);
    return e[0](i);
  }
}
function $(e, t, n, l) {
  return e[1] && l ? v(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function ee(e, t, n, l) {
  if (e[2] && l) {
    const i = e[2](l(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let d = 0; d < s; d += 1)
        o[d] = t.dirty[d] | i[d];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function te(e, t, n, l, i, o) {
  if (i) {
    const s = $(t, n, l, o);
    e.p(s, i);
  }
}
function ne(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function le(e) {
  const t = {};
  for (const n in e) n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function P(e, t) {
  const n = {};
  t = new Set(t);
  for (const l in e) !t.has(l) && l[0] !== "$" && (n[l] = e[l]);
  return n;
}
function _e(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function A(e, t) {
  e.appendChild(t);
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function z(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function j(e) {
  return document.createElement(e);
}
function ie(e) {
  return document.createTextNode(e);
}
function F() {
  return ie(" ");
}
function re(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const he = ["width", "height"];
function W(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const l in t)
    t[l] == null ? e.removeAttribute(l) : l === "style" ? e.style.cssText = t[l] : l === "__value" ? e.value = e[l] = t[l] : n[l] && n[l].set && he.indexOf(l) === -1 ? e[l] = t[l] : g(e, l, t[l]);
}
function be(e) {
  return Array.from(e.childNodes);
}
function me(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
let R;
function O(e) {
  R = e;
}
function ge(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const k = [], G = [];
let E = [];
const H = [], ye = /* @__PURE__ */ Promise.resolve();
let T = !1;
function ve() {
  T || (T = !0, ye.then(ue));
}
function D(e) {
  E.push(e);
}
const L = /* @__PURE__ */ new Set();
let p = 0;
function ue() {
  if (p !== 0)
    return;
  const e = R;
  do {
    try {
      for (; p < k.length; ) {
        const t = k[p];
        p++, O(t), pe(t.$$);
      }
    } catch (t) {
      throw k.length = 0, p = 0, t;
    }
    for (O(null), k.length = 0, p = 0; G.length; ) G.pop()();
    for (let t = 0; t < E.length; t += 1) {
      const n = E[t];
      L.has(n) || (L.add(n), n());
    }
    E.length = 0;
  } while (k.length);
  for (; H.length; )
    H.pop()();
  T = !1, L.clear(), O(e);
}
function pe(e) {
  if (e.fragment !== null) {
    e.update(), q(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(D);
  }
}
function ke(e) {
  const t = [], n = [];
  E.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), E = t;
}
const N = /* @__PURE__ */ new Set();
let y;
function Ee() {
  y = {
    r: 0,
    c: [],
    p: y
    // parent group
  };
}
function Se() {
  y.r || q(y.c), y = y.p;
}
function S(e, t) {
  e && e.i && (N.delete(e), e.i(t));
}
function C(e, t, n, l) {
  if (e && e.o) {
    if (N.has(e)) return;
    N.add(e), y.c.push(() => {
      N.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else l && l();
}
function oe(e, t) {
  const n = {}, l = {}, i = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const s = e[o], d = t[o];
    if (d) {
      for (const f in s)
        f in d || (l[f] = 1);
      for (const f in d)
        i[f] || (n[f] = d[f], i[f] = 1);
      e[o] = d;
    } else
      for (const f in s)
        i[f] = 1;
  }
  for (const s in l)
    s in n || (n[s] = void 0);
  return n;
}
function Oe(e, t, n) {
  const { fragment: l, after_update: i } = e.$$;
  l && l.m(t, n), D(() => {
    const o = e.$$.on_mount.map(Y).filter(Z);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : q(o), e.$$.on_mount = [];
  }), i.forEach(D);
}
function je(e, t) {
  const n = e.$$;
  n.fragment !== null && (ke(n.after_update), q(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qe(e, t) {
  e.$$.dirty[0] === -1 && (k.push(e), ve(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function se(e, t, n, l, i, o, s = null, d = [-1]) {
  const f = R;
  O(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: M,
    not_equal: i,
    bound: V(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: V(),
    dirty: d,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (a, m, ...b) => {
    const _ = b.length ? b[0] : m;
    return u.ctx && i(u.ctx[a], u.ctx[a] = _) && (!u.skip_bound && u.bound[a] && u.bound[a](_), h && qe(e, a)), m;
  }) : [], u.update(), h = !0, q(u.before_update), u.fragment = l ? l(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = be(t.target);
      u.fragment && u.fragment.l(a), a.forEach(z);
    } else
      u.fragment && u.fragment.c();
    t.intro && S(e.$$.fragment), Oe(e, t.target, t.anchor), ue();
  }
  O(f);
}
class fe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    je(this, 1), this.$destroy = M;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Z(n))
      return M;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !de(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ze = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ze);
function Ae(e) {
  let t, n, l, i;
  const o = (
    /*#slots*/
    e[8].default
  ), s = x(
    o,
    e,
    /*$$scope*/
    e[7],
    null
  );
  let d = [
    { type: (
      /*type*/
      e[0]
    ) },
    { class: (
      /*classes*/
      e[2]
    ) },
    { disabled: (
      /*disabled*/
      e[1]
    ) },
    /*$$restProps*/
    e[3]
  ], f = {};
  for (let u = 0; u < d.length; u += 1)
    f = v(f, d[u]);
  return {
    c() {
      t = j("button"), s && s.c(), W(t, f);
    },
    m(u, h) {
      I(u, t, h), s && s.m(t, null), t.autofocus && t.focus(), n = !0, l || (i = re(
        t,
        "click",
        /*click_handler*/
        e[9]
      ), l = !0);
    },
    p(u, [h]) {
      s && s.p && (!n || h & /*$$scope*/
      128) && te(
        s,
        o,
        u,
        /*$$scope*/
        u[7],
        n ? ee(
          o,
          /*$$scope*/
          u[7],
          h,
          null
        ) : ne(
          /*$$scope*/
          u[7]
        ),
        null
      ), W(t, f = oe(d, [
        (!n || h & /*type*/
        1) && { type: (
          /*type*/
          u[0]
        ) },
        (!n || h & /*classes*/
        4) && { class: (
          /*classes*/
          u[2]
        ) },
        (!n || h & /*disabled*/
        2) && { disabled: (
          /*disabled*/
          u[1]
        ) },
        h & /*$$restProps*/
        8 && /*$$restProps*/
        u[3]
      ]));
    },
    i(u) {
      n || (S(s, u), n = !0);
    },
    o(u) {
      C(s, u), n = !1;
    },
    d(u) {
      u && z(t), s && s.d(u), l = !1, i();
    }
  };
}
const Ne = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
function Pe(e, t, n) {
  let l;
  const i = ["type", "variant", "size", "disabled", "fullWidth"];
  let o = P(t, i), { $$slots: s = {}, $$scope: d } = t, { type: f = "button" } = t, { variant: u = "primary" } = t, { size: h = "md" } = t, { disabled: a = !1 } = t, { fullWidth: m = !1 } = t;
  const b = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
  }, _ = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };
  function c(r) {
    ge.call(this, e, r);
  }
  return e.$$set = (r) => {
    t = v(v({}, t), le(r)), n(3, o = P(t, i)), "type" in r && n(0, f = r.type), "variant" in r && n(4, u = r.variant), "size" in r && n(5, h = r.size), "disabled" in r && n(1, a = r.disabled), "fullWidth" in r && n(6, m = r.fullWidth), "$$scope" in r && n(7, d = r.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*variant, size, fullWidth*/
    112 && n(2, l = `${Ne} ${b[u]} ${_[h]} ${m ? "w-full" : ""}`);
  }, [
    f,
    a,
    l,
    o,
    u,
    h,
    m,
    d,
    s,
    c
  ];
}
class Le extends fe {
  constructor(t) {
    super(), se(this, t, Pe, Ae, w, {
      type: 0,
      variant: 4,
      size: 5,
      disabled: 1,
      fullWidth: 6
    });
  }
}
const We = (e) => ({}), J = (e) => ({});
function K(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].label
  ), i = x(
    l,
    e,
    /*$$scope*/
    e[10],
    J
  );
  return {
    c() {
      t = j("label"), i && i.c(), g(
        t,
        "for",
        /*name*/
        e[6]
      ), g(t, "class", "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
    },
    m(o, s) {
      I(o, t, s), i && i.m(t, null), n = !0;
    },
    p(o, s) {
      i && i.p && (!n || s & /*$$scope*/
      1024) && te(
        i,
        l,
        o,
        /*$$scope*/
        o[10],
        n ? ee(
          l,
          /*$$scope*/
          o[10],
          s,
          We
        ) : ne(
          /*$$scope*/
          o[10]
        ),
        J
      ), (!n || s & /*name*/
      64) && g(
        t,
        "for",
        /*name*/
        o[6]
      );
    },
    i(o) {
      n || (S(i, o), n = !0);
    },
    o(o) {
      C(i, o), n = !1;
    },
    d(o) {
      o && z(t), i && i.d(o);
    }
  };
}
function Q(e) {
  let t, n, l;
  return {
    c() {
      t = j("p"), n = ie(
        /*error*/
        e[4]
      ), g(t, "class", "text-sm text-red-500"), g(t, "id", l = /*name*/
      e[6] + "-error");
    },
    m(i, o) {
      I(i, t, o), A(t, n);
    },
    p(i, o) {
      o & /*error*/
      16 && me(
        n,
        /*error*/
        i[4]
      ), o & /*name*/
      64 && l !== (l = /*name*/
      i[6] + "-error") && g(t, "id", l);
    },
    d(i) {
      i && z(t);
    }
  };
}
function Ce(e) {
  let t, n, l, i, o, s, d, f, u, h, a = (
    /*$$slots*/
    e[8].label && K(e)
  ), m = [
    { type: (
      /*type*/
      e[1]
    ) },
    { name: (
      /*name*/
      e[6]
    ) },
    { value: (
      /*value*/
      e[0]
    ) },
    { placeholder: (
      /*placeholder*/
      e[2]
    ) },
    { disabled: (
      /*disabled*/
      e[3]
    ) },
    { required: (
      /*required*/
      e[5]
    ) },
    {
      class: i = `${X} ${/*error*/
      e[4] ? "border-red-500 focus-visible:ring-red-500" : ""}`
    },
    {
      "aria-invalid": o = !!/*error*/
      e[4]
    },
    {
      "aria-describedby": s = /*error*/
      e[4] ? `${/*name*/
      e[6]}-error` : void 0
    },
    /*$$restProps*/
    e[9]
  ], b = {};
  for (let c = 0; c < m.length; c += 1)
    b = v(b, m[c]);
  let _ = (
    /*error*/
    e[4] && Q(e)
  );
  return {
    c() {
      t = j("div"), a && a.c(), n = F(), l = j("input"), d = F(), _ && _.c(), W(l, b), g(t, "class", "grid w-full max-w-sm gap-1.5");
    },
    m(c, r) {
      I(c, t, r), a && a.m(t, null), A(t, n), A(t, l), "value" in b && (l.value = b.value), l.autofocus && l.focus(), A(t, d), _ && _.m(t, null), f = !0, u || (h = re(
        l,
        "input",
        /*handleInput*/
        e[7]
      ), u = !0);
    },
    p(c, [r]) {
      /*$$slots*/
      c[8].label ? a ? (a.p(c, r), r & /*$$slots*/
      256 && S(a, 1)) : (a = K(c), a.c(), S(a, 1), a.m(t, n)) : a && (Ee(), C(a, 1, 1, () => {
        a = null;
      }), Se()), W(l, b = oe(m, [
        (!f || r & /*type*/
        2) && { type: (
          /*type*/
          c[1]
        ) },
        (!f || r & /*name*/
        64) && { name: (
          /*name*/
          c[6]
        ) },
        (!f || r & /*value*/
        1 && l.value !== /*value*/
        c[0]) && { value: (
          /*value*/
          c[0]
        ) },
        (!f || r & /*placeholder*/
        4) && { placeholder: (
          /*placeholder*/
          c[2]
        ) },
        (!f || r & /*disabled*/
        8) && { disabled: (
          /*disabled*/
          c[3]
        ) },
        (!f || r & /*required*/
        32) && { required: (
          /*required*/
          c[5]
        ) },
        (!f || r & /*error*/
        16 && i !== (i = `${X} ${/*error*/
        c[4] ? "border-red-500 focus-visible:ring-red-500" : ""}`)) && { class: i },
        (!f || r & /*error*/
        16 && o !== (o = !!/*error*/
        c[4])) && { "aria-invalid": o },
        (!f || r & /*error, name*/
        80 && s !== (s = /*error*/
        c[4] ? `${/*name*/
        c[6]}-error` : void 0)) && {
          "aria-describedby": s
        },
        r & /*$$restProps*/
        512 && /*$$restProps*/
        c[9]
      ])), "value" in b && (l.value = b.value), /*error*/
      c[4] ? _ ? _.p(c, r) : (_ = Q(c), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null);
    },
    i(c) {
      f || (S(a), f = !0);
    },
    o(c) {
      C(a), f = !1;
    },
    d(c) {
      c && z(t), a && a.d(), _ && _.d(), u = !1, h();
    }
  };
}
const X = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
function Ie(e, t, n) {
  const l = ["type", "value", "placeholder", "disabled", "error", "required", "name"];
  let i = P(t, l), { $$slots: o = {}, $$scope: s } = t;
  const d = _e(o);
  let { type: f = "text" } = t, { value: u = "" } = t, { placeholder: h = "" } = t, { disabled: a = !1 } = t, { error: m = "" } = t, { required: b = !1 } = t, { name: _ = "" } = t;
  function c(r) {
    const U = r.target;
    n(0, u = f === "number" ? U.valueAsNumber.toString() : U.value);
  }
  return e.$$set = (r) => {
    t = v(v({}, t), le(r)), n(9, i = P(t, l)), "type" in r && n(1, f = r.type), "value" in r && n(0, u = r.value), "placeholder" in r && n(2, h = r.placeholder), "disabled" in r && n(3, a = r.disabled), "error" in r && n(4, m = r.error), "required" in r && n(5, b = r.required), "name" in r && n(6, _ = r.name), "$$scope" in r && n(10, s = r.$$scope);
  }, [
    u,
    f,
    h,
    a,
    m,
    b,
    _,
    c,
    d,
    i,
    s,
    o
  ];
}
class Me extends fe {
  constructor(t) {
    super(), se(this, t, Ie, Ce, w, {
      type: 1,
      value: 0,
      placeholder: 2,
      disabled: 3,
      error: 4,
      required: 5,
      name: 6
    });
  }
}
export {
  Le as SButton,
  Me as SInput
};
