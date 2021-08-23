import { render } from 'mustache';
import { pubsub } from './pubsub';
import { hide, toggleHide } from './helper';

const Mustache = require('mustache');

const domTodo = (() => {
  const target = document.querySelector('.todo-list');
  const newTodoBtn = target.querySelector('#new-todo');
  const todoTemplate = document.getElementById('todo-template').innerHTML;
  const formTemplate = document.getElementById('todo-form-template').innerHTML;



  const _article = () => {
    let article = document.createElement('article');
    article.classList.add('todo');
    return article;
  }

  const removeForm = () => {
    target.removeChild(target.querySelector('#form-todo').parentElement);
  }

  const removeTodos = () => {
    let newTodoBtn = target.querySelector('#new-todo');
    target.textContent = '';
    console.log(newTodoBtn)
    target.append(newTodoBtn);
  }

  const contractAll = () => {
    target.querySelectorAll('.description-wrapper').forEach(item => hide(item))
  }

  const toggleNewBtn = () => {
    toggleHide(newTodoBtn)
  }

  const renderIndex = (project) => {
    project.getTodoList().forEach(todo => domTodo.renderShow(todo));
  }

  const renderShow = (todo) => {
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
  pubsub.subscribe('createTodo', removeForm);
  pubsub.subscribe('createTodo', toggleNewBtn)
  pubsub.subscribe('createTodo', renderShow);

  return {renderShow, renderNew, renderEdit, removeForm}
})();

 export {domTodo};