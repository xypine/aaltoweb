function q(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function N(){return Object.create(null)}function p(t){t.forEach(T)}function D(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function ct(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function lt(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function ut(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function H(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:J(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(o[r],f)}}function Q(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function st(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function at(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function W(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function ft(){return k(" ")}function _t(){return k("")}function dt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function mt(t){return t===""?null:+t}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,c=!1){V(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function X(t,n,e,i){return L(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function pt(t,n,e){return X(t,n,e,W)}function Y(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function yt(t){return Y(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function xt(t,n){t.value=n==null?"":n}function bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function $t(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function wt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function vt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function A(){if(!m)throw new Error("Function called outside component initialization");return m}function Et(t){A().$$.on_mount.push(t)}function kt(t){A().$$.after_update.push(t)}function At(t,n){return A().$$.context.set(t,n),n}const d=[],C=[],x=[],M=[],O=Promise.resolve();let v=!1;function P(){v||(v=!0,O.then(I))}function St(){return P(),O}function E(t){x.push(t)}const w=new Set;let g=0;function I(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),Z(n.$$)}for(h(null),d.length=0,g=0;C.length;)C.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];w.has(e)||(w.add(e),e())}x.length=0}while(d.length);for(;M.length;)M.pop()();v=!1,w.clear(),h(t)}function Z(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const b=new Set;let _;function jt(){_={r:0,c:[],p:_}}function Nt(){_.r||p(_.c),_=_.p}function tt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Mt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Tt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function nt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||E(()=>{const r=s.map(T).filter(D);o?o.push(...r):p(r),t.$$.on_mount=[]}),l.forEach(E)}function et(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){t.$$.dirty[0]===-1&&(d.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,c,s,o,l=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:q,not_equal:c,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:N(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...S)=>{const j=S.length?S[0]:y;return u.ctx&&c(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&it(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){H();const a=U(n.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&tt(t.$$.fragment),nt(t,n.target,n.anchor,n.customElement),G(),I()}h(r)}class Ot{$destroy(){et(this,1),this.$destroy=q}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Mt as A,qt as B,et as C,z as D,St as E,ct as F,lt as G,ut as H,ot as I,Q as J,dt as K,at as L,p as M,vt as N,E as O,$t as P,xt as Q,mt as R,Ot as S,wt as T,U as a,ht as b,pt as c,R as d,W as e,bt as f,st as g,Y as h,Lt as i,gt as j,ft as k,_t as l,yt as m,q as n,jt as o,Ct as p,Nt as q,tt as r,rt as s,k as t,At as u,kt as v,Et as w,Tt as x,Bt as y,nt as z};
