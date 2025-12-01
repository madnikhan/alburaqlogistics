(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/faq/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const faqs = [
    {
        question: 'How do you calculate the price?',
        answer: 'Our pricing is based on a base price for each package plus distance charges. Base prices include up to 50 miles. For moves over 50 miles, we charge £1.20 per additional mile (50-100 miles) or £1.50 per mile (over 100 miles). The price calculator on the booking page will show you the exact breakdown.'
    },
    {
        question: 'What is included in the base price?',
        answer: 'Base prices include the service package (movers, vehicle, insurance) and up to 50 miles of travel distance. Additional services like packing materials, furniture disassembly, and storage may be included depending on the package selected.'
    },
    {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 2-4 weeks in advance, especially during peak moving seasons (summer months and end of month). However, we can often accommodate last-minute bookings subject to availability.'
    },
    {
        question: 'Do you provide packing materials?',
        answer: 'Packing materials are included in our Standard and Premium packages. For Basic packages, you can purchase packing materials separately or bring your own. We can provide boxes, bubble wrap, packing tape, and other materials.'
    },
    {
        question: 'Are you insured?',
        answer: 'Yes, all our services come with comprehensive insurance coverage. The level of insurance varies by package - Basic packages include standard insurance, while Premium packages include full coverage. Details are shown in each package description.'
    },
    {
        question: 'What happens if I need to cancel or reschedule?',
        answer: 'You can cancel or reschedule your booking up to 48 hours before the scheduled pickup time at no charge. Cancellations within 48 hours may incur a fee. Please contact us as soon as possible if you need to make changes.'
    },
    {
        question: 'Do you move on weekends?',
        answer: 'Yes, we offer weekend and evening moving services. Weekend bookings may have slightly higher rates. You can select your preferred date and time during the booking process.'
    },
    {
        question: 'How do you handle fragile or valuable items?',
        answer: 'Our experienced team takes special care with fragile and valuable items. We use appropriate packing materials and handling techniques. For very valuable items (antiques, artwork, etc.), we recommend additional insurance coverage.'
    },
    {
        question: 'Can I track my booking?',
        answer: 'Yes, you can view your booking status by visiting the "My Bookings" page and entering your email address. You\'ll receive email confirmations at each stage of the booking process.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit and debit cards through our secure online payment system. Payment is required at the time of booking to confirm your reservation.'
    },
    {
        question: 'Do you provide storage services?',
        answer: 'Yes, we offer storage solutions for both short-term and long-term needs. Storage options are available with our Medium and Large office moving packages, and can be added to other services upon request.'
    },
    {
        question: 'What areas do you cover?',
        answer: 'We primarily serve Birmingham and the West Midlands region. Base prices include moves up to 50 miles. We can provide long-distance moving services throughout the UK with additional mileage charges.'
    }
];
function FAQPage() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center",
                children: "Frequently Asked Questions"
            }, void 0, false, {
                fileName: "[project]/app/faq/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center",
                children: "Find answers to common questions about our services, pricing, and booking process."
            }, void 0, false, {
                fileName: "[project]/app/faq/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleFAQ(index),
                                className: "w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base sm:text-lg font-semibold text-gray-900 pr-4",
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/app/faq/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#D4AF37] text-xl flex-shrink-0",
                                        children: openIndex === index ? '−' : '+'
                                    }, void 0, false, {
                                        fileName: "[project]/app/faq/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/faq/page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 sm:px-6 pb-4 sm:pb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base text-gray-700 leading-relaxed",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/faq/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/faq/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/faq/page.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/faq/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 bg-[#092439]/10 rounded-lg p-6 sm:p-8 text-center border border-[#D4AF37]/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4",
                        children: "Still have questions?"
                    }, void 0, false, {
                        fileName: "[project]/app/faq/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg text-gray-700 mb-4 sm:mb-6",
                        children: "Our team is here to help. Get in touch with us today."
                    }, void 0, false, {
                        fileName: "[project]/app/faq/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "bg-[#092439] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#0d3552] transition",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/app/faq/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/book",
                                className: "bg-white text-[#D4AF37] border-2 border-[#D4AF37] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#D4AF37]/10 transition",
                                children: "Book a Service"
                            }, void 0, false, {
                                fileName: "[project]/app/faq/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/faq/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/faq/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/faq/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(FAQPage, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQPage;
var _c;
__turbopack_context__.k.register(_c, "FAQPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_faq_page_tsx_844b9d48._.js.map