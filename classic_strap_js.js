
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








var countpic = 0;
var count = 0;

function myFunction() {
  let requestURL = 'classic_strap_json.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();


  function dataReportStatus(data) {
    var divall = document.getElementById("divall");
    for (var i = 0; i < (data.Classic_Straps.length / 4) - 1; i++) {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      row.style.padding = "10px 0px";
      divall.appendChild(row);
      
      for (var j = countpic; j < countpic + 4; j++) {
        count++;
        var box = document.createElement("div");
        box.setAttribute("type", "submit")
        box.setAttribute("class", "col")
        box.setAttribute("id", "box5")
        box.style.height = "419px";
        box.setAttribute("onclick", "push("+ j +");")
        box.style.marginRight = "15px";
        row.appendChild(box);

        var row1 = document.createElement("div");
        row1.setAttribute("class", "row");
        row1.style.height = "240px";
        var row2 = document.createElement("div");

        row2.setAttribute("class", "row");

        var rowstatus = document.createElement("div");
        rowstatus.setAttribute("class", "row");
        rowstatus.style.height = "25px";
        rowstatus.style.padding = "5px";

        box.appendChild(row1);
        box.appendChild(rowstatus);
        box.appendChild(row2);


        var box1 = document.createElement("div");
        box1.setAttribute("class", "col");
        box1.style.backgroundColor = "rgb(244, 244, 244)";
        row1.appendChild(box1);


        var img = document.createElement("img");
        if(data.Classic_Straps[j].No == 5){
          img.src = data.Classic_Straps[j].pic_rg[1];

        }
        else if (data.Classic_Straps[j].pic_rg[0] == " " && data.Classic_Straps[j].pic_go[0] == " ") {
          img.src = data.Classic_Straps[j].pic_sv[0];

        }
        else if (data.Classic_Straps[j].pic_sv[0] != " " && data.Classic_Straps[j].pic_go[0] != " " && data.Classic_Straps[j].pic_rg[0] != " ") {

          
          img.src = data.Classic_Straps[j].pic_rg[0];


        }
        
        else if (data.Classic_Straps[j].pic_rg[0] == " " && data.Classic_Straps[j].pic_sv[0] == " ") {
          img.src = data.Classic_Straps[j].pic_go[0];


        }
        


        
        else if (data.Classic_Straps[j].pic_go[0] == " ") {
          img.src = data.Classic_Straps[j].pic_rg[0];


        }
        else if (data.Classic_Straps[j].pic_sv[0] == " ") {
          img.src = data.Classic_Straps[j].pic_rg[0];


        }
        img.style.marginTop = "50px"
        img.setAttribute("id", count + "a" + count);


        img.style.width = "100%";



        box1.appendChild(img);

        var p = document.createElement("p");




        var box2 = document.createElement("div");
        box2.setAttribute("class", "col");

        p.innerHTML = data.Classic_Straps[j].name;
        p.style.padding = "12px 0px";
        p.style.fontSize = "13px";

        box2.appendChild(p);

        var boxstatus = document.createElement("div");
        boxstatus.setAttribute("class", "col-3");
        boxstatus.setAttribute("id", count + "status" + count);


        rowstatus.appendChild(boxstatus);
        let test = 0;
        var findpum = data.Classic_Straps[j].color.length;
        if(data.Classic_Straps[j].no == "30"){
          
        }
        for (var k = 0; k < findpum; k++) {


          var button = document.createElement("button")
          button.setAttribute("class", "btn btn-light btn-circle btn-md");
          button.setAttribute("onclick", "changecolor(this,event);");

          button.setAttribute("id", count)
          button.setAttribute("value", data.Classic_Straps[j].color[k])


          button.style.backgroundColor = data.Classic_Straps[j].code_color[k];
          box2.appendChild(button);
          //check new item
          if (test == 0) {
            if (button.getAttribute("value") == "Rose Gold") {
              if (data.Classic_Straps[j].statusrg == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.style.color = "white";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.Classic_Straps[j].statusrg == "สินค้าหมด") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "สินค้าหมด";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Silver") {
              if (data.Classic_Straps[j].statussv == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                boxstatus.style.color = "white";
                test++;
              }
              if (data.Classic_Straps[j].statussv == "สินค้าหมด") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "สินค้าหมด";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Gold") {
              if (data.Classic_Straps[j].statusgo == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                boxstatus.style.color = "white";
                test++;
              }
              if (data.Classic_Straps[j].statusgo == "สินค้าหมด") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "สินค้าหมด";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            test++
          }
        }
        test = 0;



        row2.appendChild(box2);
        var p1 = document.createElement("p");
        p1.innerHTML = data.Classic_Straps[j].color[0];
        p1.setAttribute("id", count + "b" + count);

        p1.style.padding = "10px 0px";
        p1.style.fontSize = "13px";
        p1.style.margin = "0%";
        box2.appendChild(p1)



        var p3 = document.createElement("p");
        p3.innerHTML = "จาก ฿" + data.Classic_Straps[j].price[0] + " บาท";
        p3.style.fontSize = "16px";
        box2.appendChild(p3)



      }


      countpic += 4;

    }
    for(var h = 0; h < 1; h++){

      
      var rowfinal = document.createElement("div");
      rowfinal.setAttribute("class", "row");

      rowfinal.style.padding = "15px 0px";
      divall.appendChild(rowfinal);
      var colfinal = document.createElement("div");
      colfinal.setAttribute("class", "container");

      rowfinal.appendChild(colfinal)
      var rowfinal1 = document.createElement("div");
      rowfinal1.setAttribute("class", "row");
      colfinal.appendChild(rowfinal1)

      var find = (data.Classic_Straps.length % 4);
      if(find == 0){
        find = 4;  
      }
      for (var j = countpic; j < countpic + find ; j++) {
        count++;
        var box = document.createElement("div");
        box.setAttribute("type", "submit")
        if(find == 3){
          colfinal.style.marginLeft = "150px"
        }
        else if(find == 2){
          colfinal.style.marginLeft = "275px"
        }
        else if(find == 1){
          colfinal.style.marginLeft = "410px"
        }
        box.style.height = "419px";
        box.style.width = "263px";

        box.style.marginRight = "16px";
        rowfinal1.appendChild(box);
        box.setAttribute("id", "box5")
        var row1 = document.createElement("div");
        row1.setAttribute("class", "row");
        row1.style.height = "240px";
        row1.style.width = "240px";
        row1.style.marginLeft = "1px";

        var row2 = document.createElement("div");

        row2.setAttribute("class", "row");

        var rowstatus = document.createElement("div");
        rowstatus.setAttribute("class", "row");
        rowstatus.style.height = "25px";
        rowstatus.style.padding = "5px";

        box.appendChild(row1);
        box.appendChild(rowstatus);
        box.appendChild(row2);


        var box1 = document.createElement("div");
        box1.style.backgroundColor = "rgb(244, 244, 244)";
        row1.appendChild(box1);
        box1.style.width = "261px";
        


        var img = document.createElement("img");
        if (data.Classic_Straps[j].pic_rg[0] == " " && data.Classic_Straps[j].pic_go[0] == " ") {
          img.src = data.Classic_Straps[j].pic_sv[0];

        }
        else if (data.Classic_Straps[j].pic_sv[0] != " " && data.Classic_Straps[j].pic_go[0] != " " && data.Classic_Straps[j].pic_rg[0] != " ") {
          img.src = data.Classic_Straps[j].pic_rg[0];


        }

        else if (data.Classic_Straps[j].pic_rg[0] == " " && data.Classic_Straps[j].pic_sv[0] == " ") {
          img.src = data.Classic_Straps[j].pic_go[0];


        }
        else if (data.Classic_Straps[j].pic_go[0] == " " && data.Classic_Straps[j].pic_sv[0] == " ") {
          
            img.src = data.Classic_Straps[j].pic_rg[0];
          

        }
        else if (data.Classic_Straps[j].pic_go[0] == " ") {
          img.src = data.Classic_Straps[j].pic_rg[0];


        }
        else if (data.Classic_Straps[j].pic_sv[0] == " ") {
          img.src = data.Classic_Straps[j].pic_rg[0];


        }

        img.setAttribute("id", count + "a" + count);


        img.style.width = "263px";
        img.style.marginTop = "50px"



        box1.appendChild(img);

        var p = document.createElement("p");




        var box2 = document.createElement("div");
        box2.style.width = "263px"

        // box2.style.height = "50px"
        p.innerHTML = data.Classic_Straps[j].name;
        p.style.padding = "12px";
        p.style.fontSize = "13px";
        p.style.marginLeft = "-10px"
        p.style.marginTop = "18px"
        box2.appendChild(p);
        box2.style.padding = "0px 15px";

        var boxstatus = document.createElement("div");
        boxstatus.setAttribute("class", "col-3");
        boxstatus.setAttribute("id", count + "status" + count);


        rowstatus.appendChild(boxstatus);
        let test = 0;
        for (var k = 0; k < data.Classic_Straps[j].color.length; k++) {

          var button = document.createElement("button")
          button.setAttribute("class", "btn btn-light btn-circle btn-md");
          button.setAttribute("onclick", "changecolor(this,event);");
          button.setAttribute("id", count)
          button.setAttribute("value", data.Classic_Straps[j].color[k])

          button.style.backgroundColor = data.Classic_Straps[j].code_color[k];
          box2.appendChild(button);
          //check new item
          if (test == 0) {
            if (button.getAttribute("value") == "Rose Gold") {
              if (data.Classic_Straps[j].statusrg == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.style.color = "white";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.Classic_Straps[j].statusrg == "สินค้าหมด") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "สินค้าหมด";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Silver") {
              if (data.Classic_Straps[j].statussv == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.Classic_Straps[j].statussv == "สินค้าหมด") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "สินค้าหมด";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Gold") {
              if (data.Classic_Straps[j].statusgo == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.Classic_Straps[j].statusgo == "สินค้าหมด") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "สินค้าหมด";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            test++
          }
        }
        boxstatus.style.marginTop = "22px"
        boxstatus.style.marginLeft= "17px"
        test = 0;



        row2.appendChild(box2);
        var p1 = document.createElement("p");
        p1.innerHTML = data.Classic_Straps[j].color[0];
        p1.setAttribute("id", count + "b" + count);

        row2.style.height = "100px";
        row2.style.width = "240px";
        row2.style.marginLeft = "1px";
        p1.style.fontSize = "13px";

        p1.style.marginTop = "10px";
        box2.appendChild(p1)



        var p3 = document.createElement("p");
        p3.innerHTML = "จาก ฿" + data.Classic_Straps[j].price[0] + " บาท";
        p3.style.fontSize = "16px";
        box2.appendChild(p3)
        p3.style.marginTop = "-11px"


      }
      
    }
}




}


function changecolor(obj,event) {
  event.stopPropagation();
  let requestURL = 'classic_strap_json.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();
  function dataReportStatus(data) {
    var id = obj.id;
    var value1 = obj.value;
    let box_status = document.getElementById(id + "status" + id);
    var changepic = document.getElementById(id + "a" + id);
    var changenamecolor = document.getElementById(id + "b" + id);
    console.log(data.Classic_Straps[id-1].no)   
    if (value1 == "Silver") {
      if (data.Classic_Straps[id - 1].statussv == "สินค้าหมด") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "สินค้าหมด";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.Classic_Straps[id - 1].statussv == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.Classic_Straps[id - 1].pic_sv[0] == " ") {
        changepic.src = data.Classic_Straps[id - 1].pic_sv[1];
        changenamecolor.innerHTML = value1;


      }
      else {

        changepic.src = data.Classic_Straps[id - 1].pic_sv[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Rose Gold") {

      if (data.Classic_Straps[id - 1].statusrg == "สินค้าหมด") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "สินค้าหมด";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.Classic_Straps[id - 1].statusrg == " ") {
        box_status.style.visibility = "hidden";

      }
      if(data.Classic_Straps[id - 1].No == 5){
        changepic.src = data.Classic_Straps[id - 1].pic_rg[1];
        changenamecolor.innerHTML = value1;
      }

      else if (data.Classic_Straps[id - 1].pic_rg[0] == " " || data.Classic_Straps[id - 1].pic_sv[0] == " ") {
        
        changepic.src = data.Classic_Straps[id - 1].pic_rg[0];
        changenamecolor.innerHTML = value1;

      }
      else {

        changepic.src = data.Classic_Straps[id - 1].pic_rg[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Gold") {
      if (data.Classic_Straps[id - 1].statusgo == "สินค้าหมด") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "สินค้าหมด";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.Classic_Straps[id - 1].statusgo == " ") {
        box_status.style.visibility = "hidden";

      }
      if(data.Classic_Straps[id - 1].No == 5){
        changepic.src = data.Classic_Straps[id - 1].pic_go[1];
        changenamecolor.innerHTML = value1;
      }
      else if (data.Classic_Straps[id - 1].pic_go[0] == " ") {
        changepic.src = data.Classic_Straps[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
      else {

        changepic.src = data.Classic_Straps[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
    }


  }
 
}

function push(obj) {

  let requestURL = 'classic_strap_json.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();


  function dataReportStatus(data) {

      jsarray = data.Classic_Straps[obj];
      sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
      location.href = "detialstrapC.html";
    }
  }

