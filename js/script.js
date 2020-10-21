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