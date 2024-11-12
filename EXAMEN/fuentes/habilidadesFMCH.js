// Fernanda Antonella Morelli Chaparro

const CAMPOCIUDAD = 1;
const CAMPOEMPRESA = 2;


let escritor = [];
const autorNombre = document.getElementById("nombre");
const idEscritor = document.getElementById("nescritor");

let nombreEscritor;
let id = 1;/*MAXIMO 50*/
function crearLineasAutores() {
    escritor = listaHabilidades.split("|");
    idEscritor.innerHTML = id;
    autorNombre.innerText = escritor[0];
    let pos = escritor[1].split("...");//dividimos por coma
    let skilla = pos[0].split(" ");
    let skillb = pos[1].split(" ");
    let skillc = pos[2].split(" ");
    document.getElementById("skill1").innerHTML = skilla[0];
    document.getElementById("skill2").innerHTML = skillb[0];
    document.getElementById("skill3").innerHTML = skillc[0];

    document.getElementById("descripcion").innerHTML = escritor[2];

}

crearLineasAutores();
function ponerEnBlanco() {
    idEscritor.innerHTML = "";
    autorNombre.innerText = "";
    document.getElementById("skill1").innerHTML = "";
    document.getElementById("skill2").innerHTML = "";
    document.getElementById("skill3").innerHTML = "";
    document.getElementById("descripcion").innerHTML = " ";
    document.getElementById("avisos").innerHTML = "";
}



function mostrarPrimero() {
    //El primero supondremos que es el 1
    id = 1;
    escritor = listaHabilidades.split("|");
    idEscritor.innerHTML = id;
    autorNombre.innerText = escritor[0];
    let pos = escritor[1].split("...");//dividimos por coma
    let skilla = pos[0].split(" ");
    let skillb = pos[1].split(" ");
    let skillc = pos[2].split(" ");
    document.getElementById("skill1").innerHTML = skilla[0];
    document.getElementById("skill2").innerHTML = skillb[0];
    document.getElementById("skill3").innerHTML = skillc[0];
    document.getElementById("descripcion").innerHTML = escritor[2];
}
function mostrarUltimo() {
    lineas = listaHabilidades.split("\n");
    if (id >= 50) {
        document.getElementById("avisos").innerHTML = "Estás al final de la lista"
        return;
    }
    for (let i = 0; i < lineas.length; i++) {
        if (i == 50) {
            let autor = lineas[i].split("|");
            autorNombre.innerText = autor[0];
            let pos = autor[1].split("...");
            let skilla = pos[0].split(" ");
            let skillb = pos[1].split(" ");
            let skillc = pos[2].split(" ");
            document.getElementById("skill1").innerHTML = skilla[0];
            document.getElementById("skill2").innerHTML = skillb[0];
            document.getElementById("skill3").innerHTML = skillc[0];
            document.getElementById("descripcion").innerHTML = autor[2];
        }
    }
}
function siguiente() {
    lineas = listaHabilidades.split("\n");
    idEscritor.innerHTML = id + 1;

    if (id > 50) {
        document.getElementById("avisos").innerHTML = "Estás al final de la lista"
        return;
    }
    for (let i = 0; i < lineas.length; i++) {
        if (id == i) {
            let autor = lineas[i].split("|");
            autorNombre.innerText = autor[0];
            let pos = autor[1].split("..."); // dividimos por coma
            let skilla = pos[0].split(" ");
            let skillb = pos[1].split(" ");
            let skillc = pos[2].split(" ");
            document.getElementById("skill1").innerHTML = skilla[0];
            document.getElementById("skill2").innerHTML = skillb[0];
            document.getElementById("skill3").innerHTML = skillc[0];
            document.getElementById("descripcion").innerHTML = autor[2];
        }

    }
    id++;
}


function anterior() {
    let lineas = listaHabilidades.split("\n");
    idEscritor.innerHTML = id;

    // Verificar si estamos al inicio de la lista
    if (id <= 0) {
        document.getElementById("avisos").innerHTML = "Estás al inicio de la lista";
        return;
    }

    // Recorremos la lista de atrás hacia adelante
    for (let i = id - 1; i >= 0; i--) {  // Cambié la condición y el valor de i
        if (id == i + 1) {  // Verifica si estamos en la posición actual de id
            let autor = lineas[i].split("|");
            autorNombre.innerText = autor[0];  // Nombre del autor
            let pos = autor[1].split("...");  // Separa las habilidades
            let skilla = pos[0];
            let skillb = pos[1];
            let skillc = pos[2];
            document.getElementById("skill1").innerHTML = skilla;
            document.getElementById("skill2").innerHTML = skillb;
            document.getElementById("skill3").innerHTML = skillc;
            document.getElementById("descripcion").innerHTML = autor[2];  // Descripción
        }
    }

    // Decrementar id para navegar a la siguiente autor
    id--;
}

let intervalo;
let indice = 0;
function auto() {

    lineas = listaHabilidades.split("\n");
    document.getElementById("auto").innerHTML = "Parar";
    intervalo = setInterval(() => {
        for (let i = 0; i < lineas.length; i++) {
            let autor = lineas[i].split("|");
            autorNombre.innerText = autor[0];
            let pos = autor[1].split("..."); // dividimos por coma
            let skilla = pos[0];
            let skillb = pos[1];
            let skillc = pos[2];
            document.getElementById("skill1").innerHTML = skilla;
            document.getElementById("skill2").innerHTML = skillb;
            document.getElementById("skill3").innerHTML = skillc;
            document.getElementById("descripcion").innerHTML = autor[2];

        }
    }, 500);
    document.getElementById("auto").removeEventListener("click", auto);
    document.getElementById("auto").addEventListener("click", detenerCarrusel);
}
const palabra = document.getElementById("findskill");

function detenerCarrusel() {
    clearInterval(intervalo);
    document.getElementById("auto").innerHTML = "Automático";

}

document.getElementById("first").addEventListener("click", mostrarPrimero);
document.getElementById("last").addEventListener("click", mostrarUltimo);
document.getElementById("reset").addEventListener("click", ponerEnBlanco);
document.getElementById("next").addEventListener("click", siguiente);
document.getElementById("prev").addEventListener("click", anterior);
document.getElementById("auto").addEventListener("click", auto)
// ==============================

// function buscar() {
//     let palabrita = palabra.value;



// }
// document.getElementById("gofind").addEventListener("click", buscar);