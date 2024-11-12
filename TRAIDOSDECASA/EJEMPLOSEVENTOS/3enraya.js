
let turno = 0; // 0 significa "X", 1 significa "O"
let jugadorActual = "X";
const celdas = document.getElementsByClassName("celda");
// Función para colocar "X" o "O" en una celda
function ponerOpcion(event) {
    const celda = event.target;
    /*El elemento en el que ocurrió el evento: Puedes acceder al objeto que disparó el evento a través de event.target. En este caso, event.target será la celda específica en la que se hizo clic. */
    // Si la celda ya tiene una "X" o "O", no hacemos nada
    if (celda.innerHTML !== "") return;

    // Coloca el símbolo del jugador actual en la celda
    celda.innerHTML = jugadorActual;

    // Cambia el turno
    turno++;
    jugadorActual = turno % 2 === 0 ? "X" : "O";

    // Actualiza el mensaje en pantalla
    document.getElementById("status").textContent = "Turno del jugador: " + jugadorActual;



}

for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("click", ponerOpcion)
}

