function generar(n: number): string {
    let resultado: string = "";

    for (let i = 1; i <= n; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    return resultado;
}

const input = document.getElementById("cantidad") as HTMLInputElement;
const boton = document.getElementById("generar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLPreElement;

boton.addEventListener("click", () => {
  const valor: number = Number(input.value);

  const arbol = generar(valor);

  resultado.textContent = arbol;
});
