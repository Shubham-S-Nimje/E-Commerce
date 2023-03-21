import React from 'react'
import { FaFlag } from 'react-icons/fa';
import Carttoggle from '../../CartData/Carttoggle';


const NavbarRight = () => {
  
  return (
    <section className='row'>
      <div className='col-2 p-1'>
        <FaFlag/> Ind
      </div>

      <div className='col-4 px-3'>
      <span className='row'>
      Hello, sign in
      </span>
      <span className='row'>
      Account&Lists
      </span>
      </div>

      <div className='col-3 px-3'>
      <span className='row'>
      Returns
      </span>
      <span className='row'>
      & Orders
      </span>
      </div>
      <div className='col-3 px-3'>
      <Carttoggle/>
      </div>
    </section>
  )
}

export default NavbarRight;
