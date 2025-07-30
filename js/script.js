   document.addEventListener('DOMContentLoaded', function() {
      const container = document.querySelector('.slides-container');
      const slides = document.querySelectorAll('.slide');
      
      // Configuração do timer (em milissegundos)
      const slideInterval = 3000; // 5 segundos - altere conforme necessário
      
      let currentIndex = 0;
      let intervalId;
      
      // Atualiza a posição do slide
      function updateSlidePosition() {
         container.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      
      // Avança para o próximo slide
      function nextSlide() {
         currentIndex = (currentIndex + 1) % slides.length;
         updateSlidePosition();
      }
      
      // Inicia o carrossel automático
      function startCarousel() {
         intervalId = setInterval(nextSlide, slideInterval);
      }
      
      // Pausa o carrossel quando o mouse está sobre ele
      const carousel = document.querySelector('.simple-carousel');
      carousel.addEventListener('mouseenter', () => {
         clearInterval(intervalId);
      });
      
      carousel.addEventListener('mouseleave', startCarousel);
      
      // Inicia o carrossel
      startCarousel();
   });

// Script do Chatbot
const toggler = document.getElementById('goibot-toggler');
const closeBtn = document.getElementById('goibot-close');
const frame = document.getElementById('goibot-frame');

toggler.addEventListener('click', () => {
  frame.hidden = false;
  frame.classList.toggle('visible');
  toggler.classList.toggle('rotated');
  toggler.innerHTML = frame.classList.contains('visible')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-comments"></i>';
});

closeBtn.addEventListener('click', () => {
  frame.classList.remove('visible');
  toggler.classList.remove('rotated');
  toggler.innerHTML = '<i class="fas fa-comments"></i>';

  setTimeout(() => {
    frame.hidden = true;
  }, 250);
});

document.addEventListener('click', (e) => {
  const isFrame = frame.contains(e.target);
  const isToggler = toggler.contains(e.target);

  if (!isFrame && !isToggler && frame.classList.contains('visible')) {
    frame.classList.remove('visible');
    toggler.classList.remove('rotated');
    toggler.innerHTML = '<i class="fas fa-comments"></i>';

    setTimeout(() => {
      frame.hidden = true;
    }, 250);
  }
});

setInterval(() => {
  if (!frame.classList.contains('visible')) {
    toggler.style.animation = 'float 2s ease-in-out';
    setTimeout(() => {
      toggler.style.animation = 'float 3s ease-in-out infinite';
    }, 2000);
  }
}, 30000);

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

