import React from 'react';

const MainContent = () => {
  return (
    <main className="p-8 text-black min-h-screen" style={{ background: 'radial-gradient(circle at right bottom, rgba(123, 27, 225, 0.8) 2%, rgba(64, 77, 250, 0.7) 20%, rgba(255, 255, 255, 0.5) 30%) , radial-gradient(circle at 4% 8%, rgba(255, 199, 78, 0.5) 2%, rgba(255, 50, 103, 0.7) 18%, rgba(255, 255, 255, 0.5) 30%)' }}>
      <section className="flex flex-row lg:flex-row justify-center items-start mb-20 mt-10">  
        <div className="flex flex-row lg:flex-row space-y-10 lg:space-y-0 lg:space-x-4 items-center">
          <img src="path_to_circle_image" alt="Design Circle" className="w-20 h-20" />
          <div className="flex flex-row gap-4 mt-10 lg:mt-0">
            <div className="bg-yellow-400 w-12 flex flex-row justify-center items-center rounded-lg" style={{ height: '200px' }}>
              <span className="transform rotate-90 text-white mb-2">Competitor Analysis</span>
            </div>
            <div className="bg-blue-400 w-12 flex flex-row justify-center items-center rounded-lg" style={{ height: '160px' }}>
              <span className="transform rotate-90 text-white mb-2">Modern Design</span>
            </div>
            <div className="bg-red-400 w-12 flex flex-row justify-center items-center rounded-lg" style={{ height: '120px' }}>
              <span className="transform rotate-90 text-white mb-2">User Friendly</span>
            </div>
          </div>
        </div>
        <div className="ml-8 text-left mt-10 lg:mt-0">
          <h2 className="text-3xl font-semibold">
            We provide a wide range of <strong>business services</strong>
          </h2>
          <ul className="mt-4 space-y-2 max-w-2xl">
            <li className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
            <li className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
            <li className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
          </ul>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Let's collaborate with us!</h2>
        <p className="text-black mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email here..." className="p-2 border border-gray-300 rounded-l-md text-black" />
          <button className="bg-purple-600 text-white p-2 rounded-r-md">Submit</button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
