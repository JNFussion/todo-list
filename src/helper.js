const hide = (elementToHide) => {
  elementToHide.classList.add('hide')
}

const toggleHide = (elementToHide) => {
  elementToHide.classList.toggle('hide');
}

export {hide, toggleHide}