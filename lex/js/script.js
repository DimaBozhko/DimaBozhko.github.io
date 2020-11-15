window.addEventListener("DOMContentLoaded", function(){
   "use strict";
   let   tab = document.querySelectorAll(".main__item"),
         menuItem = document.querySelectorAll(".header__menu-item"),
         menu = document.querySelector(".header__menu"),
         nav = document.querySelector(".header__nav"),
         burger = document.querySelector(".burger"),
         burgerLine = document.querySelectorAll(".burger__line");

   document.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("burger") 
            || e.target.classList.contains("burger__line")) {
         burgerLine[0].classList.toggle("rotate-left");
         burgerLine[1].classList.toggle("hide");

         burgerLine[2].classList.toggle("rotate-right");

         nav.classList.toggle("hide");
      }

})



   function hideTabContent(a) {
      for (let i = a; i < tab.length; i++) {
         tab[i].classList.remove("show");
         tab[i].classList.add("hide");
      }
   }
   hideTabContent(1);

   function showTabContent(b) {
      if (tab[b].classList.contains("hide")) {
         tab[b].classList.remove("hide");
         tab[b].classList.add("show");
      }
   }

   menu.addEventListener("click", function(event){
      let target = event.target;
      if (target && target.classList.contains("header__menu-item")) {
         for( let i = 0; i < menuItem.length; i++) {
            if(target == menuItem[i]) {
               hideTabContent(0);
               showTabContent(i);
                break;
            }
         }
      }
   });


   let   sliderIndex = 1,
         slides = document.querySelectorAll(".services-slider-item"),
         back = document.querySelector(".back"),
         next = document.querySelector(".next");

   showSlides(sliderIndex);

   function showSlides(n) {
      if(n > slides.length) {
         sliderIndex = 1;
      }
      if(n < 1) {
         sliderIndex = slides.length;
      }
      slides.forEach((item) => item.style.display = "none");
      slides[sliderIndex - 1].style.display = "flex";
   }
   function plusSlides(n) {
      showSlides(sliderIndex += n);
   }
   function currentSlides(n) {
      showSlides(sliderIndex = n);
   }
   back.addEventListener("click", function() {
      plusSlides(-1);
   });
   next.addEventListener("click", function() {
      plusSlides(1);
   });

   let btnPhone = document.querySelector(".banner__btn"),
         contact = document.querySelector(".contact"),
         banner = document.querySelector(".banner");

      btnPhone.addEventListener("click", function(){
         banner.classList.remove("show");
         banner.classList.add("hide");
         contact.classList.remove("hide");
         contact.classList.add("show");
   });
});
