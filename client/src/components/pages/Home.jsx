import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import imgPlaceholder from '../../img/blog-post-placeholder.jpeg';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-start items-center h-[23vh] bg-c-blue'>
        <div>
          <h2 className='text-center text-white lg:text-6xl text-5xl lg:px-0 px-4 mt-24'>
            Welcome to{' '}
            <span className='custom-logo lg:text-7xl text-6xl text-white'>
              Hackit
            </span>
          </h2>
          <p className='w-3/4 text-center text-white mx-auto lg:text-md text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ut?
          </p>
        </div>
      </div>
      <div className='flex justify-center items-end h-[23vh] mb-10 bg-c-blue'>
        <Link
          to='/signup'
          className='flex justify-center items-center mb-10 bg-c-red hover:bg-c-orange ease-in-out duration-200 lg:px-5 lg:py-3 px-4 py-2 lg;text-md text-sm rounded-full mx-2 shadow'
        >
          Get Started <FaChevronRight className='ml-2' />
        </Link>
        <Link
          to='/about'
          className='flex justify-center items-center mb-10 bg-white hover:bg-gray-100 ease-in-out duration-200 lg:px-5 lg:py-3 px-4 py-2 lg;text-md text-sm rounded-full mx-2 shadow'
        >
          Learn More <FaChevronRight className='ml-2' />
        </Link>
      </div>
      <div>
        <div className='text-3xl text-center font-bold mb-4'>
          <h2>Top this week:</h2>
        </div>
        <section className='grid lg:grid-cols-3 md:grid-rows-1 grid-cols-1 p-10 w-full lg-w-4/5 lg:mx-auto h-auto'>
          <div
            className='col-span-1 lg:mb-0 mb-4 w-full lg:h-full h-60'
            style={{
              backgroundImage: `url(${imgPlaceholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className='col-span-2 flex flex-col lg:px-10 px-0 h-full'>
            <section className='flex h-10 justify-start'>
              <p className='flex justify-center items-center px-3 text-[13px] bg-black text-white rounded-full mr-2'>
                Post
              </p>
              <p className='flex justify-center items-center mx-2 lg-text-md text-sm'>
                January 1st, 2023
              </p>
            </section>
            <section>
              <h3 className='pt-4 lg:text-xl text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, dicta.
              </h3>
            </section>
            <section className='pb-5 pt-3 font-bold lg:text-md text-sm'>
              <span className='mr-3'>#tech</span>
              <span className='mr-3'>#react</span>
              <span className='mr-3'>#JavScript</span>
            </section>
            <section className='mb-10'>
              <img src='' alt='' />
              <p className='lg:text-md text-sm'>
                By: <Link to='/'>Garrett Lockhart</Link>{' '}
              </p>
            </section>
            <button className='lg:w-[50%] px-5 py-2 rounded-full bg-black ease-in-out duration-200 hover:bg-c-blue text-white'>
              Full Post
            </button>
          </div>
        </section>
        <section className='grid lg:grid-cols-3 md:grid-rows-1 grid-cols-1 p-10 w-full lg-w-4/5 lg:mx-auto h-auto'>
          <div
            className='col-span-1 lg:mb-0 mb-4 w-full lg:h-full h-60'
            style={{
              backgroundImage: `url(${imgPlaceholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className='col-span-2 flex flex-col lg:px-10 px-0 h-full'>
            <section className='flex h-10 justify-start'>
              <p className='flex justify-center items-center px-3 text-[13px] bg-black text-white rounded-full mr-2'>
                Post
              </p>
              <p className='flex justify-center items-center mx-2 lg-text-md text-sm'>
                January 1st, 2023
              </p>
            </section>
            <section>
              <h3 className='pt-4 lg:text-xl text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, dicta.
              </h3>
            </section>
            <section className='pb-5 pt-3 font-bold lg:text-md text-sm'>
              <span className='mr-3'>#tech</span>
              <span className='mr-3'>#react</span>
              <span className='mr-3'>#JavScript</span>
            </section>
            <section className='mb-10'>
              <img src='' alt='' />
              <p className='lg:text-md text-sm'>
                By: <Link to='/'>Garrett Lockhart</Link>{' '}
              </p>
            </section>
            <button className='lg:w-[50%] px-5 py-2 rounded-full bg-black ease-in-out duration-200 hover:bg-c-blue text-white'>
              Full Post
            </button>
          </div>
        </section>
        <section className='grid lg:grid-cols-3 md:grid-rows-1 grid-cols-1 p-10 w-full lg-w-4/5 lg:mx-auto h-auto'>
          <div
            className='col-span-1 lg:mb-0 mb-4 w-full lg:h-full h-60'
            style={{
              backgroundImage: `url(${imgPlaceholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className='col-span-2 flex flex-col lg:px-10 px-0 h-full'>
            <section className='flex h-10 justify-start'>
              <p className='flex justify-center items-center px-3 text-[13px] bg-black text-white rounded-full mr-2'>
                Post
              </p>
              <p className='flex justify-center items-center mx-2 lg-text-md text-sm'>
                January 1st, 2023
              </p>
            </section>
            <section>
              <h3 className='pt-4 lg:text-xl text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, dicta.
              </h3>
            </section>
            <section className='pb-5 pt-3 font-bold lg:text-md text-sm'>
              <span className='mr-3'>#tech</span>
              <span className='mr-3'>#react</span>
              <span className='mr-3'>#JavScript</span>
            </section>
            <section className='mb-10'>
              <img src='' alt='' />
              <p className='lg:text-md text-sm'>
                By: <Link to='/'>Garrett Lockhart</Link>{' '}
              </p>
            </section>
            <button className='lg:w-[50%] px-5 py-2 rounded-full bg-black ease-in-out duration-200 hover:bg-c-blue text-white'>
              Full Post
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
