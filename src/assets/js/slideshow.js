var slideInicial = 1;
displaySlides(slideInicial);

function setSlides(queSlide) {
    displaySlides(slideInicial += queSlide);
}

function displaySlides(queSlide) {
    var indice;
    var slides = document.getElementsByClassName("animacion-banner");
    if (queSlide > slides.length) { slideInicial = 1 }
    if (queSlide < 1) { slideInicial = slides.length }
    for (indice = 0; indice < slides.length; indice++) {
        slides[indice].style.display = "none";
    }
    slides[slideInicial - 1].style.display = "block";
}