import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => (
   <Navbar className="navbar">
    <Container>
      <Navbar.Brand href="#">Rayuela 📚</Navbar.Brand>
      <Nav className="navbar-links">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
); 