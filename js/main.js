
var min = 1;
var max1 = 635;
var max2 = 735;





$(document).ready(function(){



  var sound = document.createElement("audio");
          sound.volume=0.40;
          sound.autoPlay=false;
          sound.preLoad=true;




  $("#cow").on("click", function(){

    var x = Math.random() * (max1 - min) + min;      // this should pick a random number for the top
    var y = Math.random() * (max2 - min) + min;      // this should pick a random number for the left
            sound.src="audio/cow.mp3";
            sound.play();               // Play sound

    $("#cow").css({top: x + "px", left: y + "px"});  // this should set the positon of the div

  });

  $("#chicken").on("click", function(){

    var x = Math.random() * (max1 - min) + min;      // this should pick a random number for the top
    var y = Math.random() * (max2 - min) + min;      // this should pick a random number for the left
    sound.src="audio/chicken.mp3";
    sound.play();

    $("#chicken").css({top: x + "px", left: y + "px"});  // this should set the positon of the div

  });

  $("#dog").on("click", function(){

    var x = Math.random() * (max1 - min) + min;      // this should pick a random number for the top
    var y = Math.random() * (max2 - min) + min;      // this should pick a random number for the left
    sound.src="audio/dog.mp3";
    sound.play();


    $("#dog").css({top: x + "px", left: y + "px"});  // this should set the positon of the div

  });

  $("#pig").on("click", function(){

    var x = Math.random() * (max1 - min) + min;      // this should pick a random number for the top
    var y = Math.random() * (max2 - min) + min;      // this should pick a random number for the left
    sound.src="audio/pig.mp3";
    sound.play();


    $("#pig").css({top: x + "px", left: y + "px"});  // this should set the positon of the div

  });

  $("#unicorn").on("click", function(){

    var x = Math.random() * (max1 - min) + min;      // this should pick a random number for the top
    var y = Math.random() * (max2 - min) + min;      // this should pick a random number for the left
    sound.src="audio/unicorn.mp3";
    sound.play();


    $("#unicorn").css({top: x + "px", left: y + "px"});  // this should set the positon of the div

  });




});
