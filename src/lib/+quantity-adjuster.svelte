<script>
    // Export the quantity as a prop to allow binding from parent
    export let value = 1;
    
    function increment() {
      if (value < 9) {
        value += 1;
      }
    }
    
    function decrement() {
      if (value > 1) {
        value -= 1;
      }
    }
  </script>
  
  <div class="quantity-adjuster">
    <button class="minus" on:click={decrement} disabled={value <= 1}>-</button>
    <span class="quantity">{value}</span>
    <button class="plus" on:click={increment} disabled={value >= 9}>+</button>
  </div>
  
  <style>
    .quantity-adjuster {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    button {
      padding: 1rem;
      font-size: 18px;
      border: none;
      cursor: pointer;
      color: white;
      background-color: #E46F20;
      transition: background-color 0.2s;
    }
    
    button:disabled {
      background-color: #e0e0e0;
      color: grey;
      cursor: not-allowed;
    }
    
    .quantity {
      font-size: 18px;
      min-width: 30px;
      text-align: center;
    }
    
    .plus {
      border-left: 3px solid black;
    }
    
    .minus {
      border-right: 3px solid black;
    }
    
    button:hover:not(:disabled) {
      background-color: #E46F20;
      color: white;
    }
  </style>