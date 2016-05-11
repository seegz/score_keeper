$(document).ready(function(){

  var score = 0;

  $(document).on("click", "#increase-5", function(){
    // Step 1: Add 5 to score variable
    // score = score + 5;
    // score + = 5
    if (score - 5 >=0) {
      score = score - 5;
    }
    
    // Step 2: Represent the new score on the UI
    $("#score").html(score + " Points");
  });
  $(document).on("click", "#decrease-5", function(){
    // Step 1: Subtract 5 to score variable

    score = score - 5;
    // score + = 5

    // Step 2: Represent the new score on the UI
    $("#score").html(score + " Points");
  });

  $(document).on("click", "#submit-custom-score", function (){
    var newScore= $("#custom-score").val();
    var newNumberScore = parseInt(newScore);

    score = newNumberScore;

    $("#score").html(score + " Points");

  });

});
