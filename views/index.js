$(document).ready(function() {
  
  function showBodyParts(data) {
    // take data and give a multiple choice question.
    for (var i = 0; i < data.length; i++) {
      var bodyPart = data[i];
      var bodyName = "<button  id =" + bodyPart.ID + " class=dropbtn>" + bodyPart.Name + "</button>";
      $(".bodyButton").append(bodyName);
      


    }

  // function showDetailedBodyParts(data, curr) {
  //   for (var i = 0; i < data.length; i++) 
  //     var detailedBodyPart = data[i];
  //     var detailedBodyName = "<button class=dropdown-content>" + detailedBodyPart.Name + "</button>";
  //     $(curr).append(detailedBodyName);
  // }

    $(".dropbtn").click(function(){
      console.log("id here: " + this.id);
      var url2 = '/detailedBodypart/' + this.id;
      var curr = this;
      $.ajax(url2)
      .done(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) 
          var detailedBodyPart = data[i];
          var detailedBodyName = "<button class=dropdown-content>" + detailedBodyPart.Name + "</button>";
          curr.append(detailedBodyName);
      })
      .fail(function() {
        console.log('it failed');
      })
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
