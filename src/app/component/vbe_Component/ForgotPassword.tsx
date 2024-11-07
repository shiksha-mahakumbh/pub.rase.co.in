"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setButtonDisabled(true);

      console.log("Sending password reset request...");
      const response = await axios.post("https://vie-rase-backend.onrender.com/api/reset-password", { email });
      
      console.log("Password reset response:", response.data);
      toast.success("Password reset link sent to your email!");
      router.push("/login");
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error("Failed to send password reset link. Please try again.");
    } finally {
      setLoading(false);
      setButtonDisabled(false);
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
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-primary">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-primary">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg email-input text-black"
              required
              placeholder="Enter Your Email"
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
            {buttonDisabled && (
              <div className="flex justify-center items-center px-2">
                <div className="loader ease-linear rounded-full border-2 border-t-2 border-black h-6 w-6 animate-spin"></div>
                <div className="ps-3">Loading...</div>
              </div>
            )}
            {!buttonDisabled && <div>Send Reset Link</div>}
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Remembered your password?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
        <p className="mt-2 text-center text-black">
          Need an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
