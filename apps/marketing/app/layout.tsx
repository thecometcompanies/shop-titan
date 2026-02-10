import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const crimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-crimson",
    display: "swap",
    style: ["normal", "italic"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: "Shop Titan | Professional Apparel Operations",
    description:
        "Unify your production. One platform for high-volume decorators to manage orders, inventory, and automation—from intake to fulfillment, without the friction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${inter.variable} ${crimsonPro.variable} antialiased selection:bg-primary/20`}
            >
                {children}
            </body>
        </html>
    );
}
