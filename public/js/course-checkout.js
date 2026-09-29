/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Course Enrollment Checkout Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    initCourseCheckout();
});

let enrollmentOrder = {
    enrollmentId: "",
    course: null,
    student: {}
};

function initCourseCheckout() {
    const courseId = getUrlParameter("id");
    const container = document.getElementById("course-checkout-container");
    if (!container) return;

    if (!courseId) {
        container.innerHTML = `
            <div class="empty-state-card">
                <h2 class="empty-state-title">No Course Selected</h2>
                <p class="empty-state-text">Please choose a course from our academy catalog before enrolling.</p>
                <div class="mt-6"><a href="courses.html" class="btn btn-primary">Browse Courses</a></div>
            </div>
        `;
        return;
    }

    const course = getCourseById(courseId);
    if (!course) {
        container.innerHTML = `
            <div class="empty-state-card">
                <h2 class="empty-state-title">Course Not Found</h2>
                <p class="empty-state-text">The requested course could not be located.</p>
                <div class="mt-6"><a href="courses.html" class="btn btn-primary">Return to Courses</a></div>
            </div>
        `;
        return;
    }

    enrollmentOrder.enrollmentId = generateEnrollmentId();
    enrollmentOrder.course = course;

    // Prefill student details if available in session
    const savedCustomer = SessionStorageHelper.getCustomer();
    if (savedCustomer) {
        enrollmentOrder.student = savedCustomer;
    }

    renderEnrollmentForm(container);
}

function renderEnrollmentForm(container) {
    const e = enrollmentOrder;
    const c = e.course;

    container.innerHTML = `
        <div class="checkout-layout-grid">
            <!-- Left: Student Registration Details -->
            <div class="checkout-form-column" id="enrollment-form-panel">
                <div class="form-header-bar">
                    <span class="step-badge">Step 1 of 2</span>
                    <h2 class="form-title">Student Enrollment Details</h2>
                    <p class="form-subtitle">Course access instructions and certificate will be assigned to this name.</p>
                </div>

                <form id="course-enrollment-form" class="checkout-form" novalidate>
                    <div class="form-group">
                        <label for="student-fullname" class="form-label">Student Full Name <span class="req">*</span></label>
                        <input type="text" id="student-fullname" class="form-control" placeholder="Enter student's full name" value="${escapeHtml(e.student.fullName || '')}" required />
                        <span class="field-error" id="err-st-fullname"></span>
                    </div>

                    <div class="form-row-2">
                        <div class="form-group">
                            <label for="student-whatsapp" class="form-label">WhatsApp Number <span class="req">*</span></label>
                            <input type="tel" id="student-whatsapp" class="form-control" placeholder="For course access & mentorship" maxlength="10" value="${escapeHtml(e.student.whatsapp || '')}" required />
                            <span class="field-error" id="err-st-whatsapp"></span>
                        </div>
                        <div class="form-group">
                            <label for="student-phone" class="form-label">Calling Mobile Number <span class="req">*</span></label>
                            <input type="tel" id="student-phone" class="form-control" placeholder="10-digit mobile number" maxlength="10" value="${escapeHtml(e.student.phone || e.student.whatsapp || '')}" required />
                            <span class="field-error" id="err-st-phone"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="student-email" class="form-label">Email Address <span class="req">*</span></label>
                        <input type="email" id="student-email" class="form-control" placeholder="student@example.com" value="${escapeHtml(e.student.email || '')}" required />
                        <span class="field-error" id="err-st-email"></span>
                    </div>

                    <div class="form-row-2">
                        <div class="form-group">
                            <label for="student-city" class="form-label">City <span class="req">*</span></label>
                            <input type="text" id="student-city" class="form-control" placeholder="e.g. Prayagraj" value="${escapeHtml(e.student.city || '')}" required />
                            <span class="field-error" id="err-st-city"></span>
                        </div>
                        <div class="form-group">
                            <label for="student-state" class="form-label">State <span class="req">*</span></label>
                            <input type="text" id="student-state" class="form-control" placeholder="e.g. Uttar Pradesh" value="${escapeHtml(e.student.state || '')}" required />
                            <span class="field-error" id="err-st-state"></span>
                        </div>
                    </div>

                    <div class="form-submit-row">
                        <button type="submit" class="btn btn-primary btn-lg btn-block" id="btn-proceed-enroll-payment">
                            Proceed to UPI Payment (₹${c.price.toLocaleString('en-IN')}) →
                        </button>
                    </div>
                </form>
            </div>

            <!-- Right: Course Summary -->
            <aside class="checkout-summary-column">
                <div class="summary-card">
                    <div class="summary-header">
                        <h3 class="summary-title">Enrollment Summary</h3>
                        <span class="order-id-tag">${e.enrollmentId}</span>
                    </div>

                    <div class="summary-item-card">
                        <img src="${c.image}" alt="${escapeHtml(c.title)}" class="summary-thumb" onerror="this.onerror=null; this.src='images/brand/hero.jpg';" />
                        <div class="summary-item-details">
                            <h4 class="summary-item-name">${escapeHtml(c.title)}</h4>
                            <div class="summary-item-meta">
                                <span>Level: ${escapeHtml(c.level)}</span>
                                <span>·</span>
                                <span>${escapeHtml(c.duration)}</span>
                            </div>
                            <div class="summary-item-price">₹${c.price.toLocaleString('en-IN')}</div>
                        </div>
                    </div>

                    <div class="summary-breakdown">
                        <div class="breakdown-row">
                            <span>Course</span>
                            <span class="summary-text-val">${escapeHtml(c.title)}</span>
                        </div>
                        <div class="breakdown-row">
                            <span>Duration</span>
                            <span class="summary-text-val">${escapeHtml(c.duration)}</span>
                        </div>
                        <div class="breakdown-row">
                            <span>Skill Level</span>
                            <span class="summary-text-val">${escapeHtml(c.level)}</span>
                        </div>
                        <div class="breakdown-row total-row">
                            <span class="total-label">Total Course Fee</span>
                            <span class="total-amount tabular-num">₹${c.price.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <div class="payment-safety-notice">
                        <div class="safety-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <p class="safety-text">
                            <strong>Official Enrollment:</strong> Payment is made directly to Nabila Khan's UPI ID. Once payment is made, click confirm on WhatsApp to verify and unlock your modules.
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    `;

    document.getElementById("course-enrollment-form").addEventListener("submit", handleStudentSubmit);
}

function handleStudentSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById("student-fullname").value.trim();
    const whatsapp = document.getElementById("student-whatsapp").value.trim();
    const phone = document.getElementById("student-phone").value.trim();
    const email = document.getElementById("student-email").value.trim();
    const city = document.getElementById("student-city").value.trim();
    const state = document.getElementById("student-state").value.trim();

    document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
    let isValid = true;

    if (!fullName || fullName.length < 2) {
        document.getElementById("err-st-fullname").textContent = "Please enter the student's full name.";
        isValid = false;
    }

    if (!whatsapp || !/^\d{10}$/.test(whatsapp)) {
        document.getElementById("err-st-whatsapp").textContent = "Please enter a valid 10-digit WhatsApp number.";
        isValid = false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        document.getElementById("err-st-phone").textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("err-st-email").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!city) {
        document.getElementById("err-st-city").textContent = "City is required.";
        isValid = false;
    }

    if (!state) {
        document.getElementById("err-st-state").textContent = "State is required.";
        isValid = false;
    }

    if (!isValid) {
        showToast("Please fill in all required fields accurately.", "error");
        return;
    }

    enrollmentOrder.student = { fullName, whatsapp, phone, email, city, state };
    SessionStorageHelper.saveCustomer(enrollmentOrder.student);

    renderCoursePaymentStep();
}

/**
 * Step 2: Course UPI Payment & WhatsApp Confirmation
 * Conforms to Sections 21 & 22
 */
function renderCoursePaymentStep() {
    const e = enrollmentOrder;
    const c = e.course;
    const formPanel = document.getElementById("enrollment-form-panel");
    if (!formPanel) return;

    const upiLink = generateUPILink(c.price, e.enrollmentId);
    const qrUrl = generateUPIQRCodeURL(upiLink);

    formPanel.scrollIntoView({ behavior: "smooth", block: "start" });

    formPanel.innerHTML = `
        <div class="payment-step-container">
            <div class="form-header-bar">
                <span class="step-badge">Step 2 of 2</span>
                <h2 class="form-title">Complete Course Fee Payment</h2>
                <p class="form-subtitle">Enrollment ID: <strong>${e.enrollmentId}</strong> · Fee: <strong>₹${c.price.toLocaleString('en-IN')}</strong></p>
            </div>

            <!-- Primary Mobile UPI Action -->
            <div class="upi-action-box">
                <div class="upi-action-inner">
                    <p class="upi-prompt-text">Tap below to open your preferred UPI application (GPay, PhonePe, Paytm, BHIM):</p>
                    <a href="${upiLink}" class="btn btn-primary btn-lg btn-block btn-upi-pay" id="btn-open-upi-course">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        Pay ₹${c.price.toLocaleString('en-IN')} via UPI
                    </a>
                    <span class="upi-micro-hint">The amount ₹${c.price} and Enrollment ID ${e.enrollmentId} are pre-configured.</span>
                </div>
            </div>

            <!-- Desktop & Manual UPI Fallback Box -->
            <div class="upi-fallback-card">
                <h3 class="fallback-title">Pay using any UPI App / QR Code</h3>
                <p class="fallback-desc">Scan the dynamic QR code below from your smartphone or copy Nabila Khan's official UPI ID:</p>

                <div class="upi-id-copy-row">
                    <div class="upi-id-display">
                        <span class="upi-label">UPI ID:</span>
                        <code class="upi-code" id="display-course-upi-id">${UPI_CONFIG.upiId}</code>
                    </div>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-copy-course-upi" onclick="copyUPIID('btn-copy-course-upi')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        Copy UPI ID
                    </button>
                </div>

                <div class="qr-code-wrapper">
                    <div class="qr-image-frame">
                        <img src="${qrUrl}" alt="Scan to pay ₹${c.price} to Nabila Khan" class="qr-image" />
                    </div>
                    <div class="qr-instructions">
                        <p class="qr-inst-title">Scan & Pay via Mobile</p>
                        <p class="qr-inst-text">Open your UPI app on mobile, scan this QR code, and verify payee Nabila Khan.</p>
                        <span class="qr-amount-pill">Course Fee: ₹${c.price}</span>
                    </div>
                </div>
            </div>

            <!-- Payment Confirmation on WhatsApp -->
            <div class="payment-completion-module">
                <div class="completion-icon-ring">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3 class="completion-heading">Have you completed the payment?</h3>
                <p class="completion-explanation">
                    Please complete your UPI payment first. After payment, click the button below to confirm your enrollment with Nabila Khan on WhatsApp to receive immediate module access.
                </p>

                <div class="completion-action-box">
                    <button type="button" class="btn btn-whatsapp btn-lg btn-block" id="btn-confirm-course-whatsapp" onclick="dispatchWhatsAppCourseConfirmation()">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.54 4.12 11.91C4.12 7.37 7.82 3.67 12.05 3.67M9.53 7.33C9.36 7.33 9.09 7.39 8.86 7.64C8.63 7.89 8 8.48 8 9.68C8 10.88 8.88 12.04 9 12.2C9.13 12.37 10.72 14.82 13.16 15.87C13.74 16.12 14.19 16.27 14.54 16.38C15.12 16.57 15.65 16.54 16.07 16.48C16.53 16.41 17.5 15.89 17.7 15.32C17.9 14.75 17.9 14.27 17.84 14.17C17.78 14.07 17.63 14.01 17.4 13.9C17.17 13.79 16.04 13.23 15.83 13.16C15.63 13.08 15.48 13.05 15.33 13.27C15.19 13.5 14.76 14.01 14.63 14.17C14.5 14.32 14.37 14.34 14.14 14.23C13.91 14.11 12.95 13.8 11.82 12.79C10.94 12 10.34 11.03 10.22 10.82C10.1 10.6 10.21 10.47 10.32 10.36C10.43 10.25 10.56 10.07 10.68 9.93C10.79 9.79 10.83 9.68 10.91 9.53C10.98 9.38 10.94 9.25 10.89 9.14C10.83 9.03 10.37 7.9 10.18 7.44C9.99 6.99 9.8 7.05 9.66 7.05L9.53 7.33Z"/></svg>
                        Payment Completed — Confirm Enrollment on WhatsApp
                    </button>
                    <p class="verification-disclaimer">
                        Note: We do not claim automated verification. Nabila Khan will verify your payment and provide your syllabus access directly on WhatsApp.
                    </p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Section 22: Dispatches course enrollment confirmation message.
 */
function dispatchWhatsAppCourseConfirmation() {
    const e = enrollmentOrder;
    const message = formatCourseWhatsAppMessage(e);
    const waUrl = generateWhatsAppLink(message);

    window.location.href = waUrl;
}
