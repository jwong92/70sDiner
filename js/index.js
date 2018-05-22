// Hide all elements until js loads
document.body.style.display = "none";

window.onload = function(){
  // Greeting customers apon entering the site.
  alert("Welcome to The 70's Diner Website!");
  document.body.style.display = "block";

  // Declaring variable for flicker
  var intSets;

  // Function to generate random number based on my choosing
  function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Flicker Functions
  function flickering() {
    // # of Flickers depending on randomizer
    for (var i = 1; i < intSets; i++){
      setTimeout(function () { // Flickers by opacity changing
          $('.flicker').animate({opacity: 0.25},100);
          $('.flicker').animate({opacity: 1},100);
      }, 60);
    }
  }

  function loop(){
    var newInterval = randInt(3000, 5000); // Randomizing interval time between 4 & 7 seconds
    intSets = randInt(1, 3); // Randomizing number of flickers between 1 & 3
    setTimeout(function(){
      flickering(); // Activate the flicker
      loop(); // Start loop again
    }, newInterval);
  }

  // Start loop on page load
  loop();
}
