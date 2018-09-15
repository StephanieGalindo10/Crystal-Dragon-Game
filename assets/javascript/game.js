var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
//varaiable for the wins, losses, target, and current score//
//assigned random number//
targetScore = Math.round(Math.random() * (120 - 19) + 19);
//hidden random number for crystals//
var crystal1 = Math.round(Math.random() * (12 - 1) + 1);
var crystal2 = Math.round(Math.random() * (12 - 1) + 1);
var crystal3 = Math.round(Math.random() * (12 - 1) + 1);
var crystal4 = Math.round(Math.random() * (12 - 1) + 1);
function restartGame() {
    targetScore = Math.round(Math.random() * (120 - 19) + 19);
    crystal1 = Math.round(Math.random() * (12 - 1) + 1);
    crystal2 = Math.round(Math.random() * (12 - 1) + 1);
    crystal3 = Math.round(Math.random() * (12 - 1) + 1);
    crystal4 = Math.round(Math.random() * (12 - 1) + 1);
    currentScore = 0;
    $("#scoreTarget").html(targetScore);
    $("#scoreBox").html(currentScore);
}
//crystalButton fucntion and color crystal design not made by me//
$(document).ready(function () {
    //this decrease the voulme of yellowcrystal//
    $('#musicyellow').prop("volume", 0.1);
    var crystalBtn = $('.crystalButton');
    $("#scoreTarget").html(targetScore);
    crystalBtn.click(function (e) {

        //detect which crystal was click and added music file below it//
        if (e.target.id == "bluecrystal") {
            currentScore += crystal1;
            var audio = document.getElementById("musicblue");
            audio.play();
        }
        if (e.target.id == "greencrystal") {
            currentScore += crystal2;
            var audio = document.getElementById("musicgreen");
            audio.play();
        }
        if (e.target.id == "redcrystal") {
            currentScore += crystal3;
            var audio = document.getElementById("musicred");
            audio.play();

        }
        if (e.target.id == "yellowcrystal") {
            currentScore += crystal4;
            var audio = document.getElementById("musicyellow");
            audio.play();
        }
/// end of the crystal gems information///

// the current score box where the wins is detected//
        $("#scoreBox").html(currentScore);
        console.log(currentScore);
        //add the crystal vaule to the user score//
        //if the user score equal the target score they defeat the dragon//
        if (currentScore == targetScore) {
            alert("You won! You saved your village");

            winCounter += 1;
            $("#wins").html(winCounter);
            restartGame();
        }
        //if the user score is more than the target score they will lose and be eaten// 
        if (currentScore > targetScore) {
            alert("you lost! You will be eaten by the dragon");
            lossCounter += 1;
            $("#losses").html(lossCounter);
            restartGame();
        }
    })

    //footer has no java but was created in photoshop by me and insert as a image//
    





})
