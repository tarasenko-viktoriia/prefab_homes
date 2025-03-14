// Строгий режим
"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
	document.addEventListener('click', documentActions);
	document.addEventListener('keydown', documentActions);
	html.classList.add('loaded');
}
function documentActions(e) {
	const type = e.type
	const targetElement = e.target

	if (type === 'click') {
		// Меню-бургер
		if (targetElement.closest('.icon-menu')) {
			html.classList.toggle('menu-open');
		}
		targetElement.closest('.menu__link') && html.classList.contains('menu-open') ? html.classList.remove('menu-open') : null

	}
}
document.addEventListener("DOMContentLoaded", function() {
	const input = document.querySelector("#phone");
	const iti = intlTelInput(input, {
		initialCountry: "us", // Країна за замовчуванням
		preferredCountries: ["us", "gb", "ua"], // Пріоритетні країни
		utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Для форматування номерів
		separateDialCode: true,
	});
});

// const thumbnailSlider = new Swiper(".thumbnail-slider", {
// 	direction: "vertical",
//     slidesPerView: "auto",
//     spaceBetween: 10,
//     watchSlidesProgress: true,
//     allowTouchMove: false,
// });

// const mainSlider = new Swiper(".main-slider", {
//     direction: "vertical",
//     loop: true,
//     loopedSlides: 5,
//     navigation: { nextEl: ".button-next", prevEl: ".button-prev" },
//     thumbs: { swiper: thumbnailSlider },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,  
//     },
// });

const images = [
    "./img/home-section/image-4.png",
    "./img/banner.jpg",
];

let currentIndex = 0;
let isFirstImageActive = true;

function changeImage() {
    const img1 = document.getElementById("heroImage1");
    const img2 = document.getElementById("heroImage2");

    const nextIndex = (currentIndex + 1) % images.length;
    const activeImage = isFirstImageActive ? img1 : img2;
    const inactiveImage = isFirstImageActive ? img2 : img1;

    inactiveImage.src = images[nextIndex];
    inactiveImage.style.opacity = 1; 

    setTimeout(() => {
        activeImage.style.opacity = 0;
    }, 100);

    currentIndex = nextIndex;
    isFirstImageActive = !isFirstImageActive;
}

setInterval(changeImage, 10000);
