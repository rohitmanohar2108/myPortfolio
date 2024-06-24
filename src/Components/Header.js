import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-4xl font-bold text-yellow-400 cursor-pointer font-chakra-petch whitespace-nowrap bg-gradient-to-b from-black transition-transform transform hover:scale-105 cursor-pointer">
        ROHIT MANOHAR
      </h1>
      <nav>
        <ul className="flex space-x-8 font-bold text-4xl text-yellow-400 font-chakra-petch ">
          <li className="transition-transform transform hover:scale-105 cursor-pointer">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="transition-transform transform hover:scale-105 cursor-pointer">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
