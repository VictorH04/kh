//! Navbar 3
const navbar3Icon = document.querySelector('.navbar3-icon');
let navbar = document.querySelector('.navbar3');
const navContent = document.getElementById('navContent');
// const active = doucmnet.querySelector('.active');
let display = navContent.classList.toggle('display');

navbar3Icon.classList.remove('active');

function toggleNav() {
	if (navbar3Icon.classList.contains('active')) {
		closeNav();
	} else {
		openNav();
	}
	// openNav();
	// closeNav();
	console.log('clicked');
}

function openNav() {
	navbar3Icon.classList.toggle('active');
	navContent.style.height = '100%';

	navContent.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	console.log('aaaa');
}

function closeNav() {
	navContent.style.height = '0%';

	let closing = navContent.animate([ { opacity: '1' }, { opacity: '.1' } ], { duration: 250, fill: 'forwards' });

	closing.onfinish = function(e) {
		navbar3Icon.classList.toggle('active');
	};
}

navbar3Icon.addEventListener('click', toggleNav);

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
