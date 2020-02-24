if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/cacheWorker.js', { scope: '/' })
    .then(function (reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}

document.addEventListener('DOMContentLoaded', function (e){
  registerNavMenu();
});

function registerNavMenu(){
  const navToggle = document.querySelector('.nav-toggle');
  if(navToggle){
    navToggle.onclick = () => {
      const navMenu = document.querySelector('.nav-list');
      if(navMenu.classList.contains('open')){
        navMenu.classList.remove('open');
        return;
      }
      navMenu.classList.add('open');
    };
  }
}