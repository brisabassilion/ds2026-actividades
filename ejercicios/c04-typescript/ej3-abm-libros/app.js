var _a, _b, _c, _d;
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
        var btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function () { return eliminarLibro(libro.isbn); });
        li.appendChild(btnEliminar);
    });
    stats.textContent = "Cantidad: ".concat(libros.length, " | Precio promedio: ").concat(precioPromedio(libros).toFixed(2));
}
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
function validarFormulario() {
    var titulo = document.getElementById("titulo").value.trim();
    var autor = document.getElementById("autor").value.trim();
    var precio = parseFloat(document.getElementById("precio").value);
    var genero = document.getElementById("género").value.trim();
    var disponible = document.getElementById("disponible").checked;
    if (!titulo || !autor || isNaN(precio) || precio <= 0) {
        return null;
    }
    var nuevoLibro = {
        isbn: "AUTO-" + Date.now(),
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: disponible,
        genero: genero || undefined
    };
    return nuevoLibro;
}
function eliminarLibro(isbn) {
    catalogo = catalogo.filter(function (libro) { return libro.isbn !== isbn; });
    renderizar(catalogo);
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
(_d = document.getElementById("formulario")) === null || _d === void 0 ? void 0 : _d.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var libro = validarFormulario();
    var errorDiv = document.getElementById("errorForm");
    if (libro) {
        agregarLibro(libro);
        document.getElementById("formulario").reset();
        errorDiv.textContent = "";
    }
    else {
        errorDiv.textContent = "Error: todos los campos deben estar completados y el precio debe ser mayor a 0";
    }
});
renderizar(catalogo);
