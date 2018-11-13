$(document).ready(function(){

    var rand = 0;
    var blue = 0;
    var pink = 0;
    var purple = 0;
    var yellow = 0;
    var userTotal = 0;
    var wins = 0;
    var looses = 0;

    //initialize new game
    function restart(){
        userTotal = 0;
        //new random number 20-80
        rand = Math.floor(Math.random() * 80) + 40;
        $("#randNum").text("Target number: " + rand);
        //new crystal values
        blue = Math.floor(Math.random() * 30) + 1;
        pink = Math.floor(Math.random() * 30) + 10;
        purple = Math.floor(Math.random() * 40) + 10;
        yellow = Math.floor(Math.random() * 40) + 20;
        console.log("blu,pink,pur,yell: "+ blue +" "+  pink +" "+ purple +" "+ yellow);
        $("#wins").text("Wins: "+ wins);
        $("#looses").text("Looses: "+ looses);
        $("#userNum").text("Your total score is : " + userTotal);
           
    }
   function checkscore(){
       if(userTotal > rand){
           alert("You lost!");
           looses++;
            restart();
       }
       else if(userTotal === rand){
           alert("You won!");
           wins++;
           restart();

       }
   
   }
    //blue gem clicked
    $("#blue").on("click", function () {
        userTotal += blue;
    });
    //pink gem clicked
    $("#pink").on("click", function () {
        userTotal += pink;
    });
    //purple gem clicked
    $("#purple").on("click", function () {
        userTotal += purple;
    });
    //yellow gem clicked
    $("#yellow").on("click", function () {
        userTotal += yellow;
    });
     //any gem clicked
     $(".gem-img").on("click",function(){
         checkscore();
        $("#userNum").text("Your total score is : " + userTotal);
        console.log(userTotal);
    });

    restart();


});//eor