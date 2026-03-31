import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100 px-4 lg:px-20 py-4">
        <div class="navbar-start">
            <a class="text-3xl font-bold text-purple-700">DigiTools</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 font-medium text-gray-600">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </div>
        <div class="navbar-end gap-4">
            <div class="flex items-center gap-2 cursor-pointer text-gray-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <a class="hidden sm:inline">Login</a>
            </div>
            <a class="btn btn-primary bg-purple-600 border-none rounded-full text-white px-6">Get Started</a>
        </div>
    </div>
        </div>


    );
};

export default Navbar;