import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItems.push(item);
          });
        });
        setOrderData(allOrderItems);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between py-8 border-t text-gray-700 border-b "
          >
            <div className=" flex items-start text-sm gap-6">
              <img
                className="w-16 sm:w-20"
                src={product.image[0]}
                alt="product image"
              />
              <div>
                <p className="sm:text-base font-medium">{product.name}</p>
                <div className="flex items-center text-base gap-3 mt-2 text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {product.amount}
                  </p>
                  <p>Quantity:{product.quantity}</p>
                  <p>Size:{product.size}</p>
                </div>
                <p className="mt-2">
                  Date:{" "}
                  <span className="text-gray-400">
                    {format(new Date(product.date), "dd MMM yyyy")}
                  </span>
                </p>
                <p className="mt-2">
                  Payment Method:{" "}
                  <span className="text-gray-400">{product.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{product.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
