// JavaScript to toggle the mobile navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});
