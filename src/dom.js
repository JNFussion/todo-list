import { parseISO, set, startOfYesterday } from 'date-fns';
import {domProject} from './dom-project';
import {domTodo} from './dom-todo';
import { projectFactory, todoFactory } from './project';
import { pubsub } from './pubsub';
import { hide, priorityEnum, toggleHide } from './helper';
import { DomBarSettings } from './dom-bar-settings';
import { nanoid } from 'nanoid';

const domManager = (() => {

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
        priorityEnum[formData.get(`${type}[priority]`)],
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

  document.addEventListener('click',function(e){
    switch (e.target && e.target.id) {
      case 'new-project':
        pubsub.publish('newProject');
        break;
      case 'new-todo':
        if(isThereForm()) break;

        pubsub.publish('newTodo', projectFactory());
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
    }
    if(e.target && e.target.className.split(' ').some(c => /fa-angle-*/.test(c))) {
      if(e.target.className.split(' ').some(c => /fa-angle-(up|down)/.test(c))) {
        toggleHide(e.target.closest('.todo').querySelector('.description-wrapper'));
        e.target.classList.replace('fa-angle-up', 'fa-angle-down') || e.target.classList.replace('fa-angle-down', 'fa-angle-up');
      }else if(e.target.className.split(' ').some(c => /fa-angle-(right|down)/.test(c))){
        e.target.classList.replace('fa-angle-right', 'fa-angle-down') || e.target.classList.replace('fa-angle-down', 'fa-angle-right');
      }
    }
    let item = e.target.closest('.todo');
    if(e.target && e.target.classList.contains('fa-edit')){
      if(isThereForm()) return false;
      if(item){
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
            project.id = nanoid();
            project.created_at = new Date()
            pubsub.publish('createProject', project);
          }else {
            pubsub.publish('newProject', project);
          }
        }
        break;
      case 'form-todo':
        let todo = _createItem('todo');
        let todoId = e.target.closest('.todo').id;
        if(todoId){
          todo.id = todoId;
          if(todo.isObjectValid()){
            pubsub.publish('updateTodo', todo);
          }else {
            pubsub.publish('renderEditTodo', todo);
          }
        } else {
          if(todo.isObjectValid()){
            todo.id = nanoid();
            todo.created_at = new Date()
            pubsub.publish('createTodo', todo);
          }else {
            pubsub.publish('newTodo', todo);
          }
        }
        break;
    }
  })

  document.addEventListener('dblclick', e => {
    clearSelection();
  })
})();

export {domManager};