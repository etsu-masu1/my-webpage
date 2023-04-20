// console.log("Hallo Welt");

// class MyClass {
//     sayHello(msg){
//         console.log('hello!', msg)
//     }
// }

// const myInstance = new MyClass()

// myInstance.sayHello('yuichi');

// function sayHello(msg){
//     console.log('hallo!', msg)
// }
// sayHello('zeigen')
//const tasks = []

//const input = document.querySelector("#newTodoInput");
//input.value = "あっかんべー"


//let taskInputForm = document.getElementById("newTodoInput");
//let addTodo = document.getElementById("addTodo");
//console.log(addTodo);
// https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/change_event
// taskInputForm.addEventListener('change', (e) => {
//     console.log('user input:', e.target.value)
// })

//addTodo.addEventListener('click', () => {
//    alert('clicked')
//})

const form = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const input = document.querySelector('#newTodoInput');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const todo = input.value.trim();
    if(todo !== ''){
        const li = document.createElement('li');
        const check = document.createElement('input');
        const span = document.createElement('span');
        span.textContent = todo;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = '削除';
        check.className = 'checkBox';
        check.type = 'checkbox';
        todoList.appendChild(li);
        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(deleteButton);
        input.value = '';

    }
})

todoList.addEventListener('click' , function(event){
    const deleteButton = event.target.parentNode.querySelector('.delete');
    if(event.target.classList.contains('checkBox')){
        if(event.target.checked){
        deleteButton.style.display = 'block';
    }else {
        deleteButton.style.display = 'none';
    }
} 
})

todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
      const li = event.target.parentNode;
      todoList.removeChild(li);
    }
  });
  
