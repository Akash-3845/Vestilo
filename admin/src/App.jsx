import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import ADD from "./pages/ADD";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
const App = () => {
  const [token, setToken] = React.useState("");
  return token == "" ? (
    <Login />
  ) : (
    <div className="bg-gray-50 min-h-screen">
      <>
        <Navbar />
        <hr className="text-gray-200" />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/add" element={<ADD />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
};

export default App;
