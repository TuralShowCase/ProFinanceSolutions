document.addEventListener('DOMContentLoaded', () => {

  
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .fromTo('.page-hero .breadcrumb', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    .fromTo('.page-hero h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
    .fromTo('.page-hero .page-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

  
  const sectionHeader = document.querySelector('.team-section .section-header');
  if (sectionHeader) {
    gsap.fromTo(sectionHeader.children,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: sectionHeader, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

  
  const teamCards = document.querySelectorAll('.team-card');
  if (teamCards.length) {
    gsap.fromTo(teamCards,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.team-section .row', start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

  
  const cta = document.querySelector('.team-cta');
  if (cta) {
    gsap.fromTo([cta.querySelector('h2'), cta.querySelector('p'), cta.querySelector('.btn-primary-custom')],
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: cta, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

});
