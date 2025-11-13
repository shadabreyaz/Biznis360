import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import arrow from "../assets/arrow-2.webp"
import arrowRight from "../assets/arrow-1.webp"
import slider1 from '../assets/01.jpg';
import slider2 from '../assets/02.jpg';
import slider3 from '../assets/03.jpg';
import slider4 from '../assets/05.jpg';
import slider5 from '../assets/06.jpg';
import slider6 from '../assets/07.jpg';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFF9F4] pt-28 pb-28 overflow-hidden">
      <div className="custom-container text-center flex flex-col items-center relative">

        <div className="bg-[#FFE1B4] text-[rgb(var(--brand-blue))] font-semibold text-sm sm:text-base rounded-full px-4 py-1 mb-4">
          Join over 100,000 happy customers
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[rgb(var(--brand-blue))] leading-tight mb-4 relative z-10">
            Building <span className="text-[rgb(var(--brand-red))]">Digital & <br className="hidden sm:block" />Creative </span>
            Legacies
        </h1>

        <p className="max-w-xl text-gray-700 text-sm sm:text-lg mb-4">
           We blend creativity and human insight to help brands tell stories that inspire, engage, and endure because great marketing starts with people.
        </p>

        <img src={arrow} alt="arrow" className="w-12 sm:w-14 md:w-20 absolute -bottom-2 sm:bottom-0 left-0 sm:left-6 md:left-16 lg:left-60 -rotate-70" />
        <img src={arrowRight} alt="arrow" className="hidden sm:block w-16 absolute bottom-0 right-10 lg:right-40 rotate-70" />
        
        {/* Curved Text Above Arrow */}
        <svg
          viewBox="0 0 300 100"
          className="hidden sm:block absolute -left-8 md:left-0 lg:left-40 bottom-8 w-30 md:w-40 -rotate-70"
        >
          <defs>
            <path
              id="curve"
              d="M10,90 C80,10 220,10 290,90" 
              fill="transparent"
            />
          </defs>
          <text
            fontFamily="'Pacifico', cursive"
            fontSize="34"
            fill="rgb(22, 45, 74)"
            className="tracking-wide"
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              Elevate your Brand
            </textPath>
          </text>
        </svg>

      </div>

     {/* slider */}
     <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-[940px] mx-auto mt-0 sm:mt-10">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={650}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 560,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: { // mobile
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          640: { // small tablets
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: { // tablets
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: { // desktops
            slidesPerView: 'auto',
            spaceBetween: 32,
          },
        }}
        className="mySwiper mt-8 py-8"
      >
        {[slider1, slider2, slider3, slider4, slider5].map((img, i) => (
          <SwiperSlide key={i} className="max-w-[460px]">
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="rounded-xl w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


    <div className="relative flex items-center justify-center mt-12">
      <Link
        to="/get-started"
        className="bg-[rgb(var(--brand-red))] hover:bg-[rgb(var(--brand-red-dark))] text-white font-semibold px-6 py-2.5 rounded-full text-lg shadow-md transition-all duration-300"
      >
        Get Started
      </Link>

      <img src={arrow} alt="arrow" className="arrow2 w-16 md:w-20 absolute -bottom-2 sm:-bottom-14 right-12 sm:right-30 md:right-60 lg:right-100 rotate-65" />
        
        {/* Curved Text Above Arrow */}
        <svg
          viewBox="0 0 300 100"
          className="absolute right-0 sm:right-15 md:right-40 lg:right-80 bottom-2 sm:-bottom-10 w-30 md:w-40 rotate-48"
        >
          <defs>
            <path
              id="curve"
              d="M10,90 C80,10 220,10 290,90" 
              fill="transparent"
            />
          </defs>
          <text
            fontFamily="'Pacifico', cursive"
            fontSize="34"
            fill="rgb(22, 45, 74)"
            className="tracking-wide"
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
             Start Your Legacy
            </textPath>
          </text>
        </svg>
    </div>

    </section>
  );
}
