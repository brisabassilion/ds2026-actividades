import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "./componentes/Navbar";
import { Hero } from "./componentes/Hero";
import { LibroCard } from "./componentes/LibroCard";
import { Footer } from "./componentes/Footer";
import libros from "./data/libros";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Container className="container">
        <h2>Libros Destacados</h2>
        <Row className="g-4">
          {libros.map((libro, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <LibroCard title={libro.title} author={libro.author} img={libro.img} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;