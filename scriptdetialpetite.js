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



  rowa.appendChild(boxinupa)

  //  บนฝั่งซ้าย




  // ใส่รูป *******************************************************************************

        var img = document.createElement("img")
        boxinupa.appendChild(img)
        img.style.width = "100%"
        img.style.marginTop = "100px"
        img.style.display = "block";
        img.style.marginLeft = "70px";
        
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
//   // ********************************************************************************************
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
//   // ช่องที่1
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
  detail.innerText = "สาย Classic Durham สไตล์วินเทจอันเป็นเอกลักษณ์ ทำจากหนังลูกวัวอเมริกันแท้ๆ"
  divin11.appendChild(detail)
  var sku = document.createElement("p")
  sku.innerText = "SKU"
  divin12.appendChild(sku)
  var sku1 = document.createElement("label")
  sku1.innerText = data.SKU[0]
  sku1.style.marginLeft = "82%"
  sku1.style.marginTop = "-40px"
  sku1.style.padding = "0px"
  divin12.appendChild(sku1)
  var hr1 = document.createElement("hr")
  divin12.appendChild(hr1)
  hr1.style.marginTop = "-10px"

  var text2 = document.createElement("p")
  text2.innerText = "ความกว้างของสายนาฬิกา"
  divin12.appendChild(text2)
  text2.style.marginTop = "-10px"
  var text21 = document.createElement("label")
  text21.innerText = data.length[0]
  text21.style.marginLeft = "93%"
  text21.style.marginTop = "-40px"
  text21.style.padding = "0px"
  divin12.appendChild(text21)
  var hr2 = document.createElement("hr")
  divin12.appendChild(hr2)
  hr2.style.marginTop = "-10px"


  var text3 = document.createElement("p")
  text3.innerText = "วัสดุ"
  divin12.appendChild(text3)
  text3.style.marginTop = "-10px"
  var text31 = document.createElement("label")
  text31.innerText = data.object[0]
  text31.style.marginLeft = "91%"
  text31.style.marginTop = "-40px"
  text31.style.padding = "0px"
  divin12.appendChild(text31)
  var hr3 = document.createElement("hr")
  divin12.appendChild(hr3)
  hr3.style.marginTop = "-10px"

  var text4 = document.createElement("p")
  text4.innerText = "ลิงค์สี"
  divin12.appendChild(text4)
  text4.style.marginTop = "-10px"
  var text41 = document.createElement("label")
  text41.innerText = data.color[0]
  text41.style.marginLeft = "87%"
  text41.style.marginTop = "-40px"
  text41.style.padding = "0px"
  divin12.appendChild(text41)
  var hr4 = document.createElement("hr")
  divin12.appendChild(hr4)
  hr4.style.marginTop = "-10px"


//   // box 2 
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

//   //box 3
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









function clickboxsize(obj) {

  var id = obj.id;
  var boxg = document.getElementById(id)

  boxg.style.backgroundColor = "black"


  boxg.style.color = "white"

  console.log(id)



}

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



