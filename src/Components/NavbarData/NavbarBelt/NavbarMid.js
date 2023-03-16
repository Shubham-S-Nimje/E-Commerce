import React from 'react'
import Form from 'react-bootstrap/Form';
import search from '../../../Assets/search.svg'

const NavbarMid = () => {
  return (
    <Form className="d-flex p-0 m-0 border-0 rounded">
      <select className='bg-light border-0' id="navbarScrollingDropdown">
              <option href="#action1">Amazon Fashion</option>
              <option href="#action2">Amazon Fashion</option>
              <option href="#action3">Amazon Fashion</option>
            </select>
          <input
            type="search"
            placeholder="Search Amazon.in"
            className="border-0"
            aria-label="Search"
          />
          <button className='p-2 border-0 bg-warning'>
            <img width={20} src={search} alt='searchicon'/>
            </button>
        </Form>
  )
}

export default NavbarMid
