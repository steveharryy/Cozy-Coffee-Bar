import React from "react";
import { useState } from "react";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="bg-[#f8f5f2] text-black min-h-screen flex flex-col items-center justify-center py-20 px-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center">CONTACT US</h2>
      <div className="w-20 h-2 bg-orange-400 mx-auto mt-3"></div>

      <div className="flex flex-col md:flex-row mt-10 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="md:w-1/2 text-lg space-y-4">
          <p>📍 B-25, MG road, janakpuri</p>
          <p>📧 info@coffeeshopwebsite.com</p>
          <p>📞 +91992333441</p>
          <p>🕒 Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>🕒 Saturday: 10:00 AM - 3:00 PM</p>
          <p>🕒 Sunday: Closed</p>
          <p>🌐 www.coffeeshopwebsite.com</p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-6 md:mt-0">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="..."
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="..."
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="..."
            />
            <button
              type="submit"
              className="bg-orange-400 text-white py-2 px-6 rounded-md hover:bg-orange-500"
              onClick={(e) => {
                e.preventDefault();
                if (name && email && message) {
                  alert("Your response was submitted!");
                  setName("");
                  setEmail("");
                  setMessage("");
                } else {
                  alert("Please fill out all fields before submitting.");
                }
              }}
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
