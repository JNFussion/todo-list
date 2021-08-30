import { render } from 'mustache';
import { pubsub } from './pubsub';
import { hide, toggleHide } from './helper';

const Mustache = require('mustache');

const domTodo = (() => {
  const target = document.querySelector('.todo-list');
  const newTodoBtn = document.querySelector('#new-todo');
  const todoTemplate = document.getElementById('todo-template').innerHTML;
  const formTemplate = document.getElementById('todo-form-template').innerHTML;
  let noTodoFlag = true;

  const _article = () => {
    let article = document.createElement('article');
    article.classList.add('todo');
    return article;
  }

  const removeForm = () => {
    target.removeChild(target.querySelector('#form-todo').parentElement);
  }

  const removeTodos = () => {
    target.textContent = '';
  }

  const contractAll = () => {
    target.querySelectorAll('.description-wrapper').forEach(item => hide(item))
  }

  const toggleNewBtn = () => {
    toggleHide(newTodoBtn)
  }

  const renderIndex = (project) => {
    removeTodos();
    if(project.getTodoList() == 0){
      renderShow(null);
      noTodoFlag = true;
    }else {
      project.getTodoList().forEach(todo => renderShow(todo));
    }
  }

  const renderShow = (todo) => {
    noTodoFlag && removeTodos();
    noTodoFlag = false;
    let newArticle = _article();

    if(todo) newArticle.id = todo.id;

    newArticle.innerHTML = Mustache.render(todoTemplate, { todo: todo})
    target.prepend(newArticle);
  }

  const renderNew = (todo) => {
    if(target.querySelectorAll('.todo').length == 1 && !target.querySelectorAll('.todo')[0].id) removeTodos();
    
    let newArticle = _article();
    newArticle.innerHTML = Mustache.render(formTemplate, {todo});
    newArticle.querySelector('select[name="todo[priority]"]').value = 'HIGHT';
    target.appendChild(newArticle);
  }

  const renderEdit= (todo) => {
    let articleToEdit = target.querySelector(`#${todo.id}`);
    if(articleToEdit.id) {
      articleToEdit.innerHTML = Mustache.render(formTemplate, {todo});
      articleToEdit.querySelector('select[name="todo[priority]"]').value = todo.priority.name.toUpperCase();
    }else {
      renderNew(todo);
    }
  }

  
  
  pubsub.subscribe('newProject', removeTodos);
  pubsub.subscribe('createProject', renderIndex)
  pubsub.subscribe('showProject', renderIndex);
  pubsub.subscribe('newTodo', contractAll);
  pubsub.subscribe('newTodo', toggleNewBtn);
  pubsub.subscribe('newTodo', renderNew);
  pubsub.subscribe('createTodo', removeForm);
  pubsub.subscribe('createTodo', toggleNewBtn)
  pubsub.subscribe('createTodo', renderShow);
  pubsub.subscribe('renderEditTodo', renderEdit);
  pubsub.subscribe('sortedTodos', renderIndex);

  return {renderShow, renderNew, renderEdit, removeForm }
})();

 export {domTodo};