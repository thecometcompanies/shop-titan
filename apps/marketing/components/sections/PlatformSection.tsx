'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PlatformSection() {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
    const { elementRef: diagramRef, isVisible: diagramVisible } = useScrollAnimation();
    const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
    const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();

    return (
        <section id="platform" className="bg-white dark:bg-background-dark">
            {/* Header */}
            <div
                ref={headerRef}
                className={`pt-20 md:pt-28 pb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-mobile">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
                        <div>
                            <span className="inline-block text-primary text-[9px] font-black tracking-[0.2em] uppercase mb-1">
                                Architecture Overview
                            </span>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-charcoal dark:text-white">
                                A Single Operational Source of Truth.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-mobile">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                        {/* Left Column - Text */}
                        <div
                            ref={contentRef}
                            className={`lg:col-span-6 transition-all duration-700 delay-100 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="max-w-2xl">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight text-charcoal dark:text-white tracking-tight">
                                    Built for Operational Leverage.
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed font-normal">
                                    Our architecture is designed to decouple your time from the
                                    shop's output by installing a system-driven hierarchy. Move
                                    from being the bottleneck to overseeing a self-correcting
                                    operation.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                                    <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-xl md:text-2xl">
                                                visibility
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm md:text-base mb-1 md:mb-2 text-charcoal dark:text-white">
                                                High-Level Visibility
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                                                Real-time P&L and shop capacity without digging through
                                                spreadsheets or manual reports.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-xl md:text-2xl">
                                                auto_mode
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm md:text-base mb-1 md:mb-2 text-charcoal dark:text-white">
                                                Self-Driving Operations
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                                                Automated logic that handles order routing, quality
                                                checks, and status updates automatically.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Architecture Diagram */}
                        <div
                            ref={diagramRef}
                            className={`lg:col-span-6 transition-all duration-700 delay-200 ${diagramVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="bg-gray-50/30 dark:bg-gray-900/30 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] -mr-40 -mt-40"></div>
                                <div className="relative z-10 grid grid-cols-1 gap-4 max-w-md mx-auto">
                                    {/* Level 1 - Ownership */}
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 border-l-4 border-l-gray-300">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-2xl text-primary/70">
                                                    monitoring
                                                </span>
                                                <h3 className="text-lg font-bold text-charcoal dark:text-white">
                                                    Ownership
                                                </h3>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                                                Level 01
                                            </span>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 font-medium italic">
                                            "Strategic Direction & Profitability"
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[10px] font-semibold border border-gray-100 dark:border-gray-700 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                P&L Visibility
                                            </span>
                                            <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[10px] font-semibold border border-gray-100 dark:border-gray-700 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                Forecasting
                                            </span>
                                            <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[10px] font-semibold border border-gray-100 dark:border-gray-700 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                Growth ROI
                                            </span>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="flex justify-center -my-2 relative z-0">
                                        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                                    </div>

                                    {/* Level 2 - Management */}
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 border-l-4 border-l-gray-300">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-2xl text-primary/70">
                                                    account_tree
                                                </span>
                                                <h3 className="text-lg font-bold text-charcoal dark:text-white">
                                                    Management
                                                </h3>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                                                Level 02
                                            </span>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 font-medium italic">
                                            "Execution & Optimization"
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[10px] font-semibold border border-gray-100 dark:border-gray-700 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                Production Flow
                                            </span>
                                            <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[10px] font-semibold border border-gray-100 dark:border-gray-700 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                Inventory Sync
                                            </span>
                                            <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[10px] font-semibold border border-gray-100 dark:border-gray-700 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                Staffing
                                            </span>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="flex justify-center -my-2 relative z-0">
                                        <div className="w-px h-8 bg-primary/30"></div>
                                    </div>

                                    {/* Level 3 - Automation (Highlighted) */}
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border-l-4 border-l-primary ring-1 ring-primary/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-2xl text-primary">
                                                    smart_toy
                                                </span>
                                                <h3 className="text-lg font-bold text-charcoal dark:text-white">
                                                    Automation
                                                </h3>
                                            </div>
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                                Core Engine
                                            </span>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 font-medium italic">
                                            "Self-Correcting Logistics"
                                        </p>
                                        <div className="grid grid-cols-1 gap-2.5">
                                            <div className="flex items-center gap-3 text-[11px] text-gray-600 dark:text-gray-400">
                                                <span className="material-symbols-outlined text-base text-green-600">
                                                    check_circle
                                                </span>
                                                Error Prevention Logic
                                            </div>
                                            <div className="flex items-center gap-3 text-[11px] text-gray-600 dark:text-gray-400">
                                                <span className="material-symbols-outlined text-base text-green-600">
                                                    check_circle
                                                </span>
                                                Automated Shipping Workflows
                                            </div>
                                            <div className="flex items-center gap-3 text-[11px] text-gray-600 dark:text-gray-400">
                                                <span className="material-symbols-outlined text-base text-green-600">
                                                    check_circle
                                                </span>
                                                Real-time Status Synchronization
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hierarchy of Leverage */}
            <div className="py-12 md:py-20 bg-gray-50/20 dark:bg-black/20 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-mobile">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl md:rounded-[2rem] p-6 md:p-10 lg:p-16 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 text-charcoal dark:text-white tracking-tight">
                                    The Hierarchy of Leverage
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                    Moving from human-centric to system-centric shop management.
                                </p>
                            </div>

                            <div
                                ref={comparisonRef}
                                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                {/* Traditional Shops */}
                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg text-gray-400">
                                                person_off
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-gray-400 mb-0 uppercase tracking-[0.2em] text-xs">
                                            Traditional Shops
                                        </h4>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-base pl-14">
                                        The owner acts as the{" "}
                                        <span className="font-medium text-charcoal dark:text-white">
                                            "Human Router."
                                        </span>{" "}
                                        Every critical decision, error recovery, and status check
                                        must pass through them. When they are unavailable, the
                                        operation slows down or becomes paralyzed.
                                    </p>
                                </div>

                                {/* System-Driven Shops */}
                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg text-primary">
                                                hub
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-primary mb-0 uppercase tracking-[0.2em] text-xs">
                                            System-Driven Shops
                                        </h4>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-base pl-14 border-l-2 border-primary/10">
                                        The{" "}
                                        <span className="font-medium text-charcoal dark:text-white">
                                            "System Router"
                                        </span>{" "}
                                        takes over. Decision trees and business logic are baked into
                                        the architecture. The owner maintains autonomy, focusing on
                                        strategic oversight while the floor runs autonomously.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
