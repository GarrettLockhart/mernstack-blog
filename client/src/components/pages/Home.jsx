import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import PostPlaceholder from '../../img/post-placeholder.jpeg';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-start items-center h-[23vh]'>
        <div>
          <h2 className='text-6xl mt-24'>
            Welcome to <span className='custom-logo text-7xl'>hackit</span>
          </h2>
          <p>A blog yo</p>
        </div>
      </div>
      <div className='flex justify-center items-end h-[23vh] mb-20'>
        <Link
          to='/signup'
          className='flex justify-center items-center mb-10 bg-main-200 hover:bg-main-300 text-white ease-in-out duration-200 px-5 py-3 rounded-full mx-2'
        >
          Get Started <FaChevronRight className='ml-2' />
        </Link>
        <Link
          to='/about'
          className='flex justify-center items-center mb-10 bg-white hover:bg-gray-100 ease-in-out duration-200 px-5 py-3 rounded-full mx-2'
        >
          Learn More <FaChevronRight className='ml-2' />
        </Link>
      </div>
      <div className='container mx-auto'>
        <section className='grid xl:grid-cols-3 grid-cols-1 p-10 w-4/5 mx-auto'>
          <div className='col-span-1 mb-4'>
            <img
              src={PostPlaceholder}
              alt='Placeholder'
              className='h-[95%] w-full rounded-xl'
            />
          </div>
          <div className='col-span-2 flex flex-col px-10 h-full'>
            <section className='flex h-10 justify-start'>
              <p className='flex justify-center items-center px-3 text-[13px] bg-black text-white rounded-full mr-2'>
                Post
              </p>
              <p className='flex justify-center items-center mx-2'>
                January 1st, 2023
              </p>
            </section>
            <section>
              <h3 className='pt-4 text-3xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, dicta.
              </h3>
            </section>
            <section className='pb-5 pt-3 font-bold'>
              <span className='mr-3'>#tech</span>
              <span className='mr-3'>#react</span>
              <span className='mr-3'>#JavScript</span>
            </section>
            <section className='mb-10'>
              <img src='' alt='' />
              <p>
                Author: <Link to='/'>Garrett Lockhart</Link>{' '}
              </p>
            </section>
            <button className='w-[25%] px-5 py-2 rounded-full bg-black text-white'>
              Full Post
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
