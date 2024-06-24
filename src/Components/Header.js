import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold text-teal-300 font-chakra-petch whitespace-nowrap">
        ROHIT MANOHAR
      </h1>
      <nav>
        <ul className="flex space-x-8 font-bold text-3xl text-teal-300 font-chakra-petch">
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
