module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
const __TURBOPACK__default__export__ = app;
}),
"[project]/lib/firestore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
const BOOKINGS_COLLECTION = 'bookings';
const createBooking = async (booking)=>{
    try {
        const bookingData = {
            ...booking,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION), bookingData);
        return docRef.id;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};
const getBooking = async (bookingId)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION, bookingId);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
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
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION, bookingId);
        const updateData = {
            status,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        };
        if (paymentStatus) {
            updateData.paymentStatus = paymentStatus;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updateData);
    } catch (error) {
        console.error('Error updating booking:', error);
        throw error;
    }
};
const getBookingsByEmail = async (email)=>{
    try {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('email', '==', email));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], BOOKINGS_COLLECTION));
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
}),
"[project]/lib/packages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/distance-calculator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const apiKey = process.env.NEXT_PUBLIC_OPENROUTE_API_KEY;
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
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
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
}),
"[project]/app/booking-success/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingSuccessPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firestore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/packages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/distance-calculator.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function BookingSuccessContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [booking, setBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const bookingId = searchParams.get('booking_id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (bookingId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooking"])(bookingId).then((bookingData)=>{
                setBooking(bookingData);
                setLoading(false);
            }).catch((error)=>{
                console.error('Error fetching booking:', error);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [
        bookingId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-12 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/booking-success/page.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/booking-success/page.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl sm:text-6xl mb-3 sm:mb-4",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/app/booking-success/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4",
                    children: "Booking Confirmed!"
                }, void 0, false, {
                    fileName: "[project]/app/booking-success/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4",
                    children: "Thank you for choosing Al Buraq Logistics. Your booking has been confirmed and payment received."
                }, void 0, false, {
                    fileName: "[project]/app/booking-success/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                booking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-4 sm:p-6 mb-6 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4",
                            children: "Booking Details"
                        }, void 0, false, {
                            fileName: "[project]/app/booking-success/page.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-sm sm:text-base text-gray-700 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Booking ID:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs break-all",
                                            children: booking.id
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.customerName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Service:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPackageById"])(booking.packageId)?.name || booking.serviceType
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Pickup Date:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.pickupDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(booking.pickupDate), 'MMM dd, yyyy') : booking.pickupDate
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Pickup Time:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.pickupTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Pickup Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.pickupAddress
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Delivery Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        booking.deliveryAddress
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking-success/page.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        booking.basePrice !== undefined && booking.distance !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 pt-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base sm:text-lg font-semibold text-gray-900 mb-3",
                                    children: "Price Breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm sm:text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Base Price:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking-success/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-900",
                                                    children: [
                                                        "£",
                                                        booking.basePrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking-success/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        booking.distance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Distance:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking-success/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-gray-900",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$distance$2d$calculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"])(booking.distance)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking-success/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking-success/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 23
                                                }, this),
                                                booking.distanceCharge !== undefined && booking.distanceCharge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Distance Charge:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking-success/page.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-gray-900",
                                                            children: [
                                                                "£",
                                                                booking.distanceCharge.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/booking-success/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking-success/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between border-t border-gray-200 pt-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Total Amount:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking-success/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold text-[#D4AF37]",
                                                    children: [
                                                        "£",
                                                        booking.totalPrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking-success/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking-success/page.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 pt-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-600 font-semibold capitalize",
                                            children: booking.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Payment Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-600 font-semibold capitalize",
                                            children: booking.paymentStatus
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking-success/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 51
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking-success/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking-success/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking-success/page.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "bg-[#092439] text-[#D4AF37] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#0d3552] transition text-sm sm:text-base",
                            children: "Return Home"
                        }, void 0, false, {
                            fileName: "[project]/app/booking-success/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book",
                            className: "bg-white text-[#D4AF37] border-2 border-[#D4AF37] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition text-sm sm:text-base",
                            children: "Book Another Service"
                        }, void 0, false, {
                            fileName: "[project]/app/booking-success/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking-success/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/booking-success/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking-success/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function BookingSuccessPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-12 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/booking-success/page.tsx",
            lineNumber: 127,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingSuccessContent, {}, void 0, false, {
            fileName: "[project]/app/booking-success/page.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking-success/page.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3297fb7b._.js.map