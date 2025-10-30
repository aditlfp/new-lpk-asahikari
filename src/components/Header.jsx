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

const Header = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", page: "home", active: currentPage === "home" },
    { label: "Sign In", page: "", href: import.meta.env.VITE_URL_SIGIN },
    { label: "Sign Up", page: "", href: import.meta.env.VITE_URL_SIGNUP },
    { label: "Syarat Pendaftaran", page: "requirement", href: "requirement", active: currentPage === "requirement" },
    { label: "Daftar Sekarang", href: import.meta.env.VITE_URL_SIGNUP },
  ];

  const handleSmoothScroll = (e, href) => {
    
    if (href.startsWith('http')) {
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="w-full max-w-[100svw]">
      {/* Top Social Bar */}
      <div
        className={`w-full max-w-[100svw] fixed left-0 right-0 z-[9999] transition-all duration-300 ease-in-out transform backdrop-blur-sm ${
          !isScrolled ? "translate-y-0" : ""
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
        className={`transition-all duration-300 ease-out max-w-[100svw] ${
          !isScrolled
            ? "translate-y-7 sm:translate-y-12 bg-white"
            : "translate-y-0 from-blue-900 to-blue-700 bg-gradient-to-br"
        } shadow-md fixed w-full z-[10000]`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logos */}
            <div className="flex items-center space-x-2 sm:space-x-4 ml-2 md:ml-4">
              <img
                src={!isScrolled ? logo_light : logo}
                alt="Asahikarimulya Logo"
                className={!isScrolled ? "w-11 sm:w-14" : "w-14 sm:w-16"}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.page) navigateTo(item.page);
                    handleSmoothScroll(e, item.href);
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.page) navigateTo(item.page);
                    handleSmoothScroll(e, item.href);
                  }}
                  className={`block py-2 px-2 text-sm font-medium transition-colors hover:text-blue-300 cursor-pointer ${
                    item.active
                      ? isScrolled
                        ? "from-blue-500 to-blue-300 bg-gradient-to-br text-white rounded-full px-5 py-1 shadow-md"
                        : "text-blue-600"
                      : `before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[0px] before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full transition-colors
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
