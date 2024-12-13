import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">HeadPhones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/LG">boAT</Nav.Link>
            <Nav.Link href="/Sony">OnePlus</Nav.Link>
            <Nav.Link href="/Hisense">JBL</Nav.Link>
            <Nav.Link href="/Samsung">Boult</Nav.Link>
            <Nav.Link href="/TCL">Sony</Nav.Link>
            <Nav.Link href="/MI">realme</Nav.Link>
            <Nav.Link href="/Acer">ZEBRONICS</Nav.Link>
            <Nav.Link href="/Vu">Samsung</Nav.Link>
            <Nav.Link href="/Noise">Noise</Nav.Link>
            <Nav.Link href="/pTron">pTron</Nav.Link>
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