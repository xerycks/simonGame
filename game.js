var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;

var colors = ["green", "red", "yellow", "blue"]

$(".start").click(function (e) {
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
        var audio2 = new Audio("./sounds/wrong.mp3");
        audio2.play();
        console.log("wrong")
        $("#level").text("Game Over !! Press any key to start again");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").toggleClass("game-over");
        }, 299);
        startOver();
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

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}