<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    import ConfirmationGraphic from '$lib/assets/imgs/confirmation-graphic.png';
    
    let orderNumber = $state("");
    let orderDate = $state(new Date().toLocaleDateString());
    
    onMount(() => {
      orderNumber = localStorage.getItem('lastOrderNumber') || "#" + Math.floor(Math.random() * 10000000);
      localStorage.removeItem('lastOrderNumber');
    });
    
    function continueShopping() {
      goto('/');
    }
  </script>
  
  <div class="confirmation-page">
    <div class="confirmation-container">
      <div class="confirmation-graphic">
        <img src={ConfirmationGraphic} alt="Confirmation Graphic"/>
      </div>
      <h1>Thank You for Your Order!</h1>
      <p class="confirmation-message">Your order has been received and is being processed.</p>
      
      <div class="order-details">
        <div class="order-detail">
          <span>Order Number:</span>
          <span>{orderNumber}</span>
        </div>
        <div class="order-detail">
          <span>Order Date:</span>
          <span>{orderDate}</span>
        </div>
        <div class="order-detail">
          <span>Shipping Method:</span>
          <span>Standard Shipping (3-5 business days)</span>
        </div>
      </div>
      
      <p class="email-message">A confirmation email has been sent to your email address.</p>
      
      <button class="continue-shopping" on:click={continueShopping}>
        Continue Shopping
      </button>
    </div>
  </div>
  
  <style>
    .confirmation-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
    
    .confirmation-container {
        padding: 3rem 2rem;
        border: 3px solid black;
        border-radius: 1rem;
        background-color: white;
        box-shadow: 4px 4px 0px 0px #000;
    }
    
    .confirmation-graphic img {
        max-width: 200px;
    }
    
    h1 {
        font-family: "Jua", sans-serif;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    
    .confirmation-message {
        font-size: 1.25rem;
        margin-bottom: 2.5rem;
        color: #666;
    }
    
    .order-details {
        background-color: #f9f9f9;
        padding: 2rem;
        border-radius: 0.5rem;
        margin-bottom: 2.5rem;
        text-align: left;
    }
    
    .order-detail {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    .order-detail:last-child {
        margin-bottom: 0;
    }
    
    .email-message {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        color: #666;
    }
    
    .continue-shopping {
        background-color: #E46F20;
        font-family: "Jua", sans-serif;
        color: white;
        border: 4px solid black;
        padding: 0.75rem 1.5rem;
        font-size: 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .continue-shopping:hover {
        transform: translateY(-5px);
        box-shadow: 4px 4px 0px 0px #000;
    }
  </style>