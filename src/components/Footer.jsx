import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-7 space-x-10">
        <div className="space-y-6 ml-3 p-2">
          <img src="path_to_image" alt="Logo" className="w-full h-auto" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Branding</a></li>
            <li><a href="#" className="hover:text-gray-400">Mobile App</a></li>
            <li><a href="#" className="hover:text-gray-400">Web Design</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Blogs</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Design Trend</a></li>
            <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-400">Design Process</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Guides</a></li>
            <li><a href="#" className="hover:text-gray-400">Partner Network</a></li>
            <li><a href="#" className="hover:text-gray-400">Developers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Testimonials</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2022 — Design and Develop by Agency, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
