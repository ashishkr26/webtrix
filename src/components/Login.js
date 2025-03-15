import React from "react";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleSubmit = () => {
    console.log("submit called");
  };
  return (
    <div>
      <div>
        {isSignInForm && (
          <input
            className="my-2 p-2 border border-gray-700 rounded-md text-sm md:text-base xs:text-xs"
            type="text"
            placeholder="Your Name"
          />
        )}
        <input
          className="my-2 p-2 border border-gray-700 rounded-md text-sm md:text-base xs:text-xs"
          type="email"
          placeholder="Email Id"
        />
        <input
          className="my-2 p-2 border border-gray-700 rounded-md text-sm md:text-base xs:text-xs"
          type="password"
          placeholder="Password"
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
