const lienzo = document.getElementById("canvas");
const lienzoProvincias = document.getElementById("provincias")
let contenido;

async function leeFichero(tipofichero) {
  let resp;
  switch (tipofichero) {
    case "json":
      resp = await leeFicheroJson();
      console.log("leeFichero:" + resp);
      break;
    case "csv":
      resp = await leeFicheroCSV();
      console.log("Fichero leido" + resp)
      break;
    case "and":
      resp = await leerAndalucia();
      console.log("Fichero leido" + resp)
      break;
    case "clm":
      resp = await leerCastillaLaMancha();
      console.log("Fichero leido" + resp)
      break;

    case "cll":
      resp = await leerCastillaLeon();
      console.log("Fichero leido" + resp)
      break;
    case "md":
      resp = await leerMadrid();
      console.log("Fichero leido" + resp)
      break;
    default:
      resp = "";
      break;
  }

  return resp;
}

async function escribeContenido(tipo) {
  lienzo.innerHTML = ""
  contenido = await leeFichero(tipo);
  const lineas = contenido.split(/\r?\n/);  // Separar por saltos de línea
  console.log(lineas);  // Muestra las líneas separadas
  // lienzo.innerText = contenido;  // 

  let tabla = document.createElement("table")

  let encabezado = document.createElement("tr")

  tabla.appendChild(encabezado)

  let titulosSeparados = lineas[0].split(",")
  console.log(titulosSeparados)

  titulosSeparados.forEach(t => {
    let titulo = document.createElement("th")
    titulo.textContent = t
    encabezado.appendChild(titulo);

  });
  // console.log(lineas[1]

  for (let i = 1; i < lineas.length; i++) {
    let trDeDatos = document.createElement("tr")
    let datos = lineas[i].split(",")
    datos.forEach(e => {
      let d = document.createElement("td")
      d.addEventListener("mouseover", () => {
        console.log("llego aqui")
        mostrarCCAASeleccionada(e);
      })
      d.addEventListener("mousemove", () => {

        let colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        d.style.background = colorAleatorio;
      })
      d.addEventListener("mouseleave", () => {
        d.style.background = "";

      })

      d.textContent = e;
      trDeDatos.appendChild(d)
      console.log(e)
    })
    tabla.appendChild(trDeDatos)
  }
  lienzo.appendChild(tabla)

}

async function mostrarCCAASeleccionada(e) {
  console.log(e)
  if (e === "Andalucía") {
    let contenido = await leeFichero('and');
    crearTablasProvincias(contenido)
    // console.log("andalucia")

  }
  if (e === "Castilla-La Mancha") {
    let contenido = await leeFichero('clm');
    crearTablasProvincias(contenido)
  }

  if (e === "Castilla y León") {
    let contenido = await leeFichero('cll');
    crearTablasProvincias(contenido)
  }

  if (e === "Madrid") {
    let contenido = await leeFichero('md');
    crearTablasProvincias(contenido)
  }
  else if (e !== "Madrid" && e !== "Castilla y León" && e !== "Castilla-La Mancha" && e !== "Andalucía") {
    lienzoProvincias.innerHTML = "No hay datos"
  }
}

function crearTablasProvincias(c) {
  lienzoProvincias.innerHTML = ""
  const lineas = c.split(/\r?\n/);
  console.log(lineas);

  let tabla = document.createElement("table")

  let encabezado = document.createElement("tr")

  tabla.appendChild(encabezado)

  let titulosSeparados = lineas[0].split(",")
  console.log(titulosSeparados)

  titulosSeparados.forEach(t => {
    let titulo = document.createElement("th")
    titulo.textContent = t
    encabezado.appendChild(titulo);

  });

  for (let i = 1; i < lineas.length; i++) {
    let trDeDatos = document.createElement("tr")
    let datos = lineas[i].split(",")
    datos.forEach(e => {
      let d = document.createElement("td")
      d.addEventListener("click", () => {
        console.log("llego aqui")
        mostrarCCAASeleccionada(e);
      })
      d.textContent = e;
      trDeDatos.appendChild(d)
      console.log(e)
    })
    tabla.appendChild(trDeDatos)
  }
  lienzoProvincias.appendChild(tabla)

}