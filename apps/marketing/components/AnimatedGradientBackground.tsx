'use client';

export default function AnimatedGradientBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes gradientFlow1 {
                        0%, 100% {
                            transform: translateX(0) translateY(0) scale(1);
                            opacity: 0.4;
                        }
                        50% {
                            transform: translateX(50px) translateY(-30px) scale(1.1);
                            opacity: 0.6;
                        }
                    }

                    @keyframes gradientFlow2 {
                        0%, 100% {
                            transform: translateX(0) translateY(0) scale(1);
                            opacity: 0.3;
                        }
                        50% {
                            transform: translateX(-40px) translateY(40px) scale(1.05);
                            opacity: 0.5;
                        }
                    }

                    @keyframes gradientFlow3 {
                        0%, 100% {
                            transform: translateX(0) translateY(0) scale(1);
                            opacity: 0.35;
                        }
                        50% {
                            transform: translateX(30px) translateY(-20px) scale(1.08);
                            opacity: 0.55;
                        }
                    }

                    @keyframes gradientFlow4 {
                        0%, 100% {
                            transform: translateX(0) translateY(0) rotate(0deg);
                            opacity: 0.25;
                        }
                        50% {
                            transform: translateX(-20px) translateY(30px) rotate(2deg);
                            opacity: 0.4;
                        }
                    }

                    .ribbon-1 {
                        animation: gradientFlow1 20s ease-in-out infinite;
                        transform-origin: center;
                    }

                    .ribbon-2 {
                        animation: gradientFlow2 25s ease-in-out infinite;
                        transform-origin: center;
                    }

                    .ribbon-3 {
                        animation: gradientFlow3 30s ease-in-out infinite;
                        transform-origin: center;
                    }

                    .ribbon-4 {
                        animation: gradientFlow4 22s ease-in-out infinite;
                        transform-origin: center;
                    }
                `
            }} />

            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1200 800"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Gradient Definitions */}
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066CC" stopOpacity="0.15" />
                        <stop offset="50%" stopColor="#0052A3" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#003D7A" stopOpacity="0.15" />
                    </linearGradient>

                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.12" />
                        <stop offset="50%" stopColor="#0066CC" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#005BB5" stopOpacity="0.12" />
                    </linearGradient>

                    <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6E6E73" stopOpacity="0.08" />
                        <stop offset="50%" stopColor="#0066CC" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#86868B" stopOpacity="0.08" />
                    </linearGradient>

                    <linearGradient id="gradient4" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#0080FF" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#0066CC" stopOpacity="0.14" />
                        <stop offset="100%" stopColor="#004D99" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Animated Ribbon Paths */}
                {/* Ribbon 1 - Top flowing ribbon */}
                <path
                    className="ribbon-1"
                    d="M-200,100 Q100,50 400,150 T1000,100 L1400,0 L1400,300 Q1000,250 600,300 T-200,250 Z"
                    fill="url(#gradient1)"
                />

                {/* Ribbon 2 - Middle diagonal ribbon */}
                <path
                    className="ribbon-2"
                    d="M-200,300 Q200,200 600,350 T1400,300 L1400,500 Q1000,450 400,550 T-200,500 Z"
                    fill="url(#gradient2)"
                />

                {/* Ribbon 3 - Bottom sweeping ribbon */}
                <path
                    className="ribbon-3"
                    d="M-200,500 Q300,400 700,550 T1400,500 L1400,800 L-200,800 Z"
                    fill="url(#gradient3)"
                />

                {/* Ribbon 4 - Accent overlay ribbon */}
                <path
                    className="ribbon-4"
                    d="M-200,200 Q400,100 800,250 T1400,200 L1400,400 Q900,350 500,400 T-200,350 Z"
                    fill="url(#gradient4)"
                />
            </svg>

            {/* Subtle overlay for better text contrast - uses Apple-inspired off-white */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBFBFB]/60 dark:to-background-dark/60" />
        </div>
    );
}
