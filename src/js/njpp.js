document.addEventListener('DOMContentLoaded', (e) => {
  registerNavMenu();
});

function registerNavMenu(){
  document.querySelector('.fixed-nav-toggle').onclick = () => {
    const navMenu = document.querySelector('.fixed-nav-list');
    if(navMenu.classList.contains('open')){
      navMenu.classList.remove('open');
      return;
    }
    navMenu.classList.add('open');
  };
  
}