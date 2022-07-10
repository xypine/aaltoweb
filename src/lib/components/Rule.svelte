<script lang="ts">
    export let rule: {
        value: string;
        color: string;
        connectors: string[][];
    };
    export let style = "";
    export let selectable: boolean = false;
    export let selected = false;
    export let partially_selected = false;
</script>

<main style="--bg:{rule.color};{style}" class:selectable={selectable} class:selected={selected} class:partially-selected={partially_selected} title={rule.value}>

</main>

<style>
    main {
        background: var(--bg);
        background-size: cover;
        image-rendering: pixelated;

        min-width: 50px;
        min-height: 50px;

        transition: all 250ms;
    }

    main.selectable {
        cursor: pointer;
        outline: 5px solid transparent;
    }
    main.selectable:hover, main.selectable.selected {
        transform: scale(1.2);
        outline: 5px solid gray;
    }
    main.selectable:active {
        transform: scale(0.9);
    }
    main.selectable.partially-selected {
        outline: 5px solid #555;
    }
</style>