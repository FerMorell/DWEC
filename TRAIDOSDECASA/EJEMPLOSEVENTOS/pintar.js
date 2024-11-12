const color1 = document.getElementById("colorRojo");
const color2 = document.getElementById("colorAzul");
const color3 = document.getElementById("colorRosa");
const color4 = document.getElementById("colorAqua");



function pintarTabla() {
    let html = " ";
    html += '<table>';
    for (let i = 0; i < 20; i++) {
        html += '<tr>';//abrimos las filas
        for (let j = 0; j < 20; j++) {//fila

            html += '<td ></td>';



        }
        html += '</tr>';
    }
    html += '</table>'
    document.getElementById("tablas").innerHTML = html;
}
pintarTabla();
let colorElegido = "";

document.getElementById("colorRojo").onclick = function () {
    colorElegido = "red";
};

document.getElementById("colorAzul").onclick = function () {
    colorElegido = "blue";
};

document.getElementById("colorRosa").onclick = function () {
    colorElegido = "pink";
};

document.getElementById("colorAqua").onclick = function () {
    colorElegido = "aqua";
};
document.getElementById("borrar").onclick = function () {
    // document.getElementById("tablas").innerHTML = "";
    colorElegido = "white";
}
document.getElementById("tablas").addEventListener("mouseover", function (event) {
    /*Lo que estamos diciendo aquie es que verificamos si el elemento que fue clickeado
    es una celda td, el event target es el elemento que fue clickado y tag name nos da el tipo de etiqueta html*/
    if (event.target.tagName === "TD" && colorElegido) {
        event.target.style.backgroundColor = colorElegido;
    }
})