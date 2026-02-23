document.addEventListener('DOMContentLoaded', () => {

  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .fromTo('.page-hero .breadcrumb', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    .fromTo('.page-hero h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
    .fromTo('.page-hero .page-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

  const cards = document.querySelectorAll('.service-full-card');
  if (cards.length) {
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.services-full-section .row', start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  }

  const approachNums = document.querySelectorAll('.approach-num[data-count]');
  approachNums.forEach((el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target, duration: 1.8, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.ceil(this.targets()[0].val) + suffix; },
        });
      },
    });
  });

  const approachItems = document.querySelectorAll('.approach-item');
  if (approachItems.length) {
    gsap.fromTo(approachItems,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.approach-strip', start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }

  const scta = document.querySelector('.services-cta');
  if (scta) {
    gsap.fromTo([scta.querySelector('h2'), scta.querySelector('p'), scta.querySelector('a')],
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: scta, start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  }
});
