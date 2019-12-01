var message="   Sevdiklerinize Birde Bu Çerçeveden Bakın..   ";//Mesajınızı Buraya Yazınız..
function ButtonURL(){//buttonurl fonksiyonu tanımladık
window.location="index.html"
}
function scroll()//scroll fonksiyonu tanımladık
{
  message = message.substring(1,message.length) + message.substring(0,1);
  document.bs.bs.value = message;
  setTimeout("scroll()",140);
}
window.onload=scroll
document.write('<style type="text/css">') // css dosyasından çağırdık
document.write('.select{background: #99CC66;border-color:#CCCC66;border-radius:3px;color:#0000;font-family:Arial,Helvetica,Verdana;font-size:15px;font-weight: bold;}')// style özelliklerini yazdık
document.write('</STYLE>')
document.write('<form name=bs><INPUT class="select" TYPE="button" NAME="bs" value="" onclick="ButtonURL()"></FORM>')//buton tipinde form açıp onun içine yazdırdık
