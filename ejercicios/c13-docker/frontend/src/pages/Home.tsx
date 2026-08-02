import { Container, Row, Col } from "react-bootstrap";
import {Hero} from "../components/Hero";
import LibroCard from "../components/LibroCard";
import { useFetchLibro } from "../hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const { data: libros, loading, error } = useFetchLibro("/libros.json");

  return (
    <>
      <Hero />
      <Container fluid className="mt-4">
        <h2>Libros Destacados</h2>

        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}

        <Row className="g-4">
          {(libros ?? []).slice(0, 3).map((libro) => (
            <Col key={libro.id} xs={12} sm={6} md={4}>
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
    </>
  );
}

export default Home;
