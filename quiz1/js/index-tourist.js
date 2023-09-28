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

// Text overlay on tourist page
const tourists = document.querySelectorAll('.tourists');
const monumenNasional = document.querySelector('.monas-overlay');
const monumenNasionalButton = document.querySelector('.monas-overlay2');
const kotaTua = document.querySelector('.kota-tua-overlay');
const kotaTuaButton = document.querySelector('.kota-tua-overlay2');
const tmii = document.querySelector('.tmii-overlay');
const tmiiButton = document.querySelector('.tmii-overlay2');
const ragunan = document.querySelector('.ragunan-overlay');
const ragunanButton = document.querySelector('.ragunan-overlay2');
const dufan = document.querySelector('.dufan-overlay');
const dufanButton = document.querySelector('.dufan-overlay2');
const tansera = document.querySelector('.tansera-overlay');
const tanseraButton = document.querySelector('.tansera-overlay2');

window.addEventListener('scroll', function () {
    let currentTourist = '';

    tourists.forEach(tourist => {
        const touristTop = tourist.offsetTop;
        const touristHeight = tourist.clientHeight;

        if (pageYOffset >= (touristTop - touristHeight / 3)) {
            currentTourist = tourist.getAttribute('id');
        }
    });

    if (currentTourist && pageYOffset + window.innerHeight < document.body.clientHeight) {
        switch (currentTourist) {
            case 'monas':
                monumenNasional.classList.add('show');
                kotaTua.classList.remove('show');
                tmii.classList.remove('show');
                ragunan.classList.remove('show');
                dufan.classList.remove('show');
                tansera.classList.remove('show');

                monumenNasionalButton.classList.add('show');
                monumenNasionalButton.style.display = 'flex';
                kotaTuaButton.classList.remove('show');
                kotaTuaButton.style.display = 'none';
                tmiiButton.classList.remove('show');
                tmiiButton.style.display = 'none';
                ragunanButton.classList.remove('show');
                ragunanButton.style.display = 'none';
                dufanButton.classList.remove('show');
                dufanButton.style.display = 'none';
                tanseraButton.classList.remove('show');
                tanseraButton.style.display = 'none';
                break;
            case 'kota-tua':
                kotaTua.classList.add('show');
                monumenNasional.classList.remove('show');
                tmii.classList.remove('show');
                ragunan.classList.remove('show');
                dufan.classList.remove('show');
                tansera.classList.remove('show');

                kotaTuaButton.classList.add('show');
                kotaTuaButton.style.display = 'flex';
                monumenNasionalButton.classList.remove('show');
                monumenNasionalButton.style.display = 'none';
                tmiiButton.classList.remove('show');
                tmiiButton.style.display = 'none';
                ragunanButton.classList.remove('show');
                ragunanButton.style.display = 'none';
                dufanButton.classList.remove('show');
                dufanButton.style.display = 'none';
                tanseraButton.classList.remove('show');
                tanseraButton.style.display = 'none';
                break;
            case 'tmii':
                tmii.classList.add('show');
                kotaTua.classList.remove('show');
                monumenNasional.classList.remove('show');
                ragunan.classList.remove('show');
                dufan.classList.remove('show');
                tansera.classList.remove('show');

                tmiiButton.classList.add('show');
                tmiiButton.style.display = 'flex';
                monumenNasionalButton.classList.remove('show');
                monumenNasionalButton.style.display = 'none';
                kotaTuaButton.classList.remove('show');
                kotaTuaButton.style.display = 'none';
                ragunanButton.classList.remove('show');
                ragunanButton.style.display = 'none';
                dufanButton.classList.remove('show');
                dufanButton.style.display = 'none';
                tanseraButton.classList.remove('show');
                tanseraButton.style.display = 'none';
                break;
            case 'ragunan':
                ragunan.classList.add('show');
                monumenNasional.classList.remove('show');
                kotaTua.classList.remove('show');
                tmii.classList.remove('show');
                dufan.classList.remove('show');
                tansera.classList.remove('show');

                ragunanButton.classList.add('show');
                ragunanButton.style.display = 'flex';
                monumenNasionalButton.classList.remove('show');
                monumenNasionalButton.style.display = 'none';
                kotaTuaButton.classList.remove('show');
                kotaTuaButton.style.display = 'none';
                tmiiButton.classList.remove('show');
                tmiiButton.style.display = 'none';
                dufanButton.classList.remove('show');
                dufanButton.style.display = 'none';
                tanseraButton.classList.remove('show');
                tanseraButton.style.display = 'none';
                break;
            case 'dufan':
                dufan.classList.add('show');
                kotaTua.classList.remove('show');
                monumenNasional.classList.remove('show');
                tmii.classList.remove('show');
                ragunan.classList.remove('show');
                tansera.classList.remove('show');

                dufanButton.classList.add('show');
                dufanButton.style.display = 'flex';
                kotaTuaButton.classList.remove('show');
                kotaTuaButton.style.display = 'none';
                monumenNasionalButton.classList.remove('show');
                monumenNasionalButton.style.display = 'none';
                tmiiButton.classList.remove('show');
                tmiiButton.style.display = 'none';
                ragunanButton.classList.remove('show');
                ragunanButton.style.display = 'none';
                tanseraButton.classList.remove('show');
                tanseraButton.style.display = 'none';
                break;
            case 'tansera':
                tansera.classList.add('show');
                tmii.classList.remove('show');
                kotaTua.classList.remove('show');
                monumenNasional.classList.remove('show');
                ragunan.classList.remove('show');
                dufan.classList.remove('show');

                tanseraButton.classList.add('show');
                tanseraButton.style.display = 'flex';
                tmiiButton.classList.remove('show');
                tmiiButton.style.display = 'none';
                monumenNasionalButton.classList.remove('show');
                monumenNasionalButton.style.display = 'none';
                kotaTuaButton.classList.remove('show');
                kotaTuaButton.style.display = 'none';
                ragunanButton.classList.remove('show');
                ragunanButton.style.display = 'none';
                dufanButton.classList.remove('show');
                dufanButton.style.display = 'none';
                break;
            default:
                monumenNasional.classList.add('show');
                kotaTua.classList.remove('show');
                tmii.classList.remove('show');
                ragunan.classList.remove('show');
                dufan.classList.remove('show');
                tansera.classList.remove('show');

                monumenNasionalButton.classList.add('show');
                monumenNasionalButton.style.display = 'flex';
                kotaTuaButton.classList.remove('show');
                kotaTuaButton.style.display = 'none';
                tmiiButton.classList.remove('show');
                tmiiButton.style.display = 'none';
                ragunanButton.classList.remove('show');
                ragunanButton.style.display = 'none';
                dufanButton.classList.remove('show');
                dufanButton.style.display = 'none';
                tanseraButton.classList.remove('show');
                tanseraButton.style.display = 'none';
                break;
        }
    }
});

// Monas modal box
const monasModal = document.querySelector('.monas-modal');
const monasModalBox = document.querySelector('.monas-box');
const monasModalButton = document.querySelector('.monas-modal-button');
const monasCloseIcon = document.querySelector('.monas-close-icon');

monasModalButton.onclick = (e) => {
    monasModal.style.display = 'flex';
    e.preventDefault();
}

monasCloseIcon.onclick = (e) => {
    monasModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!monasModalBox.contains(e.target) && !mainNav.contains(e.target) && !monasModalButton.contains(e.target)) {
        monasModal.style.display = 'none';
        e.preventDefault();
    }
});

// Kota Tua box
const kotaTuaModal = document.querySelector('.kota-tua-modal');
const kotaTuaModalBox = document.querySelector('.kota-tua-box');
const kotaTuaModalButton = document.querySelector('.kota-tua-modal-button');
const kotaTuaCloseIcon = document.querySelector('.kota-tua-close-icon');

kotaTuaModalButton.onclick = (e) => {
    kotaTuaModal.style.display = 'flex';
    e.preventDefault();
}

kotaTuaCloseIcon.onclick = (e) => {
    kotaTuaModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!kotaTuaModalBox.contains(e.target) && !mainNav.contains(e.target) && !kotaTuaModalButton.contains(e.target)) {
        kotaTuaModal.style.display = 'none';
        e.preventDefault();
    }
});

// TMII box
const tmiiModal = document.querySelector('.tmii-modal');
const tmiiModalBox = document.querySelector('.tmii-box');
const tmiiModalButton = document.querySelector('.tmii-modal-button');
const tmiiCloseIcon = document.querySelector('.tmii-close-icon');

tmiiModalButton.onclick = (e) => {
    tmiiModal.style.display = 'flex';
    e.preventDefault();
}

tmiiCloseIcon.onclick = (e) => {
    tmiiModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!tmiiModalBox.contains(e.target) && !mainNav.contains(e.target) && !tmiiModalButton.contains(e.target)) {
        tmiiModal.style.display = 'none';
        e.preventDefault();
    }
});

// Ragunan box
const ragunanModal = document.querySelector('.ragunan-modal');
const ragunanModalBox = document.querySelector('.ragunan-box');
const ragunanModalButton = document.querySelector('.ragunan-modal-button');
const ragunanCloseIcon = document.querySelector('.ragunan-close-icon');

ragunanModalButton.onclick = (e) => {
    ragunanModal.style.display = 'flex';
    e.preventDefault();
}

ragunanCloseIcon.onclick = (e) => {
    ragunanModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!ragunanModalBox.contains(e.target) && !mainNav.contains(e.target) && !ragunanModalButton.contains(e.target)) {
        ragunanModal.style.display = 'none';
        e.preventDefault();
    }
});

// Dufan box
const dufanModal = document.querySelector('.dufan-modal');
const dufanModalBox = document.querySelector('.dufan-box');
const dufanModalButton = document.querySelector('.dufan-modal-button');
const dufanCloseIcon = document.querySelector('.dufan-close-icon');

dufanModalButton.onclick = (e) => {
    dufanModal.style.display = 'flex';
    e.preventDefault();
}

dufanCloseIcon.onclick = (e) => {
    dufanModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!dufanModalBox.contains(e.target) && !mainNav.contains(e.target) && !dufanModalButton.contains(e.target)) {
        dufanModal.style.display = 'none';
        e.preventDefault();
    }
});

// Tansera box
const tanseraModal = document.querySelector('.tansera-modal');
const tanseraModalBox = document.querySelector('.tansera-box');
const tanseraModalButton = document.querySelector('.tansera-modal-button');
const tanseraCloseIcon = document.querySelector('.tansera-close-icon');

tanseraModalButton.onclick = (e) => {
    tanseraModal.style.display = 'flex';
    e.preventDefault();
}

tanseraCloseIcon.onclick = (e) => {
    tanseraModal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('click', (e) => {
    if (!tanseraModalBox.contains(e.target) && !mainNav.contains(e.target) && !tanseraModalButton.contains(e.target)) {
        tanseraModal.style.display = 'none';
        e.preventDefault();
    }
});
