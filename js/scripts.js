$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var stringInput = $("input#inputNum").val();
  var numberInput = parseInt(stringInput);

var numberArray = [];
for (var index = 1; index <= numberInput; index +=1) {
  numberArray.push(index);
  //alert (numberArray);
}


var newArray = [];
var pingPong = function(number) {
        for (j = 1; j <= numberInput; j++) {
            if (j % 3 === 0) {
              newArray.push("ping-pong");
            } else if (j % 3 !== 0)
              newArray.push(j);
            }
return newArray;
alert (newArray)
}
      //return newArray;


var result = pingPong(newArray);
$(".result").text(result);

event.preventDefault();
});
 });
