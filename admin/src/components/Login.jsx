import React from "react";
import { useState } from "react";
import Title from "../components/Title";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-white items-center justify-center flex flex-col border-gray-200 border shadow-md rounded-lg px-8 py-6 max-w-md">
        <Title text1={"Admin"} text2={"Login"} />
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className=" text-md font-medium text-gray-700 mb-2">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" rounded-md w-full px-3 py-2 border border-gray-300"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className=" mb-3 min-w-72">
            <p className="text-md font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" rounded-md w-full px-3 py-2 border border-gray-300"
              type="password"
              placeholder="your password"
              required
            />
          </div>
          <button
            className="bg-black text-white w-full px-4 mt-2 py-2 rounded "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
