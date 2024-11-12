/*1. Que simule un tablero de ajedrez */

const tablero = document.getElementById("tablero");
const tableroColor = document.getElementById("colores");
// const bomba = document.getElementById("minas");
const cambiaColores = document.getElementById("cambiaColores");
function crearTablero() {
    let html = " ";
    for (let i = 0; i < 8; i++) {
        html += '<tr>';//abrimos las filas
        for (let j = 0; j < 8; j++) {//fila
            if ((i + j) % 2 === 0) {//columna
                html += '<td class="white"></td>';
            } else {
                html += '<td class="black"></td>'

            }
        }
        html += '</tr>';
    }
    tablero.innerHTML = html;
}

crearTablero();

/*2. Que simule un tablero de ajedrez con colores alternos*/

function crearTableroConColores() {
    let html = "";

    for (let i = 0; i < 8; i++) {
        html += '<tr>';
        for (let j = 0; j < 8; j++) {
            let colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            //esa chorrada de numeros son porque necesitamos rgb, math.floor redondea hacia abajo y el toString convierte el numero en su forma hexadecimal.
            html += `<td style="background-color: ${colorAleatorio};"></td>`; // Corregido
        }
        html += '<tr>';
    }

    tableroColor.innerHTML = html;
}

crearTableroConColores();

function crearTableroConColoresAleatorio() {
    let html = "";

    for (let i = 0; i < 8; i++) {
        html += '<tr>';
        for (let j = 0; j < 8; j++) {
            let colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            //esa chorrada de numeros son porque necesitamos rgb, math.floor redondea hacia abajo y el toString convierte el numero en su forma hexadecimal.
            html += `<td style="background-color: ${colorAleatorio};"></td>`; // Corregido
        }
        html += '<tr>';
    }

    cambiaColores.innerHTML = html;
}
let intervalo;
let velocidad = 1000;

function comprobarSiHayIntervalosActivos() {
    if (intervalo) {
        clearInterval(intervalo);
    }
    intervalo = setInterval(crearTableroConColoresAleatorio, velocidad);

}

crearTableroConColoresAleatorio();
comprobarSiHayIntervalosActivos();

function aumentar() {
    if (velocidad > 100) {
        velocidad -= 100;//Aumentamos la velocidad(disminuimos tiempo)
        comprobarSiHayIntervalosActivos();//ponemos la nueva velocidad
    }
}

function disminuir() {
    velocidad += 100;//disminuimos la velocidad (aumentamos el tiempo)
    comprobarSiHayIntervalosActivos();
}