import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarCategories = () => {
  return (
    <>
    <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0" 
            navbarScroll
          >
            <Link to="/E-Commerce" className='text-white text-decoration-none m-2'>Home</Link>
            <Link to="/E-Commerce/store" className='text-white text-decoration-none m-2'>Store</Link>
            <Link to="/E-Commerce/about" className='text-white text-decoration-none m-2'>About</Link>
            <select id="navbarScrollingDropdown" className='bg-dark border-0 text-white'>
              <option to="#action1">Option 1</option>
              <option to="#action2">Option 2</option>
              <option to="#action5">Option 2</option>
            </select>
            <Link to="/E-Commerce/contactus" className='text-white text-decoration-none m-2'>Contact us</Link>
          </Nav>
        </Navbar.Collapse>
        </>
  )
}

export default NavbarCategories
