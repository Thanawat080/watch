$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
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
function elnl2(){
    var imgc = document.getElementById('imgc');
    var btn2 = document.getElementById('btn2');
    var btn1 = document.getElementById('btn1');
    var nameclr = document.getElementById('nameclr');
    btn2.style.border = "1px solid black";
    btn1.style.border = "1px solid white";
    nameclr.innerText = "Silver";
    imgc.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400159_elan_necklace_s_detail2.png"

}
function elnl1(){
    
    var imgc = document.getElementById('imgc');
    var btn2 = document.getElementById('btn2');
    var btn1 = document.getElementById('btn1');
    var nameclr = document.getElementById('nameclr');
    btn2.style.border = "1px solid white";
    btn1.style.border = "1px solid black";
    nameclr.innerText = "Rose Gold";
    imgc.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400158_elan_necklace_rg_detail2.png"

}
function elbc2(){
    var imgcelbc = document.getElementById('imgcelbc')
    var btnelbc2 = document.getElementById('btnelbc2');
    var btnelbc1 = document.getElementById('btnelbc1');
    var nameclrelbc = document.getElementById('nameclrelbc');
    btnelbc2.style.border = "1px solid black";
    btnelbc1.style.border = "1px solid white";
    nameclrelbc.innerText = "Silver";
    imgcelbc.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400143_elan_bracelet_small_s.png";

}
function elbc1(){
  var imgcelbc = document.getElementById('imgcelbc')
  var btnelbc2 = document.getElementById('btnelbc2');
  var btnelbc1 = document.getElementById('btnelbc1');
  var nameclrelbc = document.getElementById('nameclrelbc');
  btnelbc2.style.border = "1px solid white";
  btnelbc1.style.border = "1px solid black";
  nameclrelbc.innerText = "Rose Gold";
  imgcelbc.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400140_elan_bracelet_small_rg.png";

}
function eler2(){
    var imgceler = document.getElementById('imgceler');
    var btneler2 = document.getElementById('btneler2');
    var btneler1 = document.getElementById('btneler1');
    var nameclreler = document.getElementById('nameclreler');
    btneler2.style.border = "1px solid black";
    btneler1.style.border = "1px solid white";
    nameclreler.innerText = "Silver";
    imgceler.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400147_elan_earrings_s_1.png"

}
function eler1(){
    var imgceler = document.getElementById('imgceler');
    var btneler2 = document.getElementById('btneler2');
    var btneler1 = document.getElementById('btneler1');
    var nameclreler = document.getElementById('nameclreler');
    btneler2.style.border = "1px solid white";
    btneler1.style.border = "1px solid black";
    nameclreler.innerText = "Rose Gold";
    imgceler.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400146_elan_earrings_rg_1.png"

}