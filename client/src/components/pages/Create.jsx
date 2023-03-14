import React from 'react';

const Create = () => {
  return (
    <div className='container mx-auto'>
      <section className='flex flex-col w-[50%] mx-auto'>
        <label htmlFor='post-title'></label>
        <input className='my-2 py-2 px-2' type='text' id='post-title' />
        <textarea className='my-2' name="post-content" id="post-content" cols="30" rows="10"></textarea>
      </section>
    </div>
  );
};

export default Create;
