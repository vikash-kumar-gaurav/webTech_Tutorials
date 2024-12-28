import axios from 'axios';
import React, { useState } from 'react';
import { BiHide, BiShowAlt } from 'react-icons/bi';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', data);
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const validValues = Object.values(data).every((el) => el.trim() !== '');

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md transform transition-all ">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 animate-fadeIn">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-8 animate-fadeIn">Login to continue your learning journey.</p>
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={data.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-10 text-gray-500 cursor-pointer hover:text-gray-300">
              {showPassword ? <BiHide size={20} /> : <BiShowAlt size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={!validValues}
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
              validValues
                ? 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
