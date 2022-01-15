
window.addEventListener("scroll", function () {
    var barra = document.querySelector(".barra");
    barra.classList.toggle("abajo", window.scrollY > 0);
})

const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;

const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.4s ease-in-out";
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



