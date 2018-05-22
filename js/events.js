window.onload = function(){
  // Hide Confirmation Message
  $('#confirmation').addClass('hidden');

  // Form Handler
  var form_handle = document.forms.booking_reservation;

  // Date Picker, limit to current date and next 60 days
  $( "#date_input" ).datepicker({inline: true, minDate: 0, maxDate: 60});

  // Generating list options for number of guests and time of reservation
  var guest_option = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (var i = 0; i < guest_option.length; i++) {
    $("#numb_guests").append("<option value='"+ guest_option[i] +"'>"+ guest_option[i] +"</option>");
  }
  for (var i = 0; i < 24; i++){
    $("#time_input").append("<option value='" + i + ":00'>" + i + ":00</option><option value='" + i + ":30'>" + i + ":30</option>");
  }

  // Validation
  var name_val = /[a-zA-Z]+/;
  var email_val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Function to validate each item
  function validation (type, object, id, title){
    if (type.test(object) === false){
      $(id).css("background", "red");
      $('#error-msg').append("<p>Please enter a correct " + title + " value.</p>");
      return false;
    }
    else{
      $(id).css("background", "white");
    }
  }

  // Reservation Object to hold all input values
  var reservation = {
    fname: "",
    lname: "",
    email: "",
    numbGuests: 0,
    date: "",
    time: ""
  };

  function makeReservation() {
    $('#error-msg').html("");
    // Setting my object w/ Validation
    reservation.fname = cust_fname.value;
    validation (name_val, reservation.fname, '#cust_fname', "first name");

    reservation.lname = cust_lname.value;
    validation (name_val, reservation.lname, '#cust_lname', "last name");

    reservation.email = cust_email.value;
    validation (email_val, reservation.email, '#cust_email', "email")

    reservation.numbGuests = numb_guests.value;
    if (reservation.numbGuests === "0") {
      $('#numb_guests').css("background", "red");
      $('#error-msg').append("<p>Please enter the number of guests</p>");
      return false;
    }
    else{
       $('#numb_guests').css("background", "white");
       reservation.numbGuests = parseInt(numb_guests.value);
    }
    reservation.date = date_input.value; // Date format: "MM/DD/YYYY"
    if (reservation.date === ""){
      $('#date_input').css("background", "red");
      $('#error-msg').append("<p>Please select a reservation date.</p>");
      return false;
    }
    else{
       $('#date_input').css("background", "white");
       $('#reserved_date').append(reservation.date);
    }
    reservation.time = time_input.value; // Time Format: "HH:MM"
    if (reservation.time === "none"){
      $('#time_input').css("background", "red");
      $('#error-msg').append("<p>Please select a valid time slot.</p>");
      return false;
    }
    else{
      $('#time_input').css("background", "white");
      $('#reserved_time').append(reservation.time);
    }

    $('#booking').addClass('hidden');
    $('#confirmation').removeClass('hidden');
    return false;
  }

  form_handle.onsubmit = makeReservation;
  return false;
} // End of on load function
