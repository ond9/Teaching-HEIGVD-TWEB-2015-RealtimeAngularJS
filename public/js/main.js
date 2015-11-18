$( document ).ready(function() {
	
	
	
	$('.nav li').removeClass('active');
	
	$('.navbar-brand').click(function(){
		$('.nav li').removeClass('active');
	});
	
	$('.nav li').click(function(){
		 $(this).addClass('active').siblings().removeClass('active');
	});
	
});



