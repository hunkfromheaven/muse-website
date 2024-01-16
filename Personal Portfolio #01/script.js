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

    // Initialize Slick Carousel
    $(musicCarousel).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
		responsive: [
		        {
		            breakpoint: 1024, // Medium devices (tablets, landscape phones)
		            settings: {
		                slidesToShow: 2,
		            }
		        },
		        {
		            breakpoint: 768, // Small devices (portrait phones)
		            settings: {
		                slidesToShow: 1,
		            }
		        },
		        // Add more breakpoints and settings as needed
		    ]
        // Add any other options you want to customize
    });

    // Event listener to scroll to the next slide
    document.getElementById('nextSlideBtn').addEventListener('click', function () {
        $(musicCarousel).slick('slickNext');
    });

    // Event listener to scroll to the previous slide
    document.getElementById('prevSlideBtn').addEventListener('click', function () {
        $(musicCarousel).slick('slickPrev');
    });
});
