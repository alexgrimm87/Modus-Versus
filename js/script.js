  $(function() {
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,

      responsive: [{
        breakpoint: 1024,
        settings: {
          arrows:false
        }
      }
      ]
    });

    $('.jquery-line').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      adaptiveHeight: true,
      arrows: false,

      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    $('.next').on('click', function(e) {
      e.preventDefault();
      $('.jquery-line').slick('slickNext');
    });

    $('.prev').on('click', function(e) {
      e.preventDefault();
      $('.jquery-line').slick('slickPrev');
    });

    $('.items-wrap').matchHeight({
      property: 'height',
    });

    $('.js-show-menu').on('click', function(e) {
      e.preventDefault();
      var menu = $('.main-menu');

      if ($('.js-show-menu').hasClass('active')) {
        menu.slideUp('fast');
        $(this).removeClass('active');
      } else {
        menu.slideDown('fast');
        $(this).addClass('active');
      }
    })
  });
