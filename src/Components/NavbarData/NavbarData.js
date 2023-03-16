import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBelt from './NavbarBelt';
import NavbarMain from './NavbarMain';

const NavbarData = () => {
  return (
    <Navbar className="px-3 text-white row" bg="dark" expand="lg" variant="dark">
      <div className="col">
      <div className="row">
        <NavbarBelt />
      </div>
      <Container className="row">
        <NavbarMain />
      </Container>
      </div>
    </Navbar>
  );
}

export default NavbarData;
