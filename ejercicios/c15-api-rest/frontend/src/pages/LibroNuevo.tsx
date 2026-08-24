import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const libroSchema = z.object({
  title: z.string().min(1, "Título requerido"),
  author: z.string().min(1, "Autor requerido"),
  precio: z.string().min(1, "Precio requerido"),
  disponible: z.boolean().optional(),
  img: z.string().url("Debe ser una URL válida").optional(),
  descripcion: z.string().optional(),
});

type LibroValidado = z.infer<typeof libroSchema>;

function LibroNuevo({ agregarLibro }: { agregarLibro: (libro: LibroValidado) => void }) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } =
    useForm<LibroValidado>({ resolver: zodResolver(libroSchema) });

  const onSubmit = (data: LibroValidado) => {
    agregarLibro(data);
    navigate("/catalogo");
  };

  return (
    <div>
      <h2>Nuevo Libro</h2>
      <form  className="formulario" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Título</label>
          <input {...register("title")} placeholder="Ingresa el titulo del libro"/>
          {errors.title && <p className="error-text">{errors.title.message}</p>}
        </div>

        <div>
          <label>Autor</label>
          <input {...register("author")} placeholder="Ingresa el autor del libro"/>
          {errors.author && <p className="error-text">{errors.author.message}</p>}
        </div>

        <div>
          <label>Precio</label>
          <input {...register("precio")} placeholder="Ingresa el precio del libro"/>
          {errors.precio && <p className="error-text">{errors.precio.message}</p>}
        </div>

        <div className="checkbox-group">
            <label className="checkbox-label">
                <span>Disponible</span>
                <input type="checkbox" {...register("disponible")} className="checkbox-large" />
                
            </label>
        </div>

        <div>
          <label>Imagen (URL)</label>
          <input {...register("img")} placeholder="Ingresa la URL de la imagen"/>
          {errors.img && <p className="error-text">{errors.img.message}</p>}
        </div>

        <div>
          <label>Descripción</label>
          <textarea {...register("descripcion")} placeholder="Ingresa una breve descripción del libro"/>
        </div>

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default LibroNuevo;
