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


// carousel for popular-tuors section
const tours = [
    {
        id: 1,
        title: 'Озеро возле гор',
        img: './assets/images/popular-tours-01.png',
        desc: 'романтическое приключение',
        price: '480$',
    },
    {
        id: 2,
        title: 'Ночь в горах',
        img: './assets/images/popular-tours-02.png',
        desc: 'в компании друзей',
        price: '500$',
    },
    {
        id: 3,
        title: 'Йога в горах',
        img: './assets/images/popular-tours-03.png',
        desc: 'для тех, кто заботится о себе',
        price: '280$',
    },
];

const cardsContainer = document.querySelector('.popular-tours__cards');

window.addEventListener('DOMContentLoaded', () => {
    displayCards(tours);
})

const displayCards = (cards) => {
    let displayCard = cards.map((card) => {
        return `<div class="card">
            <img src=${card.img} class="card__img" alt="beautiful view">
                <div class="card__info">
                    <h4 class="card__title">${card.title}</h4>
                    <span class="card__subtext">${card.desc}</span>
                    <span class="card__price">${card.price}</span>
                </div>
        </div>`;
    });
    displayCard = displayCard.join('');
    cardsContainer.innerHTML = displayCard;


// find the way to carouselCards and take out code from below in diffrent function
// carousel cards
    const carouselCards = document.querySelectorAll('.card');
    const carouselBtn = document.querySelector('.next-btn');

    console.log(carouselCards.length);

    carouselCards.forEach((card, index) => {
        card.style.transform = `translateX(${index * 100}%)`;
    });

    let counter = 0;
    carouselBtn.addEventListener('click', () => {
        counter++;
        carousel();
    });

    const carousel = () => {
        if (counter > carouselCards.length - 1) {
            counter = 0;
        };

        carouselCards.forEach((card) => {
            card.style.transform = `translateX(-${counter * 100}%)`;
        });
    };
// carousel cards end
};