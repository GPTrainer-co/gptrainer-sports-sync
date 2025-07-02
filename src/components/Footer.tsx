import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-gradient-hero text-primary-foreground py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {t('footer.title')}
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
              {t('footer.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" size="lg" className="gap-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary shadow-glass h-14 px-8 text-lg font-medium">
              <Apple className="w-6 h-6" />
              {t('footer.download.ios')}
            </Button>
            <Button variant="outline" size="lg" className="gap-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary shadow-glass h-14 px-8 text-lg font-medium">
              <Smartphone className="w-6 h-6" />
              {t('footer.download.android')}
            </Button>
          </div>
          
          <div className="pt-12 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-3xl font-black">GPTrainer</div>
              <div className="text-sm opacity-75 font-light">
                {t('footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};