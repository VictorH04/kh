// Get the buttons
const container = document.getElementById('slideshow');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// counter
let counter = 0;

// event listeners

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
	container.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	if (counter === 2) {
		counter = -1;
	}

	counter++;

	container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
	console.log(counter);
}

function prevSlide() {
	container.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	if (counter === 0) {
		counter = 3;
	}

	counter--;

	container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
	console.log(counter);
}

let autoslide = setInterval(nextSlide, 4000);

// Navbar
const navbarIcon = document.querySelector('.navbar-icon');
navbarIcon.classList.remove('active');

function toggleNav() {
	navbarIcon.classList.toggle('active');
	console.log('clicked');
}

navbarIcon.addEventListener('click', toggleNav);

window.onscroll = function() {
	scrollFunc();
};

let navbar = document.querySelector('.navbar');

let sticky = navbar.offsetTop;

console.log(sticky);

function scrollFunc() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
