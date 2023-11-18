<script>
    import CorpusEditor from "$lib/components/corpus/CorpusEditor.svelte";
    const handleCorpus = (event) => {
        console.log('event text', event.detail.text);
    };
</script>

<main>
    <h1>Welcome to Ceremony</h1>
    <p/>
    <CorpusEditor on:corpus={handleCorpus} />
</main>

<style>
    h1 {
        text-align: center;
    }
    main {
        margin: 10px 15px;
    }
</style>