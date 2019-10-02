var randomNumber;
var wins;
var loses;

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() *12);
    console.log(random)

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".allCrystals").append(crystal);

    console.log("hello world");
}
