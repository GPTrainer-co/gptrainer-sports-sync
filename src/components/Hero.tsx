import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Smartphone, Apple } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="GPTrainer Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Train
                <span className="block text-primary">Smarter</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                AI-powered training plans for cycling, running, and swimming. 
                Sync with your Garmin device for seamless workout delivery.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Try TrainNow
              </Button>
            </div>
            
            {/* Download Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button variant="download" size="lg" className="gap-3">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="download" size="lg" className="gap-3">
                <Smartphone className="w-5 h-5" />
                Google Play
              </Button>
            </div>
          </div>
          
          {/* Right Column - App Preview */}
          <div className="relative animate-slide-up delay-300">
            <div className="relative mx-auto w-80 h-96 bg-gradient-primary rounded-3xl shadow-primary p-6 animate-float">
              <div className="w-full h-full bg-background rounded-2xl shadow-inner flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">GP</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">GPTrainer</h3>
                  <p className="text-muted-foreground text-sm">Your AI Training Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};