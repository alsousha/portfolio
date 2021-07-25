$(function(){
    $('.banner-section__slider').slick({
        dots: true, //круглишки на слайдере
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="accets/img/elements/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="accets/img/elements/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 969,
              settings: {
                arrows: false
              }
            },
        ]
    });
            
  
    
    
        
    //tabs
    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('is-active'); //siblings() - поиск по братьям
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('is-active'); //parent()-.tabs; siblings() - брат родителя (.search__content); find('div') - .tabs-content; closest()-ищет вверх до первого совпадения
        $(this).addClass('is-active');
        $($(this).attr('href')).addClass('is-active');

        //чтобы слайде на др табе загрузился при переходе
        $('.product-slider').slick('setPosition');
    })

    //favorite-icon is active
    $('.icon-favorite').on('click', function(){
        $(this).toggleClass('is-active');
    })

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="accets/img/elements/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="accets/img/elements/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false,
                    dots: true,

                }
            },
            {
                breakpoint: 1153,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 856,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }

        ]
    
    })

    //activate formstyler plagin
    $('.filter-style').styler();

    //arrow-up / down in aside-form
    $('.filter__item-drop, .filter__extra').on('click', function(){
        $(this).toggleClass('is-active');
        $(this).next().slideToggle('200'); //show/hidden next element (.aside-filter__content)
    })

    //form-range
    var $range = $(".js-range-slider");
    var $inputFrom = $(".js-input-from");
    var $inputTo = $(".js-input-to");
    var instance;
    var min = 0;
    var max = 1200000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 100000,
        to: 500000,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });
    //end form-range

    $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('is-active');
        $('.catalog__filter-btnline').removeClass('is-active');
        $('.product-item__wrapper').removeClass('line');
    });
    $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('is-active');
        $('.catalog__filter-btngrid').removeClass('is-active');
        $('.product-item__wrapper').addClass('line');
    });


    //rateYo
    $(".rate-Yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        spacing: "7px",
        starWidth: "23px"
      });

    //menu-mobile
    $('.menu__btn').on('click', function() {
        
        var $this = $('.menu-mobile__header-top');
        if ($this.hasClass('is-active')) {
        $this.removeClass('is-active');
        $(document).off('click.menu');
        
        } else {
            $this.addClass('is-active');
            $(document).on('click.menu', function(e) {
                if (($(e.target).closest('.menu-mobile__header-top').length === 0)
                && $(e.target).closest('.menu__btn').length === 0) {
                $('.menu-mobile__header-top').removeClass('is-active');
                $(document).off('click.menu');
                }
            });
        }

    });
    $('body').on('keydown', function(e) {
        if (e.keyCode === 27) {
            $('.menu-mobile__header-top').removeClass('is-active');
        }
    });

    //slideToggle in footer
    //чтобы в десктопе не применялся скрипт, для заголовка укажем: pointer-events: none; (auto - чтобы работал)

    $('.footer__top-drop').on('click', function(){
        $(this).next().slideToggle();
    });
    $('.catalog__btn-mobile').on('click', function(){
        $(this).next().slideToggle(1000);
    });

    //show/hidden shop-address
    $('.all-address__show').on('click', function(){
        $('.card__list-itemcontent:not(:first)').addClass('is-active');
        $(this).css('display', 'none');
        $('.all-address__hidden').css('display', 'block');
    });
    $('.all-address__hidden').on('click', function(){
        $('.card__list-itemcontent:not(:first)').removeClass('is-active');
        $(this).css('display', 'none');
        $('.all-address__show').css('display', 'block');
    });
    
    $('.aside-filter__form').on('change', function(){
        if($(this).is(':checked')) $('.fiter-btn_send').attr('disabled', false);
        else $('.btn').attr('disabled', true);
      });
});