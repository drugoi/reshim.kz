$(document).ready(function() {
  var $slider = $('.howitworks__magic-slider__items');
  
  if ($slider.length) {
    $slider.bxSlider({
		  slideMargin: 44,
		  slideWidth: '290px',
		  minSlides: 3,
		  maxSlides: 3,
		  auto: true,
		  randomStart: true,
		  controls: false,
		  pager: false,
		  infiniteLoop: true,
		  preloadImages: 'all',
		  useCSS: true
    });
  }
});