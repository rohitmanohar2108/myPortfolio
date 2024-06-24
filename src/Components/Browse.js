import React from "react";
import Header from "./Header";

const Browse = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* First Image Section */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 ">
          <h1 className="text-9xl text-white font-chakra-petch transition-transform transform hover:scale-105 cursor-pointer">
            Best is yet to come!!
          </h1>
          <h2 className="text-4xl text-white font-chakra-petch mt-4">
            Hi, I am Rohit, a Computer Science Student at NITK
          </h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Second Image Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-tr from-black">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-16 bg-black bg-opacity-75 rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-black transform hover:scale-105">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/426021548_762504602111403_3961460611984576911_n.jpg?ccb=11-4&oh=01_Q5AaIEYSGV2H-BdYx5pM2lQ0aeeQkwgRNTW516tXnMr318po&oe=667FFDA4&_nc_sid=e6ed6c&_nc_cat=105"
              alt="profile"
              className="w-56 h-56 rounded-full shadow-lg"
            />
            <div className="text-white font-chakra-petch ml-10">
              <h2 className="text-4xl mb-4">Hi, I am Rohit</h2>
              <p className="text-xl">
                I am a Computer Science Student at NITK. I have a deep passion
                for coding and constantly strive to enhance my skills by
                learning new technologies. I love tackling challenging problems
                and finding innovative solutions. My areas of interest include
                web development, artificial intelligence, and data science. I am
                always eager to collaborate on exciting projects and learn from
                others in the field. When I am not coding, I enjoy exploring the
                latest tech trends and participating in hackathons and coding
                competitions. Let's connect and create something amazing
                together! Whether it's building a new app, diving into a complex
                algorithm, or simply exchanging knowledge, I am excited to
                engage with like-minded individuals and contribute to the tech
                community.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      </div>

      {/* Third Image Section */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black">
        <img
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Browse;
