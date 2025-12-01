module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/global-error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/global-error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/error.tsx [app-rsc] (ecmascript)"));
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
                className: "mb-3 sm:mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl sm:text-3xl font-bold text-[#D4AF37]",
                        children: [
                            "From £",
                            pkg.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PackageCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-gray-500 mt-1",
                        children: "Base price (includes up to 50 miles)"
                    }, void 0, false, {
                        fileName: "[project]/components/PackageCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
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
                                className: "text-[#D4AF37] mr-2 flex-shrink-0",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/components/PackageCard.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700",
                                children: feature
                            }, void 0, false, {
                                fileName: "[project]/components/PackageCard.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/PackageCard.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 22,
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
                        lineNumber: 31,
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
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/book?service=${serviceSlug}&package=${pkg.id}`,
                className: "block w-full bg-[#092439] text-[#D4AF37] text-center py-2.5 sm:py-3 rounded-lg hover:bg-[#0d3552] transition font-semibold text-sm sm:text-base",
                children: "Select Package"
            }, void 0, false, {
                fileName: "[project]/components/PackageCard.tsx",
                lineNumber: 34,
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
    ()=>ServicePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$packages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/packages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PackageCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PackageCard.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((service)=>({
            slug: service.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(slug);
    if (!service) {
        return {
            title: 'Service Not Found'
        };
    }
    return {
        title: `${service.name} - Al Buraq Logistics`,
        description: service.description
    };
}
async function ServicePage({ params }) {
    const { slug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(slug);
    if (!service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Service slug matches serviceType, so we can use it directly
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
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8",
                        children: service.description
                    }, void 0, false, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-[#D4AF37]/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4",
                                children: "What's Included:"
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3",
                                children: service.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#D4AF37] mr-2 flex-shrink-0",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 text-sm sm:text-base",
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/services/[slug]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/[slug]/page.tsx",
                lineNumber: 51,
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
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    packages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-yellow-800 font-semibold mb-2",
                                children: "No packages available"
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-yellow-700",
                                children: "Packages for this service are currently being updated. Please check back soon."
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "mt-4 inline-block bg-[#092439] text-[#D4AF37] px-6 py-2 rounded-lg hover:bg-[#0d3552] transition",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                        children: packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PackageCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                pkg: pkg,
                                serviceSlug: service.slug
                            }, pkg.id, false, {
                                fileName: "[project]/app/services/[slug]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/services/[slug]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/[slug]/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/[slug]/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5dac5e9b._.js.map