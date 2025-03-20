<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    import EmptyCartGraphic from "$lib/assets/imgs/empty-cart-graphic.png";
    import '@fortawesome/fontawesome-free/css/all.min.css'

    let cartItems = $state([]);
    let subtotal = $state(0);
    
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
    
    function updateQuantity(index, newQuantity) {
      if (newQuantity > 0 && newQuantity <= 9) {
        cartItems[index].quantity = newQuantity;
        saveCart();
      }
    }
    
    function removeItem(index) {
      cartItems = cartItems.filter((_, i) => i !== index);
      saveCart();
    }
    
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      calculateSubtotal();

        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
    
    function clearCart() {
      cartItems = [];
      localStorage.removeItem('cart');
      subtotal = 0;

        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
    
    function checkout() {
      goto('/checkout');
    }
    
    let itemCount = $derived(cartItems.length);
    let isEmpty = $derived(itemCount === 0);
</script>
  
<div class="cart-page">
  <div class="cart-header">
    <h1>Your Shopping Bag</h1>
  </div>
  
  {#if isEmpty}
    <div class="empty-cart">
      <p>Your bag is empty! Add an item to proceed to checkout.</p>
      <img src={EmptyCartGraphic} alt="Empty cart">
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
            </div>
            <div class="item-quantity">
              <button 
                class="quantity-btn" 
                on:click={() => updateQuantity(index, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >-</button>
              <span>{item.quantity}</span>
              <button 
                class="quantity-btn" 
                on:click={() => updateQuantity(index, item.quantity + 1)}
                disabled={item.quantity >= 9}
              >+</button>
            </div>
            
            <div class="item-total">
              ${(parseFloat(item.product.Price.replace('$', '')) * item.quantity).toFixed(2)}
            </div>
            <button class="remove-btn" on:click={() => removeItem(index)}><i class="fa-regular fa-trash-can"></i></button>
          </div>
        {/each}
      </div>
      
      <div class="cart-summary">
        <h2>Order Summary</h2>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax</span>
            <span>${(subtotal * 0.06).toFixed(2)}</span>
          </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>${(subtotal + (subtotal * 0.06)).toFixed(2)}</span>
          </div>
        <button class="checkout-btn" on:click={checkout}>Proceed to Checkout</button>
        <button class="clear-cart-btn" on:click={clearCart}>Clear Cart</button>
      </div>
    </div>
  {/if}
</div>
  
<style>
  .cart-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem 3rem 2rem;
  }
  
  .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
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
      border: 4px solid black;
      border-radius: 1rem;
      padding: 1.5rem;
      background-color: white;
  }
  
  .cart-item {
      display: grid;
      grid-template-columns: 120px 1.5fr 1fr 1fr auto;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 0;
      border-bottom: 2px solid #e0e0e0;
  }
  
  .cart-item:last-child {
      border-bottom: none;
  }
  
  .item-image img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      border: 3px solid black;
  }

  .item-details {
      padding-left: 1rem;
  }
  
  .item-details h3 {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
  }
  
  .series {
      color: #737E6F;
      font-size: 1rem;
      margin: 0;
  }
  
  .item-quantity {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
  }
  
  .quantity-btn {
      background-color: #E46F20;
      color: white;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
  }
  
  .quantity-btn:disabled {
      background-color: #e0e0e0;
      color: #a0a0a0;
      cursor: not-allowed;
  }
  
  .item-total {
      font-weight: bold;
      font-size: 1.25rem;
  }
  
  .remove-btn {
      background: none;
      border: none;
      color: #ff3333;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.25rem;
  }
  
  .cart-summary {
      border: 4px solid black;
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
      border-top: 2px solid #e0e0e0;
  }
  
  .checkout-btn {
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
  
  .checkout-btn:hover {
      transform: translateY(-5px);
      box-shadow: 4px 4px 0px 0px #000;
  }
  
  .clear-cart-btn {
      background: none;
      border: none;
      color: #666;
      text-decoration: underline;
      cursor: pointer;
      width: 100%;
      margin-top: 1rem;
      font-size: 0.9rem;
  }
  
  @media (max-width: 926px) {
    .cart-content {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
      .cart-item {
          grid-template-columns: 100px 1fr 1fr;
          gap: 0 1rem;
      }

      .item-details {
        padding-left: 0.5rem;
      }

      .item-total {
          grid-column: 3;
          grid-row: 1;
      }

      .item-quantity {
          grid-column: 2;
          grid-row: 2;
          padding-left: 0.5rem;
      }

      .remove-btn {
          grid-column: 3;
          grid-row: 2;
          justify-self: start;
    }
  }
</style>