import { format, isFuture, isToday } from "date-fns";
import isValid from "date-fns/isValid";


const proto = (title, description, priority, dueDate, created_at) => {
 
  const _isValidDate = () => {
    return !isValid(dueDate) || isFuture(dueDate);
  }
  const isObjectValid = () => {
    return title != '' && _isValidDate();
  }
  const getFormatedDueDate = () => {
    if(isValid(dueDate)){
      if(isToday(dueDate)){
        return format(dueDate, 'kk:mm');
      }
      return format(dueDate, "dd MMM Y 'at' kk:mm");
    }
    return 'No deadline';
  }
  return Object.assign(
    { title: title, 
      description: description, 
      priority: priority, 
      dueDate: dueDate, 
      created_at : created_at, 
      updated_at : created_at },
    { isObjectValid, getFormatedDueDate })
}

const todoFactory = (title, description, priority, dueDate, created_at, project) => {
  const todo = { checked: false, project: project }
  return Object.assign(todo, proto(title, description, priority, dueDate ,created_at));
}

const projectFactory = (title, description, priority, dueDate, created_at) => {
  let todoList = [];
  
  const isCheck = () => {
    return todoList.every( item => item.checked);
  }

  const getTodoList = () => todoList;

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  }
  const project = { isCheck, getTodoList, addTodoItem }
  return Object.assign(project, proto(title, description, priority, dueDate ,created_at));
}

export {todoFactory, projectFactory};