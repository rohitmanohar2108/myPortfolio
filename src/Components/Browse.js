import React from "react";
import Header from "./Header";

const Browse = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* First Image Section */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-9xl text-fjalla-one text-white">Best is yet to come!!</h1>
          <h2 className="text-4xl text-white font-zilla-slab mt-4">Hi, I am Rohit A Computer Science Student At nitk</h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Second Image Section */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black">
        <img
          src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Third Image Section */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black">
        <img
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Browse;
