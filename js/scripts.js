$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var stringInput = $("input#inputNum").val();
  var numberInput = parseInt(stringInput);




var newArray = [];
var pingPong = function(number) {
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
}


var result = pingPong(newArray);
$(".result").text(result);

event.preventDefault();
});
 });
