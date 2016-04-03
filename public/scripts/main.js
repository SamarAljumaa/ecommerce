"use strict";

var ohHey = "Hello World";

console.log(ohHey);

// $('brandLogos').flickity()

var app = {};

$(function () {
	var toggles = document.querySelectorAll(".c-hamburger");
	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};
	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
			$('.mobileMenu').fadeToggle(), $(this).toggleClass('open');
		});
	};
	$('.main-carousel').flickity({
		// options
		cellAlign: 'left',
		contain: true
	});
	$(".list h3").click(function () {
		//slide up all the lists
		$(".list ul").slideUp();
		//slide down the list below the h3 clicked - only if its closed
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	});
	app.init();
});