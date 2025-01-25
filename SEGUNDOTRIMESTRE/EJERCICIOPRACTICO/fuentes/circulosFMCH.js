// Ciudades a añadir como opciones al input select
const cities = ["Granada", "Valencia", "Madrid", "Toledo"];
let datosCargados = [];
let datos;
let select = document.getElementById("scities");
let informacion = document.getElementById("citystats");

const nombres = document.getElementById("cityname");
const grafica = document.getElementById("grafica")
function cargarDatos() {
  // for (let i = 0; i < circle_data.length; i++) {
  datosCargados = JSON.parse(circle_data)
  // }
  console.log(datosCargados)
}

cargarDatos();


function agregarAlSelect() {
  let todas = document.createElement("option")
  todas.text = "Todas las opciones";
  todas.value = "all";
  // esto lo añado para que tenga el valor
  select.appendChild(todas)
  for (let i = 0; i < cities.length; i++) {
    let opciones = document.createElement("option")
    opciones.text = cities[i];
    opciones.value = cities[i];
    select.appendChild(opciones)
  }

}

agregarAlSelect();
select.addEventListener("change", function () {
  console.log(select.value)
  mostrarSeleccionada(select.value)
});

function mostrarSeleccionada(eleccion) {
  const circulos = document.querySelectorAll(".circle")

  circulos.forEach((c) => {
    const ciudad = c.label;
    if (ciudad === eleccion || eleccion === "all") {
      //  con esta condicion quiero decir si la ciudad que elegi existe la muestra sino,
      // si la eleccion es all los muestra todo
      c.style.display = "block";
      nombres.innerHTML = ""
      informacion.innerHTML = ""
    } else {
      c.style.display = "none";
      // oculto los circculos si no coinciden con la ciudad o con el all
    }
  })

}
function usarDatosObjetoDOM() {
  // this es el objeto que invoca el evento, obj en la función crearObjetoDOM
  let informacion = this.info;
  console.log("usarDatosObjetoDOM:" + informacion);
}

function dibujarGraficaIncial() {
  datosCargados.forEach(c => {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("circle");
    cuadrado.style.left = `${c.ejex}px`;
    cuadrado.style.top = `${c.ejey}px`;
    cuadrado.style.width = `${c.box}px`;
    cuadrado.style.height = `${c.box}px`;
    cuadrado.style.boxShadow = `0 0 0 ${c.margin}px ${c.colormargin}`
    cuadrado.style.backgroundColor = `${c.colorbox}`;
    cuadrado.label = c.label;
    cuadrado.cod = c.cod;
    cuadrado.box = c.box;
    cuadrado.margin = c.margin;
    grafica.appendChild(cuadrado)
    // console.log(`${c.ejex}`)
  });
  // console.log(datosCargados)
  console.log("llego hasta aqui")
  const circulos = document.querySelectorAll(".circle");

  circulos.forEach(c => {
    c.addEventListener("mouseover", () => {
      // nombres.innerHTML = c.label;
      // nombres.
      nombres.innerHTML = ""
      let n = document.createElement("h1")
      n.classList.add("info")
      n.textContent = c.label;
      // c.appendChild(nombre); locuron
      nombres.appendChild(n)
    });
  });
  circulos.forEach(c => {
    c.addEventListener("click", () => {
      let texto = document.createElement("p")
      informacion.innerHTML = ""
      texto.innerHTML = `CODIGO:  ${c.cod}
      <br>VALOR: ${c.box}
      <br>INCREMENTO: ${c.margin} `;
      texto.classList.add("info")
      informacion.appendChild(texto);
    });
  });
}
dibujarGraficaIncial();
// div.addEventListener("mouseover", () => {
//   datosCargados.forEach((c) => {
//     nombres.innerHTML = c.label;
//   })
// })
// function crearObjetoDOM() {
//   const obj = document.createElement(tag);
//   let informacion = { a: 10, b: "data" }
//   obj.info = informacion;
//   obj.addEventListener("click", usarDatosObjetoDOM);
// }

