import { clearContent } from "./helper";
import { pubsub } from "./pubsub";

const Mustache = require("mustache");

const domViews = (() => {
  const target = document.querySelector(".wrapper");
  const viewTemplate = document.getElementById("view-template").innerHTML;
  const itemTemplate = document.getElementById("item-template").innerHTML;

  const _removeSlide = () => {
    target.querySelector(".navbar").classList.remove("slide-in-x") ||
      target.querySelector(".navbar").classList.remove("slide-out-x");
  };

  const _showView = (list, viewName) => {
    _removeSlide();
    clearContent();
    target.innerHTML += Mustache.render(
      viewTemplate,
      { item: list, viewName: viewName, view: true },
      { todos: itemTemplate }
    );
  };

  const showHome = (list) => {
    _showView(list, "Home");
  };

  const showToday = (list) => {
    _showView(list, "Today");
  };

  const showUpcoming = (list) => {
    _showView(list, "Upcoming");
  };

  const showPriority = (list) => {
    _showView(list, "Priority");
  };
  pubsub.subscribe("showHome", showHome);
  pubsub.subscribe("showToday", showToday);
  pubsub.subscribe("showUpcoming", showUpcoming);
  pubsub.subscribe("showPriority", showPriority);

  return { showHome, showToday, showUpcoming, showPriority };
})();

export { domViews };
