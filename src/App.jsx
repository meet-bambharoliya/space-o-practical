
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img className="" src="../src/assets/image/logo/logo.svg" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">About</a>
            <a href="#" className="text-gray-600 hover:text-black">Services</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden px-4 pb-4 flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">About</a>
            <a href="#" className="text-gray-600 hover:text-black">Services</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </nav>
        )}
    </header>
    </>
  )
}

export default App
