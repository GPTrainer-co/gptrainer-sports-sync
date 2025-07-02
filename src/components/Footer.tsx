import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of athletes who are already training smarter with GPTrainer.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="gap-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Apple className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button variant="outline" size="lg" className="gap-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Smartphone className="w-5 h-5" />
              Download for Android
            </Button>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-2xl font-bold">GPTrainer</div>
              <div className="text-sm opacity-75">
                © 2024 GPTrainer. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};