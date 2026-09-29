/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Academy Courses Page Engine: Filtering & Dynamic Course Catalog
 */

document.addEventListener("DOMContentLoaded", () => {
    initCoursesPage();
});

let currentCourseLevel = "All";

function initCoursesPage() {
    const filterButtons = document.querySelectorAll(".course-filter-btn");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCourseLevel = btn.getAttribute("data-level");
            renderCoursesGrid();
        });
    });

    renderCoursesGrid();
}

function renderCoursesGrid() {
    const grid = document.getElementById("courses-grid");
    if (!grid) return;

    const matchedCourses = filterCourses(currentCourseLevel);

    if (matchedCourses.length === 0) {
        grid.innerHTML = `
            <div class="empty-state-card col-span-full">
                <h3 class="empty-state-title">No courses found</h3>
                <p class="empty-state-text">No courses match the selected level. Try selecting "All Courses".</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = matchedCourses.map(c => `
        <article class="course-card" data-course-id="${c.id}">
            <a href="course.html?id=${encodeURIComponent(c.id)}" class="course-card-media" aria-label="Explore ${escapeHtml(c.title)}">
                <img 
                    src="${c.image}" 
                    alt="${escapeHtml(c.title)}" 
                    loading="lazy" 
                    class="course-image"
                    onerror="this.onerror=null; this.src='images/brand/hero.jpg';"
                />
            </a>

            <div class="course-card-body">
                <div class="course-meta-row">
                    <span class="course-level-meta">${escapeHtml(c.level)}</span>
                    <span class="meta-dot">·</span>
                    <span class="course-duration-meta">${escapeHtml(c.duration)}</span>
                </div>

                <h3 class="course-title">
                    <a href="course.html?id=${encodeURIComponent(c.id)}">${escapeHtml(c.title)}</a>
                </h3>

                <p class="course-short-desc">${escapeHtml(c.shortDescription)}</p>

                <div class="course-highlights-mini">
                    <span class="highlight-tag">✓ Video Modules</span>
                    <span class="highlight-tag">✓ WhatsApp Feedback</span>
                    <span class="highlight-tag">✓ Certification</span>
                </div>

                <div class="course-footer-row">
                    <div class="course-fee-wrapper">
                        <span class="fee-label">Course Fee</span>
                        <div class="fee-amount">
                            <span class="currency">₹</span>
                            <span class="digits">${c.price.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <div class="course-actions-group">
                        <a href="course.html?id=${encodeURIComponent(c.id)}" class="btn-card-link">Details</a>
                        <a href="course-checkout.html?id=${encodeURIComponent(c.id)}" class="btn btn-sm btn-primary">Enroll Now</a>
                    </div>
                </div>
            </div>
        </article>
    `).join("");
}
