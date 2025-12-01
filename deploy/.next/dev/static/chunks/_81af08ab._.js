(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/packages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRICE_PER_MILE",
    ()=>PRICE_PER_MILE,
    "getPackageById",
    ()=>getPackageById,
    "getPackagesByService",
    ()=>getPackagesByService,
    "packages",
    ()=>packages
]);
const packages = [
    // Removals Packages
    {
        id: 'removal-basic',
        name: 'Basic Removal',
        serviceType: 'removals',
        description: 'Perfect for small moves within Birmingham',
        price: 450,
        features: [
            '1-2 bedroom removal',
            '2 movers',
            'Standard van',
            'Basic insurance',
            'Distance-based pricing'
        ],
        estimatedHours: 4,
        maxDistance: 50,
        includes: [
            'Loading',
            'Transportation',
            'Unloading'
        ]
    },
    {
        id: 'removal-standard',
        name: 'Standard Removal',
        serviceType: 'removals',
        description: 'Ideal for medium-sized moves',
        price: 600,
        features: [
            '2-3 bedroom removal',
            '3 movers',
            'Large van',
            'Full insurance',
            'Packing materials included',
            'Distance-based pricing'
        ],
        estimatedHours: 6,
        maxDistance: 75,
        includes: [
            'Loading',
            'Transportation',
            'Unloading',
            'Packing assistance'
        ]
    },
    {
        id: 'removal-premium',
        name: 'Premium Removal',
        serviceType: 'removals',
        description: 'Complete removal service with full support',
        price: 900,
        features: [
            '3+ bedroom removal',
            '4 movers',
            'Large van + trailer',
            'Premium insurance',
            'Full packing service',
            'Furniture disassembly',
            'Distance-based pricing'
        ],
        estimatedHours: 8,
        maxDistance: 100,
        includes: [
            'Full packing',
            'Loading',
            'Transportation',
            'Unloading',
            'Unpacking',
            'Furniture assembly'
        ]
    },
    // Office Moving Packages
    {
        id: 'office-small',
        name: 'Small Office Move',
        serviceType: 'office-moving',
        description: 'Perfect for small businesses (up to 10 employees)',
        price: 600,
        features: [
            'Up to 20 desks',
            'IT equipment handling',
            '3 movers',
            'Office insurance',
            'Weekend/evening options',
            'Distance-based pricing'
        ],
        estimatedHours: 6,
        maxDistance: 50,
        includes: [
            'Desk moving',
            'IT equipment',
            'Filing cabinets',
            'Basic setup'
        ]
    },
    {
        id: 'office-medium',
        name: 'Medium Office Move',
        serviceType: 'office-moving',
        description: 'Ideal for medium-sized businesses (10-30 employees)',
        price: 900,
        features: [
            'Up to 40 desks',
            'IT equipment handling',
            '5 movers',
            'Full office insurance',
            'Flexible scheduling',
            'Storage options',
            'Distance-based pricing'
        ],
        estimatedHours: 10,
        maxDistance: 75,
        includes: [
            'Complete office relocation',
            'IT setup',
            'Furniture assembly',
            'Storage solutions'
        ]
    },
    {
        id: 'office-large',
        name: 'Large Office Move',
        serviceType: 'office-moving',
        description: 'Complete office relocation service',
        price: 1500,
        features: [
            '40+ desks',
            'Full IT infrastructure',
            '8+ movers',
            'Premium insurance',
            'Project management',
            'Storage & warehousing',
            'Distance-based pricing'
        ],
        estimatedHours: 16,
        maxDistance: 100,
        includes: [
            'Full relocation',
            'IT infrastructure',
            'Project management',
            'Storage',
            'Setup & configuration'
        ]
    },
    // House Moving Packages
    {
        id: 'house-studio',
        name: 'Studio/1 Bed Move',
        serviceType: 'house-moving',
        description: 'Perfect for studio or 1 bedroom properties',
        price: 450,
        features: [
            'Studio/1 bedroom',
            '2 movers',
            'Medium van',
            'Standard insurance',
            'Distance-based pricing'
        ],
        estimatedHours: 5,
        maxDistance: 50,
        includes: [
            'Loading',
            'Transportation',
            'Unloading'
        ]
    },
    {
        id: 'house-2bed',
        name: '2 Bedroom Move',
        serviceType: 'house-moving',
        description: 'Ideal for 2 bedroom homes',
        price: 600,
        features: [
            '2 bedroom property',
            '3 movers',
            'Large van',
            'Full insurance',
            'Packing materials',
            'Distance-based pricing'
        ],
        estimatedHours: 7,
        maxDistance: 75,
        includes: [
            'Loading',
            'Transportation',
            'Unloading',
            'Packing assistance'
        ]
    },
    {
        id: 'house-3bed',
        name: '3 Bedroom Move',
        serviceType: 'house-moving',
        description: 'Complete service for 3 bedroom homes',
        price: 900,
        features: [
            '3 bedroom property',
            '4 movers',
            'Large van + trailer',
            'Premium insurance',
            'Full packing service',
            'Distance-based pricing'
        ],
        estimatedHours: 9,
        maxDistance: 100,
        includes: [
            'Full packing',
            'Loading',
            'Transportation',
            'Unloading',
            'Unpacking'
        ]
    },
    {
        id: 'house-4bed',
        name: '4+ Bedroom Move',
        serviceType: 'house-moving',
        description: 'Premium service for large family homes',
        price: 1200,
        features: [
            '4+ bedroom property',
            '5+ movers',
            'Multiple vehicles',
            'Premium insurance',
            'Full packing & unpacking',
            'Furniture disassembly',
            'Distance-based pricing'
        ],
        estimatedHours: 12,
        maxDistance: 150,
        includes: [
            'Complete service',
            'Packing',
            'Loading',
            'Transportation',
            'Unloading',
            'Unpacking',
            'Assembly'
        ]
    },
    // Pallet Services
    {
        id: 'pallet-single',
        name: 'Single Pallet',
        serviceType: 'pallets',
        description: 'Single pallet delivery within Birmingham',
        price: 85,
        features: [
            '1 standard pallet',
            'Next day delivery',
            'Standard insurance',
            'Collection & delivery',
            'Distance-based pricing'
        ],
        estimatedHours: 2,
        maxDistance: 30,
        includes: [
            'Collection',
            'Transportation',
            'Delivery'
        ]
    },
    {
        id: 'pallet-multi',
        name: 'Multiple Pallets',
        serviceType: 'pallets',
        description: 'Multiple pallet delivery service',
        price: 150,
        features: [
            '2-4 pallets',
            'Next day delivery',
            'Full insurance',
            'Collection & delivery',
            'Distance-based pricing'
        ],
        estimatedHours: 3,
        maxDistance: 50,
        includes: [
            'Collection',
            'Transportation',
            'Delivery',
            'Pallet wrapping'
        ]
    },
    {
        id: 'pallet-bulk',
        name: 'Bulk Pallet Service',
        serviceType: 'pallets',
        description: 'Large quantity pallet delivery',
        price: 300,
        features: [
            '5+ pallets',
            'Flexible scheduling',
            'Premium insurance',
            'Warehouse to warehouse',
            'Distance-based pricing'
        ],
        estimatedHours: 5,
        maxDistance: 100,
        includes: [
            'Bulk collection',
            'Transportation',
            'Delivery',
            'Pallet management'
        ]
    }
];
const getPackagesByService = (serviceType)=>{
    return packages.filter((pkg)=>pkg.serviceType === serviceType);
};
const getPackageById = (id)=>{
    return packages.find((pkg)=>pkg.id === id);
};
const PRICE_PER_MILE = 1.20;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM"),
    authDomain: ("TURBOPACK compile-time value", "alburaqlogistics-76788.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "alburaqlogistics-76788"),
    storageBucket: ("TURBOPACK compile-time value", "alburaqlogistics-76788.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "1038841940420"),
    appId: ("TURBOPACK compile-time value", "1:1038841940420:web:5386e4368fdb13a7ad3c91")
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/firestore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBooking",
    ()=>createBooking,
    "getAllBookings",
    ()=>getAllBookings,
    "getBooking",
    ()=>getBooking,
    "getBookingsByEmail",
    ()=>getBookingsByEmail,
    "updateBookingStatus",
    ()=>updateBookingStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
;
;
const BOOKINGS_COLLECTION = 'bookings';
const createBooking = async (booking)=>{
    try {
        const bookingData = {
            ...booking,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now()
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION), bookingData);
        return docRef.id;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};
const getBooking = async (bookingId)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION, bookingId);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                ...data,
                createdAt: data.createdAt?.toDate(),
                updatedAt: data.updatedAt?.toDate()
            };
        }
        return null;
    } catch (error) {
        console.error('Error getting booking:', error);
        throw error;
    }
};
const updateBookingStatus = async (bookingId, status, paymentStatus)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION, bookingId);
        const updateData = {
            status,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now()
        };
        if (paymentStatus) {
            updateData.paymentStatus = paymentStatus;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updateData);
    } catch (error) {
        console.error('Error updating booking:', error);
        throw error;
    }
};
const getBookingsByEmail = async (email)=>{
    try {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('email', '==', email));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate(),
                updatedAt: doc.data().updatedAt?.toDate()
            }));
    } catch (error) {
        console.error('Error getting bookings:', error);
        throw error;
    }
};
const getAllBookings = async ()=>{
    try {
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION));
        return querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate(),
                updatedAt: doc.data().updatedAt?.toDate()
            }));
    } catch (error) {
        console.error('Error getting all bookings:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/distance-calculator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculate distance between two UK addresses
 * Supports multiple providers:
 * 1. OpenRouteService (FREE - recommended)
 * 2. Google Maps API (requires API key)
 * 3. Postcode estimation (fallback - always works)
 */ __turbopack_context__.s([
    "LOCAL_MOVE_THRESHOLD",
    ()=>LOCAL_MOVE_THRESHOLD,
    "LONG_DISTANCE_THRESHOLD",
    ()=>LONG_DISTANCE_THRESHOLD,
    "PRICE_PER_MILE",
    ()=>PRICE_PER_MILE,
    "calculateDistance",
    ()=>calculateDistance,
    "calculatePrice",
    ()=>calculatePrice,
    "extractPostcode",
    ()=>extractPostcode,
    "formatDistance",
    ()=>formatDistance,
    "getPricingBreakdown",
    ()=>getPricingBreakdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function extractPostcode(address) {
    // UK postcode pattern: e.g., B1 1AA, B12 8AB, etc.
    const postcodeRegex = /([A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2})/i;
    const match = address.match(postcodeRegex);
    return match ? match[1].toUpperCase().replace(/\s/g, ' ') : null;
}
/**
 * Calculate distance using OpenRouteService API (FREE)
 * Sign up at https://openrouteservice.org/ for a free API key
 * Free tier: 2,000 requests/day
 */ async function calculateDistanceWithOpenRouteService(startAddress, endAddress) {
    const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_OPENROUTE_API_KEY;
    if (!apiKey) {
        return null; // API not configured
    }
    try {
        // First, geocode addresses to get coordinates
        const geocodeStart = await fetch(`https://api.openrouteservice.org/geocoding/search?` + `api_key=${apiKey}` + `&text=${encodeURIComponent(startAddress)}` + `&boundary.country=GB`);
        const geocodeEnd = await fetch(`https://api.openrouteservice.org/geocoding/search?` + `api_key=${apiKey}` + `&text=${encodeURIComponent(endAddress)}` + `&boundary.country=GB`);
        const startData = await geocodeStart.json();
        const endData = await geocodeEnd.json();
        if (!startData.features?.[0] || !endData.features?.[0]) {
            return null; // Geocoding failed
        }
        const startCoords = startData.features[0].geometry.coordinates; // [lng, lat]
        const endCoords = endData.features[0].geometry.coordinates;
        // Calculate distance using directions API
        const directionsResponse = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?` + `api_key=${apiKey}` + `&start=${startCoords[0]},${startCoords[1]}` + `&end=${endCoords[0]},${endCoords[1]}`);
        const directionsData = await directionsResponse.json();
        if (directionsData.features?.[0]?.properties?.segments?.[0]) {
            const segment = directionsData.features[0].properties.segments[0];
            const distanceInMeters = segment.distance;
            const durationInSeconds = segment.duration;
            const distanceInMiles = distanceInMeters / 1609.34; // Convert to miles
            const durationInMinutes = durationInSeconds / 60;
            return {
                distance: Math.round(distanceInMiles * 10) / 10,
                duration: Math.round(durationInMinutes)
            };
        }
        return null;
    } catch (error) {
        console.error('OpenRouteService API error:', error);
        return null; // Fall back to other methods
    }
}
/**
 * Calculate distance using Google Maps Distance Matrix API
 */ async function calculateDistanceWithGoogleMaps(startAddress, endAddress) {
    const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
        return null;
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?` + `origins=${encodeURIComponent(startAddress)}` + `&destinations=${encodeURIComponent(endAddress)}` + `&units=imperial` + `&key=${apiKey}`);
        const data = await response.json();
        if (data.status === 'OK' && data.rows[0]?.elements[0]?.status === 'OK') {
            const element = data.rows[0].elements[0];
            const distanceInMiles = element.distance.value / 1609.34;
            const durationInMinutes = element.duration.value / 60;
            return {
                distance: Math.round(distanceInMiles * 10) / 10,
                duration: Math.round(durationInMinutes)
            };
        }
        return null;
    } catch (error) {
        console.error('Google Maps API error:', error);
        return null;
    }
}
/**
 * Calculate distance using UK Postcode.io API (FREE for UK postcodes)
 * No API key required for basic distance calculation
 */ async function calculateDistanceWithPostcodeIO(startAddress, endAddress) {
    const startPostcode = extractPostcode(startAddress);
    const endPostcode = extractPostcode(endAddress);
    if (!startPostcode || !endPostcode) {
        return null; // Need postcodes for this API
    }
    try {
        // Get coordinates for both postcodes
        const startResponse = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(startPostcode.replace(/\s/g, ''))}`);
        const endResponse = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(endPostcode.replace(/\s/g, ''))}`);
        const startData = await startResponse.json();
        const endData = await endResponse.json();
        if (startData.status !== 200 || endData.status !== 200) {
            return null;
        }
        const startLat = startData.result.latitude;
        const startLng = startData.result.longitude;
        const endLat = endData.result.latitude;
        const endLng = endData.result.longitude;
        // Calculate straight-line distance (Haversine formula)
        const R = 3959; // Earth's radius in miles
        const dLat = (endLat - startLat) * Math.PI / 180;
        const dLng = (endLng - startLng) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(startLat * Math.PI / 180) * Math.cos(endLat * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        // Add 20% for road distance vs straight-line
        const roadDistance = distance * 1.2;
        return {
            distance: Math.round(roadDistance * 10) / 10
        };
    } catch (error) {
        console.error('Postcode.io API error:', error);
        return null;
    }
}
/**
 * Estimate distance based on UK postcodes (fallback method)
 * Uses postcode area codes to estimate distance
 */ function estimateDistanceFromPostcodes(startAddress, endAddress) {
    const startPostcode = extractPostcode(startAddress);
    const endPostcode = extractPostcode(endAddress);
    // If we can't extract postcodes, estimate based on address similarity
    if (!startPostcode || !endPostcode) {
        if (startAddress.toLowerCase().includes('birmingham') && endAddress.toLowerCase().includes('birmingham')) {
            return 8; // Average local Birmingham move
        }
        return 15; // Default estimate
    }
    // Extract area codes (first part of postcode)
    const startArea = startPostcode.split(' ')[0];
    const endArea = endPostcode.split(' ')[0];
    // Same area code = very local (1-5 miles)
    if (startArea === endArea) {
        return 3;
    }
    // Different area codes in Birmingham (B postcodes)
    if (startArea.startsWith('B') && endArea.startsWith('B')) {
        return 12; // Average Birmingham local move
    }
    // One is Birmingham (B), other is not = regional (20-50 miles)
    if (startArea.startsWith('B') && !endArea.startsWith('B') || !startArea.startsWith('B') && endArea.startsWith('B')) {
        return 35;
    }
    // Both non-Birmingham = long distance (50+ miles)
    return 75;
}
async function calculateDistance(startAddress, endAddress) {
    // Try OpenRouteService first (free and accurate)
    const openRouteResult = await calculateDistanceWithOpenRouteService(startAddress, endAddress);
    if (openRouteResult) {
        return openRouteResult;
    }
    // Try Google Maps API
    const googleResult = await calculateDistanceWithGoogleMaps(startAddress, endAddress);
    if (googleResult) {
        return googleResult;
    }
    // Try Postcode.io (free for UK postcodes)
    const postcodeIOResult = await calculateDistanceWithPostcodeIO(startAddress, endAddress);
    if (postcodeIOResult) {
        return postcodeIOResult;
    }
    // Fallback to postcode estimation
    const estimatedDistance = estimateDistanceFromPostcodes(startAddress, endAddress);
    return {
        distance: estimatedDistance
    };
}
function calculatePrice(basePrice, distance, pricePerMile = 1.20) {
    const LOCAL_MOVE_THRESHOLD = 50; // Miles included in base price
    const LONG_DISTANCE_THRESHOLD = 100; // Miles for higher rate
    // Local moves: base price only (distance included)
    if (distance <= LOCAL_MOVE_THRESHOLD) {
        return basePrice;
    }
    // Long-distance moves: charge per mile for miles over threshold
    const milesOverThreshold = distance - LOCAL_MOVE_THRESHOLD;
    // For very long distances (100+ miles), use higher rate
    if (distance > LONG_DISTANCE_THRESHOLD) {
        const miles50to100 = LONG_DISTANCE_THRESHOLD - LOCAL_MOVE_THRESHOLD;
        const milesOver100 = distance - LONG_DISTANCE_THRESHOLD;
        const distanceCharge = miles50to100 * pricePerMile + milesOver100 * 1.50;
        return basePrice + distanceCharge;
    }
    // Standard long-distance (50-100 miles)
    const distanceCharge = milesOverThreshold * pricePerMile;
    return basePrice + distanceCharge;
}
function formatDistance(distance) {
    if (distance < 1) {
        return `${Math.round(distance * 10) / 10} miles`;
    }
    return `${Math.round(distance * 10) / 10} miles`;
}
function getPricingBreakdown(basePrice, distance) {
    const LOCAL_MOVE_THRESHOLD = 50;
    const LONG_DISTANCE_THRESHOLD = 100;
    const PRICE_PER_MILE = 1.20;
    const PRICE_PER_MILE_LONG = 1.50;
    if (distance <= LOCAL_MOVE_THRESHOLD) {
        return {
            basePrice,
            distance,
            includedMiles: distance,
            chargeableMiles: 0,
            distanceCharge: 0,
            totalPrice: basePrice,
            isLocalMove: true
        };
    }
    const milesOverThreshold = distance - LOCAL_MOVE_THRESHOLD;
    let distanceCharge = 0;
    let chargeableMiles = 0;
    if (distance > LONG_DISTANCE_THRESHOLD) {
        const miles50to100 = LONG_DISTANCE_THRESHOLD - LOCAL_MOVE_THRESHOLD;
        const milesOver100 = distance - LONG_DISTANCE_THRESHOLD;
        distanceCharge = miles50to100 * PRICE_PER_MILE + milesOver100 * PRICE_PER_MILE_LONG;
        chargeableMiles = milesOverThreshold;
    } else {
        distanceCharge = milesOverThreshold * PRICE_PER_MILE;
        chargeableMiles = milesOverThreshold;
    }
    return {
        basePrice,
        distance,
        includedMiles: LOCAL_MOVE_THRESHOLD,
        chargeableMiles,
        distanceCharge,
        totalPrice: basePrice + distanceCharge,
        isLocalMove: false
    };
}
const PRICE_PER_MILE = 1.20;
const LOCAL_MOVE_THRESHOLD = 50; // Miles included in base price
const LONG_DISTANCE_THRESHOLD = 100; // Miles for higher per-mile rate
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PriceCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PriceCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/distance-calculator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PriceCalculator({ selectedPackage, pickupAddress, deliveryAddress, onPriceCalculated }) {
    _s();
    const [distance, setDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [calculating, setCalculating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalPrice, setTotalPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PriceCalculator.useEffect": ()=>{
            if (selectedPackage && pickupAddress && deliveryAddress && pickupAddress.length > 10 && deliveryAddress.length > 10) {
                calculateDistanceAndPrice();
            } else {
                setDistance(null);
                setTotalPrice(null);
            }
        }
    }["PriceCalculator.useEffect"], [
        selectedPackage,
        pickupAddress,
        deliveryAddress
    ]);
    const calculateDistanceAndPrice = async ()=>{
        if (!selectedPackage) return;
        setCalculating(true);
        try {
            // Calculate distance (uses Google Maps API if available, otherwise estimates)
            const distanceResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDistance"])(pickupAddress, deliveryAddress);
            const calculatedDistance = distanceResult.distance;
            const basePrice = selectedPackage.price;
            const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPricingBreakdown"])(basePrice, calculatedDistance);
            const finalPrice = breakdown.totalPrice;
            setDistance(calculatedDistance);
            setTotalPrice(finalPrice);
            // Notify parent component
            if (onPriceCalculated) {
                onPriceCalculated({
                    basePrice,
                    distance: calculatedDistance,
                    distanceCharge: breakdown.distanceCharge,
                    totalPrice: finalPrice
                });
            }
        } catch (error) {
            console.error('Error calculating distance:', error);
            // Fallback to base price if calculation fails
            setDistance(0);
            setTotalPrice(selectedPackage.price);
        } finally{
            setCalculating(false);
        }
    };
    if (!selectedPackage) {
        return null;
    }
    if (calculating) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 rounded-lg p-4 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "animate-spin h-5 w-5 text-blue-600 mr-2",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-700",
                        children: "Calculating price..."
                    }, void 0, false, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PriceCalculator.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PriceCalculator.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this);
    }
    if (distance === null || totalPrice === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 rounded-lg p-4 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Enter pickup and delivery addresses to calculate the total price."
            }, void 0, false, {
                fileName: "[project]/components/PriceCalculator.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PriceCalculator.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    }
    const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPricingBreakdown"])(selectedPackage.price, distance);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 border border-[#D4AF37]/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg sm:text-xl font-bold text-gray-900 mb-4",
                children: "Price Breakdown"
            }, void 0, false, {
                fileName: "[project]/components/PriceCalculator.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm sm:text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Base Price:"
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-900",
                                children: [
                                    "£",
                                    breakdown.basePrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm sm:text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Distance:"
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-900",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"])(distance)
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    breakdown.isLocalMove ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-50 rounded p-2 mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-green-800",
                            children: [
                                "✓ Local move: Distance included in base price (up to ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_MOVE_THRESHOLD"],
                                " miles)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PriceCalculator.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm sm:text-base mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: [
                                            "Included miles (",
                                            breakdown.includedMiles,
                                            " miles):"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PriceCalculator.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900",
                                        children: "£0.00"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PriceCalculator.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm sm:text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: [
                                            "Additional miles (",
                                            breakdown.chargeableMiles.toFixed(1),
                                            " miles × £1.20/mile):"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PriceCalculator.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900",
                                        children: [
                                            "£",
                                            breakdown.distanceCharge.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PriceCalculator.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            distance > 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 mt-1",
                                children: "Note: Miles over 100 charged at £1.50/mile"
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#D4AF37]/30 pt-2 mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-900",
                                    children: "Total Price:"
                                }, void 0, false, {
                                    fileName: "[project]/components/PriceCalculator.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl sm:text-3xl font-bold text-[#D4AF37]",
                                    children: [
                                        "£",
                                        totalPrice.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PriceCalculator.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PriceCalculator.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PriceCalculator.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs sm:text-sm text-gray-600 bg-white rounded p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Pricing:"
                            }, void 0, false, {
                                fileName: "[project]/components/PriceCalculator.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            " Base price includes up to ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_MOVE_THRESHOLD"],
                            " miles.",
                            !breakdown.isLocalMove && ' Additional miles charged at £1.20/mile (50-100 miles) or £1.50/mile (100+ miles).'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Distance: ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"])(distance),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? ' (calculated)' : ' (estimated from postcodes)'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PriceCalculator.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PriceCalculator.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PriceCalculator.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(PriceCalculator, "X/cSYuz0RNKJVAwVqA3yrDSMFjI=");
_c = PriceCalculator;
var _c;
__turbopack_context__.k.register(_c, "PriceCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/book/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/packages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firestore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PriceCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PriceCalculator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/distance-calculator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const stripePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStripe"])(("TURBOPACK compile-time value", "your_stripe_publishable_key") || '');
const bookingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customerName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Name must be at least 2 characters'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Invalid email address'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Phone number must be at least 10 digits'),
    serviceType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'removals',
        'office-moving',
        'house-moving',
        'pallets'
    ]),
    packageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    pickupAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Please provide a complete pickup address'),
    deliveryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Please provide a complete delivery address'),
    pickupDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Please select a pickup date'),
    pickupTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Please select a pickup time'),
    specialInstructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function BookPageContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [selectedPackage, setSelectedPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookingId, setBookingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [calculatedPrice, setCalculatedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors }, setValue, watch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(bookingSchema)
    });
    const serviceType = watch('serviceType');
    const pickupAddress = watch('pickupAddress');
    const deliveryAddress = watch('deliveryAddress');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookPageContent.useEffect": ()=>{
            const serviceParam = searchParams.get('service');
            const packageParam = searchParams.get('package');
            if (serviceParam) {
                setValue('serviceType', serviceParam);
            }
            if (packageParam) {
                setValue('packageId', packageParam);
                const pkg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPackageById"])(packageParam);
                setSelectedPackage(pkg || null);
            }
        }
    }["BookPageContent.useEffect"], [
        searchParams,
        setValue
    ]);
    const onSubmit = async (data)=>{
        if (!selectedPackage) {
            alert('Please select a package');
            return;
        }
        setIsSubmitting(true);
        setBookingId(null);
        try {
            // Calculate distance and final price
            const distanceResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDistance"])(data.pickupAddress, data.deliveryAddress);
            const distance = distanceResult.distance;
            const basePrice = selectedPackage.price;
            // Use calculated price if available, otherwise calculate now
            let finalPrice;
            let distanceCharge;
            if (calculatedPrice) {
                finalPrice = calculatedPrice.totalPrice;
                distanceCharge = calculatedPrice.distanceCharge;
            } else {
                const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPricingBreakdown"])(basePrice, distance);
                finalPrice = breakdown.totalPrice;
                distanceCharge = breakdown.distanceCharge;
            }
            // Create booking in Firestore
            const bookingData = {
                ...data,
                totalPrice: finalPrice,
                basePrice: basePrice,
                distance: distance,
                distanceCharge: distanceCharge,
                status: 'pending',
                paymentStatus: 'pending'
            };
            const id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBooking"])(bookingData);
            setBookingId(id);
            // Try Stripe first, fallback to demo if it fails
            try {
                // Redirect to Stripe payment
                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        bookingId: id,
                        amount: (calculatedPrice?.totalPrice || selectedPackage.price) * 100,
                        customerEmail: data.email
                    })
                });
                if (!response.ok) {
                    const errorData = await response.json().catch(()=>({
                            error: 'Unknown error'
                        }));
                    throw new Error(errorData.error || `Failed to create checkout session (${response.status})`);
                }
                const session = await response.json();
                if (session.error) {
                    throw new Error(session.error);
                }
                if (session.id) {
                    const stripe = await stripePromise;
                    if (stripe) {
                        // @ts-ignore - redirectToCheckout exists on client-side Stripe
                        const { error } = await stripe.redirectToCheckout({
                            sessionId: session.id
                        });
                        if (error) {
                            throw error;
                        }
                    } else {
                        throw new Error('Stripe failed to load');
                    }
                } else {
                    throw new Error('No session ID received');
                }
            } catch (stripeError) {
                // If Stripe fails, redirect to demo payment
                console.log('Stripe not configured, using demo payment:', stripeError.message);
                window.location.href = `/demo-payment?booking_id=${id}`;
                return;
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            // If booking was created but payment failed, offer demo payment
            if (bookingId) {
                const useDemo = confirm('Stripe payment failed. Would you like to use the demo payment system instead?');
                if (useDemo) {
                    window.location.href = `/demo-payment?booking_id=${bookingId}`;
                    return;
                }
            }
            alert(`There was an error processing your booking: ${error.message || 'Please try again.'}`);
            setIsSubmitting(false);
        }
    };
    const availablePackages = selectedPackage ? [
        selectedPackage
    ] : serviceType ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPackagesByService"])(serviceType) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center",
                children: "Book Your Service"
            }, void 0, false, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            bookingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-50 border border-green-200 rounded-lg p-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-800",
                    children: "Booking created successfully! Redirecting to payment..."
                }, void 0, false, {
                    fileName: "[project]/app/book/page.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "space-y-6",
                children: [
                    !selectedPackage && serviceType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Select Package"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                ...register('packageId'),
                                onChange: (e)=>{
                                    const pkg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPackageById"])(e.target.value);
                                    setSelectedPackage(pkg || null);
                                    setValue('packageId', e.target.value);
                                },
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select a package..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    availablePackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: pkg.id,
                                            children: [
                                                pkg.name,
                                                " - £",
                                                pkg.price.toFixed(2)
                                            ]
                                        }, pkg.id, true, {
                                            fileName: "[project]/app/book/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            errors.packageId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.packageId.message
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    selectedPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 border border-[#D4AF37]/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg sm:text-xl font-bold text-gray-900 mb-2",
                                children: [
                                    "Selected Package: ",
                                    selectedPackage.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-gray-700 mb-2",
                                children: selectedPackage.description
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl sm:text-2xl font-bold text-[#D4AF37] mb-2",
                                children: [
                                    "Base Price: £",
                                    selectedPackage.price.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-600",
                                children: "Base price includes up to 50 miles. Additional miles charged separately."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Service Type"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                ...register('serviceType'),
                                onChange: (e)=>{
                                    setValue('serviceType', e.target.value);
                                    setSelectedPackage(null);
                                    setValue('packageId', '');
                                },
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select service type..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "removals",
                                        children: "Removals"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "office-moving",
                                        children: "Office Moving"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "house-moving",
                                        children: "House Moving"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pallets",
                                        children: "Pallets"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            errors.serviceType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.serviceType.message
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Full Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register('customerName'),
                                        type: "text",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    errors.customerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: errors.customerName.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Email *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register('email'),
                                        type: "email",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: errors.email.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Phone Number *"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...register('phone'),
                                type: "tel",
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.phone.message
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Pickup Address *"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...register('pickupAddress'),
                                rows: 3,
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent",
                                placeholder: "Enter full pickup address including postcode"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            errors.pickupAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.pickupAddress.message
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Delivery Address *"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...register('deliveryAddress'),
                                rows: 3,
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent",
                                placeholder: "Enter full delivery address including postcode"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            errors.deliveryAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.deliveryAddress.message
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    selectedPackage && pickupAddress && deliveryAddress && pickupAddress.length > 10 && deliveryAddress.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PriceCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedPackage: selectedPackage,
                        pickupAddress: pickupAddress,
                        deliveryAddress: deliveryAddress,
                        onPriceCalculated: setCalculatedPrice
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Pickup Date *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register('pickupDate'),
                                        type: "date",
                                        min: new Date().toISOString().split('T')[0],
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    errors.pickupDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: errors.pickupDate.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Pickup Time *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        ...register('pickupTime'),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select time..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "08:00",
                                                children: "8:00 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "09:00",
                                                children: "9:00 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "10:00",
                                                children: "10:00 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "11:00",
                                                children: "11:00 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "12:00",
                                                children: "12:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "13:00",
                                                children: "1:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "14:00",
                                                children: "2:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "15:00",
                                                children: "3:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "16:00",
                                                children: "4:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "17:00",
                                                children: "5:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    errors.pickupTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: errors.pickupTime.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Special Instructions (Optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...register('specialInstructions'),
                                rows: 4,
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent",
                                placeholder: "Any special requirements or instructions..."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting || !selectedPackage,
                        className: "w-full bg-[#092439] text-[#D4AF37] py-4 rounded-lg font-semibold text-lg hover:bg-[#0d3552] transition disabled:bg-gray-400 disabled:cursor-not-allowed",
                        children: isSubmitting ? 'Processing...' : 'Proceed to Payment'
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/book/page.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(BookPageContent, "4QwSxi4hUdER7NbaTqK4o2iJ/ZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = BookPageContent;
function BookPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-12 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/book/page.tsx",
            lineNumber: 422,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookPageContent, {}, void 0, false, {
            fileName: "[project]/app/book/page.tsx",
            lineNumber: 423,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/book/page.tsx",
        lineNumber: 422,
        columnNumber: 5
    }, this);
}
_c1 = BookPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BookPageContent");
__turbopack_context__.k.register(_c1, "BookPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_81af08ab._.js.map