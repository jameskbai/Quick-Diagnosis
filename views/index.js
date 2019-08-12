$(document).ready(function() {
  var url = '/bodyparts';
  console.log($);
  $.ajax(url)
  .done(function(data) {
    console.log(data);
  })
  .fail(function() {
    console.log('it failed');
  })
  .always(function() {
    // log stuff here possibly?
    console.log("maybe log?");
  })
})
