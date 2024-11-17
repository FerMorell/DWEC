let escritores = [];
let contadorEscritores = 0;
const id = document.getElementById("nescritor");
const nombre = document.getElementById("nombre");
const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");
const descripcion = document.getElementById("descripcion");
let avisos = document.getElementById("avisos");
let auto = document.getElementById("auto");
let buscar = document.getElementById("gofind");
let carrusel = false;
let intervalo = null;
function cargarEscritores() {
    escritores = listaHabilidades.split("\n");
    console.log(escritores);
}
cargarEscritores();
function separarDatos() {

    let autor = escritores[contadorEscritores].split("|");
    let nombres = autor[0];
    let habilidades = autor[1].split("...");
    let habilidadesA = habilidades[0].split(" ");
    let habilidadesB = habilidades[1].split(" ");
    let habilidadesC = habilidades[2].split(" ");
    let descripcions = autor[2];


    let autorid = contadorEscritores + 1;

    id.innerHTML = autorid;
    nombre.innerHTML = nombres;
    skill1.innerHTML = habilidadesA[0];
    skill2.innerHTML = habilidadesB[0];
    skill3.innerHTML = habilidadesC[0];
    descripcion.innerHTML = descripcions;

}


document.getElementById("reset").addEventListener("click", () => {
    id.innerHTML = "";
    nombre.innerHTML = "";
    skill1.innerHTML = "";
    skill2.innerHTML = "";
    skill3.innerHTML = "";
    descripcion.innerHTML = "";
    avisos.innerHTML = " ";

    if (carrusel) {
        clearInterval(intervalo);
        carrusel = false;
        auto.innerText = "Automático";
    }
})




document.getElementById("first").addEventListener("click", () => {
    contadorEscritores = 0;
    avisos.innerHTML = "Los fallos de uso se muestran aqui";
    separarDatos();


})

document.getElementById("next").addEventListener("click", () => {

    //Después de un reset, o si es el primer botón que pulsas, se pone el primer autor
    if (contadorEscritores == -1) {
        contadorEscritores = 0;
        separarDatos();
    } else if (contadorEscritores == escritores.length - 1) {
        avisos.innerText = "Estás al final de la lista";
    } else {
        contadorEscritores++;
        separarDatos();
        avisos.innerHTML = "Los fallos de uso se muestran aqui";

    }
})


document.getElementById("prev").addEventListener("click", () => {

    if (contadorEscritores < 0) {
        avisos.innerHTML = "Estas al inicio de la lista";
    }
    if (cargarEscritores == -1) {
        cargarEscritores = arrayAutores.length - 1;
        separarDatos();
    } else if (cargarEscritores == 0) {
        avisos.innerText = "Estás al inicio de la lista";
    } else {
        contadorEscritores--;
        separarDatos();
        avisos.innerHTML = "Los fallos de uso se muestran aqui";


    }
})


document.getElementById("last").addEventListener("click", () => {
    if (contadorEscritores > 50) {
        avisos.innerHTML = "Estas al final de la lista."
    } else {
        contadorEscritores = escritores.length - 1;
        separarDatos();
    }
})

auto.addEventListener("click", () => {
    if (!carrusel) {
        intervalo = setInterval(() => {
            contadorEscritores = (contadorEscritores == escritores.length - 1) ? 0 : contadorEscritores + 1;
            separarDatos();
        }, 500);
        carrusel = true;
        auto.innerText = "Parar";

    } else {
        clearInterval(intervalo);
        carrusel = false;
        auto.innerText = "Automático";
    }


});
separarDatos();




buscar.addEventListener("click", () => {
    let palabra = findskill.value;
    if (palabra === "") {
        avisos.innerText = "Por favor, escribe una palabra para buscar.";
        return;
    }
    for (let i = 0; i < escritores.length; i++) {
        let autor = escritores[i].split("|");
        let descpalabras = autor[2].toLowerCase().split(" ");
        if (descpalabras.includes(palabra.toLowerCase())) {
            contadorEscritores = i;
            separarDatos();
            return;
        }

    }
    avisos.innerText = "No se encontró ningún escritor con esa palabra.";

})
