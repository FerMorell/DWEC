// const literal = "Final del Campeonato <br> 14 noviembre";
const literal = [
    "Final del Campeonato <br> 14 noviembre",
    "Semifinales <br> 10 noviembre",
    "Cuartos de Final <br> 7 noviembre",
    "Octavos de Final <br> 3 noviembre"
];

const starcolor = "gold";
const defaultcolor = "rgb(212, 212, 208)";

const empezar = document.getElementById("start");
empezar.addEventListener("click", () => {
    document.getElementById("keycolor").style.visibility = "visible";
    empezar.textContent = "comenzar";
    document.getElementById("avisos").textContent = "";
});



document.getElementById("rojo").addEventListener("click", () => seleccionarColor("rojo"));
document.getElementById("verde").addEventListener("click", () => seleccionarColor("verde"));
document.getElementById("azul").addEventListener("click", () => seleccionarColor("azul"));;
document.getElementById("dorado").addEventListener("click", () => seleccionarColor("dorado"));;

let indice = 0;
let intervalo;

function seleccionarColor(color) {

    if (color === "dorado") {
        iniciarCarrusel();
    } else {
        document.getElementById("avisos").textContent = "Opcion no valida";
    }

}

function iniciarCarrusel() {
    document.getElementById("keycolor").style.visibility = "hidden";
    document.getElementById("avisos").textContent = "";
    document.getElementById("start").textContent = "Detener";

    document.getElementById("carrusel").style.visibility = "visible";
    intervalo = setInterval(() => {
        //1 limpiaremos el contenido y color de fondo de todos los dias
        for (let i = 1; i <= 4; i++) {
            // document.getElementById(`carrusel${i}`).style.background = color[i];
            const dia = document.getElementById(`dia${i}`);//aqui cambiamos la varibable para ir cambiando de div
            dia.innerHTML = " ";
            dia.style.backgroundColor = defaultcolor;
        }
        //una vez limpio todo monstraremos el mensaje correspondiente

        const diaActual = document.getElementById(`dia${(indice % 4) + 1}`);
        diaActual.innerHTML = literal[indice % 4];
        // mensaje[indice % 4];
        diaActual.style.backgroundColor = starcolor;
        //2 incrementamos el indice para que el siguiente dia se muestre
        indice++;//para siguiente mostrar
    }, 500);
    empezar.removeEventListener("click", iniciarCarrusel);// Elimina el evento de inicio
    empezar.addEventListener("click", detenerCarrusel); // Agrega el evento para detener el carrusel

}

function detenerCarrusel() {
    clearInterval(intervalo);//detenemos el intervalo
    document.getElementById("start").textContent = "Iniciar";
    document.getElementById("keycolor").style.visibility = "visible";
    document.getElementById("carrusel").style.visibility = "hidden";
    for (let i = 1; i < 4; i++) {
        const dia = document.getElementById(`dia${i}`);
        dia.innerHTML = "";
        dia.style.backgroundColor = defaultcolor;
    }
    empezar.removeEventListener("click", detenerCarrusel);// Elimina el evento de det
    empezar.addEventListener("click", iniciarCarrusel);// Agrega el evento de inicio
    indice = 0;//lo reinicio para empezar desde el inicio
}

