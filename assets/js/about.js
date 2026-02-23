document.addEventListener('DOMContentLoaded', () => {

  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .fromTo('.page-hero .breadcrumb', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    .fromTo('.page-hero h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
    .fromTo('.page-hero .page-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

  const storyImg = document.querySelector('.story-image-wrap');
  const storyContent = document.querySelector('.story-content');
  if (storyImg) {
    gsap.fromTo(storyImg,
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: storyImg, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }
  if (storyContent) {
    gsap.fromTo(storyContent.children,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: storyContent, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

  document.querySelectorAll('[data-count]').forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    ScrollTrigger.create({
      trigger: counter, start: 'top 90%', once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target, duration: 2, ease: 'power2.out',
          onUpdate: function () { counter.textContent = Math.ceil(this.targets()[0].val) + suffix; },
        });
      },
    });
  });

  const valueCards = document.querySelectorAll('.value-card');
  if (valueCards.length) {
    gsap.fromTo(valueCards,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.values-section .row', start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  }

  const processSteps = document.querySelectorAll('.process-step');
  if (processSteps.length) {
    gsap.fromTo(processSteps,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.approach-section .row', start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  }

  const cta = document.querySelector('.about-cta');
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
