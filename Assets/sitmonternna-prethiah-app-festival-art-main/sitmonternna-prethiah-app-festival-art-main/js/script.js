/*-- SWIPPER SECTION BOUTONS APP --*/
const swiperapp = new Swiper(".swiper-filters", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,
  freeMode: true,
});

/*-- SWIPPER SECTION OEUVRES APP --*/
const swiperappartworks = new Swiper(".swiper-featured-artworks", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 2.1,
  spaceBetween: 5,
  centeredSlides: false,
});

/*-- SWIPPER BOUTON ARTWORK LIKED --*/
document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.querySelector(".bi-heart-fill");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("liked");
  });
});

/*-- SWIPPER SECTION SCREENSHOTS LP --*/
var swiper = new Swiper(".swiper-screenshots", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 250,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*activate buttons*/
