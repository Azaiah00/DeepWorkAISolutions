const marketData = {
    labels: ['2024', '2026', '2028', '2030', '2032'],
    values: [8.75, 13.56, 21.01, 32.55, 49.11]
};

const servicesData = [
    {
        title: 'AI Strategy & Roadmapping',
        icon: 'fas fa-route',
        shortDescription: 'We define a clear, actionable AI strategy aligned with your business goals, ensuring every investment delivers maximum impact.',
        longDescription: 'Our strategic process begins with a deep dive into your operations, market position, and objectives. We identify high-value opportunities for AI implementation, create a phased roadmap, and establish key performance indicators (KPIs) to measure success, de-risking your investment and providing a clear path forward.'
    },
    {
        title: 'Intelligent Automation & Workflow Optimization',
        icon: 'fas fa-cogs',
        shortDescription: 'We automate repetitive tasks and optimize complex workflows, freeing your team to focus on high-value, strategic work.',
        longDescription: 'From back-office processes to customer service interactions, we deploy AI agents to handle routine tasks with speed and accuracy. This reduces operational costs, minimizes human error, and dramatically improves efficiency across your organization.'
    },
    {
        title: 'AI-Powered Marketing & Advertising',
        icon: 'fas fa-bullhorn',
        shortDescription: 'Transform your marketing with AI-driven campaigns, automated funnels, and intelligent customer journey optimization that maximizes ROI.',
        longDescription: 'Our comprehensive marketing automation combines AI-powered ad targeting, custom landing pages, CRM integration, and multi-channel nurturing workflows. From awareness to conversion, we create seamless customer experiences that drive measurable results and sustainable growth.'
    },
    {
        title: 'Custom AI Solutions & Agent Development',
        icon: 'fas fa-robot',
        shortDescription: 'We design and build bespoke AI models and agents tailored to solve your unique business challenges and create a competitive edge.',
        longDescription: 'When off-the-shelf solutions aren\'t enough, we develop custom AI systems from the ground up. This includes everything from predictive analytics models to sophisticated AI agents that can perform complex, multi-step tasks, giving you a powerful, proprietary asset.'
    },
    {
        title: 'AI Integration & Managed Services',
        icon: 'fas fa-wrench',
        shortDescription: 'We ensure your AI solutions are seamlessly integrated, continuously optimized, and expertly managed for long-term success.',
        longDescription: 'Deployment is just the beginning. Our managed services provide ongoing monitoring, maintenance, and performance tuning for your AI systems. We act as your long-term AI partner, ensuring your solutions evolve with your business and continue to deliver value.'
    }
];

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

const ragContext = `DeepWork AI Solutions is a B2B AI consulting firm specializing in AI strategy, automation, and custom solutions for small and mid-sized businesses (SMEs).

COMPANY OVERVIEW:
- Mission: To simplify AI for SMEs by providing targeted, high-impact solutions that drive tangible business outcomes
- Core Values: Deep Work (concentrated, high-value projects), Simplicity (clear, actionable solutions), Partnership (human-centric approach with quantifiable results)
- Target Audience: Owners and director-level employees of SMEs motivated by efficiency, tangible ROI, and staying competitive

CORE SERVICES:
1. AI Strategy & Roadmapping: Define clear, actionable AI strategy aligned with business goals. Process includes deep dive into operations, market position, objectives, identifying high-value AI opportunities, creating phased roadmap, and establishing KPIs.

2. Intelligent Automation & Workflow Optimization: Automate repetitive tasks and optimize workflows. Deploy AI agents for back-office processes and customer service, reducing costs, minimizing errors, improving efficiency.

3. AI-Powered Marketing & Advertising: Transform marketing with AI-driven campaigns, automated funnels, and intelligent customer journey optimization. Comprehensive marketing automation combining AI-powered ad targeting, custom landing pages, CRM integration, and multi-channel nurturing workflows. Four-stage process: AI-driven awareness (social media ads, landing pages), intelligent interest capture (360° CRM profiles), automated desire building (personalized emails/SMS), and seamless action optimization (e-commerce checkout, abandoned cart recovery).

4. Custom AI Solutions & Agent Development: Design and build bespoke AI models and agents for unique business challenges. Includes predictive analytics models and sophisticated AI agents for complex, multi-step tasks.

5. AI Integration & Managed Services: Seamless integration with ongoing monitoring, maintenance, and performance tuning. Long-term AI partnership ensuring solutions evolve with business.

PRICING:
- Starter AI Implementation: $5,000-$20,000 (Fixed Fee) for small businesses/startups. Automate one core process or launch custom chatbot.
- Advanced AI Integration: $20,000-$100,000+ (Project-Based/Tiered) for mid-sized businesses. Comprehensive AI strategy across multiple departments.
- DeepWork Managed Retainer: $5,000-$15,000/month for ongoing support, optimization, and strategic advisory.

TECHNOLOGY:
- Automated Lead Management Backend: Captures, processes, and routes leads through intelligent workflows
- Custom RAG Chatbot Architecture: Advanced Retrieval-Augmented Generation for accurate, context-aware responses
- Scalable AI Infrastructure: Cloud-native architecture with automated monitoring and performance optimization

MARKET OPPORTUNITY:
The AI market for SMEs is experiencing explosive growth: $8.75B (2024) growing to $49.11B (2032) - 461% growth. 85% of SMEs haven't adopted AI yet, creating massive opportunity.`;

document.addEventListener('DOMContentLoaded', function() {
    populateServices();
    initializeSmoothScrolling();
    initializeFadeInEffects();
    initializeContactForm();
    initializeChatbot();
    initializeAIConsultation();
    initializeMobileMenu();
});



function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    servicesData.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in';
        
        // Special handling for AI Marketing service (index 2)
        if (index === 2) {
            serviceCard.innerHTML = `
                <i class="${service.icon} service-icon"></i>
                <h3>${service.title}</h3>
                <div class="service-description">
                    <p class="service-short">${service.shortDescription}</p>
                    <div class="service-long" id="service-long-${index}">
                        <p>${service.longDescription}</p>
                    </div>
                    <span class="service-toggle" onclick="window.location.href='marketing.html'">
                        Learn More
                    </span>
                </div>
            `;
        } else {
            serviceCard.innerHTML = `
                <i class="${service.icon} service-icon"></i>
                <h3>${service.title}</h3>
                <div class="service-description">
                    <p class="service-short">${service.shortDescription}</p>
                    <div class="service-long" id="service-long-${index}">
                        <p>${service.longDescription}</p>
                    </div>
                    <span class="service-toggle" onclick="toggleServiceDescription(${index})">
                        Learn More
                    </span>
                </div>
            `;
        }
        
        servicesGrid.appendChild(serviceCard);
    });
}

function toggleServiceDescription(index) {
    const longDesc = document.getElementById(`service-long-${index}`);
    const toggle = longDesc.parentElement.querySelector('.service-toggle');
    
    if (longDesc.style.display === 'block') {
        longDesc.style.display = 'none';
        toggle.textContent = 'Learn More';
    } else {
        longDesc.style.display = 'block';
        toggle.textContent = 'Show Less';
    }
}



function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
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

    const ctaButtons = document.querySelectorAll('.cta-button[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
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

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        formStatus.style.display = 'block';
        formStatus.className = 'form-status';
        formStatus.textContent = 'Sending your message...';
        
        try {
            const response = await fetch('https://your-n8n-webhook-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    timestamp: new Date().toISOString(),
                    source: 'DeepWork AI Solutions Website'
                })
            });
            
            if (response.ok) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! We\'ll be in touch within 24 hours to schedule your free consultation.';
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

function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.add('active');
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
    });
    
    chatbotSend.addEventListener('click', sendMessage);
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    async function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (!userMessage) return;
        
        addMessage(userMessage, 'user');
        chatbotInput.value = '';
        
        addTypingIndicator();
        
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You are an AI assistant for DeepWork AI Solutions. Answer the user's question based ONLY on the provided context. If the question cannot be answered from the context, politely explain that you can only provide information about DeepWork AI Solutions' services and direct them to contact the team for more specific questions.

Context: ${ragContext}`
                        },
                        {
                            role: 'user',
                            content: userMessage
                        }
                    ],
                    max_tokens: 300,
                    temperature: 0.7
                })
            });
            
            removeTypingIndicator();
            
            if (response.ok) {
                const data = await response.json();
                const botMessage = data.choices[0].message.content;
                addMessage(botMessage, 'bot');
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            removeTypingIndicator();
            addMessage('I apologize, but I\'m having trouble connecting right now. Please try again later or contact our team directly through the contact form for immediate assistance.', 'bot');
            console.error('Chatbot error:', error);
        }
    }
    
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = '<p>Thinking...</p>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function removeTypingIndicator() {
        const typingIndicator = chatbotMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('mobile-active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('mobile-active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('mobile-active');
            }
        });
    }
}

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

function initializeAIConsultation() {
    const getRecommendationBtn = document.getElementById('getRecommendation');
    const businessTypeInput = document.getElementById('businessType');
    const businessProblemInput = document.getElementById('businessProblem');
    const recommendationResult = document.getElementById('recommendationResult');
    const recommendationContent = document.getElementById('recommendationContent');
    
    getRecommendationBtn.addEventListener('click', async function() {
        const businessType = businessTypeInput.value.trim();
        const businessProblem = businessProblemInput.value.trim();
        
        if (!businessType || !businessProblem) {
            alert('Please fill in both fields to get your personalized recommendation.');
            return;
        }
        
        getRecommendationBtn.disabled = true;
        getRecommendationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing Your Business...';
        
        try {
            const recommendation = await getAIRecommendation(businessType, businessProblem);
            
            recommendationContent.innerHTML = recommendation;
            recommendationResult.classList.add('visible');
            
            recommendationResult.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
            
        } catch (error) {
            recommendationContent.innerHTML = `
                <p><strong>We're experiencing high demand right now!</strong></p>
                <p>Our AI recommendation system is temporarily unavailable, but our experts are standing by to help.</p>
                <p>Please fill out the contact form on the right, and we'll provide you with a personalized solution recommendation within 2 hours.</p>
            `;
            recommendationResult.classList.add('visible');
            console.error('AI Consultation error:', error);
        }
        
        getRecommendationBtn.disabled = false;
        getRecommendationBtn.innerHTML = '<i class="fas fa-magic"></i> Get My AI Solution';
    });
}

async function getAIRecommendation(businessType, businessProblem) {
    const consultationPrompt = `You are an AI strategy consultant for DeepWork AI Solutions. Based on the business information provided, recommend the most suitable AI solution from our service offerings. Be specific, actionable, and focus on ROI.

Business Type: ${businessType}
Business Challenge: ${businessProblem}

Available Solutions:
1. AI Strategy & Roadmapping ($5,000-$20,000) - Define clear AI strategy with implementation roadmap
2. Intelligent Automation & Workflow Optimization ($20,000-$100,000+) - Automate processes and optimize workflows
3. Custom AI Solutions & Agent Development ($20,000-$100,000+) - Build bespoke AI models and agents
4. AI Integration & Managed Services ($5,000-$15,000/month) - Ongoing AI management and optimization

Context: ${ragContext}

Provide a recommendation in this format:
<h5>Recommended Solution: [Solution Name]</h5>
<p><strong>Why this solution fits your business:</strong></p>
<p>[2-3 sentences explaining why this specific solution addresses their challenge]</p>

<p><strong>Expected outcomes:</strong></p>
<ul>
<li>[Specific benefit 1]</li>
<li>[Specific benefit 2]</li>
<li>[Specific benefit 3]</li>
</ul>

<p><strong>Investment Range:</strong> [Price range] | <strong>Timeline:</strong> [Implementation timeframe]</p>

<p><strong>Next Steps:</strong> [Brief next step recommendation]</p>

Keep the response under 200 words and focus on tangible business value.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert AI business consultant. Provide specific, actionable recommendations based on the business context provided. Focus on ROI and practical implementation.'
                },
                {
                    role: 'user',
                    content: consultationPrompt
                }
            ],
            max_tokens: 400,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

window.addEventListener('load', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    });
}); 