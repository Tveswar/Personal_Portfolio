import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Tveswar",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/thallam-venkata-eswar-a28ba4237/",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-[#1DA1F2]",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-medium mb-2">Get in touch</p>
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Email CTA */}
          <div className="glass-card p-8 rounded-2xl mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={28} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email me at</p>
                <a
                  href="mailto:tveswar530@gmail.com"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  tveswar530@gmail.com
                </a>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
              <a href="mailto:tveswar530@gmail.com">
                <Send size={20} />
                Send a Message
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-muted-foreground mb-4">Or find me on</p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:-translate-y-1 hover:border-primary/30`}
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
