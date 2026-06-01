import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/Layout/Navbar";
import { Hero } from "../components/Layout/Hero";
import { LibroCard } from "../components/Layout/LibroCard";
import { Footer } from "../components/Layout/Footer";
import libros from "../types/libros";

function Home() {
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

export default Home;