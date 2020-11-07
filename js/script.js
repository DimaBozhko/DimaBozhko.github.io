"use strict";

document.addEventListener("DOMContentLoaded", () => {
	let menu = document.querySelector(".menu"),
			menuItem = document.querySelectorAll(".menu-item"),
			icon = document.querySelectorAll(".icon"),
			iconJs = document.querySelectorAll(".icon-js"),
			menuItemText = document.querySelectorAll(".menu-item__text"),
			bg = ["bg-green", "bg-red", "bg-blue"],
			contentItem = document.querySelectorAll(".content-item");

let num = 0;
function hideMenuItem(e) {
	num++;
	for (let i = 0; i <= 2; i++) {
		menuItem[i].classList.toggle("menu-item--hide")
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

function showContent(e) {
	menuItem.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("hide");
		}
	})
	icon.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("hide");
		}

	})
	menuItemText.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("hide");
		}
	})
	iconJs.forEach((item, i) => {
		if (e.target == item) {
			contentItem[i].classList.toggle("hide");
		}
	})	
}

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