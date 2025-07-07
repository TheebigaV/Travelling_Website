'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/travel'); // Navigate to route planning page
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800 p-6">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sri Lanka Travel Planner</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Discover, Plan & Explore Beautiful Sri Lanka – Smart Travel Routes, Hotels, Vehicles, and More!
        </p>
        <button
          onClick={handleStart}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Plan Youfb Trip
        </button>
      </section>

      {/* Sections Placeholder */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">📍 Nearby Places</h2>
          <p>Find tourist attractions near your current location.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">🧭 Travel Routes</h2>
          <p>Visualize your travel path through connected places.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">🚗 Vehicle Hire</h2>
          <p>See available vehicles to hire near you.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">🏨 Hotels & Restaurants</h2>
          <p>Explore nearby places to stay and eat.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">🌟 User Reviews</h2>
          <p>Read or leave 5-star ratings after your trip.</p>
        </div>
      </section>
    </main>
  );
}
