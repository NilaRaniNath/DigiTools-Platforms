import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({count}) => {
    return (
        <div>
            <div className="navbar bg-base-100 px-4 lg:px-20 py-4">
        <div className="navbar-start">
            <a className="text-3xl font-bold text-purple-700">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </div>
        <div className="navbar-end gap-4">
            <div className="flex items-center gap-2 cursor-pointer text-gray-600 font-medium">
               <button className="flex items-center font-semibold cursor-pointer gap-1">
          <span className="relative">
            {""}
            <span className="absolute left-6 -top-3 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-white text-sm">
              {count}
            </span>
            <FiShoppingCart className="text-3xl" />
          </span>{""}
        </button>
                <a className="hidden sm:inline">Login</a>
            </div>
            <a className="btn btn-primary bg-purple-600 border-none rounded-full text-white px-6">Get Started</a>
        </div>
    </div>
        </div>


    );
};

export default Navbar;