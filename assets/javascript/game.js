var goal;
var wins = 0;
var loses = 0;
var added = 0;
goal = Math.floor(Math.random() *99 + 19);



$("#target").html("goal:  " + goal);
$("#ws").html("wins:  " + wins);
$("#ls").html("loses:  " + loses);



for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() *12 + 1);

      
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".allCrystals").append(crystal);

}
$(".crystal").on("click", function (){
    var num = parseInt($(this).attr("data-random"));
    added += num;
    console.log(added);

    if(added > goal){
        loses--;
    }
    else if(added === goal){
        wins--;
    }

})