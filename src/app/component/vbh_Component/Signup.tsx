"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    institution: "",
    areaOfStudy: "",
    role: "student", // Default role set to "student"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Password and confirm password do not match");
      return;
    }

    try {
      setLoading(true);
      setButtonDisabled(true);

      // Replace '/api/user/signup' with your actual API endpoint
      const response = await axios.post("https://vie-rase-backend.onrender.com/api/signup", user);

      if (response.status === 200) {
        toast.success("Signup successful!");
        router.push("/login");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "An error occurred during signup.");
    } finally {
      setButtonDisabled(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-color relative">
      <div className="w-full sm:max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-xl form-container relative">
        <Link
          href="/"
          className="text-white text-xl px-4 py-2 bg-primary rounded-lg absolute left-0 top-0 cursor-pointer"
        >
          X
        </Link>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-primary">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg email-input text-black"
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-primary">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg email-input text-black"
                required
                placeholder="Your Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} className="text-black" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="text-black" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-primary">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg email-input text-black"
                required
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2"
              >
                {showConfirmPassword ? (
                  <FontAwesomeIcon icon={faEye} className="text-black" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="text-black" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="institution" className="block text-primary">Institution or University</label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={user.institution}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg email-input text-black"
              placeholder="Institution or University"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-primary">Role</label>
            <select
              id="role"
              name="role"
              value={user.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg email-input text-black"
            >
              <option value="student">Author</option>
              <option value="author">Editor</option>
              <option value="admin">Journal Officer</option>
              <option value="reader">Reader</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="areaOfStudy" className="block text-primary">Primary Area of Study</label>
            <input
              type="text"
              id="areaOfStudy"
              name="areaOfStudy"
              value={user.areaOfStudy}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg email-input text-black"
              placeholder="Primary Area of Study"
            />
          </div>
          <button
            disabled={buttonDisabled}
            type="submit"
            className={
              buttonDisabled
                ? `w-full bg-orange-200 font-semibold p-2 rounded-lg hover:bg-orange-200 submit-button text-black`
                : `w-full bg-primary font-semibold p-2 rounded-lg hover:bg-primary submit-button text-primary-color`
            }
          >
            {loading ? (
              <div className="flex justify-center items-center px-2">
                <div className="loader ease-linear rounded-full border-2 border-t-2 border-black h-6 w-6 animate-spin"></div>
                <div className="ps-3">Loading...</div>
              </div>
            ) : (
              <div>Sign Up</div>
            )}
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Already Registered?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
