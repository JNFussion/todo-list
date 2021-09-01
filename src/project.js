import { format, getHours, isFuture, isToday, compareAsc, compareDesc } from "date-fns";
import isValid from "date-fns/isValid";

const proto = (title, description, priority, dueDate) => {

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
      if(getHours(dueDate) == 0) {
        return format(dueDate, "dd MMM Y");
      }
      return format(dueDate, "dd MMM Y 'at' kk:mm");
    }
    return 'No deadline';
  }
  const getDate = () => {
    if(!isValid(dueDate)) return "";
    return format(dueDate, "Y-MM-dd");
  }
  const getTime = () => {
    if(!isValid(dueDate)) return "";
    return format(dueDate, "kk:mm")
  }
  return Object.assign(
    { 
      id : null,
      title: title, 
      description: description, 
      priority: priority, 
      dueDate: dueDate, 
      created_at : null,},
    {isObjectValid, getFormatedDueDate, getDate, getTime })
}

const todoFactory = (title, description, priority, dueDate, project) => {
  const todo = { checked: false, project: project}
  return Object.assign(todo, proto(title, description, priority, dueDate));
}

const projectFactory = (title, description, priority, dueDate) => {
  let todoList = [];
  
  const isCheck = () => {
    return todoList.every( item => item.checked);
  }

  const getTodoList = () => todoList;
  const setTodoList = (list) => todoList = list;

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  }
  
  const removeTodoItem = (index) => {
    todoList.splice(index, 1);
  }

  const sortByCreatedAt = (direction) => {
    if(direction){
      todoList.sort((a, b) => compareAsc(a.created_at, b.created_at));
    } else {
      todoList.sort((a, b) => compareDesc(a.created_at, b.created_at));
    }
  }

  const sortByPriority = (direction) => {
    if(direction) {
      todoList.sort((a, b) => a.priority.weight > b.priority.weight);
    }else {
      todoList.sort((a, b) => a.priority.weight < b.priority.weight);
    }
  }

  const sortByDueDate = (direction) => {
    if(direction) {
      todoList.sort((a, b) => compareDesc(a.dueDate, b.dueDate));
    } else {
      todoList.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
    }
  }

  const reverseList = () => {
    todoList.reverse()
  }

  const project = { isCheck, getTodoList, setTodoList, addTodoItem, removeTodoItem, sortByCreatedAt, sortByPriority, sortByDueDate, reverseList }
  return Object.assign(project, proto(title, description, priority, dueDate));
}

export {todoFactory, projectFactory};