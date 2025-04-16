import "./scss/style.scss";

const body = document.querySelector("body");
const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");
const media = window.matchMedia("(width < 69.375em)");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");

const openMobileMenu = () => {
  console.log("open menu");

  btnOpen.setAttribute("aria-expanded", "true");
  body.classList.add("noscroll");
};

const closeMobileMenu = () => {
  console.log("close menu");

  btnOpen.setAttribute("aria-expanded", "false");
  body.classList.remove("noscroll");
};

const setupNav = (e) => {
  if (e.matches) {
    // is mobile
    console.log("is mobile");

    setTimeout(() => {
      navContent.style.display = "block";
      navOverlay.style.display = "block";
    }, 500);
  } else {
    // is desktop
    console.log("is desktop");
    navContent.style.display = "";
  }
};

setupNav(media);

btnOpen.addEventListener("click", openMobileMenu);

btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setupNav(e);
});
