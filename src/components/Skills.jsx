import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white dark:text-gray-200 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-3xl font-bold py-4 text-center mt-10">Habilidades</h1>
      <div className="w-full flex flex-col lg:flex-row py-2 items-start justify-center">
        {/* Front-end Skills */}
        <div className="w-full lg:w-auto p-2 flex flex-col items-center lg:mr-8">
          <h2 className="text-lg font-bold mb-3 text-center">Front-end Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center max-w-full">
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
              <p className="mt-2 text-xs">HTML</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
              <p className="mt-2 text-xs">CSS</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <FontAwesomeIcon icon={faJsSquare} size="2x" style={{ color: '#F7DF1E' }} />
              <p className="mt-2 text-xs">JavaScript</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DAFB' }} />
              <p className="mt-2 text-xs">React</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
              <p className="mt-2 text-xs">Bootstrap</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">Tailwind</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">TypeScript</p>
            </li>
          </ul>
        </div>

        {/* Back-end Skills */}
        <div className="w-full lg:w-auto p-2 flex flex-col items-center lg:ml-8">
          <h2 className="text-lg font-bold mb-3 text-center">Back-end Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center max-w-full">
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">Node.js</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">Nest.js</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">Express</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <FontAwesomeIcon icon={faDatabase} size="2x" />
              <p className="mt-2 text-xs">Database</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">PostgreSQL</p>
            </li>
            <li className="flex flex-col items-center justify-center border border-gray-300 rounded-full shadow-sm text-center" style={{ width: '110px', height: '110px' }}>
              <p className="text-lg">MySQL</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
