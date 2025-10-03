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
        
        if (range && imgAfter && line) {
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

console.log('✅ New features loaded: FAQ Accordion & Before/After Slider');


