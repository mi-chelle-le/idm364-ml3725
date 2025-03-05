<script lang="js">
    import '../styles.css';
    import { page } from '$app/stores';
    import Header from '$lib/+header.svelte';
    import Footer from "$lib/+footer.svelte";
</script>

{#if !$page.error}
    <Header />
{/if}

<slot />

{#if !$page.error}
    <Footer />
{/if}
