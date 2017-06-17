//Business logic:
var play = function(numberInput) {
  newArray = [];
  for (j = 1; j <= numberInput; j++) {
    if (j % 15 === 0) {
      newArray.push("ping-pong");
    } else if (j % 5 === 0) {
      newArray.push("pong");
    } else if (j % 3 === 0) {
      newArray.push("ping");
    } else {
      newArray.push(j);
    }
  }
    return newArray;
};

//User interface (front-end) logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#inputNum").val());
    var newArray = play(numberInput);
    $(".result").text(newArray);
    $("#pingPongRules").show();
  });
});
