// react
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//logo and style
import logo from './images/mba-distilled-logo-sml.png'
import './App.css';

// index components
import Header from './components/Header'
import Footer from './components/Footer'
// page components
import Home from './components/Home'
import VideoPage from './components/VideoPage'

function App() {
  return (
    <>
      <Router>
        <Header logo={logo} />
        
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/mba-distilled' element={ <Home /> }/>
          <Route path='/videos' element={ <VideoPage /> }/>
        </Routes>

        <Footer logo={logo} />
      </Router>
    </>
  );
}

export default App;
