'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturesSection() {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { elementRef: card1Ref, isVisible: card1Visible } = useScrollAnimation();
    const { elementRef: card2Ref, isVisible: card2Visible } = useScrollAnimation();
    const { elementRef: card3Ref, isVisible: card3Visible } = useScrollAnimation();
    const { elementRef: card4Ref, isVisible: card4Visible } = useScrollAnimation();

    return (
        <section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32">
            <div className="max-w-7xl mx-auto px-mobile">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`mb-16 md:mb-20 lg:mb-24 max-w-3xl transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
                        Product Capabilities
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight text-charcoal dark:text-white">
                        Engineered for <br />
                        <span className="text-secondary-text dark:text-gray-600">
                            Operational Excellence.
                        </span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-secondary-text dark:text-gray-400 leading-relaxed">
                        A modular architectural approach to apparel decoration. We didn't
                        just build features; we solved the fundamental frictions of
                        high-volume production.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {/* Feature 1: Job Tracking */}
                    <div
                        ref={card1Ref}
                        className={`feature-card rounded-2xl md:rounded-3xl overflow-hidden grid lg:grid-cols-2 transition-all duration-700 ${card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-structural-border dark:border-gray-800">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined">analytics</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Job Tracking
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        The Problem Eliminated
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        "Where is order #492?" phone calls and physical job jackets
                                        getting lost between the office and the press.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        What Changes After
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        Real-time digital status updates at every stage. Every
                                        garment's journey is logged, visible, and searchable by
                                        anyone on the team.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-structural-border dark:border-gray-800">
                                    <p className="text-sm font-medium text-secondary-text dark:text-gray-400">
                                        <span className="text-charcoal dark:text-white">
                                            Best for:
                                        </span>{" "}
                                        Production Managers & Customer Service teams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mock UI */}
                        <div className="bg-background-light dark:bg-black p-8 lg:p-12 flex items-center justify-center">
                            <div className="ui-snippet w-full shadow-2xl overflow-hidden">
                                <div className="h-10 bg-surface dark:bg-gray-900 border-b border-structural-border dark:border-gray-800 px-4 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/20"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/20"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono ml-2 uppercase tracking-widest">
                                        FileMaker Pro - Production_Main
                                    </span>
                                </div>
                                <div className="p-6 bg-surface dark:bg-gray-950">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-bold rounded">
                                                IN PRODUCTION
                                            </div>
                                            <h3 className="font-bold text-sm dark:text-white">
                                                Job #9928 - Custom Tees
                                            </h3>
                                        </div>
                                        <span className="text-[10px] text-gray-400">
                                            ETA: 4:00 PM
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 rounded bg-background-light dark:bg-gray-900 text-xs border border-structural-border dark:border-gray-800">
                                            <span className="text-secondary-text">Separations</span>
                                            <span className="font-medium text-green-500">
                                                Verified
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded bg-background-light dark:bg-gray-900 text-xs border border-structural-border dark:border-gray-800">
                                            <span className="text-secondary-text">Screen Burning</span>
                                            <span className="font-medium text-green-500">
                                                Completed
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded bg-primary/5 text-xs border border-primary/20">
                                            <span className="text-primary font-semibold">
                                                Press Stage
                                            </span>
                                            <span className="font-medium text-primary">
                                                82% (410/500 units)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Inventory Management */}
                    <div
                        ref={card2Ref}
                        className={`feature-card rounded-3xl overflow-hidden grid lg:grid-cols-2 transition-all duration-700 delay-100 ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div className="order-2 lg:order-1 bg-background-light dark:bg-black p-8 lg:p-12 flex items-center justify-center">
                            <div className="ui-snippet w-full shadow-2xl overflow-hidden">
                                <div className="h-10 bg-surface dark:bg-gray-900 border-b border-structural-border dark:border-gray-800 px-4 flex items-center">
                                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                        Inventory_Matrix_v4
                                    </span>
                                </div>
                                <div className="p-6 bg-surface dark:bg-gray-950">
                                    <div className="grid grid-cols-4 gap-2 mb-6">
                                        <div className="h-12 bg-background-light dark:bg-gray-900 rounded border border-structural-border dark:border-gray-800 flex flex-col items-center justify-center">
                                            <span className="text-[9px] text-gray-400">S</span>
                                            <span className="text-xs font-bold dark:text-white">
                                                142
                                            </span>
                                        </div>
                                        <div className="h-12 bg-background-light dark:bg-gray-900 rounded border border-structural-border dark:border-gray-800 flex flex-col items-center justify-center">
                                            <span className="text-[9px] text-gray-400">M</span>
                                            <span className="text-xs font-bold dark:text-white">
                                                82
                                            </span>
                                        </div>
                                        <div className="h-12 bg-orange-50 dark:bg-orange-900/10 rounded border border-orange-200 dark:border-orange-900/30 flex flex-col items-center justify-center">
                                            <span className="text-[9px] text-orange-500">L</span>
                                            <span className="text-xs font-bold text-orange-600">
                                                4
                                            </span>
                                        </div>
                                        <div className="h-12 bg-background-light dark:bg-gray-900 rounded border border-structural-border dark:border-gray-800 flex flex-col items-center justify-center">
                                            <span className="text-[9px] text-gray-400">XL</span>
                                            <span className="text-xs font-bold dark:text-white">
                                                210
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                                            Incoming Purchase Orders
                                        </div>
                                        <div className="p-2 border border-structural-border dark:border-gray-800 rounded flex justify-between items-center text-[11px]">
                                            <span className="font-medium dark:text-white">
                                                PO #882 - SanMar
                                            </span>
                                            <span className="text-gray-400 italic">
                                                Arriving Tue
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-l border-structural-border dark:border-gray-800">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined">inventory</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Inventory Management
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        The Problem Eliminated
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        The "Oh crap, we're out of Large Whites" moment
                                        mid-production because someone forgot to update the
                                        spreadsheet.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        What Changes After
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        Global stock visibility synced with purchase orders. Live
                                        inventory levels across all physical bins, automatically
                                        updated as blanks are pulled.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-structural-border dark:border-gray-800">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <span className="text-charcoal dark:text-white">
                                            Best for:
                                        </span>{" "}
                                        Purchasing Agents & Warehouse Managers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Client Approvals */}
                    <div
                        ref={card3Ref}
                        className={`feature-card rounded-3xl overflow-hidden grid lg:grid-cols-2 transition-all duration-700 delay-200 ${card3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div className="p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-structural-border dark:border-gray-800">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Client Approvals
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        The Problem Eliminated
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        Approval delays buried in email threads. Clients approving
                                        the wrong design version because of messy communication.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        What Changes After
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        Integrated proofing portals. One-click approvals that
                                        instantly trigger production tickets, ensuring you only
                                        print what's approved.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-structural-border dark:border-gray-800">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <span className="text-charcoal dark:text-white">
                                            Best for:
                                        </span>{" "}
                                        Sales Reps & Art Departments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background-light dark:bg-black p-8 lg:p-12 flex items-center justify-center">
                            <div className="ui-snippet w-full shadow-2xl overflow-hidden">
                                <div className="p-6 bg-surface dark:bg-gray-950">
                                    <div className="aspect-video w-full bg-structural-border dark:bg-gray-900 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden group">
                                        <div className="text-center">
                                            <span className="material-symbols-outlined text-gray-300 dark:text-gray-700 text-6xl">
                                                image
                                            </span>
                                            <p className="text-[10px] text-gray-400 mt-2 font-mono uppercase tracking-widest">
                                                FRONT_CHEST_V2.PDF
                                            </p>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="flex-1 py-3 bg-green-500 text-white rounded text-[11px] font-bold uppercase tracking-widest">
                                            Approve Design
                                        </button>
                                        <button className="flex-1 py-3 border border-structural-border dark:border-gray-800 text-gray-500 rounded text-[11px] font-bold uppercase tracking-widest">
                                            Request Revision
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4: Automation Layers */}
                    <div
                        ref={card4Ref}
                        className={`feature-card rounded-3xl overflow-hidden grid lg:grid-cols-2 transition-all duration-700 delay-300 ${card4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div className="order-2 lg:order-1 bg-background-light dark:bg-black p-8 lg:p-12 flex items-center justify-center">
                            <div className="ui-snippet w-full shadow-2xl overflow-hidden">
                                <div className="h-10 bg-surface dark:bg-gray-900 border-b border-structural-border dark:border-gray-800 px-4 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                        Automation_Scripts
                                    </span>
                                    <div className="w-8 h-4 bg-primary rounded-full relative">
                                        <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="p-6 bg-surface dark:bg-gray-950 font-mono text-[11px]">
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <span className="text-primary opacity-50">01</span>
                                            <p className="text-gray-400 dark:text-gray-500">
                                                <span className="text-primary">IF</span> order_status =
                                                "Approved"
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-primary opacity-50">02</span>
                                            <p className="text-gray-400 dark:text-gray-500 pl-4">
                                                <span className="text-primary">TRIGGER</span>{" "}
                                                label_print(ShipStation)
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-primary opacity-50">03</span>
                                            <p className="text-gray-400 dark:text-gray-500 pl-4">
                                                <span className="text-primary">NOTIFY</span>{" "}
                                                customer(SendGrid, "Art is Ready")
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-primary opacity-50">04</span>
                                            <p className="text-gray-400 dark:text-gray-500">
                                                <span className="text-primary">END IF</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-l border-structural-border dark:border-gray-800">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined">bolt</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Automation Layers
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        The Problem Eliminated
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        Manual data re-entry between systems. Humans doing
                                        repetitive tasks that computers can do 10x faster and with
                                        zero errors.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                        What Changes After
                                    </h4>
                                    <p className="text-secondary-text dark:text-gray-400">
                                        Your software works for you. Automated Slack alerts for late
                                        orders, auto-generated shipping labels, and real-time P&L
                                        calculations happening in the background.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-structural-border dark:border-gray-800">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <span className="text-charcoal dark:text-white">
                                            Best for:
                                        </span>{" "}
                                        Operations Directors & Owners.
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
