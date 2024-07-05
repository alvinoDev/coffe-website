/* ===================== HEADER ===================== */

// LOADER

const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toogle'),
	navClose = document.getElementById('nav_close');
// SHOW MENU
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show_menu');
	});
}
// HIDDEN MENU
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show_menu');
	});
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
	const navMenu = document.getElementById('nav_menu');
	navMenu.classList.remove('show_menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// CHANGE BACKGROUND HEADER
function scrollHeader() {
	const header = document.getElementById('header');
	if (this.scrollY >= 50) header.classList.add('scroll_header');
	else header.classList.remove('scroll_header');
}

window.addEventListener('scroll', scrollHeader);

/* ====================== MAIN ====================== */

// MIXITUP FILTER PRODUCTS
let mixerProducts = mixitup('.products_content', {
	selectors: {
		target: '.products_card',
	},
	animation: {
		duration: 300,
	},
});

// Default filter products
mixerProducts.filter('.delicacies');

// Link active products
linkProducts = document.querySelectorAll('.products_item');

function activeProducts() {
	linkProducts.forEach((l) => l.classList.remove('active_product'));
	this.classList.add('active_product');
}
linkProducts.forEach((l) => l.addEventListener('click', activeProducts));

/* ================= SCROLL ACTIONS ================= */

// SHOW SCROLL UP
function scrollUp() {
	const scrollUp = document.getElementById('scrollup');
	if (this.scrollY >= 350) scrollUp.classList.add('show_scrollup');
	else scrollUp.classList.remove('show_scrollup');
}
window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector(
				'.nav_menu a[href*=' + sectionId + ']',
			);

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active_link');
		} else {
			sectionsClass.classList.remove('active_link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

// SCROLL REVEAL ANIMATION

/* ===================== FOOTER ===================== */
