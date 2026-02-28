import { Award, Trophy, Star, Medal } from "lucide-react";

const achievements = [
  {
    title: "Krusma Award",
    description: "Awarded for achieving perfect 10 CGPA in 10th standard examination",
    icon: Trophy,
    highlight: "10 CGPA",
  },
  {
    title: "Academic Excellence",
    description: "Graduated from GITAM University with an outstanding CGPA of 9.44",
    icon: Award,
    highlight: "9.44 CGPA",
  },
  // {
  //   title: "Performance Optimization",
  //   description: "Improved application load times by 40% through strategic code splitting and caching",
  //   icon: Medal,
  //   highlight: "40% Faster",
  // },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Recognition & awards</p>
          <h2 className="section-heading">Achievements</h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto justify-center">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="glass-card p-6 rounded-xl text-center glow-effect group hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="text-primary" size={32} />
              </div>

              {/* Highlight Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                {achievement.highlight}
              </span>

              {/* Content */}
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
