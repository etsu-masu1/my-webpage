const hamburgerIcon = document.querySelector('.menu-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu')
const menuIcon = document.querySelector('.menu-icon')

hamburgerIcon.addEventListener('click', function(){
  if(hamburgerMenu.style.display === 'block'){
    hamburgerMenu.style.display = 'none';
    menuIcon.classList.remove('cross');
  }else{
    hamburgerMenu.style.display = 'block';
    menuIcon.classList.add('cross');
  }
  if(hamburgerMenu.classList.contains('show')){
    hamburgerMenu.classList.remove('show');
  }else{
    hamburgerMenu.classList.add('show');
  }
})


