/* top_btn */
const topBtn = document.querySelector('.top_btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    gsap.to(topBtn, 0.3, {
      opacity: 1
    })
  } else {
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  }
});

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 0
  })
});

const imgEls = document.querySelectorAll('.img_box>div');
imgEls.forEach((imgEl, index) => {
  gsap.to(imgEl, 2, {
    delay: index * 0.5,
    opacity: 1
  })
});

const txtEls = document.querySelectorAll('.txt_box>div');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 250) {
    gsap.to(txtEls[0], 0.5, {
      opacity: 1
    })
    gsap.to(txtEls[1], 0.5, {
      delay: 1,
      opacity: 1
    })
    gsap.to(txtEls[2], 0.5, {
      delay: 0.5,
      opacity: 1
    })
    gsap.to(txtEls[3], 0.5, {
      delay: 1.5,
      opacity: 1
    })
  } else {
    txtEls.forEach((txtEl) => {
      gsap.to(txtEl, 2, {
        opacity: 0
      })
    });
    /* for (let i = 0; i < txtEls.length; i++) {
      gsap.to(txtEls[i], 2, {
        delay: 0,
        opacity: 0
      })

    } */
  }
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 15,
  centeredSlides: true,
  parallax: true,
  loopedSlides: 1,
  speed: 300,
  /* autoplay: {
    delay: 3000,
  }, */

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//scrollmagic
const notEls = document.querySelectorAll('.not_box');
notEls.forEach((notEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: notEl,
      triggerHook: 0.3
    })
    .setClassToggle(notEl, 'show')
    .addTo(new ScrollMagic.Controller)
})