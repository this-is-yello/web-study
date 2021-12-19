const toggleBtn = document.querySelector('.button');
const menu = document.querySelector('.nav');
const icons = document.querySelector('.icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});