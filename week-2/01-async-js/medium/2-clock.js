let Now = new Date();
let hours = Now.getHours();
let minutes= Now.getMinutes();
let seconds= Now.getSeconds();
let hour;
let ampm= hours>12? "PM":"AM";
// showClock(hours,minutes,seconds,ampm);

function showClock(hours,minutes,seconds,ampm){
    hour=ampm=="PM"?(hours+12):hours;
console.clear()
    console.log(
    `${hours < 10 ? "0":""}`+hours+":"+
    `${minutes < 10 ?"0":""}`+ minutes+"::"+
    `${seconds < 10 ? "0":""}`+seconds+" "+ampm+"     "+
    `${hour < 10 ? "0":""}`+hour+":"+
    `${minutes < 10 ?"0":""}`+ minutes+"::"+
    `${seconds < 10 ? "0":""}`+seconds+" ");

}

setInterval(adjustTime, 1000);

function adjustTime(hours,minutes,seconds){
     Now = new Date();
     hours = Now.getHours();
     minutes= Now.getMinutes();
     seconds= Now.getSeconds();
     ampm= hours>12? "PM":"AM";
     hours=hours-12;
    

    showClock(hours,minutes,seconds,ampm);
}