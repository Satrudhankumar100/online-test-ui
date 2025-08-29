import React, { useState } from "react";
import { FiMail, FiPhone, FiLock } from "react-icons/fi";
import Header from "../components/header/Header.jsx";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", form);
    alert("Registered Successfully!");
  };

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      {/* Card with hover effect */}
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-600">
              <FiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile (Optional) */}
          <div>
            <label className="block mb-1 text-gray-700">Mobile (Optional)</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-600">
              <FiPhone className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-600">
              <FiLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-gray-700">Confirm Password</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-600">
              <FiLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm password"
                className="w-full py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
          >
            Register
          </button>
        </form>

        {/* Already Registered? */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-800"
          >
            Login
          </a>
        </p>
      </div>
    </div>
    </>
    
  );
};

export default SignUp;
