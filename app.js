// ********** mobile navigation *****************
const header = document.querySelector('header');
const navContainer = document.querySelector('.navigation__list');
const toggleBtn = document.querySelector('.toggle-menu');
const color = 'rgba(73, 72, 72, 0.97)';

toggleBtn.addEventListener('click', () => {
    if(navContainer.classList.contains('show-links')) {
        navContainer.classList.remove('show-links');
        toggleBtn.style.transform = 'none';
        changeBgColor(header);
    } else {
        navContainer.classList.add('show-links');
        toggleBtn.style.transform = 'rotate(90deg)';
        changeBgColor(header);
        changeBgColor(navContainer);
    }
});

const changeBgColor = (elem) => {
    if (navContainer.classList.contains('show-links')) {
        elem.style.backgroundColor = `${color}`;
    } else {
        elem.style.backgroundColor = 'transparent';
    }
}