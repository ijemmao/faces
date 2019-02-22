'use strict';

import anime from 'animejs';
import ScrollReveal from 'scrollreveal';

// DOM Elements
const leftNav = document.getElementsByClassName('left-nav')[0];
const rightContainer = document.getElementsByClassName('right-container')[0];

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

// Transition after clicking specific image
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
          duration: 1000,
          opacity: 0,
          translateX: -1000,
          easing: 'easeInQuad',
          complete: () => {
            document.getElementsByClassName('left-nav')[0].remove();
            document.getElementsByClassName('right-container')[0].remove();
          }
        })
      }
    })
  })
});

// Back button
const backButton = document.getElementsByClassName('back-button')[0];
backButton.addEventListener('click', (e) => {
  document.body.appendChild(leftNav);
  document.body.appendChild(rightContainer);
  anime({
    targets: 'navbar',
    opacity: 0,
    translateY: -50,
    duration: 200,
    easing: 'linear',
    complete: (anim) => {
      anime({
        targets: '.left-nav, .right-container',
        duration: 1000,
        opacity: 1,
        translateX: 0,
        easing: 'easeOutQuad',
        delay: 300,
      })
    }
  })
});

scrollReveal.reveal('.photo-container', { delay: 100 });