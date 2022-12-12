import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleMenuChange = () => {
    setActive(!isActive);
  };

  function ShowNav() {
    if (Auth.loggedIn()) {
      return (
        <Link
          className='mr-4 font-bold text-lg hide-nav'
          to='/'
          onClick={() => Auth.logout()}
        >
          Log Out
        </Link>
      );
    } else {
      return (
        <Link className='mr-4 font-bold text-lg hide-nav' to='/login'>
          Log in
        </Link>
      );
    }
  }

  function ShowMenuNav() {
    if (Auth.loggedIn()) {
      return (
        <Link
          className='mx-2 hide-buttons show-buttons custom-menu-link'
          to='/'
          onClick={() => Auth.logout()}
        >
          LOG OUT
        </Link>
      );
    } else {
      return (
        <Link
          className='mx-2 hide-buttons show-buttons custom-menu-link'
          to='/login'
          onClick={handleMenuChange}
        >
          LOG IN
        </Link>
      );
    }
  }

  return (
    <div className='flex justify-around h-[7vh]'>
      <div className='flex justify-center items-center'>
        <Link to='/'>
          <h1 className='custom-logo text-6xl ml-8'>hackit</h1>
        </Link>
        <div
          className={
            isActive ? 'flex flex-row ml-8 mt-4 custom-dropdown' : 'hidden'
          }
        >
          <Link
            to='/'
            className='mx-2 custom-menu-link'
            onClick={handleMenuChange}
          >
            HOME
          </Link>

          <Link
            to={Auth.loggedIn ? '/posts' : '/login'}
            className='mx-2 custom-menu-link'
            onClick={handleMenuChange}
          >
            POSTS
          </Link>
          <Link
            to='/about'
            className='mx-2 custom-menu-link'
            onClick={handleMenuChange}
          >
            ABOUT
          </Link>
          <Link
            to='/contact'
            className='mx-2 custom-menu-link'
            onClick={handleMenuChange}
          >
            CONTACT US
          </Link>
          <Link
            className='mx-2 hide-buttons show-buttons custom-menu-link'
            to='/signup'
            onClick={handleMenuChange}
          >
            SIGN UP
          </Link>
          {ShowMenuNav()}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        {ShowNav()}
        <Link
          className='bg-black text-white px-4 py-2 rounded-full hide-nav'
          to='/signup'
        >
          Sign up
        </Link>
      </div>
      <div
        className='flex justify-center items-center'
        onClick={handleMenuChange}
      >
        <HiOutlineMenu className='hidden show-hamburger text-3xl' />
      </div>
    </div>
  );
};

export default Navbar;
