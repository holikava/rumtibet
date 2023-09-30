// navigation
const navToggle = document.querySelector('.toggle-menu');
const linksContainer = document.querySelector('.nav__links');
const navLinksList = document.querySelector('.nav__list');

// show links
navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = navLinksList.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
        navToggle.style.transform = 'rotate(90deg)';
    } else {
        linksContainer.style.height = 0;
        navToggle.style.transform = 'none';
    };

    // close nav if click on page (not on nav)
    const main = document.querySelector('main');

    main.addEventListener('click', () => {
        if (linksContainer.style.height !== 0) {
            linksContainer.style.height = 0;
            navToggle.style.transform = 'none';
        }
    })
});

// scroll to links
const scrollLinks = document.querySelectorAll('.nav__link');
const navBar = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    };

    if (scrollHeight > 500) {
        topLink.classList.add('show-top-link');
    } else {
        topLink.classList.remove('show-top-link');
    }
});

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const elem = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navFixed = navBar.classList.contains('fixed-nav');
        let position = elem.offsetTop - navHeight;

        if (!navFixed) {
            position = position - navHeight;
        };

        if (navHeight > 80) {
            position = position + containerHeight;
        };

        window.scrollTo({
            left: 0,
            top: position,
        });
        navToggle.style.transform = 'none';
        linksContainer.style.height = 0;
    });
});


// loading video on about-us section
const parentContainer = document.querySelector('.video');
const playBtn = document.querySelector('.video__play-btn');
const videoContainer = document.querySelector('.video__container');

playBtn.addEventListener('click', () => {
        videoContainer.classList.add('show-video');
        parentContainer.style.position = 'relative';
});

videoContainer.addEventListener('click', () => {
    videoContainer.classList.remove('show-video');
    parentContainer.style.position = 'static';
})