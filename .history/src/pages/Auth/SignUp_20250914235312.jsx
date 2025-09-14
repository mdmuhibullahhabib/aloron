import React, { useContext } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { user, signUp, setUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocatio();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const role = "student";

    const userData = { name, email, role }
    setError('');
    if (password.length < 5) {
      setError("Must be more the 5 character long");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
      return;
    }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name })
          .then(() => {
            axiosPublic.post('/users', userData)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('add to database', res.data)
                  setUser({ ...user, displayName: name });
                  navigate("/");
                  Swal.fire({
                    title: "Registration Successfully!",
                    icon: "success",
                    draggable: true
                  });
                }
              })
          })
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#013c36] px-4 py-10">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 space-y-6">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">আলোড়নে রেজিস্ট্রেশন করুন </h2>
          <p className="text-gray-500 text-sm mt-2">
            Create an account to access all features.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
            required
          />
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
            Create Account
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm">
          Already registered?{" "}
          <Link
            to="/auth/signin"
            className="text-orange-500 font-semibold hover:underline"
          >
            SIGN IN
          </Link>
        </p>
      </div>
    </div>

  );
};

export default SignUp;