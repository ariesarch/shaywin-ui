var he = Object.defineProperty;
var $e = (t, e, n) => e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var y = (t, e, n) => $e(t, typeof e != "symbol" ? e + "" : e, n);
import { createEventDispatcher as be } from "svelte";
function I() {
}
function k(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function X(t) {
  return t();
}
function J() {
  return /* @__PURE__ */ Object.create(null);
}
function L(t) {
  t.forEach(X);
}
function Y(t) {
  return typeof t == "function";
}
function Z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function _e(t) {
  return Object.keys(t).length === 0;
}
function ee(t, e, n, s) {
  if (t) {
    const r = te(t, e, n, s);
    return t[0](r);
  }
}
function te(t, e, n, s) {
  return t[1] && s ? k(n.ctx.slice(), t[1](s(e))) : n.ctx;
}
function ne(t, e, n, s) {
  if (t[2] && s) {
    const r = t[2](s(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const i = [], l = Math.max(e.dirty.length, r.length);
      for (let f = 0; f < l; f += 1)
        i[f] = e.dirty[f] | r[f];
      return i;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function se(t, e, n, s, r, i) {
  if (r) {
    const l = te(e, n, s, i);
    t.p(l, r);
  }
}
function ie(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let s = 0; s < n; s++)
      e[s] = -1;
    return e;
  }
  return -1;
}
function re(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function z(t, e) {
  const n = {};
  e = new Set(e);
  for (const s in t) !e.has(s) && s[0] !== "$" && (n[s] = t[s]);
  return n;
}
function me(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function P(t, e) {
  t.appendChild(e);
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function x(t) {
  return document.createElement(t);
}
function le(t) {
  return document.createTextNode(t);
}
function R() {
  return le(" ");
}
function oe(t, e, n, s) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const ge = ["width", "height"];
function w(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const s in e)
    e[s] == null ? t.removeAttribute(s) : s === "style" ? t.style.cssText = e[s] : s === "__value" ? t.value = t[s] = e[s] : n[s] && n[s].set && ge.indexOf(s) === -1 ? t[s] = e[s] : p(t, s, e[s]);
}
function ye(t) {
  return Array.from(t.childNodes);
}
function pe(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function ve(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let H;
function C(t) {
  H = t;
}
const O = [], V = [];
let j = [];
const U = [], ke = /* @__PURE__ */ Promise.resolve();
let T = !1;
function Ee() {
  T || (T = !0, ke.then(m));
}
function D(t) {
  j.push(t);
}
const M = /* @__PURE__ */ new Set();
let E = 0;
function m() {
  if (E !== 0)
    return;
  const t = H;
  do {
    try {
      for (; E < O.length; ) {
        const e = O[E];
        E++, C(e), Oe(e.$$);
      }
    } catch (e) {
      throw O.length = 0, E = 0, e;
    }
    for (C(null), O.length = 0, E = 0; V.length; ) V.pop()();
    for (let e = 0; e < j.length; e += 1) {
      const n = j[e];
      M.has(n) || (M.add(n), n());
    }
    j.length = 0;
  } while (O.length);
  for (; U.length; )
    U.pop()();
  T = !1, M.clear(), C(t);
}
function Oe(t) {
  if (t.fragment !== null) {
    t.update(), L(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(D);
  }
}
function je(t) {
  const e = [], n = [];
  j.forEach((s) => t.indexOf(s) === -1 ? e.push(s) : n.push(s)), n.forEach((s) => s()), j = e;
}
const q = /* @__PURE__ */ new Set();
let v;
function Se() {
  v = {
    r: 0,
    c: [],
    p: v
    // parent group
  };
}
function xe() {
  v.r || L(v.c), v = v.p;
}
function S(t, e) {
  t && t.i && (q.delete(t), t.i(e));
}
function W(t, e, n, s) {
  if (t && t.o) {
    if (q.has(t)) return;
    q.add(t), v.c.push(() => {
      q.delete(t), s && (n && t.d(1), s());
    }), t.o(e);
  } else s && s();
}
function ue(t, e) {
  const n = {}, s = {}, r = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const l = t[i], f = e[i];
    if (f) {
      for (const u in l)
        u in f || (s[u] = 1);
      for (const u in f)
        r[u] || (n[u] = f[u], r[u] = 1);
      t[i] = f;
    } else
      for (const u in l)
        r[u] = 1;
  }
  for (const l in s)
    l in n || (n[l] = void 0);
  return n;
}
function Ae(t, e, n) {
  const { fragment: s, after_update: r } = t.$$;
  s && s.m(e, n), D(() => {
    const i = t.$$.on_mount.map(X).filter(Y);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : L(i), t.$$.on_mount = [];
  }), r.forEach(D);
}
function Ce(t, e) {
  const n = t.$$;
  n.fragment !== null && (je(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Le(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), Ee(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function fe(t, e, n, s, r, i, l = null, f = [-1]) {
  const u = H;
  C(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: I,
    not_equal: r,
    bound: J(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: J(),
    dirty: f,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(o.root);
  let h = !1;
  if (o.ctx = n ? n(t, e.props || {}, (a, g, ...b) => {
    const $ = b.length ? b[0] : g;
    return o.ctx && r(o.ctx[a], o.ctx[a] = $) && (!o.skip_bound && o.bound[a] && o.bound[a]($), h && Le(t, a)), g;
  }) : [], o.update(), h = !0, L(o.before_update), o.fragment = s ? s(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = ye(e.target);
      o.fragment && o.fragment.l(a), a.forEach(A);
    } else
      o.fragment && o.fragment.c();
    e.intro && S(t.$$.fragment), Ae(t, e.target, e.anchor), m();
  }
  C(u);
}
let ce;
typeof HTMLElement == "function" && (ce = class extends HTMLElement {
  constructor(e, n, s) {
    super();
    /** The Svelte component constructor */
    y(this, "$$ctor");
    /** Slots */
    y(this, "$$s");
    /** The Svelte component instance */
    y(this, "$$c");
    /** Whether or not the custom element is connected */
    y(this, "$$cn", !1);
    /** Component props data */
    y(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    y(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    y(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    y(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    y(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const r = this.$$c.$on(e, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(e, n, s);
  }
  removeEventListener(e, n, s) {
    if (super.removeEventListener(e, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return () => {
          let l;
          return {
            c: function() {
              l = x("slot"), i !== "default" && p(l, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, h) {
              N(o, l, h);
            },
            d: function(o) {
              o && A(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = ve(this);
      for (const i of this.$$s)
        i in s && (n[i] = [e(i)]);
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = B(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const l = B(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const f = this.$$c.$on(i, l);
          this.$$l_u.set(l, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, s) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = B(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function B(t, e, n, s) {
  var i;
  const r = (i = n[t]) == null ? void 0 : i.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !n[t])
    return e;
  if (s === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function ae(t, e, n, s, r, i) {
  let l = class extends ce {
    constructor() {
      super(t, n, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((f) => {
    Object.defineProperty(l.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(u) {
        var o;
        u = B(f, u, e), this.$$d[f] = u, (o = this.$$c) == null || o.$set({ [f]: u });
      }
    });
  }), s.forEach((f) => {
    Object.defineProperty(l.prototype, f, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[f];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
class de {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ce(this, 1), this.$destroy = I;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Y(n))
      return I;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !_e(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ne = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ne);
function Pe(t) {
  let e, n, s, r;
  const i = (
    /*#slots*/
    t[9].default
  ), l = ee(
    i,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let f = [
    { type: (
      /*type*/
      t[0]
    ) },
    { class: (
      /*classes*/
      t[2]
    ) },
    { disabled: (
      /*disabled*/
      t[1]
    ) },
    /*$$restProps*/
    t[4]
  ], u = {};
  for (let o = 0; o < f.length; o += 1)
    u = k(u, f[o]);
  return {
    c() {
      e = x("button"), l && l.c(), w(e, u);
    },
    m(o, h) {
      N(o, e, h), l && l.m(e, null), e.autofocus && e.focus(), n = !0, s || (r = oe(
        e,
        "click",
        /*handleClick*/
        t[3]
      ), s = !0);
    },
    p(o, [h]) {
      l && l.p && (!n || h & /*$$scope*/
      256) && se(
        l,
        i,
        o,
        /*$$scope*/
        o[8],
        n ? ne(
          i,
          /*$$scope*/
          o[8],
          h,
          null
        ) : ie(
          /*$$scope*/
          o[8]
        ),
        null
      ), w(e, u = ue(f, [
        (!n || h & /*type*/
        1) && { type: (
          /*type*/
          o[0]
        ) },
        (!n || h & /*classes*/
        4) && { class: (
          /*classes*/
          o[2]
        ) },
        (!n || h & /*disabled*/
        2) && { disabled: (
          /*disabled*/
          o[1]
        ) },
        h & /*$$restProps*/
        16 && /*$$restProps*/
        o[4]
      ]));
    },
    i(o) {
      n || (S(l, o), n = !0);
    },
    o(o) {
      W(l, o), n = !1;
    },
    d(o) {
      o && A(e), l && l.d(o), s = !1, r();
    }
  };
}
const qe = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
function Be(t, e, n) {
  let s;
  const r = ["type", "variant", "size", "disabled", "fullWidth"];
  let i = z(e, r), { $$slots: l = {}, $$scope: f } = e, { type: u = "button" } = e, { variant: o = "primary" } = e, { size: h = "md" } = e, { disabled: a = !1 } = e, { fullWidth: g = !1 } = e;
  const b = be();
  function $() {
    b("click");
  }
  const d = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
  }, c = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };
  return t.$$set = (_) => {
    e = k(k({}, e), re(_)), n(4, i = z(e, r)), "type" in _ && n(0, u = _.type), "variant" in _ && n(5, o = _.variant), "size" in _ && n(6, h = _.size), "disabled" in _ && n(1, a = _.disabled), "fullWidth" in _ && n(7, g = _.fullWidth), "$$scope" in _ && n(8, f = _.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*variant, size, fullWidth*/
    224 && n(2, s = `${qe} ${d[o]} ${c[h]} ${g ? "w-full" : ""}`);
  }, [
    u,
    a,
    s,
    $,
    i,
    o,
    h,
    g,
    f,
    l
  ];
}
class ze extends de {
  constructor(e) {
    super(), fe(this, e, Be, Pe, Z, {
      type: 0,
      variant: 5,
      size: 6,
      disabled: 1,
      fullWidth: 7
    });
  }
  get type() {
    return this.$$.ctx[0];
  }
  set type(e) {
    this.$$set({ type: e }), m();
  }
  get variant() {
    return this.$$.ctx[5];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
  get size() {
    return this.$$.ctx[6];
  }
  set size(e) {
    this.$$set({ size: e }), m();
  }
  get disabled() {
    return this.$$.ctx[1];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), m();
  }
  get fullWidth() {
    return this.$$.ctx[7];
  }
  set fullWidth(e) {
    this.$$set({ fullWidth: e }), m();
  }
}
customElements.define("s-button", ae(ze, { type: {}, variant: {}, size: {}, disabled: { type: "Boolean" }, fullWidth: { type: "Boolean" } }, ["default"], [], !0));
const we = (t) => ({}), F = (t) => ({});
function G(t) {
  let e, n;
  const s = (
    /*#slots*/
    t[11].label
  ), r = ee(
    s,
    t,
    /*$$scope*/
    t[10],
    F
  );
  return {
    c() {
      e = x("label"), r && r.c(), p(
        e,
        "for",
        /*name*/
        t[6]
      ), p(e, "class", "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
    },
    m(i, l) {
      N(i, e, l), r && r.m(e, null), n = !0;
    },
    p(i, l) {
      r && r.p && (!n || l & /*$$scope*/
      1024) && se(
        r,
        s,
        i,
        /*$$scope*/
        i[10],
        n ? ne(
          s,
          /*$$scope*/
          i[10],
          l,
          we
        ) : ie(
          /*$$scope*/
          i[10]
        ),
        F
      ), (!n || l & /*name*/
      64) && p(
        e,
        "for",
        /*name*/
        i[6]
      );
    },
    i(i) {
      n || (S(r, i), n = !0);
    },
    o(i) {
      W(r, i), n = !1;
    },
    d(i) {
      i && A(e), r && r.d(i);
    }
  };
}
function K(t) {
  let e, n, s;
  return {
    c() {
      e = x("p"), n = le(
        /*error*/
        t[4]
      ), p(e, "class", "text-sm text-red-500"), p(e, "id", s = /*name*/
      t[6] + "-error");
    },
    m(r, i) {
      N(r, e, i), P(e, n);
    },
    p(r, i) {
      i & /*error*/
      16 && pe(
        n,
        /*error*/
        r[4]
      ), i & /*name*/
      64 && s !== (s = /*name*/
      r[6] + "-error") && p(e, "id", s);
    },
    d(r) {
      r && A(e);
    }
  };
}
function We(t) {
  let e, n, s, r, i, l, f, u, o, h, a = (
    /*$$slots*/
    t[8].label && G(t)
  ), g = [
    { type: (
      /*type*/
      t[1]
    ) },
    { name: (
      /*name*/
      t[6]
    ) },
    { value: (
      /*value*/
      t[0]
    ) },
    { placeholder: (
      /*placeholder*/
      t[2]
    ) },
    { disabled: (
      /*disabled*/
      t[3]
    ) },
    { required: (
      /*required*/
      t[5]
    ) },
    {
      class: r = `${Q} ${/*error*/
      t[4] ? "border-red-500 focus-visible:ring-red-500" : ""}`
    },
    {
      "aria-invalid": i = !!/*error*/
      t[4]
    },
    {
      "aria-describedby": l = /*error*/
      t[4] ? `${/*name*/
      t[6]}-error` : void 0
    },
    /*$$restProps*/
    t[9]
  ], b = {};
  for (let d = 0; d < g.length; d += 1)
    b = k(b, g[d]);
  let $ = (
    /*error*/
    t[4] && K(t)
  );
  return {
    c() {
      e = x("div"), a && a.c(), n = R(), s = x("input"), f = R(), $ && $.c(), w(s, b), p(e, "class", "grid w-full max-w-sm gap-1.5");
    },
    m(d, c) {
      N(d, e, c), a && a.m(e, null), P(e, n), P(e, s), "value" in b && (s.value = b.value), s.autofocus && s.focus(), P(e, f), $ && $.m(e, null), u = !0, o || (h = oe(
        s,
        "input",
        /*handleInput*/
        t[7]
      ), o = !0);
    },
    p(d, [c]) {
      /*$$slots*/
      d[8].label ? a ? (a.p(d, c), c & /*$$slots*/
      256 && S(a, 1)) : (a = G(d), a.c(), S(a, 1), a.m(e, n)) : a && (Se(), W(a, 1, 1, () => {
        a = null;
      }), xe()), w(s, b = ue(g, [
        (!u || c & /*type*/
        2) && { type: (
          /*type*/
          d[1]
        ) },
        (!u || c & /*name*/
        64) && { name: (
          /*name*/
          d[6]
        ) },
        (!u || c & /*value*/
        1 && s.value !== /*value*/
        d[0]) && { value: (
          /*value*/
          d[0]
        ) },
        (!u || c & /*placeholder*/
        4) && { placeholder: (
          /*placeholder*/
          d[2]
        ) },
        (!u || c & /*disabled*/
        8) && { disabled: (
          /*disabled*/
          d[3]
        ) },
        (!u || c & /*required*/
        32) && { required: (
          /*required*/
          d[5]
        ) },
        (!u || c & /*error*/
        16 && r !== (r = `${Q} ${/*error*/
        d[4] ? "border-red-500 focus-visible:ring-red-500" : ""}`)) && { class: r },
        (!u || c & /*error*/
        16 && i !== (i = !!/*error*/
        d[4])) && { "aria-invalid": i },
        (!u || c & /*error, name*/
        80 && l !== (l = /*error*/
        d[4] ? `${/*name*/
        d[6]}-error` : void 0)) && {
          "aria-describedby": l
        },
        c & /*$$restProps*/
        512 && /*$$restProps*/
        d[9]
      ])), "value" in b && (s.value = b.value), /*error*/
      d[4] ? $ ? $.p(d, c) : ($ = K(d), $.c(), $.m(e, null)) : $ && ($.d(1), $ = null);
    },
    i(d) {
      u || (S(a), u = !0);
    },
    o(d) {
      W(a), u = !1;
    },
    d(d) {
      d && A(e), a && a.d(), $ && $.d(), o = !1, h();
    }
  };
}
const Q = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
function Me(t, e, n) {
  const s = ["type", "value", "placeholder", "disabled", "error", "required", "name"];
  let r = z(e, s), { $$slots: i = {}, $$scope: l } = e;
  const f = me(i);
  let { type: u = "text" } = e, { value: o = "" } = e, { placeholder: h = "" } = e, { disabled: a = !1 } = e, { error: g = "" } = e, { required: b = !1 } = e, { name: $ = "" } = e;
  function d(c) {
    const _ = c.target;
    n(0, o = u === "number" ? _.valueAsNumber.toString() : _.value);
  }
  return t.$$set = (c) => {
    e = k(k({}, e), re(c)), n(9, r = z(e, s)), "type" in c && n(1, u = c.type), "value" in c && n(0, o = c.value), "placeholder" in c && n(2, h = c.placeholder), "disabled" in c && n(3, a = c.disabled), "error" in c && n(4, g = c.error), "required" in c && n(5, b = c.required), "name" in c && n(6, $ = c.name), "$$scope" in c && n(10, l = c.$$scope);
  }, [
    o,
    u,
    h,
    a,
    g,
    b,
    $,
    d,
    f,
    r,
    l,
    i
  ];
}
class Ie extends de {
  constructor(e) {
    super(), fe(this, e, Me, We, Z, {
      type: 1,
      value: 0,
      placeholder: 2,
      disabled: 3,
      error: 4,
      required: 5,
      name: 6
    });
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), m();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), m();
  }
  get placeholder() {
    return this.$$.ctx[2];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), m();
  }
  get disabled() {
    return this.$$.ctx[3];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), m();
  }
  get error() {
    return this.$$.ctx[4];
  }
  set error(e) {
    this.$$set({ error: e }), m();
  }
  get required() {
    return this.$$.ctx[5];
  }
  set required(e) {
    this.$$set({ required: e }), m();
  }
  get name() {
    return this.$$.ctx[6];
  }
  set name(e) {
    this.$$set({ name: e }), m();
  }
}
ae(Ie, { type: {}, value: {}, placeholder: {}, disabled: { type: "Boolean" }, error: {}, required: { type: "Boolean" }, name: {} }, ["label"], [], !0);
