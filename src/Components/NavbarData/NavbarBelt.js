import React from 'react'
import NavbarLeft from './NavbarBelt/NavbarLeft'
import NavbarMid from './NavbarBelt/NavbarMid'
import NavbarRight from './NavbarBelt/NavbarRight'
import Container from 'react-bootstrap/Container';


const NavbarBelt = () => {
  return (
    <Container>
      <div className='row'>
        <div className='col'>
        <NavbarLeft/>
        </div>
        <div className='col'>
        <NavbarMid/>
        </div>
        <div className='col'>
        <NavbarRight/>
        </div>
      </div>
    </Container>
  )
}

export default NavbarBelt
