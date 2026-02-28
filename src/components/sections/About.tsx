import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get to know me</p>
            <h2 className="section-heading">About Me</h2>
          </div>

          {/* Centered Content */}
          <div className="flex justify-center">
            <div className="max-w-2xl text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in
                building modern web applications. Currently working as an{" "}
                <span className="text-foreground font-medium">
                  Associate Software Engineer at LeadSquared
                </span>
                , I specialize in creating secure, performant, and user-friendly
                solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With expertise in both frontend and backend technologies, I've
                contributed to critical security implementations, performance
                optimizations, and feature development that directly impact
                thousands of users.
              </p>

              {/* Info Cards */}
              <div className="space-y-4 pt-6 text-left">
                <div className="flex items-center gap-4 glass-card p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      GITAM (Deemed to be University)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bachelor's Degree • CGPA: 9.44
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass-card p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LeadSquared</p>
                    <p className="text-sm text-muted-foreground">
                      Associate Software Engineer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass-card p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">India</p>
                    <p className="text-sm text-muted-foreground">
                      Open to  opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
