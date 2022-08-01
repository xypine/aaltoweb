import type value from "$lib/value";
import { base_path } from "$lib/env";

export let checkers = [{"value":"w","color":"white","connectors":[["1"],["1"],["2"],["2"]]},{"value":"b","color":"black","connectors":[["2"],["2"],["1"],["1"]]}];
export let stripes = [{"value":"one","color":"white","connectors":[["one"],["one"],["one"],["two"]]},{"value":"two","color":"black","connectors":[["two"],["two"],["two"],["one"]]}];

let minecraft_0: value = {
    value: "water_deep",
    color: "darkblue",
    connectors: [
        ["dblue"],
        ["dblue"],
        ["dblue"],
        ["dblue"],
    ]
};
let minecraft_1: value = {
    value: "water",
    color: "darkblue",
    connectors: [
        ["blue", "dblue"],
        ["blue", "dblue"],
        ["blue", "dblue"],
        ["blue", "dblue"],
    ]
};
let minecraft_2: value = {
    value: "water_shallow",
    color: "blue",
    connectors: [
        ["blue", "yellow"],
        ["blue", "yellow"],
        ["blue", "yellow"],
        ["blue", "yellow"],
    ]
};
let minecraft_3a: value = {
    value: "shore",
    color: "cornsilk",
    connectors: [
        ["yellow", "yellowb"],
        ["yellow", "yellowb"],
        ["yellow", "yellowb"],
        ["yellow", "yellowb"],
    ]
};
let minecraft_3: value = {
    value: "sand",
    color: "bisque",
    connectors: [
        ["yellowb", "green"],
        ["yellowb", "green"],
        ["yellowb", "green"],
        ["yellowb", "green"],
    ]
};

let minecraft_4: value = {
    value: "grass",
    color: "green",
    connectors: [
        ["green", "darkgreen"],
        ["green", "darkgreen"],
        ["green", "darkgreen"],
        ["green", "darkgreen"],
    ]
};
let minecraft_5: value = {
    value: "forest",
    color: "darkgreen",
    connectors: [
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
    ]
};

let minecraft_3_mesa: value = {
    value: "sand_mesa",
    color: "bisque",
    connectors: [
        ["yellowb", "mesa0"],
        ["yellowb", "mesa0"],
        ["yellowb", "mesa0"],
        ["yellowb", "mesa0"],
    ]
};
let minecraft_4_mesa: value = {
    value: "mesa0",
    color: "#9e4d1b",
    connectors: [
        ["mesa0", "mesa1"],
        ["mesa0", "mesa1"],
        ["mesa0", "mesa1"],
        ["mesa0", "mesa1"],
    ]
};
let minecraft_5_mesa: value = {
    value: "mesa1",
    color: "#57231c",
    connectors: [
        ["mesa1", "mesa2"],
        ["mesa1", "mesa2"],
        ["mesa1", "mesa2"],
        ["mesa1", "mesa2"],
    ]
};

export let minecraft = [ 
    minecraft_1, minecraft_2, minecraft_3a, minecraft_3, minecraft_4, minecraft_5, // minecraft_0
    minecraft_3_mesa, minecraft_4_mesa, minecraft_5_mesa
];

export let minecraft_neo =
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
];

export let terrain =
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
];

export let checkers_neo =
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
];

export let directional =
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
];

export let flowers =
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
];

export let paths =
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
];

export let dungeon = 
[
    {
      "value": "wall_fill",
      "color": `url('${base_path}/kenney/Tiles/tile_0000.png')`,
      "connectors": [
        [
          "wall_in",
          "wall_outU"
        ],
        [
          "wall_in"
        ],
        [
          "wall_in"
        ],
        [
          "wall_in"
        ]
      ]
    },
    {
      "value": "ground",
      "color": `url('${base_path}/kenney/Tiles/tile_0048.png')`,
      "connectors": [
        [
          "wall_out"
        ],
        [
          "wall_out"
        ],
        [
          "wall_out"
        ],
        [
          "wall_out"
        ]
      ]
    },
    {
      "value": "wall_sattuma",
      "color": `url('${base_path}/kenney/Tiles/tile_0012.png')`,
      "connectors": [
        [
          "wall_in"
        ],
        [
          "wall_in"
        ],
        [
          "wall_in"
        ],
        [
          "wall_in"
        ]
      ]
    },
    {
      "value": "wall_sideL",
      "color": `url('${base_path}/kenney/Tiles/tile_0015.png')`,
      "disallow": [
        [],
        ["wall_shadowR", "wall_down"],
        [],
        ["wall_shadowR"]
      ],
      "connectors": [
        [
          "wall_sideL"
        ],
        [
          "wall_out",
          "wall_down",
          "wall_shadowD"
        ],
        [
          "wall_sideL"
        ],
        [
          "wall_in"
        ]
      ]
    },
    {
      "value": "wall_sideR",
      "color": `url('${base_path}/kenney/Tiles/tile_0013.png')`,
      "connectors": [
        [
          "wall_sideR"
        ],
        [
          "wall_in"
        ],
        [
          "wall_sideR"
        ],
        [
          "wall_shadowR",
          "wall_down"
        ]
      ]
    },
    {
      "value": "wall_cornerLD",
      "color": `url('${base_path}/kenney/Tiles/tile_0016.png')`,
      "connectors": [
        [
          "wall_sideL"
        ],
        [
          "wall_out"
        ],
        [
          "wall_outLD"
        ],
        [
          "wall_sideD"
        ]
      ]
    },
    {
      "value": "wall_sideD",
      "color": `url('${base_path}/kenney/Tiles/tile_0002.png')`,
      "connectors": [
        [
          "wall_in"
        ],
        [
          "wall_sideD"
        ],
        [
          "wall_outD"
        ],
        [
          "wall_sideD"
        ]
      ]
    },
    {
      "value": "wall_cornerRD",
      "color": `url('${base_path}/kenney/Tiles/tile_0017.png')`,
      "connectors": [
        [
          "wall_sideR"
        ],
        [
          "wall_sideD"
        ],
        [
          "wall_outRD"
        ],
        [
          "wall_shadowR"
        ]
      ]
    },
    {
      "value": "wall_down",
      "color": `url('${base_path}/kenney/Tiles/tile_0040.png')`,
      "connectors": [
        [
          "wall_outD"
        ],
        [
          "wall_down"
        ],
        [
          "wall_shadowD"
        ],
        [
          "wall_down"
        ]
      ]
    },
    {
      "value": "wall_down_endR",
      "color": `url('${base_path}/kenney/Tiles/tile_0059.png')`,
      "connectors": [
        [
          "wall_outRD"
        ],
        [
          "wall_down"
        ],
        [
          "wall_shadowD"
        ],
        [
          "wall_shadowR"
        ]
      ]
    },
    {
      "value": "wall_down_endL",
      "color": `url('${base_path}/kenney/Tiles/tile_0057.png')`,
      "connectors": [
        [
          "wall_outLD"
        ],
        [
          "wall_out"
        ],
        [
          "wall_shadowD_endL"
        ],
        [
          "wall_down"
        ]
      ]
    },
    {
      "value": "wall_up",
      "color": `url('${base_path}/kenney/Tiles/tile_0026.png')`,
      "connectors": [
        [
          "wall_out"
        ],
        [
          "wall_up"
        ],
        [
          "wall_outU"
        ],
        [
          "wall_up"
        ]
      ]
    },
    {
      "value": "wall_up_endR",
      "color": `url('${base_path}/kenney/Tiles/tile_0005.png')`,
      "connectors": [
        [
          "wall_out"
        ],
        [
          "wall_up"
        ],
        [
          "wall_sideR"
        ],
        [
          "wall_shadowUR"
        ]
      ]
    },
    {
      "value": "wall_up_endL",
      "color": `url('${base_path}/kenney/Tiles/tile_0004.png')`,
      "connectors": [
        [
          "wall_out"
        ],
        [
          "wall_out"
        ],
        [
          "wall_sideL"
        ],
        [
          "wall_up"
        ]
      ]
    },
    {
      "value": "wall_shadowD",
      "color": `url('${base_path}/kenney/Tiles/tile_0050.png')`,
      "connectors": [
        [
          "wall_shadowD"
        ],
        [
          "wall_shadowD"
        ],
        [
          "wall_out"
        ],
        [
          "wall_shadowD"
        ]
      ]
    },
    {
      "value": "wall_shadowR",
      "color": `url('${base_path}/kenney/Tiles/tile_0050R.png')`,
      "connectors": [
        [
          "wall_shadowR"
        ],
        [
          "wall_shadowR"
        ],
        [
          "wall_shadowR"
        ],
        [
          "wall_out"
        ]
      ]
    },
    {
      "value": "wall_shadowUR",
      "color": `url('${base_path}/kenney/Tiles/tile_0053UR.png')`,
      "connectors": [
        [
          "wall_out"
        ],
        [
          "wall_shadowUR"
        ],
        [
          "wall_shadowR"
        ],
        [
          "wall_out"
        ]
      ]
    },
    {
      "value": "corner",
      "color": `url('${base_path}/kenney/Tiles/tile_0027TDR.png')`,
      "connectors": [
        [
          "wall_in"
        ],
        [
          "wall_in"
        ],
        [
          "wall_sideR"
        ],
        [
          "wall_sideD"
        ]
      ]
    },
    {
      "value": "wall_shadowRD",
      "color": `url('${base_path}/kenney/Tiles/tile_0053.png')`,
      "connectors": [
        [
          "wall_shadowR"
        ],
        [
          "wall_shadowD"
        ],
        [
          "wall_out"
        ],
        [
          "wall_out"
        ]
      ]
    },
    {
        "value": "wall_shadowRDInner",
        "color": `url('${base_path}/kenney/Tiles/tile_0052DR.png')`,
        "connectors": [
            [
                "wall_shadowD"
            ],
            [
                "wall_shadowR"
            ],
            [
                "wall_shadowR"
            ],
            [
                "wall_shadowD"
            ]
        ]
    },
    {
      "value": "wall_shadowD_endL",
      "color": `url('${base_path}/kenney/Tiles/tile_0050.png')`,
      "connectors": [
        [
          "wall_shadowD_endL"
        ],
        [
          "wall_out"
        ],
        [
          "wall_out"
        ],
        [
          "wall_shadowD"
        ]
      ]
    },
    {
        "value": "cornerUL",
        "color": `url('${base_path}/kenney/Tiles/tile_0027.png')`,
        "connectors": [
            [
                "wall_sideL"
            ],
            [
                "wall_up"
            ],
            [
                "wall_in", "cornerUL"
            ],
            [
                "wall_in"
            ]
        ]
    },
    {
        "value": "cornerUR",
        "color": `url('${base_path}/kenney/Tiles/tile_0027UR.png')`,
        "connectors": [
            [
                "wall_sideR"
            ],
            [
                "wall_in"
            ],
            [
                "wall_in"
            ],
            [
                "wall_up"
            ]
        ]
    },
    {
        "value": "cornerDL",
        "disallow": [
            ["cornerUL"],
            ["cornerUL"],
            ["cornerUL"],
            ["cornerUL"]
        ],
        "color": `url('${base_path}/kenney/Tiles/tile_0027DL.png')`,
        "connectors": [
            [
                "wall_in"
            ],
            [
                "wall_sideD"
            ],
            [
                "wall_sideL"
            ],
            [
                "wall_in"
            ]
        ]
    },
]

export let houses = [{"value":"g","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVR4nGNcFcrwnwEIGIEYzAAAI7QDAPTbj9AAAAAASUVORK5CYII=')","connectors":[["0","5"],["1","4","6"],["3","8"],["2","7","9"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNkYGD4D8QMTKuABAgAABN4Aa3ygFPAAAAAAElFTkSuQmCC')","connectors":[["10","14"],["11","15","17"],["12","16","18"],["13","4","19","20"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGNcFcrwnwEImMJWA0kgAAAmHwMD2iTWIAAAAABJRU5ErkJggg==')","connectors":[["21"],["22"],["23"],["24"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNkYGD4D8QMLKuABAgAABOKAa/6GgNqAAAAAElFTkSuQmCC')","connectors":[["25"],["26","29","30"],["27"],["28","17"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAE0lEQVR4nGNcFcrwnwEImIAYDAAewgICZjlMxgAAAABJRU5ErkJggg==')","connectors":[["31","35"],["32","36"],["33"],["34","37"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAE0lEQVR4nGNkYGD4D8QMTEAMBgAOKAEDCwFj0AAAAABJRU5ErkJggg==')","connectors":[["38","41","46","33","16","3","51","52","59","60","62"],["19","39","44","47","28","34","49","56","57","7"],["10","38","40","25","45","48","54","58","61"],["39","42","43","50","1","53","55","30","36","63"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNYFcrwn4GB4T8TkAADACimAwDjGW6vAAAAAElFTkSuQmCC')","connectors":[["64","66"],["65"],["67","51"],["49","32"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGNcxcDwnwEImMKABEMoAwMAHSECWGgDidEAAAAASUVORK5CYII=')","connectors":[["68"],["55"],["69"],["70"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNYxcDwnwGImYAEiMMAACX+A1V2tG9WAAAAAElFTkSuQmCC')","connectors":[["48"],["71","73"],["64","74"],["72","44"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGNYFcrwn4GB4T8jiABiBgAtmAP+W3wAsQAAAABJRU5ErkJggg==')","connectors":[["75","78"],["76"],["59","77"],["29","6","57"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGNcxcDwnwEImBhCGRjCgAwAHR0CWHLTc/kAAAAASUVORK5CYII=')","connectors":[["12"],["24"],["75"],["47"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNkYGD4vyqUgQHMAGIGAB+4AwA0lZ6SAAAAAElFTkSuQmCC')","connectors":[["69","23"],["72","2","53"],["41"],["76"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGNcFcrwnwEImICYIWw1AwMAIhsDAwEk310AAAAASUVORK5CYII=')","connectors":[["79"],["70"],["78"],["80"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGNcxcDwnwEImBhCgSQQAAAbxQICVpX7kQAAAABJRU5ErkJggg==')","connectors":[["18"],["81"],["31"],["15"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVR4nGNkYGD4vwpIMIEIEAAAHBoCV9NeKGIAAAAASUVORK5CYII=')","connectors":[["58","77"],["42"],["82","84"],["83","85"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGElEQVR4nGNcFcrwn2E1AwMTAwiEMjAAACfFAwKb4shYAAAAAElFTkSuQmCC')","connectors":[["74"],["80"],["5"],["86"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNYxcDwnwGIGUEEEDMAAChIA6mJgU6DAAAAAElFTkSuQmCC')","connectors":[["45"],["86"],["62","87"],["56"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVR4nGNkYGD4vwpIgBlAzAAAG7wCq07XVEgAAAAASUVORK5CYII=')","connectors":[["61"],["63","20"],["52","14"],["88"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNcxcDwnyGUgYEJRIAAAB/BAlfSli2mAAAAAElFTkSuQmCC')","connectors":[["84"],["88"],["0"],["22"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGNcxcDwnwEImICYgSGUgQEAGnECAnsa2YwAAAAASUVORK5CYII=')","connectors":[["89"],["90"],["35"],["91"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAE0lEQVR4nGNcxcDwnwEImIAYDAAZcgGtQd2pxwAAAABJRU5ErkJggg==')","connectors":[["54"],["92","85"],["79","21"],["73","11"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNkYGD4vyqUgYEJyAADABrGAgJbw6RsAAAAAElFTkSuQmCC')","connectors":[["82","93"],["43","37","13"],["46"],["65"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGNcxcDwnwEIWBhCgSQQAAAb1wIE8PDxqgAAAABJRU5ErkJggg==')","connectors":[["27"],["91","83"],["93","66"],["71","81"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGNkYGD4D8QMTEDMsAqIARDQAa3KWoASAAAAAElFTkSuQmCC')","connectors":[["40","8","87","67"],["50","9"],["60","68","89"],["90","92","26"]],"disallow":null}]