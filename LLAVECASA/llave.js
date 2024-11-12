
let posicion1 = null;
let posicion2 = null;
let tiempo = 60;
let intervalo;
let jugadas = 0;
function dibujar() {
    let tabla = "<table>";
    tabla += "<tr><td></td>"; // Primera celda vacía para la intersección
    for (let j = 0; j <= 20; j++) {
        tabla += `<td>${j}</td>`; // Encabezado de las columnas (0 a 19)
    }
    tabla += "</tr>";
    for (let i = 0; i <= 20; i++) {
        tabla += "<tr >";
        tabla += `<td >${i}</td>`;

        for (let j = 0; j <= 20; j++) {
            tabla += "<td class='celda' ></td>";
        }
        tabla += "</tr>"
    }
    tabla += "</table>"

    document.getElementById("tablero").innerHTML = tabla;
}
dibujar();

function start() {

    posicion1 = Math.floor(Math.random() * 20) + 1;
    posicion2 = Math.floor(Math.random() * 20) + 1;
    posicionLlave = `{${posicion1}, ${posicion2}}`;/*Al usar comillas invertidas (`) y ${... }, podemos insertar posicion1 y posicion2 dentro de la cadena para obtener un resultado como { 5, 12 }. */
    console.log(posicionLlave);
    descontar();
}

function calcularDist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function buscarLlave() {
    if (jugadas >= 10) {
        document.getElementById("mensajes").innerHTML = "Haz alcanzado el limite de jugadas(10 max))";
        return;
    }
    let posicionesEscritas = document.getElementById("posiciones").value.trim();/*Importante tomar el value sino pensara que es un int y no podre hacer split */
    /*  Aseguramos que no haya espacios extra */
    let division = posicionesEscritas.split("\n");
    if (division.length !== 5) {
        console.log("Por favor, ingresa 5 posiciones no más.");
        return;
    }
    let mensaje = "";
    for (let i = 0; i < division.length; i++) {
        let pos = division[i].split(",");//dividimos por com
        if (pos.length != 2) {
            console.log("Cada linea tiene que tener dos numeros por linea")
            return;
        }
        let n1 = parseInt(pos[0].trim(), 10);
        let n2 = parseInt(pos[1].trim(), 10);

        if (isNaN(n1) || isNaN(n2) || n1 < 1 || n1 > 20 || n2 < 1 || n2 > 20) {
            console.log(`La posición ${division[i]} no es válida. Asegúrate de que los números estén entre 1 y 20.`);
            return;
        }
        let distancia = calcularDist(n1, n2, posicion1, posicion2);
        mensaje += `Posición ingresada: (${n1}, ${n2}) - Distancia a la llave: ${distancia.toFixed(2)}<br>`;

        // console.log("Posiciones ingresadas: ");
        // console.log(numerosValidos);

        let acerto = false;

        // console.log(`Comparando '${numerosValidos[i]}' con '${posicionLlave}'`); // Depuración
        if (n1 === posicion1 && n2 === posicion2) {/*Eliminamos espacio */
            console.log("ACERTASTE")
            jugadas = 0;
            terminar();
            acerto = true;
            break;
        }

        if (!acerto) {
            console.log("mal");
        }
    }
    jugadas++;
    document.getElementById("posiciones").value = "";
    document.getElementById("mensajes").innerHTML = mensaje;
}


function descontar() {
    let escribir = document.getElementById("crono");
    intervalo = setInterval(() => {
        tiempo--;

        escribir.innerHTML = `Tiempo restante: ${tiempo} segundos`;
        if (tiempo <= 0) {
            clearInterval(intervalo);
            escribir.innerHTML = "SE ACABO EL TIEMPO"
            document.getElementById("mensajes").innerHTML = "";

        }
    }, 1000);
}

function terminar() {
    clearInterval(intervalo);

}
