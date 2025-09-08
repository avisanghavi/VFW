import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProofSection from "@/components/ProofSection";
import SVMSection from "@/components/SVMSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <ProofSection />
        <SVMSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
