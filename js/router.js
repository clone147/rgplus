/**
 * Hash-based router with external HTML file loading
 */
class Router {
    constructor() {
        this.routes = {};
        this.cache = {};
        this.currentPage = null;

        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    addRoute(path, pageFile) {
        this.routes[path] = pageFile;
    }

    async handleRoute() {
        const hash = window.location.hash || '#/';
        const path = hash.replace('#', '') || '/';

        const pageFile = this.routes[path] || this.routes['/placeholder'];

        if (pageFile) {
            await this.renderPage(pageFile, path);
            this.updateActiveNav(path);
            this.scrollToTop();
        }
    }

    async renderPage(pageFile, path) {
        const main = document.getElementById('main-content');
        if (!main) return;

        // Fade out
        main.style.opacity = '0';
        main.style.transform = 'translateY(10px)';

        try {
            let html;

            // Check cache first
            if (this.cache[pageFile]) {
                html = this.cache[pageFile];
            } else {
                const response = await fetch(`pages/${pageFile}.html`);
                if (!response.ok) throw new Error('Page not found');
                html = await response.text();
                this.cache[pageFile] = html;
            }

            setTimeout(() => {
                main.innerHTML = html;

                // Fade in
                requestAnimationFrame(() => {
                    main.style.opacity = '1';
                    main.style.transform = 'translateY(0)';
                });

                // Re-trigger animations
                this.initAnimations();
            }, 200);

        } catch (error) {
            console.error('Error loading page:', error);
            main.innerHTML = '<div class="container" style="padding: 100px 0; text-align: center;"><h1>Strona nie znaleziona</h1></div>';
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
        }

        this.currentPage = path;
    }

    updateActiveNav(path) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${path}`) {
                link.classList.add('active');
            }
            // Also check parent for dropdown
            const parent = link.closest('.nav-dropdown');
            if (parent) {
                const trigger = parent.querySelector('.nav-link-dropdown');
                if (href === `#${path}` && trigger) {
                    trigger.classList.add('active');
                }
            }
        });
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    initAnimations() {
        const elements = document.querySelectorAll('.animate-in');
        elements.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
        });
    }
}

// Export for use in app.js
window.Router = Router;
