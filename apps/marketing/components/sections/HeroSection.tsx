'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';

export default function HeroSection() {
    const { elementRef: whyRef, isVisible: whyVisible } = useScrollAnimation();

    const partners = [
        { icon: "verified_user", name: "Trusted Partner" },
        { icon: "layers", name: "Apparel Co." },
        { icon: "precision_manufacturing", name: "Global Print" },
        { icon: "architecture", name: "Stitch Labs" },
        { icon: "monitoring", name: "Flow Metrics" },
    ];

    return (
        <section
            id="product"
            className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-20 lg:pb-28"
        >
            <div className="max-w-6xl mx-auto px-mobile relative z-10">
                <div className="max-w-3xl text-left">
                    <p className="text-xl sm:text-2xl md:text-[2.5rem] lg:text-[2.75rem] text-black dark:text-white mb-8 md:mb-12 leading-relaxed sm:leading-normal md:leading-[1.55] tracking-tight font-semibold opacity-0 animate-fade-in-up">
                        Unify your production. One platform for high-volume decorators to
                        manage orders, inventory, and automation—from intake to fulfillment,
                        without the friction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start opacity-0 animate-fade-in-up delay-200">
                        <button className="group relative bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 overflow-hidden focus-primary tap-target w-full sm:w-auto">
                            <span className="relative z-10">Get Started Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_3s_linear_infinite]"></div>
                        </button>
                        <button className="glass-button px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-charcoal dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 text-base md:text-lg hover:scale-105 hover:shadow-xl focus-primary tap-target w-full sm:w-auto">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>

            {/* Partner Carousel */}
            <div className="w-full overflow-hidden mt-16 md:mt-24 py-3 md:py-4 border-y border-gray-100 dark:border-gray-900/50">
                <div className="carousel-track gap-8 md:gap-16 lg:gap-32 px-8 md:px-12 items-center">
                    {/* Duplicate partners for infinite scroll */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-gray-400 dark:text-gray-600 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        >
                            <span className="material-symbols-outlined text-2xl md:text-3xl">
                                {partner.icon}
                            </span>
                            <span className="text-sm md:text-base lg:text-lg font-semibold tracking-tighter italic whitespace-nowrap">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animated Gradient Background */}
            <AnimatedGradientBackground />

            {/* Why This System Exists */}
            <div
                ref={whyRef}
                className={`pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 bg-white dark:bg-background-dark border-t border-gray-50 dark:border-gray-900 mt-12 md:mt-16 transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-mobile text-center">
                    <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-4 md:mb-6">
                        Why This System Exists
                    </h2>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-charcoal dark:text-white mb-8 md:mb-10 max-w-4xl mx-auto">
                        The modern decorator is bogged down by{" "}
                        <span className="text-gray-400 italic">
                            disconnected spreadsheets
                        </span>{" "}
                        and manual entry. We built a unified flow to let you focus on craft,
                        not administration.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-left mt-12 md:mt-16">
                        <div className="flex-1 space-y-3 w-full max-w-md">
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500 mb-4">
                                <span className="material-symbols-outlined">sync_disabled</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold dark:text-white">
                                Disconnected
                            </h3>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                                Sales, production, and shipping living in separate silos causing
                                errors and delays.
                            </p>
                        </div>

                        <div className="hidden md:block">
                            <span className="material-symbols-outlined text-gray-300 text-2xl">
                                arrow_forward
                            </span>
                        </div>

                        <div className="flex-1 space-y-3 w-full max-w-md">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500 mb-4">
                                <span className="material-symbols-outlined">all_inclusive</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold dark:text-white">
                                Unified Flow
                            </h3>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                                One source of truth that powers everything from order entry to
                                the packing slip.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
