import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './header'
import Services from './services'
import Portfolio from './portfolio'
import Just_default_section from './just_default_section'
// import twiter from './twitter'
import Twitter from './twitter'
// import who_is_john_deo from 'who_is_john_deo'
import Who_is_john_deo from './who_is_john_deo'
// import tesimonials from './testimonials'
import Testimonials from './testimonials';
import Contact from './contact'
import Footer from './footer'


function App() {
  return (
    <div className="wrapper">
      <Header/>
       <Services/>
       <Portfolio/>
       <Just_default_section/>
       <Twitter/>
       <Who_is_john_deo/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </div>
       
  );
}

export default App;
