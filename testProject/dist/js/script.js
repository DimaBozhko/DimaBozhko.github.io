"use strict";
//--menu--
const burgerMenu = document.querySelector(".burger-menu"),
		nav = document.querySelector(".nav"),
		line = document.querySelectorAll(".line");

function activeBurger() {
	line[0].style.transform = "rotate(45deg)";
	line[1].style.display = "none";
	line[2].style.transform = "rotate(-45deg)";
	document.querySelector("body").style.overflow = "hidden";

	line.forEach(item => {
		item.style.position = "absolute";	
		item.style.backgroundColor = "#fff";
	});
};
function closeBurger() {
	line[0].style.transform = "rotate(0)";
	line[1].style.display = "";
	line[2].style.transform = "rotate(0)";
	document.querySelector("body").style.overflow = "scroll";

	line.forEach(item => {
		item.style.position = "static";
		item.style.backgroundColor = "#000";
	});
};
let i = 0;

burgerMenu.addEventListener("click", (e) => {
	nav.classList.toggle("hide");
	i++;
	if (i == 1) {
		activeBurger();
	} else {
		closeBurger()
		i = 0;
	}
})
//--program--

const program = document.querySelector(".program"),
	programItem = document.querySelectorAll(".program-item"),
	programContent = document.querySelectorAll(".program-content-js"),
	programItemBtn = document.querySelectorAll(".program-item__btn"),
	wrapperBtn = document.querySelectorAll(".wrapper-btn"),
	programItemArrow = document.querySelectorAll(".program-item__arrow-icon");

program.addEventListener("click", (e) => {
	if (e.target && e.target.classList.contains("wrapper-btn") 
		|| e.target.classList.contains("program-item__btn") 
		|| e.target.classList.contains("program-item__arrow-icon")) {
		wrapperBtn.forEach((item, key) => {
			if (e.target == item) {
				programContent[key].classList.toggle("hide");
				programItemArrow[key].classList.toggle("arrow-rotate");
			}
		})
		programItemBtn.forEach((item, key) => {
			if (e.target == item) {
				programContent[key].classList.toggle("hide");
				programItemArrow[key].classList.toggle("arrow-rotate");
			}
		})
		programItemArrow.forEach((item, key) => {
			if (e.target == item) {
				programContent[key].classList.toggle("hide");
				programItemArrow[key].classList.toggle("arrow-rotate");
			}
		})
	}
})
//--slider--

const slideContent = document.querySelectorAll(".slide-content-wrapper"),
	btnNext = document.querySelector(".next-slide"),
	btnPrev = document.querySelector(".prev-slide"),
	totalSlide = document.querySelector(".total-slide-js"),
	sliderNumber = document.querySelector(".counter__number-js");

let slideIndex = 1;

showSlides(slideIndex)

totalSlide.textContent = `/ ${slideContent.length}`;

function showSlides(n) {
	if (n > slideContent.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slideContent.length;
	}

	slideContent.forEach(item => {
		item.classList.add("hide");
	})
	slideContent[slideIndex - 1].classList.remove("hide");
	sliderNumber.textContent = slideIndex;

}

function plusSlide(n) {
	showSlides(slideIndex += n);
}
btnPrev.addEventListener("click", () => {
	plusSlide(-1);
});
btnNext.addEventListener("click", () => {
	plusSlide(1);
});

//--map--

let map,
	marker;

	  function initMap() {
	    map = new google.maps.Map(document.getElementById("map"), {
	      center: { lat: 50.02641888294709, lng: 36.217216368844575 }, 
	      zoom: 18,
	    });
	    marker = new google.maps.Marker({
	    	position: { lat: 50.02641888294709, lng: 36.217216368844575 },
	    	map: map,
	    	title: "3D Maya. Курс 3d-графики, анимации..."
	    });
	  }

