$(document).ready(function() {

	
	$("body").on("click", ".toggle-nav", function(e) {
		e.preventDefault();
		$("body").toggleClass("nav-opened");
	});

	$("body").on("click", ".nav-link", function(e) {
		e.preventDefault();
		$("body").toggleClass("nav-opened");
	});


$('body').on('click', '.scrollTo', function(e){
					e.preventDefault();
					var target = $(this).attr('href'),
						offset = Math.floor($(target).offset().top);
					$('body').toggleClass('nav-opened');
					$('html').animate({
						scrollTop: offset
					}, 500, function()
					{
						if (offset <= 0) {
							$('header').removeClass('navbar');
						} else {
							$('header').addClass('navbar');							
						}
					});
				})

	
	});


	