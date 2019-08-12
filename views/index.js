$(document).ready(function() {
  
  function showBodyParts(data) {
    // take data and give a multiple choice question.
    for (var i = 0; i < data.length; i++) {
      var bodyPart = data[i];
      console.log("names output1: " + bodyPart.Name);
      var bodyName = "<p id =p_" + bodyPart.ID + "><button  id =" + bodyPart.ID + " class=dropbtn>" + bodyPart.Name + "</button></p";
      $(".bodyButton").append(bodyName);
    }

  function showDetailedBodyParts(data, curr) {
    for (var i = 0; i < data.length; i++) {
      var detailedBodyPart = data[i];
      console.log("names output2:" + detailedBodyPart.Name);
      var detailedBodyName = "<p><button id =" + detailedBodyPart.ID + " class=dropdown-content>" + detailedBodyPart.Name + "</button></p>";
      var idName = "#p_" + curr.id;

      $(idName).append(detailedBodyName);
     } 
  }

    $(".dropbtn").click(function(){
      console.log("id here: " + this.id);
      var url2 = '/detailedBodypart/' + this.id;
      var curr = this;
      $.ajax(url2)
      .done(function(data) {
        console.log(data);
        showDetailedBodyParts(data, curr);
      })
      .fail(function() {
        console.log('it failed');
      })
    })

    var bodyPartIds;
    $(".dropdown-content").click(function(){
      console.log("hello");
      bodyPartIds.push(this.id);
      console.log(bodyPartIds);
    })


  }

  var url1 = '/bodyparts';
  console.log($);
  $.ajax(url1)
  .done(function(data) {
    console.log(data);
    showBodyParts(data);
  })
  .fail(function() {
    console.log('it failed');
  })
  .always(function() {
    // log stuff here possibly?
    console.log("maybe log?");
  })

  
})
