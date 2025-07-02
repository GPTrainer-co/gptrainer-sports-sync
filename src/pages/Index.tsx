import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Sports } from "@/components/Sports";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Sports />
      <Footer />
    </div>
  );
};

export default Index;
