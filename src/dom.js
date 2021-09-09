import { parseISO, set } from 'date-fns';
import {domTodo} from './dom-todo';
import { projectFactory, todoFactory } from './project';
import { pubsub } from './pubsub';
import { unhide, priorityEnum, toggleHide } from './helper';
import { nanoid } from 'nanoid';
import { dashboard } from './dashboard';

const domManager = (() => {

  let flagOut = false;

  const _getFullDate = (date, time) => {
      if(!date && time) {
        let timeArray = time.split(':');
        return set(new Date(), {hours: timeArray[0], minutes: timeArray[1]});
      }
      return parseISO(`${date} ${time}`)
  }
  
  const _createItem = (type) => {
    let form  = document.getElementById(`form-${type}`);
    let formData = new FormData(form);
    let dueDate = _getFullDate(formData.get(`${type}[dueDate]-date`),formData.get(`${type}[dueDate]-time`));
    if(type == 'project'){
      return projectFactory(
        formData.get(`${type}[title]`), 
        formData.get(`${type}[description]`),
        dueDate);
    }
    return todoFactory(
      formData.get(`${type}[title]`), 
      formData.get(`${type}[description]`), 
      priorityEnum[formData.get(`${type}[priority]`)], 
      dueDate);
  }
  
  const clearSelection = () => {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
  }

  const isThereForm = () => {
    if(document.querySelectorAll('#form-todo, #form-project').length == 0) {
      return false
    }
    return true;
  }

  /* EVENTS */

  window.addEventListener("load", function(event) {
    dashboard.loadLocalProjects();
    pubsub.publish('populateNavbar', dashboard.getProjects())
    if(dashboard.getDefaultProject()) {
      pubsub.publish('showProject', dashboard.getDefaultProject());
      dashboard.setCurrentProject(dashboard.getDefaultProject());
    }else {
      pubsub.publish('showHome', dashboard.getProjects())
    }
  });

  document.addEventListener('click',function(e){
    console.log(e.target)
    switch (e.target && e.target.id) {
      case 'new-project':
        pubsub.publish('newProject');
        break;
      case 'new-todo':
        if(isThereForm()) break;
        pubsub.publish('newTodo', todoFactory());
        break;
      case 'sortCreatedAt':
        if(e.target.classList.contains('current')) break;
        pubsub.publish('sortTodosOfProject', 'sortByCreatedAt');
        pubsub.publish('swapSelectBarOptions', e.target);
        break;
      case 'sortPriority':
        if(e.target.classList.contains('current')) break;
        pubsub.publish('sortTodosOfProject', 'sortByPriority');
        pubsub.publish('swapSelectBarOptions', e.target)
        break;
      case 'sortDueDate':
        if(e.target.classList.contains('current')) break;
        pubsub.publish('sortTodosOfProject', 'sortByDueDate');
        pubsub.publish('swapSelectBarOptions', e.target)
        break;
      case 'asc':
        if(e.target.classList.contains('current')) break;
        pubsub.publish('swapSelectBarOptions', e.target);
        pubsub.publish('swapOrderOption', false);
        break;
      case 'desc':
        if(e.target.classList.contains('current')) break;
        pubsub.publish('swapSelectBarOptions', e.target)
        pubsub.publish('swapOrderOption', true);
        break;
      case 'toggle-navbar':
        let navbar = document.querySelector('.navbar');
        if(!navbar.classList.contains('slide-in-x') && !navbar.classList.contains('slide-out-x')){
          navbar.classList.add('slide-in-x')  
        }
        console.log(navbar)
        navbar.classList.replace(`slide-${flagOut ? "out-x" : "in-x"}`, `slide-${flagOut ? "in-x" : "out-x"}`)
        flagOut = !flagOut;
        break;
      case 'home-btn':
        pubsub.publish('noCurrentProject', undefined);
        pubsub.publish('showHome', dashboard.getProjects());
        break;
      case 'today-btn':
        pubsub.publish('noCurrentProject', undefined);
        pubsub.publish('showToday', dashboard.sortBy('today'));
        break;
      case 'upcoming-btn':
        pubsub.publish('noCurrentProject', undefined);
        pubsub.publish('showUpcoming', dashboard.sortBy('upcoming', true));
        break;
      case 'priority-btn':
        pubsub.publish('noCurrentProject', undefined);
        pubsub.publish('showPriority', dashboard.sortBy('priority', true));
        break;
    }
    if(e.target && e.target.className.split(' ').some(c => /fa-angle-*/.test(c))) {
      if(e.target.className.split(' ').some(c => /fa-angle-(up|down|right)/.test(c))) {
        let targetItem = e.target.closest('.item');
        if(targetItem){
          toggleHide(targetItem.querySelector('.description-wrapper'));
        e.target.classList.replace('fa-angle-up', 'fa-angle-down') || e.target.classList.replace('fa-angle-down', 'fa-angle-up');
        } else {
          toggleHide(e.target.closest('.navbar-project').querySelector('.navbar-todos-list'));
          e.target.classList.replace('fa-angle-right', 'fa-angle-down') || e.target.classList.replace('fa-angle-down', 'fa-angle-right');
        }
      }
    }

    let item = e.target.closest('.item');
    if(e.target && e.target.classList.contains('fa-edit')){
      if(isThereForm()) return false;
      if(item && item.id.startsWith('todo')){
        pubsub.publish('editTodo', item.id)
      }else {
        pubsub.publish('editProject', e.target.closest('.project').id);
      }
    } else if(e.target && e.target.classList.contains('fa-trash')) {
      if(isThereForm()) return false;
      if (window.confirm("Are you sure you want to delete this task?")) {
        if(item){
          pubsub.publish('deleteTodo', item.id);
        }else {
          pubsub.publish('deleteProject', e.target.closest('.project').id);
        }
      }
    }else if (e.target && e.target.classList.contains('cancel-btn')) {
      let p = dashboard.getCurrentProject()
      p ? pubsub.publish('showProject', p) : pubsub.publish('showHome', dashboard.getProjects());
    }else if (e.target && e.target.classList.contains('complete-btn')){
      if(e.target.closest('.item').classList.contains('checked')) return false;
      pubsub.publish('completedTodo', e.target.closest('.item').id)
    }else if (e.target && e.target.classList.contains('default-btn')) {
      pubsub.publish('defaultProject', e.target.closest('.navbar-project').dataset.id)
    }
  });

  document.addEventListener('submit', (e) => {
    e.preventDefault()
    switch (e.target && e.target.id) {
      case 'form-project':
        let project = _createItem('project');
        let projectId = e.target.closest('.project').id;
        if(projectId){
          project.id = projectId;
          if(project.isObjectValid()){
            pubsub.publish('updateProject', project);
          }else {
            pubsub.publish('renderEditProject', project)
          }
        }else {
          if(project.isObjectValid()){
            project.id = "project-" + nanoid();
            project.created_at = new Date()
            pubsub.publish('createProject', project);
          }else {
            pubsub.publish('newProject', project);
          }
        }
        break;
      case 'form-todo':
        let todo = _createItem('todo');
        let todoId = e.target.closest('.item').id;
        if(todoId){
          todo.id = todoId;
          if(todo.isObjectValid()){
            pubsub.publish('updateTodo', todo);
          }else {
            pubsub.publish('renderEditTodo', todo);
          }
        } else {
          if(todo.isObjectValid()){
            todo.id = "todo-" + nanoid();
            todo.created_at = new Date()
            pubsub.publish('createTodo', todo);
          }else {
            pubsub.publish('newTodo', todo);
          }
        }
        break;
    }
  })

  const doubleHandler = (e) => {
    clearSelection();
    if(e.target && e.target.classList.contains('navbar-project-title')){
      pubsub.publish('projectClicked', e.target.closest('.navbar-project').dataset.id)
    }else if (e.target && e.target.dataset.id){
      if(e.target.dataset.id.startsWith('project')){
        pubsub.publish('projectClicked', e.target.dataset.id)
      }else {
        pubsub.publish('projectClicked', e.target.closest('.navbar-project').dataset.id)
        unhide(document.getElementById(e.target.dataset.id).querySelector('.description-wrapper'));
        document.getElementById(e.target.dataset.id).querySelector('.fa-angle-down, .fa-angle-up').classList.replace('fa-angle-down', 'fa-angle-up')
      }
    }
  }

  document.addEventListener('dblclick', doubleHandler);
  document.addEventListener('touchstart', e => {
    e.preventDefault();
    doubleHandler(e);
  })
})();

export {domManager};