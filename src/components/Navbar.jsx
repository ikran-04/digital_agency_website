import React from "react";

//icons
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1>8KRA</h1>
      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex items-center space-x-8">
          <li>Home</li>
          <li>Services</li>
          <li>Prices</li>
          <li>Blog</li>
          <li>contact</li>
        </ul>
        <div className="space-x-2">
          <button>
            <IoSearch />
          </button>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
