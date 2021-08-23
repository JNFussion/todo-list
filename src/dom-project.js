import { pubsub } from './pubsub';

const Mustache = require('mustache');

const domProject = (() => {
  const target = document.querySelector('.project-content');
  const projectTemplate = document.getElementById('project-template').innerHTML;
  const formTemplate = document.getElementById('project-form-template').innerHTML;

  const renderShow = (project) => {
    target.innerHTML = Mustache.render(projectTemplate, { project: project });
    pubsub.publish('showProject', project)
  }

  const renderNew = () => {
    target.innerHTML = Mustache.render(formTemplate, {});
  }

  const renderEdit= (project) => {
    target.innerHTML = Mustache.render(formTemplate, {project: project});
  }

  pubsub.subscribe('newProject', renderNew);
  pubsub.subscribe('createProject', renderShow);
  pubsub.subscribe('editProject', renderEdit);

  return {renderShow, renderNew, renderEdit}
})();

export { domProject };