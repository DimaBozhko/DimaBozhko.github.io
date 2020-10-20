"use strict";
// Tabs
let btnTab = document.querySelectorAll(".tabs-btn__item"),
    tabContent = document.querySelectorAll(".tabs-content"),
    tabs = document.querySelector(".tabs-btn");

function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++){
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
  };
};

hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    };
  };

  tabs.addEventListener("click", function(e) {
    let target = event.target;
    if (target && target.classList.contains("tabs-btn__item")) {
      for (let i = 0; i < btnTab.length; i++) {
        if (target == btnTab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        };
      };
    };
  });
// Burger menu

let burgerMenu = document.querySelector(".burger-menu"),
    line = document.querySelectorAll(".line"),
    nav = document.querySelector(".nav");


burgerMenu.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("burger-menu")
     || e.target.classList.contains("line")) {
    line[1].classList.toggle("hide");
    line[0].classList.toggle("line-one-active");
    line[2].classList.toggle("line-two-active");

    nav.classList.toggle("hide");
  }
})
