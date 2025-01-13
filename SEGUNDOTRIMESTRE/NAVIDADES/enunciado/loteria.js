/* Variables y constantes del programa */
let sortAscPremio = true;
let premios = [];
let pv = document.getElementById("provincias");
let premio = document.getElementById("importe");
let numeros = document.getElementsByClassName("numero");
let animaciones = document.getElementById("animations");
let intervalo = 0;
let animacionActivada = false;
let mostrar = document.getElementById("listadoquintos");
let verquintos = document.getElementById("verquintos");
let numerito = document.getElementById("buscapornumero");
let mostrarnum = document.getElementById("listabusqueda");
let mensaje = document.getElementById("mensajes");
const tablasListado = document.querySelectorAll('table.listado');
/* SELECCIONAMOS SOLO LAS TABLAS CON EL QUERYSELECTOR CON LA CLASE LISTADO
 */let borrar = document.getElementById("cleaner");
// let radio = document.querySelector('input[name="premio"]');
let radio = document.getElementsByName("premio");
let tipoPremio = document.getElementById("tipopremio")
// le he quitado el checked porque quiero recoger todos loos botones para que todos tengan el radio listener
let selec = document.getElementById("buscaporterminacion");

/* Funciones genéricas */
function cargarLoteria() {
    // premios = listapremios.filter(loterias =>
    // loterias.numero && loterias.premio && loterias.serie && loterias.provincia
    // );
    for (let i = 0; i < listapremios.length; i++) {
        //   list  if (listapremios[i].numero && listapremios[i].premio &&
        //         apremios[i].serie && listapremios[i].provincia) {
        premios.push(listapremios[i]);
        // }
    }
    console.log(premios);


}
cargarLoteria();

verquintos.addEventListener("click", function () {
    premios.sort((a, b) => {
        if (sortAscPremio) {
            return b.premio - a.premio;
        }
    });
    mostrarCinco();
});

function mostrarCinco() {

    let tablaaa = '<table class="listado">';
    tablaaa += `
         <tr class="listado">
             <th>Numero</th>
             <th>Premio</th>
             <th>Serie</th>
             <th>Provincia</th>
         </tr>
     `;
    premios.forEach(loterias => {
        if (loterias.premio > 100) {
            let prov = 'Vendido en toda España';
            if (loterias.provincia && loterias.provincia.length > 0) {
                prov = loterias.provincia.join(', ');
            }
            tablaaa += `
             <tr>
                 <td>${loterias.numero}</td>
                 <td>${loterias.premio} €</td>
                 <td>${loterias.serie}</td>
                 <td>${prov}</td>
             </tr>
             `;
        }
    });
    tablaaa += "</table>";
    mostrar.innerHTML = tablaaa;
    mostrar.style.display = "block";
    mostrar.style.visibility = "visible";
    console.log(premios);
}


/* Inicio de la página */
function mostarDatos() {
    let num;
    if (radio[0].checked) {
        console.log(1)
        num = 1;
        mostrarTodos(num);
    }

    if (radio[1].checked) {
        console.log(2)
        num = 2;
        mostrarTodos(num);
    }
    if (radio[2].checked) {
        num = 3;
        mostrarTodos(num);
        console.log(3)
    }

}
mostarDatos();

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', mostarDatos);

}
function mostrarTodos(num) {
    // console.log("has seleccionado mostrar el primero")
    let n;
    for (let i = 0; i < premios.length; i++) {
        if (num === 1) {
            tipoPremio.innerHTML = "Primer premio";
            if (premios[i].premio === 400000) {
                n = premios[i].numero.toString();
                console.log(n);
                for (let j = 0; j < numeros.length; j++) {
                    numeros[j].innerHTML = n[j];

                }
                premio.innerHTML = premios[i].premio + '€';
                pv.innerHTML = premios[i].provincia;

            }
        }
        if (num === 2) {
            tipoPremio.innerHTML = "Segundo premio";

            if (premios[i].premio === 125000) {
                n = premios[i].numero.toString();
                console.log(n);
                for (let j = 0; j < numeros.length; j++) {
                    numeros[j].innerHTML = n[j];

                }
                premio.innerHTML = premios[i].premio + '€';
                pv.innerHTML = premios[i].provincia;

            }
        }
        if (num === 3) {
            tipoPremio.innerHTML = "Tercer premio";
            if (premios[i].premio === 50000) {
                n = premios[i].numero.toString();
                console.log(n);
                for (let j = 0; j < numeros.length; j++) {
                    numeros[j].innerHTML = n[j];

                }
                premio.innerHTML = premios[i].premio + '€';
                pv.innerHTML = premios[i].provincia;

            }
        }

    }

}


function ponerAnimacion() {
    if (!animacionActivada) {
        animacionActivada = true;
        animaciones.innerHTML = "Desactivar animación";
        intervalo = setInterval(() => {
            for (let i = 0; i < tablasListado.length; i++) {

                if (tablasListado[i].classList.contains("puntos")) {
                    tablasListado[i].classList.remove("puntos");
                } else {
                    tablasListado[i].classList.add("puntos");
                }
/*                 SI LA TABLA YA TIENE LA CLASE PUNTOS LA ELIMINA SINO LA AÑADE
 */            }
        }, 500);


    } else {
        clearInterval(intervalo);
        for (let i = 0; i < tablasListado.length; i++) {
            tablasListado[i].classList.remove("puntos");
        }
        animacionActivada = false;
        animaciones.innerHTML = "Activar animación";

    }


}
animaciones.addEventListener("click", ponerAnimacion);
borrar.addEventListener("click", () => {

    mostrar.style.display = "none";
    /* Si ponia stryle.visibility="hidden", se escondia pero seguia quedando el espacio
    asi que con el display none se quita completamente */
    mensaje.innerHTML = "";
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
        //quitar el activado de los botones
    }

    for (let u = 0; u < numeros.length; u++) {
        numeros[u].innerHTML = "&nbsp";
        //pa que quede ese espacio
    }
    premio.innerHTML = "&nbsp";
    pv.innerHTML = "&nbsp";
    tipoPremio.innerHTML = "&nbsp";
    mostrarnum.style.display = "none";
    numerito.value = "";
    numerito.style.backgroundColor = "";


});
selec.addEventListener("change", function () {
    let longitudSelect = parseInt(selec.value, 10);
    console.log("Seleccionamos", longitudSelect)
    if (isNaN(longitudSelect) || longitudSelect <= 0) {
        mensaje.innerHTML =
            `Selecciona una cantidad válida de cifras.`;
    } else {
        mensaje.innerHTML = "Escribe un numero completo o selecciona una terminacion";
    }
});
numerito.addEventListener("input", function () {

    let numeroEscritoPorAhora = numerito.value;
    let longitudSelect = parseInt(selec.value, 10);
    console.log(numeroEscritoPorAhora)
    if (isNaN(longitudSelect) || longitudSelect <= 0) {
        longitudSelect = 0;
    }
    if (numeroEscritoPorAhora.length < 5) {
        numerito.style.backgroundColor = "salmon";
        mensaje.innerHTML = 'Escribe un numero completo o elige una terminacion';
    }

    if (numeroEscritoPorAhora.length === 5) {

        numerito.style.backgroundColor = "lightgreen";
        mensaje.innerHTML = "";
        buscarPremio(numeroEscritoPorAhora);

    } else if (numeroEscritoPorAhora.length >= longitudSelect) {
        numerito.style.backgroundColor = "lightgreen";
        mensaje.innerHTML = "";
        let terminacion = numeroEscritoPorAhora.slice(-longitudSelect);
        buscarTerminacion(terminacion)
    } else {
        numerito.style.backgroundColor = "salmon";
        mensaje.innerHTML = `Escribe un número con la terminación seleccionada ${longitudSelect}`;
    }//si el numero tiene mas de 5 digitosº




});
function buscarPremio(nume) {

    let encontrado = premios.find(p => p.numero === nume);
    if (encontrado) {
        mensaje.innerHTML = "";


        let provinciaa = encontrado.provincia ?
            Array.isArray(encontrado.provincia) ?
                encontrado.provincia.join(", ")
                : encontrado.provincia : 'Vendido en toda España';
        // Esto quiere decir si es un array aplica lo de las comas sino simplemente muestra
        // la provincia normal pero si no es un array si existe se pone lo de españa

        let tablaPremio = `
        <table class="listado">
        <tr>
        <th>Numero: </th>
        <th>Premio: </th>
        <th>Serie: </th>
        <th>Provincias: </th>
        </tr>

        <tr>
        <td>${encontrado.numero}</td>
        <td>${encontrado.premio}</td>
        <td>${encontrado.serie}</td>
        <td>${provinciaa}</td>
        </tr>
        </table>

        `;

        mostrarnum.innerHTML = tablaPremio;
        mostrarnum.style.visibility = "visible";
    } else {
        mensaje.innerHTML = `No hay premio para ese número ${nume}`;
        mostrarnum.innerHTML = "";
    }




}
function buscarTerminacion(numee) {
    numee = numee.toString();
    // Es  necesario el toString porque el endsWith se usa para string
    console.log(numee)
    let premiosTerminacion = premios.filter(p => p.numero.toString().endsWith(numee));
    if (premiosTerminacion.length > 0) {
        mensaje.innerHTML = "";
        let tablaPremio = `
        <table class="listado">
        <tr>
        <th>Numero: </th>
        <th>Premio: </th>
        <th>Serie: </th>
        <th>Provincias: </th>
        </tr>
        `;
        premiosTerminacion.forEach(p => {
            let provinciaa = p.provincia
                ? Array.isArray(p.provincia)
                    ? p.provincia.join(", ")
                    : p.provincia
                : 'Vendido en toda España';
            tablaPremio += `
                <tr>
                <td>${p.numero}</td>
                <td>${p.premio}</td>
                <td>${p.serie}</td>
                <td>${provinciaa}</td>
                </tr>
                `;

        });
        tablaPremio += `</table>`;
        mostrarnum.innerHTML = tablaPremio;
        mostrarnum.style.visibility = "visible";
    } else {
        mensaje.innerHTML = `No hay premio para ese número ${numee}`;
        mostrarnum.innerHTML = "";
    }
}
