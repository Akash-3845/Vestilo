import React, { useContext, useState } from "react";
import Title from "../components/Title";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
const PlaceOrder = () => {
  const [value, setValue] = useState();
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] border-t">
      {/* ---------------Left Side----------------- */}
      <div className="flex flex-col gap-4 w-full sm:w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
          type="email"
          placeholder="Your Email"
        />
        <PhoneInput
          className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
          placeholder="Phone number"
          defaultCountry="IN"
          value={value}
          onChange={setValue}
        />
        <input
          className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
            type="Number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 py-1.5 px-3.5 rounded  w-full"
            type="text"
            placeholder="Country"
          />
        </div>
      </div>
      {/* ------Right Side-------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Paymetn Method Selection */}
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("strip")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method == "strip" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.stripe_logo}
                alt="strip logo"
              />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method == "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="razorpay logo"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method == "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-700 text-sm font-medium mx-4">
                Cash On Delivery
              </p>
            </div>
          </div>
          <div className="text-end w-full mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
