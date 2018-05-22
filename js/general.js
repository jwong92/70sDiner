// Sophia Vong's Javascript
// All general Javascript code that will be used with all pages
// TO SEAN: The way I'm generating my nav is gross and I could have done better, you may skip this array, please & thank you. :D
var nav = ["<div class='dropdown'><button class='dropbtn'>Contact</button><div class='dropdown-content'><a href='aboutus.html'>About Us</a><a href='../contact-us/contact-us.html'>Contact Us</a><a href='../careers/careers.html'>Careers</a><a href='locations.html'>Locations</a><a href='events.html'>Events & Bookings</a></div></div>", "<div class='dropdown'><button class='dropbtn'>Food</button><div class='dropdown-content'><a href='menu.html'>Menu</a><a href='../specials/specials.html'>Specials</a><a href='../gift-card/giftcard.html'>Gift Cards</a></div></div>", "", "", "<a id='sitemap' href='../sitemap/sitemap.html'>Site Map</a>", "<a href='../yahtzee/yahtzee.html'>Game</a>"];

// GENERATE NAVIGATION
for (var i = 0; i < nav.length; i++)
{ // Adding to nav_bar
  $('#navigation').append("<div class='nav-item'>" + nav[i] + "</div>");
}

// NAVIGATION LINKS ON HOVER
$('a').hover(function(){
  $(this).css("color", "red");}, // Chaning to red
  function(){
    $(this).css("color", "white"); // Then back to white
});

// FOOTER
var copyright = "&copy; Copyright The 70's Diner 2018";

$('#footer').append("<p>" + copyright + "</p>");
