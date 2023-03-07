var swiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 4
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true
});

var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 4
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 2200,
    disableOnInteraction: true
});

var swiper = new Swiper('.testimonials .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    pagination: {
        el: ".testimonials .swiper-pagination",
        clickable: true,
    },
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 6000,
    },
    loop: true,
});



