import React from 'react'
import { Button } from 'react-bootstrap'
import { FaShoppingCart, FaFlag } from 'react-icons/fa';

const NavbarRight = () => {
  return (
    <section className='row'>
      <div className='col-1 p-1'>
        <FaFlag/>
      </div>

      <div className='col px-3'>
      <span className='row'>
      Hello, sign in
      </span>
      <span className='row'>
      Account& Lists
      </span>
      </div>

      <div className='col px-3'>
      <span className='row'>
      Returns
      </span>
      <span className='row'>
      & Orders
      </span>
      </div>

      <Button className='col btn btn-dark p-1'>
      <FaShoppingCart alt='carticon'/> Cart (0)
       
      </Button>
    </section>
  )
}

export default NavbarRight;
