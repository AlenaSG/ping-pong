$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
   var sentenceInput = $("input#sentence").val().toLowerCase();

   var sentenceArray = sentenceInput.split("");
   var len = sentenceInput.length

   alert (sentenceArray);

       if ((sentenceArray[0] === "a") || (sentenceArray[0]=== "e") || (sentenceArray[0] === "i") || (sentenceArray[0] === "o") || (sentenceArray[0] === "u"))

       {
       //$(".newSentence").text(newSentence)

       alert(sentenceInput + "way");
     }
    //}

     });
   });





    //var str = $("input#sentence").val();
    //var len = sentenceInput.length;
    //for(i=0;i<len;i++) {
    //  var letter = sentenceInput.charAt(i);
    //  sentenceArray.push(letter);
    //}

    //var sentenceLength = sentenceArray.length;
    //var newSentence = "";
  //  for(index = 0; index < sentenceLength; index +=1) {
    //  if ((sentenceArray[index] === "a") || (sentenceArray[index] === "e") || (sentenceArray[index] === "i") || (sentenceArray[index] === "o") || (sentenceArray[index] === "u")) {
      //  sentenceArray[index] = "-";
    //  }
    //  newSentence += sentenceArray[index];
  //  }
    //$(".newSentence").text(newSentence);
