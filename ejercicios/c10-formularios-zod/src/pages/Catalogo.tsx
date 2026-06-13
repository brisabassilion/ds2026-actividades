import { Container, Row, Col } from "react-bootstrap";
import { LibroCard } from "../components/LibroCard";

function Catalogo({ libros }: { libros: any[] }) {
  return (
    <Container className="mt-4">
      <h2>Catálogo de Libros</h2>
      <Row>
        {libros.map((libro) => (
          <Col key={libro.id} md={4} className="mb-4">
            <LibroCard
              id={libro.id}
              title={libro.title}
              author={libro.author}
              img={libro.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Catalogo;