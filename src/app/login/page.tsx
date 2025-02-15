"use client";

import { useState } from "react";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { GiSofa } from "react-icons/gi";
import { FaCouch, FaShoppingBag, FaSmile, FaSignOutAlt } from "react-icons/fa";

export default function LoginPage() {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // Function to apply coupon
  const validCoupons = { "SAVE10": 10, "WELCOME20": 20 };
  const applyCoupon = () => {
    const upperCoupon = coupon.toUpperCase();
    if (upperCoupon in validCoupons) {
      setMessage(`🎉 Coupon applied! You got ${validCoupons[upperCoupon as keyof typeof validCoupons]}% off.`);
      setDiscountApplied(true);
    } else {
      setMessage("❌ Invalid coupon code. Try again.");
      setDiscountApplied(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <GiSofa className="text-6xl text-teal-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back!</h2>
        <p className="text-gray-600">Login to your account and enjoy shopping</p>
        
        <div className="mt-6">
          <SignIn 
            path="/login" 
            routing="path" 
            appearance={{ variables: { colorPrimary: '#0d9488' } }}
          />
        </div>

        <div className="flex items-center mt-4">
          <input 
            type="checkbox" 
            id="rememberMe" 
            checked={rememberMe} 
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Have a Coupon Code?</h3>
          <div className="flex mt-2">
            <input 
              type="text" 
              placeholder="Enter coupon code" 
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 p-2 border rounded-l-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
            />
            <button 
              onClick={applyCoupon} 
              className="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition">
              Apply
            </button>
          </div>
          {message && (
            <p className={`mt-3 text-lg font-semibold ${discountApplied ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>

        <p className="mt-6 text-gray-600 text-lg">
          Don’t have an account? 
          <Link href="/signup" className="text-teal-500 font-semibold hover:underline transition-all duration-300 hover:text-teal-700">
            Sign Up
          </Link>
        </p>
        
        <button className="mt-4 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}
