$(document).ready(function() {
	$(window).load(function() {
		$(".form-style-6").show("slide", { direction: "right" }, 1000)
	});
		

    
	var theTotal = 0;
	$('button').click(function(){
	   theTotal = Number(theTotal) + Number($(this).val());
	    $('.total').text("Total: $"+theTotal);        
	});
	
	$('.total').text("Total: $"+theTotal);        

})