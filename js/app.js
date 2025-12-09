/**
 * Main application logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize router
    const router = new Router();

    // Define routes - path -> page file name (without .html)
    router.addRoute('/', 'page-home');
    router.addRoute('/o-nas', 'page-o-nas');
    router.addRoute('/oferta', 'page-oferta');
    router.addRoute('/urzadzenia', 'page-urzadzenia');
    router.addRoute('/municom', 'page-municom');
    router.addRoute('/goskom', 'page-goskom');
    router.addRoute('/realizacje', 'page-realizacje');
    router.addRoute('/galeria', 'page-galeria');
    router.addRoute('/kariera', 'page-kariera');
    router.addRoute('/wsparcie', 'page-wsparcie');
    router.addRoute('/kontakt', 'page-kontakt');
    router.addRoute('/placeholder', 'page-placeholder');

    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click (but not on dropdown triggers)
        navMenu.querySelectorAll('.nav-link:not(.nav-link-dropdown)').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth transition for main content
    const main = document.getElementById('main-content');
    if (main) {
        main.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    }

    // Dropdown menu handling for mobile
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-link-dropdown');
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
});
