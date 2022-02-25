$('#datepicker').datepicker();

$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
});

$(function () {
    var target = $('h1');
    var brightness = $('.header-img');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 80 ) {
            target.addClass("fadeout");
            brightness.addClass("brightness");
            target.removeClass("fadeIn");
            brightness.removeClass("brightness-off");
        }

        if (scroll < 79 ) {
            target.removeClass("fadeout");
            brightness.removeClass("brightness");
            target.addClass("fadeIn");
            brightness.addClass("brightness-off");
        }

        $('#header-img').css({
            transform: 'scale('+(100 + scroll/10)/100+')',
            top: -(scroll/50)  + "%",
        });
    });
});