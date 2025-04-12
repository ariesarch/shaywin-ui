(function(g,m){typeof exports=="object"&&typeof module<"u"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(g=typeof globalThis<"u"?globalThis:g||self,m(g.SimpleUI={}))})(this,function(g){"use strict";var Ce=Object.defineProperty;var Le=(g,m,v)=>m in g?Ce(g,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):g[m]=v;var R=(g,m,v)=>Le(g,typeof m!="symbol"?m+"":m,v);function m(){}function v(e,t){for(const n in t)e[n]=t[n];return e}function V(e){return e()}function F(){return Object.create(null)}function q(e){e.forEach(V)}function G(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function J(e,t,n,l){if(e){const i=K(e,t,n,l);return e[0](i)}}function K(e,t,n,l){return e[1]&&l?v(n.ctx.slice(),e[1](l(t))):n.ctx}function Q(e,t,n,l){if(e[2]&&l){const i=e[2](l(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(t.dirty.length,i.length);for(let d=0;d<s;d+=1)o[d]=t.dirty[d]|i[d];return o}return t.dirty|i}return t.dirty}function X(e,t,n,l,i,o){if(i){const s=K(t,n,l,o);e.p(s,i)}}function Y(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function Z(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function N(e,t){const n={};t=new Set(t);for(const l in e)!t.has(l)&&l[0]!=="$"&&(n[l]=e[l]);return n}function de(e){const t={};for(const n in e)t[n]=!0;return t}function P(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function A(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function x(){return w(" ")}function $(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const _e=["width","height"];function W(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const l in t)t[l]==null?e.removeAttribute(l):l==="style"?e.style.cssText=t[l]:l==="__value"?e.value=e[l]=t[l]:n[l]&&n[l].set&&_e.indexOf(l)===-1?e[l]=t[l]:p(e,l,t[l])}function he(e){return Array.from(e.childNodes)}function be(e,t){t=""+t,e.data!==t&&(e.data=t)}let L;function I(e){L=e}function me(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const S=[],ee=[];let E=[];const te=[],ge=Promise.resolve();let M=!1;function ye(){M||(M=!0,ge.then(ne))}function U(e){E.push(e)}const D=new Set;let j=0;function ne(){if(j!==0)return;const e=L;do{try{for(;j<S.length;){const t=S[j];j++,I(t),ve(t.$$)}}catch(t){throw S.length=0,j=0,t}for(I(null),S.length=0,j=0;ee.length;)ee.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];D.has(n)||(D.add(n),n())}E.length=0}while(S.length);for(;te.length;)te.pop()();M=!1,D.clear(),I(e)}function ve(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function pe(e){const t=[],n=[];E.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),E=t}const B=new Set;let k;function ke(){k={r:0,c:[],p:k}}function Se(){k.r||q(k.c),k=k.p}function O(e,t){e&&e.i&&(B.delete(e),e.i(t))}function C(e,t,n,l){if(e&&e.o){if(B.has(e))return;B.add(e),k.c.push(()=>{B.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function le(e,t){const n={},l={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],d=t[o];if(d){for(const f in s)f in d||(l[f]=1);for(const f in d)i[f]||(n[f]=d[f],i[f]=1);e[o]=d}else for(const f in s)i[f]=1}for(const s in l)s in n||(n[s]=void 0);return n}function Ee(e,t,n){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),U(()=>{const o=e.$$.on_mount.map(V).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...o):q(o),e.$$.on_mount=[]}),i.forEach(U)}function je(e,t){const n=e.$$;n.fragment!==null&&(pe(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(S.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,l,i,o,s=null,d=[-1]){const f=L;I(e);const u=e.$$={fragment:null,ctx:[],props:o,update:m,not_equal:i,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:F(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};s&&s(u.root);let h=!1;if(u.ctx=n?n(e,t.props||{},(a,y,...b)=>{const _=b.length?b[0]:y;return u.ctx&&i(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),h&&Oe(e,a)),y}):[],u.update(),h=!0,q(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const a=he(t.target);u.fragment&&u.fragment.l(a),a.forEach(z)}else u.fragment&&u.fragment.c();t.intro&&O(e.$$.fragment),Ee(e,t.target,t.anchor),ne()}I(f)}class re{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){je(this,1),this.$destroy=m}$on(t,n){if(!G(n))return m;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);function ze(e){let t,n,l,i;const o=e[8].default,s=J(o,e,e[7],null);let d=[{type:e[0]},{class:e[2]},{disabled:e[1]},e[3]],f={};for(let u=0;u<d.length;u+=1)f=v(f,d[u]);return{c(){t=A("button"),s&&s.c(),W(t,f)},m(u,h){T(u,t,h),s&&s.m(t,null),t.autofocus&&t.focus(),n=!0,l||(i=$(t,"click",e[9]),l=!0)},p(u,[h]){s&&s.p&&(!n||h&128)&&X(s,o,u,u[7],n?Q(o,u[7],h,null):Y(u[7]),null),W(t,f=le(d,[(!n||h&1)&&{type:u[0]},(!n||h&4)&&{class:u[2]},(!n||h&2)&&{disabled:u[1]},h&8&&u[3]]))},i(u){n||(O(s,u),n=!0)},o(u){C(s,u),n=!1},d(u){u&&z(t),s&&s.d(u),l=!1,i()}}}const Ae="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";function Ie(e,t,n){let l;const i=["type","variant","size","disabled","fullWidth"];let o=N(t,i),{$$slots:s={},$$scope:d}=t,{type:f="button"}=t,{variant:u="primary"}=t,{size:h="md"}=t,{disabled:a=!1}=t,{fullWidth:y=!1}=t;const b={primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},_={sm:"h-9 px-3 text-sm",md:"h-10 px-4 py-2",lg:"h-11 px-8 text-lg"};function c(r){me.call(this,e,r)}return e.$$set=r=>{t=v(v({},t),Z(r)),n(3,o=N(t,i)),"type"in r&&n(0,f=r.type),"variant"in r&&n(4,u=r.variant),"size"in r&&n(5,h=r.size),"disabled"in r&&n(1,a=r.disabled),"fullWidth"in r&&n(6,y=r.fullWidth),"$$scope"in r&&n(7,d=r.$$scope)},e.$$.update=()=>{e.$$.dirty&112&&n(2,l=`${Ae} ${b[u]} ${_[h]} ${y?"w-full":""}`)},[f,a,l,o,u,h,y,d,s,c]}class Ne extends re{constructor(t){super(),ie(this,t,Ie,ze,H,{type:0,variant:4,size:5,disabled:1,fullWidth:6})}}const Pe=e=>({}),ue=e=>({});function oe(e){let t,n;const l=e[11].label,i=J(l,e,e[10],ue);return{c(){t=A("label"),i&&i.c(),p(t,"for",e[6]),p(t,"class","text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")},m(o,s){T(o,t,s),i&&i.m(t,null),n=!0},p(o,s){i&&i.p&&(!n||s&1024)&&X(i,l,o,o[10],n?Q(l,o[10],s,Pe):Y(o[10]),ue),(!n||s&64)&&p(t,"for",o[6])},i(o){n||(O(i,o),n=!0)},o(o){C(i,o),n=!1},d(o){o&&z(t),i&&i.d(o)}}}function se(e){let t,n,l;return{c(){t=A("p"),n=w(e[4]),p(t,"class","text-sm text-red-500"),p(t,"id",l=e[6]+"-error")},m(i,o){T(i,t,o),P(t,n)},p(i,o){o&16&&be(n,i[4]),o&64&&l!==(l=i[6]+"-error")&&p(t,"id",l)},d(i){i&&z(t)}}}function Te(e){let t,n,l,i,o,s,d,f,u,h,a=e[8].label&&oe(e),y=[{type:e[1]},{name:e[6]},{value:e[0]},{placeholder:e[2]},{disabled:e[3]},{required:e[5]},{class:i=`${fe} ${e[4]?"border-red-500 focus-visible:ring-red-500":""}`},{"aria-invalid":o=!!e[4]},{"aria-describedby":s=e[4]?`${e[6]}-error`:void 0},e[9]],b={};for(let c=0;c<y.length;c+=1)b=v(b,y[c]);let _=e[4]&&se(e);return{c(){t=A("div"),a&&a.c(),n=x(),l=A("input"),d=x(),_&&_.c(),W(l,b),p(t,"class","grid w-full max-w-sm gap-1.5")},m(c,r){T(c,t,r),a&&a.m(t,null),P(t,n),P(t,l),"value"in b&&(l.value=b.value),l.autofocus&&l.focus(),P(t,d),_&&_.m(t,null),f=!0,u||(h=$(l,"input",e[7]),u=!0)},p(c,[r]){c[8].label?a?(a.p(c,r),r&256&&O(a,1)):(a=oe(c),a.c(),O(a,1),a.m(t,n)):a&&(ke(),C(a,1,1,()=>{a=null}),Se()),W(l,b=le(y,[(!f||r&2)&&{type:c[1]},(!f||r&64)&&{name:c[6]},(!f||r&1&&l.value!==c[0])&&{value:c[0]},(!f||r&4)&&{placeholder:c[2]},(!f||r&8)&&{disabled:c[3]},(!f||r&32)&&{required:c[5]},(!f||r&16&&i!==(i=`${fe} ${c[4]?"border-red-500 focus-visible:ring-red-500":""}`))&&{class:i},(!f||r&16&&o!==(o=!!c[4]))&&{"aria-invalid":o},(!f||r&80&&s!==(s=c[4]?`${c[6]}-error`:void 0))&&{"aria-describedby":s},r&512&&c[9]])),"value"in b&&(l.value=b.value),c[4]?_?_.p(c,r):(_=se(c),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i(c){f||(O(a),f=!0)},o(c){C(a),f=!1},d(c){c&&z(t),a&&a.d(),_&&_.d(),u=!1,h()}}}const fe="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";function We(e,t,n){const l=["type","value","placeholder","disabled","error","required","name"];let i=N(t,l),{$$slots:o={},$$scope:s}=t;const d=de(o);let{type:f="text"}=t,{value:u=""}=t,{placeholder:h=""}=t,{disabled:a=!1}=t,{error:y=""}=t,{required:b=!1}=t,{name:_=""}=t;function c(r){const ae=r.target;n(0,u=f==="number"?ae.valueAsNumber.toString():ae.value)}return e.$$set=r=>{t=v(v({},t),Z(r)),n(9,i=N(t,l)),"type"in r&&n(1,f=r.type),"value"in r&&n(0,u=r.value),"placeholder"in r&&n(2,h=r.placeholder),"disabled"in r&&n(3,a=r.disabled),"error"in r&&n(4,y=r.error),"required"in r&&n(5,b=r.required),"name"in r&&n(6,_=r.name),"$$scope"in r&&n(10,s=r.$$scope)},[u,f,h,a,y,b,_,c,d,i,s,o]}class Be extends re{constructor(t){super(),ie(this,t,We,Te,H,{type:1,value:0,placeholder:2,disabled:3,error:4,required:5,name:6})}}g.SButton=Ne,g.SInput=Be,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
