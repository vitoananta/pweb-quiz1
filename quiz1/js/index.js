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
const sotoBetawi = document.querySelector('.soto-betawi-overlay');
const sotoBetawiButton = document.querySelector('.soto-betawi-overlay2');
const kerakTelor = document.querySelector('.kerak-telor-overlay');
const kerakTelorButton = document.querySelector('.kerak-telor-overlay2');
const nasiUduk = document.querySelector('.nasi-uduk-overlay');
const nasiUdukButton = document.querySelector('.nasi-uduk-overlay2');
const gadoGado = document.querySelector('.gado-gado-overlay');
const gadoGadoButton = document.querySelector('.gado-gado-overlay2');

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
                sotoBetawiButton.classList.add('show');
                kerakTelorButton.classList.remove('show');
                nasiUdukButton.classList.remove('show');
                gadoGadoButton.classList.remove('show');
                break;
            case 'kerak-telor':
                kerakTelor.classList.add('show');
                sotoBetawi.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');
                kerakTelorButton.classList.add('show');
                sotoBetawiButton.classList.remove('show');
                nasiUdukButton.classList.remove('show');
                gadoGadoButton.classList.remove('show');
                break;
            case 'nasi-uduk':
                nasiUduk.classList.add('show');
                sotoBetawi.classList.remove('show');
                kerakTelor.classList.remove('show');
                gadoGado.classList.remove('show');
                nasiUdukButton.classList.add('show');
                sotoBetawiButton.classList.remove('show');
                kerakTelorButton.classList.remove('show');
                gadoGadoButton.classList.remove('show');
                break;
            case 'gado-gado':
                gadoGado.classList.add('show');
                sotoBetawi.classList.remove('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGadoButton.classList.add('show');
                sotoBetawiButton.classList.remove('show');
                kerakTelorButton.classList.remove('show');
                nasiUdukButton.classList.remove('show');
                break;
            default:
                sotoBetawi.classList.add('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');
                sotoBetawiButton.classList.add('show');
                kerakTelorButton.classList.remove('show');
                nasiUdukButton.classList.remove('show');
                gadoGadoButton.classList.remove('show');
                break;
        }
    }
});
