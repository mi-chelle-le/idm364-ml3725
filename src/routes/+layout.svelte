<script lang="js">
    import '../styles.css';
    import { page } from '$app/stores';
    import Header from '$lib/+header.svelte';
    import Footer from "$lib/+footer.svelte";
  </script>
  
  <div class="site-wrapper">
    {#if !$page.error}
      <Header />
    {/if}
    
    <main>
      <slot />
    </main>
    
    {#if !$page.error}
      <Footer />
    {/if}
  </div>
  
  <style>
    :global(body, html) {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    
    .site-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    main {
      flex: 1;
    }
  </style>