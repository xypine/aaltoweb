<script lang="ts">
    import type tile from "src/lib/tile";
    import type value from "src/lib/value";

    let possible_1: value = {
        value: "a",
        connectors: [
            "red", "blue", "red", "blue"
        ]
    };
    let possible_2: value = {
        value: "b",
        connectors: [
            "blue", "red", "blue", "red"
        ]
    };
    let possible_3: value = {
        value: "c",
        connectors: [
            "blue", "blue", "blue", "blue"
        ]
    };
    let possible_4: value = {
        value: "d",
        connectors: [
            "red", "red", "red", "red"
        ]
    };

    let default_possible = [ possible_1, possible_2, possible_3, possible_4 ];

    let grid: tile[][] = [];
    grid.push(
        [
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
        ],
        [
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
        ],
        [
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
        ],
        [
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
        ],
        [
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
            {
                possible: [ ...default_possible ]
            },
        ],
    );

    function propagate(x: number, y: number, recursion_counter = 0) {
        if(recursion_counter > 3) {
            return;
        }
        let tile = grid[y][x];

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
                        if(connector == matching_connector) {
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
                    >
                        {tile.possible.length == 1 ? tile.possible[0].value : tile.possible.length}
                        <div class="connectors">
                            {#if tile.possible.length == 1}
                                {#each tile.possible[0].connectors as connector, index}
                                    <div class="connector" style="
                                        --color:{connector};
                                        --x:{["0", "20px", "0", "-20px"][index]};
                                        --y:{["-20px", "0", "20px", "0"][index]};
                                        --wz:{["20px", "10px", "20px", "10px"][index]};
                                        --hz:{["10px", "20px", "10px", "20px"][index]};
                                    " />
                                {/each}
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
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
        min-height: 100vh;
    }

    .grid {
        display: flex;
        flex-direction: column;

        gap: .25em;
    }
    .col {
        display: flex;

        gap: .25em;
    }
    .tile {
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid black;
        cursor: pointer;
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
</style>