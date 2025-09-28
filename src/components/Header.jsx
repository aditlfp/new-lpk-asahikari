import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo_dark.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", active: true },
    { label: "Sign In", href: import.meta.env.VITE_URL_SIGNUP },
    { label: "Sign Up", href: import.meta.env.VITE_URL_SIGNUP },
    { label: "Syarat Pendaftaran", href: import.meta.env.VITE_URL_SIGNUP },
    { label: "Daftar Sekarang", href: import.meta.env.VITE_URL_SIGNUP },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Top Social Bar */}
      <div
        className={`w-full fixed left-0 right-0 z-[10000] transition-all duration-300 transform backdrop-blur-sm ${
          !isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 "
        }`}
      >
        <div className="bg-blue-800 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm hover:text-blue-950 transition-all ease-in-out duration-300">
                Follow us :
              </span>
              <div className="flex space-x-2">
                <a
                  href="https://www.tiktok.com/@asahikarimulya.official?_t=ZS-8ymiuOWavwu&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <IoLogoTiktok size={16} />
                </a>
                <a
                  href="https://www.instagram.com/asahikarimulya.official?igsh=bzIwb3gzdXVjY2Iy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <IoLogoInstagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550357071704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <IoLogoFacebook size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@asahikarimulyaofficiall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <IoLogoYoutube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav
        className={`bg-white transition-all duration-300 transform ${
          !isScrolled ? "top-10" : "top-0 -translate-y-1"
        } shadow-md fixed w-full z-50`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logos */}
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Asahikarimulya Logo"
                className="h-14 w-12 rounded-full"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer
                  ${item.active ? "text-blue-600" : "text-gray-700"}
                  before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-blue-600
                  before:transition-all before:duration-300 before:transform before:-translate-x-1/2
                  hover:before:w-full`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                    item.active ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
