function closeTips() {
  var x = document.getElementById("tips");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Header scroll

$(function() {
  var header = $(".header");
   
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } 
    else {
      header.removeClass("scrolled");
    }
  });
  
});