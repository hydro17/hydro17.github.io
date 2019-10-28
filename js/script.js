let currentView = "#home";
let activeMenuBtn = "#menu-btn-home";

const root = document.documentElement;
const viewsContainer = document.querySelector("main");

// soft transition to new View + change to new menu button appearance
// viewsContainer height animation (using css)
function changeView(newMenuBtn, newView) {
  $(activeMenuBtn).removeClass("menu-btn-selected");
  $(newMenuBtn).addClass("menu-btn-selected");
  activeMenuBtn = newMenuBtn;

  const mainInitialHeight = viewsContainer.offsetHeight + "px";
  root.style.setProperty("--views-container-initial-height", mainInitialHeight);

  $(currentView).fadeOut(() => {
    window.scrollTo(0, 0);
    viewsContainer.style.visibility = "hidden";

    // to be able to repeat the css animation
    viewsContainer.classList.remove("animate-height");

    $(newView).fadeIn();

    root.style.setProperty("--views-container-target-height", viewsContainer.offsetHeight + "px");

    // start css animation
    viewsContainer.classList.add("animate-height");
    viewsContainer.style.visibility = "visible";

    currentView = newView;
  });
}

$("#menu-btn-home").click(() => {
  if (currentView === "#home") return;
  changeView("#menu-btn-home", "#home");
});

$("#menu-btn-works").click(() => {
  if (currentView === "#works") return;
  changeView("#menu-btn-works", "#works");
});

$("#menu-btn-contact").click(() => {
  if (currentView === "#contact") return;
  changeView("#menu-btn-contact", "#contact");
});
