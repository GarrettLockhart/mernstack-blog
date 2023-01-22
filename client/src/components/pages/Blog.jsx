import React from 'react';
import imgPlaceholder from '../../img/blog-post-placeholder.jpeg';

const Blog = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center my-16'>
        <h2 className='text-3xl font-bold m-2'>Welcome to the Matrix</h2>
        <p className='m-2'>with love from the tech community</p>
      </div>
      <div className='container mx-auto'>
        <section
          className='flex flex-col justify-end p-10 h-[600px] my-16'
          style={{
            backgroundImage: `url(${imgPlaceholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='bg-gray-200 rounded-lg py-3 px-5'>
            <h2 className='text-black text-xl font-bold'>Post Title</h2>
            <p className='text-black text-md'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              soluta quis optio. Provident fuga quae dolor impedit sunt
              laudantium vero!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
