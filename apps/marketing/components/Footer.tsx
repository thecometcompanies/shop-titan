export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-900 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    <div className="sm:col-span-2 lg:col-span-2">
                        <a
                            href="#"
                            className="text-lg md:text-xl font-bold tracking-tight text-charcoal dark:text-white mb-4 md:mb-6 block"
                        >
                            Shop <span className="text-primary">Titan</span>
                        </a>
                        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
                            Custom FileMaker solutions for the apparel decoration industry.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 dark:text-white">
                            Explore
                        </h5>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors focus-primary tap-target">
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors focus-primary tap-target">
                                    Platform
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors focus-primary tap-target">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 dark:text-white">
                            Legal
                        </h5>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors focus-primary tap-target">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors focus-primary tap-target">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-gray-100 dark:border-gray-900">
                    <p className="text-xs text-gray-400 text-center md:text-left">
                        © 2024 Shop Titan. Built on Claris FileMaker.
                    </p>
                </div>
            </div>
        </footer>
    );
}
