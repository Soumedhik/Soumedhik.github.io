document.addEventListener('DOMContentLoaded', function () {
    var html = document.documentElement;
    var body = document.body;
    var header = document.querySelector('.site-header');
    var navLinks = document.querySelector('.nav-links');
    var navToggle = document.querySelector('.nav-toggle');

    /* ─── Header scroll state ─── */
    function syncHeader() {
        if (!header) return;
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });

    /* ─── Mobile hamburger menu ─── */
    function isMobile() {
        return window.innerWidth <= 920;
    }

    function closeMobileMenu() {
        if (!navLinks || !navToggle) return;
        body.classList.remove('menu-open');
        navLinks.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    function openMobileMenu() {
        if (!navLinks || !navToggle) return;
        body.classList.add('menu-open');
        navLinks.classList.add('nav-open');
        navToggle.setAttribute('aria-expanded', 'true');
    }

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            if (body.classList.contains('menu-open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (navLinks) {
        navLinks.addEventListener('click', function (e) {
            if (e.target.closest('a.nav-link')) {
                closeMobileMenu();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && body.classList.contains('menu-open')) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function () {
        if (!isMobile()) {
            closeMobileMenu();
        }
    }, { passive: true });

    /* ─── Overflow navigation (desktop only) ─── */
    function setupOverflowNavigation() {
        if (!navLinks) return;

        var links = Array.from(navLinks.querySelectorAll('.nav-link'));
        if (!links.length) return;

        var more = document.createElement('div');
        more.className = 'nav-more';

        var moreToggle = document.createElement('button');
        moreToggle.type = 'button';
        moreToggle.className = 'nav-more-toggle';
        moreToggle.setAttribute('aria-expanded', 'false');
        moreToggle.setAttribute('aria-haspopup', 'true');
        moreToggle.setAttribute('aria-label', 'Show more navigation links');
        moreToggle.textContent = 'MORE';

        var moreMenu = document.createElement('div');
        moreMenu.className = 'nav-more-menu';

        more.appendChild(moreToggle);
        more.appendChild(moreMenu);
        navLinks.appendChild(more);

        links.forEach(function (link, index) {
            link.dataset.navOrder = String(index);
        });

        function isPinned(link) {
            var href = (link.getAttribute('href') || '').toLowerCase();
            return href.indexOf('about.html') !== -1;
        }

        function closeMoreMenu() {
            more.classList.remove('open');
            moreToggle.setAttribute('aria-expanded', 'false');
        }

        function openMoreMenu() {
            more.classList.add('open');
            moreToggle.setAttribute('aria-expanded', 'true');
        }

        function toggleMoreMenu() {
            if (more.classList.contains('open')) {
                closeMoreMenu();
            } else {
                openMoreMenu();
            }
        }

        function restoreLinks() {
            links
                .slice()
                .sort(function (a, b) {
                    return Number(a.dataset.navOrder) - Number(b.dataset.navOrder);
                })
                .forEach(function (link) {
                    navLinks.insertBefore(link, more);
                });
        }

        function updateOverflow() {
            closeMoreMenu();
            restoreLinks();
            moreMenu.innerHTML = '';

            // On mobile, restore all links (they live in the hamburger drawer)
            if (isMobile()) {
                more.style.display = 'none';
                return;
            }

            more.style.display = 'inline-flex';

            var movable = links.filter(function (link) {
                return !isPinned(link);
            });

            while (navLinks.scrollWidth > navLinks.clientWidth && movable.length > 0) {
                var moved = movable.pop();
                moreMenu.insertBefore(moved, moreMenu.firstChild);
            }

            if (moreMenu.children.length === 0) {
                more.style.display = 'none';
                closeMoreMenu();
            } else {
                more.style.display = 'inline-flex';
            }
        }

        var resizeTimer;
        function scheduleOverflowUpdate() {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(updateOverflow, 60);
        }

        moreToggle.addEventListener('click', function (event) {
            event.preventDefault();
            toggleMoreMenu();
        });

        navLinks.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                closeMoreMenu();
            }
        });

        document.addEventListener('click', function (event) {
            if (!more.contains(event.target)) {
                closeMoreMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMoreMenu();
            }
        });

        window.addEventListener('resize', scheduleOverflowUpdate, { passive: true });
        window.addEventListener('load', scheduleOverflowUpdate);
        scheduleOverflowUpdate();
    }

    setupOverflowNavigation();

    /* ─── Scroll reveal ─── */
    html.classList.add('js-ready');

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -32px 0px'
        });

        var revealEls = document.querySelectorAll('.entry, .news-entry, .resource-row');
        revealEls.forEach(function (el, i) {
            // Stagger within each group of 4
            el.style.transitionDelay = (i % 4 * 70) + 'ms';
            revealObserver.observe(el);
        });

        var logoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                    logoObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        });

        var logoItems = document.querySelectorAll('.logo-item');
        logoItems.forEach(function (el, i) {
            el.style.transitionDelay = (i * 50) + 'ms';
            logoObserver.observe(el);
        });
    }
});
