(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob__menu-open  '),
    closeMenuBtn: document.querySelector('.mobile__close-btn'),
    menu: document.querySelector('.header__mobile-menu  '),
    menu: document.querySelector('.header__mobile-nav '),
    
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();