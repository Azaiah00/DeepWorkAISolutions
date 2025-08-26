// Website & Systems Design Page Functionality

// Process Data
const processData = [
    {
        stage: "Discovery",
        icon: "fas fa-search",
        title: "Strategy & Planning",
        description: "Deep dive into your business goals, target audience, and technical requirements to create a comprehensive development strategy and wireframe blueprint."
    },
    {
        stage: "Design", 
        icon: "fas fa-palette",
        title: "UI/UX Design",
        description: "Create intuitive, conversion-focused designs that reflect your brand identity while ensuring optimal user experience across all devices and platforms."
    },
    {
        stage: "Development",
        icon: "fas fa-code", 
        title: "Build & Integration",
        description: "Develop your website with clean, scalable code, integrate AI features and third-party systems, and implement advanced SEO optimization techniques."
    },
    {
        stage: "Launch",
        icon: "fas fa-rocket",
        title: "Deploy & Optimize", 
        description: "Launch your website with thorough testing, performance optimization, and ongoing monitoring to ensure peak performance and continuous improvement."
    }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFadeInEffects();
    initializeWebsiteContactForm();
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

// Website contact form handling
function initializeWebsiteContactForm() {
    const form = document.getElementById('websiteContactForm');
    const formStatus = document.getElementById('websiteFormStatus');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            formStatus.textContent = '';

            // Collect form data
            const formData = {
                name: form.name.value,
                email: form.email.value,
                company: form.company.value,
                phone: form.phone.value,
                websiteType: form['website-type'].value,
                timeline: form.timeline.value,
                projectDetails: form['project-details'].value,
                service: 'Website & Systems Design',
                timestamp: new Date().toISOString()
            };

            try {
                // Send to webhook (replace with your actual endpoint)
                const response = await fetch('https://hook.us1.make.com/your-webhook-url', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    formStatus.innerHTML = '<p style="color: var(--primary-green);">✓ Thank you! We\'ll send your website proposal within 24 hours.</p>';
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                formStatus.innerHTML = '<p style="color: var(--primary-red);">⚠ There was an issue submitting your request. Please try again or email us directly.</p>';
            }

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    }
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