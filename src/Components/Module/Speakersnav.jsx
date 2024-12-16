import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">Speakers Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/boAT">boAT</Nav.Link>
            <Nav.Link href="/Bose">Bose</Nav.Link>
            <Nav.Link href="/JBL">JBL</Nav.Link>
            <Nav.Link href="/Marshall">Marshall</Nav.Link>
            <Nav.Link href="/Sony">Sony</Nav.Link>
            <Nav.Link href="/Tribit">Tribit</Nav.Link>
            <Nav.Link href="/ZEBRONICS">ZEBRONICS</Nav.Link>
            <Nav.Link href="/PHILIPS">PHILIPS</Nav.Link>
            <Nav.Link href="/MiVi">MiVi</Nav.Link>
            <Nav.Link href="/Amazon">Amazon</Nav.Link>
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