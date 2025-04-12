var bt = Object.defineProperty;
var mt = (e, t, n) => t in e ? bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var y = (e, t, n) => mt(e, typeof t != "symbol" ? t + "" : t, n);
import { createEventDispatcher as _t } from "svelte";
function T() {
}
function E(e, t) {
  for (const n in t) e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function X(e) {
  return e();
}
function D() {
  return /* @__PURE__ */ Object.create(null);
}
function L(e) {
  e.forEach(X);
}
function Y(e) {
  return typeof e == "function";
}
function Z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function gt(e) {
  return Object.keys(e).length === 0;
}
function tt(e, t, n, s) {
  if (e) {
    const r = et(e, t, n, s);
    return e[0](r);
  }
}
function et(e, t, n, s) {
  return e[1] && s ? E(n.ctx.slice(), e[1](s(t))) : n.ctx;
}
function nt(e, t, n, s) {
  if (e[2] && s) {
    const r = e[2](s(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const i = [], l = Math.max(t.dirty.length, r.length);
      for (let c = 0; c < l; c += 1)
        i[c] = t.dirty[c] | r[c];
      return i;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function st(e, t, n, s, r, i) {
  if (r) {
    const l = et(t, n, s, i);
    e.p(l, r);
  }
}
function it(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let s = 0; s < n; s++)
      t[s] = -1;
    return t;
  }
  return -1;
}
function rt(e) {
  const t = {};
  for (const n in e) n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function q(e, t) {
  const n = {};
  t = new Set(t);
  for (const s in e) !t.has(s) && s[0] !== "$" && (n[s] = e[s]);
  return n;
}
function yt(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function C(e, t) {
  e.appendChild(t);
}
function B(e, t, n) {
  e.insertBefore(t, n || null);
}
function x(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function j(e) {
  return document.createElement(e);
}
function lt(e) {
  return document.createTextNode(e);
}
function J() {
  return lt(" ");
}
function ot(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const pt = ["width", "height"];
function w(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const s in t)
    t[s] == null ? e.removeAttribute(s) : s === "style" ? e.style.cssText = t[s] : s === "__value" ? e.value = e[s] = t[s] : n[s] && n[s].set && pt.indexOf(s) === -1 ? e[s] = t[s] : p(e, s, t[s]);
}
function vt(e) {
  return Array.from(e.childNodes);
}
function Et(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function kt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let H;
function z(e) {
  H = e;
}
const S = [], R = [];
let A = [];
const U = [], St = /* @__PURE__ */ Promise.resolve();
let I = !1;
function At() {
  I || (I = !0, St.then(_));
}
function V(e) {
  A.push(e);
}
const M = /* @__PURE__ */ new Set();
let k = 0;
function _() {
  if (k !== 0)
    return;
  const e = H;
  do {
    try {
      for (; k < S.length; ) {
        const t = S[k];
        k++, z(t), Ot(t.$$);
      }
    } catch (t) {
      throw S.length = 0, k = 0, t;
    }
    for (z(null), S.length = 0, k = 0; R.length; ) R.pop()();
    for (let t = 0; t < A.length; t += 1) {
      const n = A[t];
      M.has(n) || (M.add(n), n());
    }
    A.length = 0;
  } while (S.length);
  for (; U.length; )
    U.pop()();
  I = !1, M.clear(), z(e);
}
function Ot(e) {
  if (e.fragment !== null) {
    e.update(), L(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(V);
  }
}
function jt(e) {
  const t = [], n = [];
  A.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), A = t;
}
const N = /* @__PURE__ */ new Set();
let v;
function xt() {
  v = {
    r: 0,
    c: [],
    p: v
    // parent group
  };
}
function zt() {
  v.r || L(v.c), v = v.p;
}
function O(e, t) {
  e && e.i && (N.delete(e), e.i(t));
}
function W(e, t, n, s) {
  if (e && e.o) {
    if (N.has(e)) return;
    N.add(e), v.c.push(() => {
      N.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else s && s();
}
function ut(e, t) {
  const n = {}, s = {}, r = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const l = e[i], c = t[i];
    if (c) {
      for (const u in l)
        u in c || (s[u] = 1);
      for (const u in c)
        r[u] || (n[u] = c[u], r[u] = 1);
      e[i] = c;
    } else
      for (const u in l)
        r[u] = 1;
  }
  for (const l in s)
    l in n || (n[l] = void 0);
  return n;
}
function Lt(e, t, n) {
  const { fragment: s, after_update: r } = e.$$;
  s && s.m(t, n), V(() => {
    const i = e.$$.on_mount.map(X).filter(Y);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : L(i), e.$$.on_mount = [];
  }), r.forEach(V);
}
function Bt(e, t) {
  const n = e.$$;
  n.fragment !== null && (jt(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ct(e, t) {
  e.$$.dirty[0] === -1 && (S.push(e), At(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ct(e, t, n, s, r, i, l = null, c = [-1]) {
  const u = H;
  z(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: T,
    not_equal: r,
    bound: D(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: D(),
    dirty: c,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  l && l(o.root);
  let h = !1;
  if (o.ctx = n ? n(e, t.props || {}, (a, g, ...b) => {
    const $ = b.length ? b[0] : g;
    return o.ctx && r(o.ctx[a], o.ctx[a] = $) && (!o.skip_bound && o.bound[a] && o.bound[a]($), h && Ct(e, a)), g;
  }) : [], o.update(), h = !0, L(o.before_update), o.fragment = s ? s(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = vt(t.target);
      o.fragment && o.fragment.l(a), a.forEach(x);
    } else
      o.fragment && o.fragment.c();
    t.intro && O(e.$$.fragment), Lt(e, t.target, t.anchor), _();
  }
  z(u);
}
let ft;
typeof HTMLElement == "function" && (ft = class extends HTMLElement {
  constructor(t, n, s) {
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
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return () => {
          let l;
          return {
            c: function() {
              l = j("slot"), i !== "default" && p(l, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, h) {
              B(o, l, h);
            },
            d: function(o) {
              o && x(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = kt(this);
      for (const i of this.$$s)
        i in s && (n[i] = [t(i)]);
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = P(l, i.value, this.$$p_d, "toProp"));
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
            const l = P(
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
          const c = this.$$c.$on(i, l);
          this.$$l_u.set(l, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = P(t, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function P(e, t, n, s) {
  var i;
  const r = (i = n[e]) == null ? void 0 : i.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function at(e, t, n, s, r, i) {
  let l = class extends ft {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((c) => {
    Object.defineProperty(l.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(u) {
        var o;
        u = P(c, u, t), this.$$d[c] = u, (o = this.$$c) == null || o.$set({ [c]: u });
      }
    });
  }), s.forEach((c) => {
    Object.defineProperty(l.prototype, c, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[c];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
class dt {
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
    Bt(this, 1), this.$destroy = T;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Y(n))
      return T;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !gt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Nt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Nt);
function Pt(e) {
  let t, n, s, r;
  const i = (
    /*#slots*/
    e[9].default
  ), l = tt(
    i,
    e,
    /*$$scope*/
    e[8],
    null
  );
  let c = [
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
    e[4]
  ], u = {};
  for (let o = 0; o < c.length; o += 1)
    u = E(u, c[o]);
  return {
    c() {
      t = j("button"), l && l.c(), w(t, u);
    },
    m(o, h) {
      B(o, t, h), l && l.m(t, null), t.autofocus && t.focus(), n = !0, s || (r = ot(
        t,
        "click",
        /*handleClick*/
        e[3]
      ), s = !0);
    },
    p(o, [h]) {
      l && l.p && (!n || h & /*$$scope*/
      256) && st(
        l,
        i,
        o,
        /*$$scope*/
        o[8],
        n ? nt(
          i,
          /*$$scope*/
          o[8],
          h,
          null
        ) : it(
          /*$$scope*/
          o[8]
        ),
        null
      ), w(t, u = ut(c, [
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
      n || (O(l, o), n = !0);
    },
    o(o) {
      W(l, o), n = !1;
    },
    d(o) {
      o && x(t), l && l.d(o), s = !1, r();
    }
  };
}
const qt = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
function wt(e, t, n) {
  let s;
  const r = ["type", "variant", "size", "disabled", "fullWidth"];
  let i = q(t, r), { $$slots: l = {}, $$scope: c } = t, { type: u = "button" } = t, { variant: o = "primary" } = t, { size: h = "md" } = t, { disabled: a = !1 } = t, { fullWidth: g = !1 } = t;
  const b = _t();
  function $() {
    b("click");
  }
  const d = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
  }, f = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };
  return e.$$set = (m) => {
    t = E(E({}, t), rt(m)), n(4, i = q(t, r)), "type" in m && n(0, u = m.type), "variant" in m && n(5, o = m.variant), "size" in m && n(6, h = m.size), "disabled" in m && n(1, a = m.disabled), "fullWidth" in m && n(7, g = m.fullWidth), "$$scope" in m && n(8, c = m.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*variant, size, fullWidth*/
    224 && n(2, s = `${qt} ${d[o]} ${f[h]} ${g ? "w-full" : ""}`);
  }, [
    u,
    a,
    s,
    $,
    i,
    o,
    h,
    g,
    c,
    l
  ];
}
class ht extends dt {
  constructor(t) {
    super(), ct(this, t, wt, Pt, Z, {
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
  set type(t) {
    this.$$set({ type: t }), _();
  }
  get variant() {
    return this.$$.ctx[5];
  }
  set variant(t) {
    this.$$set({ variant: t }), _();
  }
  get size() {
    return this.$$.ctx[6];
  }
  set size(t) {
    this.$$set({ size: t }), _();
  }
  get disabled() {
    return this.$$.ctx[1];
  }
  set disabled(t) {
    this.$$set({ disabled: t }), _();
  }
  get fullWidth() {
    return this.$$.ctx[7];
  }
  set fullWidth(t) {
    this.$$set({ fullWidth: t }), _();
  }
}
customElements.define("s-button", at(ht, { type: {}, variant: {}, size: {}, disabled: { type: "Boolean" }, fullWidth: { type: "Boolean" } }, ["default"], [], !0));
const Wt = (e) => ({}), F = (e) => ({});
function G(e) {
  let t, n;
  const s = (
    /*#slots*/
    e[11].label
  ), r = tt(
    s,
    e,
    /*$$scope*/
    e[10],
    F
  );
  return {
    c() {
      t = j("label"), r && r.c(), p(
        t,
        "for",
        /*name*/
        e[6]
      ), p(t, "class", "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
    },
    m(i, l) {
      B(i, t, l), r && r.m(t, null), n = !0;
    },
    p(i, l) {
      r && r.p && (!n || l & /*$$scope*/
      1024) && st(
        r,
        s,
        i,
        /*$$scope*/
        i[10],
        n ? nt(
          s,
          /*$$scope*/
          i[10],
          l,
          Wt
        ) : it(
          /*$$scope*/
          i[10]
        ),
        F
      ), (!n || l & /*name*/
      64) && p(
        t,
        "for",
        /*name*/
        i[6]
      );
    },
    i(i) {
      n || (O(r, i), n = !0);
    },
    o(i) {
      W(r, i), n = !1;
    },
    d(i) {
      i && x(t), r && r.d(i);
    }
  };
}
function K(e) {
  let t, n, s;
  return {
    c() {
      t = j("p"), n = lt(
        /*error*/
        e[4]
      ), p(t, "class", "text-sm text-red-500"), p(t, "id", s = /*name*/
      e[6] + "-error");
    },
    m(r, i) {
      B(r, t, i), C(t, n);
    },
    p(r, i) {
      i & /*error*/
      16 && Et(
        n,
        /*error*/
        r[4]
      ), i & /*name*/
      64 && s !== (s = /*name*/
      r[6] + "-error") && p(t, "id", s);
    },
    d(r) {
      r && x(t);
    }
  };
}
function Mt(e) {
  let t, n, s, r, i, l, c, u, o, h, a = (
    /*$$slots*/
    e[8].label && G(e)
  ), g = [
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
      class: r = `${Q} ${/*error*/
      e[4] ? "border-red-500 focus-visible:ring-red-500" : ""}`
    },
    {
      "aria-invalid": i = !!/*error*/
      e[4]
    },
    {
      "aria-describedby": l = /*error*/
      e[4] ? `${/*name*/
      e[6]}-error` : void 0
    },
    /*$$restProps*/
    e[9]
  ], b = {};
  for (let d = 0; d < g.length; d += 1)
    b = E(b, g[d]);
  let $ = (
    /*error*/
    e[4] && K(e)
  );
  return {
    c() {
      t = j("div"), a && a.c(), n = J(), s = j("input"), c = J(), $ && $.c(), w(s, b), p(t, "class", "grid w-full max-w-sm gap-1.5");
    },
    m(d, f) {
      B(d, t, f), a && a.m(t, null), C(t, n), C(t, s), "value" in b && (s.value = b.value), s.autofocus && s.focus(), C(t, c), $ && $.m(t, null), u = !0, o || (h = ot(
        s,
        "input",
        /*handleInput*/
        e[7]
      ), o = !0);
    },
    p(d, [f]) {
      /*$$slots*/
      d[8].label ? a ? (a.p(d, f), f & /*$$slots*/
      256 && O(a, 1)) : (a = G(d), a.c(), O(a, 1), a.m(t, n)) : a && (xt(), W(a, 1, 1, () => {
        a = null;
      }), zt()), w(s, b = ut(g, [
        (!u || f & /*type*/
        2) && { type: (
          /*type*/
          d[1]
        ) },
        (!u || f & /*name*/
        64) && { name: (
          /*name*/
          d[6]
        ) },
        (!u || f & /*value*/
        1 && s.value !== /*value*/
        d[0]) && { value: (
          /*value*/
          d[0]
        ) },
        (!u || f & /*placeholder*/
        4) && { placeholder: (
          /*placeholder*/
          d[2]
        ) },
        (!u || f & /*disabled*/
        8) && { disabled: (
          /*disabled*/
          d[3]
        ) },
        (!u || f & /*required*/
        32) && { required: (
          /*required*/
          d[5]
        ) },
        (!u || f & /*error*/
        16 && r !== (r = `${Q} ${/*error*/
        d[4] ? "border-red-500 focus-visible:ring-red-500" : ""}`)) && { class: r },
        (!u || f & /*error*/
        16 && i !== (i = !!/*error*/
        d[4])) && { "aria-invalid": i },
        (!u || f & /*error, name*/
        80 && l !== (l = /*error*/
        d[4] ? `${/*name*/
        d[6]}-error` : void 0)) && {
          "aria-describedby": l
        },
        f & /*$$restProps*/
        512 && /*$$restProps*/
        d[9]
      ])), "value" in b && (s.value = b.value), /*error*/
      d[4] ? $ ? $.p(d, f) : ($ = K(d), $.c(), $.m(t, null)) : $ && ($.d(1), $ = null);
    },
    i(d) {
      u || (O(a), u = !0);
    },
    o(d) {
      W(a), u = !1;
    },
    d(d) {
      d && x(t), a && a.d(), $ && $.d(), o = !1, h();
    }
  };
}
const Q = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
function Tt(e, t, n) {
  const s = ["type", "value", "placeholder", "disabled", "error", "required", "name"];
  let r = q(t, s), { $$slots: i = {}, $$scope: l } = t;
  const c = yt(i);
  let { type: u = "text" } = t, { value: o = "" } = t, { placeholder: h = "" } = t, { disabled: a = !1 } = t, { error: g = "" } = t, { required: b = !1 } = t, { name: $ = "" } = t;
  function d(f) {
    const m = f.target;
    n(0, o = u === "number" ? m.valueAsNumber.toString() : m.value);
  }
  return e.$$set = (f) => {
    t = E(E({}, t), rt(f)), n(9, r = q(t, s)), "type" in f && n(1, u = f.type), "value" in f && n(0, o = f.value), "placeholder" in f && n(2, h = f.placeholder), "disabled" in f && n(3, a = f.disabled), "error" in f && n(4, g = f.error), "required" in f && n(5, b = f.required), "name" in f && n(6, $ = f.name), "$$scope" in f && n(10, l = f.$$scope);
  }, [
    o,
    u,
    h,
    a,
    g,
    b,
    $,
    d,
    c,
    r,
    l,
    i
  ];
}
class $t extends dt {
  constructor(t) {
    super(), ct(this, t, Tt, Mt, Z, {
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
  set type(t) {
    this.$$set({ type: t }), _();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), _();
  }
  get placeholder() {
    return this.$$.ctx[2];
  }
  set placeholder(t) {
    this.$$set({ placeholder: t }), _();
  }
  get disabled() {
    return this.$$.ctx[3];
  }
  set disabled(t) {
    this.$$set({ disabled: t }), _();
  }
  get error() {
    return this.$$.ctx[4];
  }
  set error(t) {
    this.$$set({ error: t }), _();
  }
  get required() {
    return this.$$.ctx[5];
  }
  set required(t) {
    this.$$set({ required: t }), _();
  }
  get name() {
    return this.$$.ctx[6];
  }
  set name(t) {
    this.$$set({ name: t }), _();
  }
}
at($t, { type: {}, value: {}, placeholder: {}, disabled: { type: "Boolean" }, error: {}, required: { type: "Boolean" }, name: {} }, ["label"], [], !0);
class It extends HTMLElement {
  constructor() {
    super();
    const t = this.getAttribute("variant"), s = ["primary", "secondary", "outline"].includes(t) ? t : "primary", r = this.getAttribute("size"), l = ["sm", "md", "lg"].includes(r) ? r : "md";
    new ht({
      target: this,
      props: {
        variant: s,
        size: l
      }
    });
  }
}
class Vt extends HTMLElement {
  constructor() {
    super();
    const t = this.getAttribute("value") || "", n = this.getAttribute("placeholder") || "";
    new $t({
      target: this,
      // Targeting the custom element itself
      props: {
        value: t,
        placeholder: n,
        disabled: this.hasAttribute("disabled")
      }
    });
  }
}
customElements.define("s-button", It);
customElements.define("s-input", Vt);
export {
  ht as SButton,
  $t as SInput
};
