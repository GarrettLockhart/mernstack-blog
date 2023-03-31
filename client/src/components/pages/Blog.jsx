import React, { useEffect, useState } from 'react';
import imgPlaceholder from '../../img/blog-post-placeholder.jpeg';
import axios from 'axios';
import BlogModal from '../modals/BlogModal';

const Blog = () => {
  const [post, setPost] = useState([]);

  const [currentPost, setCurrentPost] = useState({});

  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    const element = e.target.closest('[data-id]');
    const title = element.querySelector('h2').textContent;
    const content = element.querySelector('p').textContent;

    if ((!title, !content)) {
      return;
    }

    setCurrentPost({
      title: title,
      content: content
    });

    setShowModal(!showModal);
  };

  useEffect(() => {
    axios
      .get('/api/post/all')
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(`Something went wrong ${err}`);
      });
  }, []);

  return (
    <>
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
            id={posts._id}
            onClick={handleModal}
          >
            <section
              className='flex flex-col justify-end p-10 h-[600px] my-16 custom-card'
              style={{
                backgroundImage: `url(${imgPlaceholder})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
      <BlogModal
        title={currentPost.title}
        content={currentPost.content}
        showModal={showModal}
      />
    </>
  );
};

export default Blog;
