<script>
    import TheOtherOne from "$lib/assets/imgs/box-theotherone.png";
    import LittleMischief from "$lib/assets/imgs/box-littlemischief.png";
    import MIME from "$lib/assets/imgs/box-mime.png";
    import Reshape from "$lib/assets/imgs/box-reshape.png";
    import LePetitPrince from "$lib/assets/imgs/box-lepetitprince.png";
</script>
<div class="filter-container">
<div class="filter">
    <h3>Browse by series</h3>
    <div class="filter-buttons">
        <a href=#The-Other-One>
        <button>
            <img src={TheOtherOne}/>
            The Other One
        </button>
        </a>
        <a href=#Little-Mischief>
        <button>
            <img src={LittleMischief}/>
            Little Mischief
        </button>
        </a>
        <a href=#MIME>
        <button>
            <img src={MIME} />
            MIME
        </button>
        </a>
        <a href=#Reshape>
        <button>
            <img src={Reshape} />
            Reshape
        </button>
        </a>
        <a href=#Le-Petit-Prince>
        <button >
            <img src={LePetitPrince} />
            Le Petit Prince
        </button>
        </a>
    </div>
</div>
</div>


<style>

    .filter-container {
        background-color: #FFF8F2;
    }

    .filter {
        max-width: 200px;
    }

    .filter h3 {
        color: #737E6F;
        font-size: 1.5rem;
        font-style: normal;
        line-height: normal;
    }

    .filter-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        border-radius: 1rem;
        background: #FFF;
        padding: 0.5rem 1rem;
        border: 3px solid black;
        font-family: "Jua", sans-serif;
        font-size: 1rem;
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
        height: 3.5rem;
        color: black;
    }

    button:hover {
        transform: translateY(-5px);
        box-shadow: 4px 4px 0px 0px #000;

    }

    a {
        text-decoration: none;
    }

    button img {
        width: 48px;
        height: auto;
    }

    @media (max-width: 1080px) {
    .filter-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .filter {
        max-width: 80%;
        text-align:center;
    }

    .filter-buttons {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
}

</style>