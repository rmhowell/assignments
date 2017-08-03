var grandTotal = 0;
var goombas = 0;
var bobbombs = 0;
var cheep = 0;

function grandtotal() {

    document.getElementById("grandTotal").innerHTML = goombas + bobbombs + cheep + " " + "coins";
};

document.querySelector(".goombas").addEventListener("click", function () {
    goombas = Number(document.getElementById("num1").value) * 5;
    document.getElementById("num2").innerHTML = goombas + " coins";
    grandtotal();
});

document.querySelector(".bobbombs").addEventListener("click", function () {
    bobbombs = Number(document.getElementById("num3").value) * 7;
    document.getElementById("num4").innerHTML = bobbombs + " coins";
    grandtotal();
});

document.querySelector(".cheep").addEventListener("click", function () {
    cheep = Number(document.getElementById("num5").value) * 11;
    document.getElementById("num6").innerHTML = cheep + " coins";
    grandtotal();
});
