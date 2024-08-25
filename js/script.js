// Seleção de elemnetos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoTypeSelect = document.querySelector('#todo-type-select');
const todoPrioritySelect = document.querySelector('#todo-priority-select');
const todoList = document.querySelector('#todo-list');
const toolbar = document.querySelector('#toolbar');
const searchInput = document.querySelector('#search-input');
const eraseButton = document.querySelector('#erase-button');
const filterSelect = document.querySelector('#filter-select');
const todos = document.querySelectorAll('.todo');

// Funções
const searchTodos = (searchValue) => {
  todos.forEach((todo) => {
    const todoTitle = todo.querySelector('h5').innerText.toLowerCase();

    if (todoTitle.includes(searchValue)) {
      todo.style.display = 'flex';
    } else {
      todo.style.display = 'none';
    }
  });
};

// Eventos
searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();
  searchTodos(searchValue);
});

eraseButton.addEventListener('click', (e) => {
  e.preventDefault();

  searchInput.value = '';
});
