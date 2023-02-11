import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'

import './css/App.css';

function App() {
  return (
    <div className='app'>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/profile" element={<Profile />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App;
