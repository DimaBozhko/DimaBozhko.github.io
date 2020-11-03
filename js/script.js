let menu = document.querySelector(".menu"),
	menuItem = document.querySelectorAll(".menu__item"),
	nav = document.querySelector(".nav"),
	burgerMenu = document.querySelector(".burger-menu"),
	burgerMenuItem = document.querySelectorAll(".burger-menu__item");

document.addEventListener("click", function(event) {
	if (event.target && event.target.classList.contains("nav") 
		|| event.target.classList.contains("burger-menu__item") || event.target.classList.contains("burger-menu") ) {

		burgerMenuItem[0].classList.toggle("top-transform");
		burgerMenuItem[1].classList.toggle("center-transform");
		burgerMenuItem[2].classList.toggle("bottom-bg");
		nav.classList.toggle("hide");
	}
})

//--slider--

let sliderImg = document.querySelectorAll(".slider__img"),
	afterBtn = document.querySelector(".after-btn"),
	beforeBtn = document.querySelector(".before-btn");

//--radio-button--

let form = document.querySelector(".form"),
	wrapper = document.querySelector(".wrapper"),
	// --Program variables--
	programWrapper = document.querySelectorAll(".program-wrapper-js"),
	programText = document.querySelectorAll(".program-text-js"),
	programInput = document.querySelectorAll(".program-input-js"),
	circle = document.querySelectorAll(".circle"),
	// --Extra variables--
	extraWrapper = document.querySelectorAll(".extra-wrapper-js"),
	extraText = document.querySelectorAll(".extra-text-js"),
	extraInput = document.querySelectorAll(".extra-input-js"),
	checkMark = document.querySelectorAll(".check-mark");

function hideCircle(e) {
	circle.forEach(item => {
		item.style.opacity = "0";
	})
}

programInput.forEach((item, i) => {
	item.addEventListener("change", (e) => {
		hideCircle();
		if (e.target == item) {
			circle[i].style.opacity = "1";
		}
	})
})

extraInput.forEach((item, i) => {
	item.addEventListener("change", (e) => {
		if (e.target == item) {
			checkMark[i].classList.toggle("check-mark-hide")
		}
	})
})


