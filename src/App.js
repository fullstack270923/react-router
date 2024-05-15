import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Home } from './components/Home'
import { About } from './components/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Contact } from './components/Contact'
import Post from './components/Post';

const App = () => {
    return (
      <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/posts/:id' element={<Post />} />
          </Routes>
      </div>
    );
}

export default App;
