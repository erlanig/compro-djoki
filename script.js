document.addEventListener('DOMContentLoaded', function() {
      // FAQ Accordion
      document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
          const answer = button.nextElementSibling;
          const icon = button.querySelector('.faq-icon');
          
          document.querySelectorAll('.faq-answer.show').forEach(openAnswer => {
            if (openAnswer !== answer) {
              openAnswer.classList.remove('show');
              openAnswer.previousElementSibling.querySelector('.faq-icon').classList.remove('rotate');
            }
          });
          
          answer.classList.toggle('show');
          icon.classList.toggle('rotate');
        });
      });

      // Project Slider
      const slider = document.getElementById('project-slider');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      function getSlideWidth() {
        const card = slider.querySelector('.project-card');
        return card.offsetWidth + 32; // gap-8 = 32px
      }

      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
      });

      // Intersection Observer for Scroll Animations
      const fadeInElements = document.querySelectorAll('.fade-in');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      fadeInElements.forEach(el => {
        observer.observe(el);
      });
    });