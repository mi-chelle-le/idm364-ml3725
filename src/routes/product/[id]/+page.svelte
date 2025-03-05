<script>
  import ProductIMG from "$lib/assets/imgs/hirono/cuckoo.jpg";
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation'; 
  import { page } from '$app/stores';
  import { onMount } from "svelte";

  export let data;

  $: product = data.product;
  $: id = $page.params.id;

  onMount(() => {
  console.log("Page params:", $page.params);
  console.log("Product data:", product);
});

  const dispatch = createEventDispatcher();
  
  export let quantity = 1;
  export let min = 1;
  export let max = 9;
  
  function increment() {
    if (quantity < max) {
      quantity += 1;
      dispatch('change', quantity);
    }
  }
  
  function decrement() {
    if (quantity > min) {
      quantity -= 1;
      dispatch('change', quantity);
    }
  }
  
  function handleInputChange(event) {
    let value = parseInt(event.target.value);
    
    if (isNaN(value)) {
      value = min;
    } else {
      value = Math.max(min, Math.min(max, value));
    }
    

    quantity = value;
    dispatch('change', quantity);
  }
  
  function addToBag() {
    console.log(`Adding ${quantity} item(s) to bag`);
    alert(`${quantity} item(s) added to your bag!`);
  }
  
  // Go back to previous page
  function goBack() {
    window.history.back();
  }

  // export let product;
 </script>
 <div class="product-page-main">
 <div class="product-page">
   <div class="back-button">
     <button on:click={goBack}>← Back</button>
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
           <button
             class="quantity-btn decrement"
             on:click={decrement}
             disabled={quantity <= min}
             aria-label="Decrease quantity"
           >
             <span>−</span>
           </button>
           
           <input
             type="number"
             class="quantity-input"
             bind:value={quantity}
             on:change={handleInputChange}
             min={min}
             max={max}
             aria-label="Quantity"
           />
           
           <button
             class="quantity-btn increment"
             on:click={increment}
             disabled={quantity >= max}
             aria-label="Increase quantity"
           >
             <span>+</span>
           </button>
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
   }
   
   .quantity-btn {
     display: flex;
     align-items: center;
     justify-content: center;
     width: 36px;
     height: 36px;
     background: none;
     border: none;
     cursor: pointer;
     font-size: 18px;
     color: #333;
     transition: background-color 0.2s;
   }
   
   .quantity-btn:hover:not(:disabled) {
     background-color: #E46F20;
     color: white;
   }
   
   .quantity-btn:disabled {
     color: #ccc;
     cursor: not-allowed;
   }
   
   .quantity-input {
     width: 40px;
     height: 36px;
     border: none;
     border-left: 3px solid black;
     border-right: 3px solid black;
     text-align: center;
     font-size: 14px;
     -moz-appearance: textfield; 
   }
   
   .quantity-input::-webkit-outer-spin-button,
   .quantity-input::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
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