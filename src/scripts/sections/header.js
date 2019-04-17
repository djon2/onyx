const selectors = {
  mobileMenuToggle: '.js-mobile-menu-toggle',
  body: 'body',
};

document.querySelectorAll(selectors.mobileMenuToggle).forEach((button) => {
  button.onclick = (event) => {
    event.preventDefault();
    document.querySelector(selectors.body).classList.toggle('menu-is-open');
  };
});
