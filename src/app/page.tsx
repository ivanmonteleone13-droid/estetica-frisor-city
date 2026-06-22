import Hero from "@/components/Hero";
import BoutiqueNote from "@/components/BoutiqueNote";
import ServicesSection from "@/components/ServicesSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BoutiqueNote />
      <ServicesSection />
      <ReviewsCarousel />
      <AboutSection />
      <Gallery />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
