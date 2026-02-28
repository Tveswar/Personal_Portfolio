import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = "Thallam Venkata Eswar | Full Stack Developer";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Full Stack Developer specializing in React.js, Node.js, and enterprise security. Associate Software Engineer at LeadSquared with expertise in performance optimization and secure application development."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
