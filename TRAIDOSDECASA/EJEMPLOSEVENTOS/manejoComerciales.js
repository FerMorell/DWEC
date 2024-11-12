const CAMPOCIUDAD = 1;
const CAMPOEMPRESA = 2;

let leerComerciales = [];
let comercial = [];
const enEmpresa = document.getElementById("txtempresa");
const enCity = document.getElementById("txtciudad");
const bloquemensajes = document.getElementById("mensajes");
const bloquelistado = document.getElementById("listado");

// Genera un array donde cada elemento es una línea de la listacomerciales
function crearLineaComerciales() {
    comercial = listacomerciales.split("\n");
}
// Para cada elemento de

function crearComerciales() {
    for (let i = 0; i < comercial.length; i++) {
        comercial[i] = comercial[i].split(",");
    }
}
// Las búsquedas son del tipo "contiene" en los textos que se introducen en los campos
// de empresa y ciudad
function buscar() {
    let buscarEmpresa = enEmpresa.value.trim().toLowerCase();
    let buscarCiudad = enCity.value.trim().toLowerCase();
    let resultado = [];
    let encontrados = 0;
    if (buscarEmpresa === "" || buscarCiudad === "") {
        bloquemensajes.innerHTML = "Por favor, completa ambos campos de búsqueda (empresa y ciudad).";
        bloquelistado.innerHTML = ""; // Limpia el listado de resultados anteriores
        return; // Detiene la función si falta algún campo
    }
    for (let i = 0; i < comercial.length; i++) {
        let ciudad = comercial[i][CAMPOCIUDAD].toLowerCase();
        let empresa = comercial[i][CAMPOEMPRESA].toLowerCase();
        // let datos = comercial[i].split(" "); innecesaria 
        if (ciudad.includes(buscarCiudad) && empresa.includes(buscarEmpresa)) {
            //buscarCiudad === "" verifica si el campo de búsqueda de ciudad está vacío. 
            //Si está vacío, significa que el usuario no quiere filtrar por ciudad, 
            //y esta condición es verdadera sin importar el valor en ciudad.
            resultado[encontrados] = comercial[i];
            encontrados++;
        }
    }

    if (encontrados == 0) {
        bloquemensajes.innerHTML = "No hay resultados para la búsqueda";
        bloquelistado.innerHTML = ""; // Limpia el listado si no hay resultados

    } else {
        bloquemensajes.innerHTML = ""; // Limpia mensajes anteriores si hay resultados

        escribirComerciales(resultado);
    }

    resultado.length = encontrados;

    if (encontrados == 0) {
        bloquemensajes.innerHTML = "No hay resultados para la búsqueda";
    } else {
        escribirComerciales(resultado);
    }


}

function escribirComerciales(lista) {

    let txt = "";
    for (let i = 0; i < lista.length; i++) {
        // txt += lista[i] + "<br>";
        // txtcomercial += `<p> ${listado[i].join("...")} </p>`;
        txt += `<p>${lista[i].join(" - ")}</p>`;

    }
    // El método join de un array los une en una cadena de texto
    //con el separador que se indique (por defecto ',')
    bloquelistado.innerHTML = txt;
}
crearLineaComerciales();
crearComerciales();
escribirComerciales(comercial);
