day = new Date();
miVisit = day.getTime();
function clock() {
dayTwo = new Date();// değişkenler tanımlanıyo.
hrNow = dayTwo.getHours();
mnNow = dayTwo.getMinutes(); 
scNow = dayTwo.getSeconds();
miNow = dayTwo.getTime();
if (hrNow == 0) {//hrNow 0 ile 11 arasındayken "AM" yazdırdık. 
hour = 12;
ap = " AM";
} else if(hrNow <= 11) {
ap = " AM";
hour = hrNow;
} else if(hrNow == 12) {//hrNow 12 ye eşitken "PM" yazdırdık.
ap = " PM";
hour = 12;
} else if (hrNow >= 13) {//hrNow 13 ve 13ten büyükken hrNow dan 12 yi çıkarıp "PM" şeklinde yazdırdık.
hour = (hrNow - 12);
ap = " PM";
}
if (hrNow >= 13) {
hour = hrNow - 12;
}
if (mnNow <= 9) {//mnNow 9 a eşit ve küçükken soluna 0 ekleyip yazdırdık.
min = "0" + mnNow;
}
else (min = mnNow)
if (scNow <= 9) {
secs = "0" + scNow;
} else {
secs = scNow;
}
time = hour + ":" + min + ":" + secs + ap;//Değişkenleri atadık.
document.form.button.value = time;//time verimi form butonun içine gönderdik.
self.status = time;
setTimeout('clock()', 1000);
}

document.write("<form name=\"form\">"
+ "<input type=button"
+ " name=button ></form>");//buton tipinde form açıp veriyi içine yazdırdık.
onError = null;
clock();