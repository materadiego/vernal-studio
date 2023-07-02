const projects = [
  {
    id: 1,
    projectName: "Bim Formation",
    projectSubtitle: "Lorem ipsum",
    heroImage:
      "https://materadiego.github.io/vernal-studio/static/media/projects-loop3-bg.82404b79d108e37e78ed.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview:
      "https://materadiego.github.io/vernal-studio/static/media/projects-loop3-bg.82404b79d108e37e78ed.webp",
    service1: "Conceptual",
    service2: "Logo",
    service3: "Branding",
    service4: "Social media",
    service5: "Packaging",
    location: "Pocitos, Uruguay",
    templateNumber: "1",
  },
  {
    id: 2,
    projectName: "Madero Tango",
    projectSubtitle: "Lorem ipsum",
    heroImage:
      "https://materadiego.github.io/vernal-studio/static/media/projects-maderotango-bg.f8fdb09b539b772efb33.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview:
      "https://materadiego.github.io/vernal-studio/static/media/projects-maderotango-bg.f8fdb09b539b772efb33.webp",
    service1: "dfgdfg",
    service2: "dfgdfg",
    service3: "dfgdfg",
    service4: "dfgdfg",
    service5: "dfgdfg",
    location: "Buenos Aires, Argentina",
    templateNumber: "2",
  },
  {
    id: 3,
    projectName: "Daleplast",
    projectSubtitle: "Lorem ipsum",
    heroImage:
      "https://materadiego.github.io/vernal-studio/static/media/projects-daleplast-bg.114be066fdccf9dad006.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview:
      "https://materadiego.github.io/vernal-studio/static/media/projects-daleplast-bg.114be066fdccf9dad006.webp",
    service1: "dfgdfg",
    service2: "dfgdfg",
    service3: "dfgdfg",
    service4: "dfgdfg",
    service5: "dfgdfg",
    location: "Buenos Aires, Argentina",
    templateNumber: "3",
  },
  {
    id: 4,
    projectName: "Tu Espacio",
    projectSubtitle: "Lorem ipsum",
    heroImage:
      "https://materadiego.github.io/vernal-studio/static/media/projects-tuespacio-bg.c7017c7524a6a1a804f4.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgPreview:
      "https://materadiego.github.io/vernal-studio/static/media/projects-tuespacio-bg.c7017c7524a6a1a804f4.webp",
    service1: "dfgdfg",
    service2: "dfgdfg",
    service3: "dfgdfg",
    service4: "dfgdfg",
    service5: "dfgdfg",
    location: "Buenos Aires, Argentina",
    templateNumber: "1",
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
