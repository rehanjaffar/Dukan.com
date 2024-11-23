import React, { createElement, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBars, FaUser,FaHouse, FaCircleUser, FaGear } from "react-icons/fa6";

export default function Admin({username}) {
  const content = [
    {
      title: "Home",
      logo:FaHouse  ,
    },
    {
      title: "Profile",
      logo:FaCircleUser
    },
    {
      title: "Setting",
      logo:FaGear
    },
    {
      title: "Logout",
      logo:FaSignOutAlt
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
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
                <li
                  key={i}
                  className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
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
              );
            })}
          </ul>
        </div>
      </div>
      {/* dashboard */}
      <div className="p-8 bg-gray-100 min-h-screen flex-1">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>Welcome {username}</p>
      </div>
    </div>
  );
}
