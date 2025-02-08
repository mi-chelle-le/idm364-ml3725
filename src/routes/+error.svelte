<script>
    import ErrorGraphic from "$lib/assets/imgs/404-graphic.png";
    import ErrorIMG1 from "$lib/assets/imgs/404-img1.png";
    import ErrorIMG2 from "$lib/assets/imgs/404-img2.png";
    import ErrorFooter from "$lib/assets/imgs/404-footer.jpg";
</script>
<div class="error">
<h3>Uh oh.. it seems we are a bit lost.</h3>
<img src="{ErrorGraphic}" alt="404 Error">
<h3>Page not found</h3>
</div>
<div class="error-footer">
    <img class="error-img1" src="{ErrorIMG1}" alt="Hirono Figurine">
    <a href="/">
        <button><span>Back to Home</span></button>
    </a>
    <img class="error-img2" src="{ErrorIMG2}" alt="Hirono Figurine">
</div>

<style>
    .error {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .error img {
        width: 766px;
    }

    .error h3 {
        color: #652121;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .error-footer {
        background-image: url('../lib/assets/imgs/404-footer.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        color: white;
        height: 100%;
        padding-bottom: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error-img1, .error-img2 {
        width: 358px;
        position: absolute;
        margin-top: -16rem;
    }

    .error-img1 {
        left: 5rem;
    }

    .error-img2 {
        right: 5rem;
    }

    .error-footer button {
        display: flex;
        padding: 0px 64px;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        border: none;
        background: #E46F20;
        height: 56px;
        cursor: pointer;
        margin-top: 7rem;
    }

    button span {
        color: #F6F6F6;
        font-family: "Jua";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .error-footer a {
        text-decoration: none;
    }

</style>