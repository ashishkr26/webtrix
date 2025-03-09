import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
      <input
              className="my-2 p-2 border border-gray-700 rounded-md text-sm md:text-base xs:text-xs"
              type="text"
              placeholder="Your Name"
            
            />
            <input className="my-2 p-2 border border-gray-700 rounded-md text-sm md:text-base xs:text-xs"
            type="password"
            placeholder='Password'
            />
            <div><button>Submit</button></div>
      </div>
    </div>
  )
}

export default Login
