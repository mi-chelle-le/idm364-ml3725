<script>
    import ArtistIMG from "$lib/assets/imgs/lang.png";
</script>
<div class="about">
<h1>Meet the Artist</h1>
<div class="artist">
    <img src={ArtistIMG}/>
    <div class="artist-bio">
        <div class="artist-title">
        <h3>Lang</h3>
        <p>Creator of Hirono & Yuki</p>
        </div>
        <p>Lang is a Chinese artist working in various media spanning painting, sculpture, toys and animation. His work centers around the changeable nature of the concept of “Self”. Through his character, HIRONO, Lang aims to highlight the subtle changes in life, its ups and downs, and attempts to freeze in time the elusive feelings that reveal our true character - love, joy, sadness, fear and more. </p>
    </div>
</div>
</div>

<style>
    .about h1 {
    color: #E46F20;
}

.artist {
    display: flex;
    gap: 4rem;
    margin: 4rem;
}

.artist img {
    width: 100%;  
    height: auto; 
    object-fit: contain;
}

.artist-bio {
    padding: 2rem;
}

.artist-bio h3 {
    font-size: 2rem;
    margin: 0;
}

.artist-bio p {
    font-size: 1.25rem;
}

.artist-title p {
    margin: 0;
    font-style: italic;
    font-weight: 600;
}
</style>