'use strict';

import anime from 'animejs';
import ScrollReveal from 'scrollreveal';

// DOM Elements
const leftNav = document.getElementsByClassName('left-nav')[0];
const rightContainer = document.getElementsByClassName('right-container')[0];
const navBar = document.getElementsByTagName('navbar')[0];
const contentContainer = document.getElementsByClassName('content-container')[0];

// Functions
let removeHome = () => {
  document.getElementsByClassName('left-nav')[0].remove();
  document.getElementsByClassName('right-container')[0].remove();
}

let addHome = () => {
  document.getElementsByClassName('main-container')[0].appendChild(leftNav);
  document.getElementsByClassName('main-container')[0].appendChild(rightContainer);
}

let removeNavBar = () => {
  document.getElementsByTagName('navbar')[0].remove();
}

let addNavBar = () => {
  document.getElementsByClassName('main-container')[0].appendChild(navBar);
}

let removeContent = () => {
  document.getElementsByClassName('content-container')[0].remove();
}

let addContent = () => {
  document.getElementsByClassName('main-container')[0].appendChild(contentContainer);
}

removeContent();

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

// Hover over specific image
Array.from(document.getElementsByClassName('photo-container')).map((el, index) => {
  const photo = document.getElementsByClassName('photo')[index];
  const subjectTitle = document.getElementsByClassName('subject_title')[index];
  const highlight = document.getElementsByClassName('highlight')[index];
  el.addEventListener('mouseenter', (e) => {
    photo.classList.add('photo_hover');
    subjectTitle.classList.add('subject_title_hover');
    highlight.classList.add('highlight_hover');
  });
  el.addEventListener('mouseleave', (e) => {
    photo.classList.remove('photo_hover');
    subjectTitle.classList.remove('subject_title_hover');
    highlight.classList.remove('highlight_hover');
  });
});

// Transition after clicking specific image
Array.from(document.getElementsByClassName('photo-container')).map((el) => {
  el.addEventListener('click', (e) => {
    addNavBar();
    anime({
      targets: 'navbar',
      opacity: 1,
      translateY: 50,
      duration: 1100,
      delay: 1000,
      begin: () => {
        anime({
          targets: '.left-nav, .right-container',
          duration: 700,
          opacity: 0,
          translateX: -1000,
          easing: 'easeInCubic',
          complete: () => {
            window.scroll(0, 0);
            removeHome();
            addContent();
            scrollReveal.reveal('.large');
            scrollReveal.reveal('.medium');
            scrollReveal.reveal('.small');
            anime({
              targets: '.content-container',
              opacity: 1,
              duration: 4000,
              delay: 500,
            })
          }
        })
      }
    })
  })
});

// Back button
const backButton = document.getElementsByClassName('back-button')[0];
backButton.addEventListener('click', (e) => {
  addHome();
  anime({
    targets: 'navbar',
    opacity: 0,
    translateY: -50,
    duration: 200,
    easing: 'linear',
    complete: () => {
      removeNavBar();
      anime({
        targets: '.left-nav, .right-container',
        duration: 1000,
        opacity: 1,
        translateX: 0,
        easing: 'easeOutQuad',
        delay: 300,
        complete: () => {
          leftNav.style.transform = 'none';
          rightContainer.style.transform = 'none';
        }
      })
    }
  })
});

scrollReveal.reveal('.photo-container', { delay: 100 });