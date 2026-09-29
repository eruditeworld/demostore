/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Product Details Page Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    initProductDetail();
});

let currentProduct = null;
let currentQuantity = 1;

function initProductDetail() {
    const productId = getUrlParameter("id");
    const container = document.getElementById("product-detail-container");
    if (!container) return;

    if (!productId) {
        renderProductNotFound(container, "No product was selected. Please select a product from our shop.");
        return;
    }

    currentProduct = getProductById(productId);

    if (!currentProduct) {
        renderProductNotFound(container, `The product "${escapeHtml(productId)}" does not exist or may have been updated.`);
        return;
    }

    // Set page title for SEO
    document.title = `${currentProduct.name} | Nabila Khan Organic Henna`;

    // Render detail layout
    renderProductDetails(container, currentProduct);
}

function renderProductDetails(container, product) {
    container.innerHTML = `
        <div class="product-pdp-layout">
            <!-- Left Column: Gallery Media -->
            <div class="pdp-media-column">
                <div class="pdp-main-image-frame">
                    <img 
                        src="${product.image}" 
                        alt="${escapeHtml(product.name)}" 
                        id="pdp-main-image"
                        class="pdp-main-image"
                        onerror="this.onerror=null; this.src='images/brand/hero.jpg';"
                    />
                </div>
                <div class="pdp-assurance-strip">
                    <div class="pdp-assurance-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span>100% Organic Henna</span>
                    </div>
                    <div class="pdp-assurance-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        <span>PAN India Delivery</span>
                    </div>
                    <div class="pdp-assurance-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>Direct WhatsApp Support</span>
                    </div>
                </div>
            </div>

            <!-- Right Column: Purchase Information -->
            <div class="pdp-info-column">
                <nav class="breadcrumb-trail" aria-label="Breadcrumb">
                    <a href="index.html">Home</a>
                    <span class="crumb-separator">/</span>
                    <a href="shop.html">Shop</a>
                    <span class="crumb-separator">/</span>
                    <span class="current-crumb">${escapeHtml(product.category)}</span>
                </nav>

                <h1 class="pdp-title">${escapeHtml(product.name)}</h1>

                <div class="pdp-meta-bar">
                    <span class="pdp-category">${escapeHtml(product.category)}</span>
                    <span class="meta-dot">·</span>
                    <span class="pdp-pack-size">${escapeHtml(product.packSize)}</span>
                    <span class="meta-dot">·</span>
                    <span class="pdp-stock-status ${product.stock ? 'in-stock' : 'out-of-stock'}">
                        ${product.stock ? '✓ In Stock' : '✕ Out of Stock'}
                    </span>
                </div>

                <div class="pdp-price-panel">
                    <div class="pdp-price-amount">
                        <span class="currency-symbol">₹</span>
                        <span class="price-digits">${product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <span class="tax-shipping-note">Inclusive of all taxes · Express delivery calculated at checkout</span>
                </div>

                <p class="pdp-short-description">${escapeHtml(product.shortDescription)}</p>

                <!-- Purchase Controller -->
                <div class="pdp-purchase-card">
                    <div class="quantity-controller-row">
                        <label for="pdp-qty-input" class="qty-label">Quantity</label>
                        <div class="qty-stepper-box">
                            <button type="button" class="qty-btn" id="btn-qty-minus" aria-label="Decrease quantity">−</button>
                            <input type="number" id="pdp-qty-input" value="1" min="1" max="20" class="qty-input" readonly />
                            <button type="button" class="qty-btn" id="btn-qty-plus" aria-label="Increase quantity">+</button>
                        </div>
                        <div class="subtotal-indicator">
                            Subtotal: <strong id="pdp-live-subtotal">₹${product.price.toLocaleString('en-IN')}</strong>
                        </div>
                    </div>

                    <div class="pdp-actions-row">
                        <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-pdp-buy-now" ${!product.stock ? 'disabled' : ''}>
                            ${product.stock ? 'Buy Now — Proceed to Checkout' : 'Currently Out of Stock'}
                        </button>
                    </div>

                    <div class="pdp-pan-india-badge">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        <span>${escapeHtml(product.deliveryInfo)}</span>
                    </div>
                </div>

                <!-- Deep Information Accordion/Sections -->
                <div class="pdp-details-tabs">
                    <section class="pdp-detail-section">
                        <h2 class="pdp-section-heading">Detailed Description</h2>
                        <div class="pdp-prose">
                            <p>${escapeHtml(product.description)}</p>
                        </div>
                    </section>

                    <section class="pdp-detail-section">
                        <h2 class="pdp-section-heading">Key Product Benefits</h2>
                        <ul class="benefits-check-list">
                            ${product.benefits.map(b => `<li><span class="check-icon">✓</span> ${escapeHtml(b)}</li>`).join("")}
                        </ul>
                    </section>

                    <section class="pdp-detail-section">
                        <h2 class="pdp-section-heading">100% Pure Botanical Ingredients</h2>
                        <p class="pdp-ingredients-text">${escapeHtml(product.ingredients)}</p>
                    </section>
                </div>
            </div>
        </div>
    `;

    setupQuantityListeners(product);
}

function setupQuantityListeners(product) {
    const minusBtn = document.getElementById("btn-qty-minus");
    const plusBtn = document.getElementById("btn-qty-plus");
    const qtyInput = document.getElementById("pdp-qty-input");
    const liveSubtotal = document.getElementById("pdp-live-subtotal");
    const buyNowBtn = document.getElementById("btn-pdp-buy-now");

    const updateDisplay = () => {
        qtyInput.value = currentQuantity;
        const total = product.price * currentQuantity;
        liveSubtotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    };

    minusBtn.addEventListener("click", () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            updateDisplay();
        }
    });

    plusBtn.addEventListener("click", () => {
        if (currentQuantity < 20) {
            currentQuantity++;
            updateDisplay();
        } else {
            showToast("Maximum 20 items per direct order.", "info");
        }
    });

    buyNowBtn.addEventListener("click", () => {
        if (!product.stock) return;
        window.location.href = `checkout.html?id=${encodeURIComponent(product.id)}&qty=${currentQuantity}`;
    });
}

function renderProductNotFound(container, message) {
    container.innerHTML = `
        <div class="empty-state-card">
            <h2 class="empty-state-title">Product Not Found</h2>
            <p class="empty-state-text">${escapeHtml(message)}</p>
            <div class="mt-6 flex gap-4 justify-center">
                <a href="shop.html" class="btn btn-primary">Browse All Products</a>
                <a href="index.html" class="btn btn-secondary">Return Home</a>
            </div>
        </div>
    `;
}
