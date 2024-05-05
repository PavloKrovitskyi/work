const videoBg = document.querySelector('.hero__video-bg')
const heroSwiper = new Swiper('.hero__slider', {
  speed: 1000,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.hero__button--next',
    prevEl: '.hero__button--prev',
  },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },
})

heroSwiper.on('slideChange', function () {
  gsap.to(videoBg, 1, {
    currentTime: (videoBg.duration / (this.slides.length - 1)) * this.realIndex,
  })
});

heroSwiper.on('slideChangeTransitionStart', function () {
  videoBg.classList.add('change-slide')
})
heroSwiper.on('slideChangeTransitionEnd', function () {
  videoBg.classList.remove('change-slide')
})


//========================================================================================================================================================
document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
    e.preventDefault();
  }

})



