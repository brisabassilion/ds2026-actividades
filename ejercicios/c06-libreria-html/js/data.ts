interface Libro {
    titulo: string;
    autor: string;
    anio: number;
    precio: string;
    imagen: string;
}

const libros: Libro[] = [
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

const input = document.getElementById("busqueda") as HTMLInputElement;
const boton = document.getElementById("btnBuscar") as HTMLButtonElement;
const resultados = document.getElementById("resultados") as HTMLDivElement;
const mensaje = document.getElementById("mensaje") as HTMLDivElement;

boton.addEventListener("click", buscarLibros);

mostrarResultados(libros);

function buscarLibros(): void {
    const texto = input.value.toLowerCase().trim();

    mensaje.textContent = "";

    if (texto === "") {
        mostrarResultados(libros);
        return;
    }

    const filtrados = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto) ||
        libro.anio.toString().includes(texto)
    );

    if (filtrados.length === 0) {
        mensaje.textContent = "No se encontraron libros.";
    }

    mostrarResultados(filtrados);
}

function mostrarResultados(lista: Libro[]): void {
    resultados.innerHTML = "";

    lista.forEach(libro => {
        resultados.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100">

                    <img 
                        src="${libro.imagen}" 
                        class="card-img-top"
                        alt="${libro.titulo}"
                        style="height: 250px; object-fit: cover;"
                    >

                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${libro.titulo}</h5>
                        <p class="card-text mb-1">${libro.autor}</p>
                        <p class="card-text text-muted">${libro.anio}</p>

                        <p class="text-success fw-bold mt-auto">
                            ${libro.precio}
                        </p>

                        <a href="libro.html" class="btn btn-primary w-100">
                            Ver detalle
                        </a>
                    </div>

                </div>
            </div>
        `;
    });
}