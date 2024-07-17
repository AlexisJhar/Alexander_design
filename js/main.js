let ubicacionPrincipal = window.pageYOffset; // 0

AOS.init();

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
});

// Menu

const enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
const hamburguerIcon = document.querySelectorAll(".hamburguer")[0];
let semaforo = true;

hamburguerIcon.addEventListener("click", function() {
    if (semaforo) {
        hamburguerIcon.style.color = "#fff";
    } else {
        hamburguerIcon.style.color = "#000";
    }
    semaforo = !semaforo;
    enlacesHeader.classList.toggle("menudos");
});
