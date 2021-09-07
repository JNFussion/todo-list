import { pubsub } from "./pubsub";

const hide = (elementToHide) => {
  elementToHide.classList.add("hide");
};

const unhide = (elementToHide) => {
  elementToHide.classList.remove("hide");
};

const toggleHide = (elementToHide) => {
  elementToHide.classList.toggle("hide");
};

const priorityEnum = {
  HIGHT: { weight: 2, name: "hight" },
  MEDIUM: { weight: 1, name: "medium" },
  LOW: { weight: 0, name: "low" },
};

const clearContent = () => {
  let element = document.querySelector(".wrapper");
  if (element.lastElementChild.tagName == "ARTICLE")
    element.removeChild(element.lastElementChild);
};

pubsub.subscribe("newProject", clearContent);
pubsub.subscribe("createProject", clearContent);
pubsub.subscribe("showProject", clearContent)
pubsub.subscribe("showHome", clearContent);
pubsub.subscribe("showToday", clearContent);
pubsub.subscribe("showUpcoming", clearContent);
pubsub.subscribe("showPriority", clearContent);

export { hide, unhide, toggleHide, priorityEnum, clearContent };
