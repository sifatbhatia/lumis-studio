// Lumis Studio Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded',
                navLinks.classList.contains('active'));
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Gather form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                budget: formData.get('budget'),
                website: formData.get('website'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };

            // Log to console (in production, this would send to a backend)
            console.log('Form submission:', data);

            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#10B981';

            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                contactForm.reset();
            }, 3000);

            // In production, you'd send this data to your backend
            // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animation
    document.querySelectorAll('.problem-card, .service-card, .process-step, .work-case').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Agent node animation (subtle floating)
    const agentNodes = document.querySelectorAll('.agent-node');
    agentNodes.forEach((node, index) => {
        const duration = 3 + index * 0.5;
        const delay = index * 0.2;
        node.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    });

    // Add floating animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(floatStyle);

    // Console Easter egg
    console.log('%c Lumis Studio ', 'background: #0066FF; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Agent-first Web Agency ', 'color: #0066FF; font-size: 14px;');
    console.log('%c Built with human design + AI agents ', 'color: #6B7280; font-size: 12px;');
});
