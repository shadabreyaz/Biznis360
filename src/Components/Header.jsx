import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import logo from '../assets/biznis-logo.png';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", submenu: [
    { label: "SEO", url: "/services/seo" },
    { label: "Marketing", url: "/services/marketing" },
  ] },
  { href: "/portfolio", label: "Porfolio" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeSection = location.pathname.split("/")[1];

  return (
      <nav
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-in-out 
          ${isScrolled 
            ? "top-3 backdrop-blur-lg bg-white/30 shadow-xl rounded-4xl w-[92%] md:w-[90%] py-3" 
            : "bg-transparent w-full py-4"}`
        }
      >
      <div className="custom-container flex items-center justify-between transition-all duration-500">
        <Link to="/" className="font-bold w-30 md:w-40">
          <img src={logo} alt="logo" className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {navLinks.map(({ href, label, submenu }) =>
            submenu ? (
              <div key={label} className="relative group">
                <Link
                  to={href}
                  className={`flex items-center gap-2 font-medium
                    ${activeSection === label.toLowerCase()
                      ? "text-[rgb(var(--brand-red))]"
                      : "text-[rgb(var(--brand-blue))]"}
                    hover:text-[rgb(var(--brand-red))] hover:underline underline-offset-4 decoration-2 decoration-[rgb(var(--brand-red))] transition-all duration-200`}
                >
                  {label}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 z-20 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  {submenu.map(({ label: subLabel, url }) => (
                    <Link
                      key={subLabel}
                      to={url}
                      className="block px-6 py-3 text-[rgb(var(--brand-blue))] hover:text-[rgb(var(--brand-red))] hover:underline underline-offset-4 decoration-2 decoration-[rgb(var(--brand-red))] whitespace-nowrap"
                    >
                      {subLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={href}
                to={href}
                className={`font-medium ${
                  activeSection === href.slice(1)
                    ? "text-[rgb(var(--brand-red))]"
                    : "text-[rgb(var(--brand-blue))]"
                } hover:text-[rgb(var(--brand-red))] hover:underline underline-offset-4 decoration-2 decoration-[rgb(var(--brand-red))] transition-all duration-200`}
              >
                {label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block w-40 text-end">
          <Link
            to="/get-started"
            className="inline-block rounded-full bg-[rgb(var(--brand-red))] px-6 py-2.5 text-white font-poppins font-semibold hover:bg-[rgb(var(--brand-red-dark))] transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-[rgb(var(--brand-blue))] hover:text-[rgb(var(--brand-red))] p-2 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl rounded-b-3xl">
          <div className="custom-container py-6 space-y-3">
            {navLinks.map(({ href, label, submenu }) =>
              submenu ? (
                <div key={label} className="flex flex-col">
                  <div className="flex w-full items-center py-2 justify-between">
                    <Link
                      to={href}
                      className="text-lg text-[rgb(var(--brand-blue))] hover:text-[rgb(var(--brand-red))] hover:underline underline-offset-4 decoration-2 decoration-[rgb(var(--brand-red))]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                    <button
                      type="button"
                      className="p-2"
                      onClick={() => setOpenSubmenu(openSubmenu === label ? null : label)}
                      aria-label={`${openSubmenu === label ? "Hide" : "Show"} submenu`}
                    >
                      <svg
                        className={`w-5 h-5 transform transition ${openSubmenu === label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {openSubmenu === label && (
                    <div className="pl-6">
                      {submenu.map(({ label: subLabel, url }) => (
                        <Link
                          key={subLabel}
                          to={url}
                          className="block py-2 text-[rgb(var(--brand-blue))] hover:text-[rgb(var(--brand-red))] hover:underline underline-offset-4 decoration-2 decoration-[rgb(var(--brand-red))]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  to={href}
                  className="block py-2 text-lg text-[rgb(var(--brand-blue))] hover:text-[rgb(var(--brand-red))] hover:underline underline-offset-4 decoration-2 decoration-[rgb(var(--brand-red))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              )
            )}

            {/* Mobile Get Started Button */}
            <Link
              to="/get-started"
              className="block mt-4 rounded-full bg-[rgb(var(--brand-red))] px-6 py-2 text-center text-white font-poppins font-semibold hover:bg-[rgb(var(--brand-red-dark))] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
      </nav>

  );
}
