const hide = (elementToHide) => {
  elementToHide.classList.add('hide')
}

const unhide = (elementToHide) => {
  elementToHide.classList.remove('hide')
}

const toggleHide = (elementToHide) => {
  elementToHide.classList.toggle('hide');
}

const priorityEnum ={
  HIGHT: {weight: 2, name: "hight" },
  MEDIUM: {weight: 1, name: "medium"},
  LOW: {weight: 0, name: "low"}
}

export {hide, unhide, toggleHide, priorityEnum}