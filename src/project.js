const todoFactory = (title, description, dueDate, priority) => {
  return {title: title, description: description, dueDate: dueDate, priority: priority, checked: false, created_at, updated_at};
}

const projectFactory = (title, description, priority) => {
  let todoList = [];

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  }

  const isCheck = () => {
    todoList.every( item => item.checked);
  }
  return {title: title, description: description, priority: priority, created_at, updated_at, isCheck, addTodoItem};
}

export {todoFactory, projectFactory};