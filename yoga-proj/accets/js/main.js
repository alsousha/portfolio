/*libs start*/
;(function() {
  //ф-ция проверяет поддержку webp браузером
  var canUseWebP = function() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
  };
  
  var isWebpSupported = canUseWebP();
//ус браузер не поддерж webp подставляется url jpg
  if (isWebpSupported === false) {
    var lazyItems = document.querySelectorAll('[data-bg-replace-webp]');

    for (var i = 0; i < lazyItems.length; i += 1) {
      var item = lazyItems[i];

      var dataSrcReplaceWebp = item.getAttribute('data-bg-replace-webp');
      if (dataSrcReplaceWebp !== null) {
        item.setAttribute('data-bg', dataSrcReplaceWebp);
      }
    }
  }

  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  })
  
})();
/*libs end*/
$(function(){
    $('.classes-slider').slick({
      // lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,

        infinite: true,
        
        prevArrow: '<button class="class__slider-btn class__slider-btnprev"><img src="accets/img/svg/arrow-left.svg" alt="arrow"></button>',

        nextArrow: '<button class="class__slider-btn class__slider-btnnext"><img src="accets/img/svg/arrow-right.svg" alt="arrow"></button>',

        responsive: [

            {

              breakpoint: 1245,
              

              settings: {
                dots: true,
                arrows: false,

                slidesToShow: 3,

              }

            },
            {

                breakpoint: 928,
  
                settings: {
                  dots: true,
                  arrows: false,
  
                  slidesToShow: 2,
  
                }
  
              },
              {

                breakpoint: 600,
  
                settings: {
                    dots: true,
                    arrows: false,
  
                    slidesToShow: 1,
  
                }
  
              },

        ]

    });

    //menu-mobile
    $('.menu__btn').on('click', function() {
        
      var $this = $('.menu-mobile');
      if ($this.hasClass('is-active')) {
      $this.removeClass('is-active');
      $(document).off('click.menu');
      
      } else {
          $this.addClass('is-active');
          $(document).on('click.menu', function(e) {
              if (($(e.target).closest('.menu-mobile').length === 0)
              && $(e.target).closest('.menu__btn').length === 0) {
              $('.menu-mobile').removeClass('is-active');
              $(document).off('click.menu');
              }
          });
      }
});
  $('body').on('keydown', function(e) {
      if (e.keyCode === 27) {
          $('.menu-mobile').removeClass('is-active');
      }
  });
  $('.btn-close').on('click', function(){
    $('.menu-mobile').removeClass('is-active');
  })

});