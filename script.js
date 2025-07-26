const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const fixed = document.querySelector("#fixed-image");
const elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    const image = elem.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
    fixed.style.opacity = 1;
  });

  elem.addEventListener("mouseleave", function () {
    fixed.style.opacity = 0;
  });
});

function swiperAnimation() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
  });
}
swiperAnimation();
