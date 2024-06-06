import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Services' },
    { id: 3, text: 'Blog' },
    { id: 4, text: 'About Us' },
    { id: 5, text: 'Contact Us' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-purple-500">AbhiVic</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          {navItems.map((item) => (
            <li key={item.id} className="p-4 hover:bg-purple-500 rounded-xl duration-300 cursor-pointer hover:text-pink-800">
              {item.text}
            </li>
          ))}
        </ul>
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <button className="text-gray-800 hover:text-pink-800 cursor-pointer duration-500">Login</button>
          <button className="text-gray-800 hover:text-pink-800 cursor-pointer duration-500">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
