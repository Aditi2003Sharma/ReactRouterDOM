import React from 'react'
import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
