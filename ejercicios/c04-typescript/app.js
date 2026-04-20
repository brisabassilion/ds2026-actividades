function generarAsteriscos(n) {
    var resultado = "";
    for (var i = 1; i <= n; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    return resultado;
}
var input = document.getElementById("cantidad");
var boton = document.getElementById("generar");
var resultado = document.getElementById("resultado");
boton.addEventListener("click", function () {
    var valor = Number(input.value);
    var arbol = generarAsteriscos(valor);
    resultado.textContent = arbol;
});
