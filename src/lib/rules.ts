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

export let platformer = [{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGOcefPVfwYgYLT3OANmAABBQQWwpqt1XwAAAABJRU5ErkJggg==')","connectors":[["0","6","7"],["1","3","8"],["2"],["1","4","5"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGOw9zjzf2dV+H8mBigAAD+JBN6H6HrXAAAAAElFTkSuQmCC')","connectors":[["9","11","13"],["10"],["11","14","15"],["12"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGUlEQVR4nGPYWRX+f+bNV/+ZGIBAYWEuAwBQSgcVU4r19gAAAABJRU5ErkJggg==')","connectors":[["16"],["17"],["18"],["19"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGUlEQVR4nGOsr6//zwAEjFufyf5/8vksAwA/jQfaesQMjwAAAABJRU5ErkJggg==')","connectors":[["20"],["21","24"],["22"],["23","25","26","27","28"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGOsr6//zwAETEDMIBWVzQAAKEQDX3ESp4QAAAAASUVORK5CYII=')","connectors":[["29"],["30","38"],["31","33"],["32","34","35","36","37","39","40"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGOcefPVf4WFuQxMIAIEAElnBbvoujdFAAAAAElFTkSuQmCC')","connectors":[["41"],["42"],["43"],["44"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVR4nGOcefPVfwYgYAJiMAAAM5cDXy3wYIwAAAAASUVORK5CYII=')","connectors":[["45","51","56","62","64","66","68","70","33","74","84"],["46","47","49","52","57","60","61","65","67","32","73","77","83","86"],["45","48","50","59","71","72","75","80","0","81"],["47","53","54","55","58","63","69","76","78","79","82","85","21","87","88"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVR4nGOor6//P/Pmq/+MW5/J/n/y+SwDAGVwCzRaREXCAAAAAElFTkSuQmCC')","connectors":[["89"],["90","35","93"],["91"],["92","57"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGPYWRX+397jzH8mBigAAEBlBN6+V15ZAAAAAElFTkSuQmCC')","connectors":[["94","98","99","101"],["95"],["96","94","100"],["97"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGOcefPVfwYgYFJYmAukGBgAO4wEjeG/3+gAAAAASUVORK5CYII=')","connectors":[["80"],["102"],["103","104","101"],["67","105"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAE0lEQVR4nGOsr6//zwAETEAMBgAl+AKAxG1eNwAAAABJRU5ErkJggg==')","connectors":[["108"],["106","110","36","119","120"],["107","64","111","112","29","108","113","20","114","89","115","116","117"],["106","109","30","118","121","122"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGOcefPVfwYgYFFYmAukGBgAO54Ej2eNGyoAAAAASUVORK5CYII=')","connectors":[["123","71","128"],["124","126","78","19","129"],["125"],["83","124","102","127","42"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGOor6//P/Pmq/+MIIIBCABhAAk0j859jQAAAABJRU5ErkJggg==')","connectors":[["114"],["109","28","130","132"],["56"],["65","131","133","134","135"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGPc+kz2/5PPZxmYQAQIAABcmggDQoqOPAAAAABJRU5ErkJggg==')","connectors":[["136"],["82"],["123","66","6"],["86","137","138"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGElEQVR4nGOcefPVf4WFuQxMy/IfMYAAAE73BoR4IUL3AAAAAElFTkSuQmCC')","connectors":[["139"],["5"],["13"],["140"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAE0lEQVR4nGPcWRX+nwEImIAYDAAnKgKN6hVHEAAAAABJRU5ErkJggg==')","connectors":[["141","143","125","48","147","43","96","153","154","156","18","15","157"],["142","144","12","58","140","149","151","127","44","4","155"],["143"],["142","61","145","146","148","150","152","95","126","17","3"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGOw9zjzf2dV+H9GEMEABABPowdmm0psBAAAAABJRU5ErkJggg==')","connectors":[["14"],["158"],["157"],["149"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGUlEQVR4nGOcefPVfxleYwYmBiB48vksAwA/0wZffVXwrgAAAABJRU5ErkJggg==')","connectors":[["159"],["76","160","161"],["84","128","7"],["49"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAE0lEQVR4nGO09zjznwEImIAYDAAiywJWODuqjAAAAABJRU5ErkJggg==')","connectors":[["162","2","59"],["163","145","97"],["162","164","141"],["163","151","10"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGUlEQVR4nGOsr6//zwAEjDNvvvovw2vMAAA8GgY2DVR0nwAAAABJRU5ErkJggg==')","connectors":[["116"],["165","121","40","88","23"],["166"],["167","77","130"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGOsr6//zwAEjDNvvgIzADsdBdrY6tD5AAAAAElFTkSuQmCC')","connectors":[["113"],["26","118","168","85","167","37"],["62"],["73","90","24","132","120","169","170"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGOeefPVf2NhrgZGEIMBCABRyQeLkW416QAAAABJRU5ErkJggg==')","connectors":[["107"],["63","92","39","135","172"],["51"],["110","93","171","165"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGO09zjznwEIGHdWhYMZADLlBN5ECw+aAAAAAElFTkSuQmCC')","connectors":[["164"],["173","174","146"],["154"],["158","173","155"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGOsr6//zwAETFJR2UCKgQEAK8ADX07LOEMAAAAASUVORK5CYII=')","connectors":[["112"],["79","34","25","134","171","122","170"],["175","68"],["119","38"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGUlEQVR4nGPYWRX+f+bNV/+ZGIBgWf4jBgBStgfeVOWbxQAAAABJRU5ErkJggg==')","connectors":[["104","176","72"],["150"],["99"],["8"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4nGOcefPVfwYgYAJiBoWFuQwANtQEjbp2qLEAAAAASUVORK5CYII=')","connectors":[["50"],["87","178"],["177"],["129"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGPYWRX+397jzH9GEIMBCABQfwdmQLxxWwAAAABJRU5ErkJggg==')","connectors":[["100"],["152"],["156"],["174"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGPc+kz2/5PPZxmYGKAAAEoHBV95npblAAAAAElFTkSuQmCC')","connectors":[["179","22","111","31","91"],["54","131"],["179","74","136"],["52","180","172","178","161","181"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGUlEQVR4nGOeefPVf2NhrgYmBiAwS5/HAAA/7QVsQAgRtQAAAABJRU5ErkJggg==')","connectors":[["115"],["53"],["182"],["168"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGOcefPVf4WFuQxMDFAAAEFyBI1gQBd4AAAAAElFTkSuQmCC')","connectors":[["183","177","81"],["138","181","69"],["139","183","9","147","41"],["144"]],"disallow":null},{"value":"lmao","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGPYWRX+f+bNV/+ZGKAAAE0NBef3rPMaAAAAAElFTkSuQmCC')","connectors":[["75","184","103"],["148"],["184","153","98","16","176"],["60","185","160"]],"disallow":null},{"value":"g","color":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR4nGOcefPVfxleYwYmBigAADfQA7uqMmD0AAAAAElFTkSuQmCC')","connectors":[["117","186","175","166","182"],["55","180","185","169","133","27","105","137"],["186","159","70"],["46"]],"disallow":null}]