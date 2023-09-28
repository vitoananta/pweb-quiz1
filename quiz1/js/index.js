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
const sotoBetawiModal = document.querySelector('.soto-betawi-modal');
const sotoBetawiModalBox = document.querySelector('.soto-betawi-box');
const sotoBetawiModalButton = document.querySelector('.soto-betawi-modal-button');
const sotoBetawiCloseIcon = document.querySelector('.soto-betawi-close-icon');

sotoBetawiModalButton.onclick = (e) => {
    sotoBetawiModal.style.display = 'flex';
    e.preventDefault();
}

sotoBetawiCloseIcon.onclick = (e) => {
    sotoBetawiModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!sotoBetawiModalBox.contains(e.target) && !mainNav.contains(e.target) && !sotoBetawiModalButton.contains(e.target)) {
        sotoBetawiModal.style.display = 'none';
        e.preventDefault();
    }
});

// Kerak telor modal box
const kerakTelorModal = document.querySelector('.kerak-telor-modal');
const kerakTelorModalBox = document.querySelector('.kerak-telor-box');
const kerakTelorModalButton = document.querySelector('.kerak-telor-modal-button');
const kerakTelorCloseIcon = document.querySelector('.kerak-telor-close-icon');

kerakTelorModalButton.onclick = (e) => {
    kerakTelorModal.style.display = 'flex';
    e.preventDefault();
}

kerakTelorCloseIcon.onclick = (e) => {
    kerakTelorModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!kerakTelorModalBox.contains(e.target) && !mainNav.contains(e.target) && !kerakTelorModalButton.contains(e.target)) {
        kerakTelorModal.style.display = 'none';
        e.preventDefault();
    }
});

// Nasi Uduk modal box
const nasiUdukModal = document.querySelector('.nasi-uduk-modal');
const nasiUdukModalBox = document.querySelector('.nasi-uduk-box');
const nasiUdukModalButton = document.querySelector('.nasi-uduk-modal-button');
const nasiUdukCloseIcon = document.querySelector('.nasi-uduk-close-icon');

nasiUdukModalButton.onclick = (e) => {
    nasiUdukModal.style.display = 'flex';
    e.preventDefault();
}

nasiUdukCloseIcon.onclick = (e) => {
    nasiUdukModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!nasiUdukModalBox.contains(e.target) && !mainNav.contains(e.target) && !nasiUdukModalButton.contains(e.target)) {
        nasiUdukModal.style.display = 'none';
        e.preventDefault();
    }
});

// Gado-Gado modal box
const gadoGadoModal = document.querySelector('.gado-gado-modal');
const gadoGadoModalBox = document.querySelector('.gado-gado-box');
const gadoGadoModalButton = document.querySelector('.gado-gado-modal-button');
const gadoGadoCloseIcon = document.querySelector('.gado-gado-close-icon');

gadoGadoModalButton.onclick = (e) => {
    gadoGadoModal.style.display = 'flex';
    e.preventDefault();
}

gadoGadoCloseIcon.onclick = (e) => {
    gadoGadoModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!gadoGadoModalBox.contains(e.target) && !mainNav.contains(e.target) && !gadoGadoModalButton.contains(e.target)) {
        gadoGadoModal.style.display = 'none';
        e.preventDefault();
    }
});
