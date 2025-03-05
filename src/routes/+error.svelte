<script>
    import ErrorGraphic from "$lib/assets/imgs/404-graphic.png";
    import ErrorIMG1 from "$lib/assets/imgs/404-img1.png";
    import ErrorIMG2 from "$lib/assets/imgs/404-img2.png";
    import ErrorFooter from "$lib/assets/imgs/404-footer.jpg";
</script>
<div class="error-page">
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
  </div>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.error-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.error img {
  width: 766px;
  max-width: 100%;
}

.error h3 {
  color: #652121;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.error-footer {
  background-color: #737E6F;
  color: white;
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  border-top: 4px solid black;
}

.error-img1, .error-img2 {
  width: 450px;
  max-width: 40%;
  position: absolute;
  bottom: 10rem;
  object-fit: contain;
}

.error-img1 {
  left: 5%;
}

.error-img2 {
  right: 5%;
}

.error-footer button {
  display: flex;
  padding: 0 64px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 4px solid black;
  background: #E46F20;
  height: 56px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  font-size: 1.5rem;
}

.error-footer button:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 0px 0px #000;
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

@media (max-width: 1200px) {
  .error-img1, .error-img2 {
    width: 400px;
    max-width: 35%;
  }
}

@media (max-width: 992px) {
  .error-img1, .error-img2 {
    width: 400px;
    max-width: 30%;
    bottom: 8rem;
  }
}

@media (max-width: 768px) {
  .error-img1, .error-img2 {
    display: none;
  }
  
  .error-footer {
    padding: 8rem 1rem;
  }
}

@media (max-width: 480px) {
  .error h3 {
    font-size: 1.5rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  .error-footer button {
    padding: 0 2rem;
  }
  
  button span {
    font-size: 1.2rem;
  }
}

</style>