var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;

var colors = ["green", "red", "yellow", "blue"]



function levelIncrease() {
    level++;
    var n = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[n];
    $("#level").text("level " + level);
    gamePattern.push(randomChosenColor);

    // console.log(gamePattern);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    var audio = new Audio("./sounds/" + randomChosenColor + ".mp3")
    audio.play();

}

$("body").keypress(function (e) {
    if (started === false) {
        levelIncrease();
        started = true;
    }
});

function animateButton(btnColor) {
    $("#" + btnColor).addClass("pressed");

    setTimeout(function () {
        $("#" + btnColor).toggleClass("pressed");
    }, 100);
}

$(".btn").click(function () {
    var ids = $(this).attr("id");
    userClickedPattern.push(ids);
    var audio = new Audio("./sounds/" + ids + ".mp3")
    audio.play();
    animateButton(ids);
    // alert(ids);



});

console.log(userClickedPattern);
console.log(gamePattern);