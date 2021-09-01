import { projectFactory } from './project';
import { pubsub } from './pubsub';

const Mustache = require('mustache');

const domNavbar = (() => {
  const projectsUl = document.querySelector('.projects-list');
  const template = document.getElementById('navbar-project-template');

  const _isHide = (project) => {
    projectsUl.querySelector(`li[data-id=${project.id}] .navbar-todos-list`).classList.contains('hide');
  }

  const addAllProject = (projects) => {
    projectsUl.innerHTML = Mustache.render(template.innerHTML, {project: projects})
  }

  const addProject = (project) => {
    projectsUl.innerHTML += Mustache.render(template.innerHTML, {project: project})
  }

  const updateProject = (project) => {
    projectsUl.querySelector(`[data-id=${project.id}]`).outerHTML = Mustache.render(template.innerHTML, {project: project, hidden: !_isHide(project)})
  }

  const removeItem = (id) => {
    let itemToRemove = projectsUl.querySelector(`[data-id=${id}]`);
    itemToRemove.parentElement.removeChild(itemToRemove);
  }

  pubsub.subscribe('createProject', addProject);
  pubsub.subscribe('showProject', updateProject);
  pubsub.subscribe('deleteProject', removeItem);
  pubsub.subscribe('deleteTodo', removeItem);
})();

export {domNavbar}