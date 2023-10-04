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

const cardsContainer = document.querySelector('.carousel__cards');

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
};

displayCards(tours);

const carouselCards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

carouselCards.forEach((card, index) => {
    card.style.transform = `translateX(${index * 100}%)`;
});

let counter = 0;
nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});

const carousel = () => {
    if (counter === carouselCards.length) {
        counter = 0;
    };
    if (counter < 0) {
        counter = carouselCards.length - 1;
    };

    carouselCards.forEach((card) => {
        card.style.transform = `translateX(-${counter * 100}%)`;
    });
};
// end carousel for popular-tuors section


// start blog carousel 

const posts = [
    {
        id: 1,
        img: './assets/images/post-img-01.jpg',
        title: 'Красивая Италя, какая она в реальности?',
        text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        link: '',
    },
    {
        id: 2,
        img: './assets/images/post-img-02.jpg',
        title: 'Долой сомнения! Весь мир открыт для вас!',
        text: 'Для современного мира  предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        link: '',
    },
    {
        id: 3,
        img: './assets/images/post-img-03.jpg',
        title: 'Как подготовиться к путешествию в одиночку?',
        text: 'Для современного мира базовый вектор развития предполагает независимые активизации.',
        date: '01/04/2023',
        link: '',
    },
    {
        id: 4,
        img: './assets/images/post-img-04.jpg',
        title: 'Индия ... летим?',
        text: 'Для современного мира базовый вектор развития предполагает условий активизации.',
        date: '01/04/2023',
        link: '',
    },
];

const btn = document.querySelector('.blog__btn button');
btn.textContent = 'Следующая статья';

const container = document.querySelector('.post');
const img = document.querySelector('.post__img');
const title = document.querySelector('.post__title');
const text = document.querySelector('.post__text');
const date = document.querySelector('.post__date');
const link = document.querySelector('.post__link');

let postsIndex = 0;
window.addEventListener('DOMContentLoaded', () => {
    createBlogPost();
})

function createBlogPost() {
    const post = posts[postsIndex];
    img.src = post.img;
    title.textContent = post.title;
    text.textContent = post.text;
    date.textContent = post.date;
    link.textContent = 'читать статью';
};

btn.addEventListener('click', (e) => {
    postsIndex++;
    if (postsIndex > posts.length - 1) {
        postsIndex = 0;
    }
    createBlogPost();
})

