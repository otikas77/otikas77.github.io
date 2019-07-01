(function($) {
  $(function() {

    //SLICK
    $('.carusel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="carousel-arr carousel-arr--prev"><i class="fas fa-angle-left fa-2x"></i></a>',
      nextArrow: '<a href="#" class="carousel-arr carousel-arr--next"><i class="fas fa-angle-right fa-2x"></i></a>',
      responsive: [
    {
      breakpoint: 816,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '',
          nextArrow: '',
          centerMode: true,
          centerPadding: '40px'
        }
      }
        ]
    });

    $('.news_carusel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="carousel-arr carousel-arr--prev"><i class="fas fa-angle-left fa-2x"></i></a>',
      nextArrow: '<a href="#" class="carousel-arr carousel-arr--next"><i class="fas fa-angle-right fa-2x"></i></a>',
      responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "",
        nextArrow: ""
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "",
        nextArrow: "",
        centerMode: true,
        centerPadding: '40px'
      },
    }
      ]
    });

    $('.intro').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '',
      nextArrow: '',
      autoplay: true,
      autoplaySpeed: 5000,
    });

    $('.drop_block').on('click', function(e) {
      e.preventDefault();
      $(":nth-child(1)", this).toggleClass("block-title_active")
      if($(":nth-child(1)", this).hasClass("block-title_active")){
        $(":nth-child(2)", this).show()
      } else{
        $(":nth-child(2)", this).hide()
      }
      $(this).toggleClass('drop_block_shadow')
    });

      $(".das ul li").on("click", function(e){
      e.preventDefault();
       if($('.drop_down_residental_menu', this).hasClass('drop_down_residental_menu_active')){
          $('.drop_down_residental_menu').removeClass('drop_down_residental_menu_active');
       }else{
        $('.drop_down_residental_menu').removeClass('drop_down_residental_menu_active');
        $(this).find('.drop_down_residental_menu').addClass("drop_down_residental_menu_active");
        }
    })

    $('.burger_style').on('touchstart', function(){
     $("body").toggleClass("body_overflow")
     $('.drop_down_nav').toggleClass('drop_down_nav_active')
     $('.close-burger_top').toggleClass('close-burger_top_active')
     $('.close-burger_middle').toggleClass('close-burger_middle_active')
     $('.close-burger_bottom').toggleClass('close-burger_bottom_active')
     $('.header__bottom').toggleClass('header_scroled_disabled')
     $('.main-nav').toggleClass('main-nav_active');
     $(window).on('resize', function(){
       if($(this).width() < 991) {
          $('.main-nav').removeAttr('style');
        }
     })
   })

   $('.main-nav ul li').on('click', function(){
     $('.main-nav ul li ul').css("display", "none")
     $(this).find('ul').css("display", "block")
   })

    //Header Padding top
      var padding = $("header").outerHeight()
      var windowHeight = window.innerHeight
      var introHeight = window.innerHeight - padding
      $(".intro .slick-list .slick-track .slick-slide div").css( "height", introHeight );
      $(".intro").css( "padding-top", padding );
      $(".small_intro").css( "padding-top", padding );
      $(".header_scroled_disabled").css("max-height", padding)
      $(".contacts_intro").css( "padding-top", padding );



    var CurrentScroll = 0;
    $(window).scroll(function(){

        var NextScroll = $(this).scrollTop();

        if (NextScroll > CurrentScroll){
            $('.header_scroled_disabled').addClass("header_scroled_disabled")
            $('.header_scroled_disabled').addClass("header_scroled")
            $(".header__drop_down").removeClass("header__drop_down--active")
            $('.header_scroled_disabled').css('overflow', "hidden")
        }
        else {
           $('.header_scroled_disabled').removeClass("header_scroled")
        }

        CurrentScroll = NextScroll;  //Updates current scroll position
    });


    //poup
    $('.carusel-btn').on('click touchstart', function(e){
      e.preventDefault();
      $('.popup_tariff').toggleClass("popup_tariff_active");
      $(".popup").show()
      var price = $(this).parent().find('.price p strong').text()
      var speed = $(this).parent().find('.tariff__plan p:nth-child(2) strong').text()
      $('.input_price').val(price)
      $('.input_speed').val(speed)
    })

     $('.close-popup-btn').on('click touchstart', function(e){
       e.preventDefault();
       $('.popup_tariff').toggleClass("popup_tariff_active");
       $(".popup").hide()
     })

     var headerHeight = $("header").outerHeight()
    $('.private a').on('click', function(){
      var ecoPrice = $(this).attr('data-eco-price')
      var ecoSpeed = $(this).attr('data-eco-speed')
      var fastPrice = $(this).attr('data-fast-price')
      var fastSpeed =$(this).attr('data-fast-speed')
      var ultraPrice = $(this).attr('data-ultra-price')
      var ultraSpeed =$(this).attr('data-ultra-speed')
      var offset = $(".chose_your_tariff_wrapper").offset().top
      var scroll = offset - headerHeight - headerHeight
      window.scrollTo({
        top: scroll,
        behavior: "smooth"
      });
      $('.eco_price p strong').text(ecoPrice)
      $('.eco_speed p:nth-child(2) strong').text(ecoSpeed +" Мбіт/c")
      $('.fast_price p strong').text(fastPrice)
      $('.fast_speed p:nth-child(2) strong').text(fastSpeed +" Мбіт/c")
      $('.ultra_price p strong').text(ultraPrice)
      $('.ultra_speed p:nth-child(2) strong').text(ultraSpeed +" Мбіт/c")
    })

    $('.multi-storey a').on('click', function(){
      var ecoPrice = $(this).attr('data-eco-price')
      var ecoSpeed = $(this).attr('data-eco-speed')
      var fastPrice = $(this).attr('data-fast-price')
      var fastSpeed =$(this).attr('data-fast-speed')
      var ultraPrice = $(this).attr('data-ultra-price')
      var ultraSpeed =$(this).attr('data-ultra-speed')
      var offset = $(".chose_your_tariff_wrapper").offset().top
      var scroll = offset - headerHeight - headerHeight
      window.scrollTo({
        top: scroll,
        behavior: "smooth"
      });

      $('.eco_price p strong').text(ecoPrice)
      $('.eco_speed p:nth-child(2) strong').text(ecoSpeed +" Мбіт/c")
      $('.fast_price p strong').text(fastPrice)
      $('.fast_speed p:nth-child(2) strong').text(fastSpeed +" Мбіт/c")
      $('.ultra_price p strong').text(ultraPrice)
      $('.ultra_speed p:nth-child(2) strong').text(ultraSpeed +" Мбіт/c")
    })



      var mymap = L.map('mapid').setView([49.8350824,23.8753589], 15);
      var marker = L.marker([49.8350824,23.8753589]).addTo(mymap);

      L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
      	maxZoom: 18,
      	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);

      function onMapClick(e) {
        window.location.href="https://goo.gl/maps/oJhaDsL2qT52"
      }
      mymap.on('click', onMapClick);
  })
})(jQuery);
