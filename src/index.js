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

scrollReveal.reveal('.photo-container', { delay: 100 });