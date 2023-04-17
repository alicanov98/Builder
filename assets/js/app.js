const burgerMenuIcon = document.querySelector(".burger-menu");
const navItem = document.querySelectorAll(".navItem");

burgerMenuIcon.addEventListener("click", () => {
  burgerMenuIcon.classList.toggle("active");

  navItem[0].classList.toggle("active");
  navItem[1].classList.toggle("active");
  navItem[2].classList.toggle("active");
  navItem[3].classList.toggle("active");
  navItem[4].classList.toggle("active");
  navItem[5].classList.toggle("active");
  navItem[6].classList.toggle("active");
});
