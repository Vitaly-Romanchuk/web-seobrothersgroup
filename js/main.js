(function ($) {
  "use strict";

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(function () {
    slickInit();
    AOS.init();
    AOS.init({ disable: "mobile" });
  });


  (function (i) {
    "use strict";
    i(window).on("load", function () {
      new Swiper(".team-group-carousel .swiper-container", {
        speed: 2500,
        autoplay: {
          delay: 1,
        },
        slidesPerView: 2,
        spaceBetween: 80,
        loop: !0,
        preloadImages: !1,
        lazy: !0,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          767: { slidesPerView: 3, spaceBetween: 20 },
          991: { slidesPerView: 4, spaceBetween: 30 },
        },
        on: {
          touchStart: function () {
            i(".team-group-image img").addClass("hold");
          },
          touchEnd: function () {
            i(".team-group-image img").removeClass("hold");
          },
          slideChange: function () {
            i(".team-group-image img").removeClass("hold");
          },
        },
      });
    });
  })(jQuery);

  // ------------------------ Slick Slider

  function slickInit() {
    if ($.exists(".bk-slider")) {
      $(".bk-slider").each(function () {
        var $ts = $(this).find(".bk-slider_container");
        var $slickActive = $(this).find(".bk-slider_wrapper");
        var autoPlayVar = parseInt($ts.attr("data-autoplay"), 10);
        var autoplaySpdVar = 3000;
        if (autoPlayVar > 1) {
          autoplaySpdVar = autoPlayVar;
          autoPlayVar = 1;
        }
        var speedVar = parseInt($ts.attr("data-speed"), 10);
        var loopVar = Boolean(parseInt($ts.attr("data-loop"), 10));
        var centerVar = Boolean(parseInt($ts.attr("data-center"), 10));
        var variableWidthVar = Boolean(
          parseInt($ts.attr("data-variable-width"), 10)
        );
        var paginaiton = $(this).children().hasClass("cs-pagination");
        var slidesPerView = $ts.attr("data-slides-per-view");
        if (slidesPerView == 1) {
          slidesPerView = 1;
        }
        if (slidesPerView == "responsive") {
          var slidesPerView = parseInt($ts.attr("data-add-slides"), 10);
          var lgPoint = parseInt($ts.attr("data-lg-slides"), 10);
          var mdPoint = parseInt($ts.attr("data-md-slides"), 10);
          var smPoint = parseInt($ts.attr("data-sm-slides"), 10);
          var xsPoing = parseInt($ts.attr("data-xs-slides"), 10);
        }
        // Fade Slider
        var fadeVar = parseInt($($ts).attr("data-fade-slide"));
        fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

        // Slick Active Code
        $slickActive.slick({
          autoplay: autoPlayVar,
          centerMode: centerVar,
          fade: fadeVar,
          prevArrow: $(this).find(".bk-left_arrow"),
          nextArrow: $(this).find(".bk-right_arrow"),
          appendDots: $(this).find(".bk-pagination"),
          slidesToShow: slidesPerView,
          variableWidth: variableWidthVar,
            responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: lgPoint,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: mdPoint,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: smPoint,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: xsPoing,
              },
            },
          ],
        });
      });
    }
  }

  // Go to Top
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });

  // ------------------------ Navigation scroll
  $(window).on("scroll", function () {
    var sticky = $(".sticky-menu"),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 });
    return false;
  });

  // -------------------- Remove Placeholder
  $("input,textarea").each(function () {
    $(this).data("holder", $(this).attr("placeholder"));
    $(this).on("focusin", function () {
      $(this).attr("placeholder", "");
    });
    $(this).on("focusout", function () {
      $(this).attr("placeholder", $(this).data("holder"));
    });
  });

  // -------------------- Preloader
  $(window).on("load", function () {
    function handlePreloader() {
      if ($(".preloader").length) {
        $(".preloader").delay(200).fadeOut(500);
      }
    }
    handlePreloader();

    // ------------ Develop Sliders -----------
    let SwiperBottom = new Swiper(".develop-slider .swiper-container", {
      spaceBetween: 0,
      centeredSlides: true,
      slidesPerView: 6,
      speed: 3000,
      autoplay: {
        delay: 1,
      },
      loop: true,
      allowTouchMove: false,
      disableOnInteraction: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        787: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });

    $("body").on("click", ".cookie_disclaimer .close", function () {
      $(".cookie_disclaimer").fadeOut(300, function () {
        $(this).remove();
      });
    });

    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 2000) $(".cookie_disclaimer").addClass("active");
      if (scrolled < 2000) $(".cookie_disclaimer").removeClass("active");
    });

    // ------------------------------- AOS
    if ($("[data-aos]").length) {
      AOS.init({
        duration: 800,
        mirror: true,
        once: true,
        offset: 50,
      });
    }
  }); 
})(jQuery);
