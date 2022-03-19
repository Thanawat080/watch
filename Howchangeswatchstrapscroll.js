$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
        $(".headerfixed").css("visibility", "hidden");
        
        $("#nav_on_scroll").css("visibility", "visible");
      } else {
        // $("#nav_start").css("background-color", "transparent"); // if not, change it back to transparent
        $(".headerfixed").css("visibility", "visible");
        
        $("#nav_on_scroll").css("visibility", "hidden");
      }
    });
  });



  
 

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Before


