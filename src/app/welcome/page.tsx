"use client";

import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-extrabold">🎉 Welcome to Comforty! 🎉</h1>
      <p className="mt-4 text-lg text-gray-200">Your Premium Shopping Experience Starts Here.</p>
      
      <Link href="/shop">
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Start Shopping 🛍️
        </button>
      </Link>
    </div>
  );
}
