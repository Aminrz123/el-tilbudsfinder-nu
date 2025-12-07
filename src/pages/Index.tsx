import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import BenefitsSection from "@/components/BenefitsSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StepsSection />
      <LeadForm />
      <BenefitsSection />
      <Footer />
      <CookieConsent />
    </main>
  );
};

export default Index;
