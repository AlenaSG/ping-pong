$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
   var sentenceInput = $("input#sentence").val().toLowerCase();
   var sentenceArray = sentenceInput.split("");
   var sentencePigLatin = "";
   var len = sentenceInput.length

  //  alert (sentenceArray);

   var vowels = ['a', 'e', 'i', 'o', 'u'];

   if (len === 1) {
    for (var i = 0; i < vowels.length; i++) {   // loop through vowels
      for (var j = 0; j < 1; j++) {
        if (vowels[i] === sentenceArray[j]) {
          sentencePigLatin = sentenceArray + "way";
          return alert (sentencePigLatin);
        } else {
          sentencePigLatin = sentenceArray + "ay";
          return alert (sentencePigLatin);
        }

      }
    }
  }

  if (len > 1) {
   for (var i = 0; i < vowels.length; i++) {   // loop through vowels
     for (var j = 0; j < 1; j++) {
       if (vowels[i] === sentenceArray[j]) {
         sentencePigLatin = sentenceInput+ "way";
         return alert (sentencePigLatin);
       } else {
         //move the consonant to the end, then add "ay"
         var consonant = sentenceArray[j];
         var newSentence = sentenceArray.slice(1, sentenceArray.length).join('') + consonant + "ay";
         return alert (newSentence);
       }
      }
    }
  }

          //console.log(letterArray[j]);
          //wordInput = wordInput.replace(letterArray[j], '-');

   //if ((sentenceArray[0] === "a") || (sentenceArray[0]=== "e") || (sentenceArray[0] === "i") || (sentenceArray[0] === "o") || (sentenceArray[0] === "u")) {
      // sentencePigLatin = sentenceInput + "way";
    // } else {
    //   sentencePigLatin = sentenceInput + "ay";

    // }


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
