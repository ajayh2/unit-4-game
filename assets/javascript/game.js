var goal;
var wins = 0;
var loses = 0;
var added = 0;
goal = Math.floor(Math.random() *120 + 19);



$("#target").html("goal:  " + goal);
$("#ws").html("Wins:  " + wins);
$("#ls").html("Loses:  " + loses);
$("#cs").html("Score:  " + added);


for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() *12 + 1);

      
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".allCrystals").append(crystal);

}
 var startGame = function() {
added = 0;

$(".allCrystals") = 

goal = Math.floor(Math.random() *120 + 19);

for(var i = 0; i < 4; i++){


    var random = Math.floor(Math.random() *12 + 1);

      $("crystal").attr({
        "data-random": random

      })
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".allCrystals").append(crystal);

}
$("#cs").html("Score:  " + added);
$("#target").html("goal:  " + goal);


 }// for start game

$(".crystal").on("click", function (){
    var num = parseInt($(this).attr("data-random"));
    added += num;
    $("#cs").text("Score: "+ added)

    console.log(added);

    if(added > goal){
        loses++;
        $("#ls").text("Loses:" + loses)
        startGame();
        console.log("lose");
    }
    else if(added === goal){
        wins++;
        $("#ws").text("Wins:" + wins)
        startGame();

        console.log("win")
    }

})