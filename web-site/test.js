const menuIcon = document.querySelector('.menu-icon');
const hamburgerMenu = document.querySelector('.menu');

menuIcon.addEventListener('click',function(){
  if(hamburgerMenu.style.display === 'block'){
    hamburgerMenu.style.display = 'none';
    menuIcon.classList.remove('cross');
  }else{
    hamburgerMenu.style.display = 'block';
    menuIcon.classList.add('cross');
  }


});


