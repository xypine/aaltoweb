const l="/aaltoweb";let e=[{value:"one",color:"white",connectors:[["one"],["one"],["one"],["two"]]},{value:"two",color:"black",connectors:[["two"],["two"],["two"],["one"]]}],o=[{value:".",color:"darkblue",connectors:[["dblue"],["dblue"],["dblue"],["dblue"]]},{value:".",color:"darkblue",connectors:[["blue","dblue"],["blue","dblue"],["blue","dblue"],["blue","dblue"]]},{value:":",color:"blue",connectors:[["blue","yellow"],["blue","yellow"],["blue","yellow"],["blue","yellow"]]},{value:"o",color:"cornsilk",connectors:[["yellow","green"],["yellow","green"],["yellow","green"],["yellow","green"]]},{value:"O",color:"green",connectors:[["green","darkgreen"],["green","darkgreen"],["green","darkgreen"],["green","darkgreen"]]},{value:"#",color:"darkgreen",connectors:[["darkgreen"],["darkgreen"],["darkgreen"],["darkgreen"]]}],n=[{value:"w",color:"white",connectors:[["1"],["2"],["3"],["4"]]},{value:"b",color:"black",connectors:[["3"],["4"],["1"],["2"]]}],a=[{value:"up",color:"white",connectors:[["up"],["up"],["up"],["up"]]},{value:"connector",color:"green",connectors:[["up"],["green"],["down"],["green"]]},{value:"down",color:"black",connectors:[["down"],["down"],["down"],["down"]]}],r=[{value:"ground",color:"#b97a57",connectors:[["ground"],["ground"],[],["ground"]]},{value:"sky",color:"skyblue",connectors:[["sky"],["sky"],["sky","ground"],["sky"]]},{value:"flower_base",color:"darkgreen",connectors:[["stem"],["mud1"],["ground"],["mud2"]]},{value:"spacer_a",color:"skyblue",connectors:[["sky"],["mud1","sky"],["ground"],["mud2","sky"]]},{value:"spacer_b",color:"skyblue",connectors:[["sky"],["mud2","sky"],["ground"],["mud1","sky"]]},{value:"spacer_c",color:"skyblue",connectors:[["sky"],["sl","sky"],["sky"],["sr","sky"]]},{value:"spacer_d",color:"skyblue",connectors:[["sky"],["sr","sky"],["sky"],["sl","sky"]]},{value:"flower_stem",color:"green",connectors:[["stem","top"],["sky"],["stem"],["sky"]]},{value:"flower_top",color:"green",connectors:[["top_t"],["top_r"],["top"],["top_l"]]},{value:"flower_top_l",color:"yellow",connectors:[["sky"],["top_l"],["sky"],["sr"]]},{value:"flower_top_r",color:"yellow",connectors:[["sky"],["sl"],["sky"],["top_r"]]},{value:"flower_top_t",color:"yellow",connectors:[["sky"],["sky"],["top_t"],["sky"]]}],s=[{value:"empty",color:"white",connectors:[["e","spark"],["e","spark"],["e"],["e"]]},{value:"start",color:"green",connectors:[["e","start"],["e","start"],["e","start"],["e","start"]],disallow:[["start","end"],["start","end"],["start","end"],["start","end"]]},{value:"end",color:"red",connectors:[["e","end"],["e","end"],["e","end"],["e","end"]],disallow:[["end","start"],["end","start"],["end","start"],["end","start"]]},{value:"path",color:"brown",connectors:[["end","start"],["end","start"],["end","start"],["end","start"]]}],w=[{value:"wall_fill",color:`url('${l}/kenney/Tiles/tile_0000.png')`,connectors:[["wall_in","wall_outU"],["wall_in"],["wall_in"],["wall_in"]]},{value:"ground",color:`url('${l}/kenney/Tiles/tile_0048.png')`,connectors:[["wall_out"],["wall_out"],["wall_out"],["wall_out"]]},{value:"wall_sattuma",color:`url('${l}/kenney/Tiles/tile_0012.png')`,connectors:[["wall_in"],["wall_in"],["wall_in"],["wall_in"]]},{value:"wall_sideL",color:`url('${l}/kenney/Tiles/tile_0015.png')`,disallow:[[],["wall_shadowR","wall_down"],[],["wall_shadowR"]],connectors:[["wall_sideL"],["wall_out","wall_down","wall_shadowD"],["wall_sideL"],["wall_in"]]},{value:"wall_sideR",color:`url('${l}/kenney/Tiles/tile_0013.png')`,connectors:[["wall_sideR"],["wall_in"],["wall_sideR"],["wall_shadowR","wall_down"]]},{value:"wall_cornerLD",color:`url('${l}/kenney/Tiles/tile_0016.png')`,connectors:[["wall_sideL"],["wall_out"],["wall_outLD"],["wall_sideD"]]},{value:"wall_sideD",color:`url('${l}/kenney/Tiles/tile_0002.png')`,connectors:[["wall_in"],["wall_sideD"],["wall_outD"],["wall_sideD"]]},{value:"wall_cornerRD",color:`url('${l}/kenney/Tiles/tile_0017.png')`,connectors:[["wall_sideR"],["wall_sideD"],["wall_outRD"],["wall_shadowR"]]},{value:"wall_down",color:`url('${l}/kenney/Tiles/tile_0040.png')`,connectors:[["wall_outD"],["wall_down"],["wall_shadowD"],["wall_down"]]},{value:"wall_down_endR",color:`url('${l}/kenney/Tiles/tile_0059.png')`,connectors:[["wall_outRD"],["wall_down"],["wall_shadowD"],["wall_shadowR"]]},{value:"wall_down_endL",color:`url('${l}/kenney/Tiles/tile_0057.png')`,connectors:[["wall_outLD"],["wall_out"],["wall_shadowD_endL"],["wall_down"]]},{value:"wall_up",color:`url('${l}/kenney/Tiles/tile_0026.png')`,connectors:[["wall_out"],["wall_up"],["wall_outU"],["wall_up"]]},{value:"wall_up_endR",color:`url('${l}/kenney/Tiles/tile_0005.png')`,connectors:[["wall_out"],["wall_up"],["wall_sideR"],["wall_shadowUR"]]},{value:"wall_up_endL",color:`url('${l}/kenney/Tiles/tile_0004.png')`,connectors:[["wall_out"],["wall_out"],["wall_sideL"],["wall_up"]]},{value:"wall_shadowD",color:`url('${l}/kenney/Tiles/tile_0050.png')`,connectors:[["wall_shadowD"],["wall_shadowD"],["wall_out"],["wall_shadowD"]]},{value:"wall_shadowR",color:`url('${l}/kenney/Tiles/tile_0050R.png')`,connectors:[["wall_shadowR"],["wall_shadowR"],["wall_shadowR"],["wall_out"]]},{value:"wall_shadowUR",color:`url('${l}/kenney/Tiles/tile_0053UR.png')`,connectors:[["wall_out"],["wall_shadowUR"],["wall_shadowR"],["wall_out"]]},{value:"corner",color:`url('${l}/kenney/Tiles/tile_0027TDR.png')`,connectors:[["wall_in"],["wall_in"],["wall_sideR"],["wall_sideD"]]},{value:"wall_shadowRD",color:`url('${l}/kenney/Tiles/tile_0053.png')`,connectors:[["wall_shadowR"],["wall_shadowD"],["wall_out"],["wall_out"]]},{value:"wall_shadowRDInner",color:`url('${l}/kenney/Tiles/tile_0052DR.png')`,connectors:[["wall_shadowD"],["wall_shadowR"],["wall_shadowR"],["wall_shadowD"]]},{value:"wall_shadowD_endL",color:`url('${l}/kenney/Tiles/tile_0050.png')`,connectors:[["wall_shadowD_endL"],["wall_out"],["wall_out"],["wall_shadowD"]]},{value:"cornerUL",color:`url('${l}/kenney/Tiles/tile_0027.png')`,connectors:[["wall_sideL"],["wall_up"],["wall_in","cornerUL"],["wall_in"]]},{value:"cornerUR",color:`url('${l}/kenney/Tiles/tile_0027UR.png')`,connectors:[["wall_sideR"],["wall_in"],["wall_in"],["wall_up"]]},{value:"cornerDL",disallow:[["cornerUL"],["cornerUL"],["cornerUL"],["cornerUL"]],color:`url('${l}/kenney/Tiles/tile_0027DL.png')`,connectors:[["wall_in"],["wall_sideD"],["wall_sideL"],["wall_in"]]}];export{w as a,n as c,a as d,r as f,o as m,s as p,e as s};
