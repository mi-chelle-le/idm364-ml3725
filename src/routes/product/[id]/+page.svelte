<script>
  import ProductIMG from "$lib/assets/imgs/hirono/cuckoo.jpg";
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation'; 
  import { page } from '$app/state';
  import { onMount } from "svelte";
  import QuantityAdjuster from "$lib/+quantity-adjuster.svelte";

  const { data } = $props();

  let product = $derived(data.product);
  let id = $derived(page.params.id);
  let quantity = $state(1);

  onMount(() => {
    console.log("Page params:", page.params);
    console.log("Product data:", product);
  });

  const dispatch = createEventDispatcher();
  
  function addToBag() {
    if (!product) return;
    
    const orderItem = {
      id: id,
      product: product,
      quantity: quantity,
      timestamp: new Date().toISOString()
    };
    
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existingItemIndex = existingCart.findIndex(item => item.id === id);
    
    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(orderItem);
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    console.log(`Added ${quantity} item(s) of ${product.Name} to bag`);
    
    goto('/cart');
  }
</script>

<div class="product-page-main">
  <div class="product-page">
    <div class="back-button">
      <button on:click={() => history.back()}>← Back</button>
    </div>
    
    {#if product}
    <div class="product">
      <div class="product-img">
        <img src="../../hirono/{product.IMG}" alt={product.Name} />
      </div>

      <div class="product-info">
        <div class="product-details">
          <p class="series">{product.Series}</p>
          <h3 class="title">{product.Name}</h3>
          <h2 class="price">{product.Price}</h2>
          <p class="description">This collectible figurine features intricate details and premium finish, making it a perfect addition to any collection.</p>
        </div>
        
        <div class="add-to-bag-section">
          <div class="quantity-section">
            <p>Quantity</p>
            <div class="quantity-adjuster">
              <QuantityAdjuster bind:value={quantity}/>
            </div>
          </div>
          
          <button class="add-to-bag-button" on:click={addToBag}>
            Add to Bag
          </button>
        </div>
      </div>
    </div>
    {:else}
    <p>No product found</p>
    {/if}
  </div>
</div>
 
<style>
  .product-page-main {
    display: flex;
    flex-direction: column;
    min-height: 75vh;
  }

  .product-page {
    max-width: 1000px;
    margin: 0 auto 2rem auto;
    padding: 0.5rem 2rem 2rem 2rem;
  }
  
  .back-button {
    margin-bottom: 2rem;
  }
  
  .back-button button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem 0;
    color: black;
    transition: color 0.2s;
    font-family: "Jua", sans-serif;
    font-size: 1.5rem;
  }
  
  .back-button button:hover {
    color: #E46F20;
  }
  
  .product {
    display: flex;
    gap: 5rem;
    align-items: flex-start;
  }
  
  .product-img {
    flex: 1;
    max-width: 500px;
  }
  
  .product-img img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 4px solid black;
    box-shadow: 4px 4px 0px 0px #000;
  }
  
  .product-info {
    flex: 1;
  }
  
  .product-details {
    margin-bottom: 2rem;
  }
  
  .series {
    color: #737E6F;
    font-weight: 550;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .title {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  
  .price {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  
  .description {
    color: black;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .add-to-bag-section {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .quantity-section p{
    font-size: 1.25rem;
    font-weight: 550;
    margin: 0.5rem 0;
  }
  
  .quantity-adjuster {
    display: flex;
    align-items: center;
    height: 36px;
    border: 3px solid black;
    border-radius: 8px;
    overflow: hidden;
    width: fit-content;
    background-color: white;
  }
  
  .add-to-bag-button {
    background-color: #E46F20;
    font-family: "Jua", sans-serif;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 4px solid black;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
    width: 100%;
    max-width: 400px;
  }
  
  .add-to-bag-button:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 0px 0px #000;
  }
  
  @media (max-width: 768px) {
    .product {
      flex-direction: column;
      gap: 2rem;
    }
    
    .product-img,
    .product-info {
      max-width: 100%;
    }
  }
</style>