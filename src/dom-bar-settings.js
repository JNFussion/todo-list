import { pubsub } from "./pubsub";

const DomBarSettings = (() => {
  let barSettings = null;
  let optionsList = {};

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