$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  /// create an on click for submit button

  // then execute this
  $.get('/api/parks').then(function (data) {
   console.log(data)
  })
})
