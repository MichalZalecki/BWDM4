;(function ($) {
    new WOW().init({
        offset: 200
    });

    $('.js-drawable-path').each(function (index, elem) {
        $path = $(this);
        $path.attr({
            'stroke-dasharray' : $path.get(0).getTotalLength(),
            'stroke-dashoffset' : $path.get(0).getTotalLength(),
        });
    });

    // $('html').addClass('touch').removeClass('no-touch');

    var flipContainerEvens = 'mouseenter mouseleave'
    !$('html').hasClass('touch') || (flipContainerEvens = 'click');

    $('.flip-container').on(flipContainerEvens, function (e) {
        $(this).toggleClass('is-flipped');
    });
})(jQuery);