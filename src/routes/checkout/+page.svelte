<script>
    import { onMount } from "svelte";
    import '@fortawesome/fontawesome-free/css/all.min.css'
    
    let cartItems = $state([]);
    let subtotal = $state(0);
    let orderNumber = $state("");
    
    let billingInfo = $state({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
    });
    
    let paymentInfo = $state({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });
    
    let isFormValid = $derived(
        billingInfo.name && 
        billingInfo.email && 
        billingInfo.address && 
        billingInfo.zipCode && 
        paymentInfo.cardNumber && 
        paymentInfo.expiryDate && 
        paymentInfo.cvv
    );
    
    onMount(() => {
        loadCartItems();
        orderNumber = "ORD-" + Math.floor(Math.random() * 10000000);
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
    
    function placeOrder() {
      
      localStorage.setItem('lastOrderNumber', orderNumber);
      localStorage.removeItem('cart');
      
      window.location.href = '/confirmation';
    }

    function formatCardNumber(e) {
      const input = e.target;
      let value = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      
      if (value.length > 16) value = value.substr(0, 16);
      
      const parts = [];
      for (let i = 0; i < value.length; i += 4) {
        parts.push(value.substr(i, 4));
      }
      
      paymentInfo.cardNumber = parts.join(' ');
    }
  </script>
  
  <div class="checkout-page">
    <h1>Checkout</h1>
    
    <div class="checkout-container">
      <div class="checkout-form">
        <section class="billing-section">
          <h2><i class="fa-regular fa-address-card"></i>  Billing Details</h2>
          
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" bind:value={billingInfo.name} required>
            </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value={billingInfo.email} required>
          </div>
          
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={billingInfo.address} required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" bind:value={billingInfo.city} required>
            </div>
            
            <div class="form-group">
              <label for="state">State</label>
              <input type="text" id="state" bind:value={billingInfo.state} required>
            </div>
            
            <div class="form-group">
              <label for="zipCode">ZIP Code</label>
              <input type="text" id="zipCode" bind:value={billingInfo.zipCode} required>
            </div>
          </div>
        </section>
        
        <section class="payment-section">
          <h2><i class="fa-regular fa-credit-card"></i>  Payment Information</h2>
          
          <div class="form-group">
            <label for="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" bind:value={paymentInfo.cardNumber} 
                   on:input={formatCardNumber} placeholder="0000 0000 0000 0000" maxlength="19" required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="expiryDate">Expiration Date</label>
              <input type="text" id="expiryDate" bind:value={paymentInfo.expiryDate} 
                     placeholder="MM/YY" maxlength="5" required>
            </div>
            
            <div class="form-group">
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" bind:value={paymentInfo.cvv} 
                     maxlength="4" required>
            </div>
          </div>
        </section>
        
        <button class="place-order-btn" on:click={placeOrder} disabled={!isFormValid}>
          Place Order
        </button>
      </div>
      
      <div class="order-summary">
        <h2>Order Summary</h2>
        
        <div class="cart-items-mini">
          {#each cartItems as item}
            <div class="cart-item-mini">
              <div class="item-img-mini">
                <img src="../../hirono/{item.product.IMG}" alt={item.product.Name} />
              </div>
              <div class="item-info-mini">
                <p class="item-name">{item.product.Name}</p>
                <p class="item-price">{item.product.Price} × {item.quantity}</p>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="summary-totals">
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
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .checkout-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    h1 {
      font-family: "Jua", sans-serif;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    
    .checkout-container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }
    
    .checkout-form {
      padding: 2rem;
      border: 3px solid black;
      border-radius: 1rem;
      background-color: white;
    }
    
    section {
      margin-bottom: 2rem;
    }
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0 3rem;
    }
    
    .form-group {
      margin-bottom: 1.25rem;
      margin-right: 2rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid black;
      border-radius: 0.5rem;
      font-size: 1rem;
    }
    
    .place-order-btn {
      background-color: #E46F20;
      font-family: "Jua", sans-serif;
      color: white;
      border: 4px solid black;
      padding: 0.75rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 1rem;
      cursor: pointer;
      width: 100%;
      margin-top: 1rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .place-order-btn:hover:not(:disabled) {
      transform: translateY(-5px);
      box-shadow: 4px 4px 0px 0px #000;
    }
    
    .place-order-btn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    
    .order-summary {
      padding: 1.5rem;
      border: 3px solid black;
      border-radius: 1rem;
      background-color: white;
      height: fit-content;
    }
    
    .cart-items-mini {
      margin-bottom: 1.5rem;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .cart-item-mini {
      display: flex;
      gap: 1rem;
      padding: 1.5rem 0;
      border-bottom: 2px solid #e0e0e0;
    }
    
    .cart-item-mini:last-child {
      border-bottom: none;
    }
    
    .item-img-mini {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }
    
    .item-img-mini img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.25rem;
      border: 2px solid black;
    }
    
    .item-name {
      font-weight: 600;
      margin: 0;
      font-size: 1.1rem;
    }
    
    .item-price {
      color: #666;
      margin: 0.25rem 0 0 0;
      font-size: 1rem;
    }
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }
    
    .total {
      font-weight: bold;
      font-size: 1.2rem;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e0e0e0;
    }
    
    @media (max-width: 768px) {
      .checkout-container {
        grid-template-columns: 1fr;
      }
      
      .checkout-form {
        order: 2;
      }
      
      .order-summary {
        order: 1;
      }
    }
  </style>