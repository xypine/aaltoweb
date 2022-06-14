<script lang="ts">
    import type tile from "src/lib/tile";
    import type value from "src/lib/value";

    import { minecraft, checkers } from "$lib/rules";

    let default_possible = minecraft;

    let grid: tile[][] = [];
    
    function resetGrid() {
        solving = false;
        solve_lock = false;

        grid=[];
        let y = 0;
        while(y < gw) {
            let col: tile[] = [];
            let x = 0;
            while(x < gw) {
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
    }

    let cursorX: number;
    let cursorY: number;
    function propagate(x: number, y: number, recursion_counter = 0) {
        if(recursion_counter > gw**gw) {
            return;
        }
        let tile = grid[y][x];
        // cursorX = x;
        // cursorY = y;
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

                if(old_possible+"" != new_possible+"") {
                    neighbour.possible = new_possible;
                    grid[neighbourXY[1]][neighbourXY[0]] = neighbour;

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
        if(interval_speed == 0) {
            if(solving && stinterval){
                clearInterval(stinterval);
            }
            console.log("Starting solve...");
            while(true) {
                let tile = choose_collapsable();
                if(tile) {
                    console.log("Collapsing", tile);
                    collapse(tile[0], tile[1]);
                }
                else {
                    console.log("Solve done!");
                    break;
                }
            }
            console.log("Solve done!");
        }
        else {
            if(solving) {
                solving = false;
                console.log("Solve stopped!");
            }
            else {
                console.log("Starting solve...");
                solving = true;
            }
        }
    }

    let show_data = false;
    let selected_rules = "0";
    $: if(selected_rules != null) {
        default_possible = [minecraft, checkers][+selected_rules];
        resetGrid();
    }
    let gw = 25;
    $: if(gw) {
        resetGrid();
    }

    let solving = false;
    let solve_lock = false;
    let stinterval: string|number|NodeJS.Timer|undefined;
    let interval_speed = 0;
    function solve_step() {
        if(solving) {
            if(!solve_lock) {
                solve_lock = true;

                let tile = choose_collapsable();
                if(tile) {
                    console.log("Collapsing", tile);
                    collapse(tile[0], tile[1]);
                }
                else {
                    solving = false;
                    console.log("Solve done!");
                }

                solve_lock = false;
            }
        }
    }
    $: if(interval_speed != null) {
        if(stinterval) {
            clearInterval(stinterval);
        }
        stinterval = setInterval(solve_step, interval_speed);
    }
</script>

<svelte:head>
    <title>WFCTERRAIN</title>
</svelte:head>

<main>
    <h1>WFCTERRAIN</h1>
    <p>made by <a href="https://eliaseskelinen.fi">elias eskelinen</a></p>
    <div>
        <select bind:value={selected_rules}>
            <option value=0>Minecraft</option>
            <option value=1>Checkers</option>
        </select>
    </div>
    <div class="grid" style="--size:{gw};">
        {#each grid as col, y}
            <div class="col">
                {#each col as tile, x}
                    <div class="tile"
                        on:click={()=>{collapse(x, y)}}
                        on:mouseover={(e)=>{if(e.buttons == 1 || e.buttons == 3){collapse(x, y);}}}
                        on:focus={null}
                        title={`${x}, ${y}`}
                        style="--bg:{(cursorX && cursorX == x && cursorY && cursorY == y) ? "pink" : tile.possible.length == 1 ? tile.possible[0].color : "transparent"};"
                    >
                        {show_data ? tile.possible.length == 1 ? tile.possible[0].value : tile.possible.length : ""}
                        {#if false}
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
                        {/if}
                        <div class="possibilities">
                            {#if tile.possible.length != 1}
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
    <div>
        <label for="width">Grid size:</label>
        <input id="width" type="number" bind:value={gw} />
        <!-- <input type="number" bind:value={gh} /> -->
    </div>
    <div>
        <label for="speed">Solve delay:</label>
        <input id="speed" type="range" min=0 max=75 bind:value={interval_speed} />
        {interval_speed} ms
        <!-- <input type="number" bind:value={gh} /> -->
    </div>
    <small>set delay to 0 for maximum speed</small>
    <div>
        <button style="padding: 0.25em 1em;" on:click={solve}>{solving ? "Stop" : "Solve"}</button>
        <button style="padding: 0.25em 1em;" on:click={resetGrid}>Reset</button>
    </div>
</main>

<style>
    *, :global(html, body) {
        padding: 0;
        margin: 0;
    }
    :global(html, body) {
        color-scheme: dark;
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
        --grid-max-size: clamp(0px, 500px, 90vw);
        /* border: 1px solid #ddd; */

        display: flex;
        flex-direction: column;

        gap: 0;
        height: var(--grid-max-size);
    }
    .col {
        flex: 1;
        display: flex;

        gap: 0;
        width: var(--grid-max-size);
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
        --base: calc(var(--grid-max-size) / var(--size));
        position: absolute;
        background: var(--color);
        opacity: var(--opacity);
        min-height: calc(var(--base) * .9);
        min-width: calc(var(--base) * .9);
        transform: translate(calc(var(--base) * 0.05), calc(var(--base) * 0.05));
    }
</style>