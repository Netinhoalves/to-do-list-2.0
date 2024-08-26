const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoTypeSelect = document.querySelector('#todo-type-select');
const todoPrioritySelect = document.querySelector('#todo-priority-select');
const todoList = document.querySelector('#todo-list');
const toolbar = document.querySelector('#toolbar');
const searchInput = document.querySelector('#search-input');
const eraseButton = document.querySelector('#erase-button');
const filterSelect = document.querySelector('#filter-select');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const editTypeSelect = document.querySelector('#edit-type-select');
const editPrioritySelect = document.querySelector('#edit-priority-select');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

const typeImageMap = {
  house: './img/casa-card.png',
  education: './img/ensino-card.png',
  work: './img/trabalho-card.png',
};

const priorityMap = {
  low: 'Baixa',
  medium: 'Média',
  high: 'Alta',
};

const saveTodo = (text, type, priority, done = false) => {
  const todo = document.createElement('div');
  todo.classList.add('todo', 'card');

  const img = document.createElement('img');
  img.classList.add('card-img-top', type);
  img.src = typeImageMap[type];
  todo.appendChild(img);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.innerText = text;
  cardBody.appendChild(title);

  const priorityCard = document.createElement('p');
  priorityCard.classList.add('priority', priority, 'card-text');
  priorityCard.innerText = priorityMap[priority];
  cardBody.appendChild(priorityCard);

  const finishBtn = document.createElement('button');
  finishBtn.classList.add('finish-todo', 'btn');
  finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  cardBody.appendChild(finishBtn);

  finishBtn.addEventListener('click', () => {
    todo.classList.toggle('done');
  });

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-todo', 'btn');
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  cardBody.appendChild(editBtn);

  editBtn.addEventListener('click', () => {
    editInput.value = text;
    editTypeSelect.value = type;
    editPrioritySelect.value = priority;
    toggleForms();
  });

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-todo', 'btn');
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  cardBody.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    todo.remove();
  });

  todo.appendChild(cardBody);

  if (done) {
    todo.classList.add('done');
  }

  todoList.appendChild(todo);
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value.trim();
  const typeValue = todoTypeSelect.value;
  const priorityValue = todoPrioritySelect.value;

  if (inputValue && typeValue !== 'Tipo' && priorityValue !== 'Prioridade') {
    saveTodo(inputValue, typeValue, priorityValue, false);
    todoInput.value = '';
    todoTypeSelect.value = 'Tipo';
    todoPrioritySelect.value = 'Prioridade';
  } else {
    $('#feedbackModal').modal('show');
  }
});

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

searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();
  searchTodos(searchValue);
});

eraseButton.addEventListener('click', (e) => {
  e.preventDefault();

  searchInput.value = '';
  searchTodos('');
});

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

filterSelect.addEventListener('change', (e) => {
  filterTodos(e.target.value);
});

const toggleForms = () => {
  editForm.classList.toggle('hide');
  todoForm.classList.toggle('hide');
  toolbar.classList.toggle('hide');
  todoList.classList.toggle('hide');
};

cancelEditBtn.addEventListener('click', (e) => {
  e.preventDefault();

  toggleForms();
});