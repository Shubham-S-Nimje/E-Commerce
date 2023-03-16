import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarCategories = () => {
  return (
    <>
    <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Store</Nav.Link>
            <Nav.Link href="#action3">About</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Option 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </>
  )
}

export default NavbarCategories
