import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">TV Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/LG">LG</Nav.Link>
            <Nav.Link href="/Sony">Sony</Nav.Link>
            <Nav.Link href="/Hisense">Hisense</Nav.Link>
            <Nav.Link href="/Samsung">Samsung</Nav.Link>
            <Nav.Link href="/TCL">TCL</Nav.Link>
            <Nav.Link href="/MI">MI</Nav.Link>
            <Nav.Link href="/Acer">Acer</Nav.Link>
            <Nav.Link href="/Vu">Vu</Nav.Link>
          </Nav>
          <Nav>
          <Link to='/dashboard'><p>Back</p></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;