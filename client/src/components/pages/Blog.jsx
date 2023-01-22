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
          className='flex flex-col justify-end p-10 h-[600px] my-16 custom-card'
          style={{
            backgroundImage: `url(${imgPlaceholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='bg-gray-200 rounded-lg py-3 px-5'>
            <h2 className='text-black text-xl font-bold'>Post Title</h2>
            <p className='text-black text-md custom-para'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              explicabo sed vel minus mollitia. Vitae mollitia delectus culpa
              labore eius eos, est commodi ipsum fugiat quas? Nostrum ipsum iste
              adipisci cupiditate? Laboriosam, itaque exercitationem rerum
              cupiditate voluptatum laborum reprehenderit asperiores totam iusto
              dignissimos quibusdam, excepturi ut omnis in reiciendis magnam!
              Vero molestias officiis quaerat fugiat magni voluptas libero quasi
              nesciunt sunt ducimus illo blanditiis harum ipsa dolore porro
              voluptates voluptatum animi officia aut eligendi, possimus
              dolores! Iste deserunt exercitationem dicta repellendus laboriosam
              ducimus deleniti ratione officia, quod accusamus culpa facere
              perferendis explicabo maiores accusantium, quis atque sapiente
              consequuntur! Inventore, tenetur?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
