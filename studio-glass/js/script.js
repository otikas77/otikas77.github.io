(function($) {
  $(function() {

    $('.carusel_items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="carousel-arr carousel-arr--prev"><i class="fas fa-chevron-left fa-2x"></i></a>',
      nextArrow: '<a href="#" class="carousel-arr carousel-arr--next"><i class="fas fa-chevron-right fa-2x"></i></a>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $(".take_number_btn").on("click", function(e){
          e.preventDefault();
        })

      $(".take_number_btn_main").on("click", function(){
         var number = $('.number-show').attr('data-number')
         $('.number-show').text(number)
      })

      $(".take_number_btn_main--mb").on('touchstart', function (){
        var numberMobile = $('.number-show--mb').attr('data-number')
        $('.number-show--mb').text(numberMobile)
      })

      $(".reg-btn").on("click", function(){
         $(".popup").fadeIn(500)
      })
      $(".close_a").on("click", function(e){
        e.preventDefault();
        $(".popup").fadeOut(500)
      })
      $(".reg-btn--mb").on("touchstart", function(){
         $(".popup").fadeIn(500)
      })
      $("input").on("touchstart click", function(e){
         e.preventDefault()
      })
  })

})(jQuery);
