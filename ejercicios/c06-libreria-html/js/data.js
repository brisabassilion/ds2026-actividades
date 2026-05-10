var libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anio: 1967,
        precio: "$15.000",
        imagen: "CASImagen.jpg"
    },
    {
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        anio: 1963,
        precio: "$14.000",
        imagen: "CASImagen.jpg"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        precio: "$12.500",
        imagen: "CASImagen.jpg"
    },
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        anio: 1943,
        precio: "$10.000",
        imagen: "CASImagen.jpg"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        precio: "$13.200",
        imagen: "CASImagen.jpg"
    },
    {
        titulo: "Don Quijote",
        autor: "Miguel de Cervantes",
        anio: 1605,
        precio: "$18.000",
        imagen: "CASImagen.jpg"
    }
];
var input = document.getElementById("busqueda");
var boton = document.getElementById("btnBuscar");
var resultados = document.getElementById("resultados");
var mensaje = document.getElementById("mensaje");
boton.addEventListener("click", buscarLibros);
mostrarResultados(libros);
function buscarLibros() {
    var texto = input.value.toLowerCase().trim();
    mensaje.textContent = "";
    if (texto === "") {
        mostrarResultados(libros);
        return;
    }
    var filtrados = libros.filter(function (libro) {
        return libro.titulo.toLowerCase().includes(texto) ||
            libro.autor.toLowerCase().includes(texto) ||
            libro.anio.toString().includes(texto);
    });
    if (filtrados.length === 0) {
        mensaje.textContent = "No se encontraron libros.";
    }
    mostrarResultados(filtrados);
}
function mostrarResultados(lista) {
    resultados.innerHTML = "";
    lista.forEach(function (libro) {
        resultados.innerHTML += "\n            <div class=\"col-md-4 mb-4\">\n                <div class=\"card shadow-sm h-100\">\n\n                    <img \n                        src=\"".concat(libro.imagen, "\" \n                        class=\"card-img-top\"\n                        alt=\"").concat(libro.titulo, "\"\n                        style=\"height: 250px; object-fit: cover;\"\n                    >\n\n                    <div class=\"card-body d-flex flex-column\">\n                        <h5 class=\"card-title\">").concat(libro.titulo, "</h5>\n                        <p class=\"card-text mb-1\">").concat(libro.autor, "</p>\n                        <p class=\"card-text text-muted\">").concat(libro.anio, "</p>\n\n                        <p class=\"text-success fw-bold mt-auto\">\n                            ").concat(libro.precio, "\n                        </p>\n\n                        <a href=\"libro.html\" class=\"btn btn-primary w-100\">\n                            Ver detalle\n                        </a>\n                    </div>\n\n                </div>\n            </div>\n        ");
    });
}
