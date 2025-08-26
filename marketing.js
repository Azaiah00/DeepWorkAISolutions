const funnelData = [
    {
        stage: 'Attraction',
        icon: 'fas fa-bullhorn',
        title: 'AI-Driven Awareness',
        description: 'Launch captivating video ads on social media platforms with AI-optimized targeting, driving qualified traffic to custom, high-converting landing pages and funnels.',
    },
    {
        stage: 'Engagement',
        icon: 'fas fa-handshake',
        title: 'Intelligent Interest Capture',
        description: 'Advanced CRM systems create comprehensive 360° contact profiles, capturing every touchpoint and building rich behavioral data for personalized experiences.',
    },
    {
        stage: 'Nurturing',
        icon: 'fas fa-envelope-open-text',
        title: 'Automated Desire Building',
        description: 'Multi-channel AI workflows deliver personalized emails and SMS messages, sharing compelling brand stories and exclusive offers tailored to individual preferences.',
    },
    {
        stage: 'Conversion',
        icon: 'fas fa-credit-card',
        title: 'Seamless Action Optimization',
        description: 'Streamlined e-commerce experiences with intelligent checkout optimization and automated abandoned cart recovery systems to maximize conversions.',
    },
];

const videoExamples = [
    {
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
        title: "E-commerce Product Launch",
        description: "AI-optimized video ad for product launch"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
        title: "SaaS Demo Campaign",
        description: "Conversion-focused software demonstration"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        title: "Lead Generation Funnel",
        description: "Multi-stage lead nurturing campaign"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop",
        title: "Brand Awareness Campaign",
        description: "Wide-reach brand positioning video"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        title: "Customer Testimonial",
        description: "Social proof and trust-building content"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
        title: "Service Explanation",
        description: "Educational content marketing video"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",
        title: "Retargeting Campaign",
        description: "Re-engagement focused ad creative"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        title: "Mobile-First Creative",
        description: "Optimized for mobile viewing experience"
    }
];

class RollingGallery {
    constructor(container, options = {}) {
        this.container = container;
        this.autoplay = options.autoplay || false;
        this.pauseOnHover = options.pauseOnHover || false;
        this.videos = options.videos || videoExamples;
        
        this.isScreenSizeSm = window.innerWidth <= 640;
        this.cylinderWidth = this.isScreenSizeSm ? 1100 : 1800;
        this.faceCount = this.videos.length;
        this.faceWidth = (this.cylinderWidth / this.faceCount) * 1.5;
        this.dragFactor = 0.05;
        this.radius = this.cylinderWidth / (2 * Math.PI);
        this.rotation = 0;
        this.isAnimating = false;
        this.autoplayInterval = null;
        
        this.init();
    }
    
    init() {
        this.createGallery();
        this.bindEvents();
        
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    
    createGallery() {
        const track = this.container.querySelector('.gallery-track');
        track.style.width = `${this.cylinderWidth}px`;
        track.style.transformStyle = 'preserve-3d';
        
        this.videos.forEach((video, i) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.style.width = `${this.faceWidth}px`;
            item.style.transform = `rotateY(${i * (360 / this.faceCount)}deg) translateZ(${this.radius}px)`;
            
            item.innerHTML = `
                <div class="video-card">
                    <img src="${video.thumbnail}" alt="${video.title}" class="gallery-img">
                    <div class="video-overlay">
                        <i class="fas fa-play-circle"></i>
                        <h5>${video.title}</h5>
                        <p>${video.description}</p>
                    </div>
                </div>
            `;
            
            track.appendChild(item);
        });
    }
    
    bindEvents() {
        const track = this.container.querySelector('.gallery-track');
        let isDragging = false;
        let startX = 0;
        let lastX = 0;
        
        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            lastX = e.clientX;
            track.style.cursor = 'grabbing';
            this.stopAutoplay();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - lastX;
            this.rotation += deltaX * this.dragFactor;
            this.updateTransform();
            lastX = e.clientX;
        });
        
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            track.style.cursor = 'grab';
            
            if (this.autoplay && this.pauseOnHover) {
                this.startAutoplay();
            }
        });
        
        if (this.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => {
                this.stopAutoplay();
            });
            
            this.container.addEventListener('mouseleave', () => {
                if (this.autoplay) {
                    this.startAutoplay();
                }
            });
        }
        
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }
    
    updateTransform() {
        const track = this.container.querySelector('.gallery-track');
        track.style.transform = `rotateY(${this.rotation}deg)`;
    }
    
    startAutoplay() {
        if (this.autoplayInterval) return;
        
        this.autoplayInterval = setInterval(() => {
            this.rotation -= (360 / this.faceCount);
            this.animateToRotation(this.rotation);
        }, 3000);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    animateToRotation(targetRotation) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        const startRotation = this.rotation;
        const duration = 2000;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeProgress = this.easeInOutQuad(progress);
            this.rotation = startRotation + (targetRotation - startRotation) * easeProgress;
            this.updateTransform();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isAnimating = false;
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    handleResize() {
        this.isScreenSizeSm = window.innerWidth <= 640;
        this.cylinderWidth = this.isScreenSizeSm ? 1100 : 1800;
        this.faceWidth = (this.cylinderWidth / this.faceCount) * 1.5;
        this.radius = this.cylinderWidth / (2 * Math.PI);
        
        this.createGallery();
    }
}

function populateMarketingFunnel() {
    const funnelContainer = document.getElementById('marketingFunnelContainer');
    
    funnelData.forEach((stage, index) => {
        const stageCard = document.createElement('div');
        stageCard.className = 'funnel-stage fade-in';
        stageCard.innerHTML = `
            <div class="stage-label">${stage.stage}</div>
            <i class="${stage.icon} funnel-icon"></i>
            <h4>${stage.title}</h4>
            <p>${stage.description}</p>
        `;
        funnelContainer.appendChild(stageCard);
    });
}

function initializeFadeInEffects() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

function initializeMarketingContactForm() {
    const form = document.getElementById('marketingContactForm');
    const formStatus = document.getElementById('marketingFormStatus');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        formStatus.style.display = 'block';
        formStatus.className = 'form-status';
        formStatus.textContent = 'Sending your marketing inquiry...';
        
        try {
            const response = await fetch('https://your-n8n-webhook-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    timestamp: new Date().toISOString(),
                    source: 'DeepWork AI Marketing Page',
                    service_interest: 'AI-Powered Marketing & Advertising'
                })
            });
            
            if (response.ok) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! We\'ll contact you within 24 hours with your custom marketing strategy.';
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'There was an error sending your message. Please try again or contact us directly.';
            console.error('Form submission error:', error);
        }
    });
}

function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeScrollHeader() {
    document.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrolled = window.scrollY > 100;
        
        if (scrolled) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(25px)';
            header.style.webkitBackdropFilter = 'blur(25px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.webkitBackdropFilter = 'blur(20px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            header.style.boxShadow = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateMarketingFunnel();
    initializeFadeInEffects();
    initializeMarketingContactForm();
    initializeSmoothScrolling();
    initializeScrollHeader();
    
    const galleryContainer = document.getElementById('videoGallery');
    if (galleryContainer) {
        new RollingGallery(galleryContainer, {
            autoplay: true,
            pauseOnHover: true,
            videos: videoExamples
        });
    }
});

window.addEventListener('load', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    });
}); 