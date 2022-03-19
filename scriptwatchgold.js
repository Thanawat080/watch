var picslid = 0;
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

  var count = 0
  data = JSON.parse(sessionStorage.getItem("jsArray"));
  
  console.log(data);
  console.log("z");
  var div = document.getElementById("all");
  var rowup = document.createElement("div")
  rowup.setAttribute("class", "row")
  div.appendChild(rowup)

  var divupa = document.createElement("div")
  divupa.setAttribute("class", "col")
  divupa.style.width = "500px"
  divupa.style.height = "404px"



  var divupb = document.createElement("div")
  divupb.setAttribute("class", "col")

  rowup.appendChild(divupa)
  rowup.appendChild(divupb)

  var boxinupa = document.createElement("div")

  boxinupa.style.width = "400px"
  boxinupa.style.height = "400px"

  var rowa = document.createElement("div")
  rowa.setAttribute("class", "row")
  divupa.appendChild(rowa)

  var arr1 = document.createElement("div")
  arr1.style.marginTop
  rowa.appendChild(arr1)
  rowa.style.marginLeft = "50px"
  rowa.style.marginTop = "-20px"
  var arr2 = document.createElement("div")

  rowa.appendChild(arr2)

  rowa.appendChild(arr1)
  rowa.appendChild(boxinupa)
  rowa.appendChild(arr2)
  //  บนฝั่งซ้าย
  // ปุ่มกดเปลี่ยนรูปด้านleft

  var a1 = document.createElement("a")
  a1.innerHTML = '&#10094;'
  a1.setAttribute("type", "submit")
  a1.setAttribute("onclick", "back()")
  a1.style.fontSize = "30px"
  a1.style.marginTop = "180px"
  // a1.style.marginLeft = "60px"

  arr1.appendChild(a1)
  // ************************************************************************************


  // ปุ่มกดเปลี่ยนรูปด้านขวา

  var a2 = document.createElement("a")
  a2.innerHTML = '&#10095;'
  a2.setAttribute("type", "submit")
  a2.setAttribute("onclick", "forward();")
  a2.style.fontSize = "30px"
  a2.style.marginTop = "180px"

  // a2.style.marginLeft = "500px"
  arr2.appendChild(a2)

  // ************************************************************************************
  // ใส่รูป *******************************************************************************
  if(data.pic_sv[0] != " "){
    for (let i = 0; i < data.details_watches.de_pic_sv[0].length; i++) {
      if (i == 0) {
        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "20px"
        img.style.display = "block";
        img.setAttribute("id", "pic" + i)
        // img.style.marginLeft = "92px"
        if (data.pic_rg[0] != " ") {
          img.src = data.pic_rg[0];
        }
  
        else if (data.pic_sv[0] != " ") {
          img.src = data.pic_sv[0];
        }
        else if (data.pic_go[0] != " ") {
          img.src = data.pic_ro[0];
        }
      }
      else{
        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "20px"
        img.style.display = "none";
        img.setAttribute("id", "pic" + i)
        // img.style.marginLeft = "92px"
        if (data.pic_rg[0] != " ") {
          img.src = data.details_watches.de_pic_rg[0][i];
        }
  
        else if (data.pic_sv[0] != " ") {
          img.src = data.details_watches.de_pic_sv[0][i];
        }
        else if (data.pic_go[0] != " ") {
          img.src = data.details_watches.de_pic_go[0][i];
        }
      }
  
    }

  }

  else if(data.pic_rg[0] != " "){
    for (let i = 0; i < data.details_watches.de_pic_rg[0].length; i++) {
      if (i == 0) {
        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "20px"
        img.style.display = "block";
        img.setAttribute("id", "pic" + i)
        // img.style.marginLeft = "92px"
        if (data.pic_rg[0] != " ") {
          img.src = data.pic_rg[0];
        }
  
        else if (data.pic_sv[0] != " ") {
          img.src = data.pic_sv[0];
        }
        else if (data.pic_go[0] != " ") {
          img.src = data.pic_ro[0];
        }
      }
      else{
        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "20px"
        img.style.display = "none";
        img.setAttribute("id", "pic" + i)
        // img.style.marginLeft = "92px"
        if (data.pic_rg[0] != " ") {
          img.src = data.details_watches.de_pic_rg[0][i];
        }
  
        else if (data.pic_sv[0] != " ") {
          img.src = data.details_watches.de_pic_sv[0][i];
        }
        else if (data.pic_go[0] != " ") {
          img.src = data.details_watches.de_pic_go[0][i];
        }
      }
  
    }

  }

  else if(data.pic_go[0] != " "){
    for (let i = 0; i < data.details_watches.de_pic_go[0].length; i++) {
      if (i == 0) {
        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "20px"
        img.style.display = "block";
        img.setAttribute("id", "pic" + i)
        // img.style.marginLeft = "92px"
        if (data.pic_rg[0] != " ") {
          img.src = data.pic_rg[0];
        }
  
        else if (data.pic_sv[0] != " ") {
          img.src = data.pic_sv[0];
        }
        else if (data.pic_go[0] != " ") {
          img.src = data.pic_go[0];
        }
      }
      else{
        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "20px"
        img.style.display = "none";
        img.setAttribute("id", "pic" + i)
        // img.style.marginLeft = "92px"
        if (data.pic_rg[0] != " ") {
          img.src = data.details_watches.de_pic_rg[0][i];
        }
  
        else if (data.pic_sv[0] != " ") {
          img.src = data.details_watches.de_pic_sv[0][i];
        }
        else if (data.pic_go[0] != " ") {
          img.src = data.details_watches.de_pic_go[0][i];
        }
      }
  
    }

  }
  


  // *****************************************************************************************
  // บนฝั่งขวา
  var divallb = document.createElement("div")
  divallb.setAttribute("class", "col")
  divupb.appendChild(divallb)
  divallb.style.marginLeft = "13px"
  var divb1 = document.createElement("div")
  divb1.setAttribute("class", "row")
  divb1.style.height = "20px"
  divb1.style.marginTop = "52px"
  divallb.appendChild(divb1)
  var name = document.createElement("p")
  name.innerHTML = data.name
  divb1.appendChild(name)
  var price = document.createElement("p")
  price.innerHTML = "฿ " + data.price[0]
  price.style.marginLeft = "250px"
  divb1.appendChild(price)

  var underline = document.createElement("hr")
  underline.style.width = "93%"
  underline.style.marginLeft = "-14px"
  underline.style.backgroundColor = "#ebebeb"
  divallb.appendChild(underline)


  var divb2 = document.createElement("div")
  divb2.setAttribute("class", "row")
  divallb.appendChild(divb2)
  divb2.style.marginTop = "-30px"
  var box1 = document.createElement("div")
  box1.setAttribute("class", "col")
  var box2 = document.createElement("div")
  box2.setAttribute("class", "col")


  divb2.appendChild(box1)
  divb2.appendChild(box2)

  box1.style.padding = "0px 0px"
  box2.style.padding = "0px 0px"
  box2.style.marginLeft = "-145px"

  var label = document.createElement("label")
  label.innerHTML = "สี :"
  label.style.fontSize = "14px"
  box1.appendChild(label)
  for (var k = 0; k < data.color.length; k++) {
    var button = document.createElement("button")
    button.setAttribute("class", "btn btn-light btn-circle btn-md");
    button.setAttribute("onclick", "changecolor(this);");
    button.style.marginTop = "65px"
    button.style.marginLeft = "-18px"
    button.style.marginRight = "25px"
    button.setAttribute("value", data.color[k])
    button.style.backgroundColor = data.code_color[k];
    box1.appendChild(button);


  }


  var label2 = document.createElement("label")
  label2.innerHTML = "ขนาด :"
  label2.style.fontSize = "14px"
  label2.style.marginTop = "31px"
  label2.style.marginLeft = "-98px"
  box2.appendChild(label2)
  // size ********************************************************************************************
  var box2in = document.createElement("div")
  box2in.setAttribute("class", "row")

  box2in.style.marginLeft = "-97px"
  box2.appendChild(box2in)

  for (var s = 0; s < data.size.length; s++) {
    var boxsize = document.createElement("div")
    boxsize.setAttribute("type", "submit")
    boxsize.setAttribute("id", count)
    boxsize.setAttribute("class", "boxsize")
    count++;
    boxsize.setAttribute("onclick", "clickboxsize(this);")
    boxsize.style.width = "60px"
    boxsize.style.height = "40px"
    boxsize.style.border = "1px solid"
    boxsize.style.borderLeft = "none"
    if (s == 0) {
      boxsize.style.borderLeft = "1px solid"
    }

    box2in.appendChild(boxsize)
    var namesize = document.createElement("p")
    namesize.innerHTML = data.size[s] + "mm"
    namesize.style.textAlign = "center"
    namesize.style.fontSize = "13px"
    namesize.style.marginTop = "8px"
    boxsize.appendChild(namesize)
  }
  // ********************************************************************************************
  var option = document.createElement("label")
  option.innerHTML = "คู่มือขนาดสินค้า"
  option.style.marginLeft = "20px"
  box2in.appendChild(option)

  var divb3 = document.createElement("div")
  divb3.setAttribute("class", "row")
  divb3.style.marginTop = "20px"
  divallb.appendChild(divb3)
  var divbuy = document.createElement("div")
  divbuy.setAttribute("type", "submit")
  divbuy.style.border = "1px solid"
  divbuy.setAttribute("class", "buy")
  divbuy.style.width = "455px"
  divbuy.style.height = "50px"
  divbuy.style.marginLeft = "0px"
  divbuy.style.backgroundColor = "black"
  divb3.appendChild(divbuy)
  var namebuy = document.createElement("p")
  namebuy.innerHTML = 'ซื้อเลย  &nbsp;&nbsp;→'
  namebuy.style.marginTop = "11px"
  namebuy.style.textAlign = "center"
  namebuy.style.color = "#b29600"
  namebuy.style.fontSize = "14px"
  divbuy.appendChild(namebuy)
  var footer1 = document.createElement("p")
  footer1.innerHTML = "■ ฟรีค่าจัดส่งเมื่อซื้อสินค้ามูลค่า 2,000 บาทขึ้นไป"
  var footer2 = document.createElement("p")
  footer2.innerHTML = "■ ฟรีค่าส่งสินค้าคืน (สำหรับสินค้าที่ครอบคลุมค่าขนส่ง)"
  footer1.style.marginLeft = "15px"
  footer1.style.marginTop = "15px"
  footer2.style.marginLeft = "15px"
  footer2.style.marginTop = "-15px"
  footer2.style.opacity = "0.7"
  footer1.style.opacity = "0.7"
  divb3.appendChild(footer1)
  divb3.appendChild(footer2)


  // ข้อมูลด้านล่าง
  var divunder = document.createElement("div")
  div.appendChild(divunder)
  divunder.style.width = "1000px"

  divunder.style.marginLeft = "60px"
  divunder.style.marginTop = "10px"
  var rowinunder1 = document.createElement("div")
  rowinunder1.setAttribute("class", "row")
  rowinunder1.style.marginLeft = "0px"
  rowinunder1.style.width = "100%"
  rowinunder1.style.height = "30px"
  rowinunder1.style.borderBottom = "1px solid #c5c5c5"
  divunder.appendChild(rowinunder1)
  var text1 = document.createElement("div")
  text1.setAttribute("class", "col")
  var text2 = document.createElement("div")
  text2.setAttribute("class", "col")
  var text3 = document.createElement("div")
  text3.setAttribute("class", "col")
  var text4 = document.createElement("div")
  text4.setAttribute("class", "col")

  rowinunder1.appendChild(text1)
  rowinunder1.appendChild(text2)
  rowinunder1.appendChild(text3)
  rowinunder1.appendChild(text4)
  text1.style.width = "250px"
  text2.style.width = "250px"
  text3.style.width = "250px"
  text4.style.width = "250px"
  text1.style.padding = "0px 0px"
  text2.style.padding = "0px 0px"
  text3.style.padding = "0px 0px"
  text4.style.padding = "0px 0px"
  text1.style.textAlign = "center"
  text2.style.textAlign = "center"
  text3.style.textAlign = "center"
  text4.style.textAlign = "center"
  // ช่องที่1
  var texta1 = document.createElement("a")
  texta1.innerHTML = "รายละเอียด"
  text1.style.textAlign = "center"
  texta1.setAttribute("class", "underlinetext")
  text1.appendChild(texta1)
  text1.setAttribute("onclick", "clicktext1();")
  text1.setAttribute("id", "text1")
  // ช่องที่2
  var texta2 = document.createElement("a")
  texta2.innerHTML = "การส่งมอบสินค้า"
  text2.style.textAlign = "center"
  texta2.setAttribute("class", "underlinetext")
  text2.appendChild(texta2)
  text2.setAttribute("onclick", "clicktext2();")
  text2.setAttribute("id", "text2")
  // ช่องที่3
  var texta3 = document.createElement("a")
  texta3.innerHTML = "การชำระเงิน"
  text3.style.textAlign = "center"
  texta3.setAttribute("class", "underlinetext")
  text3.appendChild(texta3)
  text3.setAttribute("onclick", "clicktext3();")
  text3.setAttribute("id", "text3")
  // ช่องที่4
  var texta4 = document.createElement("a")
  texta4.innerHTML = "นโยบาย-ขั้นตอนการส่งสินค้า"
  text4.style.textAlign = "center"
  texta4.setAttribute("class", "underlinetext")
  text4.appendChild(texta4)
  text4.setAttribute("onclick", "clicktext4();")
  text4.setAttribute("id", "text4")

  // ช่องใหญ่ล่าง
  var boxbigunder = document.createElement("div")
  divunder.appendChild(boxbigunder)
  //box 1
  var boxin1 = document.createElement("div")
  boxin1.setAttribute("id", "boxin1")
  boxbigunder.appendChild(boxin1)
  var rowin11 = document.createElement("div")
  rowin11.setAttribute("class", "row")
  boxin1.appendChild(rowin11)
  rowin11.style.marginLeft = "0px"
  rowin11.style.marginTop = "20px"

  var divin11 = document.createElement("div")

  var divin12 = document.createElement("div")
  divin12.style.width = "500px"
  divin12.style.fontSize = "14px"
  divin12.style.padding = "0px 0px 0px 0px"
  divin11.style.padding = "0px 20px 0px 0px"
  divin11.style.width = "500px"
  rowin11.appendChild(divin11)
  rowin11.appendChild(divin12)

  var detail = document.createElement("p")
  detail.innerText = data.details_watches.text0[0]
  divin11.appendChild(detail)
  var sku = document.createElement("p")
  sku.innerText = data.details_watches.text1[0][0]
  divin12.appendChild(sku)
  var sku1 = document.createElement("label")
  sku1.innerText = data.details_watches.text1[0][1]
  sku1.style.marginLeft = "82%"
  sku1.style.marginTop = "-40px"
  sku1.style.padding = "0px"
  divin12.appendChild(sku1)
  var hr1 = document.createElement("hr")
  divin12.appendChild(hr1)
  hr1.style.marginTop = "-10px"

  var text2 = document.createElement("p")
  text2.innerText = data.details_watches.text2[0][0]
  divin12.appendChild(text2)
  text2.style.marginTop = "-10px"
  var text21 = document.createElement("label")
  text21.innerText = data.details_watches.text2[0][1]
  text21.style.marginLeft = "93%"
  text21.style.marginTop = "-40px"
  text21.style.padding = "0px"
  divin12.appendChild(text21)
  var hr2 = document.createElement("hr")
  divin12.appendChild(hr2)
  hr2.style.marginTop = "-10px"


  var text3 = document.createElement("p")
  text3.innerText = data.details_watches.text3[0][0]
  divin12.appendChild(text3)
  text3.style.marginTop = "-10px"
  var text31 = document.createElement("label")
  text31.innerText = data.details_watches.text3[0][1]
  text31.style.marginLeft = "93%"
  text31.style.marginTop = "-40px"
  text31.style.padding = "0px"
  divin12.appendChild(text31)
  var hr3 = document.createElement("hr")
  divin12.appendChild(hr3)
  hr3.style.marginTop = "-10px"

  var text4 = document.createElement("p")
  text4.innerText = data.details_watches.text4[0][0]
  divin12.appendChild(text4)
  text4.style.marginTop = "-10px"
  var text41 = document.createElement("label")
  text41.innerText = data.details_watches.text4[0][1]
  text41.style.marginLeft = "64%"
  text41.style.marginTop = "-40px"
  text41.style.padding = "0px"
  divin12.appendChild(text41)
  var hr4 = document.createElement("hr")
  divin12.appendChild(hr4)
  hr4.style.marginTop = "-10px"


  var text5 = document.createElement("p")
  text5.innerText = data.details_watches.text5[0][0]
  divin12.appendChild(text5)
  text5.style.marginTop = "-10px"
  var text51 = document.createElement("label")
  text51.innerText = data.details_watches.text5[0][1]
  text51.style.marginLeft = "58.5%"
  text51.style.marginTop = "-40px"
  text51.style.padding = "0px"
  divin12.appendChild(text51)
  var hr5 = document.createElement("hr")
  divin12.appendChild(hr5)
  hr5.style.marginTop = "-10px"

  var text6 = document.createElement("p")
  text6.innerText = data.details_watches.text6[0][0]
  divin12.appendChild(text6)
  text6.style.marginTop = "-10px"
  var text61 = document.createElement("label")
  text61.innerText = data.details_watches.text6[0][1]
  text61.style.marginLeft = "93%"
  text61.style.marginTop = "-40px"
  text61.style.padding = "0px"
  divin12.appendChild(text61)
  var hr6 = document.createElement("hr")
  divin12.appendChild(hr6)
  hr6.style.marginTop = "-10px"

  var text7 = document.createElement("p")
  text7.innerText = data.details_watches.text7[0][0]
  divin12.appendChild(text7)
  text7.style.marginTop = "-10px"
  var text71 = document.createElement("label")
  text71.innerText = data.details_watches.text7[0][1]
  text71.style.marginLeft = "66.3%"
  text71.style.marginTop = "-40px"
  text71.style.padding = "0px"
  divin12.appendChild(text71)
  var hr7 = document.createElement("hr")
  divin12.appendChild(hr7)
  hr7.style.marginTop = "-10px"

  var text8 = document.createElement("p")
  text8.innerText = data.details_watches.text8[0][0]
  divin12.appendChild(text8)
  text8.style.marginTop = "-10px"
  var text81 = document.createElement("label")
  text81.innerText = data.details_watches.text8[0][1]
  text81.style.marginLeft = "87%"
  text81.style.marginTop = "-40px"
  text81.style.padding = "0px"
  divin12.appendChild(text81)
  var hr8 = document.createElement("hr")
  divin12.appendChild(hr8)
  hr8.style.marginTop = "-10px"

  var text9 = document.createElement("p")
  text9.innerText = data.details_watches.text9[0][0]
  divin12.appendChild(text9)
  text9.style.marginTop = "-10px"
  var text91 = document.createElement("label")
  text91.innerText = data.details_watches.text9[0][1]
  text91.style.marginLeft = "92.5%"
  text91.style.marginTop = "-40px"
  text91.style.padding = "0px"
  divin12.appendChild(text91)
  var hr9 = document.createElement("hr")
  divin12.appendChild(hr9)
  hr9.style.marginTop = "-10px"

  var text10 = document.createElement("p")
  text10.innerText = data.details_watches.text10[0][0]
  divin12.appendChild(text10)
  text10.style.marginTop = "-10px"
  var text101 = document.createElement("label")
  text101.innerText = data.details_watches.text10[0][1]
  text101.style.marginLeft = "96%"
  text101.style.marginTop = "-40px"
  text101.style.padding = "0px"
  divin12.appendChild(text101)
  var hr10 = document.createElement("hr")
  divin12.appendChild(hr10)
  hr10.style.marginTop = "-10px"

  var text11 = document.createElement("p")
  text11.innerText = data.details_watches.text11[0][0]
  divin12.appendChild(text11)
  text11.style.marginTop = "-10px"
  var text111 = document.createElement("label")
  text111.innerText = data.details_watches.text11[0][1]
  text111.style.marginLeft = "75%"
  text111.style.marginTop = "-40px"
  text111.style.padding = "0px"
  divin12.appendChild(text111)
  var hr11 = document.createElement("hr")
  divin12.appendChild(hr11)
  hr11.style.marginTop = "-10px"


  // box 2 
  var boxin2 = document.createElement("div")
  boxin2.setAttribute("id", "boxin2")
  boxbigunder.appendChild(boxin2)
  var img2 = document.createElement("img")
  img2.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/4Fj2waZXgjzYLyM1vxOW8L/c7f3961f85d545c07d1ccfd167bb24b3/Shipping_UPS.svg?ecom2=true&"
  img2.style.width = "25px"
  img2.height.height = "30px"
  boxin2.appendChild(img2)
  var label2 = document.createElement("label")
  label2.innerText = "UPS EXPRESS"
  img2.style.marginTop = "0px"
  label2.style.marginTop = "25px"
  label2.style.marginLeft = "10px"
  label2.style.fontSize = "14px"

  var p22 = document.createElement("p")
  p22.innerText = "● 2-3 วันทำการ"
  p22.style.fontSize = "14px"
  p22.style.marginLeft = "25px"
  p22.style.marginTop = "10px"
  var p23 = document.createElement("p")
  p23.innerText = "*ฟรีค่าจัดส่งเมื่อซื้อสินค้ามูลค่า 2,000 บาทขึ้นไป / โดยจะมีค่าจัดส่งสินค้า 300 บาทเมื่อซื้อสินค้ามูลค่าน้อยกว่า 2000บาท"
  p23.style.marginLeft = "10px"
  var hr2 = document.createElement("hr")
  hr2.style.marginTop = "35px"

  boxin2.appendChild(label2)
  boxin2.appendChild(p22)

  boxin2.appendChild(p23)
  boxin2.appendChild(hr2)
  boxin2.style.display = "none"

  //box 3
  var boxin3 = document.createElement("div")
  boxin3.setAttribute("id", "boxin3")
  boxbigunder.appendChild(boxin3)
  var p3 = document.createElement("p")
  p3.style.fontSize = "14.2px"
  p3.style.marginTop = "27px"
  p3.innerHTML = "สามารถเลือกชำระเงินด้วย บัตรVisa, MasterCard, Maestro, American Express, Discover, Diners Club International, Paypal, THAILAND E-BANKING, TESCO LOTUS"
  boxin3.appendChild(p3)
  var rowinin = document.createElement("div")
  rowinin.setAttribute("class", "row")
  rowinin.style.marginLeft = "190px"
  rowinin.style.marginTop = "20px"
  boxin3.appendChild(rowinin)
  var img1 = document.createElement("img")
  img1.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/2ewe5eMPSEcIqwoU08QIOA/5d89569ef8dfe251d0b795f76e0163d1/visa-2x.png?ecom2=true&"
  img1.style.width = "40"
  img1.style.height = "25"
  img1.style.marginRight = "15px"
  rowinin.appendChild(img1)
  var img2 = document.createElement("img")
  img2.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/2MIeYuELok46G2wAIU64Ao/dc9ffe7987f1c1654a722a3506199561/mastercard-2x.png?ecom2=true&"
  img2.style.width = "33"
  img2.style.height = "26"
  img2.style.marginRight = "15px"
  rowinin.appendChild(img2)
  var img3 = document.createElement("img")
  img3.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/13q571kpXagKaugiUm8sqA/f292e71009a25c91f46b7a888e5cbccb/maestro-2x.png?ecom2=true&"
  img3.style.width = "32"
  img3.style.height = "25"
  img3.style.marginRight = "15px"
  rowinin.appendChild(img3)
  var img4 = document.createElement("img")
  img4.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/5rkX6puqzKqmYmqCaKw6KC/46319f667e960e4de42326c4cb3d8a3b/jcb-2x.png?ecom2=true&"
  img4.style.width = "34"
  img4.style.height = "26"
  img4.style.marginRight = "15px"
  rowinin.appendChild(img4)
  var img5 = document.createElement("img")
  img5.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/7rjkl2vvIk46uK2ius6Uiy/bd47cf4a76b302d4a39b1176e853a712/amex-2x.png?ecom2=true&"
  img5.style.width = "27"
  img5.style.height = "26"
  img5.style.marginRight = "15px"
  rowinin.appendChild(img5)
  var img6 = document.createElement("img")
  img6.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/3mlTXT3LWMyU8wKQaGm4YQ/26816edd4b522fb95031e74e2e80755d/discover-2x.png?ecom2=true&"
  img6.style.width = "53"
  img6.style.height = "10"
  img6.style.marginRight = "15px"
  img6.style.marginTop = "8px"
  rowinin.appendChild(img6)
  var img7 = document.createElement("img")
  img7.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/3piI2aoGAUOiYQYc0KCw0Y/a9adef44c32c3efe97e34aebbb8feaa5/diners-club-2x.png?ecom2=true&"
  img7.style.width = "72"
  img7.style.height = "20"
  img7.style.marginRight = "15px"
  rowinin.appendChild(img7)
  var img8 = document.createElement("img")
  img8.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/4eXbeetlGwMke2MkY4Kkkw/1d422b9855aacdb179c7a42fd815cfa1/paypal-2x.png?ecom2=true&"
  img8.style.width = "64"
  img8.style.height = "16"
  img8.style.marginRight = "15px"
  rowinin.appendChild(img8)
  var img9 = document.createElement("img")
  img9.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/1gh3QrmBO9cyzMJ6hTtqek/a86d2462e5fae4912e63d071f38d1bb6/thailand_e-banking.png?ecom2=true&"
  img9.style.width = "40"
  img9.style.height = "26"
  img9.style.marginRight = "15px"
  rowinin.appendChild(img9)
  var img10 = document.createElement("img")
  img10.src = "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/3qRPAmY43ZNl19fs9App7r/456f7466ef15c8b3c1f31b47d01b3379/tesco-lotus.png?ecom2=true&"
  img10.style.width = "50"
  img10.style.height = "26"
  img10.style.marginRight = "15px"
  rowinin.appendChild(img10)
  boxin3.style.display = "none"
  // box 4 
  var boxin4 = document.createElement("div")
  boxin4.setAttribute("id", "boxin4")
  boxbigunder.appendChild(boxin4)
  var p = document.createElement("p")
  boxin4.appendChild(p)
  p.innerHTML = 'คุณมีสิทธิ์ที่จะส่งคืนสินค้าที่คุณได้ทำการสั่งซื้อโดยตรงจาก เว็บไซต์ ของเรา ภายในระยะเวลา 30 วัน (ตามปฏิทิน) นับจากวันที่สินค้าได้ถูกรับมอบ (ในกรณีที่คุณต้องการที่จะคืนสินค้า หากคุณสั่งซื้อสินค้าแบบเซ็ต คุณจะต้องส่งคืนสินค้าทุกชิ้น)'
  p.style.fontSize = "15px"
  p.style.marginTop = "27px"
  var p1 = document.createElement("p")
  p1.innerHTML = "ผลิตภัณฑ์นั้นไม่สามารถส่งคืนไปยังตัวแทนจำหน่าย/ร้านค้าปลีก-ย่อยในพื้นที่ของคุณได้"
  boxin4.appendChild(p1)
  var p2 = document.createElement("p")
  p2.innerHTML = "อ่านเพิ่มเติมเกี่ยวกับนโยบายการคืนสินค้า"
  boxin4.appendChild(p2)
  boxin4.style.display = "none"



  var boxfooter = document.createElement("div")
  boxfooter.setAttribute("class", "container")
  boxfooter.setAttribute("id", "hj")
  div.appendChild(boxfooter)
  // boxfooter บน **************************************************************************************************************
  var boxfooter1 = document.createElement("div")
  boxfooter.appendChild(boxfooter1)
  boxfooter1.style.height = "435px"

  boxfooter1.style.marginTop = "40px"
  var head6 = document.createElement("h6")
  head6.innerText = "ร า ย ก า ร สิ น ค้ า ที่ เ ข้ า กั น"
  head6.style.textAlign = "center"
  boxfooter1.style.width = "1000px"
  boxfooter1.style.marginLeft = "45px"
  boxfooter1.appendChild(head6)
  var rowfooterin1 = document.createElement("div")
  rowfooterin1.setAttribute("class", "row")
  var pp = document.createElement("p")
  pp.innerText = "4 products"
  pp.style.textAlign = "center"
  pp.style.fontSize = "15px"
  rowfooterin1.style.marginLeft = "40px"
  boxfooter1.appendChild(pp)
  boxfooter1.appendChild(rowfooterin1)
  let requestURL = 'jewelryall.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();


  var countco = 0
  function dataReportStatus(data1) {
    if (data.color[0] == "Rose Gold") {
      let val = data1;
      val = val.filter(x => x.color[0] == "Rose Gold");
      console.log(val);
      countco = val.length
      if (countco >= 4) {
        countco = 4
      }
      for (var boxtem = 0; boxtem < countco; boxtem++) {
        var boxitem = document.createElement("div")
        rowfooterin1.appendChild(boxitem)
        boxitem.style.width = "210px"
        boxitem.style.height = "370px"
        boxitem.style.marginLeft = "15px"
        var rowboxitem = document.createElement("div")
        rowboxitem.setAttribute("class", "row")
        boxitem.appendChild(rowboxitem)
        var boxboxitem = document.createElement("div")
        rowboxitem.appendChild(boxboxitem)


     
        boxitem.setAttribute("id", "box5")
        boxboxitem.style.height = "210px"
        boxboxitem.style.width = "208px"
        boxboxitem.style.marginLeft = "15px"
        boxboxitem.style.padding = "0px"
        boxboxitem.style.backgroundColor = 'rgb(244,244,244)'


        var boxboxitem2 = document.createElement("div")
        boxitem.appendChild(boxboxitem2)
        boxboxitem2.style.height = "210px"
        boxboxitem2.style.width = "208px"
        boxboxitem2.style.marginLeft = "15px"
        boxboxitem2.style.padding = "0px"
        var pname = document.createElement("p")
        boxboxitem2.appendChild(pname)

        var img = document.createElement("img")
        boxboxitem.appendChild(img)
        img.src = val[boxtem].pic_rg[0]
        img.style.width = "100%"
        pname.innerText = val[boxtem].name
        pname.style.fontSize = "13px"
        pname.style.marginTop = "10px"


        var buttoncolor = document.createElement("button")
        buttoncolor.setAttribute("class", "btn btn-light btn-circle btn-md")
        buttoncolor.style.backgroundColor = val[boxtem].code_color[0]
        buttoncolor.style.marginTop = "-11px"
        boxboxitem2.appendChild(buttoncolor)


        var pnamecolor = document.createElement("p")
        pnamecolor.innerText = val[boxtem].color[0]
        pnamecolor.style.marginTop = "3px"
        pnamecolor.style.fontSize = "13px"
        boxboxitem2.appendChild(pnamecolor)
        var pprice = document.createElement("p")
        pprice.innerText = val[boxtem].price1
        boxboxitem2.appendChild(pprice)
      }
    }
    else if (data.color[0] == "Gold") {
      let val = data1;
      val = val.filter(x => x.color[2] == "Gold");
      console.log(val);
      countco = val.length
      if (countco >= 4) {
        countco = 4
      }
      for (var boxtem = 0; boxtem < countco; boxtem++) {
        var boxitem = document.createElement("div")
        rowfooterin1.appendChild(boxitem)
        boxitem.style.width = "210px"
        boxitem.style.height = "370px"
        boxitem.style.marginLeft = "15px"
        var rowboxitem = document.createElement("div")
        rowboxitem.setAttribute("class", "row")
        boxitem.appendChild(rowboxitem)
        var boxboxitem = document.createElement("div")
        rowboxitem.appendChild(boxboxitem)

        rowfooterin1.style.marginLeft = "270px"
  
        boxitem.setAttribute("id", "box5")
        boxboxitem.style.height = "210px"
        boxboxitem.style.width = "208px"
        boxboxitem.style.marginLeft = "15px"
        boxboxitem.style.padding = "0px"
        boxboxitem.style.backgroundColor = 'rgb(244,244,244)'


        var boxboxitem2 = document.createElement("div")
        boxitem.appendChild(boxboxitem2)
        boxboxitem2.style.height = "210px"
        boxboxitem2.style.width = "208px"
        boxboxitem2.style.marginLeft = "15px"
        boxboxitem2.style.padding = "0px"
        var pname = document.createElement("p")
        boxboxitem2.appendChild(pname)

        var img = document.createElement("img")
        boxboxitem.appendChild(img)
        img.src = val[boxtem].pic_go[0]
        img.style.width = "100%"
        if (val[boxtem].type == "Bracelet") {
          img.style.marginTop = "70px"
        }

        pname.innerText = val[boxtem].name
        pname.style.fontSize = "13px"
        pname.style.marginTop = "10px"


        var buttoncolor = document.createElement("button")
        buttoncolor.setAttribute("class", "btn btn-light btn-circle btn-md")
        buttoncolor.style.backgroundColor = val[boxtem].code_color[2]
        buttoncolor.style.marginTop = "-11px"
        boxboxitem2.appendChild(buttoncolor)


        var pnamecolor = document.createElement("p")
        pnamecolor.innerText = val[boxtem].color[2]
        pnamecolor.style.marginTop = "3px"
        pnamecolor.style.fontSize = "13px"
        boxboxitem2.appendChild(pnamecolor)
        var pprice = document.createElement("p")
        pprice.innerText = val[boxtem].price1
        boxboxitem2.appendChild(pprice)
      }

    }
    else if (data.color[0] == "Silver") {
      let val = data1;
      val = val.filter(x => x.color[1] == "Silver");
      console.log(val);
      countco = val.length
      if (countco >= 4) {
        countco = 4
      }
      for (var boxtem = 0; boxtem < countco; boxtem++) {
        var boxitem = document.createElement("div")
        rowfooterin1.appendChild(boxitem)
        boxitem.style.width = "210px"
        boxitem.style.height = "370px"
        boxitem.style.marginLeft = "15px"
        var rowboxitem = document.createElement("div")
        rowboxitem.setAttribute("class", "row")
        boxitem.appendChild(rowboxitem)
        var boxboxitem = document.createElement("div")
        rowboxitem.appendChild(boxboxitem)


      
        boxitem.setAttribute("id", "box5")
        boxboxitem.style.height = "210px"
        boxboxitem.style.width = "208px"
        boxboxitem.style.marginLeft = "15px"
        boxboxitem.style.padding = "0px"
        boxboxitem.style.backgroundColor = 'rgb(244,244,244)'


        var boxboxitem2 = document.createElement("div")
        boxitem.appendChild(boxboxitem2)
        boxboxitem2.style.height = "210px"
        boxboxitem2.style.width = "208px"
        boxboxitem2.style.marginLeft = "15px"
        boxboxitem2.style.padding = "0px"
        var pname = document.createElement("p")
        boxboxitem2.appendChild(pname)

        var img = document.createElement("img")
        boxboxitem.appendChild(img)
        img.src = val[boxtem].pic_sv[0]
        img.style.width = "100%"
        pname.innerText = val[boxtem].name
        pname.style.fontSize = "13px"
        pname.style.marginTop = "10px"


        var buttoncolor = document.createElement("button")
        buttoncolor.setAttribute("class", "btn btn-light btn-circle btn-md")
        buttoncolor.style.backgroundColor = val[boxtem].code_color[1]
        buttoncolor.style.marginTop = "-11px"
        boxboxitem2.appendChild(buttoncolor)


        var pnamecolor = document.createElement("p")
        pnamecolor.innerText = val[boxtem].color[1]
        pnamecolor.style.marginTop = "3px"
        pnamecolor.style.fontSize = "13px"
        boxboxitem2.appendChild(pnamecolor)
        var pprice = document.createElement("p")
        pprice.innerText = val[boxtem].price1
        boxboxitem2.appendChild(pprice)
      }

    }



  }





  bot_function(data);

}

function bot_function(data) {
  // boxfooter ล่าง **************************************************************************************************************
  var hh = document.getElementById("hj")
  var boxfooter2 = document.createElement("div")
  hh.appendChild(boxfooter2)

  boxfooter2.style.height = "435px"
  boxfooter2.style.width = "1000px"

  var headh6 = document.createElement("h6")
  headh6.innerText = "สิ น ค้ า ใ ก ล้ เ คี ย ง"
  headh6.style.textAlign = "center"
  boxfooter2.appendChild(headh6)

  boxfooter2.style.marginLeft = "45px"
  boxfooter2.style.marginTop = "40px"
  var ppp = document.createElement("p")
  ppp.innerText = "4 products"
  ppp.style.fontSize = "15px"
  ppp.style.textAlign = "center"
  boxfooter2.appendChild(ppp)

  var rowfooterin4 = document.createElement("div")
  rowfooterin4.setAttribute("class", "row")
  boxfooter2.appendChild(rowfooterin4)



  console.log(data.collection)
  let requestURL = 'Watches.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      dataReportStatus(JSON.parse(request.responseText));
    }
  };
  request.open("GET", requestURL, true);
  request.send();

  function dataReportStatus(data2) {

    var countm = 0
    console.log(data.collection);
    if (data.collection == "Petite") {
      let val = data2.watches;
      val = val.filter(x => x.collection == "Petite");
      if (data.color[0] == "Silver" && (val.filter(x => x.color[0] == "Silver").length != 0)) {
        val = val.filter(x => x.color[0] == "Silver");
      }
      else if (data.color[0] == "Rose Gold" && (val.filter(x => x.color[0] == "Rose Gold").length != 0)) {
        val = val.filter(x => x.color[0] == "Rose Gold");
      }
      else if (data.color[0] == "Gold" && (val.filter(x => x.color[0] == "Gold").length != 0)) {
        val = val.filter(x => x.color[0] == "Gold");
      }
      console.log(val);
      countm = val.length
      if (countm >= 4) {
        countm = 4
      }

      for (var k = 0; k < countm; k++) {
        var boxitem = document.createElement("div")
        rowfooterin4.appendChild(boxitem)
        if (countm == 2) {
          rowfooterin4.style.marginLeft = "250px"
        }
        else if (countm == 1) {
          rowfooterin4.style.marginLeft = "400px"
        }
        else if (countm == 3) {
          rowfooterin4.style.marginLeft = "480px"
        }
        else {
          rowfooterin4.style.marginLeft = "50px"
        }
        boxitem.style.width = "210px"
        boxitem.style.height = "370px"
        boxitem.style.marginLeft = "15px"
        var rowboxitem = document.createElement("div")
        rowboxitem.setAttribute("class", "row")
        boxitem.appendChild(rowboxitem)
        var boxboxitem = document.createElement("div")
        rowboxitem.appendChild(boxboxitem)


  
        boxitem.setAttribute("id", "box5")
        boxboxitem.style.height = "210px"
        boxboxitem.style.width = "208px"
        boxboxitem.style.marginLeft = "15px"
        boxboxitem.style.padding = "0px"
        boxboxitem.style.backgroundColor = 'rgb(244,244,244)'


        var boxboxitem2 = document.createElement("div")
        boxitem.appendChild(boxboxitem2)
        boxboxitem2.style.height = "210px"
        boxboxitem2.style.width = "208px"
        boxboxitem2.style.marginLeft = "15px"
        boxboxitem2.style.padding = "0px"
        var pname = document.createElement("p")
        boxboxitem2.appendChild(pname)

        var img = document.createElement("img")
        boxboxitem.appendChild(img)

        if (data.color[0] == "Silver") {
          img.src = val[k].pic_sv[0]
        }
        else if (data.color[0] == "Rose Gold") {
          img.src = val[k].pic_rg[0]
        }
        else if (data.color[0] == "Gold") {
          img.src = val[k].pic_go[0]
        }

        img.style.width = "100%"


        pname.innerText = val[k].name
        pname.style.fontSize = "13px"
        pname.style.marginTop = "10px"


        var buttoncolor = document.createElement("button")
        buttoncolor.setAttribute("class", "btn btn-light btn-circle btn-md")
        buttoncolor.style.backgroundColor = val[k].code_color[0]
        buttoncolor.style.marginTop = "-11px"
        boxboxitem2.appendChild(buttoncolor)


        var pnamecolor = document.createElement("p")
        pnamecolor.innerText = val[k].color[0]
        pnamecolor.style.marginTop = "3px"
        pnamecolor.style.fontSize = "13px"
        boxboxitem2.appendChild(pnamecolor)
        var pprice = document.createElement("p")
        pprice.innerText = "฿ " + val[k].price[0]
        boxboxitem2.appendChild(pprice)

      }
    }
    else if (data.collection == "Iconic") {
      let val = data2.watches;
      val = val.filter(x => x.collection == "Iconic");
      // if(data.color[0] == "Silver"&& (val.filter(x => x.color[0] == "Silver").length != 0)){
      //   val = val.filter(x => x.color[0] == "Silver");
      // }
      // else if(data.color[0] == "Rose Gold" && (val.filter(x => x.color[0] == "Rose Gold").length != 0)){
      //   val = val.filter(x => x.color[0] == "Rose Gold");
      // }
      // else if(data.color[0] == "Gold" && (val.filter(x => x.color[0] == "Gold").length != 0)){
      //   val = val.filter(x => x.color[0] == "Gold");  
      // }
      console.log(val);
      countm = val.length
      if (countm >= 4) {
        countm = 4
      }

      for (var k = 0; k < countm; k++) {
        var boxitem = document.createElement("div")
        rowfooterin4.appendChild(boxitem)
        if (countm == 2) {
          rowfooterin4.style.marginLeft = "250px"
        }
        else if (countm == 1) {
          rowfooterin4.style.marginLeft = "400px"
        }
        else if (countm == 3) {
          rowfooterin4.style.marginLeft = "480px"
        }
        else {
          rowfooterin4.style.marginLeft = "50px"
        }
        boxitem.style.width = "210px"
        boxitem.style.height = "370px"
        boxitem.style.marginLeft = "15px"
        var rowboxitem = document.createElement("div")
        rowboxitem.setAttribute("class", "row")
        boxitem.appendChild(rowboxitem)
        var boxboxitem = document.createElement("div")
        rowboxitem.appendChild(boxboxitem)



        boxitem.setAttribute("id", "box5")
        boxboxitem.style.height = "210px"
        boxboxitem.style.width = "208px"
        boxboxitem.style.marginLeft = "15px"
        boxboxitem.style.padding = "0px"
        boxboxitem.style.backgroundColor = 'rgb(244,244,244)'


        var boxboxitem2 = document.createElement("div")
        boxitem.appendChild(boxboxitem2)
        boxboxitem2.style.height = "210px"
        boxboxitem2.style.width = "208px"
        boxboxitem2.style.marginLeft = "15px"
        boxboxitem2.style.padding = "0px"
        var pname = document.createElement("p")
        boxboxitem2.appendChild(pname)

        var img = document.createElement("img")
        boxboxitem.appendChild(img)

        if (val[k].color[0] == "Silver") {
          img.src = val[k].pic_sv[0]
        }
        else if (val[k].color[0] == "Rose Gold") {
          img.src = val[k].pic_rg[0]
        }
        else if (val[k].color[0] == "Gold") {
          img.src = val[k].pic_go[0]
        }

        img.style.width = "100%"


        pname.innerText = val[k].name
        pname.style.fontSize = "13px"
        pname.style.marginTop = "10px"


        var buttoncolor = document.createElement("button")
        buttoncolor.setAttribute("class", "btn btn-light btn-circle btn-md")
        buttoncolor.style.backgroundColor = val[k].code_color[0]
        buttoncolor.style.marginTop = "-11px"
        boxboxitem2.appendChild(buttoncolor)


        var pnamecolor = document.createElement("p")
        pnamecolor.innerText = val[k].color[0]
        pnamecolor.style.marginTop = "3px"
        pnamecolor.style.fontSize = "13px"
        boxboxitem2.appendChild(pnamecolor)
        var pprice = document.createElement("p")
        pprice.innerText = "฿ " + val[k].price[0]
        boxboxitem2.appendChild(pprice)

      }
    }
    if (data.collection == "Classic") {
      let val = data2.watches;
      val = val.filter(x => x.collection == "Classic");
      if (data.color[0] == "Silver" && (val.filter(x => x.color[0] == "Silver").length != 0)) {
        val = val.filter(x => x.color[0] == "Silver");
      }
      else if (data.color[0] == "Rose Gold" && (val.filter(x => x.color[0] == "Rose Gold").length != 0)) {
        val = val.filter(x => x.color[0] == "Rose Gold");
      }
      else if (data.color[0] == "Gold" && (val.filter(x => x.color[0] == "Gold").length != 0)) {
        val = val.filter(x => x.color[0] == "Gold");
      }
      console.log(val);
      countm = val.length
      if (countm >= 4) {
        countm = 4
      }

      for (var k = 0; k < countm; k++) {
        var boxitem = document.createElement("div")
        rowfooterin4.appendChild(boxitem)
        if (countm == 2) {
          rowfooterin4.style.marginLeft = "250px"
        }
        else if (countm == 1) {
          rowfooterin4.style.marginLeft = "400px"
        }
        else if (countm == 3) {
          rowfooterin4.style.marginLeft = "480px"
        }
        else {
          rowfooterin4.style.marginLeft = "50px"
        }
        boxitem.style.width = "210px"
        boxitem.style.height = "370px"
        boxitem.style.marginLeft = "15px"
        var rowboxitem = document.createElement("div")
        rowboxitem.setAttribute("class", "row")
        boxitem.appendChild(rowboxitem)
        var boxboxitem = document.createElement("div")
        rowboxitem.appendChild(boxboxitem)


 
        boxitem.setAttribute("id", "box5")
        boxboxitem.style.height = "210px"
        boxboxitem.style.width = "208px"
        boxboxitem.style.marginLeft = "15px"
        boxboxitem.style.padding = "0px"
        boxboxitem.style.backgroundColor = 'rgb(244,244,244)'


        var boxboxitem2 = document.createElement("div")
        boxitem.appendChild(boxboxitem2)
        boxboxitem2.style.height = "210px"
        boxboxitem2.style.width = "208px"
        boxboxitem2.style.marginLeft = "15px"
        boxboxitem2.style.padding = "0px"
        var pname = document.createElement("p")
        boxboxitem2.appendChild(pname)

        var img = document.createElement("img")
        boxboxitem.appendChild(img)

        if (data.color[0] == "Silver") {
          img.src = val[k].pic_sv[0]
        }
        else if (data.color[0] == "Rose Gold") {
          img.src = val[k].pic_rg[0]
        }
        else if (data.color[0] == "Gold") {
          img.src = val[k].pic_go[0]
        }

        img.style.width = "100%"


        pname.innerText = val[k].name
        pname.style.fontSize = "13px"
        pname.style.marginTop = "10px"


        var buttoncolor = document.createElement("button")
        buttoncolor.setAttribute("class", "btn btn-light btn-circle btn-md")
        buttoncolor.style.backgroundColor = val[k].code_color[0]
        buttoncolor.style.marginTop = "-11px"
        boxboxitem2.appendChild(buttoncolor)


        var pnamecolor = document.createElement("p")
        pnamecolor.innerText = val[k].color[0]
        pnamecolor.style.marginTop = "3px"
        pnamecolor.style.fontSize = "13px"
        boxboxitem2.appendChild(pnamecolor)
        var pprice = document.createElement("p")
        pprice.innerText = "฿ " + val[k].price[0]
        boxboxitem2.appendChild(pprice)

      }
    }
  }
}





function clickboxsize(obj) {

  var id = obj.id;
  var boxg = document.getElementById(id)

  boxg.style.backgroundColor = "black"


  boxg.style.color = "white"

  console.log(id)



}


function clicktext1() {
  document.getElementById("text1").style.borderBottom = "3px solid"
  document.getElementById("text2").style.borderBottom = "none"
  document.getElementById("text3").style.borderBottom = "none"
  document.getElementById("text4").style.borderBottom = "none"


  document.getElementById("boxin1").style.display = "inline"
  document.getElementById("boxin4").style.display = "none"
  document.getElementById("boxin3").style.display = "none"
  document.getElementById("boxin2").style.display = "none"



}
function clicktext2() {
  document.getElementById("text2").style.borderBottom = "3px solid"
  document.getElementById("text1").style.borderBottom = "none"
  document.getElementById("text3").style.borderBottom = "none"
  document.getElementById("text4").style.borderBottom = "none"
  document.getElementById("boxin2").style.display = "inline"
  document.getElementById("boxin4").style.display = "none"
  document.getElementById("boxin3").style.display = "none"
  document.getElementById("boxin1").style.display = "none"

}
function clicktext3() {

  document.getElementById("text3").style.borderBottom = "3px solid"
  document.getElementById("text2").style.borderBottom = "none"
  document.getElementById("text1").style.borderBottom = "none"
  document.getElementById("text4").style.borderBottom = "none"

  document.getElementById("boxin1").style.display = "none"
  document.getElementById("boxin2").style.display = "none"
  document.getElementById("boxin4").style.display = "none"
  document.getElementById("boxin3").style.display = "inline"



}
function clicktext4() {
  document.getElementById("text4").style.borderBottom = "3px solid"
  document.getElementById("text2").style.borderBottom = "none"
  document.getElementById("text3").style.borderBottom = "none"
  document.getElementById("text1").style.borderBottom = "none"

  document.getElementById("boxin1").style.display = "none"
  document.getElementById("boxin2").style.display = "none"
  document.getElementById("boxin3").style.display = "none"
  document.getElementById("boxin4").style.display = "inline"

}
function back() {
  if (data.pic_rg[0] != " ") {
    var max = data.details_watches.de_pic_rg[0].length - 1;
  }

  else if (data.pic_sv[0] != " ") {
    var max = data.details_watches.de_pic_sv[0].length - 1;
  }
  else if (data.pic_go[0] != " ") {
    var max = data.details_watches.de_pic_go[0].length - 1;
  }
  
  if(picslid == 0){
    document.getElementById("pic" + picslid).style.display = "none";
    document.getElementById("pic" + max).style.display = "block";
    picslid = max;
  }
  else{
    console.log(picslid);
    document.getElementById("pic" + picslid).style.display = "none";
    picslid -= 1;
    document.getElementById("pic" + picslid).style.display = "block";
    
  }
}
function forward(){
  if (data.pic_rg[0] != " ") {
    var max = data.details_watches.de_pic_rg[0].length - 1;
  }

  else if (data.pic_sv[0] != " ") {
    var max = data.details_watches.de_pic_sv[0].length - 1;
  }
  else if (data.pic_go[0] != " ") {
    var max = data.details_watches.de_pic_go[0].length - 1;
  }
  console.log(max)
  if(picslid == max){
    document.getElementById("pic" + max).style.display = "none";
    picslid = 0;
    document.getElementById("pic" + picslid).style.display = "block";
    
  }
  else{
    console.log(picslid);
    document.getElementById("pic" + picslid).style.display = "none";
    picslid += 1;
    document.getElementById("pic" + picslid).style.display = "block";
    
  }

}


