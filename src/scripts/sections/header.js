const selectors = {
  mobileMenuToggle: '.js-mobile-menu-toggle',
  header: '[data-section-type=\'header\']',
};

document.querySelectorAll(selectors.mobileMenuToggle).forEach((button) => {
  button.onclick = (event) => {
    event.preventDefault();
    document.querySelector(selectors.header).classList.toggle('menu-is-open');
  };
});
