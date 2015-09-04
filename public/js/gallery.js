$(document).ready(function(){

//Creating a Jiggle Function to rotate the images
	$.fn.jiggle = function(){

		var times = 10;
		//console.log(currentDeg);
		
		for (var i = 1; i <= times; i++){
			if(i % 2 === 0){
				$(this).animate({
					left: "+=10"
				},1000);
			}else{
				$(this).animate({
					left: "-=10"
				},1000);
			}
		}
	};


	$("#shake").click(function(){
		$(this).jiggle();
	})


//fade in text
	// $(".galleryImages").click(function(){
	// 	$(".text_fadein").fadeIn(2000);
	// })

})