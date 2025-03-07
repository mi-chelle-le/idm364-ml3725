<script>
    import { onMount } from "svelte";
    import EmptyCartGraphic from "$lib/assets/imgs/empty-cart-graphic.png";
    
    let cartItems = [];
    let subtotal = 0;
    
    // Load cart items from localStorage on component mount
    onMount(() => {
      loadCartItems();
    });
    
    function loadCartItems() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cartItems = cart;
      calculateSubtotal();
    }
    
    function calculateSubtotal() {
      subtotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.product.Price.replace('$', ''));
        return total + (price * item.quantity);
      }, 0);
    }
    
    function removeItem(index) {
      cartItems = cartItems.filter((_, i) => i !== index);
      saveCart();
    }
    
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      calculateSubtotal();
    }
</script>
  
<div class="cart-page">
  <div class="cart-header">
    <h1>Your Shopping Bag</h1>
  </div>
  
  {#if cartItems.length === 0}
    <div class="empty-cart">
      <p>Your bag is empty! Add an item to proceed to checkout.</p>
      <img src={EmptyCartGraphic}>
      <a href="/"><button class="shop-now">Shop Now</button></a>
    </div>
  {:else}
    <div class="cart-content">
      <div class="cart-items">
        {#each cartItems as item, index}
          <div class="cart-item">
            <div class="item-image">
              <img src="../../hirono/{item.product.IMG}" alt={item.product.Name} />
            </div>
            <div class="item-details">
              <h3>{item.product.Name}</h3>
              <p class="series">{item.product.Series}</p>
              <p class="price">{item.product.Price}</p>
              <p class="quantity">Quantity: {item.quantity}</p>
              <p class="item-total">Total: ${(parseFloat(item.product.Price.replace('$', '')) * item.quantity).toFixed(2)}</p>
              <button class="remove-btn" on:click={() => removeItem(index)}>Remove Item</button>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="cart-summary">
        <h2>Order Summary</h2>
        <div class="summary-row total">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <a href="/"><button class="continue-shopping">Continue Shopping</button></a>
      </div>
    </div>
  {/if}
</div>
  
<style>
  .cart-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem 3rem 1rem;
  }
  
  .cart-header {
    margin-bottom: 2rem;
  }
  
  h1 {
    color: black;
    font-size: 2.5rem;
    font-family: "Jua", sans-serif;
  }
  
  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    padding: 4rem;
    border: 4px solid black;
    border-radius: 1rem;
    background-color: #f9f9f9;
    box-shadow: 4px 4px 0px 0px #000;
  }
  
  .empty-cart p {
    font-size: 1.5rem;
  }

  .empty-cart img {
    max-width: 200px;
  }
  
  .shop-now {
    background-color: #E46F20;
    font-family: "Jua", sans-serif;
    width: 400px;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 4px solid black;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .shop-now:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 0px 0px #000;
  }
  
  .cart-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
  
  .cart-items {
    border: 3px solid black;
    border-radius: 1rem;
    padding: 1.5rem;
    background-color: white;
  }
  
  .cart-item {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .cart-item:last-child {
    border-bottom: none;
  }
  
  .item-image {
    width: 120px;
    flex-shrink: 0;
  }
  
  .item-image img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    border: 2px solid black;
  }
  
  .item-details {
    flex-grow: 1;
  }
  
  .item-details h3 {
    font-size: 1.25rem;
    margin: 0 0 0.5rem 0;
  }
  
  .series {
    color: #737E6F;
    font-size: 0.9rem;
    margin: 0;
  }
  
  .price {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  
  .quantity {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  
  .item-total {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  
  .remove-btn {
    background-color: #ff3333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  
  .cart-summary {
    border: 3px solid black;
    border-radius: 1rem;
    padding: 1.5rem;
    background-color: white;
    height: fit-content;
  }
  
  .cart-summary h2 {
    font-size: 1.75rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  .total {
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  }
  
  .continue-shopping {
    background-color: #E46F20;
    font-family: "Jua", sans-serif;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 4px solid black;
    cursor: pointer;
    width: 100%;
    margin-top: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .continue-shopping:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 0px 0px #000;
  }
  
  @media (max-width: 768px) {
    .cart-content {
      grid-template-columns: 1fr;
    }
    
    .cart-item {
      flex-direction: column;
    }
    
    .item-image {
      width: 100%;
      max-width: 200px;
      margin: 0 auto;
    }
    
    .shop-now {
      width: 100%;
    }
  }
</style>