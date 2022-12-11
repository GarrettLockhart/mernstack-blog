import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isActive, setActive] = useState(true);

  const handleMenuChange = () => {
    setActive(!isActive);
  };

  const displayMenu = () => {
    if (isActive) {
      return <div>Hello</div>;
    } else {
      return <div>Goodbye</div>;
    }
  };

  function ShowNav() {
    if (Auth.loggedIn()) {
      return (
        <Link
          className='mr-4 font-bold text-lg'
          to='/'
          onClick={Auth.logout()}
        >
          Log Out
        </Link>
      );
    } else {
      return (
        <Link className='mr-4 font-bold text-lg' to='/login'>
          Log in
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
        <div className='flex flex-row ml-8 mt-4'>
          <Link to='/' className='mx-2'>
            HOME
          </Link>

          <Link to={Auth.loggedIn ? '/posts' : '/login'} className='mx-2'>
            POSTS
          </Link>
          <Link to='/about' className='mx-2'>
            ABOUT
          </Link>
          <Link to='/contact' className='mx-2'>
            CONTACT US
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        {ShowNav()}
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
