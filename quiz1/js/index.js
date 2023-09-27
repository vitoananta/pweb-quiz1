// Toogle active class for hamburger menu
const mainNav = document.querySelector('.main-nav');

// When click on hamburger menu
document.querySelector('#hamburger-menu').onclick = () => {
    mainNav.classList.toggle('active');
};

// Close hamburger menu when click outside of it
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
    }

});
