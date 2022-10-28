let swiper1 = new Swiper('.swiper-header', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-header',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

    // Tag swiper
let swiper3 = new Swiper('.swiper-tag', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 7,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  let swiperPro = new Swiper('.swiper-pro', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 5,
    spaceBetween: 10,
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });