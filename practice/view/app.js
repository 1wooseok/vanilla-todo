import todosView from "./todos.js";
import counterView from "./counter.js";
import filterView from "./filter.js";

export default (targetElement, state) => {
  const newRoot = targetElement.cloneNode(true);

  const list = newRoot.querySelector('.todo-list');
  const count = newRoot.querySelector('.todo-count');
  const filter = newRoot.querySelector('.todo-filter');

  list.replaceWith(todosView(list, state));
  count.replaceWith(counterView(list, state));
  filter.replaceWith(filterView(list, state));

  return newRoot;
}