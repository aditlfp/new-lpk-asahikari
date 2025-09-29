import { useEffect, useState } from "react";
import { Menu, X, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo_dark.png";
import logo_light from "../assets/logo_bg.png";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";

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
        <div className="bg-blue-800 text-white py-1 sm:py-2 px-2 sm:px-4">
          <div className="max-w-7xl mx-auto flex justify-center sm:justify-end items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm hover:text-blue-950 transition-all ease-in-out duration-300 hidden xs:inline">
                Follow us :
              </span>
              <span className="text-xs sm:text-sm hover:text-blue-950 transition-all ease-in-out duration-300 xs:hidden">
                Follow :
              </span>
              <div className="flex space-x-1 sm:space-x-2">
                <a
                  href="https://www.tiktok.com/@asahikarimulya.official?_t=ZS-8ymiuOWavwu&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-1 sm:p-2 rounded hover:bg-blue-700 shadow-md transition-colors"
                >
                  <IoLogoTiktok size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://www.instagram.com/asahikarimulya.official?igsh=bzIwb3gzdXVjY2Iy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-1 sm:p-2 rounded hover:bg-blue-700 shadow-md transition-colors"
                >
                  <IoLogoInstagram size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550357071704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-1 sm:p-2 rounded hover:bg-blue-700 shadow-md transition-colors"
                >
                  <IoLogoFacebook size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@asahikarimulyaofficiall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-1 sm:p-2 rounded hover:bg-blue-700 shadow-md transition-colors"
                >
                  <IoLogoYoutube size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 transform ${
          !isScrolled
            ? "top-7 sm:top-10 bg-white"
            : "-top-0 -translate-y-1 from-blue-900 to-blue-700 bg-gradient-to-br"
        } shadow-md fixed w-full z-50`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logos */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img
                src={!isScrolled ? logo_light : logo}
                alt="Asahikarimulya Logo"
                className="w-8 sm:w-12"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative text-xs xl:text-sm font-medium cursor-pointer whitespace-nowrap
                  ${
                    item.active
                      ? isScrolled
                        ? "from-blue-500 to-blue-300 bg-gradient-to-br text-white rounded-full px-5 pt-1 pb-2 shadow-md"
                        : "text-blue-600"
                      : `before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full transition-colors
                      ${
                        isScrolled
                          ? "text-white hover:text-blue-200 before:bg-blue-50"
                          : "text-gray-800 hover:text-blue-600 before:bg-blue-600"
                      }`
                  }


                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md
                ${
                  isScrolled
                    ? "text-gray-100 hover:text-blue-400"
                    : "text-gray-800 hover:text-blue-600"
                }`}
            >
              {isMenuOpen ? (
                <X size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`block py-2 px-2 text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                    item.active
                      ? isScrolled
                        ? "from-blue-500 to-blue-300 bg-gradient-to-br text-white rounded-full px-5 pt-1 pb-2 shadow-md"
                        : "text-blue-600"
                      : `before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full transition-colors
              ${
                isScrolled
                  ? "text-white hover:text-blue-200 before:bg-blue-50"
                  : "text-gray-800 hover:text-blue-600 before:bg-blue-600"
              }`
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
