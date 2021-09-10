import { format, getHours, isFuture, isToday, compareAsc, compareDesc } from "date-fns";
import isValid from "date-fns/isValid";
import { priorityEnum } from "./helper";

/**
 * Prototype object for todo factory function and project factory function.
 * @param  {String} tittle
 * @param  {String} description
 * @param  {priorityEnum} priority
 * @param  {Date} dueDate
 */

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

/**
 *  Factory function for todo objects.
 *  It adds a reference to the parent project and a boolean attribute to indicate if the task has been completed.
 */

const todoFactory = (title, description, priority, dueDate, project) => {
  const todo = { checked: false, project: project}
  return Object.assign(todo, proto(title, description, priority, dueDate));
}

/**
 *  Factory function for project objects.
 *  It adds an array for all todos that belongs to.
 *  CRUD functions and sorting functions for the array.
 *  
 */

const projectFactory = (title, description, dueDate) => {
  let basicProject = proto(title, description, undefined, dueDate);
  let todoList = [];

  
  const isCheck = () => {
    return todoList.every( item => item.checked);
  }

  const getTodoList = () => todoList;
  const setTodoList = (list) => todoList = list;

  /**
   * It set the priority of the project in fucntion of the todos.
   * Counts each type of priority, then find the max type and assing it to project's priority.
   */

  const setPriority = () => {
    if (todoList.length == 0) return;
    
    let maxPriority = undefined;
    let prioritySum = todoList.reduce(function(obj, item) {
      if (!obj[item.priority.name]) {
        obj[item.priority.name] = 0;
      }
      obj[item.priority.name]++;
      return obj;
    }, {});
    prioritySum = Object.entries(prioritySum);
    maxPriority = prioritySum.reduce((max, item) => { 
      if(item[1] > max[1]){
         max = item;
       }
      return max;
    }, prioritySum[0])[0].toUpperCase();
    basicProject.priority = priorityEnum[maxPriority];
  }

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
    setPriority();
  }
  
  const removeTodoItem = (index) => {
    todoList.splice(index, 1);
    setPriority();
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

  const project = { default:false, isCheck, getTodoList, setTodoList, setPriority, addTodoItem, removeTodoItem, sortByCreatedAt, sortByPriority, sortByDueDate, reverseList }
  return Object.assign(basicProject, project);
}

export {todoFactory, projectFactory};