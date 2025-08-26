// Shared functionality for all service pages

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFadeInEffects();
    initializeServiceContactForms();
    initializeSmoothScrolling();
    initializeScrollHeader();
    initializeMobileMenu();
    initializePricingToggle();
});

// Fade-in effects for sections
function initializeFadeInEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Service contact form handling (works for all service forms)
function initializeServiceContactForms() {
    const forms = [
        'strategyContactForm', 
        'automationContactForm', 
        'customAiContactForm', 
        'managedContactForm'
    ];

    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            const formStatus = document.getElementById(formId.replace('ContactForm', 'FormStatus'));
            
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                // Show loading state
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                if (formStatus) formStatus.textContent = '';

                // Determine service type from page title or form
                let serviceType = 'General Inquiry';
                if (formId.includes('strategy')) serviceType = 'AI Strategy & Roadmapping';
                else if (formId.includes('automation')) serviceType = 'Intelligent Automation';
                else if (formId.includes('customAi')) serviceType = 'Custom AI Solutions';
                else if (formId.includes('managed')) serviceType = 'AI Integration & Managed Services';

                // Collect form data
                const formData = new FormData(form);
                const data = {
                    service: serviceType,
                    timestamp: new Date().toISOString()
                };
                
                // Convert FormData to object
                for (let [key, value] of formData.entries()) {
                    data[key] = value;
                }

                try {
                    // Send to webhook (replace with your actual endpoint)
                    const response = await fetch('https://hook.us1.make.com/your-webhook-url', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });

                    if (response.ok) {
                        if (formStatus) {
                            formStatus.innerHTML = `<p style="color: var(--primary-green);">✓ Thank you! We'll send your ${serviceType.toLowerCase()} proposal within 24 hours.</p>`;
                        }
                        form.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    if (formStatus) {
                        formStatus.innerHTML = '<p style="color: var(--primary-red);">⚠ There was an issue submitting your request. Please try again or email us directly.</p>';
                    }
                }

                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        }
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header glassmorphism effect on scroll
function initializeScrollHeader() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        // Toggle menu on hamburger click
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on links
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                navMenu.classList.remove('mobile-active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Scroll to top function (for header logo)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Pricing toggle functionality
function initializePricingToggle() {
    const pricingToggle = document.getElementById('pricingToggle');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            const monthlyPrices = document.querySelectorAll('.monthly-price');
            const yearlyPrices = document.querySelectorAll('.yearly-price');
            
            if (this.checked) {
                // Show yearly prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                yearlyPrices.forEach(price => price.style.display = 'inline');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'inline');
                yearlyPrices.forEach(price => price.style.display = 'none');
            }
        });
    }
} 