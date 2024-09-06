import dcapp from '../images/dcapp.jpeg';
import darkshape from '../images/darkshape.png';

const Projects = () => {
  const projectList = [
    { name: 'DarkShapeStudios', url: 'https://www.darkshapestudios.com/', imageUrl: darkshape },
    { name: 'Bot asistente de discord', url: 'https://www.discordappMiguelBonilla.com', imageUrl: dcapp },
  ];

  return (
    <section id="projects" className="h-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white dark:text-gray-200 relative">
      <h1 className="text-3xl font-bold text-center py-5 mb-6"> Projects</h1>
      <div className="w-full px-1 lg:max-w-5xl lg:mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row lg:justify-center items-center mb-8 
                       px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0">
            <a href={project.url} className="block w-full lg:w-1/2 h-auto overflow-hidden rounded-lg hover:opacity-70 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
            </a>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4 lg:ml-auto lg:mr-auto">
              <h3 className="font-bold text-lg cursor-pointer hover:opacity-90 hover:underline mb-2">{project.name}</h3>
              <p className="text-sm">{project.url}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;