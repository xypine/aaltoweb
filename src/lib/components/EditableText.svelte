<script lang="ts">
    import { onMount } from "svelte";
    export let value: string;
    export let buttons = false;
    export let style = "";

    let editing = false;

    function setEditing(val: boolean) {
        editing = val;
    }
    function handleClick(e: (MouseEvent&{ currentTarget: EventTarget&HTMLButtonElement; })|(MouseEvent&{ currentTarget: EventTarget&HTMLParagraphElement; }), val: boolean) {
        setEditing(val);e.preventDefault();e.stopPropagation();
    }

    onMount(()=>{
        window.addEventListener("click", ()=>{
            editing = false;
        });
    });
</script>

<main {style}>
    {#if editing}
        <input on:click={(e)=>{e.preventDefault();e.stopPropagation();}} bind:value>
        {#if buttons}
            <button on:click={(e)=>{handleClick(e, false);}}>done</button>
        {/if}
    {:else}
        <p on:click={(e)=>{handleClick(e, true);}}>{value}</p>
        {#if buttons}
            <button on:click={(e)=>{handleClick(e, true);}}>edit</button>
        {/if}
    {/if}
</main>

<style>
    main {
        display: flex;
    }
    p {
        flex: 1;
        margin: 0;
        cursor: text;
    }

    input {
        flex: 1;
    }
</style>