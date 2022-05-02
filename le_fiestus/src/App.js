import React from 'react'
import "./App.css";

import Navbar from './Components/Navbar/Navbar'
import Landing from  './Components/Landing/Landing'
import About from './Components/About/About'
import Cadc from './Components/Cadc/Cadc'
import Photogallery from './Components/lf/Photogallerylf'
import Events from './Components/Events/Events/Events'
import Clubs from './Components/Clubs/Clubs'
import Sponsors from './Components/Sponsors/Sponsors'
import Footer from './Components/Footer/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <About/>
      <Cadc/>
      <Photogallery/>
      <Events/>
      <Clubs/>
      <Sponsors/>
      <Footer/>
    </>
  )
}

export default App