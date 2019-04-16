import {
    register,
} from '@shopify/theme-sections';

const selectors = {
    mobileMenuToggle: `.js-mobile-menu-toggle`,
    header: `[data-section-type='header']`
};




// register('header', {
//     async onLoad() {




//     },
// });

document.querySelectorAll(selectors.mobileMenuToggle).forEach((button) => {
    button.onclick = () => {
        document.querySelector(selectors.header).classList.toggle('menu-is-open');
    }
});