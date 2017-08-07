var timeleft = 21;
var timer = setInterval(function () {
    timeleft--;
    document.getElementById("countdown").textContent = ": " + timeleft;
    if (timeleft < 10) {
        document.getElementById("countdown").textContent = ": " + "0" + timeleft;
    } 
    if (timeleft < 0) {
        document.getElementById("countdown").innerHTML = "The end of the world is upon us";
    };
    
}, 1000);
