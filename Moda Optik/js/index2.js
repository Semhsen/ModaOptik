var message="   05414597666 - 05452178262   ";//Mesajınızı Buraya Yazınız..
function ButtonURL(){
window.location="index.html"
}
function scroll()
{
  message = message.substring(1,message.length) + message.substring(0,1);
  document.bs.bs.value = message;
  setTimeout("scroll()",140);
}
window.onload=scroll
document.write('<style type="text/css">')
document.write('.select{background: #33CCCC;border-color:"black";color:"red";font-family:Arial,Helvetica,Verdana;font-size:15px;font-weight: bold;}')
document.write('</STYLE>')
document.write('<form name=bs><INPUT class="select" TYPE="button" NAME="bs" value="" onclick="ButtonURL()"></FORM>')