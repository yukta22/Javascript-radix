let startTime = new Date().getTime();
let duration = 10800000; //3 houres in seconds
// let duration = 10800; //3 houres in seconds

let timer = setInterval(()=>{
    let currentTime = new Date().getTime();
    let timeleft = duration - (currentTime - startTime);
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("ans").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    if (timeleft < 0) {
        document.getElementById("ans").innerHTML = "TIME UP!!";
    }
}, 1000);
