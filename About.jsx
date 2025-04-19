import React from "react";

export default function About() {
  return (
    <div id="about" className="bg-[#f8f5f2] py-20 px-10 md:px-20 flex flex-col md:flex-row items-center justify-center min-h-screen">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
         src="about.jpeg"
          alt="About Us"
          className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 px-6">
        <h2 className="text-4xl font-bold text-[#3a1d1d]">ABOUT US</h2>
        <div className="w-16 h-1 bg-orange-400 mx-auto md:mx-0 mt-2"></div>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
        At Cozy Coffee Bar, we believe that great coffee brings people together. Nestled in the heart of the city, our café is more than just a place to grab a cup of coffee—it's a warm and inviting space where stories are shared, friendships are made, and every sip feels like home.

Our expertly crafted beverages, from rich espressos to creamy lattes and refreshing cold brews, are made with the finest beans and a touch of love. Whether you're here for a quiet morning, a casual meet-up, or just to unwind with a book, Cozy Coffee Bar is your perfect escape.

Join us for a cup and experience the magic of cozy moments, one brew at a time. 
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <i className="fa-brands fa-facebook text-2xl text-gray-600 cursor-pointer hover:text-orange-400"></i>
          <i className="fa-brands fa-instagram text-2xl text-gray-600 cursor-pointer hover:text-orange-400"></i>
          <i className="fa-brands fa-x-twitter text-2xl text-gray-600 cursor-pointer hover:text-orange-400"></i>
        </div>
      </div>
    </div>
  );
}
