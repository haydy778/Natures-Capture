var navbar = document.getElementById("headerTwo");


  window.onscroll = function(){
    scrollFunction()
  };

  function scrollFunction() {
  
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
  
  } else {
      navbar.style.position = "relative";
      navbar.style.top = "0px";
  }
}

