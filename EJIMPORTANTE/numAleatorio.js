

let numeroAleatorio;
let intervalo;
let tiempoAdivinar;
function jugar() {
    const minimo = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (minimo <= 100) {
        alert("El valor debe ser mayor a 100");
        return;
    }
    if (max >= 3000) {
        alert("El valor debe ser menor a 3000");
        return;
    }

    if (max - min <= 1000) {
        alert("La diferencia debe ser mayor de 1000");
        return;
    }
    numeroAleatorio = Math.floor(Math.random() * (max - minimo + 1)) + minimo;
    document.getElementById("min-value").textContent = minimo;
    document.getElementById("max-value").textContent = max;

    tiempoAdivinar = 60;
    document.getElementById("tiempo").textContent = tiempoAdivinar;
    intervalo = setInterval(restarTiempo, 1000);
    document.querySelector(".eleccionNum").classList.add("hidden");//Básicamente esta parte oculta esta para luego mostrar la otra
    document.getElementById("lugarDeJuego").classList.remove("hidden");//una vez la eliminamos de la clase hidden se muetra


}

function restarTiempo() {
    tiempoAdivinar--;
    document.getElementById("tiempo").innerHTML = tiempoAdivinar;
    if (tiempoAdivinar <= 0) {
        clearInterval(intervalo);
        document.getElementById("resultado").textContent = "¡Se acabó el tiempo! El número era " + numeroAleatorio;

        terminarJuego();
    }
}
function adivinar() {
    const jugada = parseInt(document.getElementById("miEleccion").value);
    if (jugada == numeroAleatorio) {
        document.getElementById("resultado").textContent = "Felicidades Has Acertado!"
        terminarJuego();
    } else if (jugada < numeroAleatorio) {
        document.getElementById("resultado").textContent = "El número es mayor"
    } else {
        document.getElementById("resultado").textContent = "El número es menor"

    }
}

function terminarJuego() {
    document.getElementById("miEleccion").disabled = true;
    clearInterval(intervalo);//detenemos el cronometro
}
