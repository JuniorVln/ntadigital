/**
 * ════════════════════════════════════════════════
 * NTA DIGITAL — CONTATO PAGE SCRIPTS
 * Manipulação do formulário de contato
 * ════════════════════════════════════════════════
 */

(function () {
    'use strict';

    // ═══════════════════════════════════════
    // FORM SUBMISSION
    // ═══════════════════════════════════════
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        // Reset messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Client-side validation
        if (!validateForm(data)) {
            return;
        }

        // Get submit button
        const submitBtn = form.querySelector('.c-form-submit');
        const originalBtnText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            Enviando...
        `;

        try {
            // Submit to FormSubmit
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                successMessage.style.display = 'flex';
                form.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                throw new Error('Erro ao enviar formulário');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            errorMessage.style.display = 'flex';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }

    function validateForm(data) {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showError('Por favor, insira um email válido.');
            return false;
        }

        // Phone validation (Brazilian format)
        const phoneRegex = /^\(?\d{2}\)?[\s-]?[\d]{4,5}-?[\d]{4}$/;
        if (!phoneRegex.test(data.telefone.replace(/\s/g, ''))) {
            showError('Por favor, insira um telefone válido (ex: (41) 99808-1519).');
            return false;
        }

        return true;
    }

    function showError(message) {
        errorMessage.style.display = 'flex';
        errorMessage.querySelector('span').textContent = message;
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ═══════════════════════════════════════
    // PHONE MASK
    // ═══════════════════════════════════════
    const phoneInput = document.getElementById('telefone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 10) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            } else if (value.length > 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else if (value.length > 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            }

            e.target.value = value;
        });

        phoneInput.addEventListener('focus', function (e) {
            if (!e.target.value) {
                e.target.value = '(__) _____-____';
            }
        });

        phoneInput.addEventListener('blur', function (e) {
            if (e.target.value === '(__) _____-____') {
                e.target.value = '';
            }
        });
    }

    // ═══════════════════════════════════════
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ═══════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ═══════════════════════════════════════
    // ANIMATION ON SCROLL (Simple)
    // ═══════════════════════════════════════
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe contact cards
    document.querySelectorAll('.c-contact-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe form section
    const formSection = document.querySelector('.c-form-section');
    if (formSection) {
        formSection.style.opacity = '0';
        formSection.style.transform = 'translateY(20px)';
        formSection.style.transition = 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s';
        observer.observe(formSection);
    }

})();

// Add spin animation for loading state
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
