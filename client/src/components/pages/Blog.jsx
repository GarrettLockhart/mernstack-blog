import React, { useEffect, useState } from 'react';
import imgPlaceholder from '../../img/blog-post-placeholder.jpeg';
import axios from 'axios';
// import blogModal from '../modals/blogModal';

const Blog = () => {
  const [post, setPost] = useState([]);

  const [currentPost, setCurrentPost] = useState([]);

  const loadPosts = () => {
    axios
      .get('/api/post/all')
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(`Something went wrong ${err}`);
      });
  };

  const getPostData = (e) => {
    const key = document.querySelector('.blog-modal').dataset;

    axios
      .get(`/api/post/all`, {
        key: key
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(key);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col justify-center items-center my-16'>
        <h2 className='text-3xl font-bold m-2'>Welcome to the Matrix</h2>
        <p className='m-2'>made with love from the tech community</p>
      </div>
      {post.map((posts) => {
        return (
          <div
            className='container mx-auto blog-modal'
            key={posts._id}
            data-id={posts._id}
          >
            <section
              className='flex flex-col justify-end p-10 h-[600px] my-16 custom-card'
              style={{
                backgroundImage: `url(${imgPlaceholder})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={getPostData}
            >
              <div className='bg-gray-200 rounded-lg py-3 px-5'>
                <h2 className='text-black text-xl font-bold'>{posts.title}</h2>
                <p className='text-black text-md custom-para'>
                  {posts.content}
                </p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
