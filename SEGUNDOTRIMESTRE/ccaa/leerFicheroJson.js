/*
Esquema inicial
  fetch("datos_ejemplos/temperaturas.json")
    .then((response) => response.text())
    .then((resultText) => console.log(resultText))
    .catch((err) => console.log(err));
*/

function obtenerListaObjetos(respuesta) {
  let r = respuesta.text();
  // console.log("obtenerListaObjetos:" + r);
  return r;
}

function obtenerTextoObjetos(texto) {
  // console.log("obtenerTextoObjetos:" + texto);
  return texto;
}

// async function leeFicheroJson() {
//   return await fetch("datos_ejemplos/ccaa/csv/ccaa.csv")
//     .then(obtenerListaObjetos)
//     .then(obtenerTextoObjetos)
//     .catch((err) => console.log(err));
// }

async function leeFicheroCSV() {
  return await fetch("csv/ccaa.csv")
    .then(obtenerListaObjetos)
    .then(obtenerTextoObjetos)
    .catch((err) => console.log(err));

}

async function leerAndalucia() {
  return await fetch("csv/andalucia.csv")
    .then(obtenerListaObjetos)
    .then(obtenerTextoObjetos)
    .catch((err) => console.log(err));

}


async function leerCastillaLaMancha() {
  return await fetch("csv/castillalamancha.csv")
    .then(obtenerListaObjetos)
    .then(obtenerTextoObjetos)
    .catch((err) => console.log(err));
}


async function leerCastillaLeon() {
  return await fetch("csv/castillaleon.csv")
    .then(obtenerListaObjetos)
    .then(obtenerTextoObjetos)
    .catch((err) => console.log(err));
}

async function leerMadrid() {
  return await fetch("csv/madrid.csv")
    .then(obtenerListaObjetos)
    .then(obtenerTextoObjetos)
    .catch((err) => console.log(err));
}