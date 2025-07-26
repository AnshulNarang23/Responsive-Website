const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const fixed = document.querySelector("#fixed-image");
const elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    const image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
    fixed.classList.add("show");
  });

  e.addEventListener("mouseleave", function () {
    fixed.classList.remove("show");
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
