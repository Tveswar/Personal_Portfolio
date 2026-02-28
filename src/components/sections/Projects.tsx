import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hospital Booking System",
    description:
      "A comprehensive healthcare management system allowing patients to book appointments, manage medical records, and connect with healthcare providers seamlessly.",
    tech: ["React.js", "Node.js", "AES-256", "PostgreSQL"],
    github: "https://github.com/Tveswar/Hospital-appointment-booking-system",
    live: "https://github.com/Tveswar/Hospital-appointment-booking-system",
  },
  {
    title: "Mango Quality Assessment using ML",
    description:
      "Machine learning solution for automated mango quality detection using computer vision techniques to classify fruit quality based on visual characteristics.",
    tech: ["Python", "TensorFlow", "OPEN CV", "Scikit-lean", "Pandas", "CNN"],
    github: "https://github.com/Tveswar/Quality-Assessment-of-mangoes-",
    live: "https://github.com/Tveswar/Quality-Assessment-of-mangoes-",
  },
  {
    title: "Cucumber Moisture Analysis",
    description:
      "Agricultural technology solution for analyzing cucumber moisture content using IoT sensors and data analytics to optimize farming conditions.",
    tech: ["Python", "TensorFlow", "OPEN CV", "Scikit-lean", "Pandas", "CNN", "VGG 19"],
    github: "https://github.com/Tveswar/Longitudinal-analysis-of-cucumber-moisture-levels",
    live: "https://github.com/Tveswar/Longitudinal-analysis-of-cucumber-moisture-levels",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I've built</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-xl glow-effect group hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Folder className="text-primary" size={24} />
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-2"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-2"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tech}
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

export default Projects;
