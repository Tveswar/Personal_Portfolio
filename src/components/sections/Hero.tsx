import { Download, Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-100">
            Hi, I'm{" "}
            <span className="gradient-text">Thallam Venkata Eswar</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up opacity-0 animation-delay-200">
            Full Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-300">
            Associate Software Engineer at{" "}
            <span className="text-foreground font-medium">LeadSquared</span>,
            specializing in building secure, performant, and scalable web
            applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="/ThallamVenkataEswar.pdf" download>
                <Download size={20} />
                Download Resume
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/Tveswar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                View GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/thallam-venkata-eswar-a28ba4237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                View LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 animation-delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
