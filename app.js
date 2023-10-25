// navigation
const navToggle = document.querySelector('.toggle-menu');
const linksContainer = document.querySelector('.nav__links');
const navLinksList = document.querySelector('.nav__list');
const navBar = document.querySelector('.nav');

// show links
navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // const linksHeight = navLinksList.getBoundingClientRect().height;

    if (containerHeight === 0) {
        // linksContainer.style.height = `${linksHeight}px`;
        linksContainer.style.height = '80vh';
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
const playBtn = document.querySelector('.play-btn');
const videoContainer = document.querySelector('.video__container');

playBtn.addEventListener('click', () => {
    parentContainer.style.display = 'block';
    playBtn.style.display = 'none';
});

videoContainer.addEventListener('click', () => {
    parentContainer.style.display = 'none';
    playBtn.style.display = 'block';
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
const carouselBtn = document.querySelector('.popular-tours__btn button');
const dotsContainer = document.querySelector('.carousel__dots');

window.addEventListener('DOMContentLoaded', () => {
    displayCards(tours);
    displayCarouselDots();
    colorDotsIndicator();
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
};

const displayCarouselDots = () => {
    let displayDot = tours.map((tour) => {
        return `<div class="dot"></div>`;
    }).join('');
    dotsContainer.innerHTML = displayDot;
};

const carouselCards = cardsContainer.childNodes;
const carouselDots = dotsContainer.childNodes;

let counter = 0;

const colorDotsIndicator = () => {
    if (counter === carouselCards.length) {
        counter = 0;
    };
    if (counter < 0) {
        counter = carouselCards.length - 1;
    };

    let dot = carouselDots[counter];
    dot.style.opacity = '1';
};

const clearDotsIndicator = () => {
    carouselDots.forEach((dot) => {
        dot.style.opacity = '0.4';
    })
};

carouselBtn.addEventListener('click', () => {
    clearDotsIndicator();
    counter++;
    colorDotsIndicator();
    carousel();
});

carouselCards.forEach((card, index) => {
    card.style.transform = `translateX(${index * 100}%)`;
});

const carousel = () => {
    if (counter === carouselCards.length) {
        counter = 0;
    };
    if (counter < 0) {
        counter = carouselCards.length - 1;
    };


    carouselCards.forEach((card, index) => {
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

const blogContainer = document.querySelector('.blog__posts');

const showBlogPosts = (array) => {
    let showPost = array.map((post) => {
        return `<article class="post">
        <img src="${post.img}" alt="beautiful veiw" class="post__img">
        <div class="post__info">
            <h4 class="post__title">${post.title}</h4>
            <p class="post__text">${post.text}</p>
            <div class="post__footer">
                <span class="post__date">${post.date}</span>
                <a href="${post.link}" class="post__link">читать статью</a>
            </div>
        </div>
    </article>`;
    });
    showPost = showPost.join('');
    blogContainer.innerHTML = showPost;
};

showBlogPosts(posts);

const blogPosts = document.querySelectorAll('.post');
const btn = document.querySelector('.post__btn');

blogPosts.forEach((post, index) => {
    post.style.transform = `translateX(${index * 100}%)`;
});

const randomPost = (array) => {
    let counter = getRandomNumber(array);
    blogPosts.forEach((post) => {
        post.style.transform = `translateX(-${counter * 100}%)`;
    });
};

btn.addEventListener('click', () => {
    randomPost(posts);
});

const getRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
}
// end blog carousel 


// gallery section
const galleryImages = [
    './assets/images/gallery-01.jpg',
    './assets/images/gallery-02.jpg',
    './assets/images/gallery-03.jpg',
    './assets/images/gallery-04.jpg',
    './assets/images/gallery-05.jpg',
    './assets/images/gallery-06.jpg',
]

const imagesContainer = document.querySelector('.gallery__images');
const galleryBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');

let imageIndex = 0;

const displayImage = () => {
    if (imageIndex > galleryImages.length - 1) {
        imageIndex = 0;
    }
    imagesContainer.innerHTML = `<img src="${galleryImages[imageIndex]}" alt="beautiful veiw">`;
};

window.addEventListener('DOMContentLoaded', () => {
    displayImage();
});

let displayInterval;

galleryBtn.addEventListener('click', () => {
    displayInterval = setInterval(() => {
        imageIndex++;
        displayImage()
    }, 2000);
    galleryBtn.style.display = 'none';
    stopBtn.style.display = 'block';
});

stopBtn.addEventListener('click', () => {
    clearInterval(displayInterval);
    stopBtn.style.display = 'none';
    galleryBtn.style.display = 'block';
});
// gallery section end