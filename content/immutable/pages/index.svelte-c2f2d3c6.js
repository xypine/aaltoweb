var ze=Object.defineProperty,Ve=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var _e=(t,l,e)=>l in t?ze(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,me=(t,l)=>{for(var e in l||(l={}))Ce.call(l,e)&&_e(t,e,l[e]);if(be)for(var e of be(l))Me.call(l,e)&&_e(t,e,l[e]);return t},ye=(t,l)=>Ve(t,Ae(l));import{S as Le,i as Ue,s as je,e as I,k as j,c as S,a as N,m as B,d,b as h,g as Q,J as r,t as P,h as F,f as O,K as J,j as ae,l as ke,L as ue,M as Te,N as Be,O as ne,P as ce,n as qe}from"../chunks/index-72d9332c.js";function we(t,l,e){const s=t.slice();return s[23]=l[e],s[25]=e,s}function Ee(t,l,e){const s=t.slice();return s[26]=l[e],s[28]=e,s}function Ie(t,l,e){const s=t.slice();return s[29]=l[e],s}function Se(t){let l,e=t[26].possible,s=[];for(let o=0;o<e.length;o+=1)s[o]=De(Ie(t,e,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();l=ke()},l(o){for(let i=0;i<s.length;i+=1)s[i].l(o);l=ke()},m(o,i){for(let n=0;n<s.length;n+=1)s[n].m(o,i);Q(o,l,i)},p(o,i){if(i[0]&4){e=o[26].possible;let n;for(n=0;n<e.length;n+=1){const c=Ie(o,e,n);s[n]?s[n].p(c,i):(s[n]=De(c),s[n].c(),s[n].m(l.parentNode,l))}for(;n<s.length;n+=1)s[n].d(1);s.length=e.length}},d(o){ue(s,o),o&&d(l)}}}function De(t){let l;return{c(){l=I("div"),this.h()},l(e){l=S(e,"DIV",{class:!0,style:!0}),N(l).forEach(d),this.h()},h(){h(l,"class","possible svelte-ogqyvg"),O(l,"--color",t[29].color),O(l,"--opacity",1/t[26].possible.length)},m(e,s){Q(e,l,s)},p(e,s){s[0]&4&&O(l,"--color",e[29].color),s[0]&4&&O(l,"--opacity",1/e[26].possible.length)},d(e){e&&d(l)}}}function Ne(t){let l,e="",s,o,i,n,c,T,b=t[26].possible.length!=1&&Se(t);function _(){return t[8](t[28],t[25])}function z(...D){return t[9](t[28],t[25],...D)}return{c(){l=I("div"),s=P(e),o=j(),i=j(),n=I("div"),b&&b.c(),this.h()},l(D){l=S(D,"DIV",{class:!0,title:!0,style:!0});var v=N(l);s=F(v,e),o=B(v),i=B(v),n=S(v,"DIV",{class:!0});var M=N(n);b&&b.l(M),M.forEach(d),v.forEach(d),this.h()},h(){h(n,"class","possibilities svelte-ogqyvg"),h(l,"class","tile svelte-ogqyvg"),h(l,"title",`${t[28]}, ${t[25]}`),O(l,"--bg",t[26].possible.length==1?t[26].possible[0].color:"transparent")},m(D,v){Q(D,l,v),r(l,s),r(l,o),r(l,i),r(l,n),b&&b.m(n,null),c||(T=[J(l,"click",_),J(l,"mouseover",z),J(l,"focus",null)],c=!0)},p(D,v){t=D,v[0]&4&&e!==(e="")&&ae(s,e),t[26].possible.length!=1?b?b.p(t,v):(b=Se(t),b.c(),b.m(n,null)):b&&(b.d(1),b=null),v[0]&4&&O(l,"--bg",t[26].possible.length==1?t[26].possible[0].color:"transparent")},d(D){D&&d(l),b&&b.d(),c=!1,Te(T)}}}function Re(t){let l,e,s=t[23],o=[];for(let i=0;i<s.length;i+=1)o[i]=Ne(Ee(t,s,i));return{c(){l=I("div");for(let i=0;i<o.length;i+=1)o[i].c();e=j(),this.h()},l(i){l=S(i,"DIV",{class:!0});var n=N(l);for(let c=0;c<o.length;c+=1)o[c].l(n);e=B(n),n.forEach(d),this.h()},h(){h(l,"class","col svelte-ogqyvg")},m(i,n){Q(i,l,n);for(let c=0;c<o.length;c+=1)o[c].m(l,null);r(l,e)},p(i,n){if(n[0]&36){s=i[23];let c;for(c=0;c<s.length;c+=1){const T=Ee(i,s,c);o[c]?o[c].p(T,n):(o[c]=Ne(T),o[c].c(),o[c].m(l,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},d(i){i&&d(l),ue(o,i)}}}function Ge(t){let l,e,s,o,i,n,c,T,b,_,z,D,v,M,Z,G,y,W,w,V,x,$,A,ee,Y,a,u,p,m,k=t[3]?"Stop":"Solve",R,L,C,q,le,K,H=t[2],E=[];for(let f=0;f<H.length;f+=1)E[f]=Re(we(t,H,f));return{c(){l=j(),e=I("main"),s=I("h1"),o=P("WFCTERRAIN"),i=j(),n=I("p"),c=P("made by "),T=I("a"),b=P("elias eskelinen"),_=j(),z=I("div");for(let f=0;f<E.length;f+=1)E[f].c();D=j(),v=I("div"),M=I("label"),Z=P("Grid size:"),G=j(),y=I("input"),W=j(),w=I("div"),V=I("label"),x=P("Solve delay:"),$=j(),A=I("input"),ee=j(),Y=P(t[1]),a=P(" ms"),u=j(),p=I("div"),m=I("button"),R=P(k),L=j(),C=I("button"),q=P("Reset"),this.h()},l(f){Be('[data-svelte="svelte-jed41s"]',document.head).forEach(d),l=B(f),e=S(f,"MAIN",{class:!0});var g=N(e);s=S(g,"H1",{class:!0});var te=N(s);o=F(te,"WFCTERRAIN"),te.forEach(d),i=B(g),n=S(g,"P",{class:!0});var ie=N(n);c=F(ie,"made by "),T=S(ie,"A",{href:!0,class:!0});var fe=N(T);b=F(fe,"elias eskelinen"),fe.forEach(d),ie.forEach(d),_=B(g),z=S(g,"DIV",{class:!0,style:!0});var ge=N(z);for(let re=0;re<E.length;re+=1)E[re].l(ge);ge.forEach(d),D=B(g),v=S(g,"DIV",{class:!0});var se=N(v);M=S(se,"LABEL",{for:!0,class:!0});var he=N(M);Z=F(he,"Grid size:"),he.forEach(d),G=B(se),y=S(se,"INPUT",{id:!0,type:!0,class:!0}),se.forEach(d),W=B(g),w=S(g,"DIV",{class:!0});var X=N(w);V=S(X,"LABEL",{for:!0,class:!0});var ve=N(V);x=F(ve,"Solve delay:"),ve.forEach(d),$=B(X),A=S(X,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),ee=B(X),Y=F(X,t[1]),a=F(X," ms"),X.forEach(d),u=B(g),p=S(g,"DIV",{class:!0});var oe=N(p);m=S(oe,"BUTTON",{style:!0,class:!0});var pe=N(m);R=F(pe,k),pe.forEach(d),L=B(oe),C=S(oe,"BUTTON",{style:!0,class:!0});var de=N(C);q=F(de,"Reset"),de.forEach(d),oe.forEach(d),g.forEach(d),this.h()},h(){document.title="WFCTERRAIN",h(s,"class","svelte-ogqyvg"),h(T,"href","https://eliaseskelinen.fi"),h(T,"class","svelte-ogqyvg"),h(n,"class","svelte-ogqyvg"),h(z,"class","grid svelte-ogqyvg"),O(z,"--size",t[0]),h(M,"for","width"),h(M,"class","svelte-ogqyvg"),h(y,"id","width"),h(y,"type","number"),h(y,"class","svelte-ogqyvg"),h(v,"class","svelte-ogqyvg"),h(V,"for","speed"),h(V,"class","svelte-ogqyvg"),h(A,"id","speed"),h(A,"type","range"),h(A,"min","0"),h(A,"max","75"),h(A,"class","svelte-ogqyvg"),h(w,"class","svelte-ogqyvg"),O(m,"padding","0.25em 1em"),h(m,"class","svelte-ogqyvg"),O(C,"padding","0.25em 1em"),h(C,"class","svelte-ogqyvg"),h(p,"class","svelte-ogqyvg"),h(e,"class","svelte-ogqyvg")},m(f,U){Q(f,l,U),Q(f,e,U),r(e,s),r(s,o),r(e,i),r(e,n),r(n,c),r(n,T),r(T,b),r(e,_),r(e,z);for(let g=0;g<E.length;g+=1)E[g].m(z,null);r(e,D),r(e,v),r(v,M),r(M,Z),r(v,G),r(v,y),ne(y,t[0]),r(e,W),r(e,w),r(w,V),r(V,x),r(w,$),r(w,A),ne(A,t[1]),r(w,ee),r(w,Y),r(w,a),r(e,u),r(e,p),r(p,m),r(m,R),r(p,L),r(p,C),r(C,q),le||(K=[J(y,"input",t[10]),J(A,"change",t[11]),J(A,"input",t[11]),J(m,"click",t[6]),J(C,"click",t[4])],le=!0)},p(f,U){if(U[0]&36){H=f[2];let g;for(g=0;g<H.length;g+=1){const te=we(f,H,g);E[g]?E[g].p(te,U):(E[g]=Re(te),E[g].c(),E[g].m(z,null))}for(;g<E.length;g+=1)E[g].d(1);E.length=H.length}U[0]&1&&O(z,"--size",f[0]),U[0]&1&&ce(y.value)!==f[0]&&ne(y,f[0]),U[0]&2&&ne(A,f[1]),U[0]&2&&ae(Y,f[1]),U[0]&8&&k!==(k=f[3]?"Stop":"Solve")&&ae(R,k)},i:qe,o:qe,d(f){f&&d(l),f&&d(e),ue(E,f),le=!1,Te(K)}}}function Pe(t,l,e){let b=[{value:"d",color:"darkblue",connectors:[["blue"],["blue"],["blue"],["blue"]]},{value:"w",color:"blue",connectors:[["blue","yellow"],["blue","yellow"],["blue","yellow"],["blue","yellow"]]},{value:"sa",color:"cornsilk",connectors:[["yellow","yellowb"],["yellow","yellowb"],["yellow","yellowb"],["yellow","yellowb"]]},{value:"s",color:"bisque",connectors:[["yellowb","green"],["yellowb","green"],["yellowb","green"],["yellowb","green"]]},{value:"g",color:"green",connectors:[["green","darkgreen"],["green","darkgreen"],["green","darkgreen"],["green","darkgreen"]]},{value:"t",color:"darkgreen",connectors:[["darkgreen"],["darkgreen"],["darkgreen"],["darkgreen"]]}],_=[];function z(){e(3,y=!1),W=!1,e(2,_=[]);let a=0;for(;a<G;){let u=[],p=0;for(;p<G;){let m={possible:[...b]};u.push(m),p++}_.push(u),e(2,_),a++}}function D(a,u,p=0){if(p>3)return;let m=_[u][a],k=[];u>0&&k.push([[a,u-1],0,2]),a>0&&k.push([[a-1,u],1,3]),u<_.length-1&&k.push([[a,u+1],2,0]),a<_[u].length-1&&k.push([[a+1,u],3,1]);for(let[R,L,C]of k){let q=_[R[1]][R[0]];if(q.possible.length>1){let le=[...q.possible],K=[];for(let H of m.possible){let E=H.connectors[L];for(let f of q.possible){let U=f.connectors[C];E.find(g=>U.includes(g))!=null&&(K.includes(f)||K.push(f))}}le!=K&&(q.possible=K,e(2,_[R[1]][R[0]]=q,_),D(R[0],R[1],p+1))}}}function v(a,u){let p=_[u][a],m=p.possible;m.length>1&&(e(2,_[u][a]=ye(me({},p),{possible:[m[Math.round(Math.random()*m.length)%m.length]]}),_),D(a,u))}function M(a=!1){let u=[],p=9999,m=-1;if(a){let k=0;for(let R of _){let L=0;for(let C of R){let q=C.possible.length;q>m&&q>1?(m=q,u=[[L,k]]):q==m&&u.push([L,k]),L+=1}k+=1}}else{let k=0;for(let R of _){let L=0;for(let C of R){let q=C.possible.length;q<p&&q>1?(p=q,u=[[L,k]]):q==p&&u.push([L,k]),L+=1}k+=1}}if(u.length>0)return u[Math.round(Math.random()*u.length)%u.length]}function Z(){if(V==0){for(y&&w&&clearInterval(w),console.log("Starting solve...");;){let a=M();if(a)console.log("Collapsing",a),v(a[0],a[1]);else{console.log("Solve done!");break}}console.log("Solve done!")}else y?(e(3,y=!1),console.log("Solve stopped!")):(console.log("Starting solve..."),e(3,y=!0))}let G=20,y=!1,W=!1,w,V=5;function x(){if(y&&!W){W=!0;let a=M();a?(console.log("Collapsing",a),v(a[0],a[1])):(e(3,y=!1),console.log("Solve done!")),W=!1}}const $=(a,u)=>{v(a,u)},A=(a,u,p)=>{(p.buttons==1||p.buttons==3)&&v(a,u)};function ee(){G=ce(this.value),e(0,G)}function Y(){V=ce(this.value),e(1,V)}return t.$$.update=()=>{t.$$.dirty[0]&1&&G&&z(),t.$$.dirty[0]&130&&V!=null&&(w&&clearInterval(w),e(7,w=setInterval(x,V)))},[G,V,_,y,z,v,Z,w,$,A,ee,Y]}class We extends Le{constructor(l){super(),Ue(this,l,Pe,Ge,je,{},null,[-1,-1])}}export{We as default};
