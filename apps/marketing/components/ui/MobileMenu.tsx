'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNavigate = (sectionId: string) => {
        onNavigate(sectionId);
        onClose();
    };

    const menuItems = [
        { id: 'product', label: 'Product' },
        { id: 'platform', label: 'Platform' },
        { id: 'features', label: 'Features' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-nav z-50 transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                <div className="flex flex-col h-full p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <span className="text-lg font-bold tracking-tight text-charcoal dark:text-white">
                            Menu
                        </span>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            aria-label="Close menu"
                        >
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">
                                close
                            </span>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleNavigate(item.id)}
                                        className="w-full text-left px-4 py-4 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-200 flex items-center justify-between group"
                                    >
                                        {item.label}
                                        <span className="material-symbols-outlined text-xl opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                                            arrow_forward
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer Actions */}
                    <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-800">
                        <button className="w-full px-4 py-3 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-charcoal dark:hover:text-white transition-all uppercase tracking-wider">
                            Log in
                        </button>
                        <button
                            onClick={() => handleNavigate('contact')}
                            className="w-full bg-primary text-white px-4 py-3 text-sm font-bold rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            Request Demo
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
