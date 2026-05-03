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

obtenerUsuarios().then(usuarios => {
    const lista = document.getElementById("usuarios");
    if (lista) {
        usuarios.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = `${usuario.name} (${usuario.email})`;
            lista.appendChild(li);
        })
    }
})