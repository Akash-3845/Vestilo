import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3  text-gray-600">
            Discover the perfect fusion of trend, comfort, and quality. At
            Vestilo, we bring you premium clothing designed to elevate your
            everyday look. From bold streetwear to timeless classics, every
            piece is crafted to reflect your unique vibe.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">
              <li className="cursor-pointer hover:text-black">Home</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="cursor-pointer hover:text-black">Contact Us</li>
            </NavLink>
            <NavLink to="/orders">
              <li className="cursor-pointer hover:text-black">Delivery</li>
            </NavLink>
            <NavLink to="/about">
              <li className="cursor-pointer hover:text-black">
                Privacy Policy
              </li>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 (884) 582-8947</li>
            <li>admin@vestilo.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2024@ Vestilo.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
