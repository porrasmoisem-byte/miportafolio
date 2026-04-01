document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       MOBILE NAVIGATION MENU
       ========================================== */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle active class to show/hide menu
            navLinks.classList.toggle('active');
            
            // Toggle icons (Bars to X)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    /* ==========================================
       DYNAMIC NAVBAR STYLING ON SCROLL
       ========================================== */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 23, 0.95)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.background = 'rgba(10, 14, 23, 0.85)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.5rem 5%';
        }
    });

    /* ==========================================
       INITIALIZE AOS (Animate On Scroll)
       ========================================== */
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic'
    });
});
