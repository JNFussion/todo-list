import { pubsub } from "./pubsub";

const Mustache = require("mustache");

const domNavbar = (() => {
  const template = document.getElementById("navbar-project-template");

  const _isHide = (project) => {
    document
      .querySelector(
        `.projects-list li[data-id=${project.id}] .navbar-todos-list`
      )
      .classList.contains("hide");
  };

  const indexProjects = (list) => {
    list.forEach(p => {
      addProject(p)
    });
  }

  const addProject = (project) => {
    document.querySelector(".projects-list").innerHTML += Mustache.render(
      template.innerHTML,
      { project: project }
    );
  };

  const updateProject = (item) => {
    document.querySelector(
      `[data-id=${item.project ? item.project.id : item.id}]`
    ).outerHTML = Mustache.render(template.innerHTML, {
      project: item.project ? item.project : item,
      hidden: !_isHide(item.project ? item.project : item),
    });
  };

  const removeItem = (id) => {
    let itemToRemove = document.querySelector(`[data-id=${id}]`);
    itemToRemove.parentElement.removeChild(itemToRemove);
  };

  pubsub.subscribe('populateNavbar', indexProjects);
  pubsub.subscribe("createProject", addProject);
  pubsub.subscribe("showProject", updateProject);
  pubsub.subscribe("createTodo", updateProject);
  pubsub.subscribe("deleteProject", removeItem);
})();

export { domNavbar };
