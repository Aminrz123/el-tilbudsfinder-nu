import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LeadForm />
      <BenefitsSection />
      <FAQSection />
      <Footer />
      <CookieConsent />
    </main>
  );
};

export default Index;
