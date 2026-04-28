interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
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
    });
    stats.textContent = `Cantidad: ${libros.length} | Precio promedio: ${precioPromedio(libros).toFixed(2)}`;
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


renderizar(catalogo);
