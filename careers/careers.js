$(document).ready(function(){

  $(".pop-up").addClass("hidden");


  // NAV
  // https://api.jquery.com/event.data/
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


// JOB POSTINGS ON HOVER
var numJobs = 10;
for (var i=1; i<=numJobs; i++) {
  var selector = ".job-"+[i];
  $(selector).mouseover({value: i}, function(e){
    $(this).css("color", "#D92818");
  })
  $(selector).mouseleave({value: i}, function(e){
    $(this).css("color", "#000");
  })
}

//POP UP BOX
// number of jobs
var jobs = 10;
var jobClass = ".";

//Determine the class that was clicked
$("li a").on("click", function(){
  jobClass += $(this).attr("class");
  $(".pop-up").removeClass("hidden");
  fillJobDescr(jobClass);
  jobClass = ".";
});

// function that will associate the job clicked to the description - variables of title, id, manager, and description
function fillJobDescr(job) {
  var a = $(job+"-1").html();
  var b = $(job+"-2").html();
  var c = $(job+"-3").html();
  var d = job+"-4";
  $("#job-title").html(a);
  $("#job-id").html(b);
  $("#job-manager").html(c);
  $(d).appendTo($('#job-description'));
}

// Remove the description element
function removeDescr() {
  $("#job-description").empty();
}

// Close pop up box
$("#close").on("mouseover", function(){
  $("#close").css("cursor", "pointer");
});
$("#close").on("click", function(){
  removeDescr();
  $(".pop-up").addClass("hidden");
  $(".input-row input, textarea").val("");
  $("#sbt-mssg").empty();
});

$("#sbt-btn").on("mouseover",function(){
  $(this).css("cursor", "pointer");
})

//FORM VALIDATION

var myForm = document.forms["application-form"];
myForm.onsubmit = processForm;

function processForm(e){
  $("sbt-mssg").html("");

  //Capture form values
  var formControls = myForm.elements;
  var inName = formControls[1].value;
  var inPhone = formControls[2].value;
  var inEmail = formControls[3].value;

  // Validate form values
  // NAME
  if (inName === "" || inName === null) {
    $("#sbt-mssg").html("* Please fill all required fields.");
    return false;
  }

  //PHONE
  var phoneNum = /^\d{10}$/;
  if (inPhone === "" || inPhone === null) {
    $("#sbt-mssg").html("* Please fill all required fields.");
    return false;
  } else if (!phoneNum.test(inPhone)) {
    $("#sbt-mssg").html("Please enter a valid phone number.");
    return false;
  }

  // EMAIL
  var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (inEmail === "" || inEmail === null) {
    $("#sbt-mssg").html("* Please fill all required fields.");
    return false;
  } else if (!emailFilter.test(inEmail)) {
    $("#sbt-mssg").html("Please enter a valid email address.");
    return false;
  }

  $("#sbt-mssg").html("Thank you for applying!");
  $(".input-row input, textarea").val("");

  e.preventDefault();

}

}); //END PAGE LOAD
