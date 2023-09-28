// Toogle active class for hamburger menu
const mainNav = document.querySelector('.main-nav');

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

// Text overlay on food page
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
                sotoBetawiButton.style.display = 'flex';
                kerakTelorButton.classList.remove('show');
                kerakTelorButton.style.display = 'none';
                nasiUdukButton.classList.remove('show');
                nasiUdukButton.style.display = 'none';
                gadoGadoButton.classList.remove('show');
                gadoGadoButton.style.display = 'none';
                break;
            case 'kerak-telor':
                kerakTelor.classList.add('show');
                sotoBetawi.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');

                kerakTelorButton.classList.add('show');
                kerakTelorButton.style.display = 'flex';
                sotoBetawiButton.classList.remove('show');
                sotoBetawiButton.style.display = 'none';
                nasiUdukButton.classList.remove('show');
                nasiUdukButton.style.display = 'none';
                gadoGadoButton.classList.remove('show');
                gadoGadoButton.style.display = 'none';
                break;
            case 'nasi-uduk':
                nasiUduk.classList.add('show');
                sotoBetawi.classList.remove('show');
                kerakTelor.classList.remove('show');
                gadoGado.classList.remove('show');

                nasiUdukButton.classList.add('show');
                nasiUdukButton.style.display = 'flex';
                sotoBetawiButton.classList.remove('show');
                sotoBetawiButton.style.display = 'none';
                kerakTelorButton.classList.remove('show');
                kerakTelorButton.style.display = 'none';
                gadoGadoButton.classList.remove('show');
                gadoGadoButton.style.display = 'none';
                break;
            case 'gado-gado':
                gadoGado.classList.add('show');
                sotoBetawi.classList.remove('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');

                gadoGadoButton.classList.add('show');
                gadoGadoButton.style.display = 'flex';
                sotoBetawiButton.classList.remove('show');
                sotoBetawiButton.style.display = 'none';
                kerakTelorButton.classList.remove('show');
                kerakTelorButton.style.display = 'none';
                nasiUdukButton.classList.remove('show');
                nasiUdukButton.style.display = 'none';
                break;
            default:
                sotoBetawi.classList.add('show');
                kerakTelor.classList.remove('show');
                nasiUduk.classList.remove('show');
                gadoGado.classList.remove('show');

                sotoBetawiButton.classList.add('show');
                sotoBetawiButton.style.display = 'flex';
                kerakTelorButton.classList.remove('show');
                kerakTelorButton.style.display = 'none';
                nasiUdukButton.classList.remove('show');
                nasiUdukButton.style.display = 'none';
                gadoGadoButton.classList.remove('show');
                gadoGadoButton.style.display = 'none';
                break;
        }
    }
});

// Soto betawi modal box
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
    if (!funFactModalBox.contains(e.target) && !mainNav.contains(e.target) && !funFactModalButton.contains(e.target) && !exploreFoodButton.contains(e.target) && !exploreTourstButton.contains(e.target)) {
        funFactModal.style.display = 'none';
        e.preventDefault();
    }
});
