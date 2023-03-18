import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [post, setPost] = useState({ title: '', content: '' });

  const headers = {
    'Content-Type': 'application/json'
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        '/api/post/create',
        {
          title: post.title,
          content: post.content
        },
        headers
      )
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
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
