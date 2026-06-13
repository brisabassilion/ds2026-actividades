import { useParams } from "react-router-dom";
import  libros  from "../types/libros";

function LibroDetalle() {
  const { id } = useParams();
  const libro = libros.find((l) => l.id.toString() === id);

  if (!libro) return <p>Libro no encontrado</p>;

  return (
    <div>
      <h2>{libro.title}</h2>
      <p>{libro.author}</p>
      <img src={libro.img} alt={libro.title} />
      <p>{libro.descripcion}</p>
      <p>Precio: {libro.precio}</p>
    </div>
  );
}

export default LibroDetalle;