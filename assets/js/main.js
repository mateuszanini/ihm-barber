/*global $*/
function BarberShop() {

	$('.scrollspy').scrollSpy();
	$('.parallax').parallax();
	$(".button-collapse").sideNav();
	$('.tooltipped').tooltip({
		delay: 50
	});
	$('.slider').slider();
	$('.collapsible').collapsible();
	$('textarea#mensagem').characterCounter();
	$('.materialboxed').materialbox();

	//ALTERA COR DO TEXTO
	$('.item-menu').addClass('amber-text');

	//SCROOL TOP
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		}
		else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Evento do formulário
	$('#enviar').click(function (e) {
		e.preventDefault();
		Materialize.toast('Mensagem enviada!', 3000);
	});

	$('.em-breve').click(function () {
		Materialize.toast('Página em construção!', 3000);
	});

	$('#menu-servicos').click(function () {
		$('html, body').animate({
			scrollTop: $("#servicos").offset().top - 75
		}, 200);
	});
	$('#menu-produtos').click(function () {
		$('html, body').animate({
			scrollTop: $("#produtos").offset().top - 75
		}, 200);
	});
	$('#menu-galeria').click(function () {
		$('html, body').animate({
			scrollTop: $("#galeria").offset().top - 75
		}, 200);
	});
	$('#menu-contato').click(function () {
		$('html, body').animate({
			scrollTop: $("#contato").offset().top - 75
		}, 200);
	});

	var KEYBOARD = {
		esc: 27,
		enter: 13,
		left: 37,
		right: 39,
		pMai: 80,
		pMin: 112,
		kMai: 75,
		kMin: 107,
		jMin: 106,
		jMai: 74,
		lMin: 108,
		lMai: 76
	};

	var paused = 0;

	$(document).on('keydown', 'textarea', function (event) {
		if (event.which == KEYBOARD.enter && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			Materialize.toast('Mensagem enviada!', 3000);
			/*$(this).parents('form').submit();*/
		}
	});

	$(document).on('keyup.modal', function (event) {
		if (event.which == KEYBOARD.esc) {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		}
		else if (event.which == KEYBOARD.left || event.which == KEYBOARD.jMai || event.which == KEYBOARD.jMin) {
			$('.slider').slider('prev');
		}
		else if (event.which == KEYBOARD.right || event.which == KEYBOARD.lMai || event.which == KEYBOARD.lMin) {
			$('.slider').slider('next');
		}
		else if (event.which == KEYBOARD.kMai || event.which == KEYBOARD.kMin) {
			if (paused) {
				$('.slider').slider('start');
				paused = 0;
				$('#indicador-slider').html('<i class="fa fa-pause" aria-hidden="true"></i>');
			}
			else {
				$('.slider').slider('pause');
				paused = 1;
				$('#indicador-slider').html('<i class="fa fa-play" aria-hidden="true"></i>');
			}
		}
	});
}

BarberShop.prototype.consoleLog = function () {

};

window.onload = function () {
	window.barberShop = new BarberShop();
};
