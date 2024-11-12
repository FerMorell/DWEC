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
        tabla += "<tr>";
        tabla += `<td>${i}</td>`; // Encabezado de las filas (0 a 19)

        for (let j = 0; j <= 20; j++) {
            tabla += `<td class='celda' onclick="marcarCelda(${i}, ${j})" data-x="${i}" data-y="${j}"></td>`; // Llamamos a marcarCelda con las coordenadas
        }//data es para obtener los valores
        tabla += "</tr>";
    }
    tabla += "</table>";

    document.getElementById("tablero").innerHTML = tabla;
}
dibujar();

function start() {
    posicion1 = Math.floor(Math.random() * 20) + 1;
    posicion2 = Math.floor(Math.random() * 20) + 1;
    posicionLlave = `{${posicion1}, ${posicion2}}`; // Posición de la llave
    console.log(posicionLlave);
    descontar();
}

function calcularDist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // Calcular la distancia Euclidiana
}

function cambiarColorCelda(x, y) {
    let distancia = calcularDist(x, y, posicion1, posicion2);
    let tabla = document.getElementById("tablero").getElementsByTagName("table")[0]; // Obtener la tabla
    let fila = tabla.getElementsByTagName("tr")[x + 1]; // +1 para saltar el encabezado de las filas
    let celda = fila.getElementsByTagName("td")[y + 1]; // +1 para saltar el encabezado de las columnas

    // Cambiar el color según la distancia
    if (distancia === 0) {
        celda.innerHTML = "🔑";
        celda.style.backgroundColor = "🔑"; // Si está en la posición de la llave
    } else if (distancia <= 3) {
        celda.innerHTML = " ";
        celda.style.backgroundColor = "yellow"; // Celdas cercanas
    } else if (distancia <= 6) {
        celda.innerHTML = " ";
        celda.style.backgroundColor = "orange"; // Celdas medianamente cerca
    } else {
        celda.innerHTML = " ";
        celda.style.backgroundColor = "blue"; // Celdas lejanas
    }
}

function marcarCelda(x, y) {
    // Pintar la celda seleccionada según la distancia
    cambiarColorCelda(x, y);

    // Agregar la coordenada al textarea
    let posiciones = document.getElementById("posiciones");
    posiciones.value += `${x}, ${y}\n`; // Agregar al final del textarea

    console.log(`Celda marcada: (${x}, ${y})`);
}

function buscarLlave() {
    if (jugadas >= 10) {
        document.getElementById("mensajes").innerHTML = "Haz alcanzado el límite de jugadas (10 max)";
        return;
    }
    let posicionesEscritas = document.getElementById("posiciones").value.trim();
    let division = posicionesEscritas.split("\n");
    if (division.length !== 5) {
        console.log("Por favor, ingresa 5 posiciones no más.");
        return;
    }
    let mensaje = "";
    for (let i = 0; i < division.length; i++) {
        let pos = division[i].split(",");
        if (pos.length != 2) {
            console.log("Cada línea tiene que tener dos números por línea");
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

        let acerto = false;
        if (n1 === posicion1 && n2 === posicion2) {
            console.log("¡ACERTASTE!");
            jugadas = 0;
            terminar();
            acerto = true;
            break;
        }

        if (!acerto) {
            console.log("Intento fallido");
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
            escribir.innerHTML = "SE ACABÓ EL TIEMPO";

            // Mostrar la llave al finalizar el tiempo
            let tabla = document.getElementById("tablero").getElementsByTagName("table")[0];
            let fila = tabla.getElementsByTagName("tr")[posicion1 + 1]; // Obtener la fila de la llave
            let celda = fila.getElementsByTagName("td")[posicion2 + 1]; // Obtener la celda de la llave
            celda.style.backgroundColor = "green"; // Pintar la celda de la llave de verde
            document.getElementById("mensajes").innerHTML = `La llave estaba en: (${posicion1}, ${posicion2})`;

        }
    }, 1000);
}

function terminar() {
    clearInterval(intervalo);
}
