//ON LOAD
window.onload = pageReady;
function pageReady(){
  // VARIABLES: using a different method than JQuery
	var banner = document.getElementById("bannerImg");
	var image1 = document.getElementById("img1");
	var image2 = document.getElementById("img2");
	var image3 = document.getElementById("img3");
	var image4 = document.getElementById("img4");

  // Changing the source of the image
	function switchImg1(){banner.src = image1.src;}
	function switchImg2(){banner.src = image2.src;}
	function switchImg3(){banner.src = image3.src;}
	function switchImg4(){banner.src = image4.src;}

//Reset Image
	function resetBanner(){banner.src = "../images/diner2.jpg";}

//On Mouse Over, Change img, then change back
	image1.onmouseover = switchImg1;
	image2.onmouseover = switchImg2;
	image3.onmouseover = switchImg3;
	image4.onmouseover = switchImg4;
	image1.onmouseout = resetBanner;
	image2.onmouseout = resetBanner;
	image3.onmouseout = resetBanner;
	image4.onmouseout = resetBanner;
}
