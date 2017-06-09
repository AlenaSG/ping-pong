$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var stringInput = $("input#inputNum").val();
  var numberInput = parseInt(stringInput);

  //var mySumm = numberInput + 1


  //alert (numberInput + 1);
//var numberInput = var stringInput;
  //
   //var sentencePigLatin = "";

//for (var index = 0; index < numberArray.length; index ++) {
$(".result").text(numberInput);
//}
event.preventDefault();

 });
});
