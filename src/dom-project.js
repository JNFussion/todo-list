import { pubsub } from './pubsub';

const Mustache = require('mustache');

/**
 * Module manages  the DOM related with the project objects
 */

const domProject = (() => {

  const target = document.querySelector('.wrapper');
  const projectViewTemplate = document.getElementById('project-view-template').innerHTML;
  const projectTemplate = document.getElementById('project-template').innerHTML;
  const formTemplate = document.getElementById('project-form-template').innerHTML;

  const renderShow = (project) => {
    target.insertAdjacentHTML('beforeend', Mustache.render(projectViewTemplate, { project: project }, {projectPartial: projectTemplate}));
  }

  const renderNew = (project) => {
    if (!document.querySelector('.project')) renderShow(project);
    document.querySelector('.project-content').innerHTML = Mustache.render(formTemplate, {project});
  }

  const renderEdit= (project) => {
    document.querySelector('.project-content').innerHTML = Mustache.render(formTemplate, {project: project});
  }

  pubsub.subscribe('newProject', renderNew);
  pubsub.subscribe('createProject', renderShow);
  pubsub.subscribe('showProject', renderShow);
  pubsub.subscribe('renderEditProject', renderEdit);

  return {renderShow, renderNew, renderEdit }
})();

export { domProject };