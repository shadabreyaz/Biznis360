import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Phone,
  MailIcon,
  MapPin,
  Instagram,
} from "lucide-react";
import logo from '../assets/biznis-logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[rgb(22,45,74)] text-white pt-10 pb-4">
      <div className="custom-container px-4">
        {/* Top heading */}
        <div className="text-center mb-8 flex items-center justify-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl leading-snug text-white sm:max-w-11/12">
             Your Trusted Partner for Brand Activation & Creative Impact Across{" "}
            <span className="text-[rgb(var(--brand-red))]">
             Dubai & Beyond.
            </span>
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_1fr_1fr] gap-10 pt-6">
          {/* Column 1 */}
          <div>
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src={logo} alt="logo" className="h-12 lg:h-14 w-auto object-contain" />
              </Link>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-[rgb(var(--brand-red))]">
                Biznis360
              </h3>
            </div>
            <div className="mt-4 md:mt-6 flex gap-8 space-x-10">
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base md:text-lg">
                {["About us", "Service", "FAQ's", "Contact Us", "Sitemap"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-[rgb(var(--brand-red))] cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base md:text-lg">
                {["Brand Activation", "Staffing & Talent", " Creative Design", "Digital Marketing", "Brand Experience Audit"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-[rgb(var(--brand-red))] cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 text-white">Contact</h3>
            <div className="space-y-4 mt-0 sm:mt-3 md:mt-6">
              <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 shrink-0"/>
                <div>
                  <p className="mb-0 text-white uppercase text-sm sm:text-base">Address:</p>
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    Office 909, Some Tower,Avenue Business bay, Dubai UAE PO:875199
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <MailIcon className="w-5 sm:w-6 h-5 sm:h-6"/>
                <div>
                  <p className="mb-0 text-white uppercase text-sm sm:text-base">Email:</p>
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    support@qutbee.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6"/>
                <div>
                  <p className="mb-0 text-white uppercase text-sm sm:text-base">Phone:</p>
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    +971 22 817 3686
                  </span>
                </div>
              </div>

              
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 text-white">
              Keep in Touch
            </h3>
            <p className="text-gray-200 mb-3 mt-0 sm:mt-3 md:mt-6 text-sm sm:text-base">
              Insights, ideas & strategies to elevate your brand.
            </p>
            <form className="flex items-center border-b border-gray-400 pb-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-2"
              />
              <button
                type="submit"
                className="text-black bg-white p-2 rounded-full hover:scale-110 transition-transform cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-start gap-2 pt-3">
              <input
                type="checkbox"
                className="mt-1 accent-[rgb(var(--brand-red))]"
              />
              <p className="text-sm text-gray-300">
                I have read and agree to the Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t space-y-2 border-gray-200 pt-4 flex flex-col md:flex-row items-center justify-between custom-container">
        <div className="flex items-center gap-5">
          <Link
            to="#"
            className="hover:scale-110 transition-all hover:text-[rgb(var(--brand-red))] duration-300"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            to="#"
            className="hover:scale-110 transition-all hover:text-[rgb(var(--brand-red))] duration-300"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            to="#"
            className="hover:scale-110 transition-all hover:text-[rgb(var(--brand-red))] duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            to="#"
            className="hover:scale-110 transition-all hover:text-[rgb(var(--brand-red))] duration-300"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-center text-sm mt-3 md:mt-0">
           © Copyright 2025 Biznis360. All Rights Reserved.
        </p>

        {/* privacy policy */}
        <Link to={'#'}>
          <p className="text-gray-300 text-center text-sm mt-3 md:mt-0 hover:text-gray-500 transition-colors duration-400">
            Privacy Policy
          </p>
        </Link>
      </div>
    </footer>
  );
}
