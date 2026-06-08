import { Container, Button} from 'react-bootstrap';

export const Hero = () => (
    <div  className="hero">
    <Container className="text-center">
      <h1>Bienvenido a nuestra librería!</h1>
      <p>Descubrí historias increíbles, autores clásicos y novedades.</p>
      <Button variant="light">Ver Catálogo</Button>
    </Container>
  </div>
);
