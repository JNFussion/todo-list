import { format, isFuture, isToday } from "date-fns";
import isValid from "date-fns/isValid";


const proto = (title, description, priority, dueDate, created_at) => {
  return Object.assign(
    { title: title, 
      description: description, 
      priority: priority, 
      dueDate: dueDate, 
      created_at : created_at, 
      updated_at : created_at },
    {
      _isValidDate: () => {
        return !isValid(dueDate) || isFuture(dueDate);
      },
      isObjectValid: () => {
        return title != '' && _isValidDate();
      },
      getFormatedDueDate: () => {
        if(isValid(dueDate)){
          if(isToday(dueDate)){
            return format(dueDate, 'kk:mm');
          }
          return format(dueDate, "dd MMM Y 'at' kk:mm");
        }
        return 'No deadline';
      }
    }
  )
}

const todoFactory = (title, description, dueDate, priority, created_at) => {
  const todo = { checked: false }
  return Object.assign(todo, proto(title, description, priority,dueDate ,created_at));
}

const projectFactory = (title, description, priority,dueDate ,created_at) => {
  let todoList = [];
  const isCheck = () => {
    return todoList.every( item => item.checked);
  }

  const getTodoList = () => todoList;

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  }
  const project = { isCheck, getTodoList, addTodoItem }
  return Object.assign(project, proto(title, description, priority,dueDate ,created_at));
}

export {todoFactory, projectFactory};