import Header from "./Header";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

import animationData from "../animation/animation.json"; // Ensure this path is correct
import animationDataTwo from "../animation/animationTwo.json";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Footer from "./Footer";

// Define projects array
const projects = [
  {
    title: "FilmNinja",
    image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
    description:
      "I created a Netflix clone using ReactJs and Sass. This is a clone of Netflix website. And played a lot with Api.",
    githubLink: "https://github.com/rohitmanohar2108/FilmNinja",
  },
  {
    title: "Feast",
    image: "https://do6gp1uxl3luu.cloudfront.net/projects/FoodAppProject.png",
    description:
      "A simple and beautiful Restaurent Website made with Pure React JS. With some beautiful Animation and data fetching using API.",
    githubLink: "https://github.com/rohitmanohar2108/feast",
  },
  {
    title: "YouTube",
    image: "https://do6gp1uxl3luu.cloudfront.net/projects/YoutubeProject.png",
    description:
      "A simple and beautiful Restaurent Website made with Pure React JS. With some beautiful Animation and data fetching using API.",
    githubLink: "https://github.com/rohitmanohar2108/feast",
  },
];

const Browse = () => {
  const [showForm, setShowForm] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const formAnimation = useSpring({
    height: showForm ? "auto" : 0, // Set height to 'auto' when form is shown, 0 when hidden
    opacity: showForm ? 1 : 0, // Fade in/out the form
    overflowY: "hidden", // Hide any overflow content during animation
    marginTop: showForm ? 0 : -16,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo, // Use the first animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Navigation Bar */}
      <nav className="flex items-center justify-center p-4 bg-gradient-to-b from-black">
        <ul className="flex space-x-8 font-bold text-4xl text-white font-lato">
          <li className="cursor-pointer transition-transform transform hover:scale-105">
            <span onClick={() => scrollToSection("about-section")}>About</span>
          </li>
          <li className="cursor-pointer transition-transform transform hover:scale-105">
            <span onClick={() => scrollToSection("projects-section")}>
              Projects
            </span>
          </li>
          <li className="cursor-pointer transition-transform transform hover:scale-105">
            <span onClick={() => scrollToSection("contact-section")}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
      {/* First Section (Initial Splash) */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <motion.h1
            className="text-7xl text-yellow-400 font-lato cursor-pointer animate-pulse"
            whileHover={{ scale: 1.1 }}
            style={{ opacity: 1.5 }}
          >
            Best is yet to come!!
          </motion.h1>
          <motion.h2
            className="text-4xl text-white font-lato mt-4"
            whileHover={{ scale: 1.1 }}
          >
            Hi, I am Rohit, a Computer Science Student at NITK
          </motion.h2>
          <motion.div className="mt-8" whileHover={{ scale: 1.1 }}>
            <Lottie options={defaultOptions} height={400} width={400} />
          </motion.div>
        </div>
      </motion.div>
      {/* Second Section (About) */}
      <div
        id="about-section"
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black relative"
      >
        <div className="z-10 flex flex-col items-center justify-center p-16 bg-black bg-opacity-75 rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-white transform hover:scale-105">
          <h2 className="relative z-20 text-4xl text-white font-lato mb-8 transition-transform transform hover:scale-105 cursor-pointer">
            About
          </h2>
          <motion.img
            src="https://pps.whatsapp.net/v/t61.24694-24/426021548_762504602111403_3961460611984576911_n.jpg?ccb=11-4&oh=01_Q5AaIEYSGV2H-BdYx5pM2lQ0aeeQkwgRNTW516tXnMr318po&oe=667FFDA4&_nc_sid=e6ed6c&_nc_cat=105"
            alt="profile"
            className="w-56 h-56 rounded-full shadow-lg relative z-20"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 z-0 ">
            <Lottie options={defaultOptionsTwo} height={500} width={500} />
          </div>
          <div className="text-white font-lato ml-10">
            <h2 className="text-4xl text-white font-lato mb-4 ">
              Hi, I am Rohit
            </h2>
            <p className="text-xl relative z-20">
              I am a Computer Science Student at NITK. I have a deep passion for
              coding and constantly strive to enhance my skills by learning new
              technologies. I love tackling challenging problems and finding
              innovative solutions. My areas of interest include web
              development, Programming and many more. I am always eager to
              collaborate on exciting projects and learn from others in the
              field. When I am not coding, I enjoy exploring the latest tech
              trends and participating in hackathons and coding competitions.
              Let's connect and create something amazing together! Whether it's
              building a new app, diving into a complex algorithm, or simply
              exchanging knowledge, I am excited to engage with like-minded
              individuals and contribute to the tech community.
              <p className="text-xl mt-4">Connect with me :</p>
              <div className="flex mt-4 space-x-4 z-20 relative">
                <a
                  href="https://github.com/rohitmanohar2108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub className="text-4xl hover:text-gray-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedin className="text-4xl hover:text-gray-400 transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/rohitmanohar2108/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaInstagram className="text-4xl hover:text-gray-400 transition-colors" />
                </a>
                <a
                  href="https://twitter.com/imrohit372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaTwitter className="text-4xl hover:text-gray-400 transition-colors" />
                </a>
              </div>
              <p className="text-xl mt-4">Some of the Tech Stack I know:</p>
              <div className="flex mt-4 space-x-4">
                <i
                  className="devicon-react-original colored text-4xl"
                  title="React"
                ></i>
                <i
                  className="devicon-redux-plain colored text-4xl"
                  title="Redux"
                ></i>
                <i
                  className="devicon-javascript-plain colored text-4xl"
                  title="JavaScript"
                ></i>
                <i
                  className="devicon-html5-plain colored text-4xl"
                  title="HTML5"
                ></i>
                <i
                  className="devicon-css3-plain colored text-4xl"
                  title="CSS3"
                ></i>
                <i className="devicon-c-plain colored text-4xl" title="C"></i>
                <i
                  className="devicon-cplusplus-plain colored text-4xl"
                  title="C++"
                ></i>
                <i
                  className="devicon-reactrouter-plain colored text-4xl"
                  title="ReactRouter"
                ></i>
                <i
                  className="devicon-ubuntu-plain colored text-4xl"
                  title="Ubuntu"
                ></i>
                <i
                  className="devicon-linux-plain color-white text-4xl"
                  title="Linux"
                ></i>
                <i
                  className="devicon-canva-plain colored text-4xl"
                  title="Canva"
                ></i>
              </div>
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      </div>
      {/* Third Section (Projects) */}
      <div
        id="projects-section"
        className="flex items-center justify-center h-screen bg-gradient-to-tr from-black relative"
      >
        <div className="z-10 flex flex-col items-center justify-center p-16 bg-black bg-opacity-75 rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-white transform hover:scale-105">
          <h2 className="text-4xl text-white font-lato transition-transform transform hover:scale-105 cursor-pointer">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover font-lato"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 font-lato">
                    {project.description}
                  </p>
                  <div className="mt-4 py-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300 font-lato transition-transform transform hover:scale-105"
                    >
                      <FaGithub className="text-xl mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      </div>
      {/* Fourth Section (Contact) */}
      // Fourth Section (Contact)
      <div
        id="contact-section"
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-black relative"
      >
        <div className="z-10 flex flex-col items-center justify-center p-16 bg-black bg-opacity-75 rounded-lg transition-all duration-300 hover:bg-gray-400 hover:text-white transform hover:scale-105">
          {/* Toggle button for showing/hiding the form */}
          <button
            className="text-3xl bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mt-4 mb-5 transition duration-300 font-lato transition-transform transform hover:scale-105 cursor-pointer"
            onClick={toggleForm}
          >
            Let's Connect 🚀🚀
          </button>

          {/* Animated form */}
          <animated.div
            style={formAnimation}
            className="animated-form-container mt-4 w-full max-w-md "
          >
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 font-lato">
              {/* Form elements */}
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 text-black rounded"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 cursor-pointer"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </animated.div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Browse;