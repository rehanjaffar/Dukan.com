import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export default function Home({username}) {
    const [orderPopup, setOrderPopup] = useState(false);
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await axios.post("/api/auth/logout", {}, { withCredentials: true });
       
       console.log('logout');
       navigate('/login')
       
      } catch (err) {
        console.error("Logout failed", err);
      }
    };

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} username={username} handleLogout={handleLogout} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
    
  )
}
