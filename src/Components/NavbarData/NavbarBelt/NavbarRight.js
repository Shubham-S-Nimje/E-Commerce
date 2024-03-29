import React, { useContext } from 'react'
import { FaFlag } from 'react-icons/fa';
import Carttoggle from '../../../Pages/HomePage/CartData/Carttoggle';
import ContectData from '../../Store/ContectData';
import { Link } from 'react-router-dom';

const NavbarRight = () => {
  const authctx = useContext(ContectData);

  const isLoggedIn = localStorage.getItem('token')
  // const history = useNavigate();

  const OnLogoutHandler = () => {
    authctx.logout();
    localStorage.setItem('token', '')
    // history('/auth')
  }
  
  return (
    <section className="row text-center">
      <div className="col-2 p-1">
        <FaFlag /> Ind
      </div>

      <div className="col-4 p-1">
      <div className='row'>
      {!isLoggedIn && (
        <Link to='/E-Commerce/auth' className='text-decoration-none text-white p-0 m-0'>
              <span>Hello, sign in</span>
              </Link>
          )}
      {isLoggedIn && (
              <Link to='/E-Commerce/auth'>
              <button className='p-0 m-0 btn btn-dark' onClick={OnLogoutHandler}>Hello, sign out</button>
              </Link>
          )}
      </div>
      
      <div className='row'>
        <span>
        Account&Lists
        </span>
      </div>
      </div>
      
      <div className="col-3 p-1">
        <div className="row">
        <span>
        Returns
        </span></div>
        <div className="row">
        <span>
        & Orders
        </span></div>
      </div>
      <div className="col-3 p-1">
        <Carttoggle />
      </div>
    </section>
  );
}

export default NavbarRight;
