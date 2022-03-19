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


// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





function myfunction(){
  var boxall = document.getElementById("divfooter");
  var row = document.createElement("div");
  row.setAttribute("class", "row");
  row.style.padding = "0px 0px";
  boxall.appendChild(row);

  var box = document.createElement("div");
  box.setAttribute("type", "submit")
  box.setAttribute("class", "col")

  var box1 = document.createElement("div");
  box1.setAttribute("type", "submit")
  box1.setAttribute("class", "col")

  var box2 = document.createElement("div");
  box2.setAttribute("type", "submit")
  box2.setAttribute("class", "col")


  var box3 = document.createElement("div");
  box3.setAttribute("type", "submit")
  box3.setAttribute("class", "col")



  box.style.marginRight = "15px";
  box1.style.marginRight = "15px";
  // box2.style.marginRight = "15px";


  box.style.height = "419px";
  box1.style.height = "419px";
  // box2.style.height = "419px";
  // box3.style.height = "419px";


  var rowa = document.createElement("div");
  rowa.setAttribute("class", "row");
  rowa.style.height = "245px";
  var row1a = document.createElement("div");
  row1a.setAttribute("class", "row");
  row1a.style.height = "245px";
  var row2a = document.createElement("div");
  row2a.setAttribute("class", "row");
  row2a.style.height = "245px";
  var row3a = document.createElement("div");
  row3a.setAttribute("class", "row");
  row3a.style.height = "245px";


  var rowb = document.createElement("div");
  rowb.setAttribute("class", "row");
  var row1b = document.createElement("div");
  row1b.setAttribute("class", "row");
  var row2b = document.createElement("div");
  row2b.setAttribute("class", "row");
  var row3b = document.createElement("div");
  row3b.setAttribute("class", "row");



  rowa.style.height = "280px";
  box.appendChild(rowa);
  box.appendChild(rowb);

  var boxina = document.createElement("div");
  boxina.setAttribute("class", "col");
  boxina.style.backgroundColor = "rgb(244, 244, 244)";
  rowa.appendChild(boxina);
  var img = document.createElement("img");
  img.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400126_elan_triad_ring_48_rg_3.png";
  img.setAttribute("id","img");
  img.style.width = "100%";
  boxina.appendChild(img);




  var boxinb = document.createElement("div");
  boxinb.setAttribute("class", "col");
  rowb.appendChild(boxinb);
  boxnew = document.createElement("div");
  boxnew.style.width = "50px";
  boxnew.style.height = "20px";
  boxnew.style.backgroundColor = "#e5cf87"
  boxinb.appendChild(boxnew)
  boxnew.style.marginTop = "10px"
  var b = document.createElement("b");
  b.innerHTML = "&nbsp;&nbsp;NEW";
  b.style.fontSize = "14px";
  b.style.color = "white"
  boxnew.appendChild(b);
  var name = document.createElement("p");
  name.innerHTML = "ELAN TRIAD RING";
  name.style.fontSize = "13px";
  name.style.marginTop = "7px";
  boxinb.appendChild(name);
  var button = document.createElement("button")
  button.setAttribute("class", "btn btn-light btn-circle btn-md");
  button.setAttribute("onclick", "changecolor();");

  button.setAttribute("id", "changecolor")
  button.style.marginTop= "-10px"
  button.style.backgroundColor = "#e5ae87";
  boxinb.appendChild(button);
  var buttonleft = document.createElement("button")
  buttonleft.setAttribute("class", "btn btn-light btn-circle btn-md");
  buttonleft.setAttribute("onclick", "changecolorleft();");

  buttonleft.setAttribute("id", "changecolorleft")
  buttonleft.style.marginTop= "-10px"
  buttonleft.style.backgroundColor = "#c1c1c1";
  boxinb.appendChild(buttonleft);


  var namecolor = document.createElement("p");
  namecolor.innerHTML = "Rose Gold";
  namecolor.style.fontSize = "13px";
  namecolor.style.marginTop = "7px";
  namecolor.setAttribute("id","namecolor");
  boxinb.appendChild(namecolor);

  var namebath = document.createElement("p");
  namebath.innerHTML = "฿2,450";
  namebath.style.fontSize = "13px";
  namebath.style.marginTop = "-13px";
  boxinb.appendChild(namebath);










  box1.appendChild(row1a);
  box1.appendChild(row1b);
  row1a.style.height = "280px";
  var boxin1a = document.createElement("div");
  boxin1a.setAttribute("class", "col");
  boxin1a.style.backgroundColor = "rgb(244, 244, 244)";
  row1a.appendChild(boxin1a);
  var img1 = document.createElement("img");
  img1.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400140_elan_bracelet_small_rg.png";
  img1.style.width = "100%";
  img1.setAttribute("id","img1");
  img1.style.marginTop = "80px";
  boxin1a.appendChild(img1);









  var boxin1b = document.createElement("div");
  boxin1b.setAttribute("class", "col");
  row1b.appendChild(boxin1b);
  boxnew1 = document.createElement("div");
  boxnew1.style.width = "50px";
  boxnew1.style.height = "20px";
  boxnew1.style.backgroundColor = "#e5cf87"
  boxin1b.appendChild(boxnew1)
  boxnew1.style.marginTop = "10px"
  var b1 = document.createElement("b");
  b1.innerHTML = "&nbsp;&nbsp;NEW";
  b1.style.fontSize = "14px";
  b1.style.color = "white"
  boxnew1.appendChild(b1);

  var name1 = document.createElement("p");
  name1.innerHTML = "ELAN BRACELET";
  name1.style.fontSize = "13px";
  name1.style.marginTop = "7px";
  boxin1b.appendChild(name1);
  var button1 = document.createElement("button")
  button1.setAttribute("class", "btn btn-light btn-circle btn-md");
  button1.setAttribute("onclick", "changecolor1();");

  button1.style.marginTop= "-10px"
  button1.style.backgroundColor = "#e5ae87";
  boxin1b.appendChild(button1);
  var buttonleft1 = document.createElement("button")
  buttonleft1.setAttribute("class", "btn btn-light btn-circle btn-md");
  buttonleft1.setAttribute("onclick", "changecolorleft1();");

  buttonleft1.style.marginTop= "-10px"
  buttonleft1.style.backgroundColor = "#c1c1c1";
  boxin1b.appendChild(buttonleft1);

  var namecolor1 = document.createElement("p");
  namecolor1.innerHTML = "Rose Gold";
  namecolor1.style.fontSize = "13px";
  namecolor1.style.marginTop = "7px";
  boxin1b.appendChild(namecolor1);
  namecolor1.setAttribute("id","namecolor1");

  var namebath = document.createElement("p");
  namebath.innerHTML = "฿2,450";
  namebath.style.fontSize = "13px";
  namebath.style.marginTop = "-13px";
  boxin1b.appendChild(namebath);









  box2.appendChild(row2a);
  box2.appendChild(row2b);
  row2a.style.height = "280px";
  var boxin2a = document.createElement("div");
  boxin2a.setAttribute("class", "col");
  boxin2a.style.backgroundColor = "rgb(244, 244, 244)";
  row2a.appendChild(boxin2a);
  var img2 = document.createElement("img");
  img2.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw-petite-28-melrose-black-cat.png";
  img2.style.width = "100%";
  boxin2a.appendChild(img2);







  var boxin2b = document.createElement("div");
  boxin2b.setAttribute("class", "col");
  row2b.appendChild(boxin2b);
  var name2 = document.createElement("p");
  name2.innerHTML = "PETITE MELROSE";
  name2.style.fontSize = "13px";
  name2.style.marginTop = "7px";
  boxin2b.appendChild(name2);

  var button2 = document.createElement("button")
  button2.setAttribute("class", "btn btn-light btn-circle btn-md");
  button2.setAttribute("onclick", "changecolor();");

  button2.setAttribute("id", "changecolor")
  button2.style.marginTop= "-10px"
  button2.style.backgroundColor = "#e5ae87";
  boxin2b.appendChild(button2);

  var namecolor2 = document.createElement("p");
  namecolor2.innerHTML = "Rose Gold";
  namecolor2.style.fontSize = "13px";
  namecolor2.style.marginTop = "7px";
  boxin2b.appendChild(namecolor2);

  var namebath = document.createElement("p");
  namebath.innerHTML = "จาก ฿5,150 บาท";
  namebath.style.fontSize = "13px";
  namebath.style.marginTop = "-13px";
  boxin2b.appendChild(namebath);











  box3.appendChild(row3a);
  box3.appendChild(row3b);
  row3a.style.height = "280px";
  var boxin3a = document.createElement("div");
  boxin3a.setAttribute("class", "col");
  boxin3a.style.backgroundColor = "rgb(244, 244, 244)";
  row3a.appendChild(boxin3a);
  var img3 = document.createElement("img");
  img3.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400158_elan_necklace_rg_detail2.png";
  img3.style.width = "100%";
  img3.style.marginTop = "30px";
  img3.setAttribute("id","img3");
  boxin3a.appendChild(img3);




  var boxin3b = document.createElement("div");
  boxin3b.setAttribute("class", "col");
  row3b.appendChild(boxin3b);
  boxnew3 = document.createElement("div");
  boxnew3.style.width = "50px";
  boxnew3.style.height = "20px";
  boxnew3.style.backgroundColor = "#e5cf87"
  boxin3b.appendChild(boxnew3)
  boxnew3.style.marginTop = "10px"

  var b3 = document.createElement("b");
  b3.innerHTML = "&nbsp;&nbsp;NEW";
  b3.style.fontSize = "14px";
  b3.style.color = "white"
  boxnew3.appendChild(b3);
  var name3 = document.createElement("p");
  name3.innerHTML = "ELAN NECKLACE";
  name3.style.fontSize = "13px";
  name3.style.marginTop = "7px";
  boxin3b.appendChild(name3);

  var button3 = document.createElement("button")
  button3.setAttribute("class", "btn btn-light btn-circle btn-md");
  button3.setAttribute("onclick", "changecolor3();");

  button3.setAttribute("id", "changecolor")
  button3.style.marginTop= "-10px"
  button3.style.backgroundColor = "#e5ae87";
  boxin3b.appendChild(button3);
  var buttonleft3 = document.createElement("button")
  buttonleft3.setAttribute("class", "btn btn-light btn-circle btn-md");
  buttonleft3.setAttribute("onclick", "changecolorleft3();");

  buttonleft3.setAttribute("id", "changecolorleft")
  buttonleft3.style.marginTop= "-10px"
  buttonleft3.style.backgroundColor = "#c1c1c1";
  boxin3b.appendChild(buttonleft3);
  var namecolor3 = document.createElement("p");
  namecolor3.innerHTML = "Rose Gold";
  namecolor3.style.fontSize = "13px";
  namecolor3.style.marginTop = "7px";
  namecolor3.setAttribute("id","namecolor3");
  boxin3b.appendChild(namecolor3);

  var namebath = document.createElement("p");
  namebath.innerHTML = "฿3,050";
  namebath.style.fontSize = "13px";
  namebath.style.marginTop = "-13px";
  boxin3b.appendChild(namebath);








box.setAttribute("id","box5")
box1.setAttribute("id","box5")
box2.setAttribute("id","box5")
box3.setAttribute("id","box5")



  row.appendChild(box);
  row.appendChild(box1);
  row.appendChild(box2);
  row.appendChild(box3);

}











function changecolor(){
  img.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400126_elan_triad_ring_48_rg_3.png";
  namecolor.innerHTML = "Rose Gold";
}

function changecolorleft(){
  img.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400133_elan_triad_ring_48_s_3.png";
  namecolor.innerHTML = "Silver";
}


function changecolor1(){
  img1.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400140_elan_bracelet_small_rg.png";
  namecolor1.innerHTML = "Rose Gold";
}

function changecolorleft1(){
  img1.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400143_elan_bracelet_small_s.png";
  namecolor1.innerHTML = "Silver";
}



function changecolor3(){
  img3.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400158_elan_necklace_rg_detail2.png";
  namecolor3.innerHTML = "Rose Gold";
}

function changecolorleft3(){
  img3.src = "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw00400159_elan_necklace_s_detail2.png";
  namecolor3.innerHTML = "Silver";
}