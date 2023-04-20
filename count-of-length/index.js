const form = document.querySelector('form');
const input = document.querySelector('.input');
const count = document.querySelector('#count');
const countWithoutSpaces = document.querySelector('#countWithoutSpaces');
const maniscript = document.querySelector('#maniscript');



form.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.className == 'submit'){
        count.textContent = input.value.length;
        countWithoutSpaces.textContent = input.value.replace(/\s/g, "").length;
        newline.textContent = input.value.split("\n").length;
        maniscript.textContent = Math.ceil(input.value.replace(/\n/g, "").length / 400);
    }
    if(event.target.className == 'reset'){
        input.value = ''
        count.textContent = 0;
        countWithoutSpaces.textContent = 0;
        newline.textContent = 0;
        paragraph.textContent = 0;
    }
})


//input.addEventListener('keyup',function(){
 //   countWithoutSpaces.textContent = input.value.length.trim();
//})
