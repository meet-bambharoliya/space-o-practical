import React, { useState } from "react";
import { footerLogo, logo } from "../../assets/image";
import { call, facebook, instagram, linkedIn, location, mail, twitter } from "../../assets/image/icon";
function Footer() {

  return (
    <>
    <div className="container">
      <div className="bg-cover bg-center lg:py-10 md:py-8 py-4 px-4 rounded-[32px] xl:-mb-[80px] lg:-mb-[60px] md:-mb-[40px] -mb-[40px] relative bg-primary bg-[url('./assets/image/ready-to-bg.png')] bg-no-repeat text-center">
        <div className="max-w-[792px] mx-auto">
          <h3 className="lg:text-[36px] md:text-[28px] text-[24px] font-bold lg:mb-6 md:mb-4 mb-3 text-white">Ready To Ace Your Exams?</h3>
          <p className="text-[#ECECEC] lg:leading-[26px] lg:pb-10 md:pb-8 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button className="btn lg:!px-[26px] lg:!py-[17px] bg-white text-primary w-fit hover:bg-transparent hover:text-white border-primary hover:border-white border rounded-xl">Explore Now</button>
        </div>
      </div>
    </div>
    <footer className="bg-gray xl:pt-[160px] lg:pt-[120px] pt-[80px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-4 col-span-12">
              <img className="mb-6" src={footerLogo} alt="logo"/>
              <p className="text-[#ECECEC] lg:leading-[26px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>
            <div className="lg:col-span-8 col-span-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-4 gap-6">
              <div>
                <h5 className="lg:mb-6 md:mb-4 mb-3 lg:text-[18px] text-[16px] text-white font-semibold after:content-[''] after:bg-[#67D777] after:w-10 after:h-[2px] after:block after:mt-1 after:relative">Quick Links</h5>
                <ul className="flex flex-col gap-3">
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Home</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">About Us</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Services</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Exams</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Refund Policy</a></li>
                </ul>
              </div>
              <div>
                <h5 className="lg:mb-6 md:mb-4 mb-3 lg:text-[18px] text-[16px] text-white font-semibold after:content-[''] after:bg-[#67D777] after:w-10 after:h-[2px] after:block after:mt-1 after:relative">Other Links</h5>
                <ul className="flex flex-col gap-3">
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">FAQs</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Privacy Policy</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Terms & Conditions</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px]" href="#">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h5 className="lg:mb-6 md:mb-4 mb-3 lg:text-[18px] text-[16px] text-white font-semibold after:content-[''] after:bg-[#67D777] after:w-10 after:h-[2px] after:block after:mt-1 after:relative">Contact</h5>
                <ul className="flex flex-col gap-3">
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px] flex items-center gap-2" href="mailto:test@gmail.com"><img src={mail} alt="mail"/> test@gmail.com</a></li>
                  <li><a className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px] flex items-center gap-2" href="tel:+1-2345-6789"><img src={call} alt="call"/> +1-2345-6789</a></li>
                  <li className="text-[#D6D6D6] leading-[20px] lg:text-[16px] text-[14px] flex items-center gap-2"><img src={location} alt="location"/> 1123 Ave., New York, USA</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-[#FFFFFF1A] xl:mt-[80px] lg:mt-[60px] mt-[40px] border-2"/>
          <div className="py-8 flex items-center md:flex-row flex-col gap-4">
            <p className="text-[#D6D6D6] text-[14px]">© 2025 Lorem Ipsum. All Rights Reserved</p>
            <ul className="flex items-center gap-4 ms-auto me-auto md:me-0">
              <li><a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white group transition-all duration-300 ease-in-out" href="#" target="_blank"><img className="transition-all duration-300 ease-in-out group-hover:invert" src={facebook} alt="facebook"/></a></li>
              <li><a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white group transition-all duration-300 ease-in-out" href="#" target="_blank"><img className="transition-all duration-300 ease-in-out group-hover:invert" src={linkedIn} alt="facebook"/></a></li>
              <li><a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white group transition-all duration-300 ease-in-out" href="#" target="_blank"><img className="transition-all duration-300 ease-in-out group-hover:invert" src={twitter} alt="facebook"/></a></li>
              <li><a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white group transition-all duration-300 ease-in-out" href="#" target="_blank"><img className="transition-all duration-300 ease-in-out group-hover:invert" src={instagram} alt="facebook"/></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer