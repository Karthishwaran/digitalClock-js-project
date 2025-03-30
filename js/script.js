const digitalclock=document.querySelector(".clock");
function digiclock(){
    var timers=new Date();
    var hrs=timers.getHours();
    var mins=timers.getMinutes();
    var secs=timers.getSeconds()
    var Txt="AM";

    if(hrs>12){
        hrs=hrs-12;
        txt="PM"
    }
    else{
        hrs=12;
        txt="AM"
    }
    hrs=hrs<10?"0"+hrs:hrs;
    mins=mins<10?"0"+mins:mins;
    secs=secs<10?"0"+secs:secs;
    
    digitalclock.innerHTML=`${hrs}:${mins}:${secs}:${txt}`;
}
digiclock();
setInterval(digiclock,1000);