function showClock(){
        var nowTime = new Date();
        var nowHour = nowTime.getHours();
        var nowMin = nowTime.getMinutes();
        var nowSec = nowTime.getSeconds();
        var msg = "Now Time is...." + nowHour + ":" + nowMin + ":" + nowSec;
        document.getElementById("clock").innerHTML = msg;
}
setInterval(showClock, 1000);
