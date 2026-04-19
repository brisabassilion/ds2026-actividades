function calcularNota(nota) {
    if (nota < 4 ) {
        return "Desaprobado";
    } else if (nota < 8) {
        return "Promocionado";
    } else {
        return "Promocionado";
    }
}

console.log(calcularNota(6));

function diaDeLaSemana(numero) {
    let dia;
    switch(numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado (fin de semana)";
            break;
        case 7:
            dia = "Domingo (fin de semana)";
            break;
        default:
            dia = "Día inválido";
    }
    return dia;
}

console.log(diaDeLaSemana(6));