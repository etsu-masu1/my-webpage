const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todo = input.value.trim();
  if (todo !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = todo;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    const li = target.parentElement;
    list.removeChild(li);
  } else if (target.tagName === 'INPUT') {
    const li = target.parentElement;
    li.classList.toggle('completed');
  }
});