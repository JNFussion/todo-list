import { pubsub } from "./pubsub";
import {projectFactory, todoFactory} from './project';
import {add, compareAsc, compareDesc, isAfter, isBefore, isToday, startOfTomorrow } from 'date-fns';

/**
 * Module for the logic of the site.
 * It contains CRUD, sorting functions.
 * 
 * projectList => Array with all the projects.
 * currentProject => Project that is currently on screen.
 * defaultProject => A favourite project.
 * orderDesc => Boolean variable used for the sorting function.
 */


const dashboard = (() => {
  let projectsList = [];
  let currentProject = undefined;
  let defaultProject = undefined;
  let orderDesc = true;

  const getDefaultProject = () => defaultProject;
  const getProjects = () => projectsList;
  const getCurrentProject = () => currentProject;
  const getTodoFromProjects = (id) => {
    for (let p of projectsList) {
      for (let t of p.getTodoList()) {
        if(t.id == id) return t;
      }
    }
    return -1;
  }
  const addProject = (project) => projectsList.push(project)
  const addTodoToCurrentProject = (todo) => currentProject.addTodoItem(todo) 
  const setCurrentProject = (project) => currentProject = project;
  const setProjectToTodo = (todo) => todo.project = currentProject; 
  const setOrder = (order) => orderDesc = order;
  const setDefaultProject = (id) => {
    if(defaultProject) {
      defaultProject.default = false;
      saveLocalProject(defaultProject);
      pubsub.publish('refreshNavbar', defaultProject);
      if(defaultProject.id == id){
        defaultProject = undefined;
        return;
      }
    }
    let p = projectsList.find(p => p.id == id);
    p.default = true;
    defaultProject = p;
    saveLocalProject(defaultProject);
    pubsub.publish('refreshNavbar', defaultProject);
  }

  const removeCurrentFromProjectList = () => {
    let index = projectsList.indexOf(currentProject);
    projectsList.splice(index, 1);
  }

  const removeTodoFromCurrentProject = (id) => {
    currentProject.setTodoList(currentProject.getTodoList().filter(todo => todo.id !== id));
    pubsub.publish('showProject', currentProject)
  }

  const editProject = (id) => {
    if(currentProject.id == id){
      pubsub.publish('renderEditProject', currentProject);
    } else {
      pubsub.publish('showProject', currentProject);
    }
  }
  const editTodo = (id) => {
    pubsub.publish('renderEditTodo', getTodoFromProjects(id));
    return getTodoFromProjects(id);
  }

  const updateTodo = (todo) => {
    let oldTodo = currentProject.getTodoList().filter(t => t.id == todo.id)[0];
    todo.project = oldTodo.project
    todo.created_at = oldTodo.created_at;
    Object.assign(oldTodo, todo);

    pubsub.publish('showProject', currentProject);
  }
  const updateProject = (project) => {
    let todos = currentProject.getTodoList();
    Object.assign(currentProject, project);
    currentProject.setTodoList(todos);
    currentProject.setPriority();
    pubsub.publish('showProject', currentProject);
  }

  const deleteProject = (id) => {
    if(currentProject.id != id) return;
    removeCurrentFromProjectList();
    if(projectsList.length == 0){
      currentProject = null;
      pubsub.publish('newProject', projectFactory());
    }else {
      currentProject = projectsList[0];
      pubsub.publish('showProject', currentProject);
    }
  }

  const completeTodo = (id) => {
    let checkedTodo = getTodoFromProjects(id);
    checkedTodo.checked = true;
    saveLocalProject(checkedTodo);
    pubsub.publish('showProject', checkedTodo.project);
  } 

  const updateOrderList = () => {
    currentProject.reverseList();
    pubsub.publish('sortedTodos', currentProject);
  }

  const sortCurrentProject = (byType) => {
    currentProject[byType](orderDesc);
    pubsub.publish('sortedTodos', currentProject);
  }

  const goToProject = (id) => {
    if( currentProject && currentProject.id == id ) return ;
    let projectWanted = projectsList.find(p => p.id == id);
    setCurrentProject(projectWanted);
    pubsub.publish('showProject', currentProject);
  }

  /**
   * Get all the todos form every project and sort them.
   * 
   * @param {String} byType Indicate the type of sorting which are "today", "upcoming" and "priority".
   * @param {Boolean} orderDesc Descending or Ascending order.
   * @returns {Array} Sorted todos.
   */


  const sortBy = (byType, orderDesc) => {
    let allTodos = [];
    projectsList.forEach(p => allTodos = allTodos.concat(p.getTodoList()))

    switch(byType) {
      case 'today':
        allTodos = allTodos.filter(t => isToday(t.dueDate))
        allTodos.sort((a, b) => compareDesc(a.dueDate, b.dueDate))
      case 'upcoming':
        allTodos = allTodos.filter(t => !isAfter(t.dueDate, startOfTomorrow()) && !isBefore(t.dueDate, add(Date.now, {days: 7})));
        allTodos.sort((a, b) => (orderDesc ? compareDesc(a.dueDate, b.dueDate) : compareAsc(a.dueDate, b.dueDate)) || b.priority.weight - a.priority.weight)
        break;
      case 'priority': 
        allTodos.sort((a, b) =>  (orderDesc ?  b.priority.weight - a.priority.weight : a.priority.weight - b.priority.weight) || compareAsc(a.dueDate, b.dueDate))
        break;
    }
    return allTodos;
  }

  const _projectToString = (project) => {
    let projectToSaveWithTodos = {
      ...project,
      todos: project.getTodoList()
    }
    return JSON.stringify(projectToSaveWithTodos)
  }

  const loadLocalProjects = () => {
    projectsList.length = 0;
    for (var i = 0; i < localStorage.length; i++){
      let tempObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
      let newProject = projectFactory(tempObj.title, tempObj.description, new Date(tempObj.dueDate));
      newProject.id = tempObj.id;
      newProject.priority = tempObj.priority;
      newProject.created_at = new Date(tempObj.created_at);
      newProject.default = tempObj.default;

      if(newProject.default) defaultProject = newProject;

      tempObj.todos.forEach(t => {
        let newTodo = todoFactory(t.title, t.description, t.priority, new Date(t.dueDate), newProject);
        newTodo.id = t.id;
        newTodo.created_at = new Date(t.created_at);
        newTodo.checked = t.checked;
        newProject.addTodoItem(newTodo);
      })
      addProject(newProject);
    }
  }

  /**
   * It save a project locally .
   * @param {(Object|String)} item Can be a project object, a todo object or the id of a todo object.
   */

  const saveLocalProject = (item) => {
    let projectsToSave = undefined
    if(item.project) {
      projectsToSave = item.project;
    }else if(item.id) {
      projectsToSave = item;
    }else {
      projectsToSave = projectsList.find(p => p.getTodoList().find(t => t.id == item))
      projectsToSave.getTodoList().splice(projectsToSave.getTodoList().findIndex(t => t.id == item), 1);
    }
    localStorage.removeItem(projectsToSave.id);
    localStorage.setItem(projectsToSave.id, _projectToString(projectsToSave));
  }

  const removeLocalProject = (id) => {
    localStorage.removeItem(id);
  }

  pubsub.subscribe('createProject', addProject);
  pubsub.subscribe('createProject', setCurrentProject);
  pubsub.subscribe('createProject', saveLocalProject);
  pubsub.subscribe('editProject', editProject);
  pubsub.subscribe('updateProject', updateProject);
  pubsub.subscribe('updateProject', saveLocalProject);
  pubsub.subscribe('deleteProject', deleteProject);
  pubsub.subscribe('deleteProject', removeLocalProject);
  pubsub.subscribe('createTodo', setProjectToTodo);
  pubsub.subscribe('createTodo', addTodoToCurrentProject);
  pubsub.subscribe('createTodo', saveLocalProject);
  pubsub.subscribe('editTodo', editTodo);
  pubsub.subscribe('updateTodo', updateTodo);
  pubsub.subscribe('updateTodo', saveLocalProject)
  pubsub.subscribe('deleteTodo', saveLocalProject);
  pubsub.subscribe('deleteTodo', removeTodoFromCurrentProject);
  pubsub.subscribe('sortTodosOfProject',sortCurrentProject);
  pubsub.subscribe('swapOrderOption', setOrder);
  pubsub.subscribe('swapOrderOption', updateOrderList);
  pubsub.subscribe('projectClicked', goToProject);
  pubsub.subscribe('noCurrentProject', setCurrentProject);
  pubsub.subscribe('completedTodo', completeTodo);
  pubsub.subscribe('defaultProject', setDefaultProject);

  return {getDefaultProject, getProjects, addProject, getCurrentProject, setCurrentProject, sortCurrentProject, sortBy, loadLocalProjects };
})();

export { dashboard };