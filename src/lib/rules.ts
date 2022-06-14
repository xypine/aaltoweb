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
    value: "ed",
    color: "darkblue",
    connectors: [
        ["dblue"],
        ["dblue"],
        ["dblue"],
        ["dblue"],
    ]
};
let minecraft_1: value = {
    value: "d",
    color: "darkblue",
    connectors: [
        ["blue", "dblue"],
        ["blue", "dblue"],
        ["blue", "dblue"],
        ["blue", "dblue"],
    ]
};
let minecraft_2: value = {
    value: "w",
    color: "blue",
    connectors: [
        ["blue", "yellow"],
        ["blue", "yellow"],
        ["blue", "yellow"],
        ["blue", "yellow"],
    ]
};
let minecraft_3a: value = {
    value: "sa",
    color: "cornsilk",
    connectors: [
        ["yellow", "yellowb"],
        ["yellow", "yellowb"],
        ["yellow", "yellowb"],
        ["yellow", "yellowb"],
    ]
};
let minecraft_3: value = {
    value: "s",
    color: "bisque",
    connectors: [
        ["yellowb", "green"],
        ["yellowb", "green"],
        ["yellowb", "green"],
        ["yellowb", "green"],
    ]
};

let minecraft_4: value = {
    value: "g",
    color: "green",
    connectors: [
        ["green", "darkgreen"],
        ["green", "darkgreen"],
        ["green", "darkgreen"],
        ["green", "darkgreen"],
    ]
};
let minecraft_5: value = {
    value: "t",
    color: "darkgreen",
    connectors: [
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
        ["darkgreen", "rock1", "rock2", "rock3", "rock4"],
    ]
};
let minecraft_6: value = {
    value: "r",
    color: "gray",
    connectors: [
        ["rock1"],
        ["rock2"],
        ["rock3"],
        ["rock4"],
    ]
};

export let minecraft = [ minecraft_0, minecraft_1, minecraft_2, minecraft_3a, minecraft_3, minecraft_4, minecraft_5 ];