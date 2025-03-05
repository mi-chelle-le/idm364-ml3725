<script>
    export let image;
    export let series;
    export let title;
    export let price;
    export let showSpecialTag = false;
    export let href = "#"; // Default to "#" if no URL is provided
</script>

<a href={href} class="card-link">
    <div class="card">
        {#if showSpecialTag}
            <div class="special-tag">
                <h3>SPECIAL</h3>
            </div>
        {/if}
        <div class="card-img-container">
        <img src={image} alt={title} class="card-image" />
        </div>
        <div class="card-content">
            <p class="card-subtitle">{series}</p>
            <h4 class="card-title">{title}</h4>
            <p class="card-price">{price}</p>
        </div>
    </div>
</a>

<style>
    .card-link {
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }

    .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        width: 216px;
        border-radius: 1rem;
        border: 4px solid black;
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
        background-color: white;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 4px 4px 0px 0px #000;
    }

    .card-img-container {
        border-bottom: 4px solid black;
    }

    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 1rem 1rem 0 0;
    }

    .card-content {
        padding: 1rem;
    }

    .card-subtitle {
        font-size: 1rem;
        color: #737E6F;
        font-weight: 500;
        margin: 0 0 0.5rem 0;
    }

    .card-title {
        font-size: 1.5rem;
        margin: 0 0 0.5rem 0;
        font-family: "Jua", sans-serif;
    }

    .card-price {
        font-size: 1.25rem;
        font-weight: bold;
        color: black;
        font-family: "Jua", sans-serif;
        margin: 0;
    }

    .special-tag {
        display: inline-flex;
        transform: rotate(15.854deg);
        padding: 6px 16px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 32px;
        color: white;
        border-radius: 24px;
        border: 3px solid black;
        background: #E46F20;
        box-shadow: 2px 4px 0px 0px #000;
        position: absolute;
        margin-left: 8rem;
        margin-top: -1rem;
    }

    .special-tag h3 {
        font-weight: 400;
    }

    @media (max-width: 520px) {
     .card {
        width: 280px;
     }

     .special-tag {
        margin-left: 12rem;
     }
    }
</style>