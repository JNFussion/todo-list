import { pubsub } from './pubsub';

const Mustache = require('mustache');

const domProject = (() => {
  const target = document.querySelector('.project-content');
  const projectTemplate = document.getElementById('project-template').innerHTML;
  const formTemplate = document.getElementById('project-form-template').innerHTML;

  const renderShow = (project) => {
    document.querySelector('.project').id = project.id;
    target.innerHTML = Mustache.render(projectTemplate, { project: project });
  }

  const renderNew = (project) => {
    document.querySelector('.project').id = ""
    target.innerHTML = Mustache.render(formTemplate, {project});
  }

  const renderEdit= (project) => {
    target.innerHTML = Mustache.render(formTemplate, {project: project});
  }

  pubsub.subscribe('newProject', renderNew);
  pubsub.subscribe('createProject', renderShow);
  pubsub.subscribe('showProject', renderShow);
  pubsub.subscribe('renderEditProject', renderEdit);

  return {renderShow, renderNew, renderEdit}
})();

export { domProject };