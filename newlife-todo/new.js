const form = document.querySelector('#todoForm');
const input = document.querySelector('#input')
const TodoList = document.querySelector('#todoList')
const delate = document.createElement('button');
const appearButton = document.querySelector('#todoList button')
const checkForm = document.querySelector('.checkBox');


form.addEventListener('submit',function(event){
    event.preventDefault();
    const todo = input.value.trim();
    if(todo !== ''){
        const li = document.createElement('li');
        const span = document.createElement('span');
        const check = document.createElement('input');
        const delate = document.createElement('button');
        delate.textContent = 'Delete';
        check.type = 'checkbox';
        check.className = 'checkBox';
        span.textContent = todo;
        TodoList.appendChild(li);
        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(delate);
        input.value = ''
    }
})

TodoList.addEventListener('click', function(event) {
  if(event.target.tagName === 'BUTTON') {
    const li = event.target.parentNode;
    const check = li.querySelector('.checkBox');
    if(check.checked) {
      TodoList.removeChild(li);
    }
  }
});