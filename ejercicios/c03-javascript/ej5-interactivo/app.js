function generar() {
    const input = document.getElementById('altura');
    const resultado = document.getElementById('resultado');

    let altura = input.value;

    if (altura === "" || altura < 1) {
        resultado.textContent = "Por favor, ingrese un número mayor al 0.";
        return;
    }

    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 1; j <= i; j++) {
            arbol += "*";
        }
        arbol += "\n";
    }
    resultado.textContent = arbol;
}
