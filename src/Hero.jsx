import React from "react";

export default function Hero({ setActivePage }) { 
  return (
    <div className="bg-[#3a1d1d] min-h-screen flex flex-col">
      <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-10">
        <div className="text-white md:w-1/2">
          <p className="text-orange-400 text-lg font-semibold">Best Coffee</p>
          <h2 className="text-5xl font-bold leading-tight mt-2">
            Make your day great <br /> with our special coffee!
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setActivePage("menu")} 
              className="bg-orange-400 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-500 transition"
            >
              Order Now
            </button>
            <button
              onClick={() => setActivePage("contact")} // Clicking this opens Contact Page
              className="border border-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="cofeeeeeeeeeeeeeeee.png"
            alt="Coffee Cup"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
