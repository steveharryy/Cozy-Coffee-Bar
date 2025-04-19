import React, { useState } from "react";
import Hero from "./Hero";
import About from "../About";
import MenuPage from "../MenuPage";
import Contact from "../Contact"; // Import Contact Page

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-10 text-white bg-[#3a1d1d] fixed w-full z-10">
        <h1 className="text-2xl font-bold">☕ Cozy Coffee Bar</h1>
        <ul className="hidden md:flex gap-6 text-lg">
          <li><button onClick={() => setActivePage("home")} className="hover:text-orange-400">Home</button></li>
          <li><button onClick={() => setActivePage("about")} className="hover:text-orange-400">About</button></li>
          <li><button onClick={() => setActivePage("menu")} className="hover:text-orange-400">Menu</button></li>
          <li><button onClick={() => setActivePage("contact")} className="hover:text-orange-400">Contact</button></li>
        </ul>
      </nav>

      {/* Page Display Logic */}
      {activePage === "home" && <Hero setActivePage={setActivePage} />}
      {activePage === "about" && <About />}
      {activePage === "menu" && <MenuPage />}
      {activePage === "contact" && <Contact />} {/* Show Contact Page */}
    </div>
  );
}

export default App;
