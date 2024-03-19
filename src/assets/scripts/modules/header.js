document.addEventListener('DOMContentLoaded', function() {
  if (!document.querySelector('[data-toggle-menu]')) return;

  addEventListeners()
});

function addEventListeners() {
  document.querySelectorAll('[data-toggle-menu]').forEach((btn) => {
    btn.addEventListener('click', toggleMenu);
  });
}

function toggleMenu() {
  document.querySelector('[data-menu]').classList.toggle('header__menu--open');
}
