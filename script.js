let displayedPage = "#home";
let activeBtn = "#menu-btn-home";

// soft transition to home page + btn "home" view change
$("#menu-btn-home").click(() => {
  if (displayedPage === "#home") return;

  $(activeBtn).removeClass("menu-btn-selected");
  $("#menu-btn-home").addClass("menu-btn-selected");
  activeBtn = "#menu-btn-home";

  $(displayedPage).fadeOut(() => {
    $("#home").fadeIn();
    displayedPage = "#home";
  });
});

// soft transition to works page + btn "works" view change
$("#menu-btn-works").click(() => {
  if (displayedPage === "#works") return;

  $(activeBtn).removeClass("menu-btn-selected");
  $("#menu-btn-works").addClass("menu-btn-selected");
  activeBtn = "#menu-btn-works";

  $(displayedPage).fadeOut(() => {
    $("#works").fadeIn();
    displayedPage = "#works";
  });
});

// soft transition to contact page + btn "contact" view change
$("#menu-btn-contact").click(() => {
  if (displayedPage === "#contact") return;

  $(activeBtn).removeClass("menu-btn-selected");
  $("#menu-btn-contact").addClass("menu-btn-selected");
  activeBtn = "#menu-btn-contact";

  $(displayedPage).fadeOut(() => {
    $("#contact").fadeIn();
    displayedPage = "#contact";
  });
});
