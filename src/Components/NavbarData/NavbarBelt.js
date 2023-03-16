import React from 'react'
import NavbarLeft from './NavbarBelt/NavbarLeft'
import NavbarMid from './NavbarBelt/NavbarMid'
import NavbarRight from './NavbarBelt/NavbarRight'
import Container from 'react-bootstrap/Container';


const NavbarBelt = () => {
  return (
    <Container>
      <div className='row'>
        <div className='col-md col-xs-1 py-1'>
        <NavbarLeft/>
        </div>
        <div className='col-md col-xs-1 py-1'>
        <NavbarMid/>
        </div>
        <div className='col-md col-xs-1 py-1'>
        <NavbarRight/>
        </div>
      </div>
    </Container>
  )
}

export default NavbarBelt
