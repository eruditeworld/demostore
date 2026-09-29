/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Shop Page Engine: Dynamic Filtering, Real-time Search & Grid Rendering
 */

document.addEventListener("DOMContentLoaded", () => {
    initShop();
});

let currentCategory = "All";
let currentSearch = "";
let currentSort = "default";

function initShop() {
    const searchInput = document.getElementById("shop-search-input");
    const sortSelect = document.getElementById("shop-sort-select");
    const categoryButtons = document.querySelectorAll(".category-filter-btn");

    // Check if category is passed via URL (e.g. shop.html?category=cones)
    const urlCategory = getUrlParameter("category");
    if (urlCategory) {
        // Map shorthand if needed
        const catMap = {
            "cones": "Organic Mehndi Cones",
            "powder": "Henna Powder",
            "oils": "Essential Oils",
            "aftercare": "Aftercare Balm",
            "packs": "Cone Packs",
            "bridal": "Bridal Henna Kits"
        };
        currentCategory = catMap[urlCategory.toLowerCase()] || urlCategory;
    }

    // Category button events
    categoryButtons.forEach(btn => {
        const catValue = btn.getAttribute("data-category");
        if (catValue.toLowerCase() === currentCategory.toLowerCase()) {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = catValue;
            renderProductCatalog();
        });
    });

    // Search input event (debounced)
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener("input", (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearch = e.target.value;
                renderProductCatalog();
            }, 250);
        });
    }

    // Sort select event
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProductCatalog();
        });
    }

    // Initial render
    renderProductCatalog();
}

/**
 * Filters, sorts, and renders the products grid.
 */
function renderProductCatalog() {
    const grid = document.getElementById("shop-product-grid");
    const countDisplay = document.getElementById("shop-product-count");
    if (!grid) return;

    // Filter using products.js helper
    const matchedProducts = filterProducts(currentCategory, currentSearch, currentSort);

    // Update count display
    if (countDisplay) {
        countDisplay.textContent = `Showing ${matchedProducts.length} ${matchedProducts.length === 1 ? 'item' : 'items'}`;
    }

    // Empty state
    if (matchedProducts.length === 0) {
        grid.innerHTML = `
            <div class="empty-state-card col-span-full">
                <div class="empty-state-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                </div>
                <h3 class="empty-state-title">No products found</h3>
                <p class="empty-state-text">We couldn't find any products matching your current filters. Try another search or reset filters.</p>
                <button class="btn btn-secondary mt-4" onclick="resetShopFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    // Render product cards
    grid.innerHTML = matchedProducts.map(product => `
        <article class="product-card" data-product-id="${product.id}">
            <a href="product.html?id=${encodeURIComponent(product.id)}" class="product-card-media" aria-label="View details for ${escapeHtml(product.name)}">
                <img 
                    src="${product.image}" 
                    alt="${escapeHtml(product.name)}" 
                    loading="lazy"
                    class="product-image"
                    onerror="this.onerror=null; this.src='images/brand/hero.jpg';"
                />
                ${!product.stock ? '<span class="product-badge out-of-stock">Out of Stock</span>' : ''}
            </a>

            <div class="product-card-body">
                <div class="product-meta-row">
                    <span class="product-category-meta">${escapeHtml(product.category)}</span>
                    <span class="product-dot-separator">·</span>
                    <span class="product-pack-meta">${escapeHtml(product.packSize)}</span>
                </div>

                <h3 class="product-title">
                    <a href="product.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a>
                </h3>

                <p class="product-short-desc">${escapeHtml(product.shortDescription)}</p>

                <div class="product-footer-row">
                    <div class="product-price-wrapper">
                        <span class="product-currency">₹</span>
                        <span class="product-price-val">${product.price.toLocaleString('en-IN')}</span>
                    </div>

                    <div class="product-actions-group">
                        <a href="product.html?id=${encodeURIComponent(product.id)}" class="btn-card-link">Details</a>
                        <a href="checkout.html?id=${encodeURIComponent(product.id)}&qty=1" class="btn btn-sm btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </article>
    `).join("");
}

function resetShopFilters() {
    currentCategory = "All";
    currentSearch = "";
    currentSort = "default";

    const searchInput = document.getElementById("shop-search-input");
    if (searchInput) searchInput.value = "";

    const sortSelect = document.getElementById("shop-sort-select");
    if (sortSelect) sortSelect.value = "default";

    const categoryButtons = document.querySelectorAll(".category-filter-btn");
    categoryButtons.forEach(btn => {
        if (btn.getAttribute("data-category") === "All") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderProductCatalog();
}
