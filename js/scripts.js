$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var stringInput = $("input#inputNum").val();
  var numberInput = parseInt(stringInput);

var numberArray = [];
for (var index = 1; index <= numberInput; index +=1) {
  numberArray.push(index);
  //alert (numberArray);
}

//for (var j = 0; j <= numberArray.length; j ++) {

//}

$(".result").append(numberArray);
//}
event.preventDefault();

 });
});
