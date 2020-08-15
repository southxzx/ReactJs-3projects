import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import './resources/styles.css'
import VunueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Location from './components/location';
import Pricing from './components/pricing';
import Footer from './components/header_footer/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{ height:"1500px"}}>

      <Element name="header">
        <Header/>
      </Element>
       
      <Element name="featured">
        <Featured/> 
      </Element>

      <Element name="venuenfo">
        <VunueNfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>     
      
      <Element name="pricing">
        <Pricing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>     
      
      <Element name="footer">
        <Footer/>
      </Element>
      
    </div>
  );
}

export default App;
