import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { toast } from "react-toastify";
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
        let groupedOrders = {};

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            const key = `${item._id}-${item.name}`; // unique key per product

            if (!groupedOrders[key]) {
              groupedOrders[key] = {
                ...item,
                status: order.status,
                payment: order.payment,
                paymentMethod: order.paymentMethod,
                date: order.date,
                quantity: item.quantity,
                sizes: [item.size],
              };
            } else {
              // If product already exists, update quantity and sizes
              groupedOrders[key].quantity += item.quantity;
              if (!groupedOrders[key].sizes.includes(item.size)) {
                groupedOrders[key].sizes.push(item.size);
              }
            }
          });
        });

        // ✅ Sort by date (newest first)
        const sortedOrders = Object.values(groupedOrders).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setOrderData(sortedOrders);
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
                alt="product"
              />
              <div>
                <p className="sm:text-base font-medium">{product.name}</p>
                <div className="flex items-center text-base gap-3 mt-2 text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {product.price}
                  </p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Sizes: {product.sizes.join(", ")}</p>
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
