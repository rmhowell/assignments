//$("#btn").addEventListener("click", function() {
//    alert("hello")
//})

//$("#btn").click(function() {
//    alert("hello")
//})

//$(document).ready(function() {
//    console.log("document loaded")
//})


var grandTotal = 0;
var goombas = 0;
var bobbombs = 0;
var cheep = 0;

function grandtotal() {

    $("#grandTotal").html(goombas + bobbombs + cheep + " " + "coins")
};

$(".goombas").on("click", function () {
    goombas = Number($("#num1").val()) * 5;
    $("#num2").html(goombas + " coins")
    grandtotal();
});

$(".bobbombs").on("click", function () {
    bobbombs = Number($("#num3").val()) * 7;
    $("#num4").html(bobbombs + " coins")
    grandtotal();
});

$(".cheep").on("click", function () {
    cheep = Number($("#num5").val()) * 11;
    $("#num6").html(cheep + " coins") 
    grandtotal();
});
