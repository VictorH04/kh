//! Navbar 2
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

let sticky = navbar2.offsetTop;

console.log(sticky);

function scrollFunc() {
	if (window.pageYOffset >= sticky) {
		navbar2.classList.add('sticky');
	} else {
		navbar2.classList.remove('sticky');
	}
}

// ! Mengdekalkulator

// Get all the inputs
let inputForm = document.getElementById('inputForm');

let inputFiskVoksen = document.getElementById('inputFiskVoksen');
let inputFiskBarn = document.getElementById('inputFiskBarn');
let finalValueFillet = document.querySelector('.kalkulator-item--valueFillet');
let btnFillet = document.querySelector('.kalkulator-item--btnFillet');

let inputSkiverVoksen = document.getElementById('inputSkiverVoksen');
let inputSkiverBarn = document.getElementById('inputSkiverBarn');
let finalValueSkiver = document.querySelector('.kalkulator-item--valueSkiver');
let btnSkiver = document.querySelector('.kalkulator-item--btnSkiver');

let inputLeverVoksen = document.getElementById('inputLeverVoksen');
let inputLeverBarn = document.getElementById('inputLeverBarn');
let finalValueLever = document.querySelector('.kalkulator-item--valueLever');
let btnLever = document.querySelector('.kalkulator-item--btnLever');

let inputRognVoksen = document.getElementById('inputRognVoksen');
let inputRognBarn = document.getElementById('inputRognBarn');
let finalValueRogn = document.querySelector('.kalkulator-item--valueRogn');
let btnRogn = document.querySelector('.kalkulator-item--btnRogn');

let inputRekerVoksen = document.getElementById('inputRekerVoksen');
let inputRekerBarn = document.getElementById('inputRekerBarn');
let finalValueReker = document.querySelector('.kalkulator-item--valueReker');
let btnReker = document.querySelector('.kalkulator-item--btnReker');

let inputSkjellVoksen = document.getElementById('inputSkjellVoksen');
let inputSkjellBarn = document.getElementById('inputSkjellBarn');
let finalValueSkjell = document.querySelector('.kalkulator-item--valueSkjell');
let btnSkjell = document.querySelector('.kalkulator-item--btnSkjell');

let inputKrabberVoksen = document.getElementById('inputKrabbeVoksen');
let inputKrabberBarn = document.getElementById('inputKrabbeBarn');
let finalValueKrabber = document.querySelector('.kalkulator-item--valueKrabbe');
let btnKrabber = document.querySelector('.kalkulator-item--btnKrabbe');

let inputHummerVoksen = document.getElementById('inputHummerVoksen');
let inputHummerBarn = document.getElementById('inputHummerBarn');
let finalValueHummer = document.querySelector('.kalkulator-item--valueHummer');
let btnHummer = document.querySelector('.kalkulator-item--btnHummer');

// Event listeners

inputForm.addEventListener('submit', (event) => {
	event.preventDefault();
});

// !Fiskefillet
inputFiskVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	filletCalc();
});

inputFiskBarn.addEventListener('click', (event) => {
	event.preventDefault();
	filletCalc();
});

btnFillet.addEventListener('click', (event) => {
	event.preventDefault();
	filletCalc();
});

// ! FiskeSkiver

inputSkiverVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	skiverCalc();
});

inputSkiverBarn.addEventListener('click', (event) => {
	event.preventDefault();
	skiverCalc();
});

btnSkiver.addEventListener('click', (event) => {
	event.preventDefault();
	skiverCalc();
});

// ! Lever av skrei

inputLeverVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	leverCalc();
});

inputLeverBarn.addEventListener('click', (event) => {
	event.preventDefault();
	leverCalc();
});

btnLever.addEventListener('click', (event) => {
	event.preventDefault();
	leverCalc();
});

// ! Rogn av skrei

inputRognVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	rognCalc();
});

inputRognBarn.addEventListener('click', (event) => {
	event.preventDefault();
	rognCalc();
});

btnRogn.addEventListener('click', (event) => {
	event.preventDefault();
	rognCalc();
});

// ! Reker

inputRekerVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	rekerCalc();
});

inputRekerBarn.addEventListener('click', (event) => {
	event.preventDefault();
	rekerCalc();
});

btnReker.addEventListener('click', (event) => {
	event.preventDefault();
	rekerCalc();
});

// ! Blåskjell

inputSkjellVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	skjellCalc();
});

inputSkjellBarn.addEventListener('click', (event) => {
	event.preventDefault();
	skjellCalc();
});

btnSkjell.addEventListener('click', (event) => {
	event.preventDefault();
	skjellCalc();
});

// ! Krabbe

inputKrabberVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	krabberCalc();
});

inputKrabberBarn.addEventListener('click', (event) => {
	event.preventDefault();
	krabberCalc();
});

btnKrabber.addEventListener('click', (event) => {
	event.preventDefault();
	krabberCalc();
});

// ! Hummer

inputHummerVoksen.addEventListener('click', (event) => {
	event.preventDefault();
	hummerCalc();
});

inputHummerBarn.addEventListener('click', (event) => {
	event.preventDefault();
	hummerCalc();
});

btnHummer.addEventListener('click', (event) => {
	event.preventDefault();
	hummerCalc();
});

// Functions

function filletCalc() {
	let inputFiskVoksenValue = inputFiskVoksen.value;
	let inputFiskBarnValue = inputFiskBarn.value;
	let sum = `${inputFiskVoksenValue * 200 + inputFiskBarnValue * 100}g`;

	console.log(inputFiskVoksenValue, inputFiskBarnValue);

	finalValueFillet.textContent = `Voksen: ${inputFiskVoksenValue * 200}g + Barn: ${inputFiskBarnValue *
		100}g = ${sum}`;
}

function skiverCalc() {
	let inputSkiverVoksenValue = inputSkiverVoksen.value;
	let inputSkiverBarnValue = inputSkiverBarn.value;
	let sum = `${inputSkiverVoksenValue * 300 + inputSkiverBarnValue * 150}g`;

	console.log(inputSkiverVoksenValue, inputSkiverBarnValue);

	finalValueSkiver.textContent = `Voksen: ${inputSkiverVoksenValue * 300}g + Barn: ${inputSkiverBarnValue *
		150}g = ${sum}`;
}

function leverCalc() {
	let inputLeverVoksenValue = inputLeverVoksen.value;
	let inputLeverBarnValue = inputLeverBarn.value;
	let sum = `${inputLeverVoksenValue * 100 + inputLeverBarnValue * 50}g`;

	console.log(inputLeverVoksenValue, inputLeverBarnValue);

	finalValueLever.textContent = `Voksen: ${inputLeverVoksenValue * 100}g + Barn: ${inputLeverBarnValue *
		50}g = ${sum}`;
}

function rognCalc() {
	let inputRognVoksenValue = inputRognVoksen.value;
	let inputRognBarnValue = inputRognBarn.value;
	let sum = `${inputRognVoksenValue * 100 + inputRognBarnValue * 50}g`;

	console.log(inputRognVoksenValue, inputRognBarnValue);

	finalValueRogn.textContent = `Voksen: ${inputRognVoksenValue * 100}g + Barn: ${inputRognBarnValue * 50}g = ${sum}`;
}

function rekerCalc() {
	let inputRekerVoksenValue = inputRekerVoksen.value;
	let inputRekerBarnValue = inputRekerBarn.value;
	let sum = `${inputRekerVoksenValue * 500 + inputRekerBarnValue * 250}g`;

	console.log(inputRekerVoksenValue, inputRekerBarnValue);

	finalValueReker.textContent = `Voksen: ${inputRekerVoksenValue * 500}g + Barn: ${inputRekerBarnValue *
		250}g = ${sum}`;
}

function skjellCalc() {
	let inputSkjellVoksenValue = inputSkjellVoksen.value;
	let inputSkjellBarnValue = inputSkjellBarn.value;
	let sum = `${inputSkjellVoksenValue * 500 + inputSkjellBarnValue * 250}g`;

	console.log(inputSkjellVoksenValue, inputSkjellBarnValue);

	finalValueSkjell.textContent = `Voksen: ${inputSkjellVoksenValue * 500}g + Barn: ${inputSkjellBarnValue *
		250}g = ${sum}`;
}

function krabberCalc() {
	let inputKrabbeVoksenValue = inputKrabbeVoksen.value;
	let inputKrabbeBarnValue = inputKrabbeBarn.value;
	let sum = `${inputKrabbeVoksenValue * 500 + inputKrabbeBarnValue * 250}g`;

	console.log(inputKrabbeVoksenValue, inputKrabbeBarnValue);

	finalValueKrabber.textContent = `Voksen: ${inputKrabbeVoksenValue * 500}g + Barn: ${inputKrabbeBarnValue *
		250}g = ${sum}`;
}

function hummerCalc() {
	let inputHummerVoksenValue = inputHummerVoksen.value;
	let inputHummerBarnValue = inputHummerBarn.value;
	let sum = `${inputHummerVoksenValue * 500 + inputHummerBarnValue * 250}g`;

	console.log(inputHummerVoksenValue, inputHummerBarnValue);

	finalValueHummer.textContent = `Voksen: ${inputHummerVoksenValue * 500}g + Barn: ${inputHummerBarnValue *
		250}g = ${sum}`;
}
