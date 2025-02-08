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
        <img src={image} alt={title} class="card-image" />
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
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
        border: 16px solid #FFF;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card-content {
        padding: 1rem;
    }

    .card-subtitle {
        font-size: 0.9rem;
        color: #666;
        margin: 0 0 0.5rem 0;
    }

    .card-title {
        font-size: 1.25rem;
        margin: 0 0 0.5rem 0;
    }

    .card-price {
        font-size: 1.1rem;
        font-weight: bold;
        color: #333;
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
        border: 3px solid #FFF;
        background: #E46F20;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
        position: absolute;
        margin-left: 9rem;
        margin-top: -1rem;
    }

    .special-tag h3 {
        font-weight: 400;
    }
</style>