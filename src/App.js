import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Home } from './components/Home'
import { About } from './components/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Navbar</h1>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact/:id' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/posts/:id' element={<About />} />
          </Routes>
        </header>
      </div>
    );
}

export default App;
