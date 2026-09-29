/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * WhatsApp Integration & Dynamic Order / Enrollment Message Engine
 */

// ===== BUSINESS SETTINGS =====
const WHATSAPP_CONFIG = {
    number: "8447783091",
    countryCode: "91",
    fullNumber: "918447783091"
};

/**
 * Reusable helper to build a direct WhatsApp click-to-chat URL with encoded text.
 * @param {string} message - Plain text message
 * @returns {string} Fully encoded WhatsApp URL
 */
function generateWhatsAppLink(message) {
    const phone = WHATSAPP_CONFIG.fullNumber;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a clean, professional product order confirmation message for WhatsApp.
 * Conforms to Section 16 specification.
 * @param {object} order - Order details object
 * @returns {string} Plain text message ready for encoding
 */
function formatOrderWhatsAppMessage(order) {
    const addressBlock = [
        order.customer.addressLine1 || "",
        order.customer.addressLine2 || "",
        order.customer.city || "",
        `${order.customer.state || ""} — ${order.customer.pincode || ""}`
    ].filter(Boolean).join("\n");

    return `Hello Nabila Khan,

I have placed an order through your website.

Order ID: ${order.orderId}

Product:
${order.product.name}

Quantity: ${order.quantity}

Total Amount: ₹${order.totalAmount}

Customer Name: ${order.customer.fullName}
Mobile: ${order.customer.phone}
WhatsApp: ${order.customer.whatsapp}
Email: ${order.customer.email || "Not provided"}

Delivery Address:
${addressBlock}

I have completed the UPI payment.

Please confirm my order.

Thank you.`;
}

/**
 * Formats a clean, professional course enrollment confirmation message for WhatsApp.
 * Conforms to Section 22 specification.
 * @param {object} enrollment - Enrollment details object
 * @returns {string} Plain text message ready for encoding
 */
function formatCourseWhatsAppMessage(enrollment) {
    return `Hello Nabila Khan,

I want to enroll in your Mehndi Course.

Enrollment ID:
${enrollment.enrollmentId}

Course:
${enrollment.course.title}

Student Name:
${enrollment.student.fullName}

WhatsApp:
${enrollment.student.whatsapp}

Email:
${enrollment.student.email}

Mobile:
${enrollment.student.phone || enrollment.student.whatsapp}

City:
${enrollment.student.city}

State:
${enrollment.student.state}

Course Fee:
₹${enrollment.course.price}

I have completed the UPI payment.

Please confirm my enrollment and share the course access details.

Thank you.`;
}

/**
 * Formats a general consultation / product inquiry message for floating WhatsApp button or contact page.
 * @param {string} topic - Optional subject topic
 * @returns {string}
 */
function formatGeneralInquiryMessage(topic = "Henna Products & Mehndi Courses") {
    return `Hello Nabila Khan,

I visited your website and would like to inquire about your ${topic}.

Looking forward to your guidance!`;
}

// Export for node or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WHATSAPP_CONFIG,
        generateWhatsAppLink,
        formatOrderWhatsAppMessage,
        formatCourseWhatsAppMessage,
        formatGeneralInquiryMessage
    };
}
