import { Bike, PersonStanding, Waves } from "lucide-react";

const sports = [
  {
    icon: Bike,
    name: "Cycling",
    description: "Power-based training plans for road, mountain, and indoor cycling with structured intervals and endurance builds.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: PersonStanding,
    name: "Running",
    description: "Pace-based training from 5K to marathon distance with tempo runs, intervals, and recovery sessions.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Waves,
    name: "Swimming",
    description: "Structured pool and open water sessions focusing on technique, endurance, and race-specific training.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

export const Sports = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Train Across
            <span className="block text-primary">Multiple Sports</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a triathlete or focused on a single discipline, 
            GPTrainer has specialized training plans for your sport.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <div
              key={sport.name}
              className="group text-center space-y-6 p-8 rounded-2xl hover:bg-accent transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex w-24 h-24 ${sport.bgColor} rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <sport.icon className={`w-12 h-12 ${sport.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {sport.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sport.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};