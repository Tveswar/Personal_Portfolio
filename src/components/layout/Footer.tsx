import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Thallam Venkata Eswar. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            Built with <Heart size={14} className="text-primary fill-primary" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
