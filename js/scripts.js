$(document).ready(function(){
  $("form#blanks").submit(function(event) {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
          var userInput = $("input#" + blank).val();
          $("." + blank).text(userInput);
      });


    event.preventDefault();

  });
});
