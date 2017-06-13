function BarberShop() {
    
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

    $('.item-menu').addClass('amber-text');

    this.consoleLog();
}

BarberShop.prototype.consoleLog = function () {
    
};

window.onload = function () {
    window.barberShop = new BarberShop();
};