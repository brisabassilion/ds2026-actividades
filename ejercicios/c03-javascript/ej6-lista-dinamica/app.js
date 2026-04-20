function agregar() {
    const input = document.getElementById('producto');
    const lista = document.getElementById('lista');
    const contador = document.getElementById('contador');

    const nombre = input.value.trim();

    if (nombre === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    const li = document.createElement("li");
    const botonEliminar = document.createElement("button");

    li.textContent = nombre + " ";
    botonEliminar.textContent = "Eliminar";

    botonEliminar.onclick = function () {
        lista.removeChild(li);
        actualizarContador();
    };

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = "";

    actualizarContador();
}

function actualizarContador() {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");

  const cantidad = lista.children.length;

  contador.textContent = `${cantidad} productos en la lista`;
}
