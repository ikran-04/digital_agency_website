import React from "react";

//icons
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1>8KRA</h1>
      <ul className="flex items-center space-x-8">
        <li>Home</li>
        <li>Services</li>
        <li>Prices</li>
        <li>Blog</li>
        <li>contact</li>
        <button>
          <IoSearch />
        </button>
        <button>
          <BsThreeDotsVertical />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
