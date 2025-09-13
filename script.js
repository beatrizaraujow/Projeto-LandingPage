// Script para a landing page SeuBoné Personalizados

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    // Adicionar classes de animação aos elementos
    addAnimationClasses();
    
    // Menu mobile toggle
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Alternar ícone do menu
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            // Restaurar ícone do menu
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Rolagem suave para as seções
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Destacar link de navegação ativo durante a rolagem
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Mostrar/ocultar botão "voltar ao topo"
        if (window.scrollY > 300) {
            if (!document.querySelector('.back-to-top')) {
                createBackToTopButton();
            }
            document.querySelector('.back-to-top').classList.add('show');
        } else if (document.querySelector('.back-to-top')) {
            document.querySelector('.back-to-top').classList.remove('show');
        }
        
        // Animar elementos quando entrarem na viewport
        animateOnScroll();
    });
    
    // Manipulação do formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
                this.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }
    
    // Manipulação do formulário de newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            const originalText = submitButton.textContent;
            
            if (!emailInput.value) {
                alert('Por favor, insira seu e-mail.');
                return;
            }
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Inscrição realizada com sucesso!');
                this.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1000);
        });
    }
    
    // Função para criar botão "voltar ao topo"
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.classList.add('back-to-top');
        document.body.appendChild(button);
        
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Adicionar estilos para o botão
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--accent-color);
                color: white;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
                z-index: 999;
            }
            
            .back-to-top.show {
                opacity: 1;
                transform: translateY(0);
            }
            
            .back-to-top:hover {
                background-color: #27ae60;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Função para adicionar classes de animação
    function addAnimationClasses() {
        // Hero section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('fade-in');
        }
        
        // Produtos
        const productItems = document.querySelectorAll('.product-item');
        productItems.forEach((item, index) => {
            item.classList.add('fade-in');
            item.classList.add(`delay-${(index % 4) + 1}`);
            item.style.opacity = '0';
        });
        
        // Benefícios
        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach((item, index) => {
            item.classList.add('fade-in');
            item.classList.add(`delay-${(index % 4) + 1}`);
            item.style.opacity = '0';
        });
        
        // Público-alvo
        const audienceItems = document.querySelectorAll('.audience-item');
        audienceItems.forEach((item, index) => {
            item.classList.add('fade-in');
            item.classList.add(`delay-${(index % 4) + 1}`);
            item.style.opacity = '0';
        });
        
        // Passos do processo
        const steps = document.querySelectorAll('.step');
        steps.forEach((step, index) => {
            step.classList.add('fade-in');
            step.classList.add(`delay-${index + 1}`);
            step.style.opacity = '0';
        });
    }
    
    // Função para animar elementos quando entrarem na viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
            }
        });
    }
    
    // Iniciar animação ao carregar a página
    animateOnScroll();
    
    // Adicionar estilos para o menu mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            nav ul {
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: var(--primary-color);
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                transform: translateY(-100%);
                opacity: 0;
                transition: transform 0.3s ease, opacity 0.3s ease;
                z-index: 999;
            }
            
            nav ul.active {
                transform: translateY(0);
                opacity: 1;
            }
            
            nav ul li {
                margin: 15px 0;
            }
            
            nav ul li a.active {
                color: var(--accent-color);
            }
        }
    `;
    document.head.appendChild(style);
});
