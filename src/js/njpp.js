document.addEventListener('DOMContentLoaded', (e) => {
  registerNavMenu();
});

function registerNavMenu(){
  document.querySelector('.nav-toggle').onclick = () => {
    const navMenu = document.querySelector('.nav-list');
    if(navMenu.classList.contains('open')){
      navMenu.classList.remove('open');
      return;
    }
    navMenu.classList.add('open');
  };
  
}