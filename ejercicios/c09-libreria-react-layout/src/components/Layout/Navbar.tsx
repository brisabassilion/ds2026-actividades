import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavBar: React.FC = () => (
   <Navbar className="navbar">
    <Container>
      <Navbar.Brand href="#">Rayuela 📚</Navbar.Brand>
      <Nav className="navbar-links">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#catalogo">Catálogo</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
); 