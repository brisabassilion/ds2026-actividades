import { Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Hero = () => (
    <div  className="hero">
    <Container className="text-center">
      <h1>Bienvenido a nuestra librería!</h1>
      <p>Descubrí historias increíbles, autores clásicos y novedades.</p>
      <Button as={Link as any} to="/catalogo" variant="primary">
         Ver Catálogo
      </Button>
    </Container>
  </div>
);
