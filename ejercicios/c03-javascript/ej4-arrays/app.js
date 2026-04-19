const array = [10, 3, 34, 7, 19, 6, 22, 11];
let suma = 0;
let mayor = array[0];
let menor = array[0];

for ( let num of array) {
    suma += num;
    if (num > mayor) {
        mayor = num;
    }
    if (num < menor || menor === 0) {
        menor = num;
    }
}
let promedio = suma / array.length;

console.log(`Suma: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Mayor: ${mayor}`);
console.log(`Menor: ${menor}`);

function generarAsteriscos(n){
    let resultado = "";

    for (let i = 0; i < n; i++) {
        resultado += "*";
    }
    return resultado;
}

console.log(generarAsteriscos(2));
console.log(generarAsteriscos(7));