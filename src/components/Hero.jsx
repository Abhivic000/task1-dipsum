import React from 'react';

const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center text-black bg-[radial-gradient(circle_at_right_bottom,rgba(255,199,78,0.5)_2%,rgba(255,50,103,0.7)_18%,rgba(255,255,255,0.5)_30%),radial-gradient(circle_at_4%_8%,rgba(123,27,225,0.8)_2%,rgba(64,77,250,0.7)_20%,rgba(255,255,255,0.5)_30%)] pt-20"
    >
      <h1 className="text-5xl mb-4 mt-20">
        We make <span className="italic font-semibold">things</span> <span className="font-bold">beyond</span> the next <span className="font-bold italic">level</span>
      </h1>
      <p className="text-lg mb-6 max-w-2xl px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-lg shadow-lg text-lg">
        START A PROJECT
      </button>

      {/* Project Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:space-x-7 mt-12 px-4 lg:px-0">
        <div className="bg-gray-300 w-full lg:w-2/5 h-80 lg:h-[30rem] rounded-lg flex justify-center items-center mb-8 lg:mb-0 lg:ml-2">
          <p>Image Placeholder</p>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-3/5 lg:space-x-7">
          <div className="bg-[#EC4F78] p-8 rounded-lg shadow-md w-full lg:w-1/2 box-border">
            <div className="mb-4">
              <input className="bg-white rounded px-3 py-2 w-full mb-2" type="text" placeholder="Search" />
              <h2 className="text-xl font-bold text-white">Popular Profession</h2>
            </div>
            <div className="flex flex-row gap-3">
              <div className="p-4 bg-white rounded-lg shadow-md flex flex-col text-left w-1/2">
                <span className="mt-4 font-bold">Designer</span>
                <span className="text-gray-500">283 vacancies</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md flex flex-col text-left w-1/2">
                <span className="mt-4 font-bold">Developer</span>
                <span className="text-gray-500">283 vacancies</span>
              </div>
            </div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg shadow-lg mt-4 w-full">
              Search by Skills
            </button>
          </div>
          <div className="relative bg-[#FFC850] p-8 rounded-lg shadow-md w-full lg:w-1/2 box-border mt-8 lg:mt-0">
            <div className="absolute z-10 transform -rotate-12 top-20 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 shadow-xl">
              HIFI Design Process
            </div>
            <div className="mt-24 lg:mt-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                <div>Step 1</div>
              </div>
              <div className="w-0.5 h-16 bg-black mt-2 ml-0.5"></div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                <div>Step 2</div>
              </div>
              <div className="w-0.5 h-28 bg-black mt-2 ml-0.5"></div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-1"></div>
                <div>Step 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
