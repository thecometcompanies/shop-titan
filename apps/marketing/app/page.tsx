import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import PlatformSection from "@/components/sections/PlatformSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-16">
                <HeroSection />
                <PainPointSection />
                <PlatformSection />
                <ProductShowcaseSection />
                <FeaturesSection />
                <BlogSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
