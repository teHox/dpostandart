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

footerPoint.forEach((e)=>{
	const dropdown = e.querySelector(".credits-point__dropdown");
	const footerMenu = e.querySelector(".credits-menu");

	e.addEventListener("click", ()=>{
		dropdown.classList.toggle("credits-point__dropdown_active");
		footerMenu.classList.toggle("credits-menu_active")
	})
})

// fancybox

const openFancy = document.querySelector(".about-block__video");
const showYoutube = document.querySelector(".show-youtube");
const closeFancy = document.querySelector(".show-youtube__close");

function openYoutube() {
	openFancy.addEventListener("click", () => {
		showYoutube.classList.add("show-youtube_active");
	});
}

function closeYoutube() {
	closeFancy.addEventListener("click", () => {
		showYoutube.classList.remove("show-youtube_active");
	});
}

// popup open

const connectBtn = document.querySelector(".connect__btn");
const connectPopup = document.querySelector(".connect-popup");

connectBtn.addEventListener("click", () => {
	connectPopup.classList.add("popup_active");
});

// popup close

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () => {
	popup.classList.remove("popup_active");
});

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

licenceSliderInit();

// tabs

class ItcTabs {
	constructor(target, config) {
		const defaultConfig = {};
		this._config = Object.assign(defaultConfig, config);
		this._elTabs =
			typeof target === "string" ? document.querySelector(target) : target;
		this._elButtons = this._elTabs.querySelectorAll(".tabs__btn");
		this._elPanes = this._elTabs.querySelectorAll(".tabs__pane");
		this._eventShow = new Event("tab.itc.change");
		this._init();
		this._events();
	}
	_init() {
		this._elTabs.setAttribute("role", "tablist");
		this._elButtons.forEach((el, index) => {
			el.dataset.index = index;
			el.setAttribute("role", "tab");
			this._elPanes[index].setAttribute("role", "tabpanel");
		});
	}
	show(elLinkTarget) {
		const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
		const elLinkActive = this._elTabs.querySelector(".tabs__btn_active");
		const elPaneShow = this._elTabs.querySelector(".tabs__pane_show");
		if (elLinkTarget === elLinkActive) {
			return;
		}
		elLinkActive ? elLinkActive.classList.remove("tabs__btn_active") : null;
		elPaneShow ? elPaneShow.classList.remove("tabs__pane_show") : null;
		elLinkTarget.classList.add("tabs__btn_active");
		elPaneTarget.classList.add("tabs__pane_show");
		this._elTabs.dispatchEvent(this._eventShow);
		elLinkTarget.focus();
	}
	showByIndex(index) {
		const elLinkTarget = this._elButtons[index];
		elLinkTarget ? this.show(elLinkTarget) : null;
	}
	_events() {
		this._elTabs.addEventListener("click", (e) => {
			const target = e.target.closest(".tabs__btn");
			if (target) {
				e.preventDefault();
				this.show(target);
			}
		});
	}
}

new ItcTabs(".tabs");

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
