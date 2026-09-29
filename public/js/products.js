/**
 * Nabila Khan — Organic Henna Products & Online Mehndi Academy
 * Product Catalog Data Module
 */

// ===== BUSINESS SETTINGS =====
const business = {
    name: "Nabila Khan",
    brandTitle: "Nabila Khan Organic Henna & Academy",
    tagline: "Pure Henna. Beautiful Art. Learn, Create & Grow.",
    phone: "8447783091",
    whatsapp: "918447783091",
    upi: "nabilakhan9311@okicici",
    instagram: "@nabilakhan_mehndi",
    deliveryHeadline: "PAN India Dispatch within 24–48 Hours",
    freeDeliveryThreshold: 999,
    standardShippingFee: 60
};

// ===== EDIT PRODUCTS HERE =====
// Add, remove, or edit product objects below. Changes automatically propagate across all pages.
const products = [
    {
        id: "organic-cone-01",
        name: "Artisanal Organic Mehndi Cone",
        category: "Organic Mehndi Cones",
        price: 149,
        image: "images/products/cone-01.jpg",
        shortDescription: "Freshly hand-rolled organic henna cone with smooth flow, zero chemicals, and deep rich natural stain.",
        description: "Carefully handcrafted in small batches using triple-sifted organic Sojat henna powder, pure essential oils, and lemon juice. Free from chemical dyes, PPD, ammonia, or preservatives. Features a micro-precision tip for effortlessly smooth lines and intricate bridal detailing.",
        packSize: "1 Cone (approx. 30g)",
        ingredients: "Organic Lawsonia Inermis (Henna) Leaf Powder, Nilgiri Eucalyptus Oil, Clove Bud Oil, Pure Cane Sugar, Filtered Water, Fresh Lemon Juice.",
        benefits: [
            "100% Organic & Chemical-free (Zero PPD / Ammonia)",
            "Deep mahogany to dark chestnut natural stain",
            "Super-smooth silky paste flow without clogs",
            "Fine 0.38mm precision opening for detailed work",
            "Safe and gentle on all skin types"
        ],
        stock: true,
        deliveryInfo: "Freshly prepared & packed. PAN India delivery via express courier within 3-5 business days."
    },
    {
        id: "organic-cone-02",
        name: "Ultra-Fine Detailer Henna Cone",
        category: "Organic Mehndi Cones",
        price: 179,
        image: "images/products/cone-01.jpg",
        shortDescription: "Precision-engineered ultra-thin tip cone designed specifically for micro-shading, jaal, and intricate bridal work.",
        description: "Specially formulated with an extra velvety smooth viscosity and an ultra-fine steel pin tip. Ideal for intricate Arabic negative space, delicate finger jaali, and portrait detailing. Hand-rolled to perfection by Nabila Khan.",
        packSize: "1 Cone (approx. 25g with steel pin)",
        ingredients: "Micro-filtered Organic Sojat Henna, Pure Tea Tree Oil, Pure Cajeput Oil, Unrefined Sugar, Distilled Water.",
        benefits: [
            "Includes re-insertable stainless steel micro-pin",
            "Zero bleeding or feathering on the skin",
            "Extended working time for intricate bridal designs",
            "Maximum color depth in 24 to 48 hours"
        ],
        stock: true,
        deliveryInfo: "Freshly prepared & packed. PAN India delivery via express courier within 3-5 business days."
    },
    {
        id: "henna-powder-01",
        name: "Triple-Sifted Rajasthani Henna Powder",
        category: "Henna Powder",
        price: 349,
        image: "images/products/powder-01.jpg",
        shortDescription: "100% Pure, lab-tested, microfine Rajasthani Sojat henna powder for artists who love mixing their own cones.",
        description: "Harvested directly from prime certified organic henna farms in Sojat, Rajasthan. Triple micro-sifted through cosmetic silk mesh to ensure zero debris or plant fiber. Produces an exceptionally stringy, creamy, and elastic paste with remarkable dye release (Lawsone content > 2.8%).",
        packSize: "100g Airtight Foil Pouch",
        ingredients: "100% Pure Organic Lawsonia Inermis Leaf Powder.",
        benefits: [
            "Triple cloth micro-sifted for clog-free cones",
            "High natural Lawsone dye content for rich dark stains",
            "Natural elasticity and smooth stringy texture",
            "Free from synthetic additives, heavy metals, and fillers"
        ],
        stock: true,
        deliveryInfo: "Airtight vacuum sealed pouch. Shelf life: 24 months in cool dry place."
    },
    {
        id: "essential-oil-01",
        name: "Pure Nilgiri Eucalyptus & Clove Terp Oil",
        category: "Essential Oils",
        price: 399,
        image: "images/products/oil-01.jpg",
        shortDescription: "Therapeutic-grade organic essential oil blend formulated to maximize henna dye release and stain longevity.",
        description: "A master blend of steam-distilled Nilgiri Eucalyptus, Clove Bud, and Cajeput essential oils. High in natural monoterpene alcohols that interact synergistically with henna Lawsone molecules to produce a deep, long-lasting, dark mahogany stain.",
        packSize: "30ml Amber Glass Bottle with Glass Dropper",
        ingredients: "Pure Eucalyptus Globulus Leaf Oil, Syzygium Aromaticum (Clove) Bud Oil, Melaleuca Cajeputi Oil.",
        benefits: [
            "100% Pure, undiluted steam-distilled essential oils",
            "Significantly deepens and accelerates henna stain",
            "Calming, invigorating natural aromatherapeutic fragrance",
            "UV-protective amber glass bottle with precision dropper"
        ],
        stock: true,
        deliveryInfo: "Securely bubble-wrapped in amber dropper bottle. Dispatched within 24 hours."
    },
    {
        id: "aftercare-balm-01",
        name: "Botanical Stain Booster Aftercare Balm",
        category: "Aftercare Balm",
        price: 299,
        image: "images/products/balm-01.jpg",
        shortDescription: "All-natural moisture-lock balm to protect fresh henna, prevent fading, and deepen stain development.",
        description: "Water is the enemy of fresh henna stain development. Our 100% natural aftercare balm creates a breathable, protective moisture barrier on the skin while infusing nourishing botanical oils that lock in heat and promote darker oxidation.",
        packSize: "25g Reusable Aluminum Tin",
        ingredients: "Unrefined Shea Butter, Pure Beeswax, Sweet Almond Oil, Virgin Coconut Oil, Clove Essential Oil, Vitamin E.",
        benefits: [
            "Waterproof barrier protects stain from early water exposure",
            "Warm botanical oils enhance natural oxidation",
            "Keeps skin hydrated and prevents flaking or premature fading",
            "Convenient pocket-friendly travel tin"
        ],
        stock: true,
        deliveryInfo: "Dispatched within 24-48 hours. Compact travel-safe packaging."
    },
    {
        id: "cone-pack-05",
        name: "Classic Organic Henna Cones (Pack of 5)",
        category: "Cone Packs",
        price: 699,
        image: "images/products/pack-01.jpg",
        shortDescription: "Value pack of 5 freshly prepared organic cones. Perfect for festive celebrations, family gatherings, and practice.",
        description: "Our most popular home bundle. 5 freshly hand-rolled organic henna cones prepared with pure essential oils and organic Rajasthani henna. Sealed airtight with tip protectors to preserve peak freshness during transit.",
        packSize: "5 Cones (approx. 30g each — 150g total)",
        ingredients: "Organic Sojat Henna, Nilgiri Eucalyptus Oil, Clove Oil, Organic Raw Sugar, Lemon Juice, Pure Filtered Water.",
        benefits: [
            "Economical value pack for family and festive functions",
            "Sufficient for 10-12 full hand and arm layouts",
            "Tip pins included for easy storage and reuse",
            "Freezable up to 6 months without losing stain potency"
        ],
        stock: true,
        deliveryInfo: "Airtight sealed and insulated. Express PAN India courier delivery."
    },
    {
        id: "cone-pack-10",
        name: "Studio Artist Cone Pack (Pack of 10)",
        category: "Cone Packs",
        price: 1299,
        image: "images/products/pack-01.jpg",
        shortDescription: "Bulk studio pack of 10 freshly prepared organic cones for practicing artists, bridal parties, and studio bookings.",
        description: "Created specifically for busy henna artists, bridal assignments, and academy students practicing advanced layouts. Each cone is weighed, tested for consistent flow, and packaged in a resealable freezer-safe storage pouch.",
        packSize: "10 Cones (approx. 30g each — 300g total)",
        ingredients: "Organic Sojat Henna, Nilgiri Eucalyptus & Cajeput Essential Oils, Pure Cane Sugar, Lemon Juice.",
        benefits: [
            "Professional-grade consistency and flow across every cone",
            "Saves over ₹200 compared to individual cones",
            "Includes storage guide and freezing instructions",
            "Eligible for Free PAN India Delivery"
        ],
        stock: true,
        deliveryInfo: "Ships with insulated protective packaging. Free PAN India shipping."
    },
    {
        id: "bridal-kit-01",
        name: "The Royal Bridal Henna Master Kit",
        category: "Bridal Henna Kits",
        price: 2499,
        image: "images/products/kit-01.jpg",
        shortDescription: "Complete luxury kit for brides and professional bridal artists: cones, powder, terp oil, balm, and design handbook.",
        description: "The ultimate bridal henna ensemble curated personally by Nabila Khan. Contains everything needed for a showstopping bridal stain: 10 freshly rolled organic cones, 100g triple-sifted Sojat henna powder, 30ml essential terp oil, 25g botanical aftercare balm, acrylic practice cone, design reference booklet, and bridal sealant spray.",
        packSize: "Full Complete Kit in Keepsake Box",
        ingredients: "Comprehensive artisanal bundle with all pure, organic certified components.",
        benefits: [
            "Complete luxury bridal solution in one elegant package",
            "Guarantees maximum bridal stain darkness and longevity",
            "Includes Nabila Khan's Bridal Aftercare Protocol Card",
            "Free PAN India Express Shipping included"
        ],
        stock: true,
        deliveryInfo: "Ships in premium gift-ready packaging via Priority Express Courier."
    }
];

// Reusable Helper to find a product by ID
function getProductById(id) {
    if (!id) return null;
    return products.find(p => p.id === id) || null;
}

// Reusable Helper to filter products
function filterProducts(category = "All", searchQuery = "", sortBy = "default") {
    let result = [...products];

    if (category && category !== "All") {
        result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (searchQuery && searchQuery.trim() !== "") {
        const query = searchQuery.trim().toLowerCase();
        result = result.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.shortDescription.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }

    if (sortBy === "price-low") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        result.sort((a, b) => b.price - a.price);
    }

    return result;
}

// Export for node or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { business, products, getProductById, filterProducts };
}
