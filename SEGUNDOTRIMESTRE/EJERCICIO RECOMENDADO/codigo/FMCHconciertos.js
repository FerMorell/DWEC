const concierto = [];
const dibujarTabla = document.getElementById("showtable");
const botonMostarTodos = document.getElementById("btnall");
// let radio = document.getElementsByClassName("bso");
const radio = document.querySelectorAll('input[type="radio"]'); 
const ordenar = document.getElementById("btnorden");
let sortAscNumConciertos = true;
const conciertosOriginales = [];
const buscarPorEscritura = document.getElementById("idsong");
const botonBuscar = document.getElementById("find");
const lugarDePlantilla = document.getElementById("showdetail");
function cargarDatos() {
    for (let i = 0; i < listaConciertos.length; i++) {
        concierto.push(listaConciertos[i]);
    }
    console.log(concierto)
    conciertosOriginales.push(...concierto)
    // ... copia el elemento de concierto a los originales se utiliza dentro del push 
    const tabla = document.createElement("table")
    tabla.classList.add("table")

    const cabeceraTabla = document.createElement("thead")
    const cabeceraRow = document.createElement("tr");

    const nombreParaLasColumnas = ["ID ", "B.S.O", "Directores", "Nº Conciertos"]
    nombreParaLasColumnas.forEach((nombreParaLasColumnas) => {
        const th = document.createElement("th");
        th.classList.add("cabecera", "celda")
        th.textContent = nombreParaLasColumnas;
        cabeceraRow.appendChild(th);

    })

    cabeceraTabla.appendChild(cabeceraRow)
    tabla.appendChild(cabeceraTabla)

    const tbody = document.createElement("tbody")
    tabla.appendChild(tbody)
    dibujarTabla.innerHTML = ""
    dibujarTabla.appendChild(tabla)
}
cargarDatos();


botonMostarTodos.addEventListener("click", () => {
    // console.log(cabecera)

    radio.forEach((radio) => {
        radio.checked = false
    });
    mostrarTabla(conciertosOriginales)


});

// for (let i = 0; i < radio.length; i++) {
//     radio[i].addEventListener("click", mostrarEleccion);
//     // console.log(radio[i].value)
//     // console.log(radio[i].checked)
// }

radio.forEach((radio) => {
    radio.addEventListener("click", mostrarEleccion)
})

function mostrarEleccion() {
    radio.forEach((radio) => {
        if (radio.checked) {
            const eleccion = radio.value;
            console.log(eleccion);
            mostrarBSO(eleccion);
        }
    });
}

function mostrarBSO(eleccion) {

    let cambiadaEleccion;
    console.log("llegue")
    if (eleccion === "T") {
        cambiadaEleccion = "Titanic"
    }
    if (eleccion === "K") {
        cambiadaEleccion = "The Lion King"
    }
    if (eleccion === "L") {
        cambiadaEleccion = "La La Land"
    }
    if (eleccion === "G") {
        cambiadaEleccion = "Grease"
    }
    console.log(cambiadaEleccion)
    let existe = concierto.filter(c => c.BSO.includes(cambiadaEleccion));
    console.log(existe)

    // cambio el find porque ese me devuelve el primero que encuentre
    // mientras que el filter me duvuelve todos
    if (existe.length > 0) {

        const tbody = dibujarTabla.querySelector("tbody")
        tbody.innerHTML = ""

        existe.forEach((conciertoI) => {
            const row = document.createElement("tr");
            row.classList.add("fila");

            const id = document.createElement("td");
            id.textContent = conciertoI.idsong;
            id.className = "celda";
            row.appendChild(id);

            const bs = document.createElement("td");
            bs.textContent = conciertoI.BSO;
            bs.className = "celda";
            row.appendChild(bs);

            const director = document.createElement("td");
            director.textContent = conciertoI.director;
            director.className = "celda";
            row.appendChild(director);

            const numConciertos = document.createElement("td")
            numConciertos.textContent = conciertoI.nconciertos;
            numConciertos.className = "celda";
            row.appendChild(numConciertos);
            tbody.appendChild(row)

        })
    }

};

ordenar.addEventListener("click", function () {
    concierto.sort((a, b) => {
        if (sortAscNumConciertos) {
            return b.nconciertos - a.nconciertos
        }
    });
    mostrarTabla(concierto);
})

function mostrarTabla(conciertos) {
    console.log(conciertos)
    console.log(conciertos)
    radio.forEach((radio) => {
        radio.checked = false

    });


    const tbody = dibujarTabla.querySelector("tbody")
    tbody.innerHTML = ""

    conciertos.forEach((concierto) => {
        const row = document.createElement("tr");
        row.classList.add("fila");

        const id = document.createElement("td");
        id.textContent = concierto.idsong;
        id.className = "celda";
        row.appendChild(id);

        const bs = document.createElement("td");
        bs.textContent = concierto.BSO;
        bs.className = "celda";
        row.appendChild(bs);

        const director = document.createElement("td");
        director.textContent = concierto.director;
        director.className = "celda";
        row.appendChild(director);

        const numConciertos = document.createElement("td")
        numConciertos.textContent = concierto.nconciertos;
        numConciertos.className = "celda";
        row.appendChild(numConciertos);
        tbody.appendChild(row)

    })

}

botonBuscar.addEventListener("click", () => {
    let idEscrito = buscarPorEscritura.value.trim();
    buscarPorEscritura.value = "";
    let encontrado = concierto.filter(c => c.idsong === idEscrito)
    if (encontrado.length > 0) {
        // mostrarTabla(encontrado)
        mostrarPlantilla(encontrado);
        console.log(encontrado)
    } else {
        window.alert("NO SE HA ENCONTRADO NADA")
    }

})

function mostrarPlantilla(concierto) {
    lugarDePlantilla.textContent = "";
    const contenedorPlantilla = document.createElement("div")
    contenedorPlantilla.className = "fondo";

    const fotito = document.createElement("div")
    fotito.className = "foto";
    contenedorPlantilla.appendChild(fotito)
    const identificador = document.createElement("div")
    identificador.className = "identificador";
    identificador.textContent = concierto[0].idsong;
    console.log(concierto[0].idsong)
    contenedorPlantilla.appendChild(identificador)

    const todosLosDatos = document.createElement("div")
    todosLosDatos.className = "data";
    concierto.forEach((c) => {
        todosLosDatos.innerHTML = `
        <strong>  <p>${c.BSO}<p>          </strong>
        <strong>  <p>${c.director}<p></strong>
        <strong>  <p>${c.orquesta}<p></strong>
        <strong>  <p>${c.nconciertos}<p></strong>
        <strong>  <p>${c.ciudad}<p></strong>
    `

    })

    contenedorPlantilla.appendChild(todosLosDatos)
    lugarDePlantilla.appendChild(contenedorPlantilla)

}
