(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());

$('.hero-slider').slick({
     slidesToShow: 1,
     prevArrow: $(".themes-carousel-controls .prev"),
     nextArrow: $(".themes-carousel-controls .next"),
     autoplay: true,
     dots: false,
     autoplaySpeed: 7000,
     fade: true
   });
