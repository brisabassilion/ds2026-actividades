import { Container, Row, Col } from "react-bootstrap";
import { Hero } from "../components/Hero";
import { LibroCard } from "../components/LibroCard";
import libros from "../types/libros";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
        <Hero />
        <Container className="container">
          <h2>Libros Destacados</h2>
          <Row className="g-4">
            {libros.map((libro) => (
              <Col key={libro.id} xs={12} sm={6} md={4}>
                <LibroCard id={libro.id} title={libro.title} author={libro.author} img={libro.img} />
              </Col>
            ))}
         </Row>
        </Container>
    </>
  );
}

export default Home;