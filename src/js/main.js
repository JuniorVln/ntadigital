/* ════════════════════════════════════════════════
   NTA DIGITAL — MAIN JAVASCRIPT
   ════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initCountUp();
    initLucideIcons();
    initSmoothScroll();
    initFormHandling();
    initProcessSteps();
});


/* ═══════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════ */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav__toggle');
    const mobileNav = document.querySelector('.nav__mobile');

    if (!nav) return;

    // Scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }

        lastScrollY = scrollY;
    }, { passive: true });

    // Mobile menu toggle
    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('nav__toggle--active');
            mobileNav.classList.toggle('nav__mobile--open');
            document.body.style.overflow =
                mobileNav.classList.contains('nav__mobile--open') ? 'hidden' : '';
        });

        // Close on link click
        mobileNav.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('nav__toggle--active');
                mobileNav.classList.remove('nav__mobile--open');
                document.body.style.overflow = '';
            });
        });
    }

    // Active link highlight
    highlightActiveLink();
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
        if (linkPath === currentPath) {
            link.classList.add('nav__link--active');
        }
    });
}


/* ═══════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ═══════════════════════════════════════ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale');
    const staggerContainers = document.querySelectorAll('.reveal-stagger');

    if (!('IntersectionObserver' in window)) {
        // Fallback: show everything
        revealElements.forEach(el => el.classList.add('reveal--visible'));
        staggerContainers.forEach(el => el.classList.add('reveal-stagger--visible'));
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // Stagger containers
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-stagger--visible');
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    staggerContainers.forEach(el => staggerObserver.observe(el));
}


/* ═══════════════════════════════════════
   COUNT UP ANIMATION
   ═══════════════════════════════════════ */
function initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easedProgress * target);

        el.textContent = prefix + current.toLocaleString('pt-BR') + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = prefix + target.toLocaleString('pt-BR') + suffix;
        }
    }

    requestAnimationFrame(update);
}


/* ═══════════════════════════════════════
   LUCIDE ICONS
   ═══════════════════════════════════════ */
function initLucideIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}


/* ═══════════════════════════════════════
   SMOOTH SCROLL (for anchor links)
   ═══════════════════════════════════════ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


/* ═══════════════════════════════════════
   FORM HANDLING
   ═══════════════════════════════════════ */
function initFormHandling() {
    const forms = document.querySelectorAll('[data-form]');

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('[type="submit"]');
            const originalText = submitBtn.textContent;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            try {
                const formData = new FormData(form);
                const action = form.getAttribute('action');

                if (action) {
                    const response = await fetch(action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        showFormSuccess(form);
                        form.reset();
                    } else {
                        showFormError(form, 'Erro ao enviar. Tente novamente.');
                    }
                }
            } catch (error) {
                showFormError(form, 'Erro de conexão. Tente novamente.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    });
}

function showFormSuccess(form) {
    const msg = document.createElement('div');
    msg.className = 'form-message form-message--success';
    msg.innerHTML = '<i data-lucide="check-circle"></i> Mensagem enviada com sucesso!';
    form.appendChild(msg);
    initLucideIcons();

    setTimeout(() => msg.remove(), 5000);
}

function showFormError(form, text) {
    const msg = document.createElement('div');
    msg.className = 'form-message form-message--error';
    msg.innerHTML = `<i data-lucide="alert-circle"></i> ${text}`;
    form.appendChild(msg);
    initLucideIcons();

    setTimeout(() => msg.remove(), 5000);
}


/* ═══════════════════════════════════════
   PROCESS STEPS — STICKY NAV
   ═══════════════════════════════════════ */
function initProcessSteps() {
    const steps = document.querySelectorAll('.h-process-step');
    const navItems = document.querySelectorAll('.h-process__nav-item');

    if (!steps.length || !navItems.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.dataset.target === targetId);
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    });

    steps.forEach(step => observer.observe(step));
}


/* ═══════════════════════════════════════
   WHATSAPP UTM TRACKING
   ═══════════════════════════════════════ */
function getWhatsAppURL(message) {
    const phone = '5541998081519';
    const baseMsg = message || 'Olá, vim pelo site e gostaria de mais informações!';

    // Append UTM params if present
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source') || 'site';
    const medium = params.get('utm_medium') || 'direto';

    const fullMsg = `${baseMsg}\n\n[via: ${source}/${medium}]`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(fullMsg)}`;
}

// Update all WhatsApp links with UTM tracking
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-whatsapp]').forEach(link => {
        const customMsg = link.getAttribute('data-whatsapp-msg');
        link.href = getWhatsAppURL(customMsg);
    });
});
