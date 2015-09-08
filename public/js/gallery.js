$(document).ready(function(){

//Creating a Jiggle Method to shift the images
	$.fn.jiggle = function(){

		var times = 6;
		//console.log(currentDeg);
		
		for (var i = 1; i <= times; i++){
			if(i % 2 === 0){
				$(this).animate({
					left: "+=10"
				},100);
			}else{
				$(this).animate({
					left: "-=10"
				},100);
			}
		}
	};

//Calling the jiggle Method on the image selected
	$(".shake").click(function(){
		$(this).jiggle();
	})


// fade in text
	$("#galleryImage1").click(function(){
		$("#text_fadein1").delay(300).fadeIn(1000);
	})

	$("#galleryImage2").click(function(){
		$("#text_fadein2").delay(300).fadeIn(1000);
	})

	$("#galleryImage3").click(function(){
		$("#text_fadein3").delay(300).fadeIn(1000);
	})

	$("#galleryImage4").click(function(){
		$("#text_fadein4").delay(300).fadeIn(1000);
	})

	$("#galleryImage5").click(function(){
		$("#text_fadein5").delay(300).fadeIn(1000);
	})

	$("#galleryImage6").click(function(){
		$("#text_fadein6").delay(300).fadeIn(1000);
	})


});