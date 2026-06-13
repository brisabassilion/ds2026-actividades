import { Container, Row, Col } from "react-bootstrap";
import {LibroCard} from "../components/LibroCard";
import libros from "../types/libros";

function Catalogo() {
  return (
    <Container className="mt-4">
      <h2>Catálogo de Libros</h2>
      <Row>
        {libros.map((libro, i) => (
          <Col key={i} md={4} className="mb-4">
            <LibroCard
              id={i}
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