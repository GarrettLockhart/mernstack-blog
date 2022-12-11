import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = () => {
  return (
    <div className='flex md:flex-row flex-col justify-around items-center'>
      <div className='flex  justify-center items-center h-[7vh] mx-10'>
        <h1 className='custom-logo text-black text-6xl'>hackit</h1>
        <div>
          <nav className='mx-10'>
            <ul className='flex text-black'>
              <li className='mx-4 uppercase'>
                <Link to='/'>About</Link>
              </li>

              <li className='mx-4 uppercase'>
                <Link to='/posts'>Posts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Link className='mr-4 font-bold text-lg' to='/login'>
          Log in
        </Link>
        <Link
          className='bg-black text-white px-4 py-2 rounded-full'
          to='/signup'
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
