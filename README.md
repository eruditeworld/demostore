# Nabila Khan — Premium Organic Henna Products & Online Mehndi Academy

**Tagline:** Pure Henna. Beautiful Art. Learn, Create & Grow.  
**Founder & Educator:** Nabila Khan  
**WhatsApp / Calling Support:** 8447783091  
**Official Business UPI ID:** `nabilakhan9311@okicici`  
**Delivery Coverage:** PAN India Courier Dispatch

---

## 1. Project Overview

A luxury direct-to-consumer e-commerce storefront and online Mehndi academy built for **Nabila Khan**. Crafted entirely with:

- **Semantic HTML5**
- **Custom CSS3** (no Tailwind, no Bootstrap, no external frameworks)
- **Vanilla JavaScript** (data-driven architecture, no React, no dependencies)
- **Zero Backend / Database Dependency**
- **Dynamic UPI Deep Linking & Dynamic QR Code Engine**
- **Instant Pre-Formatted WhatsApp Verification Engine**

---

## 2. File & Directory Structure

```text
├── index.html               # Luxury homepage (Hero, Trust bar, About, Featured Cones & Courses)
├── shop.html                # Product catalog with live search, categories & price sort
├── product.html             # Product detail view with quantity stepper & "Buy Now"
├── checkout.html            # 2-step product checkout with address validation, UPI payment & WhatsApp confirmation
├── courses.html             # Online academy catalog with skill-level filters
├── course.html              # Course detail view with syllabus breakdown, outcomes & FAQ accordion
├── course-checkout.html     # Student enrollment checkout with unique enrollment ID & UPI payment
├── about.html               # Meet Nabila Khan, her story, botanical philosophy & teaching mission
├── how-it-works.html        # Step-by-step ordering guide (6 steps) & course joining guide (6 steps)
├── faq.html                 # Categorized FAQ (Products, Shipping, Payments, Academy Mentorship)
├── contact.html             # Direct contact cards, WhatsApp/Call action buttons & inquiry form
│
├── css/
│   └── style.css            # Master stylesheet with bespoke palette, typography & responsive layouts
│
├── js/
│   ├── products.js          # Product data catalog & business configuration settings
│   ├── courses.js           # Online academy course data catalog
│   ├── upi.js               # Dynamic UPI URI generator, QR code generator & clipboard copy engine
│   ├── whatsapp.js          # Dynamic WhatsApp message formatter conforming to specification
│   ├── main.js              # Sticky navigation, mobile menu, toast notification & ID generators
│   ├── shop.js              # Shop page filter, search & rendering logic
│   ├── product.js           # PDP rendering, quantity controls & cart subtotal calculator
│   ├── courses-page.js      # Academy course filtering & card rendering logic
│   ├── course.js            # Course PDP curriculum & sticky enrollment module logic
│   ├── checkout.js          # Product checkout validation, order ID generator & payment flow
│   └── course-checkout.js   # Course enrollment validation & WhatsApp dispatch flow
│
├── images/
│   ├── brand/               # Hero still life & Nabila Khan portrait
│   ├── products/            # Organic cones, powder, essential oils, balm & kits
│   └── courses/             # Beginner, Arabic, Bridal, Advanced & Professional course imagery
│
└── README.md                # Documentation and owner editing guide
```

---

## 3. How to Edit Products, Courses & Business Details

All content is centrally managed in plain JavaScript data files so that any developer or the business owner can edit details in seconds without touching HTML markup:

### A. Updating Business Info & UPI ID
Open `js/products.js` or `js/upi.js`:
```javascript
// ===== BUSINESS SETTINGS =====
const business = {
    name: "Nabila Khan",
    phone: "8447783091",
    whatsapp: "918447783091",
    upi: "nabilakhan9311@okicici"
};
```

### B. Adding or Editing Products
Open `js/products.js`:
```javascript
// ===== EDIT PRODUCTS HERE =====
const products = [
    {
        id: "organic-cone-01",
        name: "Artisanal Organic Mehndi Cone",
        category: "Organic Mehndi Cones",
        price: 149,
        image: "images/products/cone-01.jpg",
        shortDescription: "Smooth, rich and easy-to-use henna cone.",
        description: "Detailed product description here.",
        packSize: "1 Cone",
        ingredients: "Natural henna-based ingredients",
        benefits: ["Easy application", "Rich stain", "Convenient to use"],
        stock: true,
        deliveryInfo: "PAN India delivery within 3-5 business days."
    }
    // Add additional products here
];
```

### C. Adding or Editing Courses
Open `js/courses.js`:
```javascript
// ===== EDIT COURSES HERE =====
const courses = [
    {
        id: "beginner-mehndi",
        title: "Beginner Mehndi Course",
        price: 999,
        duration: "4 Weeks",
        level: "Beginner",
        image: "images/courses/beginner.jpg",
        shortDescription: "Build your Mehndi foundation from the basics.",
        description: "Detailed course description.",
        modules: [
            "Module 1: Cone Grip & Pressure Dynamics",
            "Module 2: Essential Strokes & Swirls"
        ],
        benefits: ["Learn step by step", "Practice at your own pace"],
        available: true
    }
    // Add additional courses here
];
```

---

## 4. How Payments & Confirmations Work

1. **Dynamic UPI Deep Linking:**  
   When a user clicks *Pay ₹XXX via UPI*, the system dynamically computes the link:  
   `upi://pay?pa=nabilakhan9311@okicici&pn=Nabila%20Khan&am=TOTAL&cu=INR&tn=ORDER_ID`  
   Compatible mobile devices automatically open Google Pay, PhonePe, Paytm, or BHIM with payee, order ID, and amount pre-filled.

2. **Desktop & Fallback QR Code:**  
   A high-resolution QR code encoding the same dynamic URI is generated on the fly, alongside a one-click *Copy UPI ID* button.

3. **WhatsApp Order & Enrollment Confirmation:**  
   After making payment, the user clicks *Payment Completed — Confirm on WhatsApp*. This generates a pre-formatted message sent directly to `918447783091` with all order/student details for manual verification and tracking dispatch.

---

## 5. Portability

This codebase is 100% portable. You can host it on GitHub Pages, Netlify, Vercel, Apache, Nginx, or any standard web server without installing Node.js, databases, or runtime dependencies.
