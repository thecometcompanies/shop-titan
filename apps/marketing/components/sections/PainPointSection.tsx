'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PainPointSection() {
    const { elementRef, isVisible } = useScrollAnimation();

    const painPoints = [
        {
            time: "9:30 am",
            icon: "content_copy",
            description: "Production manager copying order details from emails into 4 different spreadsheets.",
            delay: "delay-100"
        },
        {
            time: "1:15 pm",
            icon: "search",
            description: "Team lead hunting through folders for artwork files from a job sent two weeks ago.",
            delay: "delay-200"
        },
        {
            time: "5:45 pm",
            icon: "edit_note",
            description: "Your best decorator manually updating inventory counts instead of running the next batch.",
            delay: "delay-300"
        }
    ];

    return (
        <section
            ref={elementRef}
            className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-background-dark dark:via-gray-950 dark:to-background-dark overflow-hidden"
        >
            {/* Gradient Blob Background */}
            <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-mobile">
                {/* Main Headline */}
                <div
                    className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white mb-6 leading-tight tracking-tight">
                        Your best people are stuck doing low-value work.
                    </h2>
                </div>

                {/* Pain Point Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`feature-card p-6 md:p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                } ${point.delay}`}
                        >
                            {/* Clock Icon with Time */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="relative w-16 h-16">
                                    {/* Clock Circle */}
                                    <svg
                                        className="w-full h-full text-gray-200 dark:text-gray-800"
                                        viewBox="0 0 100 100"
                                    >
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="48"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        {/* Clock Hands - Simple representation */}
                                        <line
                                            x1="50"
                                            y1="50"
                                            x2="50"
                                            y2="25"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            className="text-charcoal dark:text-gray-400"
                                        />
                                        <line
                                            x1="50"
                                            y1="50"
                                            x2="70"
                                            y2="50"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            className="text-charcoal dark:text-gray-400"
                                        />
                                    </svg>
                                </div>
                                <span className="text-lg md:text-xl font-semibold text-charcoal dark:text-white">
                                    {point.time}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div
                    className={`text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-400 dark:text-gray-600">
                        We can automate all of this and give you hours back every day.
                    </p>
                </div>
            </div>
        </section>
    );
}
