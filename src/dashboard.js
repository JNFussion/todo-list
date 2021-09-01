import { pubsub } from "./pubsub";
import {projectFactory, todoFactory} from './project';
import {priorityEnum} from './helper';
import {endOfTomorrow, set, startOfTomorrow, startOfYesterday } from 'date-fns';
import { domProject } from "./dom-project";
import { nanoid } from "nanoid";

let des = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo nulla. Aenean non nisi vel tellus dignissim scelerisque eget sed erat. Integer dignissim turpis semper dui dapibus condimentum. Donec ut tortor orci. Vivamus ornare lacus dui, nec facilisis leo luctus nec. Nullam egestas convallis iaculis.'

let project = projectFactory('Project1', des, 2, endOfTomorrow());
let project2 = projectFactory('Project2', des,  2, startOfTomorrow());

let todos = [todoFactory('Todo', des, priorityEnum.MEDIUM, new Date(2021,8,24,14,0), project), todoFactory('Todo', des, priorityEnum.LOW, new Date(2021,7,28,18,0), project), todoFactory('Todo', des, priorityEnum.HIGHT, startOfTomorrow(), project)];
let todos2 = [todoFactory('TASK', des, priorityEnum.MEDIUM, new Date(2021,8,24,14,0), project2), todoFactory('Another Task', des, priorityEnum.MEDIUM, new Date(2021,7,28,18,0), project2), todoFactory('Another another task', des, priorityEnum.HIGHT, startOfTomorrow(), project2)];

todos.forEach(item => {
  let date = new Date(2021,7,(Math.floor(Math.random() * (26 - 23 + 1) ) + 23),14,0)
  item.created_at = date;
  item.id = 'todo-' + nanoid()
  project.addTodoItem(item)
});

todos2.forEach(item => {
  let date = new Date(2021,7,(Math.floor(Math.random() * (26 - 23 + 1) ) + 23),14,0)
  item.created_at = date;
  item.id = 'todo-' + nanoid()
  project2.addTodoItem(item);
});

project.id ='project-' + nanoid()
project2.id ='project-' + nanoid()

const dashboard = (() => {
  let projectsList = [];
  let currentProject = project;
  let orderDesc = true;

  const addProject = (project) => projectsList.push(project)
  const addTodoToCurrentProject = (todo) => currentProject.addTodoItem(todo) 
  const getCurrentProject = () => currentProject;
  const setCurrentProject = (project) => currentProject = project;
  const setOrder = (order) => orderDesc = order;
  
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
    pubsub.publish('renderEditTodo', currentProject.getTodoList().filter(todo => todo.id == id)[0]);
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

  const updateOrderList = () => {
    currentProject.reverseList();
    pubsub.publish('showProject', currentProject);
  }

  const sortCurrentProject = (byType) => {
    currentProject[byType](orderDesc);
    pubsub.publish('showProject', currentProject);
  }

  const goToProject = (id) => {
    if(currentProject.id == id) return ;
    let projectWanted = projectsList.find(p => p.id == id);
    setCurrentProject(projectWanted);
    pubsub.publish('showProject', currentProject);
  }

  pubsub.subscribe('createProject', addProject);
  pubsub.subscribe('createProject', setCurrentProject);
  pubsub.subscribe('editProject', editProject);
  pubsub.subscribe('updateProject', updateProject);
  pubsub.subscribe('deleteProject', deleteProject);
  pubsub.subscribe('createTodo', addTodoToCurrentProject);
  pubsub.subscribe('editTodo', editTodo);
  pubsub.subscribe('updateTodo', updateTodo)
  pubsub.subscribe('deleteTodo', removeTodoFromCurrentProject);
  pubsub.subscribe('sortTodosOfProject',sortCurrentProject);
  pubsub.subscribe('swapOrderOption', setOrder);
  pubsub.subscribe('swapOrderOption', updateOrderList);
  pubsub.subscribe('navbarProject', goToProject);

  return { projectsList, addProject, getCurrentProject, setCurrentProject, sortCurrentProject };
})();

pubsub.publish('createProject', project)
pubsub.publish('createProject', project2)

export { dashboard };