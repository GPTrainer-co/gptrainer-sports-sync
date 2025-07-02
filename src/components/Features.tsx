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
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to
            <span className="block text-primary">Train Better</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GPTrainer combines AI intelligence with real-world training expertise 
            to deliver personalized workouts that evolve with you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-8 shadow-subtle hover:shadow-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};