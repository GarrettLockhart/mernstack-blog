import React, { useState } from 'react';
import axios from 'axios';
import auth from '../../utils/auth';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/login/new', {
        email: formState.email,
        password: formState.password
      })
      .then((response) => {
        console.log(response);
        auth.login(response.data);
      })
      .catch((err) => {
        setTimeout(() => {
          document.querySelector('#warning').textContent = '';
        }, 3500);
        document.querySelector('#warning').textContent =
          'Incorrect email or password';
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    // component provided from https://tailwindcomponents.com/component/simple-login-2
    <div className='flex flex-col justify-center h-[80vh] w-screen items-center'>
      <form
        className='w-full lg:w-1/2 md:w-3/4 flex flex-col items-center transition-all ease-in-out duration-200'
        onSubmit={handleFormSubmit}
      >
        <h1 className='text-center text-2xl font-bold text-gray-600 mb-6'>
          LOGIN
        </h1>
        <div className='w-3/4 mb-6'>
          <input
            type='email'
            name='email'
            id='email'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500'
            placeholder='Demo: testuser@test.com'
            onChange={handleChange}
            required
          />
        </div>
        <div className='w-3/4 mb-6'>
          <input
            type='password'
            name='password'
            id='password'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 '
            placeholder='Demo: "password"'
            onChange={handleChange}
            required
          />
        </div>
        <div
          className='flex justify-center items-center text-red-500'
          id='warning'
        ></div>
        <div className='w-3/4 mt-4'>
          <button
            type='submit'
            className='py-4 bg-accent-300 transition-all ease-in-out duration-200 w-full rounded text-blue-50 font-bold hover:bg-accent-200'
          >
            {' '}
            LOGIN
          </button>
          <p className='flex flex-col justify-center items-center mt-4'>
            Don't have an account?{' '}
            <Link
              className='flex flex-row justify-center items-center text-accent-300 transition-all ease-in-out duration-200 hover:text-accent-200 ml-2'
              to='/signup'
            >
              Sign up <FaChevronRight className='ml-1' />
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
