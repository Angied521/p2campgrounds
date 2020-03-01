$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  /// create an on click for submit button
$("#searchBtn").on("click", function(){
     
//// on click not complete
    
   $.ajax({
     url:"api/parks/"+$("#state").val(),
     method:"GET"
   }).then(function(data){
     console.log(data)
   })

    
})

  // then execute this
  $.get('/api/parks').then(function (data) {
   console.log(data)
  })
})
