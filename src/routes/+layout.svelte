<script lang="js">
    import '../styles.css';
    import { page } from '$app/stores';
    import Header from '$lib/+header.svelte';
    import HeaderSmall from '$lib/+header-small.svelte';
    import Footer from "$lib/+footer.svelte";
</script>

{#if !$page.error}
    {#if $page.url.pathname === '/'}
        <Header />
    {:else}
        <HeaderSmall />
    {/if}
{/if}

<slot />

{#if !$page.error}
    <Footer />
{/if}
