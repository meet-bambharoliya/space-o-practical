import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "../../assets/image";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b-[#ECECEC] border border-b border-t-0 border-l-0 border-r-0 xl:mb-[120px] lg:mb-[80px] mb-[40px] blur-circle-orange after:content-[''] after:absolute xl:after:-top-[83px] lg:after:-top-[73px] md:after:-top-[63px] after:-top-[53px] after:-right-[40%] after:z-[-1] xl:after:-right-[10%] lg:after:-right-[20%] xl:after:w-[476px] xl:after:h-[476px] lg:after:w-[376px] lg:after:h-[376px] after:w-[276px] after:h-[276px]">
        <div className="container">
          <div className="md:py-4 py-3 flex items-center justify-between">
            <div className="text-xl font-bold">
              <img className="" src={logo} />
            </div>
            <nav className="hidden md:flex space-x-6 mx-auto">
              <a href="#" className="text-[#372973] font-semibold text-sm transition-all duration-300 ease-in-out">Home</a>
              <a href="#" className="text-gray-600 hover:font-semibold text-sm transition-all duration-300 ease-in-out">About</a>
              <a href="#" className="text-gray-600 hover:font-semibold text-sm transition-all duration-300 ease-in-out">Services</a>
              <a href="#" className="text-gray-600 hover:font-semibold text-sm transition-all duration-300 ease-in-out">Contact Us</a>
            </nav>
            <div className="hidden md:flex space-x-6">
              <button className="bg-[#F6F4FF] btn hover:bg-primary hover:text-white">Sign in</button>
              <button className="btn bg-primary text-white hover:bg-transparent hover:text-primary border-primary border">Get Started</button>
            </div>
            <button
              className="md:hidden outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute w-full bg-white z-10">
            <div className="container">
              <nav className="md:hidden pb-4 flex flex-col space-y-2">
                <a href="#" className="text-[#372973] font-semibold text-sm transition-all duration-300 ease-in-out">Home</a>
                <a href="#" className="text-gray-600 hover:font-semibold text-sm transition-all duration-300 ease-in-out">About</a>
                <a href="#" className="text-gray-600 hover:font-semibold text-sm transition-all duration-300 ease-in-out">Services</a>
                <a href="#" className="text-gray-600 hover:font-semibold text-sm transition-all duration-300 ease-in-out">Contact Us</a>
              </nav>
              <div className="md:hidden pb-4 flex flex-col space-y-2">
                <button className="bg-[#F6F4FF] btn w-fit hover:bg-primary hover:text-white">Sign in</button>
                <button className="btn bg-primary text-white w-fit hover:bg-transparent hover:text-primary border-primary border">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </header>
  )
}

export default Header