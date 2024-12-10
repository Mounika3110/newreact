import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">React Bootstap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Getting">Getting Started</Nav.Link>
            <Nav.Link href="#Components">Components</Nav.Link>
            <Nav.Link href="#Exercises">Exercises</Nav.Link>
          </Nav>
          <Form className="d-flex  abc">
          <Nav.Link href="/Github">Github</Nav.Link>
          <NavDropdown title="v2.10.6(Bootstap 5)" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">v2.10.6(Bootstap 3)</NavDropdown.Item>
              <NavDropdown.Item href="#action4">v2.10.6(Bootstap 4)</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    
  );
}

export default NavScrollExample;
