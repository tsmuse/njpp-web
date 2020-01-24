document.addEventListener('DOMContentLoaded', (e) => {
  registerNavMenu();
});

function registerNavMenu(){
  document.querySelector('.main-nav-toggle').onclick = () => {
    const navMenu = document.querySelector('.main-nav-list');
    if(navMenu.classList.contains('open')){
      navMenu.classList.remove('open');
      return;
    }
    navMenu.classList.add('open');
  };
  
}