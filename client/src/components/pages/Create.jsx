import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [post, setPost] = useState({ title: '', content: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/post/create', {
        title: post.title,
        content: post.content
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(`Something went wrong: ${err}`);
      });
  };

  const handleChange = (e) => {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    setPost({
      title: title,
      content: content
    });
  };

  return (
    <div>
      <div className='flex justify-center h-10 my-10'>
        <h2 className='text-2xl font-bold uppercase'>Create Post:</h2>
      </div>
      <div className='container mx-auto'>
        <form
          className='flex flex-col w-[50%] mx-auto'
          onSubmit={handleFormSubmit}
        >
          <label className='uppercase font-bold' htmlFor='post-title'>
            Post Title:
          </label>
          <input
            className='mt-1 mb-4 p-2 rounded hover:ring-1 outline-blue-500'
            type='text'
            id='post-title'
            onChange={handleChange}
          />
          <label className='uppercase font-bold' htmlFor='post-content'>
            Content:
          </label>
          <textarea
            className='mt-1 mb-4 p-2 rounded hover:ring-1 outline-blue-500'
            name='post-content'
            id='post-content'
            cols='30'
            rows='10'
            onChange={handleChange}
          ></textarea>
          <button className='uppercase text-white py-3 bg-c-teal hover:bg-c-blue ease-in-out duration-200'>
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
