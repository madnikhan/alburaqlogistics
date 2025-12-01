module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "services",
    ()=>services
]);
const services = [
    {
        id: 'removals',
        name: 'Removals',
        slug: 'removals',
        description: 'Professional removal services for homes and businesses across Birmingham and the West Midlands.',
        image: '/services/removals.jpg',
        features: [
            'Experienced and insured movers',
            'Full packing and unpacking service',
            'Furniture disassembly and assembly',
            'Flexible scheduling',
            'Competitive pricing'
        ]
    },
    {
        id: 'office-moving',
        name: 'Office Moving',
        slug: 'office-moving',
        description: 'Specialized office relocation services with minimal business disruption.',
        image: '/services/office.jpg',
        features: [
            'IT equipment handling',
            'Minimal downtime',
            'Flexible scheduling (weekends/evenings)',
            'Storage solutions',
            'Project management'
        ]
    },
    {
        id: 'house-moving',
        name: 'House Moving',
        slug: 'house-moving',
        description: 'Complete house moving services for properties of all sizes.',
        image: '/services/house.jpg',
        features: [
            'All property sizes',
            'Full packing service',
            'Careful handling of valuables',
            'Same-day service available',
            'Insurance coverage'
        ]
    },
    {
        id: 'pallets',
        name: 'Pallet Services',
        slug: 'pallets',
        description: 'Efficient pallet collection and delivery services throughout Birmingham.',
        image: '/services/pallets.jpg',
        features: [
            'Single or multiple pallets',
            'Next day delivery',
            'Collection and delivery',
            'Pallet wrapping available',
            'Warehouse to warehouse'
        ]
    }
];
const getServiceBySlug = (slug)=>{
    return services.find((service)=>service.slug === slug);
};
}),
"[project]/lib/packages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
        price: 150,
        features: [
            '1-2 bedroom removal',
            'Up to 20 miles',
            '2 movers',
            'Standard van',
            'Basic insurance'
        ],
        estimatedHours: 4,
        maxDistance: 20,
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
        price: 280,
        features: [
            '2-3 bedroom removal',
            'Up to 30 miles',
            '3 movers',
            'Large van',
            'Full insurance',
            'Packing materials included'
        ],
        estimatedHours: 6,
        maxDistance: 30,
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
        price: 450,
        features: [
            '3+ bedroom removal',
            'Up to 50 miles',
            '4 movers',
            'Large van + trailer',
            'Premium insurance',
            'Full packing service',
            'Furniture disassembly'
        ],
        estimatedHours: 8,
        maxDistance: 50,
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
        price: 350,
        features: [
            'Up to 20 desks',
            'IT equipment handling',
            'Up to 25 miles',
            '3 movers',
            'Office insurance',
            'Weekend/evening options'
        ],
        estimatedHours: 6,
        maxDistance: 25,
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
        price: 650,
        features: [
            'Up to 40 desks',
            'IT equipment handling',
            'Up to 40 miles',
            '5 movers',
            'Full office insurance',
            'Flexible scheduling',
            'Storage options'
        ],
        estimatedHours: 10,
        maxDistance: 40,
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
        price: 1200,
        features: [
            '40+ desks',
            'Full IT infrastructure',
            'Up to 60 miles',
            '8+ movers',
            'Premium insurance',
            'Project management',
            'Storage & warehousing'
        ],
        estimatedHours: 16,
        maxDistance: 60,
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
        price: 200,
        features: [
            'Studio/1 bedroom',
            'Up to 25 miles',
            '2 movers',
            'Medium van',
            'Standard insurance'
        ],
        estimatedHours: 5,
        maxDistance: 25,
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
        price: 320,
        features: [
            '2 bedroom property',
            'Up to 30 miles',
            '3 movers',
            'Large van',
            'Full insurance',
            'Packing materials'
        ],
        estimatedHours: 7,
        maxDistance: 30,
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
        price: 480,
        features: [
            '3 bedroom property',
            'Up to 40 miles',
            '4 movers',
            'Large van + trailer',
            'Premium insurance',
            'Full packing service'
        ],
        estimatedHours: 9,
        maxDistance: 40,
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
        price: 750,
        features: [
            '4+ bedroom property',
            'Up to 50 miles',
            '5+ movers',
            'Multiple vehicles',
            'Premium insurance',
            'Full packing & unpacking',
            'Furniture disassembly'
        ],
        estimatedHours: 12,
        maxDistance: 50,
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
            'Up to 20 miles',
            'Next day delivery',
            'Standard insurance',
            'Collection & delivery'
        ],
        estimatedHours: 2,
        maxDistance: 20,
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
            'Up to 30 miles',
            'Next day delivery',
            'Full insurance',
            'Collection & delivery'
        ],
        estimatedHours: 3,
        maxDistance: 30,
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
            'Up to 50 miles',
            'Flexible scheduling',
            'Premium insurance',
            'Warehouse to warehouse'
        ],
        estimatedHours: 5,
        maxDistance: 50,
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
}),
"[project]/components/PackageCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function PackageCard({ pkg, serviceSlug }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg sm:text-xl font-bold text-gray-900 mb-2",
                children: pkg.name
            }, void 0, false, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm sm:text-base text-gray-600 mb-3 sm:mb-4",
                children: pkg.description
            }, void 0, false, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4",
                children: [
                    "£",
                    pkg.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1.5 sm:space-y-2 mb-4 sm:mb-6",
                children: pkg.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start text-sm sm:text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-500 mr-2 flex-shrink-0",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/components/PackageCard.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700",
                                children: feature
                            }, void 0, false, {
                                fileName: "[project]/components/PackageCard.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/PackageCard.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Estimated time: ",
                            pkg.estimatedHours,
                            " hours"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PackageCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Max distance: ",
                            pkg.maxDistance,
                            " miles"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PackageCard.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/book?service=${serviceSlug}&package=${pkg.id}`,
                className: "block w-full bg-blue-600 text-white text-center py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base",
                children: "Select Package"
            }, void 0, false, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PackageCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/packages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PackageCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PackageCard.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function ServicePage({ params }) {
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(params.slug);
    if (!service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const packages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPackagesByService"])(service.slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto mb-8 sm:mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4",
                        children: service.name
                    }, void 0, false, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8",
                        children: service.description
                    }, void 0, false, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4",
                                children: "What's Included:"
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3",
                                children: service.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-500 mr-2 flex-shrink-0",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 text-sm sm:text-base",
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/services/[slug]/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/[slug]/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 sm:mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center",
                        children: "Choose Your Package"
                    }, void 0, false, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                        children: packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PackageCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                pkg: pkg,
                                serviceSlug: service.slug
                            }, pkg.id, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/[slug]/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d384046f._.js.map