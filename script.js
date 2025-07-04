// Smooth scrolling para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simular delay de envio
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Animações de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animateElements = document.querySelectorAll('.feature, .testimonial-card, .purchase-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Contador de caracteres para textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const charCount = document.createElement('div');
        charCount.className = 'char-count';
        charCount.style.cssText = 'text-align: right; font-size: 0.8rem; color: #7F8C8D; margin-top: 0.5rem;';
        messageTextarea.parentNode.appendChild(charCount);
        
        function updateCharCount() {
            const count = messageTextarea.value.length;
            charCount.textContent = `${count}/1000 caracteres`;
            
            if (count > 900) {
                charCount.style.color = '#E74C3C';
            } else if (count > 700) {
                charCount.style.color = '#F39C12';
            } else {
                charCount.style.color = '#7F8C8D';
            }
        }
        
        messageTextarea.addEventListener('input', updateCharCount);
        updateCharCount();
    }

    // Lazy loading para imagens (se houver)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Parallax effect para o hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Tooltip para preços
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach(price => {
        price.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'price-tooltip';
            tooltip.textContent = 'Preço especial por tempo limitado!';
            tooltip.style.cssText = `
                position: absolute;
                background: #2C3E50;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
        });
        
        price.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.price-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Contador regressivo (opcional)
    function createCountdown() {
        const countdownElement = document.createElement('div');
        countdownElement.className = 'countdown';
        countdownElement.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #E74C3C, #C0392B);
            color: white;
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
            z-index: 999;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            font-weight: 600;
        `;
        
        document.body.appendChild(countdownElement);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const target = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 horas
            const distance = target - now;
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div style="font-size: 0.8rem; margin-bottom: 0.5rem;">Oferta por tempo limitado</div>
                <div style="font-size: 1.2rem;">${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</div>
            `;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Descomente a linha abaixo para ativar o contador regressivo
    // createCountdown();

    // Analytics tracking (simulado)
    function trackEvent(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    }

    // Track clicks nos botões de compra
    const purchaseButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.textContent.includes('Kiwify') ? 'Kiwify' : 
                           this.textContent.includes('Hotmart') ? 'Hotmart' : 
                           this.textContent.includes('Amazon') ? 'Amazon' : 'Other';
            
            trackEvent('purchase_click', {
                platform: platform,
                button_text: this.textContent.trim(),
                url: this.href
            });
        });
    });

    // Track WhatsApp clicks
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .whatsapp-float a');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('whatsapp_click', {
                location: this.closest('.contact-item') ? 'contact_section' : 'float_button'
            });
        });
    });

    // Performance optimization
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimize scroll events
    const optimizedScrollHandler = debounce(function() {
        // Scroll-based animations and effects
    }, 16); // ~60fps

    window.addEventListener('scroll', optimizedScrollHandler);

    // Preload critical resources
    function preloadResources() {
        const criticalLinks = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];
        
        criticalLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }

    preloadResources();

    // Service Worker registration (para PWA)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // PWA: Add to home screen prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Mostrar botão "Adicionar à tela inicial" se desejar
        // showInstallPromotion();
    });

    // Accessibility improvements
    function improveAccessibility() {
        // Adicionar skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
        `;
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Adicionar main content id
        const mainContent = document.querySelector('.hero');
        if (mainContent) {
            mainContent.id = 'main-content';
        }
    }

    improveAccessibility();

    console.log('Avivamento Diário - Fan Page carregada com sucesso! 🔥');
}); 