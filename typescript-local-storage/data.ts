/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

const previousTodosJSON = localStorage.getItem('typescript-local-storage');
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', () => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('typescript-local-storage', todosJSON);
});
