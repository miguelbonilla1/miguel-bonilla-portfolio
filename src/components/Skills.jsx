import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { DiNodejs } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";


const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen px-1 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white dark:text-gray-200 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-3xl font-bold py-4 text-center mt-10">Skills</h1>
      <div className="w-full flex flex-col lg:flex-row py-2 items-start justify-center">
        {/* Front-end Skills */}
        <div className="pt-3 w-full lg:w-auto p-2 flex flex-col items-center lg:mr-8">
          <h2 className="text-lg font-bold mb-3 pb-3  text-center">Front-end Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center max-w-full">
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <FontAwesomeIcon icon={faHtml5} size="3x" style={{ color: '#E34F26' }} />
              <p className="mt-1 text-xs">HTML</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ color: '#1572B6' }} />
              <p className="mt-1 text-xs">CSS</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <FontAwesomeIcon icon={faJsSquare} size="3x" style={{ color: '#F7DF1E' }} />
              <p className="mt-1 text-xs">JavaScript</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <FontAwesomeIcon icon={faReact} size="3x" style={{ color: '#61DAFB' }} />
              <p className="mt-1 text-xs">React</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <FontAwesomeIcon icon={faBootstrap} size="3x" style={{ color: '#7952B3' }} />
              <p className="mt-1 text-xs">Bootstrap</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <BiLogoTailwindCss className='p-2' size="1x" style={{ color: '#0EA5E9' }} />
              <p className="text-xs mb-5">Tailwind</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <SiTypescript className='p-5' size="89px" style={{ color: '#0EA5E9' }} />
              <p className="text-xs mb-3">TypeScript</p>
            </li>
          </ul>
        </div>

        {/* Back-end Skills */}
        <div className="mt-6 md:mt-0 pt-3 w-full lg:w-auto p-2 flex flex-col items-center lg:ml-8">
          <h2 className="pb-3 text-lg font-bold mb-3 text-center">Back-end Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center max-w-full">
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <DiNodejs className='p-2' size="1x" style={{ color: '#68A063' }} />
              <p className="text-xs mb-4">Node.js</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <SiNestjs className='p-2' size="88px" style={{ color: '#F0304D' }} />
              <p className="text-xs mt-1">Nest.js</p>
            </li>
            <li className="p-2 flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <p className="text-xl mt-1">Express</p>
            </li>
            <li className="p-2 flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <BiLogoPostgresql className='p-1' size="88px" style={{ color: '#479BD8' }} />
              <p className="text-xs mb-2">PostgreSQL</p>
            </li>
            <li className="p-2 flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" style={{ width: '140px', height: '140px' }}>
              <GrMysql className='p-3.5' size="88px" style={{ color: '#2B5D80' }} />
              <p className="text-xs mt-1">MySQL</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
