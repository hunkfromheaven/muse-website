// Randomly select the rare logo with 1% probability
const useRareLogo = Math.random() < 0.01;

// Get the logo container and image elements
const logoContainer = document.getElementById('logo-container');
const logoImage = document.getElementById('logo-image');

// Set the logo image source based on the probability
if (useRareLogo) {
    logoImage.src = 'images/musecastY2K_RARE.gif';
} else {
    logoImage.src = 'images/MUSEY2K.png';
}

// Function to scroll to a specific instance of an element
function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners for navigation links
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

// Slick Carousel initialization and event listeners
document.addEventListener('DOMContentLoaded', function () {
    const musicCarousel = document.getElementById('music-carousel');
    const gamesCarousel = document.getElementById('games-carousel');

    // Initialize Music Carousel
    $('#music-carousel').slick({
        slidesToShow: 2.99,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Initialize Games Carousel with Center Mode
    $('#games-carousel').slick({
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // Event listener to scroll to the next slide in the Music Carousel
    document.getElementById('nextSlideBtn').addEventListener('click', function () {
        $(musicCarousel).slick('slickNext');
    });

    // Event listener to scroll to the previous slide in the Music Carousel
    document.getElementById('prevSlideBtn').addEventListener('click', function () {
        $(musicCarousel).slick('slickPrev');
    });
});
