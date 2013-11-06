(function($){
	$(function(){
		$('#menu').stop().superfish();


		// Revolution slider

		if ($.fn.cssOriginal != undefined)
		$.fn.css = jQuery.fn.cssOriginal;
		$('.fullwidthbanner').revolution({
			delay:9000,												
				startwidth:890,
				startheight:450,
				
				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
				
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:4,
				
				hideThumbs:200,
				navigationType:"both",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
				navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
				navigationStyle:"round",				//round,square,navbar
				
				touchenabled:"on",						// Enable Swipe Function : on/off
				
				navOffsetHorizontal:0,
				navOffsetVertical:20,
				
				fullWidth:"on",
				
				shadow:0
		});
	})
})(jQuery);