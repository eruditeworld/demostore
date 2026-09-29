/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Product Checkout Engine: Validation, Dynamic Order ID, UPI Payment & WhatsApp Confirmation
 */

document.addEventListener("DOMContentLoaded", () => {
    initProductCheckout();
});

let checkoutOrder = {
    orderId: "",
    product: null,
    quantity: 1,
    subtotal: 0,
    shippingFee: 0,
    totalAmount: 0,
    customer: {}
};

function initProductCheckout() {
    const productId = getUrlParameter("id");
    const rawQty = parseInt(getUrlParameter("qty"), 10);
    const quantity = isNaN(rawQty) || rawQty < 1 ? 1 : rawQty;

    const container = document.getElementById("checkout-flow-container");
    if (!container) return;

    if (!productId) {
        container.innerHTML = `
            <div class="empty-state-card">
                <h2 class="empty-state-title">No Product Selected</h2>
                <p class="empty-state-text">Please select a product from our shop before checking out.</p>
                <div class="mt-6"><a href="shop.html" class="btn btn-primary">Browse Shop</a></div>
            </div>
        `;
        return;
    }

    const product = getProductById(productId);
    if (!product) {
        container.innerHTML = `
            <div class="empty-state-card">
                <h2 class="empty-state-title">Product Not Found</h2>
                <p class="empty-state-text">The requested product could not be found.</p>
                <div class="mt-6"><a href="shop.html" class="btn btn-primary">Return to Shop</a></div>
            </div>
        `;
        return;
    }

    // Set order data
    checkoutOrder.orderId = generateOrderId();
    checkoutOrder.product = product;
    checkoutOrder.quantity = quantity;
    checkoutOrder.subtotal = product.price * quantity;
    checkoutOrder.shippingFee = checkoutOrder.subtotal >= business.freeDeliveryThreshold ? 0 : business.standardShippingFee;
    checkoutOrder.totalAmount = checkoutOrder.subtotal + checkoutOrder.shippingFee;

    // Prefill customer info from sessionStorage if available
    const savedCustomer = SessionStorageHelper.getCustomer();
    if (savedCustomer) {
        checkoutOrder.customer = savedCustomer;
    }

    renderCheckoutForm(container);
}

function renderCheckoutForm(container) {
    const o = checkoutOrder;

    container.innerHTML = `
        <div class="checkout-layout-grid">
            <!-- Left: Customer & Address Form -->
            <div class="checkout-form-column" id="checkout-form-panel">
                <div class="form-header-bar">
                    <span class="step-badge">Step 1 of 2</span>
                    <h2 class="form-title">Delivery & Contact Information</h2>
                    <p class="form-subtitle">Please provide your precise delivery details for PAN India courier dispatch.</p>
                </div>

                <form id="product-checkout-form" class="checkout-form" novalidate>
                    <div class="form-group">
                        <label for="cust-fullname" class="form-label">Full Name <span class="req">*</span></label>
                        <input type="text" id="cust-fullname" class="form-control" placeholder="e.g. Rahul Sharma" value="${escapeHtml(o.customer.fullName || '')}" required />
                        <span class="field-error" id="err-fullname"></span>
                    </div>

                    <div class="form-row-2">
                        <div class="form-group">
                            <label for="cust-phone" class="form-label">Mobile Number <span class="req">*</span></label>
                            <input type="tel" id="cust-phone" class="form-control" placeholder="10-digit mobile number" maxlength="10" value="${escapeHtml(o.customer.phone || '')}" required />
                            <span class="field-error" id="err-phone"></span>
                        </div>
                        <div class="form-group">
                            <label for="cust-whatsapp" class="form-label">WhatsApp Number <span class="req">*</span></label>
                            <input type="tel" id="cust-whatsapp" class="form-control" placeholder="For order confirmation" maxlength="10" value="${escapeHtml(o.customer.whatsapp || o.customer.phone || '')}" required />
                            <span class="field-error" id="err-whatsapp"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="cust-email" class="form-label">Email Address (Optional)</label>
                        <input type="email" id="cust-email" class="form-control" placeholder="For tracking updates" value="${escapeHtml(o.customer.email || '')}" />
                        <span class="field-error" id="err-email"></span>
                    </div>

                    <div class="form-group">
                        <label for="cust-address1" class="form-label">House / Flat / Building / Apartment <span class="req">*</span></label>
                        <input type="text" id="cust-address1" class="form-control" placeholder="Flat No., House Name, Building" value="${escapeHtml(o.customer.addressLine1 || '')}" required />
                        <span class="field-error" id="err-address1"></span>
                    </div>

                    <div class="form-group">
                        <label for="cust-address2" class="form-label">Street / Area / Landmark <span class="req">*</span></label>
                        <input type="text" id="cust-address2" class="form-control" placeholder="Street, Sector, Nearby Landmark" value="${escapeHtml(o.customer.addressLine2 || '')}" required />
                        <span class="field-error" id="err-address2"></span>
                    </div>

                    <div class="form-row-3">
                        <div class="form-group">
                            <label for="cust-city" class="form-label">City <span class="req">*</span></label>
                            <input type="text" id="cust-city" class="form-control" placeholder="e.g. Lucknow" value="${escapeHtml(o.customer.city || '')}" required />
                            <span class="field-error" id="err-city"></span>
                        </div>
                        <div class="form-group">
                            <label for="cust-state" class="form-label">State <span class="req">*</span></label>
                            <input type="text" id="cust-state" class="form-control" placeholder="e.g. Uttar Pradesh" value="${escapeHtml(o.customer.state || '')}" required />
                            <span class="field-error" id="err-state"></span>
                        </div>
                        <div class="form-group">
                            <label for="cust-pincode" class="form-label">Pincode <span class="req">*</span></label>
                            <input type="text" id="cust-pincode" class="form-control" placeholder="6-digit pincode" maxlength="6" value="${escapeHtml(o.customer.pincode || '')}" required />
                            <span class="field-error" id="err-pincode"></span>
                        </div>
                    </div>

                    <div class="form-submit-row">
                        <button type="submit" class="btn btn-primary btn-lg btn-block" id="btn-proceed-payment">
                            Continue to Payment & UPI Instructions →
                        </button>
                    </div>
                </form>
            </div>

            <!-- Right: Itemized Order Summary -->
            <aside class="checkout-summary-column">
                <div class="summary-card">
                    <div class="summary-header">
                        <h3 class="summary-title">Order Summary</h3>
                        <span class="order-id-tag">${o.orderId}</span>
                    </div>

                    <div class="summary-item-card">
                        <img src="${o.product.image}" alt="${escapeHtml(o.product.name)}" class="summary-thumb" onerror="this.onerror=null; this.src='images/brand/hero.jpg';" />
                        <div class="summary-item-details">
                            <h4 class="summary-item-name">${escapeHtml(o.product.name)}</h4>
                            <div class="summary-item-meta">
                                <span>Qty: ${o.quantity}</span>
                                <span>·</span>
                                <span>${escapeHtml(o.product.packSize)}</span>
                            </div>
                            <div class="summary-item-price">₹${(o.product.price * o.quantity).toLocaleString('en-IN')}</div>
                        </div>
                    </div>

                    <div class="summary-breakdown">
                        <div class="breakdown-row">
                            <span>Subtotal (${o.quantity} ${o.quantity === 1 ? 'item' : 'items'})</span>
                            <span class="tabular-num">₹${o.subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        <div class="breakdown-row">
                            <span>Express PAN India Delivery</span>
                            <span class="tabular-num ${o.shippingFee === 0 ? 'text-success' : ''}">
                                ${o.shippingFee === 0 ? 'FREE' : `₹${o.shippingFee}`}
                            </span>
                        </div>
                        ${o.shippingFee > 0 ? `
                            <p class="free-shipping-hint">Add ₹${business.freeDeliveryThreshold - o.subtotal} more for Free Shipping!</p>
                        ` : ''}
                        <div class="breakdown-row total-row">
                            <span class="total-label">Total Payable Amount</span>
                            <span class="total-amount tabular-num">₹${o.totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <div class="payment-safety-notice">
                        <div class="safety-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <p class="safety-text">
                            <strong>Direct UPI Payment:</strong> Payment is made directly to Nabila Khan's official UPI ID. Orders are confirmed manually through WhatsApp after payment.
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    `;

    document.getElementById("product-checkout-form").addEventListener("submit", handleCustomerSubmit);
}

function handleCustomerSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById("cust-fullname").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const whatsapp = document.getElementById("cust-whatsapp").value.trim();
    const email = document.getElementById("cust-email").value.trim();
    const address1 = document.getElementById("cust-address1").value.trim();
    const address2 = document.getElementById("cust-address2").value.trim();
    const city = document.getElementById("cust-city").value.trim();
    const state = document.getElementById("cust-state").value.trim();
    const pincode = document.getElementById("cust-pincode").value.trim();

    // Reset error fields
    document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
    let isValid = true;

    if (!fullName || fullName.length < 2) {
        document.getElementById("err-fullname").textContent = "Please enter your full name.";
        isValid = false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        document.getElementById("err-phone").textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    if (!whatsapp || !/^\d{10}$/.test(whatsapp)) {
        document.getElementById("err-whatsapp").textContent = "Please enter a valid 10-digit WhatsApp number.";
        isValid = false;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("err-email").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!address1) {
        document.getElementById("err-address1").textContent = "House or Flat details are required.";
        isValid = false;
    }

    if (!address2) {
        document.getElementById("err-address2").textContent = "Street or Area is required.";
        isValid = false;
    }

    if (!city) {
        document.getElementById("err-city").textContent = "City is required.";
        isValid = false;
    }

    if (!state) {
        document.getElementById("err-state").textContent = "State is required.";
        isValid = false;
    }

    if (!pincode || !/^\d{6}$/.test(pincode)) {
        document.getElementById("err-pincode").textContent = "Please enter a valid 6-digit postal pincode.";
        isValid = false;
    }

    if (!isValid) {
        showToast("Please correct the highlighted fields.", "error");
        return;
    }

    // Save customer data in state & session
    checkoutOrder.customer = {
        fullName,
        phone,
        whatsapp,
        email,
        addressLine1: address1,
        addressLine2: address2,
        city,
        state,
        pincode
    };
    SessionStorageHelper.saveCustomer(checkoutOrder.customer);

    // Proceed to Step 2: Payment screen
    renderPaymentStep();
}

/**
 * Step 2: UPI Payment & Fallback + WhatsApp Confirmation
 * Conforms to Sections 13, 14, 15, 16, 36
 */
function renderPaymentStep() {
    const o = checkoutOrder;
    const formPanel = document.getElementById("checkout-form-panel");
    if (!formPanel) return;

    // Generate dynamic UPI Deep link
    const upiLink = generateUPILink(o.totalAmount, o.orderId);
    const qrUrl = generateUPIQRCodeURL(upiLink);

    // Scroll to top of payment panel
    formPanel.scrollIntoView({ behavior: "smooth", block: "start" });

    formPanel.innerHTML = `
        <div class="payment-step-container">
            <div class="form-header-bar">
                <span class="step-badge">Step 2 of 2</span>
                <h2 class="form-title">Complete Your UPI Payment</h2>
                <p class="form-subtitle">Order Reference: <strong>${o.orderId}</strong> · Total: <strong>₹${o.totalAmount.toLocaleString('en-IN')}</strong></p>
            </div>

            <!-- Primary Mobile UPI Action -->
            <div class="upi-action-box">
                <div class="upi-action-inner">
                    <p class="upi-prompt-text">Tap below to open any installed UPI application (GPay, PhonePe, Paytm, BHIM, CRED):</p>
                    <a href="${upiLink}" class="btn btn-primary btn-lg btn-block btn-upi-pay" id="btn-open-upi">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        Pay ₹${o.totalAmount.toLocaleString('en-IN')} via UPI
                    </a>
                    <span class="upi-micro-hint">Amount and Order ID will be pre-filled automatically in your UPI app.</span>
                </div>
            </div>

            <!-- Desktop & Manual UPI Fallback Box -->
            <div class="upi-fallback-card">
                <h3 class="fallback-title">Pay using any UPI App / QR Code</h3>
                <p class="fallback-desc">If you are on a computer or preferred to pay manually, copy the UPI ID below or scan the QR code from your phone:</p>

                <div class="upi-id-copy-row">
                    <div class="upi-id-display">
                        <span class="upi-label">UPI ID:</span>
                        <code class="upi-code" id="display-upi-id">${UPI_CONFIG.upiId}</code>
                    </div>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-copy-upi" onclick="copyUPIID('btn-copy-upi')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        Copy UPI ID
                    </button>
                </div>

                <div class="qr-code-wrapper">
                    <div class="qr-image-frame">
                        <img src="${qrUrl}" alt="Scan to pay ₹${o.totalAmount} to Nabila Khan" class="qr-image" />
                    </div>
                    <div class="qr-instructions">
                        <p class="qr-inst-title">Scan with any UPI App</p>
                        <p class="qr-inst-text">Open Google Pay, PhonePe, Paytm, or BHIM on your phone and point the scanner at this code.</p>
                        <span class="qr-amount-pill">Exact Amount: ₹${o.totalAmount}</span>
                    </div>
                </div>
            </div>

            <!-- Section 15: Payment Completion Screen -->
            <div class="payment-completion-module">
                <div class="completion-icon-ring">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3 class="completion-heading">Have you completed the payment?</h3>
                <p class="completion-explanation">
                    Please complete your UPI payment first. After payment, click the button below to send your order details to Nabila Khan on WhatsApp for confirmation.
                </p>

                <div class="completion-action-box">
                    <button type="button" class="btn btn-whatsapp btn-lg btn-block" id="btn-confirm-whatsapp" onclick="dispatchWhatsAppOrderConfirmation()">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.54 4.12 11.91C4.12 7.37 7.82 3.67 12.05 3.67M9.53 7.33C9.36 7.33 9.09 7.39 8.86 7.64C8.63 7.89 8 8.48 8 9.68C8 10.88 8.88 12.04 9 12.2C9.13 12.37 10.72 14.82 13.16 15.87C13.74 16.12 14.19 16.27 14.54 16.38C15.12 16.57 15.65 16.54 16.07 16.48C16.53 16.41 17.5 15.89 17.7 15.32C17.9 14.75 17.9 14.27 17.84 14.17C17.78 14.07 17.63 14.01 17.4 13.9C17.17 13.79 16.04 13.23 15.83 13.16C15.63 13.08 15.48 13.05 15.33 13.27C15.19 13.5 14.76 14.01 14.63 14.17C14.5 14.32 14.37 14.34 14.14 14.23C13.91 14.11 12.95 13.8 11.82 12.79C10.94 12 10.34 11.03 10.22 10.82C10.1 10.6 10.21 10.47 10.32 10.36C10.43 10.25 10.56 10.07 10.68 9.93C10.79 9.79 10.83 9.68 10.91 9.53C10.98 9.38 10.94 9.25 10.89 9.14C10.83 9.03 10.37 7.9 10.18 7.44C9.99 6.99 9.8 7.05 9.66 7.05L9.53 7.33Z"/></svg>
                        Payment Completed — Confirm on WhatsApp
                    </button>
                    <p class="verification-disclaimer">
                        Note: We do not claim automated verification. Nabila Khan will cross-reference your order ID and dispatch your tracking details directly on WhatsApp.
                    </p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Section 16: Dispatches formatted WhatsApp confirmation message.
 */
function dispatchWhatsAppOrderConfirmation() {
    const o = checkoutOrder;
    const message = formatOrderWhatsAppMessage(o);
    const waUrl = generateWhatsAppLink(message);

    // Open WhatsApp in new tab / app
    window.location.href = waUrl;
}
