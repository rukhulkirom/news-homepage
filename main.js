import "./scss/style.scss";

const btnOpen = document.querySelector("#btn-open");
const media = window.matchMedia("(width < 69.375em)");

const openMobileMenu = () => {
  console.log("Open menu");

  btnOpen.setAttribute("aria-expanded", "true");
};

const setupNav = (e) => {
  if (e.matches) {
    // is mobile
    console.log("is mobile");
  } else {
    // is desktop
    console.log("is desktop");
  }
};

btnOpen.addEventListener("click", openMobileMenu);

media.addEventListener("change", function (e) {
  setupNav(e);
});
