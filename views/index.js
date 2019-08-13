$(document).ready(function() {
  // global variables
  var bodyPartIds = [];
  
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

  function addItem(curr) {
    $(curr).addClass("dropdown-content").removeClass("dropdown-content2");
  }

  function removeItem(curr) {
    $(curr).addClass("dropdown-content2").removeClass("dropdown-content");
  }


  function refreshListeners() {
    $(".dropdown-content2").click(function(event){
      event.preventDefault(event);
      for( var i = 0; i < bodyPartIds.length; i++){ 
        if ( arr[i] === this.id) {
        arr.splice(i, 1); 
        }
      }
       console.log(bodyPartIds);
    });

    $(".dropdown-content").click(function(event){
      event.preventDefault(event);
      removeItem(this);
      addItem(this);
      bodyPartIds.push(this.id);
       console.log(bodyPartIds);
      
    });   
    
  }

    $(".dropbtn").click(function(){
      console.log("id here: " + this.id);
      var url2 = '/detailedBodypart/' + this.id;
      var curr = this;
      $.ajax(url2)
      .done(function(data) {
        console.log(data);
        showDetailedBodyParts(data, curr);
        refreshListeners();
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
