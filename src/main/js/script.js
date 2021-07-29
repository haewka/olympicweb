$(document).ready(function(){
    $('.performance__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt="slide1" class="left-slick"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="slide1" class="right-slick"></button>',
        speed: 1000,
        fade: true
    });
  });
$(document).ready(function(){
    $('.performance__secondslider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/leftblack.png" alt="slide1" class="left-slick"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/rightblack.png" alt="slide1" class="right-slick"></button>',
        speed: 1000,
        fade: true
    });
});