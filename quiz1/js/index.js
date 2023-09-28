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

const foods = document.querySelectorAll('.foods');
const sotoBetawi = document.querySelector('.soto-betawi-title');
const kerakTelor = document.querySelector('.kerak-telor-title');
const nasiUduk = document.querySelector('.nasi-uduk-title');
const gadoGado = document.querySelector('.gado-gado-title');

window.addEventListener('scroll', function () {
    let currentfood = '';

    foods.forEach(food => {
        const foodTop = food.offsetTop;
        const foodHeight = food.clientHeight;

        if (pageYOffset >= (foodTop - foodHeight / 3)) {
            currentfood = food.getAttribute('id');
        }
    });

    if (currentfood && pageYOffset + window.innerHeight < document.body.clientHeight) {
        switch (currentfood) {
            case 'soto-betawi':
                sotoBetawi.classList.add('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');
                break;
            case 'kerak-telor':
                kerakTelor.classList.add('show');
                sotoBetawi.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');
                break;
            case 'nasi-uduk':
                nasiUduk.classList.add('show');
                sotoBetawi.classList.remove('show');
                kerakTelor.classList.remove('show');
                gadoGado.classList.remove('show');
                break;
            case 'gado-gado':
                gadoGado.classList.add('show');
                sotoBetawi.classList.remove('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');
                break;
            default:
                sotoBetawi.classList.add('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');
                break;
        }
    }
});
