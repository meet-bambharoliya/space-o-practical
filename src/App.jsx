
import React from "react";
import { Header } from "./components";
import { bannerImg } from "./assets/image";


function App() {

  return (
    <>
      <Header />
      <section className="relative before:content-[''] before:bg-[url('./assets/image/circle-img.png')] before:bg-no-repeat md:before:bg-contain before:bg-center before:absolute xl:before:-top-[13px] before:-top-[13px] before:left-0 xl:before:w-[370px] lg:before:w-[270px] before:w-[170px] before:bg-cover before:h-[170px] xl:before:h-[370px] lg:before:h-[270px] before:z-[-1] after:content-[''] after:absolute xl:after:top-[83px] lg:after:top-[73px] md:after:top-[63px] after:top-[53px] after:-left-[40%] xl:after:-left-[10%] lg:after:-left-[20%] xl:after:w-[476px] xl:after:h-[476px] lg:after:w-[376px] lg:after:h-[376px] after:w-[276px] after:h-[276px] blur-circle-blue">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-green lg:text-[64px] md:text-[54px] sm:text-[44px] text-[34px] font-bold xl:leading-[82px] lg:leading-[72px] md:leading-[62px] sm:leading-[52px] leading-[42px] capitalize">
                Transform <span className="text-gray">your assessments
                <br className="hidden lg:block"/>to</span> achieve More
              </h1>
              <p className="text-gray-600 mt-3 mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <button className="btn lg:!px-[26px] lg:!py-[17px] bg-primary text-white w-fit hover:bg-transparent hover:text-primary border-primary border">Get Started</button>
            </div>
            <div className="lg:ms-auto lg:w-[454px] md:w-1/2 mx-auto">
              <img src={bannerImg} alt="banner"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
