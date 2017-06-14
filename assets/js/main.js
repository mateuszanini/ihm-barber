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

	//ALTERA COR DO TEXTO
	$('.item-menu').addClass('amber-text');

	//SCROOL TOP
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		}
		else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Evento do formulário
	$('#enviar').click(function(e){
		e.preventDefault();
		 Materialize.toast('Mensagem enviada!', 3000, 'rounded');
	});
}

BarberShop.prototype.consoleLog = function() {

};

window.onload = function() {
	window.barberShop = new BarberShop();
};
