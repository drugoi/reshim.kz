$(document).ready(function() {
    var $menuLinks = $('.header__menu-link');

    if ($menuLinks.length) {
        $menuLinks.on('click', function() {
            var $this = $(this);
            var item = $this.data('section');
            var itemOffset = $('#' + item).offset().top;
            $('html, body').stop(true, true).animate({
                scrollTop: itemOffset
            }, 800);
        });
    }

    var $wishButton = $('.wish__button');

    if ($wishButton.length) {
        $wishButton.on('click', function() {
            var formOffsetTop = $('.contact').offset().top;
            $('html, body').stop(true, true).animate({
                scrollTop: formOffsetTop
            }, 800, function() {
                $('.contact__form-input').focus();
            });
        });
    }

    var $slider = $('.howitworks__magic-slider__items');
    if ($slider.length) {
        $slider.bxSlider({
            slideMargin: 44,
            slideWidth: '290px',
            minSlides: 3,
            maxSlides: 3,
            auto: true,
            pause: 10000,
            randomStart: true,
            pager: false,
            infiniteLoop: true,
            preloadImages: 'all',
            useCSS: true,
            nextText: '',
            nextSelector: '.howitworks__magic-slider__control._next',
            prevText: '',
            prevSelector: '.howitworks__magic-slider__control._prev',
        });
    }

    var $form = $('.contact__form');
    if ($form.length) {
        $form.find('.contact__form-input[type="tel"]').mask('+7 (999) 999 99 99', {
            placeholder: ' '
        });
        $form.on('submit', function(event) {
            event.preventDefault();
            var formData = $form.serialize();
            $.post('/api/send.php', formData, function(data) {
                $('.contact__form-button').hide();
                $('.contact__form-success').show();
            });
        });
    }
});