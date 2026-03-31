/**
 * ════════════════════════════════════════════════
 * NTA DIGITAL — SOBRE PAGE SCRIPTS
 * Animação de contagem dos números
 * ════════════════════════════════════════════════
 */

(function() {
    'use strict';

    // ═══════════════════════════════════════
    // COUNT UP ANIMATION
    // ═══════════════════════════════════════
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

    // ═══════════════════════════════════════
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ═══════════════════════════════════════
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

    // ═══════════════════════════════════════
    // ANIMATION ON SCROLL (Simple)
    // ═══════════════════════════════════════
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.s-history__content, .s-history__image-wrap, .s-number-card, .s-value-card');
        
        if (!('IntersectionObserver' in window)) {
            // Fallback: show everything
            revealElements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ═══════════════════════════════════════
    // INITIALIZE
    // ═══════════════════════════════════════
    document.addEventListener('DOMContentLoaded', () => {
        initCountUp();
        initSmoothScroll();
        initScrollReveal();
    });

})();
