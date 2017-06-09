
//User logic (part I)
$(document).ready(function() {
  $("#formOne").submit(function(event) {
  $("#pingPongRules").show(); 
  var numberInput = parseInt($("input#inputNum").val());

//Business logic:
var newArray = [];
var play = function(number) {
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
var result = play(newArray);
$(".result").text(result);
event.preventDefault();
  });
});
