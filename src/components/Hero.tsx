import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Smartphone, Apple } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="GPTrainer Hero"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-[0.9] tracking-tight">
                Train
                <span className="block bg-gradient-hero bg-clip-text text-transparent">Smarter</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed max-w-lg font-light">
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
          
          {/* Right Column - Modern App Preview */}
          <div className="relative animate-slide-up delay-300">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float delay-500"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-hero rounded-full opacity-15 animate-float delay-700"></div>
            
            <div className="relative mx-auto w-80 h-96 bg-gradient-glass backdrop-blur-glass rounded-3xl shadow-elegant border border-white/20 p-6 animate-float">
              <div className="w-full h-full bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl shadow-glass border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-hero rounded-2xl mx-auto flex items-center justify-center shadow-primary">
                    <span className="text-3xl font-black text-primary-foreground">GP</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">GPTrainer</h3>
                    <p className="text-muted-foreground text-sm font-medium">Your AI Training Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};