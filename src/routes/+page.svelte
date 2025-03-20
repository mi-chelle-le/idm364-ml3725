<script>
    import HironoCard from "$lib/+hirono-card.svelte";
    import HeaderIMG1 from "$lib/assets/imgs/header-hirono1.png";
    import HeaderIMG2 from "$lib/assets/imgs/header-hirono2.png";
    import Filter from "$lib/+filter.svelte";
  
    const { data } = $props();
  
    const seriesList = ["The Other One", "Little Mischief", "MIME", "Reshape", "Shelter", "Le Petit Prince"];
  </script>
  
  <svelte:head>
    <title>Hirono Shop</title>
  </svelte:head>
  
  <div class="main-content">
    <div class="header-container">
      <div class="header-content">
        <img src={HeaderIMG1} />
        <div class="header-title">
          <h1>Hirono</h1>
          <h3>Figurine Collectibles</h3>
        </div>
        <img src={HeaderIMG2} />
      </div>
    </div>
  
    <div class="shop">
      <Filter />
  
      <div class="products">
        {#each seriesList as series}
          {#if data?.products?.some(p => p.Series === series)}
            <div class="product-section">
            <h2 id={series.replace(/\s+/g, "-")}>{series}</h2>
              <div class="product-container">
                {#each data.products.filter(p => p.Series === series) as product}
                  <HironoCard
                    href="/product/{product.id}"
                    image="../hirono/{product.IMG}"
                    series={product.Series}
                    title={product.Name}
                    price={product.Price}
                    showSpecialTag={product.Special}
                  />
                {/each}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .header-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 0 5rem;
    }
  
    .header-container img {
        max-width: 300px;
    }
  
    .header-title h1 {
        font-size: 8rem;
        color: black;
        text-align: center;
        line-height: 0;
        padding-top: 4rem;
    }
  
    .header-title h3 {
        font-size: 2.5rem;
        text-align: center;
        font-weight: 400;
    }
  
    .shop {
        display: flex;
        justify-content: center;
        gap: 5rem;
        margin: 4rem 0;
    }

    :global(.filter-container) {
        position: sticky;
        top: 0;
        align-self: flex-start;
    }
  
    .product-section {
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
    }
  
    .product-section h2 {
        font-size: 2rem;
    }
  
    .product-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    @media (max-width: 1290px) {
        .product-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

   @media (max-width: 1080px) {
        .header-content h1 {
            font-size: 5rem;
        }

        .header-content h3 {
            font-size: 2rem;
        }

        .header-content img {
            max-width: 200px;
        }

        .shop {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

        :global(.filter-container) {
            z-index: 50;
            padding-bottom: 1.5rem;
            border-bottom: 3px solid black;
        }
    }

   @media (max-width: 784px) {
        .product-container {
            grid-template-columns: repeat(2, 1fr);
        }

        .header-content img:first-child {
            display: none;
        }
    }

   @media (max-width: 520px) {
        .product-container {
            display: flex;
            flex-direction: column;
        }

        .header-content h1 {
            font-size: 3rem;
        }

        .header-content h3 {
            font-size: 1.5rem;
        }

        .header-content img {
            max-width: 125px;
        }
    }

  </style>