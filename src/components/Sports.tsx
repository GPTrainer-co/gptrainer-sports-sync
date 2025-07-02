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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-hero rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            Train Across
            <span className="block bg-gradient-hero bg-clip-text text-transparent">Multiple Sports</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
            Whether you're a triathlete or focused on a single discipline, 
            GPTrainer has specialized training plans for your sport.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {sports.map((sport, index) => (
            <div
              key={sport.name}
              className="group text-center space-y-8 p-10 lg:p-12 rounded-3xl hover:bg-gradient-glass hover:backdrop-blur-sm hover:border hover:border-white/10 hover:shadow-glass transition-all duration-700 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500"></div>
                <div className="relative inline-flex w-28 h-28 bg-gradient-to-br from-primary to-primary-light rounded-2xl items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-primary">
                  <sport.icon className="w-14 h-14 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {sport.name}
                </h3>
                <p className="text-muted-foreground/90 leading-relaxed text-lg font-light">
                  {sport.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};