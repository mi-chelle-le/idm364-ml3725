<script>
    import HironoLogo from "$lib/assets/icons/hirono-logo.svg";
    import ShoppingBag from "$lib/assets/icons/shopping-bag.svg";
    import { link } from '$app/navigation';
</script>

<header>
    <nav>
        <div class="logo">
            <a href="/" use:link>
                <img src={HironoLogo} alt="Hirono Logo"/>
            </a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="/shop" use:link>shop</a></li>
                <li><a href="/about" use:link>about</a></li>
                <li><a href="/contact" use:link>contact</a></li>
            </ul>
        </div>
        <div class="shopping-bag">
            <a href="/cart" use:link>
               <img src={ShoppingBag} alt="Shopping Bag"/>
            </a>
        </div>
    </nav>
    <div class="header-title">
        <h1>Hirono</h1>
        <h3>Figurine collectables</h3>
    </div>
</header>

<style>
    header {
        background-image: url('./assets/imgs/home-header.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        color: white;
        height: 100%;
        padding-bottom: 10rem;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1.5rem;
    }

    .menu ul {
        display: flex;
        justify-content: center;
        gap: 4rem;
        align-items: center;
        padding-inline-start: 0;
    }

    .menu li {
        font-family: "Jua", sans-serif;
        list-style: none;
        font-size: 2rem;
        padding: 0;
    }

    .menu a {
        color: white;
        text-decoration: none;
    }

    .logo, .shopping-bag {
        width: 5rem;
        align-items: center;
    }

    .shopping-bag {
        display: flex;
        justify-content: right;
    }

    .logo img {
        width: 7rem;
    }

    .header-title {
        width: 100%;
    }

    .header-title h1 {
        font-size: 8rem;
        text-align: center;
        line-height: 0;
        padding-top: 4rem;
        text-shadow: 8px 8px 0px #000;
    }

    .header-title h3 {
        font-size: 2.5rem;
        text-align: center;
        text-shadow: 4px 4px 0px #000;
        font-weight: 400;
    }
</style>