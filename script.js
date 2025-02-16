function agregarValor(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    let expresion = document.getElementById("pantalla").value;
    try {
        let resultado = eval(expresion);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}

function raizCuadrada() {
    let valor = document.getElementById("pantalla").value;
    if (valor !== "") {
        let numero = parseFloat(valor);
        if (numero < 0) {
            document.getElementById("pantalla").value = "Error";
        } else {
            document.getElementById("pantalla").value = Math.sqrt(numero);
        }
    }
}

function convertirPorcentaje() {
    let valor = document.getElementById("pantalla").value;
    if (valor !== "") {
        document.getElementById("pantalla").value = parseFloat(valor) / 100;
    }
}

function cambiarModo() {
    document.body.classList.toggle("oscuro");
    let boton = document.querySelector(".modo");
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "Modo Claro";
    } else {
        boton.textContent = "Modo Oscuro";
    }
}
