<script lang="ts">
    import type tile from "src/lib/tile";
    import type value from "src/lib/value";

    let possible_1: value = {
        value: "d",
        color: "darkblue",
        connectors: [
            ["blue"],
            ["blue"],
            ["blue"],
            ["blue"],
        ]
    };
    let possible_2: value = {
        value: "w",
        color: "blue",
        connectors: [
            ["blue", "yellow"],
            ["blue", "yellow"],
            ["blue", "yellow"],
            ["blue", "yellow"],
        ]
    };
    let possible_3: value = {
        value: "s",
        color: "yellow",
        connectors: [
            ["yellow", "green"],
            ["yellow", "green"],
            ["yellow", "green"],
            ["yellow", "green"],
        ]
    };

    let possible_4: value = {
        value: "g",
        color: "green",
        connectors: [
            ["green"],
            ["green"],
            ["green"],
            ["green"],
        ]
    };

    let default_possible = [ possible_1, possible_2, possible_3, possible_4 ];

    let grid: tile[][] = [];
    let y = 0;
    while(y < 20) {
        let col: tile[] = [];
        let x = 0;
        while(x < 20) {
            let tile: tile = {
                possible: [...default_possible]
            };
            col.push(tile);
            x++;
        }
        grid.push(col);
        grid = grid;
        y++;
    }

    function propagate(x: number, y: number, recursion_counter = 0) {
        if(recursion_counter > 3) {
            return;
        }
        let tile = grid[y][x];
        // if(tile.possible.length != 1) {
        //     return;
        // }

        let neighbours: [[number, number], number, number][] = [];
        if(y > 0) {
            neighbours.push(
                [[x, y-1], 0, 2]
            );
        }
        if(x > 0) {
            neighbours.push(
                [[x-1, y], 1, 3]
            );
        }
        if(y < grid.length - 1) {
            neighbours.push(
                [[x, y+1], 2, 0]
            );
        }
        if(x < grid[y].length - 1) {
            neighbours.push(
                [[x+1, y], 3, 1]
            );
        }

        for(let [neighbourXY, neighbourDirection, neighbourReverseDirection] of neighbours) { // Iterate over the valid neighbours and remove non passing cells
            let neighbour = grid[neighbourXY[1]][neighbourXY[0]];
            
            if(neighbour.possible.length > 1) { // Pass already collapsed cells
                let old_possible = [ ...neighbour.possible ];
                let new_possible: value[] = [];
                for(let possible of tile.possible) {
                    let connector = possible.connectors[neighbourDirection];
                    for(let neighbour_possible of neighbour.possible) {
                        let matching_connector = neighbour_possible.connectors[neighbourReverseDirection];
                        if(connector.find( c=>matching_connector.includes(c) ) != null) {
                            if(!(new_possible.includes(neighbour_possible))){
                                new_possible.push( neighbour_possible );
                            }
                        }
                    }
                }

                if(old_possible != new_possible) {
                    neighbour.possible = new_possible;
                    grid[neighbourXY[1]][neighbourXY[0]] = neighbour;
                    grid = grid;

                    propagate(neighbourXY[0], neighbourXY[1], recursion_counter+1);
                }
            }
        }
    }

    function collapse(x: number, y: number) {
        let current_tile = grid[y][x];
        let current_possible = current_tile.possible;
        if(current_possible.length > 1) {
            grid[y][x] = {
                ...current_tile,
                possible: [ current_possible[ Math.round(Math.random() * current_possible.length) % current_possible.length ] ]
            };
            propagate(x, y);
        }
    }

    function choose_collapsable(use_max = false) {
        let matching_tiles: [number, number][] = [];

        let min_entropy = 9999;
        let max_entropy = -1;

        if(!use_max){
            let y = 0;
            for(let col of grid){
                let x = 0;
                for(let t of col) {
                    let entropy = t.possible.length;
                    if(entropy < min_entropy && entropy > 1) {
                        min_entropy = entropy;
                        matching_tiles = [ [x, y] ];
                    }
                    else if(entropy == min_entropy) {
                        matching_tiles.push([x, y]);
                    }
                    x += 1;
                }
                y += 1;
            }
        }
        else{
            let y = 0;
            for(let col of grid){
                let x = 0;
                for(let t of col) {
                    let entropy = t.possible.length;
                    if(entropy > max_entropy && entropy > 1) {
                        max_entropy = entropy;
                        matching_tiles = [ [x, y] ];
                    }
                    else if(entropy == max_entropy) {
                        matching_tiles.push([x, y]);
                    }
                    x += 1;
                }
                y += 1;
            }
        }
        
        if(matching_tiles.length > 0) {
            return matching_tiles[ Math.round(Math.random() * matching_tiles.length) % matching_tiles.length ];
        }
    }
    function solve() {
        console.log("Starting solve...");
        let tile = choose_collapsable();
        console.log("Starting tile", tile);
        while(tile) {
            console.log("Collapsing", tile);
            collapse(tile[0], tile[1]);
            tile = choose_collapsable();
        }
    }

    let show_data = false;
</script>

<main>
    <h1>WFCFFS</h1>
    <p><i>It works</i></p>
    <div class="grid">
        {#each grid as col, y}
            <div class="col">
                {#each col as tile, x}
                    <div class="tile"
                        on:click={()=>{collapse(x, y)}}
                        title={`${x}, ${y}`}
                        style="--bg:{tile.possible.length == 1 ? tile.possible[0].color : "transparent"};"
                    >
                        {show_data ? tile.possible.length == 1 ? tile.possible[0].value : tile.possible.length : ""}
                        <div class="connectors">
                            {#if tile.possible.length == 1}
                                {#each tile.possible[0].connectors as connector, index}
                                    <div class="connector" style="
                                        --color:{connector[0]};
                                        --x:{["0", "20px", "0", "-20px"][index]};
                                        --y:{["-20px", "0", "20px", "0"][index]};
                                        --wz:{["20px", "10px", "20px", "10px"][index]};
                                        --hz:{["10px", "20px", "10px", "20px"][index]};
                                    " />
                                {/each}
                            {/if}
                        </div>
                        <div class="possibilities">
                            {#if tile.possible.length != 0}
                                {#each tile.possible as possible}
                                    <div
                                        class="possible"
                                        style="
                                            --color:{possible.color};
                                            --opacity:{1.0/tile.possible.length};
                                        "
                                    />
                                {/each}
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <button style="padding: 0.25em 1em;" on:click={solve}>Solve</button>
</main>

<style>
    *, :global(html, body) {
        padding: 0;
        margin: 0;
    }
    :global(html, body) {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;

        min-height: 100vh;
    }

    .grid {
        border: 1px solid #ddd;

        display: flex;
        flex-direction: column;

        gap: 0;
        height: 500px;
    }
    .col {
        flex: 1;
        display: flex;

        gap: 0;
        width: 500px;
    }
    .tile {
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        /* border: 1px solid black; */
        cursor: pointer;

        background: var(--bg);
    }

    .connectors {
        width: 0;
        height: 0;
        display: none;
    }
    .connector {
        position: absolute;
        background: var(--color, violet);
        height: var(--h,10px);
        width: var(--w, 10px);
        transform: translate(-9.5px, -5px) translate(var(--x, 0), var(--y, 0));
    }

    .possibilities {
        position: relative;
        top: -50%;
        left: -50%;
    }
    .possible {
        position: absolute;
        background: var(--color);
        opacity: var(--opacity);
        min-height: 1em;
        min-width: 1em;
    }
</style>