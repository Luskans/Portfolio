const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');

const statut = document.querySelector('#statut');
const profil = document.querySelector('.profil');
const portfolio = document.querySelector('.portfolio');

const portfolio_text = document.querySelector('.portfolio__text');
const portfolio_icons = document.querySelectorAll('.portfolio__icons svg');
const stickers = document.querySelectorAll('.sticker');


function menuScroll() {
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
        nav.classList.add('nav--scroll');
        navItems.forEach(navItem => {
            navItem.classList.add('nav__items--scroll');
        });
    
    } else {
        nav.classList.remove('nav--scroll');
        navItems.forEach(navItem => {
            navItem.classList.remove('nav__items--scroll');
        });
    }
}

function elementScroll() {
    const windowHeight = window.innerHeight;

    const profilPosition = profil.getBoundingClientRect().top;
    const portTextPosition = portfolio_text.getBoundingClientRect().top;

    stickers.forEach(sticker => {
        const stickerPosition = sticker.getBoundingClientRect().top;
        if (stickerPosition < windowHeight) {
            sticker.classList.add('in-view');
        } else {
            sticker.classList.remove('in-view');
        }
    });

    portfolio_icons.forEach(icon => {
        const iconPosition = icon.getBoundingClientRect().top;
        if (iconPosition < windowHeight) {
            icon.classList.add('in-view');
        } else {
            icon.classList.remove('in-view');
        }
    });

    if (profilPosition < windowHeight - 100) {
        profil.classList.add('in-view');

    } else {
        profil.classList.remove('in-view');
    }

    if (portTextPosition < windowHeight) {
        portfolio_text.classList.add('in-view');

    } else {
        portfolio_text.classList.remove('in-view');
    }
}

function sectionScroll() {
    const statutPosition = statut.getBoundingClientRect();
    const profilPosition = profil.getBoundingClientRect();
    const portfolioPosition = portfolio.getBoundingClientRect();
    if (statutPosition.top <= 150 && statutPosition.bottom >= 350) {
        navItems.forEach(navItem => navItem.classList.remove('on-part'));
        navItems[0].classList.add('on-part');
    }
    if (profilPosition.top <= 150 && profilPosition.bottom >= 350) {
        navItems.forEach(navItem => navItem.classList.remove('on-part'));
        navItems[1].classList.add('on-part');
    }
    if (portfolioPosition.top <= 150 && portfolioPosition.bottom >= 350) {
        navItems.forEach(navItem => navItem.classList.remove('on-part'));
        navItems[2].classList.add('on-part');
    }
}

function handleScroll() {
    menuScroll();
    elementScroll();
    sectionScroll();
}

window.addEventListener('scroll', handleScroll);