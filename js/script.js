//
 let header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 100);
 //
let statsSection = document.querySelector(".stats");
let boxNumbers = document.querySelectorAll(".box .num ");
function startCount(e) {
  let progGoals = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == progGoals) {
      clearInterval(counter);
    }
  }, (16 + 16 + 16 + 16) / progGoals);
}
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      boxNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});
//
//
//=========   swiper  header     ============//
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});