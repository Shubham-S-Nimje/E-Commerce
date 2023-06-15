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
            navbarScroll
          >
            <Nav.Link href="/E-Commerce/">Home</Nav.Link>
            <Nav.Link href="/E-Commerce/store">Store</Nav.Link>
            <Nav.Link href="/E-Commerce/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Option 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/E-Commerce/contactus">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </>
  )
}

export default NavbarCategories
