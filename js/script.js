"use strict";

document.addEventListener("DOMContentLoaded", () => {
	let menu = document.querySelector(".menu"),
		menuItem = document.querySelectorAll(".menu-item"),
		icon = document.querySelectorAll(".icon"),
		iconJs = document.querySelectorAll(".icon-js"),
		menuItemText = document.querySelectorAll(".menu-item__text"),
		bg = ["bg-green", "bg-red", "bg-blue"],
		contentItem = document.querySelectorAll(".content-item"),
		header = document.querySelector(".header"),
		main = document.querySelector(".main"),
		contact = document.querySelector(".contact"),
		contactItem = document.querySelectorAll(".contact-item"),
		contactText = document.querySelectorAll(".contact-item__text"),
		contactItemIcon = document.querySelectorAll(".contact-item__icon"),
		foto = document.querySelector(".foto"),
		fotoImg = document.querySelector(".foto-img"),
		name = document.querySelector(".i-am__name"),
		mainHeadline = document.querySelector(".main-headline"),
		figures = document.querySelector(".figures");

	let wid = document.querySelector(".main");


// function addWidth() {
// 	menu.style.width = wid.clientWidth + "px";

// }
// addWidth();

// window.addEventListener("resize", (e) => {
// 	addWidth();
// 	console.log(wid.clientWidth);	

// })

let num = 0; 
function hideMenuItem(e) {
	num++;
	for (let i = 0; i <= 2; i++) {
		menuItem[i].classList.toggle("menu-item--hide");
		header.classList.toggle("header-height");

	}
	menuItem.forEach((item, i) => {
		if (e.target == item) {
			item.classList.remove("menu-item--hide");
			if (num == 1) {
				item.classList.add(bg[i]);

			} else {
				item.classList.remove(bg[i]);
				num = 0;
			}
		}
	})
	icon.forEach((item, i) => {
		if (e.target == item) {
			menuItem[i].classList.remove("menu-item--hide");
			if (num == 1) {
				menuItem[i].classList.add(bg[i]);

			} else {
				menuItem[i].classList.remove(bg[i]);
				num = 0;
			}
		}

	})
	menuItemText.forEach((item, i) => {
		if (e.target == item) {
			menuItem[i].classList.remove("menu-item--hide");
			if (num == 1) {
				menuItem[i].classList.add(bg[i]);

			} else {
				menuItem[i].classList.remove(bg[i]);
				num = 0;
			}
		}
	})
	iconJs.forEach((item, i) => {
		if (e.target == item) {
			menuItem[i].classList.remove("menu-item--hide");
			if (num == 1) {
				menuItem[i].classList.add(bg[i]);

			} else {
				menuItem[i].classList.remove(bg[i]);
				num = 0;
			}
		}
	})
}

let k = 0;

function showContent(e) {
	k++;
	menuItem.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("height-hide");
			main.classList.toggle("main-show");
		}
		if (k == 1) {
			mainHeadline.classList.add("hide");
			figures.classList.add("hide");
		} else if (k > 1 && contentItem[0].classList.contains("height-hide") 
			&& contentItem[1].classList.contains("height-hide")
			&& contentItem[2].classList.contains("height-hide")) {
			mainHeadline.classList.remove("hide");
			figures.classList.remove("hide");
			k = 0;
		}

	})
	icon.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("height-hide");
						main.classList.toggle("main-show");
		}
		if (k == 1) {
			mainHeadline.classList.add("hide");
			figures.classList.add("hide");
		} else if (k > 1 && contentItem[0].classList.contains("height-hide") 
			&& contentItem[1].classList.contains("height-hide")
			&& contentItem[2].classList.contains("height-hide")) {
			mainHeadline.classList.remove("hide");
			figures.classList.remove("hide");
			k = 0;
		}

	})
	menuItemText.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("height-hide");
						main.classList.toggle("main-show");
		}
		if (k == 1) {
			mainHeadline.classList.add("hide");
			figures.classList.add("hide");
		} else if (k > 1 && contentItem[0].classList.contains("height-hide") 
			&& contentItem[1].classList.contains("height-hide")
			&& contentItem[2].classList.contains("height-hide")) {
			mainHeadline.classList.remove("hide");
			figures.classList.remove("hide");
			k = 0;
		}

	})
	iconJs.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("height-hide");
						main.classList.toggle("main-show");
		}
		if (k == 1) {
			mainHeadline.classList.add("hide");
			figures.classList.add("hide");
		} else if (k > 1 && contentItem[0].classList.contains("height-hide") 
			&& contentItem[1].classList.contains("height-hide")
			&& contentItem[2].classList.contains("height-hide")) {
			mainHeadline.classList.remove("hide");
			figures.classList.remove("hide");
			k = 0;
		}
	})	
}

let q = 0;

function showContact(e) {
	console.log(e.target)
		q++;

	contactItemIcon.forEach((item, i) => {
		if (e.target == item) {
			contactText[i].classList.toggle("hide");
			if (q == 1) {
				foto.classList.add("foto-change");
				fotoImg.classList.add("foto-img-change");
				name.classList.add("i-am__name--margin");
			} 
			else if (q > 1 && contactText[0].classList.contains("hide") 
				&& contactText[1].classList.contains("hide")) {
				foto.classList.remove("foto-change");
				fotoImg.classList.remove("foto-img-change");
				name.classList.remove("i-am__name--margin");
				q = 0;
			}
		}
	})
	iconJs.forEach((item, i) => {
		if (e.target == item) {
			contactText[i].classList.toggle("hide");
			if (q == 1) {
				foto.classList.add("foto-change");
				fotoImg.classList.add("foto-img-change");
				name.classList.add("i-am__name--margin");
			} 
			else if (q > 1 && contactText[0].classList.contains("hide") 
				&& contactText[1].classList.contains("hide")) {
				foto.classList.remove("foto-change");
				fotoImg.classList.remove("foto-img-change");
				name.classList.remove("i-am__name--margin");
				q = 0;
			}
		}
	})
}


	contact.addEventListener("click", (e) => {
		if (e.target && e.target.classList.contains("contact-item") 
			|| e.target.classList.contains("contact-item__icon") 
			|| e.target.classList.contains("icon-js")) {
			showContact(e);
		}		
	})

	menu.addEventListener("click", (e) => {
	console.log(e.target)
		if (e.target && e.target.classList.contains("menu-item") 
			|| e.target.classList.contains("icon") || e.target.classList.contains("icon-js")  
			|| e.target.classList.contains("menu-item__text")) {

			hideMenuItem(e);
			showContent(e);
		}
	})

})