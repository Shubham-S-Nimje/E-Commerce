import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBelt from './NavbarBelt';
import NavbarMain from './NavbarMain';

const NavbarData = () => {
  return (
    <Navbar className="text-white row p-0 m-0" bg="dark" expand="lg" variant="dark">
      <div className="col">
      <div className="row">
        <NavbarBelt />
      </div>
      <div className="row m-2">
        <NavbarMain />
      </div>
      </div>
    </Navbar>
  );
}

export default NavbarData;
