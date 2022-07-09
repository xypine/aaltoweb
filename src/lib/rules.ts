import type value from "src/lib/value";

let checkers_a: value = {
    value: "w",
    color: "white",
    connectors: [
        ["1"],
        ["2"],
        ["3"],
        ["4"],
    ]
};
let checkers_b: value = {
    value: "b",
    color: "black",
    connectors: [
        ["3"],
        ["4"],
        ["1"],
        ["2"],
    ]
};
export let checkers = [ checkers_a, checkers_b ];


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

export let minecraft_neo = `
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
`;

export let terrain = `
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
`;

export let checkers_neo = `
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
`;

export let directional = `
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
`;

export let flowers = `
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
`;

export let paths = `
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
`;

export let dungeon = `
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
`;