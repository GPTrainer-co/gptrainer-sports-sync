import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero section
    'hero.title1': 'Train',
    'hero.title2': 'Smarter',
    'hero.subtitle': 'AI-powered training plans for cycling, running, and swimming. Sync with your Garmin device for seamless workout delivery.',
    'hero.cta.primary': 'Get Started Free',
    'hero.cta.secondary': 'Try TrainNow',
    'hero.download.ios': 'App Store',
    'hero.download.android': 'Google Play',
    'hero.app.title': 'GPTrainer',
    'hero.app.subtitle': 'Your AI Training Coach',

    // Features section
    'features.title1': 'Everything You Need to',
    'features.title2': 'Train Better',
    'features.subtitle': 'GPTrainer combines AI intelligence with real-world training expertise to deliver personalized workouts that evolve with you.',
    'features.smart.title': 'Smart Training Plans',
    'features.smart.description': 'AI-generated training plans that adapt to your schedule, fitness level, and goals across cycling, running, and swimming.',
    'features.trainnow.title': 'TrainNow',
    'features.trainnow.description': 'Need a workout right now? Our AI instantly generates the perfect session based on your current fitness and available time.',
    'features.garmin.title': 'Garmin Integration',
    'features.garmin.description': 'Seamlessly sync with your Garmin device. Send workouts directly to your watch and automatically track your progress.',

    // Sports section
    'sports.title1': 'Train Across',
    'sports.title2': 'Multiple Sports',
    'sports.subtitle': 'Whether you\'re a triathlete or focused on a single discipline, GPTrainer has specialized training plans for your sport.',
    'sports.cycling.name': 'Cycling',
    'sports.cycling.description': 'Power-based training plans for road, mountain, and indoor cycling with structured intervals and endurance builds.',
    'sports.running.name': 'Running',
    'sports.running.description': 'Pace-based training from 5K to marathon distance with tempo runs, intervals, and recovery sessions.',
    'sports.swimming.name': 'Swimming',
    'sports.swimming.description': 'Structured pool and open water sessions focusing on technique, endurance, and race-specific training.',

    // Footer section
    'footer.title': 'Ready to Transform Your Training?',
    'footer.subtitle': 'Join thousands of athletes who are already training smarter with GPTrainer.',
    'footer.download.ios': 'Download for iOS',
    'footer.download.android': 'Download for Android',
    'footer.copyright': '© 2024 GPTrainer. All rights reserved.',
  },
  es: {
    // Hero section
    'hero.title1': 'Entrena',
    'hero.title2': 'Mejor',
    'hero.subtitle': 'Planes de entrenamiento impulsados por IA para ciclismo, carrera y natación. Sincroniza con tu dispositivo Garmin para un entrenamiento perfecto.',
    'hero.cta.primary': 'Comenzar Gratis',
    'hero.cta.secondary': 'Probar TrainNow',
    'hero.download.ios': 'App Store',
    'hero.download.android': 'Google Play',
    'hero.app.title': 'GPTrainer',
    'hero.app.subtitle': 'Tu Entrenador IA',

    // Features section
    'features.title1': 'Todo lo que Necesitas para',
    'features.title2': 'Entrenar Mejor',
    'features.subtitle': 'GPTrainer combina inteligencia artificial con experiencia real en entrenamiento para ofrecerte entrenamientos personalizados que evolucionan contigo.',
    'features.smart.title': 'Planes Inteligentes',
    'features.smart.description': 'Planes de entrenamiento generados por IA que se adaptan a tu horario, nivel de fitness y objetivos en ciclismo, carrera y natación.',
    'features.trainnow.title': 'TrainNow',
    'features.trainnow.description': '¿Necesitas entrenar ahora? Nuestra IA genera instantáneamente la sesión perfecta basada en tu condición actual y tiempo disponible.',
    'features.garmin.title': 'Integración Garmin',
    'features.garmin.description': 'Sincronización perfecta con tu dispositivo Garmin. Envía entrenamientos directamente a tu reloj y rastrea automáticamente tu progreso.',

    // Sports section
    'sports.title1': 'Entrena en',
    'sports.title2': 'Múltiples Deportes',
    'sports.subtitle': 'Ya seas triatleta o te enfoques en una sola disciplina, GPTrainer tiene planes de entrenamiento especializados para tu deporte.',
    'sports.cycling.name': 'Ciclismo',
    'sports.cycling.description': 'Planes de entrenamiento basados en potencia para ruta, montaña y ciclismo indoor con intervalos estructurados y construcción de resistencia.',
    'sports.running.name': 'Carrera',
    'sports.running.description': 'Entrenamiento basado en ritmo desde 5K hasta maratón con carreras de tempo, intervalos y sesiones de recuperación.',
    'sports.swimming.name': 'Natación',
    'sports.swimming.description': 'Sesiones estructuradas en piscina y aguas abiertas enfocadas en técnica, resistencia y entrenamiento específico para competencias.',

    // Footer section
    'footer.title': '¿Listo para Transformar tu Entrenamiento?',
    'footer.subtitle': 'Únete a miles de atletas que ya entrenan mejor con GPTrainer.',
    'footer.download.ios': 'Descargar para iOS',
    'footer.download.android': 'Descargar para Android',
    'footer.copyright': '© 2024 GPTrainer. Todos los derechos reservados.',
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLanguage('es');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};