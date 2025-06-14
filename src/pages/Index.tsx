
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { UniversitiesSection } from "@/components/home/UniversitiesSection";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <Header />

      <main className="container mx-auto px-4">
        <HeroSection />
        <FeaturesSection />
        <UniversitiesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
