$(document).ready(function(){
	$('li').on('mouseover', function(){
		$(this).css('color', '#E6DFD9');
		$(this).on('mouseout', function(){
			$(this).css('color', '#8C6B4D')
		})
	})
})



//#8C6B4D