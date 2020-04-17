var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;

var colors = ["green", "red", "yellow", "blue"]

$("body").keypress(function (e) {
    if (started === false) {
        levelIncrease();
        started = true;
    }
});

$(".btn").click(function () {
    var ids = $(this).attr("id");
    userClickedPattern.push(ids);
    var audio = new Audio("./sounds/" + ids + ".mp3")
    audio.play();
    animateButton(ids);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("true");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                levelIncrease();
            }, 1000)

        }
    } else {
        console.log("wrong")
    }
}


function levelIncrease() {
    userClickedPattern = [];
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

function animateButton(btnColor) {
    $("#" + btnColor).addClass("pressed");

    setTimeout(function () {
        $("#" + btnColor).toggleClass("pressed");
    }, 100);
}