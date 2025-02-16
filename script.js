function actualizarPantalla(valor) {
    document.getElementById("pantalla").value = valor;
}

function obtenerPantalla() {
    return document.getElementById("pantalla").value;
}

function agregarValor(valor) {
    actualizarPantalla(obtenerPantalla() + valor);
}

function limpiar() {
    actualizarPantalla("");
}

function calcular() {
    let expresion = obtenerPantalla();
    try {
        let resultado = evaluarExpresion(expresion);
        actualizarPantalla(resultado);
    } catch (error) {
        actualizarPantalla("Expresión inválida");
    }
}

function evaluarExpresion(expresion) {
    expresion = expresion.replace(/%/g, "*0.01");
    if (!/^[0-9+\-*/().\s]*$/.test(expresion)) {
        throw new Error("Expresión inválida");
    }
    return new Function("return " + expresion)();
}

function raizCuadrada() {
    let valor = obtenerPantalla();
    if (valor !== "") {
        let numero = parseFloat(valor);
        actualizarPantalla(numero < 0 ? "Error" : Math.sqrt(numero));
    }
}

function convertirPorcentaje() {
    let valor = obtenerPantalla();
    if (valor !== "") {
        actualizarPantalla(parseFloat(valor) / 100);
    }
}

function cambiarModo() {
    document.body.classList.toggle("oscuro");
    let boton = document.querySelector(".modo");
    boton.textContent = document.body.classList.contains("oscuro") ? "Modo Claro" : "Modo Oscuro";
}
