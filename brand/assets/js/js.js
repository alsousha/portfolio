(function(){
    const triangle = document.querySelector(".form__browse");
    const dropForm = document.querySelector(".drop__form-position");
    
    triangle.addEventListener("click", function(event){
        event.preventDefault;
        dropForm.classList.add("drop__active");
    })
    dropForm.addEventListener("mouseleave", function(){
        dropForm.classList.remove("drop__active");
    })

})();
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    
    
    $('.product__content-title').on('click', function(){
      $(this).toggleClass('triangle-close');
      $(this).toggleClass('triangle-open')
    $(this).next().slideToggle();
    });

    $('.single__product-wrap').slick({
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev btn"><img src="assets/img/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext btn"><img src="assets/img/arrow-right.svg" alt=""></button>',
      responsive: [
          {
            breakpoint: 969,
            settings: {
              arrows: false
            }
          },
      ]
    });


} );

  
