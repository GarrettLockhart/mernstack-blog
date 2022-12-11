import React, { useState } from 'react';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = () => {
    const payload = {
      email: formState.email,
      password: formState.password
    };

    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: { payload }
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
    <div className='h-[80vh] flex justify-center items-center'>
      <form
        className='flex flex-col mx-auto lg:w-1/2 w-[90vw]'
        onSubmit={handleFormSubmit}
      >
        <div className='mb-4'>
          <label className='' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            name='password'
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
