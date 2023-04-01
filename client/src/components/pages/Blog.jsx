import React, { useEffect, useState } from 'react';
import imgPlaceholder from '../../img/blog-post-placeholder.jpeg';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const Blog = (props) => {
  const [post, setPost] = useState([]);

  const [currentPost, setCurrentPost] = useState({});

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = (e, open) => {
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

    setOpen(!open);
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
            onClick={handleOpen}
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
                <h2 className='text-black text-xl font-bold'>
                  {currentPost.title}
                </h2>
                <p className='text-black text-md custom-para'>
                  {currentPost.content}
                </p>
              </div>
            </section>
          </div>
        );
      })}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {currentPost.title}
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              {currentPost.content}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Blog;
