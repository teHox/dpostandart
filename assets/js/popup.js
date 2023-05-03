// popup open

const connectBtn = document.querySelector("#connect-btn");
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
