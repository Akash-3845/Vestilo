import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xl sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          className="w-12 m-auto mb-3.5"
          src={assets.exchange_icon}
          alt="exchangeicon"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-3.5"
          src={assets.quality_icon}
          alt="exchangeicon"
        />
        <p className="font-semibold">7 Day Return Policy</p>
        <p className="text-gray-400">We provide 7 Days free return policy</p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-3.5"
          src={assets.support_img}
          alt="exchangeicon"
        />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
