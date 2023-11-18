<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let text = '';

    const handleSubmit = () => {
        dispatch('corpus', { text });
    };
</script>

<h2>Corpus Editor</h2>
<form on:submit|preventDefault={handleSubmit}>
    <textarea bind:value={text} placeholder="Add Corpus..."/>
    <button type="submit">Submit</button>
</form>

<style>
    h2 {
        text-align: center;
    }

    textarea {
        width: 100%;
    }
</style>