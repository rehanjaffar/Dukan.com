import React, { createElement, useState } from "react";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import { FaBars, FaUser,FaHouse, FaCircleUser, FaGear, FaBagShopping } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";


export default function Admin({username}) {
  const content = [
    {
      title: "Home",
      logo:FaHouse  ,
      link:"/",
      func:false
    },
    {
      title: "Add",
      logo:FaPlus  ,
      link:"add",
      func:false
    },
    {
      title: "Products",
      logo:FaBagShopping  ,
      link:"products",
      func:false
    },
    {
      title: "Profile",
      logo:FaCircleUser,
      func:false
    },
    {
      title: "Setting",
      logo:FaGear,
      func:false
    },
    {
      title: "Logout",
      logo:FaSignOutAlt,
      func:true

    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const handleLogout = () => {
    logout(); // Calling the logout function
  };

  return (
    <div className="flex">
      {/* sidebar */}
      <div
        className={` md:w-64 bg-gray-800 transition-width duration-300 text-white ${
          isOpen ? "w-40" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2
            className={`text-xl font-bold md:block ${
              isOpen ? "block" : "hidden"
            }`}
          >
            MyApp
          </h2>
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div>
          <ul>
            {content.map((item, i) => {
              return (
              
                <Link to={item.link || '#'} key={i} >
                <li
                  key={i}
                  className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                 onClick={item.func ? handleLogout:undefined}
                >
                 {
                    createElement(item.logo)
                 }
                  <span
                    className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}
                  >
                    {item.title}
                  </span>
                </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      {/* dashboard */}
      <div className="p-8 bg-gray-100 min-h-screen flex-1">
        <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>Welcome {username}</p>
        </div>
       <Outlet/>
      </div>
    </div>
  );
}
