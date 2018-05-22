$(document).ready(function(){

//On page load, remove all the specials
$("[id^='group']").css("display", "none");


//Find the day of the week
var today = new Date;
var day = today.getDay();
var fullDate = today.toDateString();

//Display today's Date
$("#date span").html(fullDate);

//Display the special for today's date
$("#group-" + day).css("display", "block");


// NAV
// https://api.jquery.com/event.data/
var dropDowns = 2;

for (var i=1; i<=dropDowns; i++) {
  //on hover of the correct a, display the correct dropdown
  var link = ".drop-"+[i];
  $(link).mouseover({value: i}, function(e){
    $(".drop-down-content-"+[e.data.value]).css("display", "block");
    $(".drop-down-content-"+[e.data.value]).addClass("drop-down-style");
  });
  $(link).mouseleave({value: i}, function(e){
    $(".drop-down-content-"+[e.data.value]).css("display", "none");
  });
}//END NAV


  // NAVIGATION LINKS ON HOVER
  $('.dropdown-content a').hover(function () {
    $(this).css("color", "red");
  }, // Change to red
    function () {
      $(this).css("color", "white"); // Then back to white
    });

  $('.dropbtn').hover(function () {
    $(this).css("color", "red");
  }, // Change to red
    function () {
      $(this).css("color", "white"); // Then back to white
    });


})//END OF PAGE LOAD
