$(document).ready(function() {

	var w = $('.work').css('width');
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
		$('html, body').animate({ scrollTop: $(link).offset().top }, 800);
	});

	$('.scroll-top').click(function(event) {
		$('html, body').animate({ scrollTop: 0}, 800);
	});

	$(document).scroll(	function () {
		var top = $("html, body").scrollTop();
		if (top > 200) {
			$('.scroll-top').fadeIn(500);
		} else {
			$('.scroll-top').fadeOut(500);
		}
	});







	$('.contacts_animation').focusin(function() {
		var elemHeight = $(this).css('height');
		var elemTop = parseInt(elemHeight) + 30;
		var elem = $(this).next().css({'top': -elemTop + 'px', 'color': '#23c869'});
		$(this).css({'border-color': '#23c869'});
	});
	$('.contacts_animation').focusout(function() {
		var elemHeight = $(this).css('height');
		var elemTop = parseInt(elemHeight) - 5;
		v = $(this).val();
		if (v) {
			$(this).next().css({'color': '#404040' });
			$(this).css({'color': '#27b262', 'font-family': 'mullerbold'});
		} else {
			$(this).next().css({'top': -elemTop + 'px',  'color': '#404040' });
		}
		$(this).css({'border-color': '#404040'});
	});





	$('.section').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});


let showWork = 0;
function showWorkFunc(){
	for (var i = 0; i < 8; i++) {
		$(elem[showWork]).fadeIn(1000);
		showWork++;
	}
	if($(elem).length <= showWork) {
		$('.portfolio__show-more').hide(200);
	}
};


let elem = $(".works").children();
elem.hide();
$('.portfolio__show-more').on("click", showWorkFunc);
showWorkFunc();

	/*
	setTimeout (function(){
		$('body, .header, .portfolio, .about-me, .contacts, h1, h2, h3, p, span, .menu__home').removeClass('white').addClass('black');
		$('.header__link, .portfolio__show-more ').removeClass('.white_button').addClass('.black_button');
	}, 3000);
	*/


	$(function() {
	    $("#contacts__submit").click(function() {
					let formData = new FormData();
					formData.append("name", $("#contacts__name").val());
					formData.append("email", $("#contacts__email").val());
					formData.append("telegram", $("#contacts__telegram").val());
					formData.append("message", $("#contacts__message").val());

					$.ajax({
						type: "POST",
						url: "../formdata.php",
						data: formData,
						success: function(){
							$("#contacts__name, #contacts__email, #contacts__telegram, #contacts__message").val('');
							console.log('success');
						}
					});
	        return false;
	    });
	});

/* footer date */


      let now = new Date();
     	$(".footer_date").text(now.getFullYear());


});
