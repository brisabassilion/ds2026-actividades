import { Spinner, Alert } from "react-bootstrap";
import LibroCard from "../components/LibroCard";
import { useFetchLibro } from "../hooks/useFetch";

function Catalogo() {
  const { data: libros, loading, error } = useFetchLibro("/libros.json");

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="grid-libros">
      {(libros ?? []).map((libro) => (
        <LibroCard key={libro.id} {...libro} />
      ))}
    </div>
  );
}

export default Catalogo;
