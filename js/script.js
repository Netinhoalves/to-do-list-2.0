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

// Funções
const searchTodos = (searchValue) => {
  const todos = document.querySelectorAll('.todo');

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector('h5').innerText.toLowerCase();

    if (todoTitle.includes(searchValue)) {
      todo.style.display = 'flex';
    } else {
      todo.style.display = 'none';
    }
  });
};

const filterTodos = (filter) => {
  const todos = document.querySelectorAll('.todo');

  todos.forEach((todo) => {
    switch (filter) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'done':
        todo.classList.contains('done')
          ? (todo.style.display = 'flex')
          : (todo.style.display = 'none');
        break;
      case 'todo':
        !todo.classList.contains('done')
          ? (todo.style.display = 'flex')
          : (todo.style.display = 'none');
        break;
      case 'low':
        todo.querySelector('.priority.low')
          ? (todo.style.display = 'flex')
          : (todo.style.display = 'none');
        break;
      case 'medium':
        todo.querySelector('.priority.medium')
          ? (todo.style.display = 'flex')
          : (todo.style.display = 'none');
        break;
      case 'high':
        todo.querySelector('.priority.high')
          ? (todo.style.display = 'flex')
          : (todo.style.display = 'none');
        break;
      case 'house':
        todo.querySelector('.card-img-top.house')
        ? (todo.style.display = 'flex')
        : (todo.style.display = 'none');
      break;
      case 'education':
        todo.querySelector('.card-img-top.education')
        ? (todo.style.display = 'flex')
        : (todo.style.display = 'none');
      break;
      case 'work':
        todo.querySelector('.card-img-top.work')
        ? (todo.style.display = 'flex')
        : (todo.style.display = 'none');
      break;
      default:
        todo.style.display = 'flex';
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
  searchTodos('');
});

filterSelect.addEventListener('change', (e) => {
  filterTodos(e.target.value);
});
