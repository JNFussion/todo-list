import { pubsub } from "./pubsub";

/**
 * Module for managing the DOM of the blue bar with sorting option for project's todos.
 * It add or remove current class of the buttons.
 */

const DomBarSettings = (() => {
  let barSettings = null;
  let optionsList = {};

  /**
   * Because the bar can be remove from the DOM, this will run every time an project is displayed.
   */

  const init = () => {
    barSettings = document.querySelector('.settings-bar');
    optionsList = { 
      ORDER: barSettings.querySelectorAll('li button'), 
      DIRECTION: barSettings.querySelectorAll('#direction-order i'),
    }
  }

  const isCurrent = (btn) => {
    btn.classList.contains('current');
  }

  const _removeCurrent = (options) => {
    options.forEach(opt => opt.classList.contains('current') && opt.classList.remove('current'))
  }

  const setCurrent = (current) => {
    let type = "ORDER";
    if(current.className.split(' ').some(c => /fa-sort-*/.test(c))){
      type = "DIRECTION";
    }
    _removeCurrent(optionsList[type]);
    current.classList.add('current');
  }

  pubsub.subscribe('createProject', init)
  pubsub.subscribe('showProject', init)
  pubsub.subscribe('swapSelectBarOptions', setCurrent)

  return {isCurrent}
})();

export {DomBarSettings};