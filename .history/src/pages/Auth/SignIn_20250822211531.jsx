import React from 'react'
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth';

const SignIn = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn } = useAuth()

   const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: 'please try again with valid email & password',
          icon: 'error',
          draggable: true
        })
      });
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-[#013c36] px-4 py-10">
  <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 space-y-6">
    
    {/* Header */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800">লগ ইন করুন</h2>
      <p className="text-gray-500 text-sm mt-2">
        Welcome back! Please sign in to continue.
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Login
      </button>
    </form>

    {/* Footer */}
    <p className="text-center text-gray-600 text-sm">
      Don’t have an account?{" "}
      <Link
        to="/auth/signup"
        className="text-orange-500 font-semibold hover:underline"
      >
        Create an account
      </Link>
    </p>
  </div>
</div>

  );
};

export default SignIn;