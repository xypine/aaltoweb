<script lang="ts">
    import { onMount } from "svelte";
    import type tile from "src/lib/tile";

    import { minecraft_neo, checkers_neo, directional } from "$lib/rules";

    import init, { reset_grid, choose_collapsable, collapse, collapse_all } from 'aalto2'; // also propagate, hello_world?

    let default_possible = minecraft_neo;
    let max_recursion = 1000;

    let grid: tile[][] = [];

    function gridJS() {
        let json = JSON.stringify({
            tiles: grid
        });
        return json;
    }

    function gridRS(s: string) {
        let g = JSON.parse(s);
        grid = g.tiles;
    }

    let err = false;
    function resetGrid() {
        if(!ready) {
            return;
        }
        solving = false;
        try {
            let result = reset_grid(gw, gw, default_possible);
            let parsed: tile[][] = JSON.parse(result);
            grid = parsed;
            err = false;
        } catch {
            grid = [];
            err = true;
        }
    }

    function solve() {
        if(interval_speed == 0) {
            if(solving && stinterval){
                clearInterval(stinterval);
            }
            console.log("Starting solve...");
            let result = collapse_all(gridJS(), max_recursion);
            gridRS(result);
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

    let ready = false;
    onMount(()=>{
        init().then(()=>{
            ready = true;
        });
    });

    let show_data = false;
    let show_possible = true;
    let selected_rules = "0";
    $: if(selected_rules != null && ready) {
        default_possible = [minecraft_neo, checkers_neo, directional][+selected_rules];
    }
    $: if(default_possible && ready) {
        resetGrid();
    }
    let gw = 16;
    $: if(gw && ready) {
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

                let tile = JSON.parse(choose_collapsable(gridJS()));
                if(tile) {
                    console.log("Collapsing", tile);
                    let rs = collapse(gridJS(), tile[0], tile[1], max_recursion);
                    gridRS(rs);
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

    function collapse_cell(x: number, y: number) {
        if(!ready) {
            return;
        }
        console.log("In", gridJS());
        let result = collapse(gridJS(), x, y, max_recursion);
        gridRS(result);
    }
</script>

<svelte:head>
    <title>AALTO</title>
</svelte:head>

<main>
    <h1>AALTO</h1>
    <p>made by <a href="https://eliaseskelinen.fi">elias eskelinen</a></p>
    <div>
        <select bind:value={selected_rules}>
            <option value=0>Minecraft</option>
            <option value=1>Checkers</option>
            <option value=2>Layers</option>
        </select>
    </div>
    <details style="min-width: var(--grid-max-size);">
        <summary>Edit the rules</summary>
        <textarea bind:value={default_possible} style="min-width: var(--grid-max-size);resize: block;min-height:var(--grid-max-size);"></textarea>
    </details>
    <div class="grid" style="--size:{gw};">
        {#if !grid || grid.length == 0}
            <div style="height: 100%;width:100%;display:grid;place-items:center;">
                {#if err}
                    <p>
                        Error while executing wasm. <br />
                        Are the rules valid?
                    </p>
                {:else}
                    <p>Loading wasm...</p>
                {/if}
            </div>
        {/if}
        {#each grid as col, y}
            <div class="col">
                {#each col as tile, x}
                    <div class="tile"
                        on:click={()=>{collapse_cell(x, y)}}
                        on:mouseover={(e)=>{if(e.buttons == 1 || e.buttons == 3){collapse_cell(x, y);}}}
                        on:focus={null}
                        title={`${x}, ${y}`}
                        style="--bg:{tile.possible.length == 1 ? tile.possible[0].color : "transparent"};"
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
                        {#if show_possible}
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
                        {/if}
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
    <details>
        <summary>Performance</summary>
        <div>
            <label for="show-possible">Show possible:</label>
            <input id="show-possible" type="checkbox" bind:checked={show_possible} />
        </div>
    </details>
    <details>
        <summary>Solving</summary>
        <div>
            <label for="speed">Solve delay:</label>
            <input id="speed" type="range" min=0 max=75 bind:value={interval_speed} />
            {interval_speed} ms
            <!-- <input type="number" bind:value={gh} /> -->
        </div>
        <small>set delay to 0 for maximum speed</small>
    </details>
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

        --grid-max-size: clamp(0px, 500px, 90vw);
    }

    .grid {
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