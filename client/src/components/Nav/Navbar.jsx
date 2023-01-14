import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

export default function NavBar() {
  // used for opening and closing the hamburger menu
  const [navbar, setNavbar] = useState(false);

  const [auth, setAuth] = useState(false);

  const ShowNavMobile = () => {
    if (auth) {
      return (
        <button
          className='px-4 py-2 w-full text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 ease-in-out duration-200'
          onClick={() => Auth.logout()}
        >
          SIGN OUT
        </button>
      );
    } else {
      return (
        <Link
          to='/signup'
          className='px-4 py-2 inline-block w-full text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 ease-in-out duration-200'
          onClick={() => setNavbar(!navbar)}
        >
          SIGN UP
        </Link>
      );
    }
  };

  const ShowNavDesktop = () => {
    if (auth) {
      return (
        <button
          className='px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 ease-in-out duration-200'
          onClick={() => Auth.logout()}
        >
          SIGN OUT
        </button>
      );
    } else {
      return (
        <Link
          to='/signup'
          className='px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 ease-in-out duration-200'
          onClick={() => setNavbar(!navbar)}
        >
          SIGN UP
        </Link>
      );
    }
  };

  useEffect(() => {
    if (Auth.loggedIn()) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <nav className='w-full'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 lg:h-[7vh]'>
        <div>
          <div className='flex items-center justify-between custom-logo md:block'>
            <a href='/'>
              <h2 className='text-5xl font-bold text-black'>Hackit</h2>
            </a>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-black'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-black'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='text-black ease-in-out duration-200 hover:text-c-teal'>
                <Link to='/' onClick={() => setNavbar(!navbar)}>
                  HOME
                </Link>
              </li>
              <li className='text-black ease-in-out duration-200  hover:text-c-teal'>
                <Link to='/blog' onClick={() => setNavbar(!navbar)}>
                  BLOG
                </Link>
              </li>
              <li className='text-black ease-in-out duration-200  hover:text-c-teal'>
                <Link to='/about' onClick={() => setNavbar(!navbar)}>
                  ABOUT
                </Link>
              </li>
              <li className='text-black ease-in-out duration-200  hover:text-c-teal'>
                <Link to='/contact' onClick={() => setNavbar(!navbar)}>
                  CONTACT US
                </Link>
              </li>
            </ul>

            <div className='mt-3 space-y-2 md:hidden'>
              <Link
                to='/login'
                className='inline-block w-full px-4 py-2 text-center text-white bg-c-teal rounded-md shadow ease-in-out duration-200 hover:bg-c-blue'
                onClick={() => setNavbar(!navbar)}
              >
                LOGIN
              </Link>
              {ShowNavMobile()}
            </div>
          </div>
        </div>
        <div className='hidden space-x-2 md:inline-block'>
          <Link
            to='/login'
            className='px-4 py-2 text-white bg-c-teal rounded-md shadow ease-in-out duration-200 hover:bg-c-blue'
            onClick={() => setNavbar(!navbar)}
          >
            LOGIN
          </Link>
          {ShowNavDesktop()}
        </div>
      </div>
    </nav>
  );
}
