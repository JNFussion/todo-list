import { parseISO, set } from 'date-fns';
import {domProject} from './dom-project';
import {domTodo} from './dom-todo';
import { projectFactory, todoFactory } from './project';
import { pubsub } from './pubsub';
import { hide, toggleHide } from './helper';

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
      return projectFactory( formData.get(`${type}[title]`), 
        formData.get(`${type}[description]`), 
        formData.get(`${type}[priority]`), 
        dueDate, 
        new Date());
    }

    return todoFactory(formData.get(`${type}[title]`), 
      formData.get(`${type}[description]`), 
      formData.get(`${type}[priority]`), 
      dueDate, 
      new Date());
  }

  /* EVENTS */

  document.addEventListener('click',function(e){
    switch (e.target && e.target.id) {
      case 'new-project':
        pubsub.publish('newProject');
        break;
      case 'new-todo':
        pubsub.publish('newTodo');
        break;
    }
    if(e.target && e.target.className.split(' ').some(c => /fa-angle-*/.test(c))) {
      if(e.target.className.split(' ').some(c => /fa-angle-(up|down)/.test(c))) {
        toggleHide(e.target.closest('.todo').querySelector('.description-wrapper'))
        e.target.classList.replace('fa-angle-up', 'fa-angle-down') || e.target.classList.replace('fa-angle-down', 'fa-angle-up')
      }else if(e.target.className.split(' ').some(c => /fa-angle-(right|down)/.test(c))){
        e.target.classList.replace('fa-angle-right', 'fa-angle-down') || e.target.classList.replace('fa-angle-down', 'fa-angle-right')
      }
    }
  });

  document.addEventListener('submit', (e) => {
    switch (e.target && e.target.id) {
      case 'form-project':
        let project = _createItem('project');
        if (project.isObjectValid()){
          pubsub.publish('createProject', project);
        }else {
          pubsub.publish('editProject', project)
        }
        break;
      case 'form-todo':
        let todo = _createItem('todo');
        if (todo.isObjectValid()){
          pubsub.publish('createTodo', todo);
        }else {
          pubsub.publish('editProject', todo)
        }
        break;
    }
    e.preventDefault();
  })

})();

export {domManager};