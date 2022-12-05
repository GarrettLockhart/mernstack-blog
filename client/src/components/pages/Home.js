import React from 'react';

const Home = () => {
  fetch('/api/user', { method: 'GET' }).then((response) => {
    console.log(response);
  });

  return <div>Home</div>;
};

export default Home;
