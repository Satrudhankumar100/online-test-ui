import React, { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import axios from "axios";
import { Baseurl } from "../utils/BaseUrl.js";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { RingLoader } from "react-spinners";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const isAuthenticated = useIsAuthenticated()
  const [loader, setLoader] = useState(false);


  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (form.email == '' || form.password == '') { alert("please fill all the fields"); return; }
    try {
      const resp = await axios.post(`${Baseurl}/auth/login`, form, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(resp.data);
      setLoader(false);
      if (signIn({
        auth: {
          token: resp.data,
          type: 'Bearer'
        },

        userState: {
          name: 'React User',
          uid: 123456
        }
      })) {
        // Redirect or do-something
        navigate("/testseries")

      } else {
        //Throw error
      }

      console.log(resp.data);
    } catch (err) {
      setLoader(false);
      alert("Invalid User Id and password");
    }


  };

  useEffect(() => {
    if (isAuthenticated()) {
      // Redirect to Dashboard

      navigate("/testseries")
    }

  }, [])

  return (


    <>
     {loader && <>
          <div className='fixed top-0 left-0 flex w-full min-h-screen justify-center items-center bg-white z-50'>
              <div className='flex justify-center flex-col items-center gap-4 text-blue-500'>
                <div>
                <RingLoader size={150} color='#00f' />
                </div>
                <div>Loading...</div>

              </div>
          </div>
      </>}
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
        {/* Card */}
        <div
          className="relative bg-white shadow-2xl rounded-lg overflow-hidden w-80 sm:w-96 
        transform transition duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        >
          {/* White Card Content */}
          <div className="relative z-10 bg-white p-8 rounded-tr-[80px] rounded-bl-[80px]">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
              Login
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">
                  {/* User Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="User name / Email"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">
                  {/* Lock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c-1.104 0-2-.896-2-2V7a4 4 0 118 0v2c0 1.104-.896 2-2 2h-4zM6 11h12v10H6z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
              >
                LOG IN NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center text-sm text-gray-500">
              log in via
              <div className="flex justify-center gap-4 mt-2">
                {/* Instagram */}
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.95V14.9h-2.5v-2.9h2.5v-2.2c0-2.5 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.5h-1.26c-1.24 0-1.63.77-1.63 1.56v1.84h2.78l-.44 2.9h-2.34v7.05A10 10 0 0022 12z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.014.197.014.394.014.59 0 6.013-4.576 12.94-12.94 12.94A12.88 12.88 0 010 19.54c.308.036.602.05.923.05a9.13 9.13 0 005.662-1.95 4.56 4.56 0 01-4.256-3.158c.28.042.56.07.854.07.406 0 .812-.056 1.19-.154a4.55 4.55 0 01-3.65-4.463v-.056c.61.34 1.31.548 2.056.574a4.54 4.54 0 01-2.025-3.79c0-.84.224-1.61.61-2.282a12.91 12.91 0 009.37 4.754c-.07-.336-.105-.686-.105-1.036a4.55 4.55 0 014.55-4.55c1.31 0 2.493.548 3.324 1.437a8.95 8.95 0 002.886-1.097 4.52 4.52 0 01-2.002 2.513A9.01 9.01 0 0024 6.557a9.3 9.3 0 01-2.367 2.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
