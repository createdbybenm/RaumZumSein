let startingPosition = window.scrollY;

const navBar = document.querySelector(".navBar");
const sideBar = document.querySelector(".sideBar");

const showSidebar = () => {
  sideBar.classList.add("animateSide");
};

document.addEventListener("scroll", () => {
  if (startingPosition < window.scrollY) {
    navBar.classList.add("animateNav");
    sideBar.classList.remove("animateSide");
  } else {
    navBar.classList.remove("animateNav");
  }

  startingPosition = window.scrollY;
});

const hideSidebar = () => {
  sideBar.classList.remove("animateSide");
};

/*
document.addEventListener("scroll", () => {
  if (window.scrollY > startingPosition) {
    navBar.addClass("animated");
  } else {
    navBar.removeClass("animated");
  }
  if (window.scrollY < startingPosition) {
    navBar.removeClass("sticky");
  } else {
    navBar.addClass("sticky");
  }
})
*/
