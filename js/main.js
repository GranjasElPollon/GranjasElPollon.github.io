
window.addEventListener("scroll", function () {
    var barra = document.querySelector(".barra");
    barra.classList.toggle("abajo", window.scrollY > 0);
})

const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
const body = document.getElementById("body");[0]
let abierto = false;

const toggleMenu = () => {

    body.classList.toggle("bodydos");
    body.style.transition = ("background-color 0.5s ease-in-out");
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = " transform 0.4s ease-in-out";
}


hamburguesa.addEventListener("click", function () {
    toggleMenu();
    if (document.querySelector(".enlaces.enlaces2")) {
        abierto = true;
    } else {
        abierto = false;
    }
})

window.addEventListener("click", function (e) {
    this.console.log(e.target)
    if (abierto) {
        if (e.target !== menuHamburguesa) {
            toggleMenu();
            abierto = false;
        }
    }
})

//animacion//

window.sr = ScrollReveal();

sr.reveal('.anim-header', {
    duration:3000,
    origin:'bottom',
});

sr.reveal('.anim-letter', {
    duration:3000,
    origin:'top',
    distance:'-100px'
});

