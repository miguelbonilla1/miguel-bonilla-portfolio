import React, { useState } from 'react';
import dcapp from '../images/dcapp.jpeg';
import darkshape from '../images/darkshape.png';
import dcappGif from '../images/bot-testing.gif';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [selectedGif, setSelectedGif] = useState(null); // State for Gif Selected

  const openModal = (gifUrl) => {
    setSelectedGif(gifUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGif(null);
  };

  const projectList = [
    {
      name: 'DarkShapeStudios',
      url: 'https://www.darkshapestudios.com/',
      imageUrl: darkshape,
      description: 'DarkShape Studios is a music production company. The website was developed using React, Tailwind CSS, and Vite.js.',
    },
    {
      name: 'Discord Bot',
      url: 'https://discord.gg/SCbZaDek',
      imageUrl: dcapp,
      description: 'The Discord Bot provides real-time cryptocurrency quotes, using Discord.js, Node.js, and the CoinMarketCap API.',
      gifUrl: dcappGif,
    },
  ];

  return (
    <section id="projects" className="pb-11 pt-5 h-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white dark:text-gray-200 relative">
      <h1 className="text-3xl font-bold text-center py-3 mb-5">Projects</h1>
      <div className="pt-5 w-full px-1 lg:max-w-5xl lg:mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-start items-center mb-8 px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full lg:w-1/2 h-auto overflow-hidden rounded-lg hover:opacity-70 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-72 object-cover"
              />
            </a>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-10 text-center lg:text-left">
              <h3 className="font-bold text-lg cursor-pointer hover:opacity-90 hover:underline mb-2">{project.name}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:underline">
                {project.url}
              </a>
              <br />
              {/* Invite Bot */}
              {project.inviteUrl && (
                <a href={project.inviteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:underline">
                  Invite the bot to your server
                </a>
              )}
              {/* Gif */}
              {project.gifUrl && (
                <div className="mt-4 flex justify-center lg:justify-start">
                  <img
                    src={project.gifUrl}
                    alt={`${project.name} demo`}
                    className="w-72 h-40 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80"
                    onClick={() => openModal(project.gifUrl)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal para el GIF */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative">
            <button className="absolute top-0 right-0 m-4 text-white text-2xl" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedGif} alt="Enlarged GIF" className="max-w-full max-h-screen rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
