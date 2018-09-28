const menuBtnHome = document.getElementById("menu-btn-home");
const menuBtnWorks = document.getElementById("menu-btn-works");
const menuBtnContact = document.getElementById("menu-btn-contact");

const contentHome = document.getElementById("home");
const contentWorks = document.getElementById("works");
const contentContact = document.getElementById("contact");

const main = document.querySelector("main");

menuBtnHome.onclick = () => {
  menuBtnHome.classList.add("menu-btn-selected");
  menuBtnWorks.classList.remove("menu-btn-selected");
  menuBtnContact.classList.remove("menu-btn-selected");

  contentHome.classList.remove("hide");
  contentWorks.classList.add("hide");
  contentContact.classList.add("hide");

  // main.classList.add("nav-style");
  // main.classList.remove("main-style");
};

menuBtnWorks.onclick = () => {
  menuBtnWorks.classList.add("menu-btn-selected");
  menuBtnHome.classList.remove("menu-btn-selected");
  menuBtnContact.classList.remove("menu-btn-selected");

  contentHome.classList.add("hide");
  contentWorks.classList.remove("hide");
  contentContact.classList.add("hide");

  // main.classList.remove("nav-style");
  // main.classList.add("main-style");
};

menuBtnContact.onclick = () => {
  menuBtnContact.classList.add("menu-btn-selected");
  menuBtnHome.classList.remove("menu-btn-selected");
  menuBtnWorks.classList.remove("menu-btn-selected");

  contentHome.classList.add("hide");
  contentWorks.classList.add("hide");
  contentContact.classList.remove("hide");

  // main.classList.add("main-style");
  // main.classList.remove("nav-style");

  // setTimeout(() => {
  //   main.classList.add("nav-style");
  //   main.classList.remove("main-style");
  // }, 10);
};
