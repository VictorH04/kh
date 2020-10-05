// // Get the buttons
// const container = document.getElementById('slideshow');
// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');

// // counter
// let counter = 0;

// // event listeners

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// function nextSlide() {
// 	container.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

// 	if (counter === 2) {
// 		counter = -1;
// 	}

// 	counter++;

// 	container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
// 	console.log(counter);
// }

// function prevSlide() {
// 	container.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

// 	if (counter === 0) {
// 		counter = 3;
// 	}

// 	counter--;

// 	container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
// 	console.log(counter);
// }

// let autoslide = setInterval(nextSlide, 4000);

// Navbar
const navbar2Icon = document.querySelector('.navbar2-icon');
let navbar2 = document.querySelector('.navbar2');
const navContent = document.getElementById('navContent');
// const active = doucmnet.querySelector('.active');
let display = navContent.classList.toggle('display');

navbar2Icon.classList.remove('active');

function toggleNav() {
	if (navbar2Icon.classList.contains('active')) {
		closeNav();
	} else {
		openNav();
	}
	// openNav();
	// closeNav();
	console.log('clicked');
}

function openNav() {
	navbar2Icon.classList.toggle('active');
	navContent.style.height = '100%';

	navContent.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	console.log('aaaa');
}

function closeNav() {
	navContent.style.height = '0%';

	let closing = navContent.animate([ { opacity: '1' }, { opacity: '.1' } ], { duration: 250, fill: 'forwards' });

	closing.onfinish = function(e) {
		navbar2Icon.classList.toggle('active');
	};
}

navbar2Icon.addEventListener('click', toggleNav);

// Navbar sticky
window.onscroll = function() {
	scrollFunc();
};

let sticky = navbar.offsetTop;

console.log(sticky);

function scrollFunc() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
