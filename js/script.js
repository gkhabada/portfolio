

$(document).ready(function() {

	var w = $('.work').css('width');
	console.log(w);
	var h = parseInt(w) / 100 *56.25;
	$('.work').css('height', h + 'px');
$(window).resize(function(){	
	var w = $('.work').css('width');
	var h = parseInt(w) / 100 *56.25;
	$('.work').css('height', h + 'px');
});

$('.menu__link').click(function(event) {
	event.preventDefault();
	var link =  $(this).attr('href');
	$('html, body').animate({ scrollTop: $(link).offset().top }, 500);
});

});