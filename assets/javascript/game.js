
$(document).ready(function() {

    
    crystalVal = [];
    goalNum = 0;
    randNum = 0;
    losses = 0;
    wins = 0;

    function crystalGame() {
        goalNum = Math.floor(Math.random() * (121 - 19) + 19);
        userScore = 0;
        $("#numDiv").text(goalNum);


        var ruby = {
            value: 0
        };
        var sapphire = {
            value: 0
        };
        var topaz = {
            value: 0
        };
        var emerald = {
            value: 01
        };


        var crystal = [ruby, sapphire, topaz, emerald];
        var crystalNum = [];

        for (i = 0; i < crystal.length; i++) {
            function crystalNum() {
                randNum = Math.floor(Math.random() * 12) + 1;
                if (!crystalVal.includes(randNum)) {
                    crystalVal.push(randNum);
                }
                else {
                    crystalNum();
                }
            }
            crystalNum();
        };


        for (x = 0; x < crystalVal.length; x++) {
            crystal[x].value = crystalVal[x];
        }; 

        $("#ruby").on("click", function () {
            userScore = userScore + ruby.value;
            $("#totalScore").text(userScore);
            if(userScore > goalNum){
                $("#wL").text("You Lose!");
                losses += 1;
                $("#losses").text("Losses: " + losses);
                crystalGame();
            }else if(userScore == goalNum){
                $("#wL").text("You Win!");
                wins += 1;
                $("#wins").text("Wins: " + wins);
                crystalGame();  
            }
        });

        $("#sapphire").on("click", function () {
            userScore = userScore + sapphire.value;
            $("#totalScore").text(userScore);
            if(userScore > goalNum){
                $("#wL").text("You Lose!");
                losses += 1;
                $("#losses").text("Losses: " + losses);
                crystalGame();
            }else if(userScore == goalNum){
                $("#wL").text("You Win!");
                wins += 1;
                $("#wins").text("Wins: " + wins);
                crystalGame();  
            }
        });

        $("#topaz").on("click", function () {
            userScore = userScore + topaz.value;
            $("#totalScore").text(userScore);
            if(userScore > goalNum){
                $("#wL").text("You Lose!");
                losses += 1;
                $("#losses").text("Losses: " + losses);
                crystalGame();
            }else if(userScore == goalNum){
                $("#wL").text("You Win!");
                wins += 1;
                $("#wins").text("Wins: " + wins);
                crystalGame();  
            }
        });

        $("#emerald").on("click", function () {
            userScore = userScore + emerald.value;
            $("#totalScore").text(userScore);
            if(userScore > goalNum){
                $("#wL").text("You Lose!");
                losses += 1;
                $("#losses").text("Losses: " + losses);
                crystalGame();
            }else if(userScore == goalNum){
                $("#wL").text("You Win!");
                wins += 1;
                $("#wins").text("Wins: " + wins);
                crystalGame();  
            }
        });
       
    };
        crystalGame();
});