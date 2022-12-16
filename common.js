$(function () {
  var swiper1 = new Swiper(".menu_slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
  });
});
