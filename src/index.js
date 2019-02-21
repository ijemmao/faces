'use strict';

import anime from 'animejs';
import ScrollReveal from 'scrollreveal';

const scrollReveal = ScrollReveal({ reset: true });

// Logo animations
anime({
  targets: '.logo-container',
  opacity: 1,
  translateY: 50,
  duration: 700,
  easing: 'easeOutQuad'
});

// Sidebar animation
anime({
  targets: '.description',
  opacity: 1,
  translateY: 50,
  duration: 800,
  delay: 200,
  easing: 'easeOutQuad'
});

Array.from(document.getElementsByClassName('photo-container')).map((el) => {
  el.addEventListener('click', (e) => {
    const navbar = document.getElementsByTagName('navbar')[0];
    navbar.style.display = 'flex';
    anime({
      targets: 'navbar',
      opacity: 1,
      translateY: 50,
      duration: 1100,
      delay: 700,
      begin: (anim) => {
        anime({
          targets: '.left-nav, .right-container',
          duration: 4000,
          opacity: 0,
          translateX: -1000,
        })
      }
    })
  })
})

scrollReveal.reveal('.photo-container', { delay: 100 });