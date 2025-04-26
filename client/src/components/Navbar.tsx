import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed w-full bg-white shadow-md z-50 transition-all duration-300"
      id="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold font-inter text-primary">
              Ebuka Ojiba
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#home"
                className="font-medium hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="font-medium hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="font-medium hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="font-medium hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#education"
                className="font-medium hover:text-primary transition-colors"
              >
                Education
              </a>
              <a
                href="#volunteer"
                className="font-medium hover:text-primary transition-colors"
              >
                Volunteering
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#home"
            className="block px-3 py-2 text-base font-medium hover:bg-primary hover:text-white rounded-md"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-base font-medium hover:bg-primary hover:text-white rounded-md"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 text-base font-medium hover:bg-primary hover:text-white rounded-md"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="block px-3 py-2 text-base font-medium hover:bg-primary hover:text-white rounded-md"
            onClick={closeMobileMenu}
          >
            Experience
          </a>
          <a
            href="#education"
            className="block px-3 py-2 text-base font-medium hover:bg-primary hover:text-white rounded-md"
            onClick={closeMobileMenu}
          >
            Education
          </a>
          <a
            href="#volunteer"
            className="block px-3 py-2 text-base font-medium hover:bg-primary hover:text-white rounded-md"
            onClick={closeMobileMenu}
          >
            Volunteering
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-base font-medium bg-primary text-white rounded-md hover:bg-primary/90"
            onClick={closeMobileMenu}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
