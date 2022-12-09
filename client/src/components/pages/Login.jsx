import React, { useState } from 'react';
import Auth from '../../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('id_token');
      Auth.login(token);
    } catch (err) {
      console.log(`Error in fetch request ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <form
        className='flex flex-col mx-auto lg:w-1/2 w-[90vw]'
        onSubmit={handleFormSubmit}
      >
        <div className='mb-4'>
          <label className='' htmlFor='formEmail'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='formEmail'
            type='email'
            name='formEmail'
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='' htmlFor='formPassword'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='formPassword'
            type='password'
            name='formPassword'
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-center items-center'>
          <button className='px-10 py-2 rounded-lg transition-all ease-in-out duration-200 bg-accent-300 hover:bg-accent-200 text-white font-bold antialiased'>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;