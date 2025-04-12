(function(k,m){typeof exports=="object"&&typeof module<"u"?m(require("svelte")):typeof define=="function"&&define.amd?define(["svelte"],m):(k=typeof globalThis<"u"?globalThis:k||self,m(k.Svelte))})(this,function(k){"use strict";var Te=Object.defineProperty;var Me=(k,m,p)=>m in k?Te(k,m,{enumerable:!0,configurable:!0,writable:!0,value:p}):k[m]=p;var v=(k,m,p)=>Me(k,typeof m!="symbol"?m+"":m,p);function m(){}function p(t,e){for(const n in e)t[n]=e[n];return t}function R(t){return t()}function V(){return Object.create(null)}function L(t){t.forEach(R)}function U(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $e(t){return Object.keys(t).length===0}function G(t,e,n,s){if(t){const r=K(t,e,n,s);return t[0](r)}}function K(t,e,n,s){return t[1]&&s?p(n.ctx.slice(),t[1](s(e))):n.ctx}function Q(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],l=Math.max(e.dirty.length,r.length);for(let f=0;f<l;f+=1)i[f]=e.dirty[f]|r[f];return i}return e.dirty|r}return e.dirty}function X(t,e,n,s,r,i){if(r){const l=K(e,n,s,i);t.p(l,r)}}function Y(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Z(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function B(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function be(t){const e={};for(const n in t)e[n]=!0;return e}function z(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function S(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function te(){return ee(" ")}function ne(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const _e=["width","height"];function w(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set&&_e.indexOf(s)===-1?t[s]=e[s]:E(t,s,e[s])}function me(t){return Array.from(t.childNodes)}function ge(t,e){e=""+e,t.data!==e&&(t.data=e)}function ye(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}let I;function P(t){I=t}const x=[],se=[];let A=[];const ie=[],pe=Promise.resolve();let D=!1;function ve(){D||(D=!0,pe.then(g))}function H(t){A.push(t)}const J=new Set;let q=0;function g(){if(q!==0)return;const t=I;do{try{for(;q<x.length;){const e=x[q];q++,P(e),ke(e.$$)}}catch(e){throw x.length=0,q=0,e}for(P(null),x.length=0,q=0;se.length;)se.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];J.has(n)||(J.add(n),n())}A.length=0}while(x.length);for(;ie.length;)ie.pop()();D=!1,J.clear(),P(t)}function ke(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function Ee(t){const e=[],n=[];A.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),A=e}const W=new Set;let j;function je(){j={r:0,c:[],p:j}}function Oe(){j.r||L(j.c),j=j.p}function C(t,e){t&&t.i&&(W.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),j.c.push(()=>{W.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function re(t,e){const n={},s={},r={$$scope:1};let i=t.length;for(;i--;){const l=t[i],f=e[i];if(f){for(const u in l)u in f||(s[u]=1);for(const u in f)r[u]||(n[u]=f[u],r[u]=1);t[i]=f}else for(const u in l)r[u]=1}for(const l in s)l in n||(n[l]=void 0);return n}function Se(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),H(()=>{const i=t.$$.on_mount.map(R).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...i):L(i),t.$$.on_mount=[]}),r.forEach(H)}function xe(t,e){const n=t.$$;n.fragment!==null&&(Ee(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(t,e){t.$$.dirty[0]===-1&&(x.push(t),ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,n,s,r,i,l=null,f=[-1]){const u=I;P(t);const o=t.$$={fragment:null,ctx:[],props:i,update:m,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:V(),dirty:f,skip_bound:!1,root:e.target||u.$$.root};l&&l(o.root);let h=!1;if(o.ctx=n?n(t,e.props||{},(a,y,...b)=>{const $=b.length?b[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=$)&&(!o.skip_bound&&o.bound[a]&&o.bound[a]($),h&&Ae(t,a)),y}):[],o.update(),h=!0,L(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const a=me(e.target);o.fragment&&o.fragment.l(a),a.forEach(O)}else o.fragment&&o.fragment.c();e.intro&&C(t.$$.fragment),Se(t,e.target,e.anchor),g()}P(u)}let oe;typeof HTMLElement=="function"&&(oe=class extends HTMLElement{constructor(e,n,s){super();v(this,"$$ctor");v(this,"$$s");v(this,"$$c");v(this,"$$cn",!1);v(this,"$$d",{});v(this,"$$r",!1);v(this,"$$p_d",{});v(this,"$$l",{});v(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(e,n,s){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const r=this.$$c.$on(e,n);this.$$l_u.set(n,r)}super.addEventListener(e,n,s)}removeEventListener(e,n,s){if(super.removeEventListener(e,n,s),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return()=>{let l;return{c:function(){l=S("slot"),i!=="default"&&E(l,"name",i)},m:function(o,h){N(o,l,h)},d:function(o){o&&O(l)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=ye(this);for(const i of this.$$s)i in s&&(n[i]=[e(i)]);for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=M(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){const l=M(i,this.$$d[i],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,l)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const i in this.$$l)for(const l of this.$$l[i]){const f=this.$$c.$on(i,l);this.$$l_u.set(l,f)}this.$$l={}}}attributeChangedCallback(e,n,s){var r;this.$$r||(e=this.$$g_p(e),this.$$d[e]=M(e,s,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function M(t,e,n,s){var i;const r=(i=n[t])==null?void 0:i.type;if(e=r==="Boolean"&&typeof e!="boolean"?e!=null:e,!s||!n[t])return e;if(s==="toAttribute")switch(r){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function ue(t,e,n,s,r,i){let l=class extends oe{constructor(){super(t,n,r),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(f=>(e[f].attribute||f).toLowerCase())}};return Object.keys(e).forEach(f=>{Object.defineProperty(l.prototype,f,{get(){return this.$$c&&f in this.$$c?this.$$c[f]:this.$$d[f]},set(u){var o;u=M(f,u,e),this.$$d[f]=u,(o=this.$$c)==null||o.$set({[f]:u})}})}),s.forEach(f=>{Object.defineProperty(l.prototype,f,{get(){var u;return(u=this.$$c)==null?void 0:u[f]}})}),t.element=l,l}class fe{constructor(){v(this,"$$");v(this,"$$set")}$destroy(){xe(this,1),this.$destroy=m}$on(e,n){if(!U(n))return m;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!$e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);function Ce(t){let e,n,s,r;const i=t[9].default,l=G(i,t,t[8],null);let f=[{type:t[0]},{class:t[2]},{disabled:t[1]},t[4]],u={};for(let o=0;o<f.length;o+=1)u=p(u,f[o]);return{c(){e=S("button"),l&&l.c(),w(e,u)},m(o,h){N(o,e,h),l&&l.m(e,null),e.autofocus&&e.focus(),n=!0,s||(r=ne(e,"click",t[3]),s=!0)},p(o,[h]){l&&l.p&&(!n||h&256)&&X(l,i,o,o[8],n?Q(i,o[8],h,null):Y(o[8]),null),w(e,u=re(f,[(!n||h&1)&&{type:o[0]},(!n||h&4)&&{class:o[2]},(!n||h&2)&&{disabled:o[1]},h&16&&o[4]]))},i(o){n||(C(l,o),n=!0)},o(o){T(l,o),n=!1},d(o){o&&O(e),l&&l.d(o),s=!1,r()}}}const Le="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";function Ne(t,e,n){let s;const r=["type","variant","size","disabled","fullWidth"];let i=B(e,r),{$$slots:l={},$$scope:f}=e,{type:u="button"}=e,{variant:o="primary"}=e,{size:h="md"}=e,{disabled:a=!1}=e,{fullWidth:y=!1}=e;const b=k.createEventDispatcher();function $(){b("click")}const d={primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},c={sm:"h-9 px-3 text-sm",md:"h-10 px-4 py-2",lg:"h-11 px-8 text-lg"};return t.$$set=_=>{e=p(p({},e),Z(_)),n(4,i=B(e,r)),"type"in _&&n(0,u=_.type),"variant"in _&&n(5,o=_.variant),"size"in _&&n(6,h=_.size),"disabled"in _&&n(1,a=_.disabled),"fullWidth"in _&&n(7,y=_.fullWidth),"$$scope"in _&&n(8,f=_.$$scope)},t.$$.update=()=>{t.$$.dirty&224&&n(2,s=`${Le} ${d[o]} ${c[h]} ${y?"w-full":""}`)},[u,a,s,$,i,o,h,y,f,l]}class Pe extends fe{constructor(e){super(),le(this,e,Ne,Ce,F,{type:0,variant:5,size:6,disabled:1,fullWidth:7})}get type(){return this.$$.ctx[0]}set type(e){this.$$set({type:e}),g()}get variant(){return this.$$.ctx[5]}set variant(e){this.$$set({variant:e}),g()}get size(){return this.$$.ctx[6]}set size(e){this.$$set({size:e}),g()}get disabled(){return this.$$.ctx[1]}set disabled(e){this.$$set({disabled:e}),g()}get fullWidth(){return this.$$.ctx[7]}set fullWidth(e){this.$$set({fullWidth:e}),g()}}customElements.define("s-button",ue(Pe,{type:{},variant:{},size:{},disabled:{type:"Boolean"},fullWidth:{type:"Boolean"}},["default"],[],!0));const Be=t=>({}),ce=t=>({});function ae(t){let e,n;const s=t[11].label,r=G(s,t,t[10],ce);return{c(){e=S("label"),r&&r.c(),E(e,"for",t[6]),E(e,"class","text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")},m(i,l){N(i,e,l),r&&r.m(e,null),n=!0},p(i,l){r&&r.p&&(!n||l&1024)&&X(r,s,i,i[10],n?Q(s,i[10],l,Be):Y(i[10]),ce),(!n||l&64)&&E(e,"for",i[6])},i(i){n||(C(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&O(e),r&&r.d(i)}}}function de(t){let e,n,s;return{c(){e=S("p"),n=ee(t[4]),E(e,"class","text-sm text-red-500"),E(e,"id",s=t[6]+"-error")},m(r,i){N(r,e,i),z(e,n)},p(r,i){i&16&&ge(n,r[4]),i&64&&s!==(s=r[6]+"-error")&&E(e,"id",s)},d(r){r&&O(e)}}}function ze(t){let e,n,s,r,i,l,f,u,o,h,a=t[8].label&&ae(t),y=[{type:t[1]},{name:t[6]},{value:t[0]},{placeholder:t[2]},{disabled:t[3]},{required:t[5]},{class:r=`${he} ${t[4]?"border-red-500 focus-visible:ring-red-500":""}`},{"aria-invalid":i=!!t[4]},{"aria-describedby":l=t[4]?`${t[6]}-error`:void 0},t[9]],b={};for(let d=0;d<y.length;d+=1)b=p(b,y[d]);let $=t[4]&&de(t);return{c(){e=S("div"),a&&a.c(),n=te(),s=S("input"),f=te(),$&&$.c(),w(s,b),E(e,"class","grid w-full max-w-sm gap-1.5")},m(d,c){N(d,e,c),a&&a.m(e,null),z(e,n),z(e,s),"value"in b&&(s.value=b.value),s.autofocus&&s.focus(),z(e,f),$&&$.m(e,null),u=!0,o||(h=ne(s,"input",t[7]),o=!0)},p(d,[c]){d[8].label?a?(a.p(d,c),c&256&&C(a,1)):(a=ae(d),a.c(),C(a,1),a.m(e,n)):a&&(je(),T(a,1,1,()=>{a=null}),Oe()),w(s,b=re(y,[(!u||c&2)&&{type:d[1]},(!u||c&64)&&{name:d[6]},(!u||c&1&&s.value!==d[0])&&{value:d[0]},(!u||c&4)&&{placeholder:d[2]},(!u||c&8)&&{disabled:d[3]},(!u||c&32)&&{required:d[5]},(!u||c&16&&r!==(r=`${he} ${d[4]?"border-red-500 focus-visible:ring-red-500":""}`))&&{class:r},(!u||c&16&&i!==(i=!!d[4]))&&{"aria-invalid":i},(!u||c&80&&l!==(l=d[4]?`${d[6]}-error`:void 0))&&{"aria-describedby":l},c&512&&d[9]])),"value"in b&&(s.value=b.value),d[4]?$?$.p(d,c):($=de(d),$.c(),$.m(e,null)):$&&($.d(1),$=null)},i(d){u||(C(a),u=!0)},o(d){T(a),u=!1},d(d){d&&O(e),a&&a.d(),$&&$.d(),o=!1,h()}}}const he="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";function we(t,e,n){const s=["type","value","placeholder","disabled","error","required","name"];let r=B(e,s),{$$slots:i={},$$scope:l}=e;const f=be(i);let{type:u="text"}=e,{value:o=""}=e,{placeholder:h=""}=e,{disabled:a=!1}=e,{error:y=""}=e,{required:b=!1}=e,{name:$=""}=e;function d(c){const _=c.target;n(0,o=u==="number"?_.valueAsNumber.toString():_.value)}return t.$$set=c=>{e=p(p({},e),Z(c)),n(9,r=B(e,s)),"type"in c&&n(1,u=c.type),"value"in c&&n(0,o=c.value),"placeholder"in c&&n(2,h=c.placeholder),"disabled"in c&&n(3,a=c.disabled),"error"in c&&n(4,y=c.error),"required"in c&&n(5,b=c.required),"name"in c&&n(6,$=c.name),"$$scope"in c&&n(10,l=c.$$scope)},[o,u,h,a,y,b,$,d,f,r,l,i]}class We extends fe{constructor(e){super(),le(this,e,we,ze,F,{type:1,value:0,placeholder:2,disabled:3,error:4,required:5,name:6})}get type(){return this.$$.ctx[1]}set type(e){this.$$set({type:e}),g()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),g()}get placeholder(){return this.$$.ctx[2]}set placeholder(e){this.$$set({placeholder:e}),g()}get disabled(){return this.$$.ctx[3]}set disabled(e){this.$$set({disabled:e}),g()}get error(){return this.$$.ctx[4]}set error(e){this.$$set({error:e}),g()}get required(){return this.$$.ctx[5]}set required(e){this.$$set({required:e}),g()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),g()}}ue(We,{type:{},value:{},placeholder:{},disabled:{type:"Boolean"},error:{},required:{type:"Boolean"},name:{}},["label"],[],!0)});
