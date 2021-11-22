// ===== SHOW HEADER MENU =====
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 25
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== TESTIMONIALS SWIPER =====
let swiper = new Swiper(".testimonials-container", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 18,
  grabCursor: true,
  autoplay: {
    duration: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ===== SCROLL UP =====
function scrollupActive() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-active")
    : scrollup.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollupActive);
