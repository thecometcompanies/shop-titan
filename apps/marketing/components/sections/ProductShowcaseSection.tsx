'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProductShowcaseSection() {
    const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation();
    const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation();
    const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation();

    return (
        <section className="pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48 bg-background-light dark:bg-background-dark" id="product">
            <div className="max-w-6xl mx-auto px-mobile space-y-24 md:space-y-32 lg:space-y-40">
                {/* Feature 1: Friction Removal */}
                <div
                    ref={section1Ref}
                    className={`grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center transition-all duration-700 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div>
                        <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3 md:mb-4">
                            Friction Removal
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal dark:text-white mb-4 md:mb-6 leading-tight">
                            Clarity replaces communication.
                        </h3>
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                            Every message sent internally is a symptom of a process failure. We design workflows where fewer clicks directly translate to fewer mistakes and eliminated conversations.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <div>
                                    <span className="font-bold block dark:text-white">Fewest Clicks</span>
                                    <p className="text-secondary-text text-sm">
                                        Actionable interfaces designed to minimize operator input fatigue.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <div>
                                    <span className="font-bold block dark:text-white">Eliminated Handoffs</span>
                                    <p className="text-secondary-text text-sm">
                                        Automated state transitions that move jobs without manual pings.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <div>
                                    <span className="font-bold block dark:text-white">Explicit Ownership</span>
                                    <p className="text-secondary-text text-sm">
                                        Data structure that clearly defines who owns a task at any second.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* UI Mockup */}
                    <div className="ui-snippet p-4 md:p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-structural-border dark:border-gray-800 pb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
                            </div>
                            <div className="text-[10px] font-mono text-secondary-text uppercase tracking-widest">
                                Workflow Engine v4.2
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-3 bg-background-light dark:bg-gray-900/50 rounded flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    <span className="text-sm font-medium dark:text-gray-300">
                                        Auto-Approve Art if MD5 Matches
                                    </span>
                                </div>
                                <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded">
                                    Active
                                </span>
                            </div>
                            <div className="p-3 bg-background-light dark:bg-gray-900/50 rounded flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gray-300 rounded-full"></div>
                                    <span className="text-sm font-medium dark:text-gray-300">
                                        Skip Shipping Intake (Pre-labeled)
                                    </span>
                                </div>
                                <span className="text-[10px] bg-gray-200 text-gray-500 px-2 py-1 rounded">
                                    System
                                </span>
                            </div>
                            <div className="mt-6 md:mt-8 pt-4 border-t border-structural-border dark:border-gray-800">
                                <div className="flex justify-between text-[11px] text-secondary-text mb-2 font-mono uppercase">
                                    <span>Touchpoints per Order</span>
                                    <span>-64% reduction</span>
                                </div>
                                <div className="w-full bg-structural-border dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[36%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Ownership-Level Result */}
                <div
                    ref={section2Ref}
                    className={`grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center transition-all duration-700 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* UI Mockup - Left side on desktop */}
                    <div className="order-2 lg:order-1 ui-snippet p-6 md:p-8 shadow-2xl bg-surface">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-1/2 p-4 bg-background-light dark:bg-gray-900 rounded shadow-sm">
                                    <p className="text-[10px] text-secondary-text uppercase font-bold mb-1">
                                        Queue Status
                                    </p>
                                    <p className="text-2xl font-light text-primary tracking-tight">Healthy</p>
                                </div>
                                <div className="w-1/2 p-4 bg-background-light dark:bg-gray-900 rounded shadow-sm">
                                    <p className="text-[10px] text-secondary-text uppercase font-bold mb-1">
                                        Escalations
                                    </p>
                                    <p className="text-2xl font-light text-charcoal dark:text-white tracking-tight">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 bg-background-light dark:bg-gray-900 rounded shadow-sm">
                                <p className="text-[10px] text-secondary-text uppercase font-bold mb-4">
                                    Operator Pulse
                                </p>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="dark:text-gray-300">Machine A</span>
                                        <span className="text-green-500 font-mono">142u/hr</span>
                                    </div>
                                    <div className="w-full h-1 bg-structural-border dark:bg-gray-800 rounded-full">
                                        <div className="w-[85%] h-full bg-green-500"></div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="dark:text-gray-300">Machine B</span>
                                        <span className="text-green-500 font-mono">138u/hr</span>
                                    </div>
                                    <div className="w-full h-1 bg-structural-border dark:bg-gray-800 rounded-full">
                                        <div className="w-[82%] h-full bg-green-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Right side on desktop */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3 md:mb-4">
                            Ownership-Level Result
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal dark:text-white mb-4 md:mb-6 leading-tight">
                            Scale without adding noise.
                        </h3>
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                            The ultimate metric for an owner is the ability to disconnect. This framework creates a self-healing operational loop that delivers visibility without requiring your constant involvement.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 border-l-2 border-primary/20">
                                <span className="text-sm font-bold block mb-1 dark:text-white">
                                    No Chasing Updates
                                </span>
                                <p className="text-sm text-secondary-text">
                                    Global dashboard visibility for every stakeholder in real-time.
                                </p>
                            </div>
                            <div className="p-4 border-l-2 border-primary/20">
                                <span className="text-sm font-bold block mb-1 dark:text-white">
                                    Visibility-on-Demand
                                </span>
                                <p className="text-sm text-secondary-text">
                                    Access deep-dive production logs only when you actually want to.
                                </p>
                            </div>
                            <div className="p-4 border-l-2 border-primary/20 sm:col-span-2">
                                <span className="text-sm font-bold block mb-1 dark:text-white">
                                    Owner-Absent Operations
                                </span>
                                <p className="text-sm text-secondary-text">
                                    Rules-based logic ensures the shop floor knows what to do even when you're off-site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Single-Piece Orders */}
                <div
                    ref={section3Ref}
                    className={`grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center transition-all duration-700 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div>
                        <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3 md:mb-4">
                            Strategic Strategy
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal dark:text-white mb-4 md:mb-6 leading-tight">
                            Single-Piece Orders, Without Operational Chaos.
                        </h3>
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                            We neutralize the Print-on-Demand threat by making one-piece orders as easy to process as bulk orders. Our system treats single units as a first-class workflow, removing the manual overhead that kills small-order margins.
                        </p>
                        <div className="relative py-6 md:py-8 px-4 border border-structural-border dark:border-gray-800 rounded-xl bg-surface dark:bg-gray-900/30">
                            <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-secondary-text">
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined text-xs">download</span> Intake
                                </div>
                                <span className="material-symbols-outlined text-xs hidden sm:inline">arrow_forward</span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">visibility</span> Proofing
                                </div>
                                <span className="material-symbols-outlined text-xs hidden sm:inline">arrow_forward</span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">print</span> Production
                                </div>
                                <span className="material-symbols-outlined text-xs hidden sm:inline">arrow_forward</span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">package_2</span> Fulfillment
                                </div>
                                <span className="material-symbols-outlined text-xs hidden sm:inline">arrow_forward</span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">mail</span> Updates
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UI Mockup */}
                    <div className="ui-snippet p-4 md:p-6 shadow-2xl">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 border border-primary/10 rounded-lg bg-primary/5">
                                <div className="w-10 h-10 rounded bg-surface dark:bg-gray-800 flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-primary">shopping_cart</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1 gap-2">
                                        <span className="text-xs font-bold dark:text-white truncate">
                                            Shopify Integration: Order #9102
                                        </span>
                                        <span className="text-[10px] text-gray-400 flex-shrink-0">0.4s ago</span>
                                    </div>
                                    <div className="text-[11px] text-gray-500 truncate">
                                        1x Heavyweight Tee (L, Vintage Black) • Direct-to-Garment
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="p-3 bg-background-light dark:bg-gray-900/80 rounded border border-structural-border dark:border-gray-800 text-center">
                                    <p className="text-[9px] text-gray-400 uppercase mb-1">Art Prep</p>
                                    <span className="material-symbols-outlined text-green-500 text-lg">
                                        auto_fix_high
                                    </span>
                                </div>
                                <div className="p-3 bg-background-light dark:bg-gray-900/80 rounded border border-structural-border dark:border-gray-800 text-center">
                                    <p className="text-[9px] text-gray-400 uppercase mb-1">Stock Check</p>
                                    <span className="material-symbols-outlined text-green-500 text-lg">
                                        inventory_2
                                    </span>
                                </div>
                                <div className="p-3 bg-background-light dark:bg-gray-900/80 rounded border border-structural-border dark:border-gray-800 text-center">
                                    <p className="text-[9px] text-gray-400 uppercase mb-1">Route</p>
                                    <span className="material-symbols-outlined text-green-500 text-lg">route</span>
                                </div>
                            </div>
                            <p className="text-center text-[11px] text-secondary-text italic">
                                No human interaction required until the garment is on the platen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
