//SLIDE BOX
$(function() {

    $('.bxCarrosel').bxSlider({

        mode: 'horizontal',
        swipeThreshold: true,
        touchEnabled: true,
        oneToOneTouch: true,
        auto: true,
        controls: false,
        infiniteLoop: true,
        autoHover: true,
        slideWidth: 500,
        responsive: true,
        minSlides: 1,
        maxSlides: 3,
        shrinkItems: false,
        speed: 2000

    });

});