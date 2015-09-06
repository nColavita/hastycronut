// $(document).ready(function (){
// 	$(".donut").slideUp(7000);
// 	$(".croissant").slideUp(8000);
// 	$(".cronut").delay(1000).slideDown(9000);
// });

$(document).ready(function(){

	// $(window).load(function() {
	// 	$(".cronut").delay(1000).show("slide", { direction: "down" }, 2000)
	// });

	
		$(".donut").delay(500).show("slide", { direction: "left" }, 1000);

		$(".croissant").delay(2000).show("slide", { direction: "right" }, 1000);

		$('#donutCrossaint_Master').delay(3000).fadeOut(2000);

		$('.cronut').delay(5000).fadeIn(1500);

		// $(".cronut").delay(4000).show("slide", { direction: "down" }, 1500)


})
