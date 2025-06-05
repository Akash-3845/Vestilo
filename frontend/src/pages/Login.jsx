import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Log In");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] m-auto mt-14 sm:max-w-96 gap-4  tex-gray-800"
      action=""
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8  bg-gray-800" />
      </div>
      {currentState === "Log In" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="flex  w-full justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password?</p>
        {currentState === "Log In" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create New Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Log In")}
            className="cursor-pointer"
          >
            Already have an account?
          </p>
        )}
      </div>
      <button className="bg-black text-white px-8 py-3 font-light mt-4">
        {currentState === "Log In" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
