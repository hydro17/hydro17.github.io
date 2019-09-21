let displayedPage = "#home";
let activeBtn = "#menu-btn-home";

const root = document.documentElement;
const main = document.querySelector("main");

// soft transition to new View + change to new menu button appearance
function changeView(newMenuBtn, newView) {
  $(activeBtn).removeClass("menu-btn-selected");
  $(newMenuBtn).addClass("menu-btn-selected");
  activeBtn = newMenuBtn;

  const mainInitialHeight = main.offsetHeight + "px";
  root.style.setProperty("--main-initial-height", mainInitialHeight);

  $(displayedPage).fadeOut(() => {
    window.scrollTo(0, 0);
    main.style.visibility = "hidden";
    main.classList.remove("animate-height");

    $(newView).fadeIn();

    root.style.setProperty("--main-target-height", main.offsetHeight + "px");
    main.classList.add("animate-height");
    main.style.visibility = "visible";

    displayedPage = newView;
  });
}

$("#menu-btn-home").click(() => {
  if (displayedPage === "#home") return;
  changeView("#menu-btn-home", "#home");
});

$("#menu-btn-works").click(() => {
  if (displayedPage === "#works") return;
  changeView("#menu-btn-works", "#works");
});

$("#menu-btn-contact").click(() => {
  if (displayedPage === "#contact") return;
  changeView("#menu-btn-contact", "#contact");
});
