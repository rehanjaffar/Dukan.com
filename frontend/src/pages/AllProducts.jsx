import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Products/AllProducts'
import Popup from '../components/Popup/Popup';
import Footer from '../components/Footer/Footer';

export default function AllProducts({ username }) {
  const [orderPopup, setOrderPopup] = useState(false);


  const handleOrderPopup = () => setOrderPopup(!orderPopup);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
       <Navbar handleOrderPopup={handleOrderPopup} username={username} />
       <div>
        <ProductList/>
       </div>
       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
       <Footer/>
    </div>
  )
}
