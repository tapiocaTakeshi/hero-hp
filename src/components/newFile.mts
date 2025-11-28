document.addEventListener('DOMContentLoaded', () => {
const header = document.getElementById('main-header');
let logoImg = document.querySelector('.logo .icon');
const defaultLogoSrc = '/He-ro_icon.png';
const whiteLogoSrc = '/He-ro_icon_white.png';

const applyHeaderState = () => {
if (!header) return;
if (window.scrollY > 50) {
header.classList.add('scrolled');
if (logoImg) logoImg.src = defaultLogoSrc;
} else {
header.classList.remove('scrolled');
if (logoImg) logoImg.src = whiteLogoSrc;
}
};

applyHeaderState();
window.addEventListener('scroll', applyHeaderState);

document.addEventListener('astro:page-load', () => {
logoImg = document.querySelector('.logo .icon');
applyHeaderState();
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === currentPath) {
link.classList.add('active');
}
});
if (currentPath === '/') {
const homeLink = document.querySelector('.nav-link[data-page="home"]');
if (homeLink) homeLink.classList.add('active');
}
});
});
