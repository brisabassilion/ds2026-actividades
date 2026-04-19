function calcularPrecioFinal(monto, medioPago) {
    let descuento = 0;
    if (monto < 200) {
        descuento = 0;
    } else if (monto <= 400){
        if (medioPago === "E"){
            descuento = 0.3;
        } else if(medioPago === "D") {
            descuento = 0.2;
        } else if (medioPago === "C") {
            descuento = 0.1;
        }
    } else {
        descuento = 0.4;
    }
    let final= monto - (monto * descuento);
    return final;
}

console.log(`Monto: $150 | Pago: E | Final: $${calcularPrecioFinal(150, "E")}`);
console.log(`Monto: $300 | Pago: E | Final: $${calcularPrecioFinal(300, "E")}`);
console.log(`Monto: $300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);
console.log(`Monto: $300 | Pago: C | Final: $${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: $500 | Pago: C | Final: $${calcularPrecioFinal(500, "C")}`);