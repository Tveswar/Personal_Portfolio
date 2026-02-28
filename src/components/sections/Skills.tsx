import { Code2, Database, Shield, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Python",
      ".NET",
      "C#",
      "REST APIs",
      "GraphQL",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      "Field-level Encryption",
      "File-level Encryption",
      "XSS Prevention",
      "Authentication",
      "Authorization",
    ],
  },
  {
    title: "Performance",
    icon: Zap,
    skills: [
      "React.lazy",
      "Code Splitting",
      "Caching Strategies",
      "Bundle Optimization",
      "Lazy Loading",
      "Performance Profiling",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I work with</p>
          <h2 className="section-heading">Skills & Technologies</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-xl glow-effect group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
