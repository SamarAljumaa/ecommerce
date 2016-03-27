'use strict';

var ohHey = "Hello World";

console.log(ohHey);

// $('brandLogos').flickity()

var app = {};

$(function () {
	$('.main-carousel').flickity({
		// options
		cellAlign: 'left',
		contain: true
	});
	app.init();
});