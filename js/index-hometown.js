// Toogle active class for hamburger menu
const mainNav = document.querySelector('.main-nav');
const navbarLogo = document.querySelector('.navbar-logo');

// When click on hamburger menu
const hamburger = document.querySelector('#hamburger-menu');
hamburger.onclick = () => {
    mainNav.classList.toggle('active');
};

// Close hamburger menu when click outside of it
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
    }
});

// Fun fact modal box
const funFactModal = document.querySelector('.fun-fact-modal');
const funFactModalBox = document.querySelector('.fun-fact-box');
const funFactModalButton = document.querySelector('.fun-fact-modal-button');
const funFactCloseIcon = document.querySelector('.fun-fact-close-icon');
const exploreFoodButton = document.querySelector('.cta.food');
const exploreTourstButton = document.querySelector('.cta.tourist');

funFactModalButton.onclick = (e) => {
    funFactModal.style.display = 'flex';
    e.preventDefault();
}

funFactCloseIcon.onclick = (e) => {
    funFactModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!funFactModalBox.contains(e.target) && !mainNav.contains(e.target) && !funFactModalButton.contains(e.target) && !exploreFoodButton.contains(e.target) && !exploreTourstButton.contains(e.target) && !navbarLogo.contains(e.target)) {
        funFactModal.style.display = 'none';
        e.preventDefault();
    }
});
