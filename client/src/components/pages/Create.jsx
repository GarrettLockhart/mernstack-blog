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
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value
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
          <label htmlFor='post-title'>Post Title:</label>
          <input
            className='my-2 py-2 px-2'
            type='text'
            id='post-title'
            onChange={handleChange}
          />
          <label htmlFor='post-content'>Content:</label>
          <textarea
            className='my-2'
            name='post-content'
            id='post-content'
            cols='30'
            rows='10'
            onChange={handleChange}
          ></textarea>
          <button className='uppercase'>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
