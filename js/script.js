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



$('.contacts_animation').focusin(function() {
	var elemHeight = $(this).css('height');
	var elemTop = parseInt(elemHeight) + 30;
	var elem = $(this).next().css({'top': -elemTop + 'px', 'color': '#23c869'});
	$(this).css({'border-color': '#23c869'});
	console.log(elem);
});
$('.contacts_animation').focusout(function() {
	var elemHeight = $(this).css('height');
	var elemTop = parseInt(elemHeight) - 5;
	$(this).next().css({'top': -elemTop + 'px',  'color': '#404040' });
	$(this).css({'border-color': '#404040'});
});







});