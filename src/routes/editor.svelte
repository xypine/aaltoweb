<script lang="ts">
    import EditableText from "$lib/components/EditableText.svelte";
import Rule from "$lib/components/Rule.svelte";
    import { minecraft_neo, checkers_neo, directional, flowers, paths, dungeon, stripes } from "$lib/rules";
    const connector_transforms = [
        "translate( 0,  var(--sm))",
        "translate(var(--sm), 0px)",
        "translate( 0,   var(--s))",
        "translate( var(--s), 0px)"
    ];
    const reverse_connector: { [key: number]: number } = {
        0: 2,
        1: 3,
        2: 0,
        3: 1
    };
    let rules = dungeon;
    let available_connectors: string[] = [];
    let actual_connectors: string[] = [];
    $: if(rules != null) {
        actual_connectors = [...new Set(rules.map(r=>r.connectors.flat()).flat()) ];
        available_connectors = [...actual_connectors];
    }

    function newRules() {
        rules = [

        ];
    }
    function exportRules() {
        alert(JSON.stringify(rules));
    }
    function addTile() {
        let name = prompt("Tile name");
        if(name == null) {
            return;
        }
        let color = prompt("Tile color");
        if(color == null) {
            return;
        }
        rules.push({
            value: name,
            color: color,
            connectors: [
                [],
                [],
                [],
                []
            ]
        });
        rules = rules;
    }
    function deleteConnector(connector: string) {
        for(let r of rules) {
            r.connectors = r.connectors.map(
                fc => fc.filter( f=>f!==connector )
            );
        }
        rules = rules;
    }
    function addConnector() {
        if(new_connector != null && new_connector !== "") {
            available_connectors = [
                ...available_connectors,
                new_connector
            ];
            console.log("Added new connector", new_connector);
        }
    }


    let selected_rules = "5";
    $: if(selected_rules != null) {
        rules = [minecraft_neo, checkers_neo, directional, flowers, paths, dungeon, stripes][+selected_rules];
        previous_selected = null;
        selected = null;
    }

    let previous_selected: number | null;
    let selected: number | null;

    let new_connector: string;
    let editor_targets = {};
</script>

<main
    on:mouseover={()=>{
        selected = previous_selected;
    }}
    on:focus={()=>{}}
>
    <div class="browser">
        <div style="display: flex;gap: .25em;flex-wrap: wrap;">
            <select bind:value={selected_rules}>
                <option value=5>Dungeon</option>
                <option value=0>Minecraft</option>
                <option value=1>Checkers</option>
                <option value=2>Layers</option>
                <option value=3>Flowers</option>
                <option value=6>Stripes</option>
                <!-- <option value=4>Paths</option> -->
            </select>
            <button on:click={exportRules}>export</button>
            <button on:click={newRules}>new</button>
        </div>
        <h3 style="margin-block:0;">Tiles</h3>
        <div class="selection">
            {#each rules as rule, index}
                <div class="rule-wrapper"
                    on:click={()=>{
                        selected = index;
                        previous_selected = index;
                    }}
                    on:mouseover={(e)=>{
                        selected = index;
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    on:focus={()=>{}}
                >
                    <Rule {rule} selectable selected={selected==index} partially_selected={previous_selected==index && selected != index} />
                </div>
            {/each}
            <button on:click={addTile} class="add-tile">+</button>
        </div>
        <h3>Connectors</h3>
        <div class="available-connectors">
            {#each available_connectors as connector}
                <div class="available-connector" class:shadow={!actual_connectors.includes(connector)}>
                    {connector}
                    <button on:click={()=>{deleteConnector(connector)}}>×</button>
                </div>
            {/each}
            <div style="display: flex;background-color: #191919;border: 1px solid #2d2c2d;border-radius: .25rem;overflow: hidden;">
                <input style="height: 2em;width: 8em;border: none;background-color: #191919;padding-top: 0px;padding-bottom: 0px;outline:none;font-size:1em;padding-left: .5em;" bind:value={new_connector}>
                <button on:click={addConnector} style="height: 2em;box-sizing: content-box;border: none;padding-top: 0px;padding-bottom: 0px;font-size: 1em;">+</button>
            </div>
        </div>
    </div>
    <div class="editor">
        {#if selected != null && rules != null && rules != []}
            <div style="flex:1;justify-content: center;display: flex;align-items: center;  min-width: 750px;min-height: 750px;">
                <div style="width:0;height:0;">
                    <Rule rule={rules[selected]} style="min-width:100px;min-height:100px;transform: translate(-50%,-50%);" />
                </div>
                {#each rules[selected].connectors as connector, index}
                    <div class="connector" style="transform: {connector_transforms[index]};">
                        <!-- <p class="connector-content">{connector}</p> -->
                        <div class="connector-content">
                            <select bind:value={editor_targets[index]}>
                                {#each connector as c, i}
                                    <option value={i}>{i+1}/{connector.length}</option>
                                {/each}
                            </select>
                            <select bind:value={connector[+editor_targets[index]]}>
                                {#each available_connectors as c}
                                    <option value={c}>{c}</option>
                                {/each}
                            </select>
                        </div>
                    </div>
                {/each}
                {#each rules[selected].connectors as connector, index}
                    <div class="possible" style="transform: {connector_transforms[index]};">
                        <div class="possible-content">
                            {#each rules.filter(r=>r.connectors[reverse_connector[index]].filter(c=>connector.includes(c)).length > 0) as r}
                                <Rule rule={r} />
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            <div class="properties">
                <div style="display: flex;justify-content: space-between;border-bottom: 1px solid #555;">
                    <p style="flex:1;">Name:</p>
                    <EditableText bind:value={rules[selected].value} style="flex:1;" />
                </div>
                <div style="display: flex;justify-content: space-between;border-bottom: 1px solid #555;">
                    <p style="flex:1;">Color:</p>
                    <EditableText bind:value={rules[selected].color} style="flex:1;" />
                </div>
            </div>
        {:else}
            <h1>Please select a tile from the left</h1>
        {/if}
    </div>
</main>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        
        color-scheme: dark;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        display: flex;
        flex-wrap: wrap;

        min-height: 100vh;
        min-width: 100vw;
    }

    .browser {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-content: start;
        flex-wrap: wrap;

        gap: 1em;

        padding: 2em;

        background-color: #222222;
        border: 1px solid #2d2c2d;
        border-radius: .25rem;
    }
    .add-tile {
        width: 50px;
        height: 50px;
        font-size: 1em;
    }
    .selection {
        flex: 1;
        display: flex;
        align-content: start;
        flex-wrap: wrap;
        gap: .7em;
    }
    .available-connectors {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-content: start;
    }
    .available-connector {
        margin: 0;
        padding: 0 1em;
        padding-right: 0;
        background-color: #191919;
        border: 1px solid #2d2c2d;
        border-radius: .25rem;
        height: 2em;
        overflow: hidden;
    }
    .available-connector.shadow {
        opacity: .75;
    }
    .available-connector button {
        height: 100%;
        border: none;
        width: 1.5em;
        box-sizing: border-box;
        margin-left: .5em;
    }
    .available-connector button:hover {
        background-color: red;
    }

    .editor {
        flex: 1;
        flex-direction: column;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 2em;
    }

    .connector {
        width: 0;
        height: 0;
        --s: 120px;
        --sm: -120px;
    }
    .connector-content {
        transform: translate(-50%,-50%);
        margin: 0;
        width: 100px;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .possible {
        width: 0;
        height: 0;
        --s: 250px;
        --sm: -250px;
    }
    .possible-content {
        transform: translate(-50%,-50%);
        margin: 0;
        width: 100px;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /* gap: .2em; */
    }

    .properties {
        background-color: #222222;
        border: 1px solid #2d2c2d;
        border-radius: .25rem;

        box-sizing: border-box;
        width: 100%;
        padding: 1em;

        display: flex;
        flex-direction: column;
        gap: .5em;
    }
    .properties * {
        margin: 0;
    }

    h1 {
        font-weight: 300;
    }
</style>