
function clockUpdate() {
    let now = new Date();
    let dayName = now.getDay();
    let month = now.getMonth();
    let dayNum = now.getDate();
    let year = now.getFullYear();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let period = "AM";

    if(hours == 0) {
        hours = 12;
    }
    if(hours > 12) {
        hours = hours -12;
        period = "PM";
    }

    Number.prototype.pad = function(digits) {
        for(let n = this.toString(); n.length < digits; n = 0 + n)  {
            return n;
        }
    }

    const months = ["January","February","March","April","May","June","July","August","September","November","December"];
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const ids = ["dayname","month","daynum","year","hour","min","sec","period"];
    const values = [week[dayName],months[month],dayNum,year,hours,mins,secs,period];

    // Loop over
    for(let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
    
}

function clockInit() {
    clockUpdate();
    window.setInterval('clockUpdate()',1);
}

