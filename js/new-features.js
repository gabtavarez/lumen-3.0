// ===========================
// BEFORE/AFTER SLIDER
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos os sliders
    const sliders = document.querySelectorAll('.comparison-slider');
    
    sliders.forEach((slider) => {
        const range = slider.querySelector('.comparison-range');
        const imgAfter = slider.querySelector('.img-after');
        const line = slider.querySelector('.comparison-line');
        
        if (range && imgAfter && line) {image.png
            // Atualizar posição do slider
            range.addEventListener('input', (e) => {
                const value = e.target.value;
                slider.style.setProperty('--slider-position', `${value}%`);
            });
            
            // Mouse/touch events para arrastar
            let isDragging = false;
            
            slider.addEventListener('mousedown', () => isDragging = true);
            slider.addEventListener('mouseup', () => isDragging = false);
            slider.addEventListener('mouseleave', () => isDragging = false);
            
            slider.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                updateSliderPosition(e, slider, range);
            });
            
            // Touch events para mobile
            slider.addEventListener('touchmove', (e) => {
                updateSliderPosition(e.touches[0], slider, range);
            });
        }
    });
    
    function updateSliderPosition(e, slider, range) {
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        
        range.value = percent;
        slider.style.setProperty('--slider-position', `${percent}%`);
    }
});

// ===========================
// FAQ ACCORDION
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fechar todos os itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Abrir o item clicado (se não estava ativo)
            if (!isActive) {
                item.classList.add('active');
                
                // Scroll suave até o item
                setTimeout(() => {
                    const yOffset = -100;
                    const y = item.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 300);
            }
        });
    });
    
    // Abrir primeiro item por padrão
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

// Intersection Observer para animações ao scrollar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos com animação
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.comparison-item, .faq-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// ===========================
// KEYBOARD NAVIGATION (Acessibilidade)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach((question, index) => {
        question.addEventListener('keydown', (e) => {
            // Enter ou Space para abrir/fechar
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
            
            // Arrow Down para próximo item
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const next = faqQuestions[index + 1];
                if (next) next.focus();
            }
            
            // Arrow Up para item anterior
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = faqQuestions[index - 1];
                if (prev) prev.focus();
            }
        });
    });
});

// ===========================
// ANALYTICS TRACKING (Google Analytics)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Track FAQ clicks
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const questionText = this.querySelector('span').textContent;
            
            // Google Analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'faq_click', {
                    'event_category': 'FAQ',
                    'event_label': questionText
                });
            }
        });
    });
    
    // Track Before/After slider interaction
    document.querySelectorAll('.comparison-range').forEach(slider => {
        let hasInteracted = false;
        
        slider.addEventListener('input', function() {
            if (!hasInteracted && typeof gtag !== 'undefined') {
                gtag('event', 'before_after_interaction', {
                    'event_category': 'Before/After',
                    'event_label': 'Slider Moved'
                });
                hasInteracted = true;
            }
        });
    });
});

// ===========================
// PORTFOLIO ENHANCED ANIMATIONS
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Portfolio Animations
    initPortfolioAnimations();
    initPortfolioHoverEffects();
    initPortfolioLoadingStates();
});

function initPortfolioAnimations() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Staggered entrance animation
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) rotateX(15deg)';
        
        // Trigger animation with delay
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) rotateX(0deg)';
        }, index * 100);
    });
}

function initPortfolioHoverEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) rotateX(5deg) rotateY(5deg)';
            this.style.boxShadow = `
                0 20px 40px rgba(91, 163, 208, 0.2),
                0 0 30px rgba(91, 163, 208, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `;
            
            // Add glow effect to image
            const image = this.querySelector('.portfolio-image');
            if (image) {
                image.style.filter = 'brightness(1.1) contrast(1.1) saturate(1.1)';
            }
            
            // Add shimmer effect
            addShimmerEffect(this);
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            
            // Remove glow effect
            const image = this.querySelector('.portfolio-image');
            if (image) {
                image.style.filter = 'brightness(1) contrast(1) saturate(1)';
            }
            
            // Remove shimmer effect
            removeShimmerEffect(this);
        });
        
        // Enhanced click effects
        item.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-8px) rotateX(2deg) rotateY(2deg) scale(0.98)';
        });
        
        item.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1)';
        });
    });
}

function addShimmerEffect(element) {
    const shimmer = document.createElement('div');
    shimmer.className = 'shimmer-effect';
    shimmer.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            transparent 100%);
        animation: shimmer 1.5s ease-in-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(shimmer);
    
    // Remove shimmer after animation
    setTimeout(() => {
        if (shimmer.parentNode) {
            shimmer.parentNode.removeChild(shimmer);
        }
    }, 1500);
}

function removeShimmerEffect(element) {
    const shimmer = element.querySelector('.shimmer-effect');
    if (shimmer) {
        shimmer.remove();
    }
}

function initPortfolioLoadingStates() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        // Add loading state while images load
        const images = portfolioGrid.querySelectorAll('.portfolio-image');
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.parentElement.classList.remove('loading');
                this.style.opacity = '1';
            });
            
            img.addEventListener('error', function() {
                this.parentElement.classList.remove('loading');
                this.style.opacity = '0.5';
                console.warn('Failed to load portfolio image:', this.src);
            });
            
            // Add loading class initially
            img.parentElement.classList.add('loading');
            img.style.opacity = '0';
        });
    }
}

// Add shimmer animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    
    .portfolio-item.loading {
        animation: portfolioPulse 1.5s ease-in-out infinite;
    }
    
    @keyframes portfolioPulse {
        0%, 100% {
            opacity: 0.6;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.02);
        }
    }
`;
document.head.appendChild(style);

console.log('✅ New features loaded: FAQ Accordion, Before/After Slider, Enhanced Portfolio Animations & Enhanced Modal');


