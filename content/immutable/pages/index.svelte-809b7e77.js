import{S as qt,i as Jt,s as Gt,e as f,c as d,a as g,d as u,f as T,b as i,g as H,k as y,m as k,J as a,t as E,h as S,K as q,j as it,l as It,L as ut,M as Ct,N as Yt,O as Ht,P as Tt,Q as ge,R as ct,n as Lt,w as Kt,T as Qt}from"../chunks/index-be5dee29.js";let Ot=`
[
    {
        "value": ".",
        "color": "darkblue",
        "connectors": [
            [
                "dblue"
            ],
            [
                "dblue"
            ],
            [
                "dblue"
            ],
            [
                "dblue"
            ]
        ]
    },
    {
        "value": ".",
        "color": "darkblue",
        "connectors": [
            [
                "blue",
                "dblue"
            ],
            [
                "blue",
                "dblue"
            ],
            [
                "blue",
                "dblue"
            ],
            [
                "blue",
                "dblue"
            ]
        ]
    },
    {
        "value": ":",
        "color": "blue",
        "connectors": [
            [
                "blue",
                "yellow"
            ],
            [
                "blue",
                "yellow"
            ],
            [
                "blue",
                "yellow"
            ],
            [
                "blue",
                "yellow"
            ]
        ]
    },
    {
        "value": "o",
        "color": "cornsilk",
        "connectors": [
            [
                "yellow",
                "green"
            ],
            [
                "yellow",
                "green"
            ],
            [
                "yellow",
                "green"
            ],
            [
                "yellow",
                "green"
            ]
        ]
    },
    {
        "value": "O",
        "color": "green",
        "connectors": [
            [
                "green", "darkgreen"
            ],
            [
                "green", "darkgreen"
            ],
            [
                "green", "darkgreen"
            ],
            [
                "green", "darkgreen"
            ]
        ]
    },
    {
        "value": "#",
        "color": "darkgreen",
        "connectors": [
            [
                "darkgreen"
            ],
            [
                "darkgreen"
            ],
            [
                "darkgreen"
            ],
            [
                "darkgreen"
            ]
        ]
    }
]
`,Xt=`
[
    {
        "value": "w",
        "color": "white",
        "connectors": [
            [
                "1"
            ],
            [
                "2"
            ],
            [
                "3"
            ],
            [
                "4"
            ]
        ]
    },
    {
        "value": "b",
        "color": "black",
        "connectors": [
            [
                "3"
            ],
            [
                "4"
            ],
            [
                "1"
            ],
            [
                "2"
            ]
        ]
    }
]
`,Zt=`
[
    {
        "value": "up",
        "color": "white",
        "connectors": [
            [
                "up"
            ],
            [
                "up"
            ],
            [
                "up"
            ],
            [
                "up"
            ]
        ]
    },
    {
        "value": "connector",
        "color": "green",
        "connectors": [
            [
                "up"
            ],
            [
                "green"
            ],
            [
                "down"
            ],
            [
                "green"
            ]
        ]
    },
    {
        "value": "down",
        "color": "black",
        "connectors": [
            [
                "down"
            ],
            [
                "down"
            ],
            [
                "down"
            ],
            [
                "down"
            ]
        ]
    }
]
`,v;const Q=new Array(32).fill(void 0);Q.push(void 0,null,!0,!1);function w(n){return Q[n]}let Se=Q.length;function xt(n){n<36||(Q[n]=Se,Se=n)}function $t(n){const e=w(n);return xt(n),e}function I(n){Se===Q.length&&Q.push(Q.length+1);const e=Se;return Se=Q[e],Q[e]=n,e}const Bt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Bt.decode();let Ve;function Ae(){return Ve.byteLength===0&&(Ve=new Uint8Array(v.memory.buffer)),Ve}function ue(n,e){return Bt.decode(Ae().subarray(n,n+e))}let ze;function le(){return ze.byteLength===0&&(ze=new Int32Array(v.memory.buffer)),ze}let ve=0;const je=new TextEncoder("utf-8"),en=typeof je.encodeInto=="function"?function(n,e){return je.encodeInto(n,e)}:function(n,e){const t=je.encode(n);return e.set(t),{read:n.length,written:t.length}};function Pe(n,e,t){if(t===void 0){const c=je.encode(n),_=e(c.length);return Ae().subarray(_,_+c.length).set(c),ve=c.length,_}let l=n.length,s=e(l);const o=Ae();let r=0;for(;r<l;r++){const c=n.charCodeAt(r);if(c>127)break;o[s+r]=c}if(r!==l){r!==0&&(n=n.slice(r)),s=t(s,l,l=r+n.length*3);const c=Ae().subarray(s+r,s+l);r+=en(n,c).written}return ve=r,s}function tn(n,e,t){try{const o=v.__wbindgen_add_to_stack_pointer(-16),r=Pe(t,v.__wbindgen_malloc,v.__wbindgen_realloc),c=ve;v.reset_grid(o,n,e,r,c);var l=le()[o/4+0],s=le()[o/4+1];return ue(l,s)}finally{v.__wbindgen_add_to_stack_pointer(16),v.__wbindgen_free(l,s)}}function Mt(n,e,t,l){try{const r=v.__wbindgen_add_to_stack_pointer(-16),c=Pe(n,v.__wbindgen_malloc,v.__wbindgen_realloc),_=ve;v.collapse(r,c,_,e,t,l);var s=le()[r/4+0],o=le()[r/4+1];return ue(s,o)}finally{v.__wbindgen_add_to_stack_pointer(16),v.__wbindgen_free(s,o)}}function nn(n){try{const l=v.__wbindgen_add_to_stack_pointer(-16),s=Pe(n,v.__wbindgen_malloc,v.__wbindgen_realloc),o=ve;v.choose_collapsable(l,s,o);var e=le()[l/4+0],t=le()[l/4+1];return ue(e,t)}finally{v.__wbindgen_add_to_stack_pointer(16),v.__wbindgen_free(e,t)}}function ln(n,e){try{const s=v.__wbindgen_add_to_stack_pointer(-16),o=Pe(n,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ve;v.collapse_all(s,o,r,e);var t=le()[s/4+0],l=le()[s/4+1];return ue(t,l)}finally{v.__wbindgen_add_to_stack_pointer(16),v.__wbindgen_free(t,l)}}function ne(n,e){try{return n.apply(this,e)}catch(t){v.__wbindgen_exn_store(I(t))}}function sn(n,e){return Ae().subarray(n/1,n/1+e)}async function rn(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(l){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",l);else throw l}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function on(){const n={};return n.wbg={},n.wbg.__wbg_process_e56fd54cf6319b6c=function(e){const t=w(e).process;return I(t)},n.wbg.__wbindgen_is_object=function(e){const t=w(e);return typeof t=="object"&&t!==null},n.wbg.__wbg_versions_77e21455908dad33=function(e){const t=w(e).versions;return I(t)},n.wbg.__wbindgen_object_drop_ref=function(e){$t(e)},n.wbg.__wbg_node_0dd25d832e4785d5=function(e){const t=w(e).node;return I(t)},n.wbg.__wbindgen_is_string=function(e){return typeof w(e)=="string"},n.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd=function(){const e=module;return I(e)},n.wbg.__wbg_require_0db1598d9ccecb30=function(){return ne(function(e,t,l){const s=w(e).require(ue(t,l));return I(s)},arguments)},n.wbg.__wbg_crypto_b95d7173266618a9=function(e){const t=w(e).crypto;return I(t)},n.wbg.__wbg_msCrypto_5a86d77a66230f81=function(e){const t=w(e).msCrypto;return I(t)},n.wbg.__wbg_getRandomValues_b14734aa289bc356=function(){return ne(function(e,t){w(e).getRandomValues(w(t))},arguments)},n.wbg.__wbg_randomFillSync_91e2b39becca6147=function(){return ne(function(e,t,l){w(e).randomFillSync(sn(t,l))},arguments)},n.wbg.__wbg_newnoargs_fc5356289219b93b=function(e,t){const l=new Function(ue(e,t));return I(l)},n.wbg.__wbg_call_4573f605ca4b5f10=function(){return ne(function(e,t){const l=w(e).call(w(t));return I(l)},arguments)},n.wbg.__wbindgen_object_clone_ref=function(e){const t=w(e);return I(t)},n.wbg.__wbg_self_ba1ddafe9ea7a3a2=function(){return ne(function(){const e=self.self;return I(e)},arguments)},n.wbg.__wbg_window_be3cc430364fd32c=function(){return ne(function(){const e=window.window;return I(e)},arguments)},n.wbg.__wbg_globalThis_56d9c9f814daeeee=function(){return ne(function(){const e=globalThis.globalThis;return I(e)},arguments)},n.wbg.__wbg_global_8c35aeee4ac77f2b=function(){return ne(function(){const e=global.global;return I(e)},arguments)},n.wbg.__wbindgen_is_undefined=function(e){return w(e)===void 0},n.wbg.__wbg_buffer_de1150f91b23aa89=function(e){const t=w(e).buffer;return I(t)},n.wbg.__wbg_new_97cf52648830a70d=function(e){const t=new Uint8Array(w(e));return I(t)},n.wbg.__wbg_set_a0172b213e2469e9=function(e,t,l){w(e).set(w(t),l>>>0)},n.wbg.__wbg_length_e09c0b925ab8de5d=function(e){return w(e).length},n.wbg.__wbg_newwithlength_e833b89f9db02732=function(e){const t=new Uint8Array(e>>>0);return I(t)},n.wbg.__wbg_subarray_9482ae5cd5cd99d3=function(e,t,l){const s=w(e).subarray(t>>>0,l>>>0);return I(s)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(ue(e,t))},n.wbg.__wbindgen_memory=function(){const e=v.memory;return I(e)},n}function an(n,e){return v=n.exports,Ft.__wbindgen_wasm_module=e,ze=new Int32Array(v.memory.buffer),Ve=new Uint8Array(v.memory.buffer),v}async function Ft(n){typeof n=="undefined"&&(n="/aaltoweb/content/immutable/assets/aalto2_bg.wasm");const e=on();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:l}=await rn(await n,e);return an(t,l)}function Rt(n,e,t){const l=n.slice();return l[24]=e[t],l[26]=t,l}function Ut(n,e,t){const l=n.slice();return l[27]=e[t],l[29]=t,l}function Dt(n,e,t){const l=n.slice();return l[30]=e[t],l}function Nt(n){let e;function t(o,r){return o[5]?un:cn}let l=t(n),s=l(n);return{c(){e=f("div"),s.c(),this.h()},l(o){e=d(o,"DIV",{style:!0,class:!0});var r=g(e);s.l(r),r.forEach(u),this.h()},h(){T(e,"height","100%"),T(e,"width","100%"),T(e,"display","grid"),T(e,"place-items","center"),i(e,"class","svelte-ch60vi")},m(o,r){H(o,e,r),s.m(e,null)},p(o,r){l!==(l=t(o))&&(s.d(1),s=l(o),s&&(s.c(),s.m(e,null)))},d(o){o&&u(e),s.d()}}}function cn(n){let e,t;return{c(){e=f("p"),t=E("Loading wasm..."),this.h()},l(l){e=d(l,"P",{class:!0});var s=g(e);t=S(s,"Loading wasm..."),s.forEach(u),this.h()},h(){i(e,"class","svelte-ch60vi")},m(l,s){H(l,e,s),a(e,t)},d(l){l&&u(e)}}}function un(n){let e,t,l,s;return{c(){e=f("p"),t=E("Error while executing wasm. "),l=f("br"),s=E(`
                        Are the rules valid?`),this.h()},l(o){e=d(o,"P",{class:!0});var r=g(e);t=S(r,"Error while executing wasm. "),l=d(r,"BR",{class:!0}),s=S(r,`
                        Are the rules valid?`),r.forEach(u),this.h()},h(){i(l,"class","svelte-ch60vi"),i(e,"class","svelte-ch60vi")},m(o,r){H(o,e,r),a(e,t),a(e,l),a(e,s)},d(o){o&&u(e)}}}function Vt(n){let e,t=n[27].possible.length!=1&&zt(n);return{c(){e=f("div"),t&&t.c(),this.h()},l(l){e=d(l,"DIV",{class:!0});var s=g(e);t&&t.l(s),s.forEach(u),this.h()},h(){i(e,"class","possibilities svelte-ch60vi")},m(l,s){H(l,e,s),t&&t.m(e,null)},p(l,s){l[27].possible.length!=1?t?t.p(l,s):(t=zt(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&u(e),t&&t.d()}}}function zt(n){let e,t=n[27].possible,l=[];for(let s=0;s<t.length;s+=1)l[s]=jt(Dt(n,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=It()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=It()},m(s,o){for(let r=0;r<l.length;r+=1)l[r].m(s,o);H(s,e,o)},p(s,o){if(o[0]&16){t=s[27].possible;let r;for(r=0;r<t.length;r+=1){const c=Dt(s,t,r);l[r]?l[r].p(c,o):(l[r]=jt(c),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(s){ut(l,s),s&&u(e)}}}function jt(n){let e;return{c(){e=f("div"),this.h()},l(t){e=d(t,"DIV",{class:!0,style:!0}),g(e).forEach(u),this.h()},h(){i(e,"class","possible svelte-ch60vi"),T(e,"--color",n[30].color),T(e,"--opacity",1/n[27].possible.length)},m(t,l){H(t,e,l)},p(t,l){l[0]&16&&T(e,"--color",t[30].color),l[0]&16&&T(e,"--opacity",1/t[27].possible.length)},d(t){t&&u(e)}}}function Pt(n){let e,t="",l,s,o,r,c,_=n[6]&&Vt(n);function se(){return n[15](n[29],n[26])}function N(...A){return n[16](n[29],n[26],...A)}return{c(){e=f("div"),l=E(t),s=y(),o=y(),_&&_.c(),this.h()},l(A){e=d(A,"DIV",{class:!0,title:!0,style:!0});var p=g(e);l=S(p,t),s=k(p),o=k(p),_&&_.l(p),p.forEach(u),this.h()},h(){i(e,"class","tile svelte-ch60vi"),i(e,"title",`${n[29]}, ${n[26]}`),T(e,"--bg",n[27].possible.length==1?n[27].possible[0].color:"transparent")},m(A,p){H(A,e,p),a(e,l),a(e,s),a(e,o),_&&_.m(e,null),r||(c=[q(e,"click",se),q(e,"mouseover",N),q(e,"focus",null)],r=!0)},p(A,p){n=A,p[0]&16&&t!==(t="")&&it(l,t),n[6]?_?_.p(n,p):(_=Vt(n),_.c(),_.m(e,null)):_&&(_.d(1),_=null),p[0]&16&&T(e,"--bg",n[27].possible.length==1?n[27].possible[0].color:"transparent")},d(A){A&&u(e),_&&_.d(),r=!1,Ct(c)}}}function Wt(n){let e,t,l=n[24],s=[];for(let o=0;o<l.length;o+=1)s[o]=Pt(Ut(n,l,o));return{c(){e=f("div");for(let o=0;o<s.length;o+=1)s[o].c();t=y(),this.h()},l(o){e=d(o,"DIV",{class:!0});var r=g(e);for(let c=0;c<s.length;c+=1)s[c].l(r);t=k(r),r.forEach(u),this.h()},h(){i(e,"class","col svelte-ch60vi")},m(o,r){H(o,e,r);for(let c=0;c<s.length;c+=1)s[c].m(e,null);a(e,t)},p(o,r){if(r[0]&1104){l=o[24];let c;for(c=0;c<l.length;c+=1){const _=Ut(o,l,c);s[c]?s[c].p(_,r):(s[c]=Pt(_),s[c].c(),s[c].m(e,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=l.length}},d(o){o&&u(e),ut(s,o)}}}function _n(n){let e,t,l,s,o,r,c,_,se,N,A,p,L,W,z,J,O,pe,re,B,X,me,we,j,ye,V,m,U,P,oe,We,Ce,G,Be,Z,_e,Fe,qe,x,ae,Je,Ge,K,Ye,Y,fe,He,Ke,F,ie,Qe,Xe,C,Ze,Ie,xe,$e,de,et,tt,$,ee,ke=n[7]?"Stop":"Solve",Te,nt,te,lt,st,_t,M=(!n[4]||n[4].length==0)&&Nt(n),he=n[4],R=[];for(let b=0;b<he.length;b+=1)R[b]=Wt(Rt(n,he,b));return{c(){e=y(),t=f("main"),l=f("h1"),s=E("AALTO"),o=y(),r=f("p"),c=E("made by "),_=f("a"),se=E("elias eskelinen"),N=y(),A=f("div"),p=f("select"),L=f("option"),W=E("Minecraft"),z=f("option"),J=E("Checkers"),O=f("option"),pe=E("Layers"),re=y(),B=f("details"),X=f("summary"),me=E("Edit the rules"),we=y(),j=f("textarea"),ye=y(),V=f("div"),M&&M.c(),m=y();for(let b=0;b<R.length;b+=1)R[b].c();U=y(),P=f("div"),oe=f("label"),We=E("Grid size:"),Ce=y(),G=f("input"),Be=y(),Z=f("details"),_e=f("summary"),Fe=E("Performance"),qe=y(),x=f("div"),ae=f("label"),Je=E("Show possible:"),Ge=y(),K=f("input"),Ye=y(),Y=f("details"),fe=f("summary"),He=E("Solving"),Ke=y(),F=f("div"),ie=f("label"),Qe=E("Solve delay:"),Xe=y(),C=f("input"),Ze=y(),Ie=E(n[3]),xe=E(" ms"),$e=y(),de=f("small"),et=E("set delay to 0 for maximum speed"),tt=y(),$=f("div"),ee=f("button"),Te=E(ke),nt=y(),te=f("button"),lt=E("Reset"),this.h()},l(b){Yt('[data-svelte="svelte-bf8aw6"]',document.head).forEach(u),e=k(b),t=d(b,"MAIN",{class:!0});var h=g(t);l=d(h,"H1",{class:!0});var Ee=g(l);s=S(Ee,"AALTO"),Ee.forEach(u),o=k(h),r=d(h,"P",{class:!0});var rt=g(r);c=S(rt,"made by "),_=d(rt,"A",{href:!0,class:!0});var ft=g(_);se=S(ft,"elias eskelinen"),ft.forEach(u),rt.forEach(u),N=k(h),A=d(h,"DIV",{class:!0});var dt=g(A);p=d(dt,"SELECT",{class:!0});var Le=g(p);L=d(Le,"OPTION",{class:!0});var ht=g(L);W=S(ht,"Minecraft"),ht.forEach(u),z=d(Le,"OPTION",{class:!0});var bt=g(z);J=S(bt,"Checkers"),bt.forEach(u),O=d(Le,"OPTION",{class:!0});var gt=g(O);pe=S(gt,"Layers"),gt.forEach(u),Le.forEach(u),dt.forEach(u),re=k(h),B=d(h,"DETAILS",{style:!0,class:!0});var Oe=g(B);X=d(Oe,"SUMMARY",{class:!0});var vt=g(X);me=S(vt,"Edit the rules"),vt.forEach(u),we=k(Oe),j=d(Oe,"TEXTAREA",{style:!0,class:!0}),g(j).forEach(u),Oe.forEach(u),ye=k(h),V=d(h,"DIV",{class:!0,style:!0});var Me=g(V);M&&M.l(Me),m=k(Me);for(let ot=0;ot<R.length;ot+=1)R[ot].l(Me);Me.forEach(u),U=k(h),P=d(h,"DIV",{class:!0});var Re=g(P);oe=d(Re,"LABEL",{for:!0,class:!0});var pt=g(oe);We=S(pt,"Grid size:"),pt.forEach(u),Ce=k(Re),G=d(Re,"INPUT",{id:!0,type:!0,class:!0}),Re.forEach(u),Be=k(h),Z=d(h,"DETAILS",{class:!0});var Ue=g(Z);_e=d(Ue,"SUMMARY",{class:!0});var mt=g(_e);Fe=S(mt,"Performance"),mt.forEach(u),qe=k(Ue),x=d(Ue,"DIV",{class:!0});var De=g(x);ae=d(De,"LABEL",{for:!0,class:!0});var wt=g(ae);Je=S(wt,"Show possible:"),wt.forEach(u),Ge=k(De),K=d(De,"INPUT",{id:!0,type:!0,class:!0}),De.forEach(u),Ue.forEach(u),Ye=k(h),Y=d(h,"DETAILS",{class:!0});var be=g(Y);fe=d(be,"SUMMARY",{class:!0});var yt=g(fe);He=S(yt,"Solving"),yt.forEach(u),Ke=k(be),F=d(be,"DIV",{class:!0});var ce=g(F);ie=d(ce,"LABEL",{for:!0,class:!0});var kt=g(ie);Qe=S(kt,"Solve delay:"),kt.forEach(u),Xe=k(ce),C=d(ce,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),Ze=k(ce),Ie=S(ce,n[3]),xe=S(ce," ms"),ce.forEach(u),$e=k(be),de=d(be,"SMALL",{class:!0});var Et=g(de);et=S(Et,"set delay to 0 for maximum speed"),Et.forEach(u),be.forEach(u),tt=k(h),$=d(h,"DIV",{class:!0});var Ne=g($);ee=d(Ne,"BUTTON",{style:!0,class:!0});var St=g(ee);Te=S(St,ke),St.forEach(u),nt=k(Ne),te=d(Ne,"BUTTON",{style:!0,class:!0});var At=g(te);lt=S(At,"Reset"),At.forEach(u),Ne.forEach(u),h.forEach(u),this.h()},h(){document.title="AALTO",i(l,"class","svelte-ch60vi"),i(_,"href","https://eliaseskelinen.fi"),i(_,"class","svelte-ch60vi"),i(r,"class","svelte-ch60vi"),L.__value="0",L.value=L.__value,i(L,"class","svelte-ch60vi"),z.__value="1",z.value=z.__value,i(z,"class","svelte-ch60vi"),O.__value="2",O.value=O.__value,i(O,"class","svelte-ch60vi"),i(p,"class","svelte-ch60vi"),n[1]===void 0&&Ht(()=>n[13].call(p)),i(A,"class","svelte-ch60vi"),i(X,"class","svelte-ch60vi"),T(j,"min-width","var(--grid-max-size)"),T(j,"resize","block"),T(j,"min-height","var(--grid-max-size)"),i(j,"class","svelte-ch60vi"),T(B,"min-width","var(--grid-max-size)"),i(B,"class","svelte-ch60vi"),i(V,"class","grid svelte-ch60vi"),T(V,"--size",n[2]),i(oe,"for","width"),i(oe,"class","svelte-ch60vi"),i(G,"id","width"),i(G,"type","number"),i(G,"class","svelte-ch60vi"),i(P,"class","svelte-ch60vi"),i(_e,"class","svelte-ch60vi"),i(ae,"for","show-possible"),i(ae,"class","svelte-ch60vi"),i(K,"id","show-possible"),i(K,"type","checkbox"),i(K,"class","svelte-ch60vi"),i(x,"class","svelte-ch60vi"),i(Z,"class","svelte-ch60vi"),i(fe,"class","svelte-ch60vi"),i(ie,"for","speed"),i(ie,"class","svelte-ch60vi"),i(C,"id","speed"),i(C,"type","range"),i(C,"min","0"),i(C,"max","75"),i(C,"class","svelte-ch60vi"),i(F,"class","svelte-ch60vi"),i(de,"class","svelte-ch60vi"),i(Y,"class","svelte-ch60vi"),T(ee,"padding","0.25em 1em"),i(ee,"class","svelte-ch60vi"),T(te,"padding","0.25em 1em"),i(te,"class","svelte-ch60vi"),i($,"class","svelte-ch60vi"),i(t,"class","svelte-ch60vi")},m(b,D){H(b,e,D),H(b,t,D),a(t,l),a(l,s),a(t,o),a(t,r),a(r,c),a(r,_),a(_,se),a(t,N),a(t,A),a(A,p),a(p,L),a(L,W),a(p,z),a(z,J),a(p,O),a(O,pe),Tt(p,n[1]),a(t,re),a(t,B),a(B,X),a(X,me),a(B,we),a(B,j),ge(j,n[0]),a(t,ye),a(t,V),M&&M.m(V,null),a(V,m);for(let h=0;h<R.length;h+=1)R[h].m(V,null);a(t,U),a(t,P),a(P,oe),a(oe,We),a(P,Ce),a(P,G),ge(G,n[2]),a(t,Be),a(t,Z),a(Z,_e),a(_e,Fe),a(Z,qe),a(Z,x),a(x,ae),a(ae,Je),a(x,Ge),a(x,K),K.checked=n[6],a(t,Ye),a(t,Y),a(Y,fe),a(fe,He),a(Y,Ke),a(Y,F),a(F,ie),a(ie,Qe),a(F,Xe),a(F,C),ge(C,n[3]),a(F,Ze),a(F,Ie),a(F,xe),a(Y,$e),a(Y,de),a(de,et),a(t,tt),a(t,$),a($,ee),a(ee,Te),a($,nt),a($,te),a(te,lt),st||(_t=[q(p,"change",n[13]),q(j,"input",n[14]),q(G,"input",n[17]),q(K,"change",n[18]),q(C,"change",n[19]),q(C,"input",n[19]),q(ee,"click",n[9]),q(te,"click",n[8])],st=!0)},p(b,D){if(D[0]&2&&Tt(p,b[1]),D[0]&1&&ge(j,b[0]),!b[4]||b[4].length==0?M?M.p(b,D):(M=Nt(b),M.c(),M.m(V,m)):M&&(M.d(1),M=null),D[0]&1104){he=b[4];let h;for(h=0;h<he.length;h+=1){const Ee=Rt(b,he,h);R[h]?R[h].p(Ee,D):(R[h]=Wt(Ee),R[h].c(),R[h].m(V,null))}for(;h<R.length;h+=1)R[h].d(1);R.length=he.length}D[0]&4&&T(V,"--size",b[2]),D[0]&4&&ct(G.value)!==b[2]&&ge(G,b[2]),D[0]&64&&(K.checked=b[6]),D[0]&8&&ge(C,b[3]),D[0]&8&&it(Ie,b[3]),D[0]&128&&ke!==(ke=b[7]?"Stop":"Solve")&&it(Te,ke)},i:Lt,o:Lt,d(b){b&&u(e),b&&u(t),M&&M.d(),ut(R,b),st=!1,Ct(_t)}}}let at=1e3;function fn(n,e,t){let l=Ot,s=[];function o(){return JSON.stringify({tiles:s})}function r(m){let U=JSON.parse(m);t(4,s=U.tiles)}let c=!1;function _(){if(!!N){t(7,W=!1);try{let m=tn(L,L,l),U=JSON.parse(m);t(4,s=U),t(5,c=!1)}catch{t(4,s=[]),t(5,c=!0)}}}function se(){if(O==0){W&&J&&clearInterval(J),console.log("Starting solve...");let m=ln(o(),at);r(m),console.log("Solve done!")}else W?(t(7,W=!1),console.log("Solve stopped!")):(console.log("Starting solve..."),t(7,W=!0))}let N=!1;Kt(()=>{Ft().then(()=>{t(11,N=!0)})});let A=!0,p="0",L=16,W=!1,z=!1,J,O=0;function pe(){if(W&&!z){z=!0;let m=JSON.parse(nn(o()));if(m){console.log("Collapsing",m);let U=Mt(o(),m[0],m[1],at);r(U)}else t(7,W=!1),console.log("Solve done!");z=!1}}function re(m,U){if(!N)return;console.log("In",o());let P=Mt(o(),m,U,at);r(P)}function B(){p=Qt(this),t(1,p)}function X(){l=this.value,t(0,l),t(1,p),t(11,N)}const me=(m,U)=>{re(m,U)},we=(m,U,P)=>{(P.buttons==1||P.buttons==3)&&re(m,U)};function j(){L=ct(this.value),t(2,L)}function ye(){A=this.checked,t(6,A)}function V(){O=ct(this.value),t(3,O)}return n.$$.update=()=>{n.$$.dirty[0]&2050&&p!=null&&N&&t(0,l=[Ot,Xt,Zt][+p]),n.$$.dirty[0]&2049&&l&&N&&_(),n.$$.dirty[0]&2052&&L&&N&&_(),n.$$.dirty[0]&4104&&O!=null&&(J&&clearInterval(J),t(12,J=setInterval(pe,O)))},[l,p,L,O,s,c,A,W,_,se,re,N,J,B,X,me,we,j,ye,V]}class hn extends qt{constructor(e){super(),Jt(this,e,fn,_n,Gt,{},null,[-1,-1])}}export{hn as default};
