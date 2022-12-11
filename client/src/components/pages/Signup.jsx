import React, { useState } from 'react';
import axios from 'axios';
import auth from '../../utils/auth';
import { FaChevronRight } from 'react-icons/fa';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/user/create', {
        firstName: formState.firstName,
        lastName: formState.lastName,
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
        });
        document.querySelector('#warning').textContent =
          'Email already registered with us';
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
    <div className='flex justify-center h-[80vh] w-screen items-center'>
      <form
        className='w-full md:w-1/2 flex flex-col items-center '
        onSubmit={handleFormSubmit}
      >
        <h1 className='text-center text-2xl font-bold text-gray-600 mb-6'>
          SIGN UP
        </h1>
        <div className='w-3/4 mb-6'>
          <input
            type='text'
            name='firstName'
            id='firstName'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500'
            placeholder='First Name'
            onChange={handleChange}
            required
          />
        </div>
        <div className='w-3/4 mb-6'>
          <input
            type='text'
            name='lastName'
            id='lastName'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500'
            placeholder='Last Name'
            onChange={handleChange}
            required
          />
        </div>
        <div className='w-3/4 mb-6'>
          <input
            type='email'
            name='email'
            id='email'
            className='w-full py-4 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500'
            placeholder='Email'
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
            placeholder='Password'
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
            SIGN UP
          </button>
          <p className='flex justify-center items-center mt-4'>
            Already have an account?{' '}
            <a
              className='flex flex-row justify-center items-center text-accent-300 transition-all ease-in-out duration-200 hover:text-accent-200 ml-2'
              href='/login'
            >
              Log in <FaChevronRight className='ml-1' />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
