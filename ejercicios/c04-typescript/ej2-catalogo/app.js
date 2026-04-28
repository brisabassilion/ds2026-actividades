var _a, _b, _c;
var catalogo = [
    {
        isbn: "978-3-16-148410-0",
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        precio: 15.99,
        disponible: true,
        genero: "Ficción"
    },
    {
        isbn: "978-0-14-028333-4",
        titulo: "1984",
        autor: "George Orwell",
        precio: 12.99,
        disponible: false,
        genero: "Ciencia Ficción"
    },
    {
        isbn: "978-0-452-28423-4",
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        precio: 10.99,
        disponible: true
    }
];
function buscarPorAutor(autor) {
    return catalogo.filter(function (libro) { return libro.autor === autor; });
}
function librosDisponibles() {
    return catalogo.filter(function (libro) { return libro.disponible === true; });
}
function precioPromedio(catalogo) {
    if (catalogo.length === 0) {
        return 0;
    }
    else {
        var total = catalogo.reduce(function (total, libro) { return total + libro.precio; }, 0);
        return total / catalogo.length;
    }
}
function renderizar(libros) {
    var listado = document.getElementById("listado");
    var stats = document.getElementById("stats");
    listado.innerHTML = "";
    libros.forEach(function (libro) {
        var li = document.createElement("li");
        li.textContent = "".concat(libro.titulo, " - ").concat(libro.autor, " - (").concat(libro.precio, ")");
        listado.appendChild(li);
    });
    stats.textContent = "Cantidad: ".concat(libros.length, " | Precio promedio: ").concat(precioPromedio(libros).toFixed(2));
}
(_a = document.getElementById("filtrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var autor = document.getElementById("filtroAutor").value;
    renderizar(buscarPorAutor(autor));
});
(_b = document.getElementById("mostrarDisponibles")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    renderizar(librosDisponibles());
});
(_c = document.getElementById("mostrarTodos")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    renderizar(catalogo);
});
renderizar(catalogo);
