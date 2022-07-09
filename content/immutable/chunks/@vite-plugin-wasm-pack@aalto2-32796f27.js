let E=`
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
`,M=`
[
    {
        "value": ".",
        "color": "darkblue",
        "connectors": [
            ["dblue"],
            ["dblue"],
            ["dblue"],
            ["dblue"]
        ]
    },
    {
        "value": ".",
        "color": "darkblue",
        "connectors": [
            ["blue", "dblue"],
            ["blue", "dblue"],
            ["blue", "dblue"],
            ["blue", "dblue"]
        ]
    },
    {
        "value": ":",
        "color": "blue",
        "connectors": [
            ["blue", "yellow"],
            ["blue", "yellow"],
            ["blue", "yellow"],
            ["blue", "yellow"]
        ]
    },
    {
        "value": "o",
        "color": "cornsilk",
        "connectors": [
            ["yellow", "green"],
            ["yellow", "green"],
            ["yellow", "green"],
            ["yellow", "green"]
        ]
    },
    {
        "value": "O",
        "color": "green",
        "connectors": [
            ["green", "darkgreen"],
            ["green", "darkgreen"],
            ["green", "darkgreen"],
            ["green", "darkgreen"]
        ]
    },
    {
        "value": "#",
        "color": "darkgreen",
        "connectors": [
            ["darkgreen"],
            ["darkgreen"],
            ["darkgreen"],
            ["darkgreen"]
        ]
    }
]
`,S=`
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
`,j=`
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
`,x=`
[
    {
        "value": "ground",
        "color": "#b97a57",
        "connectors": [
            [
                "ground"
            ],
            [
                "ground"
            ],
            [
                
            ],
            [
                "ground"
            ]
        ]
    },
    {
        "value": "sky",
        "color": "skyblue",
        "connectors": [
            [
                "sky"
            ],
            [
                "sky"
            ],
            [
                "sky", "ground"
            ],
            [
                "sky"
            ]
        ]
    },
    {
        "value": "flower_base",
        "color": "darkgreen",
        "connectors": [
            [
                "stem"
            ],
            [
                "mud1"
            ],
            [
                "ground"
            ],
            [
                "mud2"
            ]
        ]
    },
    {
        "value": "spacer_a",
        "color": "skyblue",
        "connectors": [
            [
                "sky"
            ],
            [
                "mud1", "sky"
            ],
            [
                "ground"
            ],
            [
                "mud2", "sky"
            ]
        ]
    },
    {
        "value": "spacer_b",
        "color": "skyblue",
        "connectors": [
            [
                "sky"
            ],
            [
                "mud2", "sky"
            ],
            [
                "ground"
            ],
            [
                "mud1", "sky"
            ]
        ]
    },
    {
        "value": "spacer_c",
        "color": "skyblue",
        "connectors": [
            [
                "sky"
            ],
            [
                "sl", "sky"
            ],
            [
                "sky"
            ],
            [
                "sr", "sky"
            ]
        ]
    },
    {
        "value": "spacer_d",
        "color": "skyblue",
        "connectors": [
            [
                "sky"
            ],
            [
                "sr", "sky"
            ],
            [
                "sky"
            ],
            [
                "sl", "sky"
            ]
        ]
    },
    {
        "value": "flower_stem",
        "color": "green",
        "connectors": [
            [
                "stem", "top"
            ],
            [
                "sky"
            ],
            [
                "stem"
            ],
            [
                "sky"
            ]
        ]
    },
    {
        "value": "flower_top",
        "color": "green",
        "connectors": [
            [
                "top_t"
            ],
            [
                "top_r"
            ],
            [
                "top"
            ],
            [
                "top_l"
            ]
        ]
    },
    {
        "value": "flower_top_l",
        "color": "yellow",
        "connectors": [
            [
                "sky"
            ],
            [
                "top_l"
            ],
            [
                "sky"
            ],
            [
                "sr"
            ]
        ]
    },
    {
        "value": "flower_top_r",
        "color": "yellow",
        "connectors": [
            [
                "sky"
            ],
            [
                "sl"
            ],
            [
                "sky"
            ],
            [
                "top_r"
            ]
        ]
    },
    {
        "value": "flower_top_t",
        "color": "yellow",
        "connectors": [
            [
                "sky"
            ],
            [
                "sky"
            ],
            [
                "top_t"
            ],
            [
                "sky"
            ]
        ]
    }
]
`,F=`
[
    {
        "value": "empty",
        "color": "white",
        "connectors": [
            [
                "e", "spark"
            ],
            [
                "e", "spark"
            ],
            [
                "e"
            ],
            [
                "e"
            ]
        ]
    },
    {
        "value": "start",
        "color": "green",
        "connectors": [
            [
                "e", "start"
            ],
            [
                "e", "start"
            ],
            [
                "e", "start"
            ],
            [
                "e", "start"
            ]
        ],
        "disallow": [
            [
                "start", "end"
            ],
            [
                "start", "end"
            ],
            [
                "start", "end"
            ],
            [
                "start", "end"
            ]
        ]
    },
    {
        "value": "end",
        "color": "red",
        "connectors": [
            [
                "e", "end"
            ],
            [
                "e", "end"
            ],
            [
                "e", "end"
            ],
            [
                "e", "end"
            ]
        ],
        "disallow": [
            [
                "end", "start"
            ],
            [
                "end", "start"
            ],
            [
                "end", "start"
            ],
            [
                "end", "start"
            ]
        ]
    },
    {
        "value": "path",
        "color": "brown",
        "connectors": [
            [
                "end", "start"
            ],
            [
                "end", "start"
            ],
            [
                "end", "start"
            ],
            [
                "end", "start"
            ]
        ]
    }
]
`,C=`
[
    {
        "value": "wall_fill",
        "color": "url('kenney/Tiles/tile_0000.png')",
        "connectors": [
            ["wall_in", "wall_outU"],
            ["wall_in"],
            ["wall_in"],
            ["wall_in"]
        ]
    },
    {
        "value": "ground",
        "color": "url('kenney/Tiles/tile_0048.png')",
        "connectors": [
            ["wall_out"],
            ["wall_out"],
            ["wall_out"],
            ["wall_out"]
        ]
    },
    {
        "value": "wall_sattuma",
        "color": "url('kenney/Tiles/tile_0012.png')",
        "connectors": [
            ["wall_in"],
            ["wall_in"],
            ["wall_in"],
            ["wall_in"]
        ]
    },
    {
        "value": "wall_sideL",
        "color": "url('kenney/Tiles/tile_0015.png')",
        "connectors": [
            ["wall_sideL"],
            ["wall_out"],
            ["wall_sideL"],
            ["wall_in"]
        ]
    },
    {
        "value": "wall_sideR",
        "color": "url('kenney/Tiles/tile_0013.png')",
        "connectors": [
            ["wall_sideR"],
            ["wall_in"],
            ["wall_sideR"],
            ["wall_shadowR"]
        ]
    },
    {
        "value": "wall_cornerLD",
        "color": "url('kenney/Tiles/tile_0016.png')",
        "connectors": [
            ["wall_sideL"],
            ["wall_out"],
            ["wall_outLD"],
            ["wall_sideD"]
        ]
    },
    {
        "value": "wall_sideD",
        "color": "url('kenney/Tiles/tile_0002.png')",
        "connectors": [
            ["wall_in"],
            ["wall_sideD"],
            ["wall_outD"],
            ["wall_sideD"]
        ]
    },
    {
        "value": "wall_cornerRD",
        "color": "url('kenney/Tiles/tile_0017.png')",
        "connectors": [
            ["wall_sideR"],
            ["wall_sideD"],
            ["wall_outRD"],
            ["wall_shadowR"]
        ]
    },
    {
        "value": "wall_down",
        "color": "url('kenney/Tiles/tile_0040.png')",
        "connectors": [
            ["wall_outD"],
            ["wall_down"],
            ["wall_shadowD"],
            ["wall_down"]
        ]
    },
    {
        "value": "wall_down_endR",
        "color": "url('kenney/Tiles/tile_0059.png')",
        "connectors": [
            ["wall_outRD"],
            ["wall_down"],
            ["wall_shadowD"],
            ["wall_shadowR"]
        ]
    },
    {
        "value": "wall_down_endL",
        "color": "url('kenney/Tiles/tile_0057.png')",
        "connectors": [
            ["wall_outLD"],
            ["wall_out"],
            ["wall_shadowD"],
            ["wall_down"]
        ]
    },
    {
        "value": "wall_up",
        "color": "url('kenney/Tiles/tile_0026.png')",
        "connectors": [
            ["wall_out"],
            ["wall_up"],
            ["wall_outU"],
            ["wall_up"]
        ]
    },
    {
        "value": "wall_up_endR",
        "color": "url('kenney/Tiles/tile_0005.png')",
        "connectors": [
            ["wall_out"],
            ["wall_up"],
            ["wall_sideR"],
            ["wall_shadowUR"]
        ]
    },
    {
        "value": "wall_up_endL",
        "color": "url('kenney/Tiles/tile_0004.png')",
        "connectors": [
            ["wall_out"],
            ["wall_out"],
            ["wall_sideL"],
            ["wall_up"]
        ]
    },
    {
        "value": "wall_shadowD",
        "color": "url('kenney/Tiles/tile_0050.png')",
        "connectors": [
            ["wall_shadowD"],
            ["wall_out"],
            ["wall_out"],
            ["wall_out"]
        ]
    },
    {
        "value": "wall_shadowR",
        "color": "url('kenney/Tiles/tile_0050R.png')",
        "connectors": [
            ["wall_out"],
            ["wall_shadowR"],
            ["wall_out"],
            ["wall_out"]
        ]
    },
    {
        "value": "wall_shadowUR",
        "color": "url('kenney/Tiles/tile_0053UR.png')",
        "connectors": [
            ["wall_out"],
            ["wall_shadowUR"],
            ["wall_shadowR"],
            ["wall_out"]
        ]
    }
]
`,l;const w=new Array(32).fill(void 0);w.push(void 0,null,!0,!1);function c(n){return w[n]}let y=w.length;function T(n){n<36||(w[n]=y,y=n)}function D(n){const e=c(n);return T(n),e}function s(n){y===w.length&&w.push(w.length+1);const e=y;return y=w[e],w[e]=n,e}const R=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});R.decode();let m;function p(){return m.byteLength===0&&(m=new Uint8Array(l.memory.buffer)),m}function g(n,e){return R.decode(p().subarray(n,n+e))}let v;function i(){return v.byteLength===0&&(v=new Int32Array(l.memory.buffer)),v}let f=0;const h=new TextEncoder("utf-8"),A=typeof h.encodeInto=="function"?function(n,e){return h.encodeInto(n,e)}:function(n,e){const t=h.encode(n);return e.set(t),{read:n.length,written:t.length}};function k(n,e,t){if(t===void 0){const u=h.encode(n),d=e(u.length);return p().subarray(d,d+u.length).set(u),f=u.length,d}let o=n.length,r=e(o);const _=p();let a=0;for(;a<o;a++){const u=n.charCodeAt(a);if(u>127)break;_[r+a]=u}if(a!==o){a!==0&&(n=n.slice(a)),r=t(r,o,o=a+n.length*3);const u=p().subarray(r+a,r+o);a+=A(n,u).written}return f=a,r}function q(n,e,t){try{const _=l.__wbindgen_add_to_stack_pointer(-16),a=k(t,l.__wbindgen_malloc,l.__wbindgen_realloc),u=f;l.reset_grid(_,n,e,a,u);var o=i()[_/4+0],r=i()[_/4+1];return g(o,r)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_free(o,r)}}function V(n,e,t,o){try{const a=l.__wbindgen_add_to_stack_pointer(-16),u=k(n,l.__wbindgen_malloc,l.__wbindgen_realloc),d=f;l.propagate(a,u,d,e,t,o);var r=i()[a/4+0],_=i()[a/4+1];return g(r,_)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_free(r,_)}}function B(n,e,t,o){try{const a=l.__wbindgen_add_to_stack_pointer(-16),u=k(n,l.__wbindgen_malloc,l.__wbindgen_realloc),d=f;l.collapse(a,u,d,e,t,o);var r=i()[a/4+0],_=i()[a/4+1];return g(r,_)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_free(r,_)}}function N(n){try{const o=l.__wbindgen_add_to_stack_pointer(-16),r=k(n,l.__wbindgen_malloc,l.__wbindgen_realloc),_=f;l.choose_collapsable(o,r,_);var e=i()[o/4+0],t=i()[o/4+1];return g(e,t)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_free(e,t)}}function z(n,e){try{const r=l.__wbindgen_add_to_stack_pointer(-16),_=k(n,l.__wbindgen_malloc,l.__wbindgen_realloc),a=f;l.collapse_all(r,_,a,e);var t=i()[r/4+0],o=i()[r/4+1];return g(t,o)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_free(t,o)}}function b(n,e){try{return n.apply(this,e)}catch(t){l.__wbindgen_exn_store(s(t))}}function L(n,e){return p().subarray(n/1,n/1+e)}async function U(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(o){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function O(){const n={};return n.wbg={},n.wbg.__wbg_process_e56fd54cf6319b6c=function(e){const t=c(e).process;return s(t)},n.wbg.__wbindgen_is_object=function(e){const t=c(e);return typeof t=="object"&&t!==null},n.wbg.__wbg_versions_77e21455908dad33=function(e){const t=c(e).versions;return s(t)},n.wbg.__wbindgen_object_drop_ref=function(e){D(e)},n.wbg.__wbg_node_0dd25d832e4785d5=function(e){const t=c(e).node;return s(t)},n.wbg.__wbindgen_is_string=function(e){return typeof c(e)=="string"},n.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd=function(){const e=module;return s(e)},n.wbg.__wbg_require_0db1598d9ccecb30=function(){return b(function(e,t,o){const r=c(e).require(g(t,o));return s(r)},arguments)},n.wbg.__wbg_crypto_b95d7173266618a9=function(e){const t=c(e).crypto;return s(t)},n.wbg.__wbg_msCrypto_5a86d77a66230f81=function(e){const t=c(e).msCrypto;return s(t)},n.wbg.__wbg_getRandomValues_b14734aa289bc356=function(){return b(function(e,t){c(e).getRandomValues(c(t))},arguments)},n.wbg.__wbg_randomFillSync_91e2b39becca6147=function(){return b(function(e,t,o){c(e).randomFillSync(L(t,o))},arguments)},n.wbg.__wbg_newnoargs_fc5356289219b93b=function(e,t){const o=new Function(g(e,t));return s(o)},n.wbg.__wbg_call_4573f605ca4b5f10=function(){return b(function(e,t){const o=c(e).call(c(t));return s(o)},arguments)},n.wbg.__wbindgen_object_clone_ref=function(e){const t=c(e);return s(t)},n.wbg.__wbg_self_ba1ddafe9ea7a3a2=function(){return b(function(){const e=self.self;return s(e)},arguments)},n.wbg.__wbg_window_be3cc430364fd32c=function(){return b(function(){const e=window.window;return s(e)},arguments)},n.wbg.__wbg_globalThis_56d9c9f814daeeee=function(){return b(function(){const e=globalThis.globalThis;return s(e)},arguments)},n.wbg.__wbg_global_8c35aeee4ac77f2b=function(){return b(function(){const e=global.global;return s(e)},arguments)},n.wbg.__wbindgen_is_undefined=function(e){return c(e)===void 0},n.wbg.__wbg_buffer_de1150f91b23aa89=function(e){const t=c(e).buffer;return s(t)},n.wbg.__wbg_new_97cf52648830a70d=function(e){const t=new Uint8Array(c(e));return s(t)},n.wbg.__wbg_set_a0172b213e2469e9=function(e,t,o){c(e).set(c(t),o>>>0)},n.wbg.__wbg_length_e09c0b925ab8de5d=function(e){return c(e).length},n.wbg.__wbg_newwithlength_e833b89f9db02732=function(e){const t=new Uint8Array(e>>>0);return s(t)},n.wbg.__wbg_subarray_9482ae5cd5cd99d3=function(e,t,o){const r=c(e).subarray(t>>>0,o>>>0);return s(r)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(g(e,t))},n.wbg.__wbindgen_memory=function(){const e=l.memory;return s(e)},n}function W(n,e){return l=n.exports,I.__wbindgen_wasm_module=e,v=new Int32Array(l.memory.buffer),m=new Uint8Array(l.memory.buffer),l}async function I(n){typeof n=="undefined"&&(n="/aaltoweb/content/immutable/assets/aalto2_bg.wasm");const e=O();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:o}=await U(await n,e);return W(t,o)}export{C as a,V as b,S as c,j as d,z as e,x as f,N as g,B as h,I as i,E as m,F as p,q as r,M as t};
