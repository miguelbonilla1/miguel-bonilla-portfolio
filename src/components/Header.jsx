import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { FaFileAlt } from 'react-icons/fa';
import miguelLogo from '../images/miguel_bonilla_1.png';

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
    <header className="font-sans sticky top-0 z-50 bg-gray-900 text-white dark:text-gray-200 shadow-md opacity-90 max-h-[13vh]">
      <nav className="container mx-auto p-3 flex justify-between items-center lg:pr-10">
        {/* Logo */}
        <ScrollLink to="HeroSection" smooth={true} duration={500}>
          <img
            src={miguelLogo}
            alt="Logo"
            className="cursor-pointer pt-1 transition-transform transform hover:scale-105"
            style={{ height: '38px' }}
          />
        </ScrollLink>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex items-center space-x-6 pr-5 text-lg py-1">
          <ScrollLink to="HeroSection" smooth={true} duration={500} className="cursor-pointer text-white transition-transform transform hover:scale-105 lg:pr-3">
            Home
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer text-white transition-transform transform hover:scale-105 lg:pr-3">
            Projects
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer text-white transition-transform transform hover:scale-105 lg:pr-3">
            Skills
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer text-white transition-transform transform hover:scale-105 lg:pr-3">
            Contact
          </ScrollLink>
          {/* Ajustamos el texto para diferentes resoluciones */}
          <a
            href="/ResumeMiguelBonilla.docx"
            download="CV_MiguelBonilla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-transform transform hover:scale-105"
          >
            <span className="hidden md:inline lg:hidden">My Resume</span> {/* Solo se muestra en pantallas medianas */}
            <span className="hidden lg:inline">Download My Resume</span> {/* Solo se muestra en pantallas grandes */}
            <FaFileAlt className="ml-2" size={20} />
          </a>
        </div>

        {/* Botón del menú hamburguesa en pantallas pequeñas */}
        <button
          className="pr-2 md:hidden text-white dark:text-white hover:text-white transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú móvil */}
        <div
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-14 right-0 left-0 mx-3 md:hidden transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100' : 'scale-95'}`}
        >
          <div
            className="bg-gray-700 bg-opacity-95 shadow-md rounded-lg py-2 w-full relative"
            style={{ top: '0', left: '0' }}
          >
            <button
              className="absolute top-2 right-2 text-gray-200"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ScrollLink
              to="HeroSection"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-100 border-b border-gray-500 hover:bg-gray-600 dark:hover:bg-gray-800 transition duration-300"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-100 border-b border-gray-500 hover:bg-gray-600 dark:hover:bg-gray-800 transition duration-300"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-100 border-b border-gray-500 hover:bg-gray-600 dark:hover:bg-gray-800 transition duration-300"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-800 transition duration-300"
            >
              Contact
            </ScrollLink>
            {/* Opción de "Download My Resume" en el menú móvil */}
            <a
              href="/CurriculoDevEspañol.docx"
              download="Miguel_Bonilla_CV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-800 transition duration-300 px-4 py-2"
            >
              Download My Resume
              <FaFileAlt className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
