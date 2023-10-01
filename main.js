let navLinks = document.querySelector('.navLinks');
let toggleMenu = document.querySelector('.toggleNav');
let closeMenu = document.querySelector('.closeNav');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
})

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
})
