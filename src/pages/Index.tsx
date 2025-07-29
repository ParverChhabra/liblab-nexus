import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <StatsSection />
    </div>
  );
};

export default Index;