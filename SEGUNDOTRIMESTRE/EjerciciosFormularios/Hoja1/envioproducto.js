const pintar = document.getElementById("lienzo");
const categoria = document.getElementById("categoria");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
function obtenerCheckbox() {
    let opcionMarcada = document.forms[0]; // Obtiene todos los elementos del formulario
    let mostrar = "";
    for (let i = 0; i < opcionMarcada.length; i++) {
        if (opcionMarcada[i].type === "checkbox" && opcionMarcada[i].checked) {
            mostrar += opcionMarcada[i].value + '<br>';
        }
    }
    return mostrar;
}
function mostrarDatos() {
    let id = document.getElementById("numberid").value;
    let nombre = document.getElementById("nombre").value;
    let Descripcion = document.getElementById("descripcion").value;
    let Contrasenia = document.getElementById("contrasenia").value;
    let fecha = document.getElementById("fecha").value;
    let valor = categoria.value;
    let tienda = document.querySelector('input[name="tienda"]:checked').value;
    // tienda = tienda ? tienda.value : 'No seleccionada ';
    //javascript.info 
    let direccion = document.getElementById("direccion").value;
    let cp = document.getElementById("cp").value;
    let acc = obtenerCheckbox();
    let color = document.getElementById("color").value;
    let correo = document.getElementById("Correo").value;
    let precio = document.getElementById("precio").value;
    let telefono = document.getElementById("tel").value;
    let fechaDev = document.getElementById("fechaMax").value;
    pintar.innerHTML += `<strong>ID:</strong> ${id} <br>`;
    pintar.innerHTML += `<strong>Nombre:</strong> ${nombre} <br>`;
    pintar.innerHTML += `<strong>Descripción:</strong> ${Descripcion} <br>`;
    pintar.innerHTML += `<strong>Contraseña:</strong> ${Contrasenia} <br>`;
    pintar.innerHTML += `<strong>Fecha:</strong> ${fecha} <br>`;
    pintar.innerHTML += `<strong>Categoría:</strong> ${valor} <br>`;
    pintar.innerHTML += `<strong>Tienda seleccionada:</strong> ${tienda} <br>`;
    pintar.innerHTML += `<strong>Dirección:</strong> ${direccion} <br>`;
    pintar.innerHTML += `<strong>Código Postal:</strong> ${cp} <br>`;
    pintar.innerHTML += `<strong>Accesorios seleccionados:</strong> <br>${acc}`;
    pintar.innerHTML += `<strong>Color:</strong> ${color} <br>`;
    pintar.innerHTML += `<strong>Email:</strong> ${correo} <br>`;
    pintar.innerHTML += `<strong>Precio:</strong> ${precio} <br>`;
    pintar.innerHTML += `<strong>Telefono:</strong> ${telefono} <br>`;
    pintar.innerHTML += `<strong>Fecha de Devolución:</strong> ${fechaDev} <br>`;

    /* pintar.innerHTML = `
            <strong>ID:</strong> ${id} <br>
            <strong>Nombre:</strong> ${nombre} <br>
            <strong>Descripción:</strong> ${descripcion} <br>
            <strong>Contraseña:</strong> ${contrasenia} <br>
            <strong>Fecha:</strong> ${fecha} <br>
            <strong>Categoría:</strong> ${valor} <br>
            <strong>Tienda seleccionada:</strong> ${tienda} <br>
            <strong>Dirección:</strong> ${direccion} <br>
            <strong>Código Postal:</strong> ${cp} <br>
            <strong>Accesorios seleccionados:</strong> <br>${acc}
            <strong>Color:</strong> ${color} <br>
            <strong>Email:</strong> ${correo} <br>
            <strong>Precio:</strong> ${precio} <br>
            <strong>Telefono:</strong> ${telefono} <br>
            <strong>Fecha de Devolución:</strong> ${fechaDev} <br>
        `; */

}



function mostrarDireccion(tienda) {
    let direccionCod = "";
    if (tienda === 'Ikea') {
        direccionCod = ' Calle pepito 29500'
    }
    if (tienda === 'Carrefour') {
        direccionCod = ' Calle carmen 22500'

    }
    if (tienda === 'Chinos') {
        direccionCod = ' Calle jose 22900'

    }
    if (tienda === 'dia') {
        direccionCod = ' Calle juan 27500'
    }
    document.getElementById("tiendaIn").innerHTML = `<strong>Dirección de la tienda seleccionada:</strong> ${direccionCod}`;;
}



t1.addEventListener("click", function () {
    mostrarDireccion("Ikea");

})
t2.addEventListener("click", function () {
    mostrarDireccion("Carrefour");

});
t3.addEventListener("click", function () {
    mostrarDireccion("Chinos");

});
t4.addEventListener("click", function () {
    mostrarDireccion("Dia");
});
