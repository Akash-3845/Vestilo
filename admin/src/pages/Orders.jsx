import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  // 🔑 Helper: group items by product (merge sizes & quantity)
  const groupItems = (items) => {
    const grouped = {};
    items.forEach((item) => {
      const key = item._id + "-" + item.name;
      if (!grouped[key]) {
        grouped[key] = {
          ...item,
          quantity: item.quantity,
          sizes: [item.size],
        };
      } else {
        grouped[key].quantity += item.quantity;
        if (!grouped[key].sizes.includes(item.size)) {
          grouped[key].sizes.push(item.size);
        }
      }
    });
    return Object.values(grouped);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Order Page</h3>
      <div>
        {orders.map((order, index) => {
          const groupedItems = groupItems(order.items);
          return (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr_1fr] gap-5 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-5 text-sm text-gray-700"
            >
              {/* --- Product Images --- */}
              <div className="flex flex-col gap-2">
                {groupedItems.map((item, idx) => (
                  <img
                    key={idx}
                    className="w-16 h-16 object-cover border rounded"
                    src={item.image[0]}
                    alt={item.name}
                  />
                ))}
              </div>

              {/* --- Product Details --- */}
              <div>
                {groupedItems.map((item, idx) => (
                  <p key={idx} className="py-0.5 font-medium">
                    {item.name}
                    <p className="text-gray-500 text-sm font-normal">
                      Qty: {item.quantity} Sizes: {item.sizes.join(", ")}
                    </p>
                  </p>
                ))}
                <p className="mt-3 mb-2 font-medium">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div>
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>

              {/* --- Order Info --- */}
              <div>
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? "Done" : "Pending"}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>

              {/* --- Price + Status --- */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-semibold">
                  {currency}
                  {order.amount}
                </p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="p-2 border rounded font-medium"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
