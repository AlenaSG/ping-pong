$(document).ready(function() {
  $('#submit_button').click(function(event){
  event.preventDefault();

  var wordInput = $("input#userInput").val().toLowerCase();

  var wordInputArray = wordInput.split('');
  var reverseInputArray = wordInputArray.reverse();
  var reverseUserInput = reverseInputArray.join("");

alert (reverseUserInput);

if (wordInput === reverseUserInput) {
  alert ("It's a palindrome!");
} else {
  alert ("It's not a palindrome!")
}
  //reverseString(wordInput);

    //var vowels = ['a', 'e', 'i', 'o', 'u'];
    //for (var i = 0; i < vowels.length; i++) {   // loop through vowels
    //  for (var j = 0; j < letterArray.length; j++) {
      //  if (vowels[i] === letterArray[j]) {
        //  console.log(letterArray[j]);
        //  wordInput = wordInput.replace(letterArray[j], '-');
  });

});
