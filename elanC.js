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
  var countpic = 0;
  var count = 0;
    function dataReportStatus(data) {
      var divall = document.getElementById("divall");
      for(var i=0; i < (data.elan.length / 4 - 1); i++){
          var row = document.createElement("div");
          row.setAttribute("class", "row");
          row.style.margin = "0px 0px 20px";
          divall.appendChild(row);
          for(var j=countpic; j<countpic+4; j++){
              count++;
              var col = document.createElement("div");
              col.setAttribute("type", "submit");
              col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.margin = "0px 10px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              pic.style.width = "100%";
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              col.appendChild(row1);
              row.appendChild(col);
  
  
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md colorbtn");
                button.setAttribute("onclick", "changecolor(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
  
            //   var rowcolor2 = document.createElement("div");
            //   rowcolor2.setAttribute("class", "row");
            //   rowcolor2.style.padding = "5px 10px";
            //   var boxcolor = document.createElement("div");
            //   boxcolor.innerHTML = data.iconic[j].color[0];
            //   boxcolor.style.letterSpacing = "0.15x";
            //   boxcolor.style.fontSize = "13px";
            //   col.appendChild(rowcolor2);
            //   rowcolor2.appendChild(boxcolor);
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
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
  
        var find = (data.elan.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var col = document.createElement("div");
          col.setAttribute("type", "submit")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "290px"
          }
          else if (find == 1) {
            colfinal.style.marginLeft = "410px"
          }
              // col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.width = "255px";
              col.style.margin = "0px 10px";
              col.style.padding = "0px 15px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              rowfinal1.appendChild(col);
              col.appendChild(row1);
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              
              pic.style.width = "100%";
              
              if(data.elan[j].status == "สินค้าหมด"){
                
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
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
  
            //   var rowcolor2 = document.createElement("div");
            //   rowcolor2.setAttribute("class", "row");
            //   rowcolor2.style.padding = "5px 10px";
            //   var boxcolor = document.createElement("div");
            //   boxcolor.innerHTML = data.iconic[j].color[0];
            //   boxcolor.style.letterSpacing = "0.15x";
            //   boxcolor.style.fontSize = "13px";
            //   col.appendChild(rowcolor2);
            //   rowcolor2.appendChild(boxcolor);
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
          }
          countpic += 4;
      }
  
        }
        function changecolor(obj) {
  
          let requestURL = 'collection.json';
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
            console.log(data.elan[id - 1].no)
            if (value1 == "Silver") {
              if (data.elan[id - 1].statussv == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statussv == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_sv[0] == " ") {
                changepic.src = data.elan[id - 1].pic_sv[1];
                changenamecolor.innerHTML = value1;
        
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_sv[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Rose Gold") {
              if (data.elan[id - 1].statusrg == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusrg == " ") {
                box_status.style.visibility = "hidden";
        
              }
        
              if (data.elan[id - 1].pic_rg[0] == " " || data.elan[id - 1].pic_sv[0] == " ") {
                if (data.elan[id - 1].no == "22") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "40") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "42") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "46") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "47") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "49") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "50") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else {
                  changepic.src = data.elan[id - 1].pic_rg[0];
                  changenamecolor.innerHTML = value1;
                }
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_rg[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Gold") {
              if (data.elan[id - 1].statusgo == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusgo == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_go[0] == " ") {
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
        
          }
        
        
        }
        function sortFucntion(value) {
          countpic = 0;
          count = 0;
          if (value == "Newest") {
            var myobj = document.getElementById("divall");
            while (myobj.hasChildNodes()) {
              myobj.removeChild(myobj.firstChild);
            }
            let requestURL = 'collection.json';
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
              if (request.readyState == 4 && request.status == 200) {
                dataReportStatus(JSON.parse(request.responseText));
              }
            };
            request.open("GET", requestURL, true);
            request.send();
        
            function dataReportStatus(data) {
              var sortt = data.elan;
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
      for(var i=0; i < (data.elan.length / 4 - 1); i++){
          var row = document.createElement("div");
          row.setAttribute("class", "row");
          row.style.margin = "0px 0px 20px";
          divall.appendChild(row);
          for(var j=countpic; j<countpic+4; j++){
              count++;
              var col = document.createElement("div");
              col.setAttribute("type", "submit");
              col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.margin = "0px 10px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              pic.style.width = "100%";
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              col.appendChild(row1);
              row.appendChild(col);
  
  
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor1(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
  
            //   var rowcolor2 = document.createElement("div");
            //   rowcolor2.setAttribute("class", "row");
            //   rowcolor2.style.padding = "5px 10px";
            //   var boxcolor = document.createElement("div");
            //   boxcolor.innerHTML = data.iconic[j].color[0];
            //   boxcolor.style.letterSpacing = "0.15x";
            //   boxcolor.style.fontSize = "13px";
            //   col.appendChild(rowcolor2);
            //   rowcolor2.appendChild(boxcolor);
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
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
  
        var find = (data.elan.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var col = document.createElement("div");
          col.setAttribute("type", "submit")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "290px"
          }
          else if (find == 1) {
            colfinal.style.marginLeft = "410px"
          }
              // col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.width = "255px";
              col.style.margin = "0px 10px";
              col.style.padding = "0px 15px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              rowfinal1.appendChild(col);
              col.appendChild(row1);
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              
              pic.style.width = "100%";
              
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor1(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
          }
          countpic += 4;
      }
  
            }
  
          }
          else if (value == "Highest price") {
            var myobj = document.getElementById("divall");
            while (myobj.hasChildNodes()) {
              myobj.removeChild(myobj.firstChild);
            }
            let requestURL = 'collection.json';
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
              if (request.readyState == 4 && request.status == 200) {
                dataReportStatus(JSON.parse(request.responseText));
              }
            };
            request.open("GET", requestURL, true);
            request.send();
        
            function dataReportStatus(data) {
              var sortt = data.elan;
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
      for(var i=0; i < (data.elan.length / 4 - 1); i++){
          var row = document.createElement("div");
          row.setAttribute("class", "row");
          row.style.margin = "0px 0px 20px";
          divall.appendChild(row);
          for(var j=countpic; j<countpic+4; j++){
              count++;
              var col = document.createElement("div");
              col.setAttribute("type", "submit");
              col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.margin = "0px 10px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              pic.style.width = "100%";
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              col.appendChild(row1);
              row.appendChild(col);
  
  
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor2(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
  
            //   var rowcolor2 = document.createElement("div");
            //   rowcolor2.setAttribute("class", "row");
            //   rowcolor2.style.padding = "5px 10px";
            //   var boxcolor = document.createElement("div");
            //   boxcolor.innerHTML = data.iconic[j].color[0];
            //   boxcolor.style.letterSpacing = "0.15x";
            //   boxcolor.style.fontSize = "13px";
            //   col.appendChild(rowcolor2);
            //   rowcolor2.appendChild(boxcolor);
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
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
  
        var find = (data.elan.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var col = document.createElement("div");
          col.setAttribute("type", "submit")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "290px"
          }
          else if (find == 1) {
            colfinal.style.marginLeft = "410px"
          }
              // col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.width = "255px";
              col.style.margin = "0px 10px";
              col.style.padding = "0px 15px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              rowfinal1.appendChild(col);
              col.appendChild(row1);
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              
              pic.style.width = "100%";
              
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor2(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
          }
          countpic += 4;
      }
  
            }
  
          }
          else if (value == "Lowest price") {
            var myobj = document.getElementById("divall");
            while (myobj.hasChildNodes()) {
              myobj.removeChild(myobj.firstChild);
            }
            let requestURL = 'collection.json';
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
              if (request.readyState == 4 && request.status == 200) {
                dataReportStatus(JSON.parse(request.responseText));
              }
            };
            request.open("GET", requestURL, true);
            request.send();
        
            function dataReportStatus(data) {
              var sortt = data.elan;
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
      for(var i=0; i < (data.elan.length / 4 - 1); i++){
          var row = document.createElement("div");
          row.setAttribute("class", "row");
          row.style.margin = "0px 0px 20px";
          divall.appendChild(row);
          for(var j=countpic; j<countpic+4; j++){
              count++;
              var col = document.createElement("div");
              col.setAttribute("type", "submit");
              col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.margin = "0px 10px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "85px";
              }
              pic.setAttribute("id", count + "a" + count);
              pic.style.width = "100%";
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              col.appendChild(row1);
              row.appendChild(col);
  
  
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor3(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
  
            //   var rowcolor2 = document.createElement("div");
            //   rowcolor2.setAttribute("class", "row");
            //   rowcolor2.style.padding = "5px 10px";
            //   var boxcolor = document.createElement("div");
            //   boxcolor.innerHTML = data.iconic[j].color[0];
            //   boxcolor.style.letterSpacing = "0.15x";
            //   boxcolor.style.fontSize = "13px";
            //   col.appendChild(rowcolor2);
            //   rowcolor2.appendChild(boxcolor);
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
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
  
        var find = (data.elan.length % 4);
        if (find == 0) {
          find = 4;
        }
        for (var j = countpic; j < countpic + find; j++) {
          count++;
          var col = document.createElement("div");
          col.setAttribute("type", "submit")
          if (find == 3) {
            colfinal.style.marginLeft = "150px"
          }
          else if (find == 2) {
            colfinal.style.marginLeft = "290px"
          }
          else if (find == 1) {
            colfinal.style.marginLeft = "410px"
          }
              // col.setAttribute("class", "col");
              col.setAttribute("id", "colitem");
              col.style.height = "420px";
              col.style.width = "255px";
              col.style.margin = "0px 10px";
              col.style.padding = "0px 15px";
              var row1 = document.createElement("div"); //rowpic
              row1.setAttribute("class", "row");
              row1.style.height = "240px";
  
              var boxpic = document.createElement("div");
              boxpic.setAttribute("class", "col");
              boxpic.style.backgroundColor = "rgb(244, 244, 244)";
  
              var pic = document.createElement("img");
              if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_sv[0];
      
              }
              else if (data.elan[j].pic_sv[0] != " " && data.elan[j].pic_go[0] != " " && data.elan[j].pic_rg[0] != " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
      
      
              else if (data.elan[j].pic_rg[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_go[0];
      
      
              }
              else if (data.elan[j].pic_go[0] == " " && data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
              }
              else if (data.elan[j].pic_go[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              else if (data.elan[j].pic_sv[0] == " ") {
                pic.src = data.elan[j].pic_rg[0];
      
      
              }
              if(data.elan[j].type == "Strap"){
                pic.style.marginTop = "70px";
              }
              else if(data.elan[j].type == "Bracelet"){
                pic.style.marginTop = "70px";
              }
              pic.setAttribute("id", count + "a" + count);
              rowfinal1.appendChild(col);
              col.appendChild(row1);
              row1.appendChild(boxpic);
              boxpic.appendChild(pic);
              
              pic.style.width = "100%";
              
              if(data.elan[j].status == "สินค้าหมด"){
                
                var rownew = document.createElement("div");
                rownew.setAttribute("class", "row");
                var box = document.createElement("div");
                rownew.style.padding = "5px 10px";
                box.style.width = "80px";
                box.style.color = "rgb(110, 110, 110)";
                box.style.fontSize = "13px";
                box.style.textAlign = "center";
                box.style.letterSpacing = "2.4px";
                box.style.backgroundColor = "rgb(244, 244, 244)";
                box.innerHTML = "สินค้าหมด";
                
                col.appendChild(rownew);
                rownew.appendChild(box);
              }
              var rowname = document.createElement("div");
              // rowname.style.padding = "0px 10px";
              var boxname = document.createElement("div");
              boxname.innerHTML = data.elan[j].name;
              boxname.style.letterSpacing = "2.4px";
              boxname.style.fontSize = "13px";
              boxname.style.padding = "5px 0px";
              col.appendChild(rowname);
              rowname.appendChild(boxname);
              var findpum = data.elan[j].color.length;
              for (var k = 0; k < findpum; k++) {
  
  
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-light btn-circle btn-md");
                button.setAttribute("onclick", "changecolor3(this);");
  
                button.setAttribute("id", count)
                button.setAttribute("value", data.elan[j].color[k])
  
  
                button.style.backgroundColor = data.elan[j].hexcolor[k];
                button.style.marginTop = "0px";
                rowname.appendChild(button);
              }
  
              var p1 = document.createElement("p");
              p1.innerHTML = data.elan[j].color[0];
              p1.setAttribute("id", count + "b" + count);
  
              p1.style.padding = "10px 0px";
              p1.style.fontSize = "13px";
              p1.style.letterSpacing = "0.15x";
              p1.style.margin = "0%";
              rowname.appendChild(p1)
  
              var boxprice = document.createElement("div");
              boxprice.innerHTML = "จาก ฿"+data.elan[j].price+" บาท";
              
              boxprice.style.fontSize = "15px";
              rowname.appendChild(boxprice);
  
          }
          countpic += 4;
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
  
          let requestURL = 'collection.json';
          let request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
              dataReportStatus(JSON.parse(request.responseText));
            }
          };
          request.open("GET", requestURL, true);
          request.send();
          function dataReportStatus(data) {
            var sortt = data.elan;
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
              if (data.elan[id - 1].statussv == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statussv == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_sv[0] == " ") {
                changepic.src = data.elan[id - 1].pic_sv[1];
                changenamecolor.innerHTML = value1;
        
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_sv[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Rose Gold") {
              if (data.elan[id - 1].statusrg == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusrg == " ") {
                box_status.style.visibility = "hidden";
        
              }
        
              if (data.elan[id - 1].pic_rg[0] == " " || data.elan[id - 1].pic_sv[0] == " ") {
                if (data.elan[id - 1].no == "22") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "40") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "42") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "46") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "47") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "49") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "50") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else {
                  changepic.src = data.elan[id - 1].pic_rg[0];
                  changenamecolor.innerHTML = value1;
                }
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_rg[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Gold") {
              if (data.elan[id - 1].statusgo == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusgo == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_go[0] == " ") {
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
        
          }
        }
        function changecolor2(obj) {
  
          let requestURL = 'collection.json';
          let request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
              dataReportStatus(JSON.parse(request.responseText));
            }
          };
          request.open("GET", requestURL, true);
          request.send();
          function dataReportStatus(data) {
            var sortt = data.elan;
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
              if (data.elan[id - 1].statussv == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statussv == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_sv[0] == " ") {
                changepic.src = data.elan[id - 1].pic_sv[1];
                changenamecolor.innerHTML = value1;
        
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_sv[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Rose Gold") {
              if (data.elan[id - 1].statusrg == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusrg == " ") {
                box_status.style.visibility = "hidden";
        
              }
        
              if (data.elan[id - 1].pic_rg[0] == " " || data.elan[id - 1].pic_sv[0] == " ") {
                if (data.elan[id - 1].no == "22") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "40") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "42") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "46") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "47") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "49") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "50") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else {
                  changepic.src = data.elan[id - 1].pic_rg[0];
                  changenamecolor.innerHTML = value1;
                }
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_rg[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Gold") {
              if (data.elan[id - 1].statusgo == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusgo == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_go[0] == " ") {
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
        
          }
        }
        function changecolor3(obj) {
  
          let requestURL = 'collection.json';
          let request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
              dataReportStatus(JSON.parse(request.responseText));
            }
          };
          request.open("GET", requestURL, true);
          request.send();
          function dataReportStatus(data) {
            var sortt = data.elan;
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
              if (data.elan[id - 1].statussv == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statussv == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_sv[0] == " ") {
                changepic.src = data.elan[id - 1].pic_sv[1];
                changenamecolor.innerHTML = value1;
        
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_sv[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Rose Gold") {
              if (data.elan[id - 1].statusrg == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusrg == " ") {
                box_status.style.visibility = "hidden";
        
              }
        
              if (data.elan[id - 1].pic_rg[0] == " " || data.elan[id - 1].pic_sv[0] == " ") {
                if (data.elan[id - 1].no == "22") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "40") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "42") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "46") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "47") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "49") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else if (data.elan[id - 1].no == "50") {
                  changepic.src = data.elan[id - 1].pic_rg[1];
                  changenamecolor.innerHTML = value1;
                }
                else {
                  changepic.src = data.elan[id - 1].pic_rg[0];
                  changenamecolor.innerHTML = value1;
                }
        
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_rg[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
            if (value1 == "Gold") {
              if (data.elan[id - 1].statusgo == "สินค้าหมด") {
                box_status.style.visibility = "visible";
                box_status.style.backgroundColor = "rgb(244, 244, 244)";
                box_status.style.color = "rgb(110, 110, 110)";
                box_status.innerHTML = "สินค้าหมด";
                box_status.style.fontSize = "80%";
                box_status.style.textAlign = "center";
                box_status.style.padding = "2px";
        
              }
              if (data.elan[id - 1].statusgo == " ") {
                box_status.style.visibility = "hidden";
        
              }
              if (data.elan[id - 1].pic_go[0] == " ") {
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
              else {
        
                changepic.src = data.elan[id - 1].pic_go[0];
                changenamecolor.innerHTML = value1;
              }
            }
        
        
          }
        }
        
          
        