<script>
    import HironoCard from "$lib/+hirono-card.svelte";
    import Product1 from "$lib/assets/imgs/hirono/vagrancy.jpg"
    import Product2 from "$lib/assets/imgs/hirono/cuckoo.jpg"
    import Product3 from "$lib/assets/imgs/hirono/theghost.jpg"
    import Product4 from "$lib/assets/imgs/hirono/nowheresafe.jpg"
</script>
<svelte:head>
    <title>Hirono Shop</title>
</svelte:head>
<div class="main-content">
<div class="product-container">
    <HironoCard
        image="{Product1}"
        series="The Other One Series"
        title="Vagrancy"
        price="$16.99"
    />
    <HironoCard
        image="{Product2}"
        series="The Other One Series"
        title="Cuckoo"
        price="$16.99"
    />
    <HironoCard
        image="{Product3}"
        series="The Other One Series"
        title="The Ghost"
        price="$16.99"
    />
    <HironoCard
        image="{Product4}"
        series="The Other One Series"
        title="Nowhere Safe"
        price="$16.99"
    />
    <HironoCard
    image="{Product1}"
    series="The Other One Series"
    title="Vagrancy"
    price="$16.99"
/>
<HironoCard
    image="{Product2}"
    series="The Other One Series"
    title="Cuckoo"
    price="$16.99"
/>
<HironoCard
    image="{Product3}"
    series="The Other One Series"
    title="The Ghost"
    price="$16.99"
/>
<HironoCard
    image="{Product4}"
    series="The Other One Series"
    title="Nowhere Safe"
    price="$16.99"
/>
</div>
</div>