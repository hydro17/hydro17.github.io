const menuBtn1 = document.getElementById("menu-btn-1");
const menuBtn2 = document.getElementById("menu-btn-2");
const menuBtn3 = document.getElementById("menu-btn-3");

const contentHome = document.getElementById("home");
const contentWorks = document.getElementById("works");
const contentContact = document.getElementById("contact");

const main = document.querySelector("main");

menuBtn1.onclick = () => {
  menuBtn1.classList.add("menu-btn-selected");
  menuBtn2.classList.remove("menu-btn-selected");
  menuBtn3.classList.remove("menu-btn-selected");

  contentHome.classList.remove("hide");
  contentWorks.classList.add("hide");
  contentContact.classList.add("hide");

  main.classList.add("nav-style");
  main.classList.remove("main-style");
}

menuBtn2.onclick = () => {
  menuBtn2.classList.add("menu-btn-selected");
  menuBtn1.classList.remove("menu-btn-selected");
  menuBtn3.classList.remove("menu-btn-selected");

  contentHome.classList.add("hide");
  contentWorks.classList.remove("hide");
  contentContact.classList.add("hide");

  main.classList.remove("nav-style");
  main.classList.add("main-style");
}

menuBtn3.onclick = () => {
  menuBtn3.classList.add("menu-btn-selected");
  menuBtn1.classList.remove("menu-btn-selected");
  menuBtn2.classList.remove("menu-btn-selected");

  contentHome.classList.add("hide");
  contentWorks.classList.add("hide");
  contentContact.classList.remove("hide");

  main.classList.add("main-style");
  main.classList.remove("nav-style");

  setTimeout(() => {
    main.classList.add("nav-style");
    main.classList.remove("main-style");
  }, 10);
}
