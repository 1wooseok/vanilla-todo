import getTodos from "./getTodos.js";
import todosView from "./view/todos.js";
import counterView from "./view/counter.js";
import filterView from "./view/filter.js";

import registry from './registry.js';

registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filter', filterView);

const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

const root = document.getElementById('root');

window.requestAnimationFrame(() => {
  const newRoot = registry.renderRoot(root, state);
  root.replaceWith(newRoot)
})