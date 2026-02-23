
document.addEventListener('DOMContentLoaded', () => {

  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: { enable: true, area: 800 }
        },
        color: { value: ["#10b981", "#059669", "#34ba61"] },
        links: {
          enable: true,
          color: "#059669",
          distance: 150,
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" }
        },
        size: {
          value: { min: 1, max: 3 }
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 200, links: { opacity: 0.8 } },
          push: { quantity: 4 }
        }
      },
      detectRetina: true
    });
  }

  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.hero-label', { y: 30, opacity: 0, duration: 0.6 })
    .from('.hero h1', { y: 50, opacity: 0, duration: 0.8 }, '-=0.3')
    .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero-actions', { y: 25, opacity: 0, duration: 0.6 }, '-=0.3')
    .from('.hero-mini-stats', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
    .from('.hero-visual-card', {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8');


  document.querySelectorAll('.trust-stat .number span').forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-count'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';

    gsap.fromTo(counter, { innerText: 0 }, {
      innerText: target,
      duration: 2,
      ease: 'power1.out',
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: function () {
        counter.textContent = Math.ceil(counter.innerText) + suffix;
      },
    });
  });


  gsap.from('.services-section .col-lg-3', {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services-section .row',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });


  gsap.from('.why-section .col-lg-4', {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.why-section .row',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });


  gsap.from('.cta-banner', {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.cta-banner',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });

});
