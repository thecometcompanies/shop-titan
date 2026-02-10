"use client";

import { useState } from "react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        friction: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for requesting a demo! We'll be in touch soon.");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <section
            id="contact"
            className="flex-grow flex items-center justify-center px-mobile py-20 md:py-28 lg:py-32 bg-background-light dark:bg-background-dark"
        >
            <div className="w-full max-w-xl">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-8 md:mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal dark:text-white mb-3 md:mb-4">
                        Request Your Demo
                    </h1>
                    <p className="text-secondary-text dark:text-gray-400 text-base md:text-lg">
                        No pressure. No sales pitch. Just clarity.
                    </p>
                </div>

                {/* Form Card */}
                <div
                    ref={formRef}
                    className={`bg-surface dark:bg-gray-900 rounded-2xl md:rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-structural-border dark:border-gray-800 p-6 md:p-8 lg:p-12 transition-all duration-700 delay-100 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full Name"
                                    className="w-full bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-primary focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2"
                                >
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="email@company.com"
                                    className="w-full bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-primary focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300"
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2"
                                >
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    placeholder="Business Name"
                                    className="w-full bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-primary focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300"
                                />
                            </div>

                            {/* Friction Point */}
                            <div>
                                <label
                                    htmlFor="friction"
                                    className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2"
                                >
                                    Main Friction Point
                                </label>
                                <textarea
                                    id="friction"
                                    value={formData.friction}
                                    onChange={handleChange}
                                    required
                                    placeholder="What part of your operation is causing the most chaos?"
                                    className="w-full bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-primary focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300 min-h-[120px]"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-5 rounded-xl hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                            >
                                Request Custom Demo
                                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </form>

                    {/* Social Proof */}
                    <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-structural-border dark:bg-gray-700 border-2 border-surface dark:border-gray-900 flex items-center justify-center text-[10px] font-bold">
                                    JD
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-surface dark:border-gray-900 flex items-center justify-center text-[10px] font-bold text-primary">
                                    MS
                                </div>
                                <div className="w-8 h-8 rounded-full bg-background-light dark:bg-gray-800 border-2 border-surface dark:border-gray-900 flex items-center justify-center text-[10px] font-bold text-secondary-text">
                                    +12
                                </div>
                            </div>
                            <span className="text-xs text-secondary-text font-medium">
                                Joined by 150+ shops this month
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary-text font-semibold">
                        Zero Distractions • Ultra-Clean UI • High Focus
                    </p>
                </div>
            </div>
        </section>
    );
}
