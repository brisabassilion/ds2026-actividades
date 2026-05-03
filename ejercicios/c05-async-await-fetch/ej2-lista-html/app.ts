    interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: number;
}

async function obtenerUsuarios (): Promise<Usuario[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const usuarios: Usuario[] = await response.json();
    return usuarios;
}

async function mostrarUsuarios (): Promise<void> {
    const lista = document.getElementById("usuarios");
    const error = document.getElementById("error");
    const cargando = document.getElementById("cargando");

    try {
        const usuarios = await obtenerUsuarios();
        if (lista) {
            usuarios.forEach(usuario => {
                const li = document.createElement("li");
                li.textContent = `${usuario.name} (${usuario.email})`;
                lista.appendChild(li);
            })
        }
    } catch (err) {
        if (error) {
            error.textContent = `Error al cargar usuarios: ${err}`;
            error.style.display = "block";
        }
    } finally {
        if (cargando) {
            cargando.style.display = "none";
        }
    }
}

mostrarUsuarios();