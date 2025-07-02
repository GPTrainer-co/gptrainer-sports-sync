import { Calendar, Zap, Smartphone } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Training Plans",
    description: "AI-generated training plans that adapt to your schedule, fitness level, and goals across cycling, running, and swimming.",
  },
  {
    icon: Zap,
    title: "TrainNow",
    description: "Need a workout right now? Our AI instantly generates the perfect session based on your current fitness and available time.",
  },
  {
    icon: Smartphone,
    title: "Garmin Integration",
    description: "Seamlessly sync with your Garmin device. Send workouts directly to your watch and automatically track your progress.",
  },
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-hero opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            Everything You Need to
            <span className="block bg-gradient-hero bg-clip-text text-transparent">Train Better</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
            GPTrainer combines AI intelligence with real-world training expertise 
            to deliver personalized workouts that evolve with you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-glass backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-glass border border-white/10 hover:shadow-elegant hover:border-white/20 transition-all duration-700 hover:-translate-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-primary">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground/90 leading-relaxed text-lg font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};