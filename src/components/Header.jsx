import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
// import miguelLogo from '../images/miguel-logo-white.png'
import miguelLogo from '../images/miguel_bonilla_1.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white dark:text-gray-200 shadow-md opacity-90 max-h-[13vh]">
      <nav className="container mx-auto p-3 flex justify-between items-center lg:pr-10">
        {/* <a href="/" className="text-xl font-bold text-white hover:text-blue-600 transition duration-300 lg:pl-4 flex items-center">
          MB
        
        </a> */}
        <ScrollLink to="HeroSection" smooth={true} duration={500}>
          <img src={miguelLogo} alt="" className=" cursor-pointer pt-1 pl-2 transition-transform transform hover:scale-105" style={{ height: '38px' }} />
        </ScrollLink>
        <div className="hidden md:flex items-center space-x-4 pr-5 text-lg py-1">
          {/* <ScrollLink to="HeroSection" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-600 transition duration-300 lg:pr-3" aria-label="Sobre mí">
              Sobre mí
            </ScrollLink> */}
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-600 transition duration-300 lg:pr-3" aria-label="Proyectos">
            Projects
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-600 transition duration-300 lg:pr-3" aria-label="Skills">
            Skills
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer text-white hover:text-blue-600 transition duration-300 lg:pr-10" aria-label="Contacto">
            Contact
          </ScrollLink>
        </div>
        <button
          className="pr-2 md:hidden text-white dark:text-white hover:text-white transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú móvil */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-14 right-0 left-0 mx-3 md:hidden transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100' : 'scale-95'}`}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 w-full relative">
            <button className="absolute top-2 right-2 text-gray-200" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ScrollLink to="HeroSection" smooth={true} duration={500} className="block px-4 py-2 text-gray-800  hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300" aria-label="Sobre mí">
              Sobre mí
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300" aria-label="Proyectos">
              Proyectos
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300" aria-label="Skills">
              Skills
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300" aria-label="Contacto">
              Contacto
            </ScrollLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
