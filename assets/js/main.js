(function () {
  "use strict";

  function toggleScrolled() {
    const isScrolled = window.scrollY > 40;
    document.body.classList.toggle('scrolled', isScrolled);
  }

  document.addEventListener('scroll', toggleScrolled, { passive: true });
  window.addEventListener('load', toggleScrolled);

  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.getElementById('navmenu');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('active');
      mobileToggle.classList.toggle('bi-list', !isOpen);
      mobileToggle.classList.toggle('bi-x', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          nav.classList.remove('active');
          mobileToggle.classList.add('bi-list');
          mobileToggle.classList.remove('bi-x');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // Mobile Tab Switcher for Pillars (Prosperity vs Protection)
  const pillarTabs = document.querySelectorAll('.pillar-tab-btn');
  if (pillarTabs.length > 0) {
    pillarTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const target = this.getAttribute('data-target');
        pillarTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const pillarProsperity = document.getElementById('pillar-prosperity');
        const pillarProtection = document.getElementById('pillar-protection');

        if (target === 'prosperity' && pillarProsperity && pillarProtection) {
          pillarProsperity.classList.add('active-mobile-pillar');
          pillarProtection.classList.remove('active-mobile-pillar');
        } else if (target === 'protection' && pillarProsperity && pillarProtection) {
          pillarProtection.classList.add('active-mobile-pillar');
          pillarProsperity.classList.remove('active-mobile-pillar');
        }
      });
    });
  }

  // Scroll Top
  const scrollTop = document.getElementById('scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    });

    scrollTop.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Interactive Claim Steps (if present on claim-assistance.html)
  const claimSteps = document.querySelectorAll('.claim-step-card');
  if (claimSteps.length > 0) {
    claimSteps.forEach(function(step) {
      step.addEventListener('click', function() {
        claimSteps.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Consultation Form Handler (if present)
  const consultForm = document.querySelector('.consultation-form');
  if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = consultForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending Request...';
      
      setTimeout(function () {
        btn.disabled = false;
        btn.innerHTML = 'Request Submitted Successfully ✓';
        consultForm.reset();
        setTimeout(function() {
          btn.innerHTML = originalText;
        }, 4000);
      }, 1200);
    });
  }

  // AOS Init
  if (window.AOS) {
    AOS.init({
      duration: 450,
      once: true,
      easing: 'ease-in-out'
    });
  }

  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.style.opacity = '0';
        setTimeout(function () { preloader.remove(); }, 300);
      }, 150);
    });
  }
})();