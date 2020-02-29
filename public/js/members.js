$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  /// create an on click for submit button
$("submit").on("click", function(){
    var parkOptions = {
      camper: $("#").val()
    }
//// on click not complete


    
})

  // then execute this
  $.get('/api/parks').then(function (data) {
   console.log(data)
  })
})
