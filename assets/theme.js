document.addEventListener('DOMContentLoaded', () => {
  // --- Nav Scroll ---
  const header = document.getElementById('site-header');
  const whatsappBtn = document.getElementById('whatsapp-btn');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.remove('py-6', 'bg-transparent');
      header.classList.add('glass-nav', 'py-4');

      whatsappBtn.classList.remove('translate-y-20', 'opacity-0');
      whatsappBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
      header.classList.add('py-6', 'bg-transparent');
      header.classList.remove('glass-nav', 'py-4');

      whatsappBtn.classList.add('translate-y-20', 'opacity-0');
      whatsappBtn.classList.remove('translate-y-0', 'opacity-100');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // init

  // --- Mobile Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu && closeMobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
    });

    closeMobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // --- Reveal on Scroll ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  }

  // --- Custom Cursor ---
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing && window.matchMedia('(min-width: 768px)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(updateRing);
    };

    requestAnimationFrame(updateRing);
  }
});
