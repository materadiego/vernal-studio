const projects = [
  {
    id: 1,
    projectName: "La Churrería",
    heroImage: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview: "../Assets/Images/project1.png",
    service1: "Conceptual",
    service2: "Logo",
    service3: "Branding",
    service4: "Social media",
    service5: "Packaging",
    location: "Pocitos, Uruguay",
  },
  {
    id: "MaderoTango",
    projectName: "Madero Tango",
    heroImage: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview: "../Assets/Images/project1.png",
    service1: "dfgdfg",
    service2: "dfgdfg",
    service3: "dfgdfg",
    service4: "dfgdfg",
    service5: "dfgdfg",
    location: "dfgdfg",
  },
  {
    id: "TuEspacio",
    projectName: "Tu Espacio",
    heroImage: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview: "../Assets/Images/project1.png",
    service1: "dfgdfg",
    service2: "dfgdfg",
    service3: "dfgdfg",
    service4: "dfgdfg",
    service5: "dfgdfg",
    location: "dfgdfg",
  },
  {
    id: "Daleplast",
    projectName: "Daleplast",
    heroImage: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview: "../Assets/Images/project1.png",
    service1: "dfgdfg",
    service2: "dfgdfg",
    service3: "dfgdfg",
    service4: "dfgdfg",
    service5: "dfgdfg",
    location: "dfgdfg",
  },
];

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    resolve(projects);
  });
};

export const getProject = (projectId) => {
  return new Promise((resolve, reject) => {
    const selectedProject = projects.find(
      (project) => project.id === Number(projectId)
    );
    resolve(selectedProject);
  });
};
