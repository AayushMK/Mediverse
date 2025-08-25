// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sections
    initializeComponents();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize product tabs - set surgical as default
    setTimeout(() => {
        switchTab('surgical');
    }, 100);
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
});

function initializeComponents() {
    // Render all components
    document.getElementById('header').innerHTML = createHeader();
    document.getElementById('hero').innerHTML = createHero();
    document.getElementById('about').innerHTML = createAbout();
    document.getElementById('leadership').innerHTML = createLeadership();
    document.getElementById('products').innerHTML = createProducts();
    document.getElementById('csr').innerHTML = createCSR();
    document.getElementById('contact').innerHTML = createContact();
    document.getElementById('footer').innerHTML = createFooter();
}

function setupEventListeners() {
    // Navigation links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
            const anchor = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
            const href = anchor.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    closeMobileMenu();
                }
            }
        }
    });
}

function initializeSmoothScrolling() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Global functions that can be called from onclick handlers
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.switchTab = switchTab;