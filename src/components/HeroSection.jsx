import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 
import fotoPortafolio5 from '../images/fotoPortafolio5.png'
// import fotoPortafolio5 from '../images/foto-portafolio.jpg';


const HeroSection = () => {
  return (
    <section id="HeroSection" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col lg:flex-row items-center justify-center relative w-full h-screen overflow-hidden">
      <div className="w-full lg:flex lg:flex-col lg:justify-center lg:px-36 order-2 lg:order-1 text-center lg:text-left px-4">
        <h1 className="text-tertiary text-2xl lg:text-5xl font-bold mt-4 md:mt-8 lg:mt-0">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-700 text-transparent bg-clip-text">Hey There! </span>
        </h1>
        <h2 className="text-tertiary text-4xl lg:text-6xl font-bold md:my-2">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-700 text-transparent bg-clip-text">I'm Miguel Bonilla</span>
        </h2>
        <h2 className="text-tertiary text-2xl lg:text-5xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 inline-block text-transparent bg-clip-text">Full Stack developer</span>
        </h2>
        <div className="flex justify-center lg:justify-start items-center mt-5 lg:mt-14">
          <a href="https://www.linkedin.com/in/miguel-bonilla-4b7438285/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white mr-6">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/miguelbonilla1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white mr-6">
            <FaGithub size={40} />
          </a>
          <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
      <div className="lg:w-full lg:flex lg:items-center lg:justify-center order-1 lg:order-2">
        <img
          src={fotoPortafolio5}
          alt="Foto de perfil"
          className="p-0 lg:mr-10 rounded-full overflow-hidden h-[30vh] w-[30vh] md:h-[37vh] md:w-[48vh] lg:w-[vh] lg:h-[50vh] border-4 border-orange-700 border-opacity-90 shadow-[0px_0px_20px_10px_rgba(234,88,12,0.6)]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
