
function clock() {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // Loop to check if variable is less than 10
    // Add leading zero for formatting
    if(h < 10) {
        h = '0' + h;
    }
    if(m < 10) {
        m = '0' + m;
    }
    if(s < 10) {
        s = '0' + s;
    }
   
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

 
}

// Set interval to update current time every second
let interval = setInterval(clock,1000)