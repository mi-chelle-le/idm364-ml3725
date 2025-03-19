<script>
    import HironoLogo from "$lib/assets/icons/hirono-logo.svg";
    import ShoppingBag from "$lib/assets/icons/shopping-bag.svg";
    import { goto } from '$app/navigation';
    import '../styles.css';
</script>

<header>
    <nav>
        <div class="logo">
            <a href="/">
                <img src={HironoLogo} alt="Hirono Logo"/>
            </a>
        </div>
        <div class="shopping-bag">
            <a href="/cart">
               <img src={ShoppingBag} alt="Shopping Bag"/>
            </a>
        </div>
    </nav>
</header>

<style>
    header {
        background-color: #737E6F;
        margin: 2rem;
        border-radius: 2rem;
        border: 0.25rem solid black;
        box-shadow: 4px 4px 0px 0px #000;
        position: sticky; 
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
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
        cursor: pointer;
    }

    .shopping-bag {
        display: flex;
        justify-content: right;
    }

    .logo img {
        width: 7rem;
    }
</style>