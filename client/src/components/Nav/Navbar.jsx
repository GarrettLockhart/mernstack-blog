import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = () => {
  return (
    <div className='flex md:flex-row flex-col justify-around items-center'>
      <div className='h-[7vh] mx-10'>
        <h1 className='custom-logo text-black text-6xl'>hackit</h1>
      </div>
      <div>
        <nav className='mx-10'>
          <ul className='flex text-black'>
            <li className='mx-4 uppercase'>
              <Link to='/'>About</Link>
            </li>

            <li className='mx-4 uppercase'>
              <Link to='/posts'>Posts</Link>
            </li>
            {Auth.loggedIn ? (
              <li className='mx-4 uppercase' /* onClick={handleLogout} */>
                <Link to='/'>Logout</Link>
              </li>
            ) : (
              <li className='mx-4 uppercase'>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
