import React from 'react'
import "./HomePage.css";

import Navbar from './Navbar/Navbar'
import Landing from  './Landing/Landing'
import About from './About/About'
import Cadc from './Cadc/Cadc'
import Photogallery from './lf/Photogallerylf'
import Events from './Events/Events/Events'
import Clubs from './Clubs/Clubs'
import Footer from './Footer/Footer/Footer'

function HomePage() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <About/>
      <Cadc/>
      <Photogallery/>
      <Events/>
      <Clubs/>
      <Footer/>
    </>
  )
}

export default HomePage