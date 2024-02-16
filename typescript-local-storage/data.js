'use strict';
let todos = [];
const previousTodosJSON = localStorage.getItem('typescript-local-storage');
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', () => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('typescript-local-storage', todosJSON);
});
