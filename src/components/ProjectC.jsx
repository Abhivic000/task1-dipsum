import React, { useState } from 'react';

const projects = [
  { name: 'Projectname', author: 'Joel Alexander' },
  { name: 'Projectname', author: 'Orion Genio' },
  { name: 'Projectname', author: 'Daniel Caesar' },
  { name: 'Projectname', author: 'PJ Morton' },
  { name: 'Projectname', author: 'Georgina Smith' }
];

const ProjectC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate the projects to display on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 h-[60vh] mt-10">
      <div className="flex space-x-4 mb-4">
        {currentProjects.map((project, index) => (
          <div key={index} className="w-[15rem] h-[18rem] bg-[#404DFA40] flex flex-col items-center justify-center rounded-md">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm">{project.author}</p>
            <div className="w-24 h-24 bg-gray-300 mt-4"></div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <button onClick={handlePrevPage} className="p-3 bg-white border rounded-md">
          ←
        </button>
        <button onClick={handleNextPage} className="p-3 bg-[#242ebcd8] text-white rounded-md">
          →
        </button>
      </div>
    </div>
  );
};

export default ProjectC;
