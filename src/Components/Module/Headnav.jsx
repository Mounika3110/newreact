import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Headernav({ setSelectedBrand }) {
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand); 
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">TV Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {['lg', 'sony', 'hisense', 'samsung', 'tcl', 'mi', 'acer', 'vu'].map((brand) => (
              <Nav.Link 
                as={Link} 
                to={`/tv${brand}`} 
                key={brand}
                onClick={() => handleBrandClick(brand)} 
              >
                {brand.charAt(0).toUpperCase() + brand.slice(1)} 
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Link to='/dashboard'><p>Back</p></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headernav;
