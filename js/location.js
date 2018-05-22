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

// THE ABOVE IS JESSICA'S CODE FOR THE DROPDOWN - USED FOR KEEPING SITE THE SAME LOOKING

var BTTF = false;




function BTTFMap()
{
	var setTitle = document.getElementById("restTitle");
	var calButton = document.getElementById("caliButton");

	calButton.onclick = calShow;
	var myCenterB = new google.maps.LatLng(49.1327775,-122.3168382);
	var mapCanvasB = document.getElementById("BTTFMapDisplay");
	var mapOptionsB = {center: myCenterB, zoom: 17};
	var mapB = new google.maps.Map(mapCanvasB, mapOptionsB);
	var markerB = new google.maps.Marker({position:myCenterB});
	markerB.setMap(mapB);

	setTitle.innerHTML = "Vancouver";
			
}
function calShow()
{
	var setTitle = document.getElementById("restTitle");
	var vanButton = document.getElementById("vancButton");
	
	vanButton.onclick = vanShow;
	
	var myCenterB = new google.maps.LatLng(34.141362,-118.349732);
	var mapCanvasB = document.getElementById("BTTFMapDisplay");
	var mapOptionsB = {center: myCenterB, zoom: 17};
	var mapB = new google.maps.Map(mapCanvasB, mapOptionsB);
	var markerB = new google.maps.Marker({position:myCenterB});
	markerB.setMap(mapB);
	
	setTitle.innerHTML = "California";
}
function vanShow()
{
	
	var setTitle = document.getElementById("restTitle");
	var calButton = document.getElementById("caliButton");

	calButton.onclick = calShow;
	
	var myCenterB = new google.maps.LatLng(49.1327775,-122.3168382);
	var mapCanvasB = document.getElementById("BTTFMapDisplay");
	var mapOptionsB = {center: myCenterB, zoom: 17};
	var mapB = new google.maps.Map(mapCanvasB, mapOptionsB);
	var markerB = new google.maps.Marker({position:myCenterB});
	markerB.setMap(mapB);

	setTitle.innerHTML = "Vancouver";
}


