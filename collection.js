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
  
  function myFunction() {
    let requestURL = 'collection.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
      }
    };
    request.open("GET", requestURL, true);
    request.send();
  }
  var count = 0;
  function dataReportStatus(data) {
    var divall = document.getElementById("divall");
    for(var i=0; i < (data.iconic.length / 4); i++){
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.margin = "0px 0px 20px";
        divall.appendChild(row);
        for(var j=count; j<count+4; j++){
            var blank = document.createElement("br");
            var col = document.createElement("div");
            col.setAttribute("class", "col");
            col.setAttribute("id", "colitem");
            col.style.height = "420px";
            col.style.margin = "0px 10px";
            var row1 = document.createElement("div");
            row1.setAttribute("class", "row");
            row1.style.height = "240px";
            var pic = document.createElement("img");
            pic.src = data.iconic[j].pic28;
            pic.style.width = "100%";
            pic.style.backgroundColor = "rgb(244, 244, 244)";
            row1.appendChild(pic);
            col.appendChild(row1);
            row.appendChild(col);
            col.appendChild(blank);
            if(data.iconic[j].status == "NEW"){
              
              var rownew = document.createElement("div");
              rownew.setAttribute("class", "row");
              var box = document.createElement("div");
              rownew.style.padding = "5px 10px";
              box.style.width = "42px";
              box.style.color = "white";
              box.style.fontSize = "13px";
              box.style.textAlign = "center";
              box.style.letterSpacing = "2.4px";
              box.style.backgroundColor = "rgb(205, 188, 122)";
              box.innerHTML = "NEW";
              
              col.appendChild(rownew);
              rownew.appendChild(box);
            }
            var rowname = document.createElement("div");
            rowname.setAttribute("class", "row");
            rowname.style.padding = "0px 10px";
            var boxname = document.createElement("div");
            boxname.innerHTML = data.iconic[j].name;
            boxname.style.letterSpacing = "2.4px";
            boxname.style.fontSize = "13px";
            boxname.style.padding = "5px 0px";
            col.appendChild(rowname);
            rowname.appendChild(boxname);

            var rowcolor = document.createElement("div");
            rowcolor.setAttribute("class", "row");
            rowcolor.style.padding = "0px 10px";
            var colorbtn = document.createElement("button");
            colorbtn.setAttribute("class", "colorbtn")
            colorbtn.style.width = "22px";
            colorbtn.style.height = "22px";
            colorbtn.style.borderRadius = "50%";
            colorbtn.style.backgroundColor = data.iconic[j].hexcolor[0];
            col.appendChild(rowcolor);
            rowcolor.appendChild(colorbtn);

            var rowcolor2 = document.createElement("div");
            rowcolor2.setAttribute("class", "row");
            rowcolor2.style.padding = "5px 10px";
            var boxcolor = document.createElement("div");
            boxcolor.innerHTML = data.iconic[j].color[0];
            boxcolor.style.letterSpacing = "0.15x";
            boxcolor.style.fontSize = "13px";
            col.appendChild(rowcolor2);
            rowcolor2.appendChild(boxcolor);

            var rowprice = document.createElement("div");
            rowprice.setAttribute("class", "row");
            rowprice.style.padding = "0px 10px";
            var boxprice = document.createElement("div");
            if(count < 4){
              boxprice.innerHTML = "฿"+data.iconic[j].price;
            }
            else{
              boxprice.innerHTML = "จาก ฿"+data.iconic[j].price+" บาท";
            }
            boxprice.style.fontSize = "15px";
            col.appendChild(rowprice);
            rowprice.appendChild(boxprice);

        }
        count += 4;
    }
}