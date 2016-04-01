const ohHey = "Hello World";

console.log(ohHey);

// $('brandLogos').flickity()


var app = {};

$(function () {
	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
	});
	$(".list h3").click(function(){
			//slide up all the link lists
			$(".list ul").slideUp();
			//slide down the link list below the h3 clicked - only if its closed
			if(!$(this).next().is(":visible"))
			{
				$(this).next().slideDown();
			}
		})
	app.init();
});