// filter

const headerFilter = document.querySelector(".header-filter");

headerFilter.addEventListener("click", () => {
	headerFilter.classList.toggle("header-filter__active");
	document.body.classList.toggle("filter");
});

// burger menu

const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".header-wrapper__block");

burgerBtn.addEventListener("click", () => {
	burgerBtn.classList.toggle("burger-btn_active");
	headerMenu.classList.toggle("active");
});

// checkbox in connect-form

const label = document.querySelector(".accept-politic__label");
const check = document.querySelector(".accept-politic__check");

label.addEventListener("click", () => {
	check.classList.toggle("accept-politic__check_active");
});

// footer dropdown

const footerPoint = document.querySelectorAll(".credits-point");

footerPoint.forEach((e) => {
	const dropdown = e.querySelector(".credits-point__dropdown");
	const footerMenu = e.querySelector(".credits-menu");

	e.addEventListener("click", () => {
		dropdown.classList.toggle("credits-point__dropdown_active");
		footerMenu.classList.toggle("credits-menu_active");
	});
});

// spoilers

const spoilers = document.querySelectorAll(".spoilers__item");

spoilers.forEach((e) => {
	const spoilerOpen = e.querySelector(".spoilers__open");

	e.addEventListener("click", () => {
		e.classList.toggle("spoilers__item_active");
		spoilerOpen.classList.toggle("spoilers__open_active");
	});
});

// desc-course spoilers

const descCourseSpoilers = document.querySelectorAll(".desc-course__item");

descCourseSpoilers.forEach((e) => {
	const descCourseOpen = e.querySelector(".desc-course__open");
	e.addEventListener("click", () => {
		e.classList.toggle("desc-course__item_active");
		descCourseOpen.classList.toggle("desc-course__open_active");
	});
});

// fancybox

const openFancy = document.querySelectorAll(".open-video");
const showYoutube = document.querySelector(".show-youtube");
const closeFancy = document.querySelector(".show-youtube__close");

openFancy.forEach((e) => {
	e.addEventListener("click", () => {
		showYoutube.classList.add("show-youtube_active");
	});
});

// function openYoutube() {
// 	openFancy.addEventListener("click", () => {
// 		showYoutube.classList.add("show-youtube_active");
// 	});
// }

function closeYoutube() {
	closeFancy.addEventListener("click", () => {
		showYoutube.classList.remove("show-youtube_active");
	});
}

// sliders

const mainSwiper = new Swiper(".main-slider", {
	direction: "vertical",
	slidesPerView: 1,
	effect: "fade",
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".main-slider__pagination",
		clickable: true,
	},
});

const eventSlider = new Swiper(".main-event__slider", {
	pagination: {
		el: ".main-event__pagination",
		clickable: true,
	},
	breakpoints: {
		1200: {
			slidesPerView: 1,
		},
		950: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1: {
			slidesPerView: 1.3,
			spaceBetween: 20,
		},
	},
});

const categorySlider = new Swiper(".category-slider", {
	breakpoints: {
		1200: {
			slidesPerView: 5,
		},
		900: {
			slidesPerView: 4,
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 20,
			freeMode: false,
		},
		470: {
			slidesPerView: 2.2,
			spaceBetween: 10,
		},
		1: {
			slidesPerView: 1.3,
			freeMode: true,
		},
	},
});

function licenceSliderInit() {
	const popUpRefLeft = document.querySelector(".licenses-inner__prev");

	const popUpRefRight = document.querySelector(".licenses-inner__next");

	const licensesSlider = new Swiper(".licenses-slider", {
		navigation: {
			nextEl: popUpRefRight,
			prevEl: popUpRefLeft,
		},
		breakpoints: {
			1500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
			900: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			650: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			370: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
	});
}

licenceSliderInit();

const reviewSlider = new Swiper(".review-slider", {
	breakpoints: {
		1100: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
		450: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1: {
			slidesPerView: 1,
		},
	},
});

const clientsSlider = new Swiper(".clients-slider", {
	loop: true,
	spaceBetween: 12,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		1380: {
			slidesPerView: 6,
		},
		1100: {
			slidesPerView: 5,
		},
		680: {
			slidesPerView: 4,
		},
		450: {
			slidesPerView: 3,
		},
		1: {
			slidesPerView: 2,
		},
	},
});

function chooseUsSliderInit() {
	const popUpRefLeft = document.querySelector(".choose-us__prev");

	const popUpRefRight = document.querySelector(".choose-us__next");

	const chooseUsSlider = new Swiper(".choose-us-slider", {
		slidesPerView: 1,
		navigation: {
			nextEl: popUpRefRight,
			prevEl: popUpRefLeft,
		},
	});
}

chooseUsSliderInit();


// jQuery...

$("[data-fancybox]").fancybox({
	// Options will go here
	buttons: ["close"],
	wheel: false,
	transitionEffect: "slide",
	// thumbs          : false,
	// hash            : false,
	loop: true,
	// keyboard        : true,
	toolbar: false,
	// animationEffect : false,
	// arrows          : true,
	clickContent: false,
});
