import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "LeadSquared",
    role: "Associate Software Engineer",
    period: "July 2025 - Present",
    type: "Full-time",
    highlights: [
      "Developed and maintained both frontend and backend components of enterprise applications using React.js and Node.js",
      "Implemented field-level encryption for sensitive data storage, ensuring GDPR and HIPAA compliance",
      "Designed and implemented file-level encryption for secure document handling in cloud storage",
      "Fixed critical XSS vulnerabilities across the application, strengthening security posture",
      "Achieved 40% improvement in initial load time by implementing React.lazy for code splitting",
      "Implemented intelligent caching strategies reducing API calls by 60%",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Participated in code reviews and helped establish coding standards",
    ],
  },
  {
    company: "LeadSquared",
    role: "Software Engineer Intern",
    period: "Jan 2025 - July 2025",
    type: "Internship",
    highlights: [
      "Worked on frontend development using React.js and contributed to backend services",
      "Gained hands-on experience with enterprise-level application development",
      "Learned and implemented best practices for code quality and security",
      "Collaborated with senior engineers on feature development and bug fixes",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Where I've worked</p>
          <h2 className="section-heading">Work Experience</h2>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              {/* Experience Card */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                {/* Left Side - Company Info */}
                <div className="md:text-right md:pr-12 mb-6 md:mb-0">
                  <div className="flex items-center gap-3 md:justify-end mb-2">
                    <Building2 className="text-primary md:order-2" size={20} />
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-lg text-primary font-medium mb-2">
                    {exp.role}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />

                {/* Right Side - Highlights */}
                <div className="glass-card p-6 rounded-xl md:ml-12">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-primary shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
