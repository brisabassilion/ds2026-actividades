interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

let catalogo: Libro[] = [
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

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(libro => libro.autor === autor);
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible === true);
}

function precioPromedio(catalogo: Libro[]): number {
    if (catalogo.length === 0) {
        return 0;
    } else{
    const total = catalogo.reduce((total, libro) => total + libro.precio, 0);
    return total / catalogo.length;
    }
}

function renderizar(libros : Libro[]): void {
    const listado = document.getElementById("listado") as HTMLUListElement;
    const stats = document.getElementById("stats") as HTMLParagraphElement;
    listado.innerHTML = "";
    libros.forEach(libro => {
        const li= document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - (${libro.precio})`;
        listado.appendChild(li);
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminarLibro(libro.isbn));
        li.appendChild(btnEliminar);
    });
    stats.textContent = `Cantidad: ${libros.length} | Precio promedio: ${precioPromedio(libros).toFixed(2)}`;
}

function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar(catalogo);
}

function validarFormulario(): Libro | null {
    const titulo = (document.getElementById("titulo") as HTMLInputElement).value.trim();
    const autor = (document.getElementById("autor") as HTMLInputElement).value.trim();
    const precio = parseFloat((document.getElementById("precio") as HTMLInputElement).value);
    const genero = (document.getElementById("género") as HTMLInputElement).value.trim();
    const disponible = (document.getElementById("disponible") as HTMLInputElement).checked;

    if (!titulo || !autor || isNaN(precio) || precio <= 0) {
        return null;
    }

    const nuevoLibro: Libro = {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible,
        genero: genero || undefined
    };

    return nuevoLibro;
}

function eliminarLibro(isbn: string): void {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);      
}

document.getElementById("filtrar")?.addEventListener("click", () => {
  const autor = (document.getElementById("filtroAutor") as HTMLInputElement).value;
  renderizar(buscarPorAutor(autor));
});

document.getElementById("mostrarDisponibles")?.addEventListener("click", () => {
  renderizar(librosDisponibles());
});

document.getElementById("mostrarTodos")?.addEventListener("click", () => {
  renderizar(catalogo);
});

document.getElementById("formulario")?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const libro = validarFormulario();
    const errorDiv = document.getElementById("errorForm") as HTMLDivElement;
    if (libro) {
        agregarLibro(libro);
        (document.getElementById("formulario") as HTMLFormElement).reset();
        errorDiv.textContent = "";
    } else {
        errorDiv.textContent = "Error: todos los campos deben estar completados y el precio debe ser mayor a 0";
    }
});

renderizar(catalogo);


