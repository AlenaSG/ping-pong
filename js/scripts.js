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
function findTree(numberArray) {
        for (i = 0; j< numberArray.length; j++) {
            if (numberArray[i] % 3 === 0) {
                newArray.push(numberArray[j]);

            }
                    }
          return newArray;
          alert (newArray);
  }


$(".result").text(newArray);

event.preventDefault();
});
 });
