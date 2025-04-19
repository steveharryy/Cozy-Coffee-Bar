import React from "react";

export default function MenuPage() {
  return (

    <div className="bg-[#f8f5f2] text-black min-h-screen flex flex-col items-center justify-center py-20 px-10">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-center">OUR MENU</h2>
<div className="w-20 h-2 bg-orange-400 mx-auto mt-3"></div>


      {/* Centered Menu Items in a Row */}
      <div className="flex flex-wrap justify-center items-center gap-16 mt-12">
        {/* Hot Beverages */}
        <div className="flex flex-col items-center">
          <img
            src="latte-photoroom.png"
            alt="Cappuccino"
            className="w-60 h-60 object-cover rounded-lg"/>
          <h3 className="text-2xl font-semibold mt-4">Cappucccino</h3>
        </div>

        {/* Cold Beverages */}
        <div className="flex flex-col items-center">
          <img
            src="cold-Photoroom.png"
            alt="Cold Coffee"
            className="w-60 h-60 object-cover rounded-lg"/>
          <h3 className="text-2xl font-semibold mt-4">Cold Coffee</h3> 
        </div>

        {/* Refreshment */}
        <div className="flex flex-col items-center">
          <img
            src="chocofrappe-photoroom.png"
            alt="Java Chip Frappe"
            className="w-60 h-60 object-cover rounded-lg"/>
          <h3 className="text-2xl font-semibold mt-4">Java Chip Frappe</h3>
        </div>
        
        <div className="flex flex-col items-center">
          <img
            src="hotchoco-Photoroom.png"
            alt="Hot Chocolate"
            className="w-60 h-60 object-cover rounded-lg"/>
          <h3 className="text-2xl font-semibold mt-4">Hot Chocolate</h3>
          
        </div>
      </div>
    </div>
  );
}
