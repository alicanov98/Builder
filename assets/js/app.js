// burger menu
const burgerMenuIcon = document.querySelector(".burger-menu");
const navItem = document.querySelectorAll(".navItem");

burgerMenuIcon.addEventListener("click", () => {
  burgerMenuIcon.classList.toggle("active");

  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle("active");
  }
});

// nav-bar scroll
window.onscroll = function () {
  if (
    document.body.scrollTop > 146 ||
    document.documentElement.scrollTop > 146
  ) {
    document.querySelector(".bottom-header").classList.add("fixedBar");
  } else {
    document.querySelector(".bottom-header").classList.remove("fixedBar");
  }
};
