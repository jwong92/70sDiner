// https://stackoverflow.com/questions/12470879/a-function-inside-a-for-loop-with-jquery-and-javascript -- for click handling
$(document).ready(function(){

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

//CLEAR FORM
$("#myForm")[0].reset();


//BACKGROUND COLOR
$("#darkblue").on("click", function(){
  backgroundColor("#50BFBF");
});

$("#teal").on("click", function() {
  backgroundColor("#03A696");
});

$("#mustard").on("click", function() {
  backgroundColor("#DBCA69");
});

$("#mauve").on("click", function() {
  backgroundColor("#A8C3FF");
})

//function to change the background color
function backgroundColor(color) {
  $(".preview").css("background", color);
}

//FONTS
var fonts = ["arial", "impact", "helv", "georgia"];
for (var i=0; i<fonts.length; i++) {
  var selector = "#" + fonts[i];
  $(selector).on("click", {id:i}, function (e){
    changeFont(fonts[e.data.id]);
  })
}

//Function to change the font
function changeFont(font) {
  $(".preview h4").css("font-family", font);
  $(".from-expiry-container").css("font-family", font);
}

// ICONS
var iconArr = ["fa-car", "fa-coffee", "fa-cutlery", "fa-heart"];

for (var i=0; i<iconArr.length; i++) {
  var selector = "."+iconArr[i];
  $(selector).on("click", {id:i}, function(e) {
    removeIcon();
    $(".price-icon-preview-container").css("justify-content", "space-around");
    addIcon(iconArr[e.data.id]);
  })
}

//Add new class
function addIcon(icon) {
  $(".icon-preview-container span").addClass("fa " + icon);
}
// Remove previous class
function removeIcon() {
  $(".icon-preview-container span").removeAttr("class");
}

// TO NAME
//Capture the name being inputted
var forName;
$("#message").keyup(function() {
  forName = $("#message").val();
  addName(forName);
})

// function to change name only if there is a value inputted
function addName(fname){
  if(fname.length <= 0) {
    $("#name").html("________");
  }
  else {
    $('#name').html(fname);
  }
}

//FROM NAME
// Capture the name being entered
var e;
$("#in-from").keyup(function(){
   e = $("#in-from").val();
  fromName(e);
})

//function to add preview name
function fromName(name) {
  if(name.length <= 0) {
    $("#from").html("___________");
  }
  else {
    $("#from").html(name);
  }
}

// PRICE
// Round the entered amount
var round;
$("#dollar").keyup(function() {
  var price = $("#dollar").val();
  round = Math.round(price);
  addPrice(round);
})

//function to add price
function addPrice(amount) {
  // $(".price-preview-container span").html(amount);
  if(amount <= 0) {
    $(".price-preview-container span").html("");
  }
  else {
    $(".price-preview-container span").html("$"+amount);
  }
}

// Expiry Date
var todaysDate = new Date();
var dayOfYear = (todaysDate.getFullYear()) + 1;
var dayOfMonth = (todaysDate.getMonth() + 1);
var dayOfDate = todaysDate.getDate();
var expiryDate;

function changeDate(){
  if (dayOfMonth < 10) {
    dayOfMonth = "0" + dayOfMonth;
  }

  if (dayOfDate < 10) {
    dayOfDate = "0" + dayOfDate;
  }
    expiryDate = (dayOfYear + "/" + dayOfMonth + "/" + dayOfDate);
}

changeDate();

$("#date").html(expiryDate);

// CLEAR BUTTON
$("#clear-btn").on("click", function(){
  backgroundColor("#50BFBF");
  changeFont("impact");
  removeIcon();
  addName("");
  fromName("");
  addPrice(-1);
  $("#myForm")[0].reset();
  $("#main-design > p:last-of-type").html("");
  $(".price-icon-preview-container").css("justify-content", "center");
})

// FORM VALIDATION
var form = document.forms["gc-form"];
form.onsubmit = processForm;

function processForm(e) {
  $("#main-design > p:last-of-type").html("");

  //Capture form values
  var formControls = myForm.elements;
  var forName = formControls[0].value;
  var fromName = formControls[1].value;
  var amt = formControls[2].value;
  var phone = formControls[3].value;

  // Validate Names
  if ((forName === "" || forName === null) || (fromName === "" || fromName === null)){
    $("#main-design > p:last-of-type").html("Please enter a To/From name.");
    return false;
  }

  //Validate amount
  if ((amt === "" || amt === null) || (amt <= 0 || amt > 5000)){
    $("#main-design > p:last-of-type").html("Sorry, giftcards must be between $1 to a maximum of $5000");
    return false;
  }

  //Validate Phone Number
  var phoneNum = /^\d{10}$/;
  if (phone === "" || phone === null) {
    $("#main-design > p:last-of-type").html("Please enter a phone number so we can reach ya cool cat!");
    console.log("okay");
    return false;
  } else if (!phoneNum.test(phone)) {
    console.log("works");
    $("#main-design > p:last-of-type").html("Please make sure the phone number you entered is valid");
    return false;
  }

  $("#main-design > p:last-of-type").html("Far out! Your gift card is being made. We'll call you when it's ready.");

  e.preventDefault();
}

})//End Page Load
