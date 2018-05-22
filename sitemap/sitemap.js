$(document).ready(function(){
	
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
  }
  
});

window.onload = documentReady;



function documentReady(){
	
	var listOfLinks = document.getElementById("linkList");
	
	listOfLinks.classList.add("linkStyle");
	
	
}
