// const getTodoCount = (todos) => {
//   const notCompleted = todos.filter(todo => !todo.completed);
//   const { length } = notCompleted;

//   if (length === 1) {
//     return `${length} item left`;
//   }
//   return `${length} items left`;
// }

// export default (targetElement, { todos }) => {
//   const newCounter = targetElement.cloneNode(true);
//   newCounter.textContent = getTodoCount(todos);

//   return newCounter;
// }

const getTodoCount = (todos) => {
  const notCompleted = todos.fileter(todo => !todo.completed);
  const { length } = notCompleted;

  if (length === 1) {
    return `${length} Item left`;
  }
  return `${length} Items left`;
}

export default (targetElement, { todos }) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = getTodoCount(todos);

  return newCounter;
}