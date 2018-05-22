$(document).ready(function(){


  // NAV
  // // https://api.jquery.com/event.data/
  // var dropDowns = 2;

  // for (var i=1; i<=dropDowns; i++) {
  //   //on hover of the correct a, display the correct dropdown
  //   var link = ".drop-"+[i];
  //   $(link).mouseover({value: i}, function(e){
  //     $(".drop-down-content-"+[e.data.value]).css("display", "block");
  //     $(".drop-down-content-"+[e.data.value]).addClass("drop-down-style");
  //   });
  //   $(link).mouseleave({value: i}, function(e){
  //     $(".drop-down-content-"+[e.data.value]).css("display", "none");
  //   });
  // }//END NAV

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


// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/

//Function to determine the animation end
function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

//Determine when the animation ends, and then execute the
var animationEvent = whichAnimationEvent();

$(".fa-motorcycle").on(animationEvent, function() {
  $(".fa-motorcycle").addClass("hidden");
});

// FORM VALIDATION
var myForm = document.forms["contact-us-form"];
myForm.onsubmit = processForm;

function processForm(e) {
  var formHandler = myForm.elements;
  var inFirst = formHandler[0].value;
  var inLast = formHandler[1].value;
  var inNum = formHandler[2].value;
  var inEmail = formHandler[3].value;
  var comment = formHandler[4].value;

  //NAME
  if (inFirst === "" || inFirst === null) {
    $(".sent-mssg").html("* Please fill all required fields.");
    return false;
  }

  if (inLast === "" || inLast === null) {
    $(".sent-mssg").html("* Please fill all required fields.");
    return false;
  }

  // EMAIL
  var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (inEmail === "" || inEmail === null) {
    $(".sent-mssg").html("* Please fill all required fields.");
    return false;
  } else if (!emailFilter.test(inEmail)) {
    $("#sbt-mssg").html("Please enter a valid email address.");
    return false;
  }

  //COMMENTS
  if (comment === "" || comment === null) {
    $(".sent-mssg").html("* Please fill all required fields.");
    return false;
  }

  e.preventDefault();

  // on click of the submit button. show the car and add the animation
  //on click of the subtmit button, validate the form
  $(".sent-mssg").html("Got it! We'll get back to you asap!");
    $("i").removeClass("hidden");
    $(".fa-motorcycle").css({
      "animation":"motorcycle 3s linear"
    });
    var showMssg = setInterval(sent, 2000);

}


// Function the add a confirmation message
function sent() {
  $(".sent-mssg").html("Got it! We'll get back to you asap!");
}

// Function to clear the form
function clear() {
  $("#myForm")[0].reset();
}

// on click of the clear button, clear the page
  $("#clear-btn").on("click", function(){
    clear();
  });





});//END PAGE LOAD
