
import React, { useState } from 'react';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import axios from 'axios';

const SignUp = () => {
  const [data, setData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    data.name.trim() !== '' &&
    data.email.trim() !== '' &&
    data.password.trim() !== '' &&
    data.password === data.confirmPassword;

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/register', data);
      console.log(response.data);
    } catch (error) {
      console.error('signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="bg-gray-900 shadow-xl rounded-lg p-8 w-full max-w-md transform transition-all ">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6 animate-fadeIn">Create an Account</h2>
        <p className="text-center text-gray-400 mb-8 animate-fadeIn">Sign up to explore the wild side!</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={data.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-10 text-gray-400 cursor-pointer hover:text-white">
              {showPassword ? <BiHide size={20} /> : <BiShowAlt size={20} />}
            </span>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={data.confirmPassword}
              placeholder="Confirm your password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-10 text-gray-400 cursor-pointer hover:text-white">
              {showConfirmPassword ? <BiHide size={20} /> : <BiShowAlt size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 rounded-lg font-semibold transition-all ${
              isValid
                ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 text-black'
                : 'bg-gray-700 cursor-not-allowed text-gray-500'
            }`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

