// selectors
const primaryHeader = document.querySelector('.primary-header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

// EVENT LISTENERS
// nav toggle
mobileNavToggle.addEventListener('click', function() {
    const dataVisible = primaryNav.getAttribute('data-visible');
    if (dataVisible === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-close.svg)';
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-hamburger.svg)';
    }
})

// on scroll
window.onscroll = function() {
    if (document.documentElement.scrollTop > 82) {
        primaryHeader.style.backgroundColor = "hsl( var(--clr-dark), 0.95)";
    } else {
        primaryHeader.style.backgroundColor = "transparent";
}};