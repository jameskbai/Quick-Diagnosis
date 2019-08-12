$(document).ready(function() {
  function askBodyPartsQuestions(data) {
    // take data and give a multiple choice question.
    for (var i = 0; i < data.length; i++) {
      var bodypart = data[i];
      $(".column1").append("<p>" + bodypart.Name + "</p>");
    }
  }

  var url = '/bodyparts';
  console.log($);
  $.ajax(url)
  .done(function(data) {
    console.log(data);
    askBodyPartsQuestions(data);
  })
  .fail(function() {
    console.log('it failed');
  })
  .always(function() {
    // log stuff here possibly?
    console.log("maybe log?");
  })
})
