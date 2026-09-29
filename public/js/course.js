/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Course Details Page Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    initCourseDetail();
});

let currentCourse = null;

function initCourseDetail() {
    const courseId = getUrlParameter("id");
    const container = document.getElementById("course-detail-container");
    if (!container) return;

    if (!courseId) {
        renderCourseNotFound(container, "No course was specified. Please select a course from the academy catalog.");
        return;
    }

    currentCourse = getCourseById(courseId);

    if (!currentCourse) {
        renderCourseNotFound(container, `The course "${escapeHtml(courseId)}" could not be found.`);
        return;
    }

    document.title = `${currentCourse.title} | Nabila Khan Mehndi Academy`;

    renderCoursePage(container, currentCourse);
}

function renderCoursePage(container, c) {
    container.innerHTML = `
        <div class="course-pdp-layout">
            <!-- Left / Main Curriculum Column -->
            <div class="course-main-content">
                <nav class="breadcrumb-trail" aria-label="Breadcrumb">
                    <a href="index.html">Home</a>
                    <span class="crumb-separator">/</span>
                    <a href="courses.html">Academy</a>
                    <span class="crumb-separator">/</span>
                    <span class="current-crumb">${escapeHtml(c.title)}</span>
                </nav>

                <h1 class="course-page-title">${escapeHtml(c.title)}</h1>

                <div class="course-meta-pills">
                    <span class="meta-item">Level: <strong>${escapeHtml(c.level)}</strong></span>
                    <span class="meta-dot">·</span>
                    <span class="meta-item">Duration: <strong>${escapeHtml(c.duration)}</strong></span>
                    <span class="meta-dot">·</span>
                    <span class="meta-item">Mode: <strong>Online Self-Paced + Mentor Review</strong></span>
                </div>

                <div class="course-hero-media">
                    <img 
                        src="${c.image}" 
                        alt="${escapeHtml(c.title)}" 
                        class="course-featured-banner"
                        onerror="this.onerror=null; this.src='images/brand/hero.jpg';"
                    />
                </div>

                <!-- Description -->
                <section class="course-content-block">
                    <h2 class="content-block-heading">About This Course</h2>
                    <div class="course-prose">
                        <p>${escapeHtml(c.description)}</p>
                    </div>
                </section>

                <!-- What You'll Learn -->
                <section class="course-content-block">
                    <h2 class="content-block-heading">What You'll Learn</h2>
                    <div class="learning-outcomes-grid">
                        ${c.whatYouWillLearn.map(item => `
                            <div class="outcome-card">
                                <div class="outcome-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                <p class="outcome-text">${escapeHtml(item)}</p>
                            </div>
                        `).join("")}
                    </div>
                </section>

                <!-- Course Modules / Curriculum -->
                <section class="course-content-block">
                    <h2 class="content-block-heading">Course Curriculum & Modules</h2>
                    <div class="curriculum-list">
                        ${c.modules.map((mod, index) => `
                            <div class="module-item">
                                <div class="module-num">${String(index + 1).padStart(2, '0')}</div>
                                <div class="module-info">
                                    <h4 class="module-title">${escapeHtml(mod)}</h4>
                                    <span class="module-meta">Structured video demonstration + practical assignment</span>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </section>

                <!-- Benefits & Takeaways -->
                <section class="course-content-block">
                    <h2 class="content-block-heading">Student Benefits & Takeaways</h2>
                    <ul class="benefits-check-list">
                        ${c.benefits.map(b => `<li><span class="check-icon">✓</span> ${escapeHtml(b)}</li>`).join("")}
                    </ul>
                </section>

                <!-- Who Should Join -->
                <section class="course-content-block">
                    <h2 class="content-block-heading">Who Should Join This Program</h2>
                    <div class="audience-tags">
                        ${c.whoShouldJoin.map(a => `
                            <div class="audience-item">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                <span>${escapeHtml(a)}</span>
                            </div>
                        `).join("")}
                    </div>
                </section>

                <!-- Frequently Asked Questions Accordion -->
                ${c.faqs && c.faqs.length > 0 ? `
                    <section class="course-content-block">
                        <h2 class="content-block-heading">Course Questions & Answers</h2>
                        <div class="faq-accordion-group">
                            ${c.faqs.map((faq, i) => `
                                <details class="faq-accordion-item" ${i === 0 ? 'open' : ''}>
                                    <summary class="faq-question">${escapeHtml(faq.q)}</summary>
                                    <div class="faq-answer">
                                        <p>${escapeHtml(faq.a)}</p>
                                    </div>
                                </details>
                            `).join("")}
                        </div>
                    </section>
                ` : ''}
            </div>

            <!-- Right / Sticky Enrollment Sidebar -->
            <aside class="course-enroll-sidebar">
                <div class="enroll-sticky-card">
                    <div class="enroll-price-header">
                        <span class="enroll-tag">Official Enrollment</span>
                        <div class="enroll-amount-block">
                            <span class="currency">₹</span>
                            <span class="digits">${c.price.toLocaleString('en-IN')}</span>
                        </div>
                        <span class="enroll-tax-hint">One-time payment · Complete lifetime course access</span>
                    </div>

                    <div class="enroll-perks-list">
                        <div class="perk-row">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span>Duration: ${escapeHtml(c.duration)}</span>
                        </div>
                        <div class="perk-row">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                            <span>${c.modules.length} Intensive Modules</span>
                        </div>
                        <div class="perk-row">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            <span>Direct 1-on-1 Feedback on WhatsApp</span>
                        </div>
                        <div class="perk-row">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                            <span>Certificate of Completion</span>
                        </div>
                    </div>

                    <a href="course-checkout.html?id=${encodeURIComponent(c.id)}" class="btn btn-primary btn-lg btn-block">
                        Enroll Now — ₹${c.price.toLocaleString('en-IN')}
                    </a>

                    <div class="enroll-guarantee-note">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span>Direct enrollment via UPI & WhatsApp confirmation with Nabila Khan</span>
                    </div>
                </div>
            </aside>
        </div>
    `;
}

function renderCourseNotFound(container, message) {
    container.innerHTML = `
        <div class="empty-state-card">
            <h2 class="empty-state-title">Course Not Found</h2>
            <p class="empty-state-text">${escapeHtml(message)}</p>
            <div class="mt-6 flex gap-4 justify-center">
                <a href="courses.html" class="btn btn-primary">Browse All Courses</a>
                <a href="index.html" class="btn btn-secondary">Return Home</a>
            </div>
        </div>
    `;
}
