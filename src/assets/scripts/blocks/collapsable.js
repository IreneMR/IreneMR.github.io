document.addEventListener('DOMContentLoaded', function() {
  if (!document.querySelector('[data-collapsable]')) return;

  initCollapsable();
});

function initCollapsable() {
  document.querySelectorAll('[data-collapsable]').forEach((toggler) => {
    toggler.addEventListener('click', toggleCollapsable);
  });
}

function toggleCollapsable(e) {
  const button = e.target;
  const content = button.nextElementSibling;

  if (button.classList.contains('open')) {
    button.setAttribute('aria-expanded', false);
    button.classList.remove('open');
    content.classList.remove('open');
    return;
  }

  button.setAttribute('aria-expanded', true);
  button.classList.add('open');
  content.classList.add('open');
}
