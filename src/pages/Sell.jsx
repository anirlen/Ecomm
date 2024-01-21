import React from 'react';
import Announcement from '../components/Announcements';
import Navbar from '../components/Navbar';
import SellForm from '../components/SellForm';




const Sell = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <SellForm/>
    </div>
  )
}

export default Sell;