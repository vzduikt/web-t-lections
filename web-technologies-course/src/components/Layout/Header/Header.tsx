import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">WEB-технології та WEB-дизайн</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">Головна</Link>
            </li>
            <li>
              <Link to="/lecture1" className="hover:text-blue-200">Лекція 1</Link>
            </li>
            <li>
              <Link to="/lecture2" className="hover:text-blue-200">Лекція 2</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;