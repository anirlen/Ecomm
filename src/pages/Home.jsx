import React from 'react';
import Announcement from '../components/Announcements';
import Items from '../components/Items';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Threed from '../components/Threed';
import Contact from "../components/Contact";
import About from '../components/about';


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <About/>
        <Items/>
        <Threed/>
        <Contact/>
    </div>
  )
}

export default Home