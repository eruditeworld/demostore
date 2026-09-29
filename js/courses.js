/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Online Academy Courses Catalog Data Module
 */

// ===== EDIT COURSES HERE =====
// Add, remove, or edit course listings below. Changes automatically propagate across all academy pages.
const courses = [
    {
        id: "beginner-mehndi",
        title: "Beginner Mehndi Course",
        price: 999,
        duration: "4 Weeks",
        level: "Beginner",
        image: "images/courses/beginner.jpg",
        shortDescription: "Build your Mehndi foundation from scratch. Master cone grip, basic strokes, teardrops, vines, and floral layouts.",
        description: "An intensive step-by-step foundation program tailored for absolute beginners. Nabila Khan guides you from the very first basics — how to hold and control a henna cone with relaxed finger posture, line pressure balance, teardrops, swirls, hums, and foundational floral motifs, leading up to creating complete, confident palm designs.",
        modules: [
            "Module 1: Cone Grip, Pressure Dynamics & Basic Stroke Geometry",
            "Module 2: Essential Strokes — Lines, Teardrops, Hums & Swirls",
            "Module 3: Classic Petals, Leaves, Vines & Shading Fundamentals",
            "Module 4: Mandala Construction & Symmetrical Palm Placement",
            "Module 5: Capstone Practice Project — Full Palm Beginner Design"
        ],
        benefits: [
            "Learn step-by-step with structured, practical video lessons",
            "Practice at your own pace from home with lifetime resource access",
            "Build muscle memory and steady hand confidence",
            "Personalized review and feedback via WhatsApp guidance",
            "Certificate of Course Completion issued by Nabila Khan"
        ],
        whatYouWillLearn: [
            "Correct finger ergonomics to avoid hand cramping during long sessions",
            "Consistent line thickness and clean tapered finishes",
            "Symmetrical grid-based mandala construction",
            "How to create neat finger jaali (mesh) and border trims",
            "Organic cone care, storage, and natural stain enhancement tips"
        ],
        whoShouldJoin: [
            "Complete beginners who have never held a henna cone before",
            "Hobbyists wanting to draw beautiful designs for family and festivals",
            "Art students interested in traditional botanical and Indian motif art"
        ],
        faqs: [
            {
                q: "Do I need previous drawing experience?",
                a: "Not at all. This course is constructed specifically for absolute beginners. We break down complex Mehndi patterns into simple, repeatable geometric strokes."
            },
            {
                q: "What materials do I need to begin?",
                a: "All you need are fresh organic henna cones and printable practice sheets provided in the course orientation."
            },
            {
                q: "How will I receive the course content?",
                a: "Upon completing your UPI payment and confirming on WhatsApp, Nabila will personally verify your enrollment and share your digital course onboarding kit and structured module access."
            }
        ],
        available: true
    },
    {
        id: "arabic-mehndi",
        title: "Arabic Mehndi Course",
        price: 1499,
        duration: "3 Weeks",
        level: "Intermediate",
        image: "images/courses/arabic.jpg",
        shortDescription: "Master fluid Arabic belts, bold outlines, negative space floral compositions, and modern Gulf-style flow.",
        description: "Immerse yourself in the graceful rhythm of modern and traditional Arabic Mehndi. Learn the art of bold contrast lines paired with feather-light internal shading, diagonal floral vines (bails), open skin negative space, and contemporary Indo-Arabic fusion layouts.",
        modules: [
            "Module 1: Arabic Style DNA — Bold Contours vs. Fine Micro-Details",
            "Module 2: Signature 3D Rose, Dahlia & Organic Leaf Motifs",
            "Module 3: Flow & Trajectory — Dynamic Diagonal Vines from Wrist to Fingers",
            "Module 4: Negative Space Mastery & Reverse Fill Shading",
            "Module 5: Modern Khaleeji & Indo-Arabic Fusion Compositions"
        ],
        benefits: [
            "Master high-contrast shading that makes designs pop dramatically",
            "Learn speedy commercial designs highly requested by clients",
            "Develop an instinct for negative space and fluid floral balance",
            "Direct feedback on line precision and shading technique"
        ],
        whatYouWillLearn: [
            "How to draw bold silhouette borders without blotching",
            "Smooth gradients using feather-stroke shading techniques",
            "Flowing organic bel arrangements that naturally flatter the hand shape",
            "Contemporary Gulf and Dubai-inspired minimalist layouts"
        ],
        whoShouldJoin: [
            "Artists with basic cone control who want to learn fast, high-impact Arabic styles",
            "Practicing artists looking to expand their portfolio with popular festive trends"
        ],
        faqs: [
            {
                q: "Is this course live or recorded?",
                a: "The modules are pre-recorded high-definition video demonstrations supported by live Q&A check-ins and direct 1-on-1 critique via WhatsApp."
            },
            {
                q: "How fast can I complete these designs on clients?",
                a: "Arabic layouts are designed for speed. Once you master the vine compositions, you will be able to complete stunning hand designs in 15–20 minutes."
            }
        ],
        available: true
    },
    {
        id: "bridal-masterclass",
        title: "Bridal Mehndi Masterclass",
        price: 3499,
        duration: "6 Weeks",
        level: "Advanced / Bridal",
        image: "images/courses/bridal.jpg",
        shortDescription: "The definitive masterclass for luxury bridal layouts: figures, portraits, intricate jaal, and arm compositions.",
        description: "The crown jewel program of Nabila Khan's Mehndi Academy. Master the demanding discipline of royal bridal henna: symmetrical wrist cuffs, intricate bride and groom silhouette figures, elephant and peacock royal procession motifs, flawless micro-jaal work, and seamless forearm-to-elbow transitions.",
        modules: [
            "Module 1: Bridal Architecture & Full Arm Layout Planning",
            "Module 2: Royal Figurative Art — Bride, Groom, Doli & Procession Silhouettes",
            "Module 3: Complex Geometric Jaal, Lotus Mandalas & Lattice Weaves",
            "Module 4: Feet & Leg Bridal Symmetry and Alignment",
            "Module 5: Speed Management, Client Comfort & Stain Guarantee Protocol",
            "Module 6: Capstone Royal Bridal Portfolio Assignment"
        ],
        benefits: [
            "Master high-ticket bridal Mehndi craftsmanship and figure illustrations",
            "Learn professional client consultation and pricing strategies",
            "Comprehensive bridal layout templates and printable design guides",
            "Detailed 1-on-1 portfolio review with Nabila Khan",
            "Bridal Masterclass Certificate of Excellence"
        ],
        whatYouWillLearn: [
            "Anatomical proportions for drawing graceful bridal faces and silhouettes",
            "Micro-jaal grid geometry that never misaligns around the forearm curve",
            "Stain maximization protocol: oils, sealants, and post-bridal care",
            "Managing multi-hour bridal client sessions with speed and precision"
        ],
        whoShouldJoin: [
            "Experienced Mehndi artists ready to take on lucrative bridal bookings",
            "Henna professionals who want to elevate their pricing and portfolio quality"
        ],
        faqs: [
            {
                q: "Does this course cover figure drawing?",
                a: "Yes. Module 2 is dedicated to step-by-step breakdown of bridal figures, portraits, elephants, doli, and ceremonial elements."
            },
            {
                q: "Will I learn how to price bridal services?",
                a: "Yes! Module 5 includes business guidance on consultation, trial etiquette, packaging, and commercial pricing."
            }
        ],
        available: true
    },
    {
        id: "advanced-mehndi",
        title: "Advanced Mehndi Course",
        price: 2199,
        duration: "5 Weeks",
        level: "Advanced",
        image: "images/courses/advanced.jpg",
        shortDescription: "Elevate your artistry with intricate symmetry, micro-detailing, modern Indo-Western layouts, and speed optimization.",
        description: "Designed for intermediate artists who feel stuck in repetitive patterns. Learn how to break free of templates, architect your own original motifs, master ultra-dense micro-shading, and build complex backhand and palm compositions with flawless symmetry.",
        modules: [
            "Module 1: Advanced Structural Symmetry & Hand Anatomy Mapping",
            "Module 2: Micro-Detailing, Lace Trims & Fine Line Dynamics",
            "Module 3: Contemporary Indo-Western Fusion & Moroccan Geometry",
            "Module 4: Reverse Shading & 3D Depth Illusions",
            "Module 5: Design Innovation — Creating Original Signature Motifs"
        ],
        benefits: [
            "Break away from copying others and develop your unique signature style",
            "Dramatically improve your line crispness and precision speed",
            "Deepen your understanding of floral geometry and spatial harmony",
            "Personalized WhatsApp critique from Nabila on every assignment"
        ],
        whatYouWillLearn: [
            "Geometric grid tricks for flawless symmetry without pre-drawing pen lines",
            "Creating seamless transitions between dense elements and open skin",
            "Techniques for ultra-thin 0.3mm hairline work without paste breakage",
            "Advanced portfolio photography and lighting for social media"
        ],
        whoShouldJoin: [
            "Artists looking to refine their technique and advance from intermediate to expert",
            "Anyone wanting to master intricate micro-detailing and original design composition"
        ],
        faqs: [
            {
                q: "What is the expected practice time per week?",
                a: "We recommend 3–5 hours of dedicated practice per week to see transformative improvement in speed and precision."
            }
        ],
        available: true
    },
    {
        id: "professional-artist",
        title: "Professional Mehndi Artist Course",
        price: 4999,
        duration: "8 Weeks",
        level: "Professional / Career",
        image: "images/courses/professional.jpg",
        shortDescription: "Comprehensive career accelerator: art mastery, cone preparation chemistry, bridal bookings, and business setup.",
        description: "The complete, all-inclusive career program for aspiring professional Mehndi artists and studio founders. In addition to covering comprehensive bridal and festive artistry, this course teaches the exact chemistry of making commercial organic henna cones, client management, pricing, bridal contracts, branding, and Instagram marketing.",
        modules: [
            "Module 1: Professional Artistry — Foundation to Bridal Mastery",
            "Module 2: Cone Chemistry — Sourcing, Mixing, Sifting & Terpene Science",
            "Module 3: Packaging, Freezing, Shelf-Life & Commercial Batch Production",
            "Module 4: Client Consultation, Booking Contracts & Bridal Pricing Strategy",
            "Module 5: Photography, Instagram Growth & Building a High-End Brand",
            "Module 6: Studio Setup, Festival Rush Management & Financial Tracking",
            "Module 7: Live Bridal Client Simulation & Assessment",
            "Module 8: Graduation & Professional Artist Accreditation"
        ],
        benefits: [
            "Master BOTH the art and the business of high-earning Mehndi artistry",
            "Complete organic cone-making recipe and commercial supply sourcing secrets",
            "Ready-to-use bridal booking contract templates and pricing calculator",
            "Exclusive mentorship with Nabila Khan throughout the 8 weeks",
            "Official Professional Mehndi Artist Certification"
        ],
        whatYouWillLearn: [
            "How to mix commercial-grade stringy, rich-staining organic henna paste",
            "Formulating essential oil terp blends for consistent dark oxidation",
            "Attracting high-paying bridal clients without underpricing yourself",
            "Handling bridal wedding day logistics and multi-person bridal parties"
        ],
        whoShouldJoin: [
            "Aspiring professionals who want to launch their own Mehndi studio or brand",
            "Artists aiming to transition from casual bookings to a thriving, full-time business"
        ],
        faqs: [
            {
                q: "Will this course teach me how to sell my own henna cones?",
                a: "Yes! Modules 2 and 3 cover raw powder sourcing, oil chemistry, rolling precision cones, packaging, and shipping logistics."
            },
            {
                q: "Is ongoing mentor support provided?",
                a: "Yes, students receive 1-on-1 direct mentor access with Nabila Khan throughout the 8-week duration and 60 days of post-course mentorship."
            }
        ],
        available: true
    }
];

// Reusable Helper to find a course by ID
function getCourseById(id) {
    if (!id) return null;
    return courses.find(c => c.id === id) || null;
}

// Reusable Helper to filter courses
function filterCourses(level = "All") {
    if (!level || level === "All") return [...courses];
    return courses.filter(c => c.level.toLowerCase().includes(level.toLowerCase()));
}

// Export for node or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { courses, getCourseById, filterCourses };
}
