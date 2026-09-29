/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Global Core Engine: Navigation, IDs, Toast System & Utility
 */

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initScrollEffects();
    initBackToTop();
    initActiveNavLinks();
});

/**
 * Initializes sticky navigation and mobile hamburger menu.
 */
function initNavigation() {
    const header = document.querySelector(".site-header");
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".site-nav");

    // Scroll state for header styling
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }, { passive: true });
    }

    // Mobile toggle & panel setup
    if (mobileToggle && navMenu) {
        // Ensure WhatsApp CTA is present in mobile menu drawer on all pages
        if (!navMenu.querySelector(".mobile-nav-cta")) {
            const ctaDiv = document.createElement("div");
            ctaDiv.className = "mobile-nav-cta";
            ctaDiv.innerHTML = `
                <a href="${typeof generateWhatsAppGeneralInquiryLink === 'function' ? generateWhatsAppGeneralInquiryLink() : 'https://wa.me/918447783091?text=' + encodeURIComponent('Hello Nabila Khan, I would like to chat about your organic henna products and courses.')}" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.54 4.12 11.91C4.12 7.37 7.82 3.67 12.05 3.67M9.53 7.33C9.36 7.33 9.09 7.39 8.86 7.64C8.63 7.89 8 8.48 8 9.68C8 10.88 8.88 12.04 9 12.2C9.13 12.37 10.72 14.82 13.16 15.87C13.74 16.12 14.19 16.27 14.54 16.38C15.12 16.57 15.65 16.54 16.07 16.48C16.53 16.41 17.5 15.89 17.7 15.32C17.9 14.75 17.9 14.27 17.84 14.17C17.78 14.07 17.63 14.01 17.4 13.9C17.17 13.79 16.04 13.23 15.83 13.16C15.63 13.08 15.48 13.05 15.33 13.27C15.19 13.5 14.76 14.01 14.63 14.17C14.5 14.32 14.37 14.34 14.14 14.23C13.91 14.11 12.95 13.8 11.82 12.79C10.94 12 10.34 11.03 10.22 10.82C10.1 10.6 10.21 10.47 10.32 10.36C10.43 10.25 10.56 10.07 10.68 9.93C10.79 9.79 10.83 9.68 10.91 9.53C10.98 9.38 10.94 9.25 10.89 9.14C10.83 9.03 10.37 7.9 10.18 7.44C9.99 6.99 9.8 7.05 9.66 7.05L9.53 7.33Z"/></svg>
                    Chat on WhatsApp
                </a>
            `;
            navMenu.appendChild(ctaDiv);
        }

        mobileToggle.addEventListener("click", () => {
            const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
            mobileToggle.setAttribute("aria-expanded", !isExpanded);
            navMenu.classList.toggle("nav-open");
            document.body.classList.toggle("menu-open", !isExpanded);
        });

        // Close on nav link or mobile WhatsApp button click
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav-open");
                mobileToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
            });
        });
    }
}

/**
 * Highlights current active link based on window.location.pathname.
 */
function initActiveNavLinks() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}

/**
 * Smooth scroll & back-to-top button.
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector(".back-to-top");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/**
 * Subtle scroll reveal animations.
 */
function initScrollEffects() {
    // Only run if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) return;

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Toast Notification System.
 * @param {string} message - Message to display
 * @param {string} type - 'success' | 'error' | 'info'
 */
function showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    
    // Choose icon
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (type === 'error') {
        iconSvg = '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    } else {
        iconSvg = '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    toast.innerHTML = `
        ${iconSvg}
        <span class="toast-message">${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    // Fade in
    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    // Remove after 3.5s
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            if (toast.parentElement) {
                toast.parentElement.removeChild(toast);
            }
        }, 300);
    }, 3500);
}

/**
 * Generates unique Order ID conforming to Section 12:
 * Example: NK-20260928-001
 */
function generateOrderId() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    
    // Random 3-digit order sequence (100 - 999)
    const seq = Math.floor(100 + Math.random() * 900);
    return `NK-${yyyy}${mm}${dd}-${seq}`;
}

/**
 * Generates unique Course Enrollment ID conforming to Section 20:
 * Example: NK-C-20260928-001
 */
function generateEnrollmentId() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    
    // Random 3-digit enrollment sequence (100 - 999)
    const seq = Math.floor(100 + Math.random() * 900);
    return `NK-C-${yyyy}${mm}${dd}-${seq}`;
}

/**
 * Basic HTML escaping helper.
 */
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Helper to retrieve URL query parameters.
 * @param {string} param - Param name
 * @returns {string|null}
 */
function getUrlParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Customer session cache (non-sensitive fields only).
 */
const SessionStorageHelper = {
    saveCustomer(data) {
        try {
            sessionStorage.setItem("nk_customer", JSON.stringify({
                fullName: data.fullName || "",
                phone: data.phone || "",
                whatsapp: data.whatsapp || "",
                email: data.email || "",
                addressLine1: data.addressLine1 || "",
                addressLine2: data.addressLine2 || "",
                city: data.city || "",
                state: data.state || "",
                pincode: data.pincode || ""
            }));
        } catch (e) {
            // Ignore storage disabled
        }
    },
    getCustomer() {
        try {
            const raw = sessionStorage.getItem("nk_customer");
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }
};
