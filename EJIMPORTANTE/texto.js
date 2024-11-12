// Función para contar frases, palabras y caracteres
function analizarTexto() {
    const texto = document.getElementById("textArea").value;

    // Comprobación de las 50 palabras y mínimo 3 líneas
    if (texto.trim().split(/\s+/).length < 50 || texto.split(/\n/).length < 3) {
        alert("El texto debe tener al menos 50 palabras y 3 líneas.");
        return;
    }

    const frases = texto.split(/[.!?]\s/).filter(frase => frase.trim() !== "").length;
    const palabras = texto.trim().split(/\s+/).length;
    const caracteres = texto.replace(/\s/g, '').length;

    document.getElementById("output").innerHTML = `
        <p>Frases: ${frases}</p>
        <p>Palabras: ${palabras}</p>
        <p>Caracteres (sin espacios): ${caracteres}</p>
    `;
}

// Función para reescribir cada línea del texto como un párrafo
function reescribirEnParrafos() {
    const texto = document.getElementById("textArea").value;
    const lineas = texto.split(/\n/).map(linea => linea.trim()).filter(linea => linea !== "");

    document.getElementById("output").innerHTML = lineas.map(linea => `<p>${linea}</p>`).join("");
}

// Función para contar las apariciones de una palabra
function contarPalabra() {
    const texto = document.getElementById("textArea").value.toLowerCase();
    const palabra = document.getElementById("wordCountInput").value.toLowerCase().trim();

    if (!palabra) {
        alert("Introduce una palabra para contar.");
        return;
    }

    const palabrasArray = texto.split(/\s+/);
    const cuenta = palabrasArray.filter(p => p === palabra).length;

    document.getElementById("output").innerHTML = `<p>La palabra "${palabra}" aparece ${cuenta} veces.</p>`;
}

// Función para reemplazar una palabra por otra
function reemplazarPalabra() {
    const texto = document.getElementById("textArea").value;
    const palabraOriginal = document.getElementById("wordReplaceInput").value.trim();
    const palabraNueva = document.getElementById("wordNewInput").value.trim();

    if (!palabraOriginal || !palabraNueva) {
        alert("Introduce ambas palabras para hacer la sustitución.");
        return;
    }

    const regex = new RegExp(`\\b${palabraOriginal}\\b`, 'gi');
    const textoReemplazado = texto.replace(regex, palabraNueva);

    document.getElementById("output").innerHTML = `<p>Texto actualizado:</p><p>${textoReemplazado}</p>`;
}
