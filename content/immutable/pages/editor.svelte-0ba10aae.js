import{S as Re,i as Je,s as Le,e as v,c as p,a as g,d as _,b as I,g as q,n as ue,w as Ct,t as C,h as S,J as f,K as A,k as M,l as Ve,m as R,j as qe,L as Ce,M as Ae,N as he,x as we,y as Ee,z as Te,r as Z,p as ne,C as Ne,O as Pt,f as w,P as Se,q as Ue,Q as be,o as ze,R as at,T as it,U as ct,V as ut}from"../chunks/index-f844dc3c.js";import{m as St,c as Ut,d as zt,f as Bt,p as jt,a as ft,s as Mt}from"../chunks/rules-8712221c.js";function Rt(l){let e,t,n,r,o,i,s=l[1]&&_t(l);return{c(){e=v("p"),t=C(l[0]),n=M(),s&&s.c(),r=Ve(),this.h()},l(c){e=p(c,"P",{class:!0});var a=g(e);t=S(a,l[0]),a.forEach(_),n=R(c),s&&s.l(c),r=Ve(),this.h()},h(){I(e,"class","svelte-7a28bz")},m(c,a){q(c,e,a),f(e,t),q(c,n,a),s&&s.m(c,a),q(c,r,a),o||(i=A(e,"click",l[7]),o=!0)},p(c,a){a&1&&qe(t,c[0]),c[1]?s?s.p(c,a):(s=_t(c),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},d(c){c&&_(e),c&&_(n),s&&s.d(c),c&&_(r),o=!1,i()}}}function Jt(l){let e,t,n,r,o,i=l[1]&&ht(l);return{c(){e=v("input"),t=M(),i&&i.c(),n=Ve(),this.h()},l(s){e=p(s,"INPUT",{class:!0}),t=R(s),i&&i.l(s),n=Ve(),this.h()},h(){I(e,"class","svelte-7a28bz")},m(s,c){q(s,e,c),Ce(e,l[0]),q(s,t,c),i&&i.m(s,c),q(s,n,c),r||(o=[A(e,"click",qt),A(e,"input",l[5])],r=!0)},p(s,c){c&1&&e.value!==s[0]&&Ce(e,s[0]),s[1]?i?i.p(s,c):(i=ht(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(s){s&&_(e),s&&_(t),i&&i.d(s),s&&_(n),r=!1,Ae(o)}}}function _t(l){let e,t,n,r;return{c(){e=v("button"),t=C("edit")},l(o){e=p(o,"BUTTON",{});var i=g(e);t=S(i,"edit"),i.forEach(_)},m(o,i){q(o,e,i),f(e,t),n||(r=A(e,"click",l[8]),n=!0)},p:ue,d(o){o&&_(e),n=!1,r()}}}function ht(l){let e,t,n,r;return{c(){e=v("button"),t=C("done")},l(o){e=p(o,"BUTTON",{});var i=g(e);t=S(i,"done"),i.forEach(_)},m(o,i){q(o,e,i),f(e,t),n||(r=A(e,"click",l[6]),n=!0)},p:ue,d(o){o&&_(e),n=!1,r()}}}function Lt(l){let e;function t(o,i){return o[3]?Jt:Rt}let n=t(l),r=n(l);return{c(){e=v("main"),r.c(),this.h()},l(o){e=p(o,"MAIN",{style:!0,class:!0});var i=g(e);r.l(i),i.forEach(_),this.h()},h(){I(e,"style",l[2]),I(e,"class","svelte-7a28bz")},m(o,i){q(o,e,i),r.m(e,null)},p(o,[i]){n===(n=t(o))&&r?r.p(o,i):(r.d(1),r=n(o),r&&(r.c(),r.m(e,null))),i&4&&I(e,"style",o[2])},i:ue,o:ue,d(o){o&&_(e),r.d()}}}const qt=l=>{l.preventDefault(),l.stopPropagation()};function At(l,e,t){let{value:n}=e,{buttons:r=!1}=e,{style:o=""}=e,i=!1;function s(d){t(3,i=d)}function c(d,D){s(D),d.preventDefault(),d.stopPropagation()}Ct(()=>{window.addEventListener("click",()=>{t(3,i=!1)})});function a(){n=this.value,t(0,n)}const m=d=>{c(d,!1)},u=d=>{c(d,!0)},k=d=>{c(d,!0)};return l.$$set=d=>{"value"in d&&t(0,n=d.value),"buttons"in d&&t(1,r=d.buttons),"style"in d&&t(2,o=d.style)},[n,r,o,i,c,a,m,u,k]}class dt extends Re{constructor(e){super(),Je(this,e,At,Lt,Le,{value:0,buttons:1,style:2})}}function Ht(l){let e,t,n;return{c(){e=v("main"),this.h()},l(r){e=p(r,"MAIN",{style:!0,title:!0,class:!0});var o=g(e);o.forEach(_),this.h()},h(){I(e,"style",t="--bg:"+l[0].color+";"+l[1]),I(e,"title",n=l[0].value),I(e,"class","svelte-14rb7sg"),he(e,"selectable",l[2]),he(e,"selected",l[3]),he(e,"partially-selected",l[4])},m(r,o){q(r,e,o)},p(r,[o]){o&3&&t!==(t="--bg:"+r[0].color+";"+r[1])&&I(e,"style",t),o&1&&n!==(n=r[0].value)&&I(e,"title",n),o&4&&he(e,"selectable",r[2]),o&8&&he(e,"selected",r[3]),o&16&&he(e,"partially-selected",r[4])},i:ue,o:ue,d(r){r&&_(e)}}}function Ft(l,e,t){let{rule:n}=e,{style:r=""}=e,{selectable:o=!1}=e,{selected:i=!1}=e,{partially_selected:s=!1}=e;return l.$$set=c=>{"rule"in c&&t(0,n=c.rule),"style"in c&&t(1,r=c.style),"selectable"in c&&t(2,o=c.selectable),"selected"in c&&t(3,i=c.selected),"partially_selected"in c&&t(4,s=c.partially_selected)},[n,r,o,i,s]}class He extends Re{constructor(e){super(),Je(this,e,Ft,Ht,Le,{rule:0,style:1,selectable:2,selected:3,partially_selected:4})}}function mt(l,e,t){const n=l.slice();return n[28]=e[t],n[30]=t,n}function vt(l,e,t){const n=l.slice();return n[31]=e[t],n}function pt(l,e,t){const n=l.slice();return n[28]=e[t],n[34]=e,n[30]=t,n}function gt(l,e,t){const n=l.slice();return n[35]=e[t],n[36]=e,n[37]=t,n}function bt(l,e,t){const n=l.slice();return n[35]=e[t],n}function kt(l,e,t){const n=l.slice();return n[28]=e[t],n}function yt(l,e,t){const n=l.slice();return n[42]=e[t],n[30]=t,n}function wt(l){let e,t,n,r,o;t=new He({props:{rule:l[42],selectable:!0,selected:l[5]==l[30],partially_selected:l[4]==l[30]&&l[5]!=l[30]}});function i(){return l[16](l[30])}function s(...c){return l[17](l[30],...c)}return{c(){e=v("div"),we(t.$$.fragment),this.h()},l(c){e=p(c,"DIV",{class:!0});var a=g(e);Ee(t.$$.fragment,a),a.forEach(_),this.h()},h(){I(e,"class","rule-wrapper")},m(c,a){q(c,e,a),Te(t,e,null),n=!0,r||(o=[A(e,"click",i),A(e,"mouseover",s),A(e,"focus",Xt)],r=!0)},p(c,a){l=c;const m={};a[0]&1&&(m.rule=l[42]),a[0]&32&&(m.selected=l[5]==l[30]),a[0]&48&&(m.partially_selected=l[4]==l[30]&&l[5]!=l[30]),t.$set(m)},i(c){n||(Z(t.$$.fragment,c),n=!0)},o(c){ne(t.$$.fragment,c),n=!1},d(c){c&&_(e),Ne(t),r=!1,Ae(o)}}}function Et(l){let e,t=l[28]+"",n,r,o,i,s,c;function a(){return l[18](l[28])}return{c(){e=v("div"),n=C(t),r=M(),o=v("button"),i=C("\xD7"),this.h()},l(m){e=p(m,"DIV",{class:!0});var u=g(e);n=S(u,t),r=R(u),o=p(u,"BUTTON",{class:!0});var k=g(o);i=S(k,"\xD7"),k.forEach(_),u.forEach(_),this.h()},h(){I(o,"class","svelte-4k8o2m"),I(e,"class","available-connector svelte-4k8o2m"),he(e,"shadow",!l[1].includes(l[28]))},m(m,u){q(m,e,u),f(e,n),f(e,r),f(e,o),f(o,i),s||(c=A(o,"click",a),s=!0)},p(m,u){l=m,u[0]&8&&t!==(t=l[28]+"")&&qe(n,t),u[0]&10&&he(e,"shadow",!l[1].includes(l[28]))},d(m){m&&_(e),s=!1,c()}}}function Kt(l){let e,t;return{c(){e=v("h1"),t=C("Please select a tile from the left"),this.h()},l(n){e=p(n,"H1",{class:!0});var r=g(e);t=S(r,"Please select a tile from the left"),r.forEach(_),this.h()},h(){I(e,"class","svelte-4k8o2m")},m(n,r){q(n,e,r),f(e,t)},p:ue,i:ue,o:ue,d(n){n&&_(e)}}}function Qt(l){let e,t,n,r,o,i,s,c,a,m,u,k,d,D,P,U,W,oe,x,fe,se,re,ce;n=new He({props:{rule:l[0][l[5]],style:"min-width:100px;min-height:100px;transform: translate(-50%,-50%);"}});let $=l[0][l[5]].connectors,J=[];for(let h=0;h<$.length;h+=1)J[h]=Ot(pt(l,$,h));let ee=l[0][l[5]].connectors,O=[];for(let h=0;h<ee.length;h+=1)O[h]=Dt(mt(l,ee,h));const de=h=>ne(O[h],1,1,()=>{O[h]=null});function me(h){l[23](h)}let y={style:"flex:1;"};l[0][l[5]].value!==void 0&&(y.value=l[0][l[5]].value),k=new dt({props:y}),it.push(()=>ct(k,"value",me));function V(h){l[24](h)}let X={style:"flex:1;"};l[0][l[5]].color!==void 0&&(X.value=l[0][l[5]].color),x=new dt({props:X}),it.push(()=>ct(x,"value",V));let K=navigator.clipboard&&Gt(l);return{c(){e=v("div"),t=v("div"),we(n.$$.fragment),r=M();for(let h=0;h<J.length;h+=1)J[h].c();o=M();for(let h=0;h<O.length;h+=1)O[h].c();i=M(),s=v("div"),c=v("div"),a=v("p"),m=C("Name:"),u=M(),we(k.$$.fragment),D=M(),P=v("div"),U=v("p"),W=C("Color:"),oe=M(),we(x.$$.fragment),se=M(),re=v("div"),K&&K.c(),this.h()},l(h){e=p(h,"DIV",{style:!0});var N=g(e);t=p(N,"DIV",{style:!0});var Q=g(t);Ee(n.$$.fragment,Q),Q.forEach(_),r=R(N);for(let H=0;H<J.length;H+=1)J[H].l(N);o=R(N);for(let H=0;H<O.length;H+=1)O[H].l(N);N.forEach(_),i=R(h),s=p(h,"DIV",{class:!0});var te=g(s);c=p(te,"DIV",{style:!0,class:!0});var G=g(c);a=p(G,"P",{style:!0,class:!0});var T=g(a);m=S(T,"Name:"),T.forEach(_),u=R(G),Ee(k.$$.fragment,G),G.forEach(_),D=R(te),P=p(te,"DIV",{style:!0,class:!0});var B=g(P);U=p(B,"P",{style:!0,class:!0});var F=g(U);W=S(F,"Color:"),F.forEach(_),oe=R(B),Ee(x.$$.fragment,B),B.forEach(_),se=R(te),re=p(te,"DIV",{class:!0});var ke=g(re);K&&K.l(ke),ke.forEach(_),te.forEach(_),this.h()},h(){w(t,"width","0"),w(t,"height","0"),w(e,"flex","1"),w(e,"justify-content","center"),w(e,"display","flex"),w(e,"align-items","center"),w(e,"min-width","750px"),w(e,"min-height","750px"),w(a,"flex","1"),I(a,"class","svelte-4k8o2m"),w(c,"display","flex"),w(c,"justify-content","space-between"),w(c,"border-bottom","1px solid #555"),I(c,"class","svelte-4k8o2m"),w(U,"flex","1"),I(U,"class","svelte-4k8o2m"),w(P,"display","flex"),w(P,"justify-content","space-between"),w(P,"border-bottom","1px solid #555"),I(P,"class","svelte-4k8o2m"),I(re,"class","svelte-4k8o2m"),I(s,"class","properties svelte-4k8o2m")},m(h,N){q(h,e,N),f(e,t),Te(n,t,null),f(e,r);for(let Q=0;Q<J.length;Q+=1)J[Q].m(e,null);f(e,o);for(let Q=0;Q<O.length;Q+=1)O[Q].m(e,null);q(h,i,N),q(h,s,N),f(s,c),f(c,a),f(a,m),f(c,u),Te(k,c,null),f(s,D),f(s,P),f(P,U),f(U,W),f(P,oe),Te(x,P,null),f(s,se),f(s,re),K&&K.m(re,null),ce=!0},p(h,N){const Q={};if(N[0]&33&&(Q.rule=h[0][h[5]]),n.$set(Q),N[0]&169){$=h[0][h[5]].connectors;let T;for(T=0;T<$.length;T+=1){const B=pt(h,$,T);J[T]?J[T].p(B,N):(J[T]=Ot(B),J[T].c(),J[T].m(e,o))}for(;T<J.length;T+=1)J[T].d(1);J.length=$.length}if(N[0]&417){ee=h[0][h[5]].connectors;let T;for(T=0;T<ee.length;T+=1){const B=mt(h,ee,T);O[T]?(O[T].p(B,N),Z(O[T],1)):(O[T]=Dt(B),O[T].c(),Z(O[T],1),O[T].m(e,null))}for(ze(),T=ee.length;T<O.length;T+=1)de(T);Ue()}const te={};!d&&N[0]&33&&(d=!0,te.value=h[0][h[5]].value,ut(()=>d=!1)),k.$set(te);const G={};!fe&&N[0]&33&&(fe=!0,G.value=h[0][h[5]].color,ut(()=>fe=!1)),x.$set(G),navigator.clipboard&&K.p(h,N)},i(h){if(!ce){Z(n.$$.fragment,h);for(let N=0;N<ee.length;N+=1)Z(O[N]);Z(k.$$.fragment,h),Z(x.$$.fragment,h),ce=!0}},o(h){ne(n.$$.fragment,h),O=O.filter(Boolean);for(let N=0;N<O.length;N+=1)ne(O[N]);ne(k.$$.fragment,h),ne(x.$$.fragment,h),ce=!1},d(h){h&&_(e),Ne(n),be(J,h),be(O,h),h&&_(i),h&&_(s),Ne(k),Ne(x),K&&K.d()}}}function Tt(l){let e,t=l[35]+"",n,r;return{c(){e=v("option"),n=C(t),this.h()},l(o){e=p(o,"OPTION",{});var i=g(e);n=S(i,t),i.forEach(_),this.h()},h(){e.__value=r=l[35],e.value=e.__value},m(o,i){q(o,e,i),f(e,n)},p(o,i){i[0]&8&&t!==(t=o[35]+"")&&qe(n,t),i[0]&8&&r!==(r=o[35])&&(e.__value=r,e.value=e.__value)},d(o){o&&_(e)}}}function Nt(l){let e,t,n,r,o,i=l[3],s=[];for(let a=0;a<i.length;a+=1)s[a]=Tt(bt(l,i,a));function c(){l[20].call(e,l[36],l[37])}return{c(){e=v("select"),t=v("option"),n=C("[delete]");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=p(a,"SELECT",{});var m=g(e);t=p(m,"OPTION",{});var u=g(t);n=S(u,"[delete]"),u.forEach(_);for(let k=0;k<s.length;k+=1)s[k].l(m);m.forEach(_),this.h()},h(){t.__value="null",t.value=t.__value,l[35]===void 0&&Pt(c)},m(a,m){q(a,e,m),f(e,t),f(t,n);for(let u=0;u<s.length;u+=1)s[u].m(e,null);Se(e,l[35]),r||(o=A(e,"change",c),r=!0)},p(a,m){if(l=a,m[0]&8){i=l[3];let u;for(u=0;u<i.length;u+=1){const k=bt(l,i,u);s[u]?s[u].p(k,m):(s[u]=Tt(k),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=i.length}m[0]&41&&Se(e,l[35])},d(a){a&&_(e),be(s,a),r=!1,o()}}}function Ot(l){let e,t,n,r,o,i,s,c=l[28],a=[];for(let u=0;u<c.length;u+=1)a[u]=Nt(gt(l,c,u));function m(){return l[21](l[28],l[34],l[30])}return{c(){e=v("div"),t=v("div");for(let u=0;u<a.length;u+=1)a[u].c();n=M(),r=v("button"),o=C("+"),this.h()},l(u){e=p(u,"DIV",{class:!0,style:!0});var k=g(e);t=p(k,"DIV",{class:!0});var d=g(t);for(let P=0;P<a.length;P+=1)a[P].l(d);n=R(d),r=p(d,"BUTTON",{});var D=g(r);o=S(D,"+"),D.forEach(_),d.forEach(_),k.forEach(_),this.h()},h(){I(t,"class","connector-content svelte-4k8o2m"),I(e,"class","connector svelte-4k8o2m"),w(e,"transform",l[7][l[30]])},m(u,k){q(u,e,k),f(e,t);for(let d=0;d<a.length;d+=1)a[d].m(t,null);f(t,n),f(t,r),f(r,o),i||(s=A(r,"click",m),i=!0)},p(u,k){if(l=u,k[0]&41){c=l[28];let d;for(d=0;d<c.length;d+=1){const D=gt(l,c,d);a[d]?a[d].p(D,k):(a[d]=Nt(D),a[d].c(),a[d].m(t,n))}for(;d<a.length;d+=1)a[d].d(1);a.length=c.length}},d(u){u&&_(e),be(a,u),i=!1,s()}}}function It(l){let e,t;return e=new He({props:{rule:l[31]}}),{c(){we(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,r){Te(e,n,r),t=!0},p(n,r){const o={};r[0]&33&&(o.rule=n[31]),e.$set(o)},i(n){t||(Z(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Dt(l){let e,t,n,r;function o(...a){return l[22](l[30],l[28],...a)}let i=l[0].filter(o),s=[];for(let a=0;a<i.length;a+=1)s[a]=It(vt(l,i,a));const c=a=>ne(s[a],1,1,()=>{s[a]=null});return{c(){e=v("div"),t=v("div");for(let a=0;a<s.length;a+=1)s[a].c();n=M(),this.h()},l(a){e=p(a,"DIV",{class:!0,style:!0});var m=g(e);t=p(m,"DIV",{class:!0});var u=g(t);for(let k=0;k<s.length;k+=1)s[k].l(u);u.forEach(_),n=R(m),m.forEach(_),this.h()},h(){I(t,"class","possible-content svelte-4k8o2m"),I(e,"class","possible svelte-4k8o2m"),w(e,"transform",l[7][l[30]])},m(a,m){q(a,e,m),f(e,t);for(let u=0;u<s.length;u+=1)s[u].m(t,null);f(e,n),r=!0},p(a,m){if(l=a,m[0]&289){i=l[0].filter(o);let u;for(u=0;u<i.length;u+=1){const k=vt(l,i,u);s[u]?(s[u].p(k,m),Z(s[u],1)):(s[u]=It(k),s[u].c(),Z(s[u],1),s[u].m(t,null))}for(ze(),u=i.length;u<s.length;u+=1)c(u);Ue()}},i(a){if(!r){for(let m=0;m<i.length;m+=1)Z(s[m]);r=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)ne(s[m]);r=!1},d(a){a&&_(e),be(s,a)}}}function Gt(l){let e,t,n,r;return{c(){e=v("button"),t=C("Copy JSON"),this.h()},l(o){e=p(o,"BUTTON",{class:!0});var i=g(e);t=S(i,"Copy JSON"),i.forEach(_),this.h()},h(){I(e,"class","svelte-4k8o2m")},m(o,i){q(o,e,i),f(e,t),n||(r=A(e,"click",l[25]),n=!0)},p:ue,d(o){o&&_(e),n=!1,r()}}}function Wt(l){let e,t,n,r,o,i,s,c,a,m,u,k,d,D,P,U,W,oe,x,fe,se,re,ce,$,J,ee,O,de,me,y,V,X,K,h,N,Q,te,G,T,B,F,ke,H,Be,je,ve,ae,ie,Oe,Me,Fe,pe=l[0],j=[];for(let b=0;b<pe.length;b+=1)j[b]=wt(yt(l,pe,b));const Vt=b=>ne(j[b],1,1,()=>{j[b]=null});let ye=l[3],Y=[];for(let b=0;b<ye.length;b+=1)Y[b]=Et(kt(l,ye,b));const Ke=[Qt,Kt],_e=[];function Qe(b,z){return b[5]!=null&&b[0]!=null&&b[0]!=[]?0:1}return ae=Qe(l),ie=_e[ae]=Ke[ae](l),{c(){e=v("main"),t=v("div"),n=v("div"),r=v("select"),o=v("option"),i=C("Dungeon"),s=v("option"),c=C("Minecraft"),a=v("option"),m=C("Checkers"),u=v("option"),k=C("Layers"),d=v("option"),D=C("Flowers"),P=v("option"),U=C("Stripes"),W=M(),oe=v("button"),x=C("new"),fe=M(),se=v("button"),re=C("export"),ce=M(),$=v("button"),J=C("import"),ee=M(),O=v("h3"),de=C("Tiles"),me=M(),y=v("div");for(let b=0;b<j.length;b+=1)j[b].c();V=M(),X=v("button"),K=C("+"),h=M(),N=v("h3"),Q=C("Connectors"),te=M(),G=v("div");for(let b=0;b<Y.length;b+=1)Y[b].c();T=M(),B=v("div"),F=v("input"),ke=M(),H=v("button"),Be=C("+"),je=M(),ve=v("div"),ie.c(),this.h()},l(b){e=p(b,"MAIN",{class:!0});var z=g(e);t=p(z,"DIV",{class:!0});var L=g(t);n=p(L,"DIV",{style:!0});var E=g(n);r=p(E,"SELECT",{});var le=g(r);o=p(le,"OPTION",{});var Ge=g(o);i=S(Ge,"Dungeon"),Ge.forEach(_),s=p(le,"OPTION",{});var We=g(s);c=S(We,"Minecraft"),We.forEach(_),a=p(le,"OPTION",{});var Xe=g(a);m=S(Xe,"Checkers"),Xe.forEach(_),u=p(le,"OPTION",{});var Ye=g(u);k=S(Ye,"Layers"),Ye.forEach(_),d=p(le,"OPTION",{});var Ze=g(d);D=S(Ze,"Flowers"),Ze.forEach(_),P=p(le,"OPTION",{});var xe=g(P);U=S(xe,"Stripes"),xe.forEach(_),le.forEach(_),W=R(E),oe=p(E,"BUTTON",{});var $e=g(oe);x=S($e,"new"),$e.forEach(_),fe=R(E),se=p(E,"BUTTON",{});var et=g(se);re=S(et,"export"),et.forEach(_),ce=R(E),$=p(E,"BUTTON",{});var tt=g($);J=S(tt,"import"),tt.forEach(_),E.forEach(_),ee=R(L),O=p(L,"H3",{style:!0});var lt=g(O);de=S(lt,"Tiles"),lt.forEach(_),me=R(L),y=p(L,"DIV",{class:!0});var Ie=g(y);for(let ge=0;ge<j.length;ge+=1)j[ge].l(Ie);V=R(Ie),X=p(Ie,"BUTTON",{class:!0});var nt=g(X);K=S(nt,"+"),nt.forEach(_),Ie.forEach(_),h=R(L),N=p(L,"H3",{});var ot=g(N);Q=S(ot,"Connectors"),ot.forEach(_),te=R(L),G=p(L,"DIV",{class:!0});var De=g(G);for(let ge=0;ge<Y.length;ge+=1)Y[ge].l(De);T=R(De),B=p(De,"DIV",{style:!0});var Pe=g(B);F=p(Pe,"INPUT",{style:!0}),ke=R(Pe),H=p(Pe,"BUTTON",{style:!0});var st=g(H);Be=S(st,"+"),st.forEach(_),Pe.forEach(_),De.forEach(_),L.forEach(_),je=R(z),ve=p(z,"DIV",{class:!0});var rt=g(ve);ie.l(rt),rt.forEach(_),z.forEach(_),this.h()},h(){o.__value="5",o.value=o.__value,s.__value="0",s.value=s.__value,a.__value="1",a.value=a.__value,u.__value="2",u.value=u.__value,d.__value="3",d.value=d.__value,P.__value="6",P.value=P.__value,l[2]===void 0&&Pt(()=>l[15].call(r)),w(n,"display","flex"),w(n,"gap",".25em"),w(n,"flex-wrap","wrap"),w(O,"margin-block","0"),I(X,"class","add-tile svelte-4k8o2m"),I(y,"class","selection svelte-4k8o2m"),w(F,"height","2em"),w(F,"width","8em"),w(F,"border","none"),w(F,"background-color","#191919"),w(F,"padding-top","0px"),w(F,"padding-bottom","0px"),w(F,"outline","none"),w(F,"font-size","1em"),w(F,"padding-left",".5em"),w(H,"height","2em"),w(H,"box-sizing","content-box"),w(H,"border","none"),w(H,"padding-top","0px"),w(H,"padding-bottom","0px"),w(H,"font-size","1em"),w(B,"display","flex"),w(B,"background-color","#191919"),w(B,"border","1px solid #2d2c2d"),w(B,"border-radius",".25rem"),w(B,"overflow","hidden"),I(G,"class","available-connectors svelte-4k8o2m"),I(t,"class","browser svelte-4k8o2m"),I(ve,"class","editor svelte-4k8o2m"),I(e,"class","svelte-4k8o2m")},m(b,z){q(b,e,z),f(e,t),f(t,n),f(n,r),f(r,o),f(o,i),f(r,s),f(s,c),f(r,a),f(a,m),f(r,u),f(u,k),f(r,d),f(d,D),f(r,P),f(P,U),Se(r,l[2]),f(n,W),f(n,oe),f(oe,x),f(n,fe),f(n,se),f(se,re),f(n,ce),f(n,$),f($,J),f(t,ee),f(t,O),f(O,de),f(t,me),f(t,y);for(let L=0;L<j.length;L+=1)j[L].m(y,null);f(y,V),f(y,X),f(X,K),f(t,h),f(t,N),f(N,Q),f(t,te),f(t,G);for(let L=0;L<Y.length;L+=1)Y[L].m(G,null);f(G,T),f(G,B),f(B,F),Ce(F,l[6]),f(B,ke),f(B,H),f(H,Be),f(e,je),f(e,ve),_e[ae].m(ve,null),Oe=!0,Me||(Fe=[A(r,"change",l[15]),A(oe,"click",l[9]),A(se,"click",l[10]),A($,"click",l[11]),A(X,"click",l[12]),A(F,"input",l[19]),A(H,"click",l[14]),A(e,"mouseover",l[26]),A(e,"focus",Yt)],Me=!0)},p(b,z){if(z[0]&4&&Se(r,b[2]),z[0]&49){pe=b[0];let E;for(E=0;E<pe.length;E+=1){const le=yt(b,pe,E);j[E]?(j[E].p(le,z),Z(j[E],1)):(j[E]=wt(le),j[E].c(),Z(j[E],1),j[E].m(y,V))}for(ze(),E=pe.length;E<j.length;E+=1)Vt(E);Ue()}if(z[0]&8202){ye=b[3];let E;for(E=0;E<ye.length;E+=1){const le=kt(b,ye,E);Y[E]?Y[E].p(le,z):(Y[E]=Et(le),Y[E].c(),Y[E].m(G,T))}for(;E<Y.length;E+=1)Y[E].d(1);Y.length=ye.length}z[0]&64&&F.value!==b[6]&&Ce(F,b[6]);let L=ae;ae=Qe(b),ae===L?_e[ae].p(b,z):(ze(),ne(_e[L],1,1,()=>{_e[L]=null}),Ue(),ie=_e[ae],ie?ie.p(b,z):(ie=_e[ae]=Ke[ae](b),ie.c()),Z(ie,1),ie.m(ve,null))},i(b){if(!Oe){for(let z=0;z<pe.length;z+=1)Z(j[z]);Z(ie),Oe=!0}},o(b){j=j.filter(Boolean);for(let z=0;z<j.length;z+=1)ne(j[z]);ne(ie),Oe=!1},d(b){b&&_(e),be(j,b),be(Y,b),_e[ae].d(),Me=!1,Ae(Fe)}}}const Xt=()=>{},Yt=()=>{};function Zt(l,e,t){const n=["translate( 0,  var(--sm))","translate(var(--sm), 0px)","translate( 0,   var(--s))","translate( var(--s), 0px)"],r={0:2,1:3,2:0,3:1};let o=ft,i=[],s=[];function c(){t(0,o=[])}function a(){alert(JSON.stringify(o))}function m(){let y=prompt("Paste rules here:");if(y!=null)try{let V=JSON.parse(y);t(0,o=V)}catch(V){alert("Error parsing rules: "+V)}}function u(){let y=prompt("Tile name");if(y==null)return;let V=prompt("Tile color");V!=null&&(o.push({value:y,color:V,connectors:[[],[],[],[]]}),t(0,o),t(2,D))}function k(y){for(let V of o)V.connectors=V.connectors.map(X=>X.filter(K=>K!==y));t(0,o),t(2,D)}function d(){W!=null&&W!==""&&(t(3,i=[...i,W]),console.log("Added new connector",W),t(6,W=null))}let D="5",P,U,W;function oe(){D=at(this),t(2,D)}const x=y=>{t(5,U=y),t(4,P=y)},fe=(y,V)=>{t(5,U=y),V.preventDefault(),V.stopPropagation()},se=y=>{k(y)};function re(){W=this.value,t(6,W)}function ce(y,V){y[V]=at(this),t(0,o),t(2,D),t(5,U),t(2,D),t(3,i),t(0,o),t(1,s),t(2,D)}const $=(y,V,X)=>{y.push(i.length>0?i[0]:"new connector"),t(0,V[X]=y,o,(t(5,U),t(2,D)))},J=(y,V,X)=>X.connectors[r[y]].filter(K=>V.includes(K)).length>0;function ee(y){l.$$.not_equal(o[U].value,y)&&(o[U].value=y,t(0,o),t(2,D))}function O(y){l.$$.not_equal(o[U].color,y)&&(o[U].color=y,t(0,o),t(2,D))}const de=()=>{navigator.clipboard.writeText(JSON.stringify(o[U],null,4))},me=()=>{t(5,U=P)};return l.$$.update=()=>{l.$$.dirty[0]&4&&D!=null&&(t(0,o=[St,Ut,zt,Bt,jt,ft,Mt][+D]),t(4,P=null),t(5,U=null)),l.$$.dirty[0]&3&&o!=null&&(k("null"),t(1,s=[...new Set(o.map(y=>y.connectors.flat()).flat())]),t(3,i=[...s]))},[o,s,D,i,P,U,W,n,r,c,a,m,u,k,d,oe,x,fe,se,re,ce,$,J,ee,O,de,me]}class el extends Re{constructor(e){super(),Je(this,e,Zt,Wt,Le,{},null,[-1,-1])}}export{el as default};