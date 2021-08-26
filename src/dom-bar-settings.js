import { pubsub } from "./pubsub";

const DomBarSettings = (() => {
  const barSettings = document.querySelector('.settings-bar');
  const optionsList = { 
    ORDER: barSettings.querySelectorAll('li button'), 
    DIRECTION: barSettings.querySelectorAll('#direction-order i'),
    STYLE: barSettings.querySelectorAll('#style-grid i')
  };

  const isCurrent = (btn) => {
    btn.classList.contains('current');
  }

  const _removeCurrent = (options) => {
    options.forEach(opt => opt.classList.contains('current') && opt.classList.remove('current'))
  }

  const setCurrent = (current) => {
    let type = "ORDER";
    if (current.tagName != 'button') {
      if(current.className.split(' ').some(c => /fa-sort-*/.test(c))){
        type = "DIRECTION";
      }else if (current.className.split(' ').some(c => /fa-grip-*/.test(c))){
        type = "STYLE";
      }
    }
    _removeCurrent(optionsList[type]);
    current.classList.add('current');
  }

  pubsub.subscribe('swapSelectBarOptions', setCurrent)

  return {isCurrent}
})();

export {DomBarSettings};