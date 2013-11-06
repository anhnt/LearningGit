(function($){
	$(function(){
		$('#menu').stop().superfish();


		// Revolution slider

		if ($.fn.cssOriginal != undefined)
		$.fn.css = jQuery.fn.cssOriginal;
		$('.fullwidthbanner').revolution({
			delay: 4000,
			startheight: 396,
			startwidth: 1170,

			hideThumbs: 200,

			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 5,

			navigationType: "both",
			navigationArrows: "nexttobullets",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "on",

			navOffsetHorizontal: 0,
			navOffsetVertical: 20,

			shadow: 1,
			fullWidth: "on"
		});
	})
})(jQuery);