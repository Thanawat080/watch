var status;



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
  status = "unsort";
  let requestURL = 'Watches.json';
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
    for (var i = 0; i < (data.watches.length / 4) - 1; i++) {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      row.style.padding = "10px 0px";
      divall.appendChild(row);

      for (var j = countpic; j < countpic + 4; j++) {
        count++;

        var box = document.createElement("div");
        box.setAttribute("type", "submit")
        box.setAttribute("class", "col")
        box.setAttribute("onclick", "push("+ j +");")

        box.setAttribute("id", "box5")
        box.style.height = "419px";

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
        if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
          img.src = data.watches[j].pic_sv[0];

        }

        else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
          img.src = data.watches[j].pic_go[0];


        }
        else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
          if (data.watches[j].no == "22") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "40") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "42") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "46") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "47") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "49") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "50") {

            img.src = data.watches[j].pic_rg[1];
          }
          else {
            img.src = data.watches[j].pic_rg[0];
          }


        }
        else if (data.watches[j].pic_go[0] == " ") {
          img.src = data.watches[j].pic_rg[0];


        }
        else if (data.watches[j].pic_sv[0] == " ") {
          img.src = data.watches[j].pic_rg[0];


        }
        img.setAttribute("id", count + "a" + count);


        img.style.width = "100%";



        box1.appendChild(img);

        var p = document.createElement("p");




        var box2 = document.createElement("div");
        box2.setAttribute("class", "col");

        p.innerHTML = data.watches[j].name;
        p.style.padding = "12px 0px";
        p.style.fontSize = "13px";

        box2.appendChild(p);

        var boxstatus = document.createElement("div");
        boxstatus.setAttribute("class", "col-3");
        boxstatus.setAttribute("id", count + "status" + count);


        rowstatus.appendChild(boxstatus);
        let test = 0;
        var findpum = data.watches[j].color.length;
        if (data.watches[j].no == "30") {

        }
        for (var k = 0; k < findpum; k++) {


          var button = document.createElement("button")
          button.setAttribute("class", "btn btn-light btn-circle btn-md");
          button.setAttribute("onclick", "changecolor(this, event);");
          

          button.setAttribute("id", count)
          button.setAttribute("value", data.watches[j].color[k])


          button.style.backgroundColor = data.watches[j].code_color[k];
          box2.appendChild(button);
          //check new item
          if (test == 0) {
            if (button.getAttribute("value") == "Rose Gold") {
              if (data.watches[j].statusrg == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.style.color = "white";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.watches[j].statusrg == "???????????????????????????") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "???????????????????????????";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Silver") {
              if (data.watches[j].statussv == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                boxstatus.style.color = "white";
                test++;
              }
              if (data.watches[j].statussv == "???????????????????????????") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "???????????????????????????";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Gold") {
              if (data.watches[j].statusgo == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                boxstatus.style.color = "white";
                test++;
              }
              if (data.watches[j].statusgo == "???????????????????????????") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "???????????????????????????";
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
        p1.innerHTML = data.watches[j].color[0];
        p1.setAttribute("id", count + "b" + count);

        p1.style.padding = "10px 0px";
        p1.style.fontSize = "13px";
        p1.style.margin = "0%";
        box2.appendChild(p1)



        var p3 = document.createElement("p");
        p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
        p3.style.fontSize = "16px";
        box2.appendChild(p3)



      }


      countpic += 4;

    }
    for (var h = 0; h < 1; h++) {


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

      var find = (data.watches.length % 4);
      if (find == 0) {
        find = 4;
      }
      for (var j = countpic; j < countpic + find; j++) {
        count++;
        var box = document.createElement("div");
        box.setAttribute("type", "submit")
        box.setAttribute("onclick", "push("+j+");")
        box.setAttribute("id", "box5")
        if (find == 3) {
          colfinal.style.marginLeft = "150px"
        }
        else if (find == 2) {
          colfinal.style.marginLeft = "275px"
        }
        else if (find == 1) {
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
        if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
          img.src = data.watches[j].pic_sv[0];

        }

        else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
          img.src = data.watches[j].pic_go[0];


        }
        else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
          if (data.watches[j].no == "22") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "40") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "42") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "46") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "47") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "49") {

            img.src = data.watches[j].pic_rg[1];
          }
          else if (data.watches[j].no == "50") {

            img.src = data.watches[j].pic_rg[1];
          }
          else {
            img.src = data.watches[j].pic_rg[0];
          }


        }
        else if (data.watches[j].pic_go[0] == " ") {
          img.src = data.watches[j].pic_rg[0];


        }
        else if (data.watches[j].pic_sv[0] == " ") {
          img.src = data.watches[j].pic_rg[0];


        }
        img.setAttribute("id", count + "a" + count);


        img.style.width = "263px";




        box1.appendChild(img);

        var p = document.createElement("p");




        var box2 = document.createElement("div");
        box2.style.width = "263px"

        // box2.style.height = "50px"
        p.innerHTML = data.watches[j].name;
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
        for (var k = 0; k < data.watches[j].color.length; k++) {

          var button = document.createElement("button")
          button.setAttribute("class", "btn btn-light btn-circle btn-md");
          button.setAttribute("onclick", "changecolor(this);");
          button.setAttribute("id", count)
          button.setAttribute("value", data.watches[j].color[k])

          button.style.backgroundColor = data.watches[j].code_color[k];
          box2.appendChild(button);
          //check new item
          if (test == 0) {
            if (button.getAttribute("value") == "Rose Gold") {
              if (data.watches[j].statusrg == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.style.color = "white";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.watches[j].statusrg == "???????????????????????????") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "???????????????????????????";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Silver") {
              if (data.watches[j].statussv == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.watches[j].statussv == "???????????????????????????") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "???????????????????????????";
                boxstatus.style.fontSize = "80%";
                boxstatus.style.textAlign = "center";
                boxstatus.style.padding = "2px";
                test++;
              }
            }
            if (button.getAttribute("value") == "Gold") {
              if (data.watches[j].statusgo == "NEW") {
                boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                boxstatus.innerHTML = "NEW";
                test++;
              }
              if (data.watches[j].statusgo == "???????????????????????????") {
                boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                boxstatus.style.color = "rgb(110, 110, 110)";
                boxstatus.innerHTML = "???????????????????????????";
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
        boxstatus.style.marginLeft = "17px"
        test = 0;



        row2.appendChild(box2);
        var p1 = document.createElement("p");
        p1.innerHTML = data.watches[j].color[0];
        p1.setAttribute("id", count + "b" + count);

        row2.style.height = "100px";
        row2.style.width = "240px";
        row2.style.marginLeft = "1px";
        p1.style.fontSize = "13px";

        p1.style.marginTop = "10px";
        box2.appendChild(p1)



        var p3 = document.createElement("p");
        p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
        p3.style.fontSize = "16px";
        box2.appendChild(p3)
        p3.style.marginTop = "-11px"


      }

    }
  }




}


function changecolor(obj, event) {
  event.stopPropagation();
  let requestURL = 'Watches.json';
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
    console.log(data.watches[id - 1].no)
    if (value1 == "Silver") {
      if (data.watches[id - 1].statussv == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statussv == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_sv[0] == " ") {
        changepic.src = data.watches[id - 1].pic_sv[1];
        changenamecolor.innerHTML = value1;


      }
      else {

        changepic.src = data.watches[id - 1].pic_sv[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Rose Gold") {
      if (data.watches[id - 1].statusrg == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusrg == " ") {
        box_status.style.visibility = "hidden";

      }

      if (data.watches[id - 1].pic_rg[0] == " " || data.watches[id - 1].pic_sv[0] == " ") {
        if (data.watches[id - 1].no == "22") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "40") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "42") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "46") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "47") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "49") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "50") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else {
          changepic.src = data.watches[id - 1].pic_rg[0];
          changenamecolor.innerHTML = value1;
        }

      }
      else {

        changepic.src = data.watches[id - 1].pic_rg[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Gold") {
      if (data.watches[id - 1].statusgo == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusgo == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_go[0] == " ") {
        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
      else {

        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
    }


  }


}

function sortFucntion(value) {
  countpic = 0;
  count = 0;
  if (value == "Newest") {
    status = "Newest";
    var myobj = document.getElementById("divall");
    while (myobj.hasChildNodes()) {
      myobj.removeChild(myobj.firstChild);
    }
    let requestURL = 'Watches.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
      }
    };
    request.open("GET", requestURL, true);
    request.send();

    function dataReportStatus(data) {
      var sortt = data.watches;
      sortt.sort(function (a, b) {
        var keyA = new Date(a.countnew),
          keyB = new Date(b.countnew);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      console.log(sortt);
      var divall = document.getElementById("divall");
      for (var i = 0; i < (data.watches.length / 4) - 1; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.padding = "10px 0px";
        divall.appendChild(row);

        for (var j = countpic; j < countpic + 4; j++) {
          count++;
          var box = document.createElement("div");
          box.setAttribute("type", "submit")
          box.setAttribute("class", "col")
          box.setAttribute("onclick", "push("+j+");")
          box.setAttribute("id", "box5")
          box.style.height = "419px";

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
          if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_sv[0];

          }

          else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_go[0];


          }
          else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
            if (data.watches[j].no == "22") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "40") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "42") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "46") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "47") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "49") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "50") {

              img.src = data.watches[j].pic_rg[1];
            }
            else {
              img.src = data.watches[j].pic_rg[0];
            }


          }
          else if (data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          else if (data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          img.setAttribute("id", count + "a" + count);


          img.style.width = "100%";



          box1.appendChild(img);

          var p = document.createElement("p");




          var box2 = document.createElement("div");
          box2.setAttribute("class", "col");

          p.innerHTML = data.watches[j].name;
          p.style.padding = "12px 0px";
          p.style.fontSize = "13px";

          box2.appendChild(p);

          var boxstatus = document.createElement("div");
          boxstatus.setAttribute("class", "col-3");
          boxstatus.setAttribute("id", count + "status" + count);


          rowstatus.appendChild(boxstatus);
          let test = 0;
          var findpum = data.watches[j].color.length;
          if (data.watches[j].no == "30") {

          }
          for (var k = 0; k < findpum; k++) {


            var button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btn-circle btn-md");
            button.setAttribute("onclick", "changecolor1(this);");

            button.setAttribute("id", count)
            button.setAttribute("value", data.watches[j].color[k])


            button.style.backgroundColor = data.watches[j].code_color[k];
            box2.appendChild(button);
            //check new item
            if (test == 0) {
              if (button.getAttribute("value") == "Rose Gold") {
                if (data.watches[j].statusrg == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.style.color = "white";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusrg == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Silver") {
                if (data.watches[j].statussv == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  boxstatus.style.color = "white";
                  test++;
                }
                if (data.watches[j].statussv == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Gold") {
                if (data.watches[j].statusgo == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  boxstatus.style.color = "white";
                  test++;
                }
                if (data.watches[j].statusgo == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
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
          p1.innerHTML = data.watches[j].color[0];
          p1.setAttribute("id", count + "b" + count);

          p1.style.padding = "10px 0px";
          p1.style.fontSize = "13px";
          p1.style.margin = "0%";
          box2.appendChild(p1)



          var p3 = document.createElement("p");
          p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
          p3.style.fontSize = "16px";
          box2.appendChild(p3)



        }


        countpic += 4;

      }
      for (var h = 0; h < 1; h++) {


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

        var find = (data.watches.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var box = document.createElement("div");
          box.setAttribute("type", "submit")
          box.setAttribute("onclick", "push("+j+");")
          box.setAttribute("id", "box5")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "275px"
          }
          else if (find == 1) {
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
          if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_sv[0];

          }

          else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_go[0];


          }
          else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
            if (data.watches[j].no == "22") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "40") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "42") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "46") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "47") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "49") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "50") {

              img.src = data.watches[j].pic_rg[1];
            }
            else {
              img.src = data.watches[j].pic_rg[0];
            }


          }
          else if (data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          else if (data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          img.setAttribute("id", count + "a" + count);


          img.style.width = "263px";




          box1.appendChild(img);

          var p = document.createElement("p");




          var box2 = document.createElement("div");
          box2.style.width = "263px"

          // box2.style.height = "50px"
          p.innerHTML = data.watches[j].name;
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
          for (var k = 0; k < data.watches[j].color.length; k++) {

            var button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btn-circle btn-md");
            button.setAttribute("onclick", "changecolor1(this);");
            button.setAttribute("id", count)
            button.setAttribute("value", data.watches[j].color[k])

            button.style.backgroundColor = data.watches[j].code_color[k];
            box2.appendChild(button);
            //check new item
            if (test == 0) {
              if (button.getAttribute("value") == "Rose Gold") {
                if (data.watches[j].statusrg == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.style.color = "white";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusrg == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Silver") {
                if (data.watches[j].statussv == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statussv == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Gold") {
                if (data.watches[j].statusgo == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusgo == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
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
          boxstatus.style.marginLeft = "17px"
          test = 0;



          row2.appendChild(box2);
          var p1 = document.createElement("p");
          p1.innerHTML = data.watches[j].color[0];
          p1.setAttribute("id", count + "b" + count);

          row2.style.height = "100px";
          row2.style.width = "240px";
          row2.style.marginLeft = "1px";
          p1.style.fontSize = "13px";

          p1.style.marginTop = "10px";
          box2.appendChild(p1)



          var p3 = document.createElement("p");
          p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
          p3.style.fontSize = "16px";
          box2.appendChild(p3)
          p3.style.marginTop = "-11px"


        }

      }
    }




  }
  else if (value == "Highest price") {
    status = "Highest price";
    var myobj = document.getElementById("divall");
    while (myobj.hasChildNodes()) {
      myobj.removeChild(myobj.firstChild);
    }
    let requestURL = 'Watches.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
      }
    };
    request.open("GET", requestURL, true);
    request.send();

    function dataReportStatus(data) {
      var sortt = data.watches;
      sortt.sort(function (a, b) {
        var keyA = new Date(a.pricesort),
          keyB = new Date(b.pricesort);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      console.log(sortt);
      var divall = document.getElementById("divall");
      for (var i = 0; i < (data.watches.length / 4) - 1; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.padding = "10px 0px";
        divall.appendChild(row);

        for (var j = countpic; j < countpic + 4; j++) {
          count++;
          var box = document.createElement("div");
          box.setAttribute("type", "submit")
          box.setAttribute("class", "col")
          box.setAttribute("onclick", "push("+j+");")
          box.setAttribute("id", "box5")
          box.style.height = "419px";

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
          if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_sv[0];

          }

          else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_go[0];


          }
          else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
            if (data.watches[j].no == "22") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "40") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "42") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "46") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "47") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "49") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "50") {

              img.src = data.watches[j].pic_rg[1];
            }
            else {
              img.src = data.watches[j].pic_rg[0];
            }


          }
          else if (data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          else if (data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          img.setAttribute("id", count + "a" + count);


          img.style.width = "100%";



          box1.appendChild(img);

          var p = document.createElement("p");




          var box2 = document.createElement("div");
          box2.setAttribute("class", "col");

          p.innerHTML = data.watches[j].name;
          p.style.padding = "12px 0px";
          p.style.fontSize = "13px";

          box2.appendChild(p);

          var boxstatus = document.createElement("div");
          boxstatus.setAttribute("class", "col-3");
          boxstatus.setAttribute("id", count + "status" + count);


          rowstatus.appendChild(boxstatus);
          let test = 0;
          var findpum = data.watches[j].color.length;
          if (data.watches[j].no == "30") {

          }
          for (var k = 0; k < findpum; k++) {


            var button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btn-circle btn-md");
            button.setAttribute("onclick", "changecolor2(this);");

            button.setAttribute("id", count)
            button.setAttribute("value", data.watches[j].color[k])


            button.style.backgroundColor = data.watches[j].code_color[k];
            box2.appendChild(button);
            //check new item
            if (test == 0) {
              if (button.getAttribute("value") == "Rose Gold") {
                if (data.watches[j].statusrg == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.style.color = "white";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusrg == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Silver") {
                if (data.watches[j].statussv == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  boxstatus.style.color = "white";
                  test++;
                }
                if (data.watches[j].statussv == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Gold") {
                if (data.watches[j].statusgo == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  boxstatus.style.color = "white";
                  test++;
                }
                if (data.watches[j].statusgo == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
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
          p1.innerHTML = data.watches[j].color[0];
          p1.setAttribute("id", count + "b" + count);

          p1.style.padding = "10px 0px";
          p1.style.fontSize = "13px";
          p1.style.margin = "0%";
          box2.appendChild(p1)



          var p3 = document.createElement("p");
          p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
          p3.style.fontSize = "16px";
          box2.appendChild(p3)



        }


        countpic += 4;

      }
      for (var h = 0; h < 1; h++) {


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

        var find = (data.watches.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var box = document.createElement("div");
          box.setAttribute("type", "submit")
          box.setAttribute("onclick", "push("+j+");")
          box.setAttribute("id", "box5")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "275px"
          }
          else if (find == 1) {
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
          if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_sv[0];

          }

          else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_go[0];


          }
          else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
            if (data.watches[j].no == "22") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "40") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "42") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "46") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "47") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "49") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "50") {

              img.src = data.watches[j].pic_rg[1];
            }
            else {
              img.src = data.watches[j].pic_rg[0];
            }


          }
          else if (data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          else if (data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          img.setAttribute("id", count + "a" + count);


          img.style.width = "263px";




          box1.appendChild(img);

          var p = document.createElement("p");




          var box2 = document.createElement("div");
          box2.style.width = "263px"

          // box2.style.height = "50px"
          p.innerHTML = data.watches[j].name;
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
          for (var k = 0; k < data.watches[j].color.length; k++) {

            var button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btn-circle btn-md");
            button.setAttribute("onclick", "changecolor2(this);");
            button.setAttribute("id", count)
            button.setAttribute("value", data.watches[j].color[k])

            button.style.backgroundColor = data.watches[j].code_color[k];
            box2.appendChild(button);
            //check new item
            if (test == 0) {
              if (button.getAttribute("value") == "Rose Gold") {
                if (data.watches[j].statusrg == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.style.color = "white";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusrg == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Silver") {
                if (data.watches[j].statussv == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statussv == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Gold") {
                if (data.watches[j].statusgo == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusgo == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
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
          boxstatus.style.marginLeft = "17px"
          test = 0;



          row2.appendChild(box2);
          var p1 = document.createElement("p");
          p1.innerHTML = data.watches[j].color[0];
          p1.setAttribute("id", count + "b" + count);

          row2.style.height = "100px";
          row2.style.width = "240px";
          row2.style.marginLeft = "1px";
          p1.style.fontSize = "13px";

          p1.style.marginTop = "10px";
          box2.appendChild(p1)



          var p3 = document.createElement("p");
          p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
          p3.style.fontSize = "16px";
          box2.appendChild(p3)
          p3.style.marginTop = "-11px"


        }

      }
    }




  }
  else if (value == "Lowest price") {
    status = "Lowest price";
    var myobj = document.getElementById("divall");
    while (myobj.hasChildNodes()) {
      myobj.removeChild(myobj.firstChild);
    }
    let requestURL = 'Watches.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
      }
    };
    request.open("GET", requestURL, true);
    request.send();

    function dataReportStatus(data) {
      var sortt = data.watches;
      sortt.sort(function (a, b) {
        var keyA = new Date(a.pricesort),
          keyB = new Date(b.pricesort);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      console.log(sortt);
      var divall = document.getElementById("divall");
      for (var i = 0; i < (data.watches.length / 4) - 1; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.padding = "10px 0px";
        divall.appendChild(row);

        for (var j = countpic; j < countpic + 4; j++) {
          count++;
          var box = document.createElement("div");
          box.setAttribute("type", "submit")
          box.setAttribute("class", "col")
          box.setAttribute("onclick", "push("+j+");")
          box.setAttribute("id", "box5")
          box.style.height = "419px";

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
          if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_sv[0];

          }

          else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_go[0];


          }
          else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
            if (data.watches[j].no == "22") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "40") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "42") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "46") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "47") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "49") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "50") {

              img.src = data.watches[j].pic_rg[1];
            }
            else {
              img.src = data.watches[j].pic_rg[0];
            }


          }
          else if (data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          else if (data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          img.setAttribute("id", count + "a" + count);


          img.style.width = "100%";



          box1.appendChild(img);

          var p = document.createElement("p");




          var box2 = document.createElement("div");
          box2.setAttribute("class", "col");

          p.innerHTML = data.watches[j].name;
          p.style.padding = "12px 0px";
          p.style.fontSize = "13px";

          box2.appendChild(p);

          var boxstatus = document.createElement("div");
          boxstatus.setAttribute("class", "col-3");
          boxstatus.setAttribute("id", count + "status" + count);


          rowstatus.appendChild(boxstatus);
          let test = 0;
          var findpum = data.watches[j].color.length;
          if (data.watches[j].no == "30") {

          }
          for (var k = 0; k < findpum; k++) {


            var button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btn-circle btn-md");
            button.setAttribute("onclick", "changecolor3(this);");

            button.setAttribute("id", count)
            button.setAttribute("value", data.watches[j].color[k])


            button.style.backgroundColor = data.watches[j].code_color[k];
            box2.appendChild(button);
            //check new item
            if (test == 0) {
              if (button.getAttribute("value") == "Rose Gold") {
                if (data.watches[j].statusrg == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.style.color = "white";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusrg == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Silver") {
                if (data.watches[j].statussv == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  boxstatus.style.color = "white";
                  test++;
                }
                if (data.watches[j].statussv == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Gold") {
                if (data.watches[j].statusgo == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  boxstatus.style.color = "white";
                  test++;
                }
                if (data.watches[j].statusgo == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
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
          p1.innerHTML = data.watches[j].color[0];
          p1.setAttribute("id", count + "b" + count);

          p1.style.padding = "10px 0px";
          p1.style.fontSize = "13px";
          p1.style.margin = "0%";
          box2.appendChild(p1)



          var p3 = document.createElement("p");
          p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
          p3.style.fontSize = "16px";
          box2.appendChild(p3)



        }


        countpic += 4;

      }
      for (var h = 0; h < 1; h++) {


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

        var find = (data.watches.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var box = document.createElement("div");
          box.setAttribute("type", "submit")
          box.setAttribute("onclick", "push("+j+");")
          box.setAttribute("id", "box5")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "275px"
          }
          else if (find == 1) {
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
          if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_sv[0];

          }

          else if (data.watches[j].pic_rg[0] == " " && data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_go[0];


          }
          else if (data.watches[j].pic_go[0] == " " && data.watches[j].pic_sv[0] == " ") {
            if (data.watches[j].no == "22") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "40") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "42") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "46") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "47") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "49") {

              img.src = data.watches[j].pic_rg[1];
            }
            else if (data.watches[j].no == "50") {

              img.src = data.watches[j].pic_rg[1];
            }
            else {
              img.src = data.watches[j].pic_rg[0];
            }


          }
          else if (data.watches[j].pic_go[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          else if (data.watches[j].pic_sv[0] == " ") {
            img.src = data.watches[j].pic_rg[0];


          }
          img.setAttribute("id", count + "a" + count);


          img.style.width = "263px";




          box1.appendChild(img);

          var p = document.createElement("p");




          var box2 = document.createElement("div");
          box2.style.width = "263px"

          // box2.style.height = "50px"
          p.innerHTML = data.watches[j].name;
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
          for (var k = 0; k < data.watches[j].color.length; k++) {

            var button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btn-circle btn-md");
            button.setAttribute("onclick", "changecolor3(this);");
            button.setAttribute("id", count)
            button.setAttribute("value", data.watches[j].color[k])

            button.style.backgroundColor = data.watches[j].code_color[k];
            box2.appendChild(button);
            //check new item
            if (test == 0) {
              if (button.getAttribute("value") == "Rose Gold") {
                if (data.watches[j].statusrg == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.style.color = "white";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusrg == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Silver") {
                if (data.watches[j].statussv == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statussv == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
                  boxstatus.style.fontSize = "80%";
                  boxstatus.style.textAlign = "center";
                  boxstatus.style.padding = "2px";
                  test++;
                }
              }
              if (button.getAttribute("value") == "Gold") {
                if (data.watches[j].statusgo == "NEW") {
                  boxstatus.style.backgroundColor = "rgb(205, 188, 122)";
                  boxstatus.innerHTML = "NEW";
                  test++;
                }
                if (data.watches[j].statusgo == "???????????????????????????") {
                  boxstatus.style.backgroundColor = "rgb(244, 244, 244)";
                  boxstatus.style.color = "rgb(110, 110, 110)";
                  boxstatus.innerHTML = "???????????????????????????";
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
          boxstatus.style.marginLeft = "17px"
          test = 0;



          row2.appendChild(box2);
          var p1 = document.createElement("p");
          p1.innerHTML = data.watches[j].color[0];
          p1.setAttribute("id", count + "b" + count);

          row2.style.height = "100px";
          row2.style.width = "240px";
          row2.style.marginLeft = "1px";
          p1.style.fontSize = "13px";

          p1.style.marginTop = "10px";
          box2.appendChild(p1)



          var p3 = document.createElement("p");
          p3.innerHTML = "????????? ???" + data.watches[j].price[0] + " ?????????";
          p3.style.fontSize = "16px";
          box2.appendChild(p3)
          p3.style.marginTop = "-11px"


        }

      }
    }




  }



  else {
    var myobj = document.getElementById("divall");
    while (myobj.hasChildNodes()) {
      myobj.removeChild(myobj.firstChild);
    }
    myFunction();
  }

}

function changecolor1(obj) {

  let requestURL = 'Watches.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();
  function dataReportStatus(data) {
    var sortt = data.watches;
    sortt.sort(function (a, b) {
      var keyA = new Date(a.countnew),
        keyB = new Date(b.countnew);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    var id = obj.id;
    var value1 = obj.value;
    let box_status = document.getElementById(id + "status" + id);
    var changepic = document.getElementById(id + "a" + id);
    var changenamecolor = document.getElementById(id + "b" + id);
    console.log(box_status);
    if (value1 == "Silver") {
      if (data.watches[id - 1].statussv == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statussv == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_sv[0] == " ") {
        changepic.src = data.watches[id - 1].pic_sv[1];
        changenamecolor.innerHTML = value1;


      }
      else {

        changepic.src = data.watches[id - 1].pic_sv[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Rose Gold") {
      if (data.watches[id - 1].statusrg == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusrg == " ") {
        box_status.style.visibility = "hidden";

      }

      if (data.watches[id - 1].pic_rg[0] == " " || data.watches[id - 1].pic_sv[0] == " ") {
        if (data.watches[id - 1].no == "19") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "37") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "39") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "43") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "44") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "46") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "47") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else {
          changepic.src = data.watches[id - 1].pic_rg[0];
          changenamecolor.innerHTML = value1;
        }

      }
      else {

        changepic.src = data.watches[id - 1].pic_rg[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Gold") {
      if (data.watches[id - 1].statusgo == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusgo == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_go[0] == " ") {
        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
      else {

        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
    }


  }
}

function changecolor2(obj) {

  let requestURL = 'Watches.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();
  function dataReportStatus(data) {
    var sortt = data.watches;
    sortt.sort(function (a, b) {
      var keyA = new Date(a.pricesort),
        keyB = new Date(b.pricesort);
      // Compare the 2 dates
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    var id = obj.id;
    var value1 = obj.value;
    let box_status = document.getElementById(id + "status" + id);
    var changepic = document.getElementById(id + "a" + id);
    var changenamecolor = document.getElementById(id + "b" + id);
    console.log(box_status);
    if (value1 == "Silver") {
      if (data.watches[id - 1].statussv == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statussv == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_sv[0] == " ") {
        changepic.src = data.watches[id - 1].pic_sv[1];
        changenamecolor.innerHTML = value1;


      }
      else {

        changepic.src = data.watches[id - 1].pic_sv[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Rose Gold") {
      if (data.watches[id - 1].statusrg == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusrg == " ") {
        box_status.style.visibility = "hidden";

      }

      if (data.watches[id - 1].pic_rg[0] == " " || data.watches[id - 1].pic_sv[0] == " ") {
        if (data.watches[id - 1].no == "19") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "37") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "39") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "43") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "44") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "46") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "47") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else {
          changepic.src = data.watches[id - 1].pic_rg[0];
          changenamecolor.innerHTML = value1;
        }

      }
      else {

        changepic.src = data.watches[id - 1].pic_rg[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Gold") {
      if (data.watches[id - 1].statusgo == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusgo == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_go[0] == " ") {
        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
      else {

        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
    }


  }
}

function changecolor3(obj) {

  let requestURL = 'Watches.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();
  function dataReportStatus(data) {
    var sortt = data.watches;
    sortt.sort(function (a, b) {
      var keyA = new Date(a.pricesort),
        keyB = new Date(b.pricesort);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    var id = obj.id;
    var value1 = obj.value;
    let box_status = document.getElementById(id + "status" + id);
    var changepic = document.getElementById(id + "a" + id);
    var changenamecolor = document.getElementById(id + "b" + id);
    console.log(box_status);
    if (value1 == "Silver") {
      if (data.watches[id - 1].statussv == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statussv == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_sv[0] == " ") {
        changepic.src = data.watches[id - 1].pic_sv[1];
        changenamecolor.innerHTML = value1;


      }
      else {

        changepic.src = data.watches[id - 1].pic_sv[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Rose Gold") {
      if (data.watches[id - 1].statusrg == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusrg == " ") {
        box_status.style.visibility = "hidden";

      }

      if (data.watches[id - 1].pic_rg[0] == " " || data.watches[id - 1].pic_sv[0] == " ") {
        if (data.watches[id - 1].no == "19") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "37") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "39") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "43") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "44") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "46") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else if (data.watches[id - 1].no == "47") {
          changepic.src = data.watches[id - 1].pic_rg[1];
          changenamecolor.innerHTML = value1;
        }
        else {
          changepic.src = data.watches[id - 1].pic_rg[0];
          changenamecolor.innerHTML = value1;
        }

      }
      else {

        changepic.src = data.watches[id - 1].pic_rg[0];
        changenamecolor.innerHTML = value1;
      }
    }

    if (value1 == "Gold") {
      if (data.watches[id - 1].statusgo == "???????????????????????????") {
        box_status.style.visibility = "visible";
        box_status.style.backgroundColor = "rgb(244, 244, 244)";
        box_status.style.color = "rgb(110, 110, 110)";
        box_status.innerHTML = "???????????????????????????";
        box_status.style.fontSize = "80%";
        box_status.style.textAlign = "center";
        box_status.style.padding = "2px";

      }
      if (data.watches[id - 1].statusgo == " ") {
        box_status.style.visibility = "hidden";

      }
      if (data.watches[id - 1].pic_go[0] == " ") {
        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
      else {

        changepic.src = data.watches[id - 1].pic_go[0];
        changenamecolor.innerHTML = value1;
      }
    }


  }
}

//function to create new page
function push(obj) {

  let requestURL = 'Watches.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();


  function dataReportStatus(data) {
    if (status == "unsort") {
      jsarray = data.watches[obj];
      sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
      location.href = "detialwatch.html";
    }
    else if (status == "Newest") {
      var sortt = data.watches;
      sortt.sort(function (a, b) {
        var keyA = new Date(a.countnew),
          keyB = new Date(b.countnew);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        
      });
      console.log(status)
      jsarray = data.watches[obj];
      sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
      location.href = "detialwatch.html";

    }
    else if (status == "Highest price") {
      var sortt = data.watches;
      sortt.sort(function (a, b) {
        var keyA = new Date(a.pricesort),
          keyB = new Date(b.pricesort);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      jsarray = data.watches[obj];
      sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
      location.href = "detialwatch.html";
    }
    else if (status == "Lowest price") {
      var sortt = data.watches;
      sortt.sort(function (a, b) {
        var keyA = new Date(a.pricesort),
          keyB = new Date(b.pricesort);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      jsarray = data.watches[obj];
      sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
      location.href = "detialwatch.html";
    }
  }





}











