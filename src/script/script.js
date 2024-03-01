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

// Darkmode Warning
if (navigator.userAgent.match(/samsung/i)) {
  alert(
    "Ihr Browser (Samsung Internet) zeigt diese Website wenn Sie den Darkmode aktiviert haben möglicherweise nicht korrekt an" +
      "Bitte erwägen Sie einen anderen Browser zu benutzen oder den Darkmode zu deaktivieren." +
      "Empfohlen sind Firefox, Microsoft Edge, oder Google Chrome."
  );
}
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
