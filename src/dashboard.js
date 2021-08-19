import { pubsub } from "./pubsub";

const dashboard = (() => {
  let projectsList = [];

  const addProject = (project) => {
    projectsList.push(project);
  }


  pubsub.subscribe('createProject', addProject);
  return { projectsList, addProject };
})();

export { dashboard };