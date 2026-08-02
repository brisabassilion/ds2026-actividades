interface LibroOL {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}

const input = document.getElementById("busqueda") as HTMLInputElement;
const boton = document.getElementById("btnBuscar") as HTMLButtonElement;
const cargando = document.getElementById("cargando") as HTMLDivElement;
const resultados = document.getElementById("resultados") as HTMLDivElement;
const mensaje = document.getElementById("mensaje") as HTMLDivElement;


boton.addEventListener("click", buscarLibros);

async function buscarLibros(): Promise<void> {
    const texto = input.value.trim();

    resultados.innerHTML = "";
    mensaje.textContent = "";

    if (texto === "") {
        mensaje.textContent = "Debe ingresar un término de búsqueda";
        return;
    }

    cargando.style.display = "block";

    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(texto)}`
        );

        const data = await response.json();

        mostrarResultados(data.docs.slice(0, 10));

    } catch (error) {
        mensaje.textContent = "Error al buscar libros.";
    } finally {
        if (cargando) {
            cargando.style.display = "none";
        }
    }
}

function mostrarResultados(libros: LibroOL[]): void {
    resultados.innerHTML = "";

    libros.forEach(libro => {
        const autor = libro.author_name
            ? libro.author_name[0]
            : "Autor desconocido";

        const anio = libro.first_publish_year
            ? libro.first_publish_year
            : "Sin año";

        resultados.innerHTML += `
            <div class="card">
                <h3>${libro.title}</h3>
                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Año:</strong> ${anio}</p>
            </div>
        `;
    });
}
