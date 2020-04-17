var userClickedPattern = [];
var gamePattern = [];

var colors = ["green", "red", "yellow", "blue"]

function randomNumber() {
    var n = Math.floor(Math.random() * 4);
    return n;
}

var randomChosenColor = colors[randomNumber()];

gamePattern.push(randomChosenColor);

// console.log(gamePattern);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

var audio = new Audio("./sounds/" + randomChosenColor + ".mp3")
audio.play();

$(".btn").click(function () {
    var ids = $(this).attr("id");
    userClickedPattern.push(ids);
    var audio = new Audio("./sounds/" + ids + ".mp3")
    audio.play();
    alert(ids);
    $("#" + ids).addClass("pressed").delau;


});