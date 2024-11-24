const desktopImages = [
    './images/desktop-image-hero-1.jpg',
    './images/desktop-image-hero-2.jpg',
    './images/desktop-image-hero-3.jpg'
];

const mobileImages = [
    './images/mobile-image-hero-1.jpg',
    './images/mobile-image-hero-2.jpg',
    './images/mobile-image-hero-3.jpg'
];


let currentIndex = 0;


const section = document.querySelector('.section-1');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function isMobile() {
    return window.innerWidth <= 768;
}

function updateBackground () {
    const images = isMobile() ? mobileImages : desktopImages;
    section.style.backgroundImage = `url(${images[currentIndex]})`;
};



leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = desktopImages.length - 1;
    }
    updateBackground();
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < desktopImages.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateBackground();
});


window.addEventListener('resize', () => {
    updateBackground();
});


updateBackground();






const menuImg = document.querySelector('.menu-img');
const navLinks = document.querySelector('.navlinks');
const overlay = document.querySelector('.overlay');
const menuClose = document.querySelector('.close-img');

menuClose.addEventListener('click', () => {
  overlay.classList.remove('visible');
  navLinks.classList.remove('open-menu');
  menuClose.style.display = 'none';
  menuImg.style.display = 'flex';
});


menuImg.addEventListener('click', () => {
  overlay.classList.add('visible');
  navLinks.classList.add('open-menu');
  menuClose.style.display = 'flex';
  menuImg.style.display = 'none';
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) { 
    overlay.classList.remove('visible');
    navLinks.classList.remove('open-menu');
    menuClose.style.display = 'none';
    menuImg.style.display = 'none'; 
  } else { 
    menuImg.style.display = 'flex'; 
  }
});