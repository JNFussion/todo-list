import { pubsub } from './pubsub';
import { hide, unhide } from './helper';

const Mustache = require('mustache');

/**
 * Module manages  the DOM related with the todos objects
 */

const domTodo = (() => {
  let target = undefined;
  let newTodoBtn = undefined;
  const todoTemplate = document.getElementById('item-template').innerHTML;
  const formTemplate = document.getElementById('todo-form-template').innerHTML;
  let noTodoFlag = true;

  const init = () => {
    target = document.querySelector('.todo-list');
    newTodoBtn = document.querySelector('#new-todo');
  }

  const _article = () => {
    let article = document.createElement('article');
    article.classList.add('item');
    return article;
  }

  const removeForm = () => {
    target.removeChild(target.querySelector('#form-todo').parentElement);
  }

  const removeTodos = () => {
    if(target) target.textContent = '';
  }

  const contractAll = () => {
    target.querySelectorAll('.description-wrapper').forEach(item => hide(item))
  }

  const renderIndex = (project) => {
    removeTodos();
    if(project.getTodoList() == 0){
      renderShow(null);
      noTodoFlag = true;
    }else {
      project.getTodoList().filter(t => t.checked).forEach(todo => renderShow(todo));
      project.getTodoList().filter(t => !t.checked).forEach(todo => renderShow(todo));
    }
  }

  const renderShow = (todo) => {
    noTodoFlag && removeTodos();
    noTodoFlag = false;
    target.innerHTML = Mustache.render(todoTemplate, { item: todo}) + target.innerHTML
    unhide(newTodoBtn);
  }

  const renderNew = (todo) => {
    if(target.querySelectorAll('.item').length == 1 && !target.querySelectorAll('.item')[0].id) removeTodos();
    
    let newArticle = _article();
    newArticle.innerHTML = Mustache.render(formTemplate, {todo});
    newArticle.querySelector('select[name="todo[priority]"]').value = 'HIGHT';
    target.appendChild(newArticle);
    hide(newTodoBtn)
  }

  const renderEdit= (todo) => {
    let articleToEdit = target.querySelector(`#${todo.id}`);
    if(articleToEdit.id) {
      articleToEdit.innerHTML = Mustache.render(formTemplate, {todo});
      articleToEdit.querySelector('select[name="todo[priority]"]').value = todo.priority.name.toUpperCase();
      hide(newTodoBtn)
    }else {
      renderNew(todo);
    }
  }

  
  
  pubsub.subscribe('newProject', removeTodos);
  pubsub.subscribe('createProject', init);
  pubsub.subscribe('showProject', init);
  pubsub.subscribe('createProject', renderIndex);
  pubsub.subscribe('showProject', renderIndex);
  pubsub.subscribe('newTodo', contractAll);
  pubsub.subscribe('newTodo', renderNew);
  pubsub.subscribe('createTodo', removeForm);
  pubsub.subscribe('createTodo', renderShow);
  pubsub.subscribe('renderEditTodo', renderEdit);
  pubsub.subscribe('sortedTodos', renderIndex);
  pubsub.subscribe('projectClicked', init);
  pubsub.subscribe('projectClicked', contractAll);

  return {init, renderShow, renderNew, renderEdit, removeForm, contractAll }
})();

 export {domTodo};