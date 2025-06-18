import React from "react";
import { assets } from "../assets/assets";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%] ">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => {
          setToken("");
          localStorage.removeItem("token");
        }}
        className="rounded-full bg-gray-600 text-white px-5 py2 sm:px-7 sm:py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
