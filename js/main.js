
function PositionChange(n) {
    var count = n;
    if (count === 1) {
        document.getElementById("whiteBoxLeft").style.left = "375px";
        setTimeout(() => { document.getElementById("whiteBoxLeft").style.display = "none"; }, 2000);
        setTimeout(() => { document.getElementById("whiteBoxRight").style.display = "block"; }, 2000);
        document.getElementById("blueBox").style.left = "920px";
        document.getElementById("whiteBoxRight").style.left = "375px";
    } else if (count === 2) {

        document.getElementById("whiteBoxRight").style.left = "920px";
        document.getElementById("blueBox").style.left = "330px";
        setTimeout(() => { document.getElementById("whiteBoxRight").style.display = "none"; }, 2000);
        setTimeout(() => { document.getElementById("whiteBoxLeft").style.display = "block"; }, 2000);
        document.getElementById("whiteBoxLeft").style.left = "920px";
    }
}

//slider control
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
window.onload = function() {
    setInterval(function() {
        plusSlides(1);
    }, 3000);
}