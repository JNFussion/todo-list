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

  const getIndexTodo = (btn) => {
    let list = Array.from(target.querySelectorAll('.todo'));
    let max = list.length - 1;
    let index = max - list.indexOf(btn.closest('.todo'));
    pubsub.publish('deleteTodo', index);
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
    if(project.getTodoList().length == 0){
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
    newArticle.innerHTML = Mustache.render(todoTemplate, { todo: todo})
    target.prepend(newArticle);
  }

  const renderNew = () => {
    let newArticle = _article();
    newArticle.innerHTML = Mustache.render(formTemplate, {})
    target.appendChild(newArticle);
  }

  const renderEdit= (todo) => {
    document.getElementById('form-todo').closest('.todo').innerHTML = Mustache.render(formTemplate, {todo: todo});
  }

  

  pubsub.subscribe('newProject', removeTodos);
  pubsub.subscribe('showProject', renderIndex);
  pubsub.subscribe('newTodo', contractAll);
  pubsub.subscribe('newTodo', toggleNewBtn);
  pubsub.subscribe('newTodo', renderNew);
  pubsub.subscribe('deleteButtonTodo', getIndexTodo);
  pubsub.subscribe('createTodo', removeForm);
  pubsub.subscribe('createTodo', toggleNewBtn)
  pubsub.subscribe('createTodo', renderShow);
  pubsub.subscribe('sortedTodos', renderIndex);

  return {renderShow, renderNew, renderEdit, removeForm}
})();

 export {domTodo};