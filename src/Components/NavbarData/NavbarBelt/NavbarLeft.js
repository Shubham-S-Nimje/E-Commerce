import React from 'react'
import amazonLogo from '../../../Assets/amazonLogo.png'
import { FaMapMarkerAlt } from 'react-icons/fa';

const NavbarLeft = () => {
  return (
    <section className='row'>
      <div className='col-5 center p-1' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img width={100} src={amazonLogo} alt='amazonlogo'/>
      </div>

      <div className='col-1 p-1'>
        <FaMapMarkerAlt/>
      </div>

      <div className='col-6 px-3'>
      <span className='row'>
      Hello
      </span>
      <span className='row'>
      Select your address
      </span>
      </div>
      
    </section>
  )
}

export default NavbarLeft
