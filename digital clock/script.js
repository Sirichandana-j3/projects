const hr=document.getElementById("hr");
const min=document.getElementById("min");
const sec=document.getElementById("sec");

var clock=setInterval(function time() {
    var date_now= new Date();

    var hr1 = date_now.getHours();
    var min1 = date_now.getMinutes();
    var sec1 = date_now.getSeconds();
if(hr1<10){
    hr1="0"+hr1;
}
if(min1<10){
    min1="0"+min1;
}
if(sec1<10){
    sec1="0"+sec1;
}
    hr.textContent=hr1;
    min.textContent=min1;
    sec.textContent=sec1;


},1000);
