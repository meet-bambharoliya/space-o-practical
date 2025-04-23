
import React from "react";
import { Footer, Header } from "./components";
import { bannerImg, jeeMainImg, jeeMainImg2, jeeMainImg3, jeeMainImg4 } from "./assets/image";
import { accessibleIcon, calendarIcon, clockIcon, realIcon, secureIcon } from "./assets/image/icon";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function App() {

  return (
    <>
      <Header />
      <section className="relative before:content-[''] before:bg-[url('./assets/image/circle-img.png')] before:bg-no-repeat md:before:bg-contain before:bg-center before:absolute xl:before:-top-[13px] before:-top-[13px] before:left-0 xl:before:w-[370px] lg:before:w-[270px] before:w-[170px] before:bg-cover before:h-[170px] xl:before:h-[370px] lg:before:h-[270px] before:z-[-1] after:content-[''] after:absolute xl:after:top-[83px] lg:after:top-[73px] md:after:top-[63px] after:top-[53px] after:-left-[40%] xl:after:-left-[10%] lg:after:-left-[20%] xl:after:w-[476px] xl:after:h-[476px] lg:after:w-[376px] lg:after:h-[376px] after:w-[276px] after:h-[276px] blur-circle-blue xl:mb-[80px] lg:mb-[60px] mb-[40px] after:z-[-1]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative flex flex-col justify-center after:content-[''] after:absolute after:rounded-full after:bottom-0 after:left-[170px]  after:bg-[#B7B0FF] after:w-[17px] after:h-[17px]">
              <h1 className="text-green lg:text-[64px] md:text-[54px] sm:text-[44px] text-[34px] font-bold xl:leading-[82px] lg:leading-[72px] md:leading-[62px] sm:leading-[52px] leading-[42px] capitalize">
                Transform <span className="text-gray">your assessments
                <br className="hidden lg:block"/>to</span> achieve More
              </h1>
              <p className="text-gray-600 mt-3 mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <button className="btn lg:!px-[26px] lg:!py-[17px] bg-primary text-white w-fit hover:bg-transparent hover:text-primary border-primary border rounded-xl">Get Started</button>
            </div>
            <div className="lg:ms-auto xl:w-full lg:w-[454px] sm:w-1/2 ms-auto me-auto lg:me-0 before:content-[''] before:bg-[url('./assets/image/circle-img.png')] before:bg-no-repeat md:before:bg-contain before:bg-center before:absolute xl:before:-bottom-[140px] before:-bottom-[34px] before:right-0 xl:before:w-[370px] lg:before:w-[270px] before:w-[170px] before:bg-cover before:h-[170px] xl:before:h-[370px] lg:before:h-[270px] before:z-[-1]">
              <img className="xl:ms-auto" src={bannerImg} alt="banner"/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="shadow-[0px_3px_12px_0px_#00000014] xl:mb-[80px] lg:mb-[60px] mb-[40px] xl:px-[140px] lg:px-[100px] md:px-[40px] px-[20px]  lg:py-10 md:py-8 py-6 rounded-2xl bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex gap-3 items-center">
                <img src={secureIcon} alt="secureIcon"/>
                <h4 className="font-semibold lg:text-[18px] text-[16px] tracking-[0.08px]">Secure & Reliable</h4>
              </div>
              <div className="flex gap-3 items-center">
                <img src={realIcon} alt="realIcon"/>
                <h4 className="font-semibold lg:text-[18px] text-[16px] tracking-[0.08px]">Real-Time Tracking</h4>
              </div>
              <div className="flex gap-3 items-center">
                <img src={accessibleIcon} alt="accessibleIcon"/>
                <h4 className="font-semibold lg:text-[18px] text-[16px] tracking-[0.08px]">Accessible Anywhere</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <sections className="xl:mb-[80px] lg:mb-[60px] mb-[40px] xl:py-10 lg:py-8 md:py-6 py-4 block">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[49px] lg:gap-[39px] gap-y-8 items-center">
            <div className="lg:max-w-[444px] step-sec flex flex-col justify-center lg:gap-8 gap-4 relative after:bg-[#F6F4FF] after:w-[365px] after:h-[365px] after:content-[''] after:absolute after:rounded-full after:-right-[53px] after:z-[-1]">
              <div className="step-inner">
                <div className="shadow-[0px_4px_12px_0px_#00000014] rounded-2xl bg-white px-4 py-3">
                  <div className="flex gap-3 items-center">
                    <span className="lg:w-[48px] w-[38px] flex-none lg:text-[24px] text-[20px] font-bold lg:h-[48px] h-[38px] bg-purple rounded-full flex items-center justify-center text-white">1</span>
                    <div>
                      <h3 className="lg:text-[20px] text-[16px] font-semibold text-gray lg:mb-1">Step1</h3>
                      <p className="text-[#54545E] lg:leading-[26px]">Create your account in minutes an
                      begin your journey to exam success.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-inner">
                <div className="shadow-[0px_4px_12px_0px_#00000014] rounded-2xl bg-white px-4 py-3">
                  <div className="flex gap-3 items-center">
                    <span className="lg:w-[48px] w-[38px] flex-none lg:text-[24px] text-[20px] font-bold lg:h-[48px] h-[38px] bg-orange rounded-full flex items-center justify-center text-white">2</span>
                    <div>
                      <h3 className="lg:text-[20px] text-[16px] font-semibold text-gray lg:mb-1">Step2</h3>
                      <p className="text-[#54545E] lg:leading-[26px]">Choose from a wide range of
                      assessments and practice tests.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-inner">
                <div className="shadow-[0px_4px_12px_0px_#00000014] rounded-2xl bg-white px-4 py-3">
                  <div className="flex gap-3 items-center">
                    <span className="lg:w-[48px] w-[38px] flex-none lg:text-[24px] text-[20px] font-bold lg:h-[48px] h-[38px] bg-light-green rounded-full flex items-center justify-center text-white">3</span>
                    <div>
                      <h3 className="lg:text-[20px] text-[16px] font-semibold text-gray lg:mb-1">Step3</h3>
                      <p className="text-[#54545E] lg:leading-[26px]">Track your progress and identify
                      areas for improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-dark-green font-semibold mb-3">How It Works</p>
              <h1 className="text-gray lg:text-[36px] md:text-[28px] text-[24px] font-bold lg:mb-6 md:mb-4 mb-3">What is Lorem Ipsum?</h1>
              <p className="text-[#54545E] leading-[26px] lg:mb-8 md:mb-6 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button className="btn lg:!px-[26px] lg:!py-[17px] bg-primary text-white w-fit hover:bg-transparent hover:text-primary border-primary border rounded-xl">Explore Now</button>
            </div>
          </div>
        </div>
      </sections>
      <section className="bg-[#FBFAFF] lg:py-10 md:py-8 py-4">
        <div className="container">
          <p className="text-dark-green font-semibold mb-3 text-center">Upcoming Exams</p>
          <h2 className="text-gray text-center lg:text-[36px] md:text-[28px] text-[24px] font-bold lg:mb-6 md:mb-4 mb-3">Stay Ahead with Scheduled Exams</h2>
          <Swiper
            spaceBetween={12}
            centeredSlides={false}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="upcoming-exams"
          >
            <SwiperSlide>
              <div className="border border-[#ECECEC] rounded-[20px]">
                <img src={jeeMainImg} alt="jeeMainImg" className="w-full h-full object-cover"/>
                <div className="p-4">
                  <span className="py-[6px] px-2 lg:text-[12px] text-[10px] bg-[#F1EEFF] inline-block lg:mb-[14px] mb-[10px] text-primary rounded-[8px]">Scheduled</span>
                  <p className="text-[#54545E] font-medium lg:mb-2 mb-1 lg:text-[14px] text-[12px] uppercase">Mock Test</p>
                  <h6 className="text-gray font-bold mb-5 lg:text-[20px] text-[16px]">JEE Main 2025</h6>
                  <p className="flex items-center gap-[6px] text-[#54545E] lg:mb-[13px] mb-[8px]"><img src={calendarIcon} alt="calender"/> 15 Feb, 2025, 10:00 AM</p>
                  <p className="flex items-center gap-[6px] text-[#54545E]"><img src={clockIcon} alt="calender"/> 13d : 21h : 0m : 0s</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#ECECEC] rounded-[20px]">
                <img src={jeeMainImg2} alt="jeeMainImg" className="w-full h-full object-cover"/>
                <div className="p-4">
                  <span className="py-[6px] px-2 lg:text-[12px] text-[10px] bg-[#F1EEFF] inline-block lg:mb-[14px] mb-[10px] text-primary rounded-[8px]">Scheduled</span>
                  <p className="text-[#54545E] font-medium lg:mb-2 mb-1 lg:text-[14px] text-[12px] uppercase">Mock Test</p>
                  <h6 className="text-gray font-bold mb-5 lg:text-[20px] text-[16px]">JEE Advanced</h6>
                  <p className="flex items-center gap-[6px] text-[#54545E] lg:mb-[13px] mb-[8px]"><img src={calendarIcon} alt="calender"/> 28 Feb, 2025, 9:00 AM</p>
                  <p className="flex items-center gap-[6px] text-[#54545E]"><img src={clockIcon} alt="calender"/> 26d : 20h : 0m : 0s</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#ECECEC] rounded-[20px]">
                <img src={jeeMainImg3} alt="jeeMainImg" className="w-full h-full object-cover"/>
                <div className="p-4">
                  <span className="py-[6px] px-2 lg:text-[12px] text-[10px] bg-[#F1EEFF] inline-block lg:mb-[14px] mb-[10px] text-primary rounded-[8px]">Scheduled</span>
                  <p className="text-[#54545E] font-medium lg:mb-2 mb-1 lg:text-[14px] text-[12px] uppercase">Mock Test</p>
                  <h6 className="text-gray font-bold mb-5 lg:text-[20px] text-[16px]">NEET 2025</h6>
                  <p className="flex items-center gap-[6px] text-[#54545E] lg:mb-[13px] mb-[8px]"><img src={calendarIcon} alt="calender"/> 10 Mar, 2025, 2:00 PM</p>
                  <p className="flex items-center gap-[6px] text-[#54545E]"><img src={clockIcon} alt="calender"/> 23d : 12h : 0m : 0s</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#ECECEC] rounded-[20px]">
                <img src={jeeMainImg4} alt="jeeMainImg" className="w-full h-full object-cover"/>
                <div className="p-4">
                  <span className="py-[6px] px-2 lg:text-[12px] text-[10px] bg-[#F1EEFF] inline-block lg:mb-[14px] mb-[10px] text-primary rounded-[8px]">Scheduled</span>
                  <p className="text-[#54545E] font-medium lg:mb-2 mb-1 lg:text-[14px] text-[12px] uppercase">Mock Test</p>
                  <h6 className="text-gray font-bold mb-5 lg:text-[20px] text-[16px]">NEET 2025</h6>
                  <p className="flex items-center gap-[6px] text-[#54545E] lg:mb-[13px] mb-[8px]"><img src={calendarIcon} alt="calender"/> 25 Mar, 2025, 3:00 PM</p>
                  <p className="flex items-center gap-[6px] text-[#54545E]"><img src={clockIcon} alt="calender"/> 38d : 11h : 0m : 0s</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#ECECEC] rounded-[20px]">
                <img src={jeeMainImg2} alt="jeeMainImg" className="w-full h-full object-cover"/>
                <div className="p-4">
                  <span className="py-[6px] px-2 lg:text-[12px] text-[10px] bg-[#F1EEFF] inline-block lg:mb-[14px] mb-[10px] text-primary rounded-[8px]">Scheduled</span>
                  <p className="text-[#54545E] font-medium lg:mb-2 mb-1 lg:text-[14px] text-[12px] uppercase">Mock Test</p>
                  <h6 className="text-gray font-bold mb-5 lg:text-[20px] text-[16px]">JEE Advanced</h6>
                  <p className="flex items-center gap-[6px] text-[#54545E] lg:mb-[13px] mb-[8px]"><img src={calendarIcon} alt="calender"/> 28 Feb, 2025, 9:00 AM</p>
                  <p className="flex items-center gap-[6px] text-[#54545E]"><img src={clockIcon} alt="calender"/> 26d : 20h : 0m : 0s</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-center xl:mt-10 lg:mt-8 md:mt-6 mt-3">
            <button className="btn lg:!px-[26px] lg:!py-[17px] bg-primary text-white w-fit hover:bg-transparent hover:text-primary border-primary border rounded-xl">View All Exams</button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
