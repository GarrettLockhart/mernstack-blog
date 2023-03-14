import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Nav/Navbar';
import Blog from './components/pages/Blog';
import Create from './components/pages/Create';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
