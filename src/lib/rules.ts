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
`